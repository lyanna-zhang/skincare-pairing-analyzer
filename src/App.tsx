import { startTransition, useEffect, useState, type FormEvent } from "react";
import {
  createProduct,
  deleteProduct,
  fetchPairings,
  fetchProducts,
  fetchTags,
} from "./lib/shelfService";
import { ProductNameInput } from "./components/ProductNameInput";
import type { BeautyProduct } from "./lib/openBeautyFacts";
import { conflictLevelLabels } from "./lib/catalog";
import {
  loadLocalShelfSnapshot,
  saveLocalShelfSnapshot,
} from "./lib/localCache";
import type {
  PairingAnalysis,
  PairingReason,
  Product,
  ProductInput,
  ProductPairConflict,
  TagMetadata,
} from "./types";

const SENSITIVE_SKIN_KEY = "skinpair_sensitive_skin";

const buildTagLookup = (tags: TagMetadata[]): Record<string, TagMetadata> =>
  Object.fromEntries(tags.map((tag) => [tag.code, tag]));

const getPrimaryReason = (reasons: PairingReason[]) => reasons[0] ?? null;

const getShortReasonText = (reason: PairingReason | null, fallback: string) => {
  const source = reason?.recommendation?.trim() || fallback.trim();
  return source;
};

const formatSavedAt = (savedAt: string | null) => {
  if (!savedAt) return null;
  const date = new Date(savedAt);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

const ConflictRow = ({
  item,
  formatTagLabel,
}: {
  item: ProductPairConflict;
  formatTagLabel: (tagCode: string) => string;
}) => {
  const primaryReason = getPrimaryReason(item.reasons);
  const tagLabel = primaryReason
    ? `${formatTagLabel(primaryReason.tags[0])} + ${formatTagLabel(primaryReason.tags[1])}`
    : "Ingredient overlap";

  return (
    <article className={`conflict-row conflict-row--${item.conflict_level}`}>
      <div className="conflict-row-body">
        <span className="conflict-row-level">{conflictLevelLabels[item.conflict_level]}</span>
        <h3 className="conflict-row-names">
          <span>{item.products[0].name}</span>
          <span className="conflict-row-plus" aria-hidden="true">×</span>
          <span>{item.products[1].name}</span>
        </h3>
      </div>
      <span className="conflict-row-tag">{tagLabel}</span>
    </article>
  );
};


const SkinTypeToggle = ({
  isSensitive,
  onChange,
}: {
  isSensitive: boolean;
  onChange: (val: boolean) => void;
}) => (
  <div className="skin-toggle" role="group" aria-label="Skin type setting">
    <button
      type="button"
      className={`skin-toggle-option${!isSensitive ? " skin-toggle-option--active" : ""}`}
      onClick={() => onChange(false)}
    >
      Normal Skin
    </button>
    <button
      type="button"
      className={`skin-toggle-option${isSensitive ? " skin-toggle-option--active" : ""}`}
      onClick={() => onChange(true)}
    >
      Sensitive Skin
    </button>
  </div>
);

function App() {
  const [localSnapshot] = useState(() => loadLocalShelfSnapshot());
  const [products, setProducts] = useState<Product[]>(localSnapshot?.products ?? []);
  const [pairings, setPairings] = useState<PairingAnalysis | null>(localSnapshot?.pairings ?? null);
  const [tags, setTags] = useState<TagMetadata[]>(localSnapshot?.tags ?? []);
  const [tagLookup, setTagLookup] = useState<Record<string, TagMetadata>>(
    buildTagLookup(localSnapshot?.tags ?? []),
  );
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [name, setName] = useState("");
  const [ingredientsText, setIngredientsText] = useState("");
  const [autofilled, setAutofilled] = useState(false);
  const [isLoading, setIsLoading] = useState(!localSnapshot);
  const [isSyncingSavedShelf, setIsSyncingSavedShelf] = useState(Boolean(localSnapshot));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingProductId, setDeletingProductId] = useState<number | null>(null);
  const [isRefreshingAnalysis, setIsRefreshingAnalysis] = useState(false);
  const [localSnapshotSavedAt, setLocalSnapshotSavedAt] = useState<string | null>(
    localSnapshot?.savedAt ?? null,
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSensitiveSkin, setIsSensitiveSkinState] = useState<boolean>(() => {
    try {
      return localStorage.getItem(SENSITIVE_SKIN_KEY) === "true";
    } catch {
      return false;
    }
  });

  const setIsSensitiveSkin = (val: boolean) => {
    setIsSensitiveSkinState(val);
    try {
      localStorage.setItem(SENSITIVE_SKIN_KEY, String(val));
    } catch {
      // ignore
    }
  };

  const persistSnapshot = (
    nextProducts: Product[],
    nextPairings: PairingAnalysis | null,
    nextTags: TagMetadata[],
  ) => {
    const savedAt = saveLocalShelfSnapshot({
      products: nextProducts,
      pairings: nextPairings,
      tags: nextTags,
    });
    if (savedAt) setLocalSnapshotSavedAt(savedAt);
  };

  const loadSnapshot = async (mode: "initial" | "refresh" = "refresh") => {
    if (mode === "initial") {
      if (localSnapshot) {
        setIsSyncingSavedShelf(true);
      } else {
        setIsLoading(true);
      }
    } else {
      setIsRefreshingAnalysis(true);
    }
    setErrorMessage(null);

    try {
      const [nextProducts, nextPairings, nextTags] = await Promise.all([
        fetchProducts(),
        fetchPairings(),
        fetchTags(),
      ]);
      const nextSavedAt =
        saveLocalShelfSnapshot({
          products: nextProducts,
          pairings: nextPairings,
          tags: nextTags,
        }) ?? localSnapshotSavedAt;

      startTransition(() => {
        setProducts(nextProducts);
        setPairings(nextPairings);
        setTags(nextTags);
        setTagLookup(buildTagLookup(nextTags));
        setLocalSnapshotSavedAt(nextSavedAt);
      });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to sync local analysis.");
    } finally {
      if (mode === "initial") {
        setIsLoading(false);
        setIsSyncingSavedShelf(false);
      } else {
        setIsRefreshingAnalysis(false);
      }
    }
  };

  useEffect(() => {
    void loadSnapshot("initial");
  }, []);

  const handleRetry = async () => {
    await loadSnapshot("refresh");
  };

  const displayedProducts = showAllProducts ? products : products.slice(0, 3);
  const formattedSavedAt = formatSavedAt(localSnapshotSavedAt);

  const handleAddProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !ingredientsText.trim()) return;

    const payload: ProductInput = {
      name: name.trim(),
      ingredients_text: ingredientsText.trim(),
    };

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const createdProduct = await createProduct(payload);
      const nextPairings = await fetchPairings();
      const nextProducts = [...products, createdProduct];
      persistSnapshot(nextProducts, nextPairings, tags);

      startTransition(() => {
        setProducts(nextProducts);
        setPairings(nextPairings);
        setName("");
        setIngredientsText("");
        setAutofilled(false);
        setShowAllProducts(true);
      });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to save product.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAnalyzeShelf = async () => {
    await loadSnapshot("refresh");
  };

  const handleDeleteProduct = async (productId: number) => {
    setDeletingProductId(productId);
    setErrorMessage(null);

    try {
      await deleteProduct(productId);
      const nextPairings = await fetchPairings();
      const nextProducts = products.filter((product) => product.id !== productId);
      persistSnapshot(nextProducts, nextPairings, tags);

      startTransition(() => {
        setProducts(nextProducts);
        setPairings(nextPairings);
      });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to delete product.");
    } finally {
      setDeletingProductId(null);
    }
  };

  const handleAutofill = (product: BeautyProduct) => {
    setIngredientsText(product.ingredients_text);
    setAutofilled(true);
  };

  const formatTagLabel = (tagCode: string) => tagLookup[tagCode]?.name ?? tagCode;

  const allConflicts = pairings?.conflicts ?? [];
  const displayedConflicts = isSensitiveSkin
    ? allConflicts
    : allConflicts.filter((c) => c.conflict_level !== "caution");
  const hiddenCautionCount = isSensitiveSkin
    ? 0
    : allConflicts.filter((c) => c.conflict_level === "caution").length;

  return (
    <div className="page-shell">
      <div className="page-overlay">
        <section className="product-bar" aria-label="Product information">
          <div className="product-bar-inner">
            <span className="product-bar-brand">SkinPair</span>
            <span className="product-bar-copy">Check skincare conflicts before you layer.</span>
          </div>
        </section>

        <main className="page-main">
          <header className="hero">
            <h1 className="hero-title">Effortless Precision.</h1>
            <p className="hero-subtitle">
              Detect ingredient conflicts before you layer — so your routine works precisely as intended.
            </p>
          </header>

          {errorMessage ? (
            <div className="status-banner status-banner--error" role="alert">
              <div className="status-banner-copy">
                <span>{errorMessage}</span>
                <button
                  className="status-banner-action"
                  type="button"
                  onClick={() => void handleRetry()}
                >
                  Retry
                </button>
              </div>
            </div>
          ) : null}

          {isLoading ? (
            <div className="status-banner status-banner--info">Loading your shelf and pairing rules...</div>
          ) : null}

          {!errorMessage && isSyncingSavedShelf ? (
            <div className="status-banner status-banner--info">
              {formattedSavedAt
                ? `Showing the shelf saved in this browser from ${formattedSavedAt} while refreshing local analysis.`
                : "Refreshing local shelf analysis."}
            </div>
          ) : null}

          <section className="workspace-grid">
            <section className="module">
              <h2 className="module-title">Add Product</h2>
              <p className="module-helper">
                Add a product to compare it against the rest of your shelf.
              </p>

              <form className="product-form" onSubmit={handleAddProduct}>
                <div className="field">
                  <span className="field-label">Product Name</span>
                  <ProductNameInput
                    value={name}
                    onChange={(val) => {
                      setName(val);
                      if (autofilled) setAutofilled(false);
                    }}
                    onAutofill={handleAutofill}
                    disabled={isSubmitting || isLoading}
                  />
                </div>

                <label className="field">
                  <span className="field-label">Ingredients</span>
                  {autofilled && (
                    <div className="autofill-filled-banner">
                      <span className="autofill-filled-icon material-symbols-outlined">check_circle</span>
                      Ingredients autofilled — you can edit them below.
                    </div>
                  )}
                  <textarea
                    className="field-input field-textarea"
                    placeholder="Paste full ingredient list here, or select a product above to autofill..."
                    rows={5}
                    value={ingredientsText}
                    onChange={(event) => setIngredientsText(event.target.value)}
                  />
                </label>

                <div className="module-button-row">
                  <button className="primary-button" type="submit" disabled={isSubmitting || isLoading}>
                    {isSubmitting ? "Saving..." : "Add to Shelf"}
                  </button>
                </div>
              </form>
            </section>

            <section className="module">
              <h2 className="module-title">My Shelf</h2>
              <p className="module-helper">
                Your current shelf, ready for a quick compatibility check.
              </p>

              {products.length === 0 ? (
                <p className="empty-state">No saved products yet.</p>
              ) : (
                <div className="shelf-list">
                  {displayedProducts.map((product) => (
                    <article className="shelf-item" key={product.id}>
                      <button
                        aria-label={`Remove ${product.name} from your shelf`}
                        className="shelf-delete-button"
                        type="button"
                        onClick={() => void handleDeleteProduct(product.id)}
                        disabled={deletingProductId === product.id}
                      >
                        <span aria-hidden="true">{deletingProductId === product.id ? "..." : "×"}</span>
                      </button>

                      <div className="shelf-copy">
                        <p className="shelf-name">{product.name}</p>
                      </div>

                      {product.final_tags.length > 0 ? (
                        <div className="shelf-tags">
                          {product.final_tags.map((tag) => (
                            <span className="shelf-tag" key={`${product.id}-${tag}`}>
                              {formatTagLabel(tag)}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </article>
                  ))}
                </div>
              )}

              {products.length > 3 ? (
                <button
                  className="show-all-button"
                  type="button"
                  onClick={() => setShowAllProducts((isExpanded) => !isExpanded)}
                >
                  <span>{showAllProducts ? "SHOW LESS" : "SHOW ALL"}</span>
                  <span className="material-symbols-outlined show-all-icon">
                    {showAllProducts ? "expand_less" : "expand_more"}
                  </span>
                </button>
              ) : null}
            </section>
          </section>

          <section className="analysis-module">
            <div className="analysis-header">
              <div className="analysis-intro">
                <div className="analysis-title-row">
                  <h2 className="module-title">Shelf Analysis</h2>
                  <SkinTypeToggle isSensitive={isSensitiveSkin} onChange={setIsSensitiveSkin} />
                </div>
              </div>
              <div className="analysis-action">
                <button
                  className="analyze-button"
                  type="button"
                  onClick={handleAnalyzeShelf}
                  disabled={isLoading || isRefreshingAnalysis}
                >
                  {isRefreshingAnalysis ? "Analyzing..." : "Analyze My Shelf"}
                </button>
              </div>
            </div>

            <div className="analysis-summary">
              {pairings ? (
                displayedConflicts.length > 0 ? (
                  <span className="analysis-summary-stat analysis-summary-stat--conflicts">
                    {displayedConflicts.length} conflict{displayedConflicts.length !== 1 ? "s" : ""} detected
                  </span>
                ) : (
                  <span className="analysis-summary-stat analysis-summary-stat--clear">
                    All clear — no conflicts on your shelf
                  </span>
                )
              ) : (
                <span className="analysis-summary-stat">
                  Add products and run an analysis to check ingredient conflicts.
                </span>
              )}
              {hiddenCautionCount > 0 && (
                <span className="analysis-summary-hidden">
                  {hiddenCautionCount} caution-level {hiddenCautionCount === 1 ? "conflict" : "conflicts"} hidden —{" "}
                  <button
                    type="button"
                    className="hidden-conflicts-link"
                    onClick={() => setIsSensitiveSkin(true)}
                  >
                    switch to Sensitive Skin
                  </button>
                </span>
              )}
            </div>

            {displayedConflicts.length > 0 ? (
              <div className="conflicts-list">
                {displayedConflicts.map((item) => (
                  <ConflictRow
                    key={`${item.products.map((p) => p.id).join("-")}-${item.conflict_level}`}
                    item={item}
                    formatTagLabel={formatTagLabel}
                  />
                ))}
              </div>
            ) : pairings ? (
              <div className="conflicts-empty">
                <span className="conflicts-empty-icon" aria-hidden="true">✓</span>
                <p className="conflicts-empty-text">Your current shelf has no conflicting ingredient combinations.</p>
              </div>
            ) : null}
          </section>
        </main>

        <footer className="footer">
          <div className="footer-inner">
            <span className="footer-copy">© 2026 SkinPair. Effortless Precision.</span>
            <div className="footer-author" aria-label="Site author">
              <span className="footer-author-text">Built by Lyanna</span>
              <span className="footer-author-separator" aria-hidden="true">•</span>
              <a
                className="footer-github-link"
                href="https://github.com/lyanna-zhang"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Lyanna's GitHub profile"
              >
                <span className="footer-github-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.22.72-.51v-1.87c-2.94.64-3.56-1.25-3.56-1.25-.48-1.19-1.17-1.51-1.17-1.51-.96-.66.07-.65.07-.65 1.06.08 1.62 1.08 1.62 1.08.95 1.6 2.48 1.14 3.09.87.09-.67.37-1.14.67-1.4-2.35-.26-4.82-1.16-4.82-5.17 0-1.14.41-2.07 1.08-2.8-.11-.26-.47-1.31.1-2.73 0 0 .88-.28 2.88 1.07A10.14 10.14 0 0 1 12 6.84c.91 0 1.83.12 2.69.35 2-1.35 2.88-1.07 2.88-1.07.57 1.42.21 2.47.1 2.73.67.73 1.08 1.66 1.08 2.8 0 4.02-2.48 4.91-4.84 5.16.38.32.72.95.72 1.92v2.84c0 .29.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
