import { pairingData } from "./pairingData";
import type {
  PairingAnalysis,
  Product,
  ProductAnalysis,
  ProductInput,
  ProductPairCompatibility,
  ProductPairConflict,
  ProductType,
  TagMetadata,
} from "../types";

const PRODUCT_TYPE_ORDER: Record<ProductType, number> = {
  cleanser: 10,
  toner: 20,
  serum: 30,
  moisturizer: 40,
  sunscreen: 50,
  mask: 60,
  other: 70,
};

const CONFLICT_PRIORITY = {
  avoid: 30,
  caution: 20,
  duplicate: 10,
} as const;

const COMPATIBILITY_PRIORITY = {
  recommended: 20,
  supportive: 10,
} as const;

const normalizeText = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");

const normalizeList = (values: string[]) => {
  const dedupedValues: string[] = [];
  const seenValues = new Set<string>();

  values.forEach((value) => {
    if (seenValues.has(value)) {
      return;
    }

    seenValues.add(value);
    dedupedValues.push(value);
  });

  return dedupedValues;
};

const pairKey = (left: string, right: string) => [left, right].sort().join("::");

const conflictRules = new Map(
  pairingData.conflicts.map((rule) => [pairKey(rule.tag_a, rule.tag_b), rule] as const),
);

const compatibilityRules = new Map(
  pairingData.compatibilities.map((rule) => [pairKey(rule.tag_a, rule.tag_b), rule] as const),
);

export const getTagCatalog = (): TagMetadata[] => pairingData.tags;

export const detectProductType = (name: string): ProductType => {
  const normalizedName = normalizeText(name);

  for (const keywordRule of pairingData.productTypeKeywords) {
    if (!normalizedName.includes(normalizeText(keywordRule.keyword))) {
      continue;
    }

    return keywordRule.product_type;
  }

  return "other";
};

export const detectTags = (ingredientsText: string): string[] => {
  const normalizedIngredients = normalizeText(ingredientsText);
  const exactTokens = new Set(
    normalizedIngredients
      .replace(/;/g, ",")
      .split(",")
      .map((token: string) => token.trim())
      .filter(Boolean),
  );

  const matchedTags: string[] = [];

  pairingData.tagKeywords.forEach((keywordRule) => {
    const normalizedKeyword = normalizeText(keywordRule.keyword);
    if (!normalizedKeyword) {
      return;
    }

    const didMatch =
      keywordRule.match_type === "exact"
        ? exactTokens.has(normalizedKeyword)
        : normalizedIngredients.includes(normalizedKeyword);

    if (didMatch) {
      matchedTags.push(keywordRule.tag_code);
    }
  });

  return normalizeList(matchedTags);
};

export const analyzeProduct = (payload: ProductInput): ProductAnalysis => {
  const detectedTags = detectTags(payload.ingredients_text);
  const normalizedManualTags = normalizeList(payload.manual_tags ?? []);
  const finalTags = normalizeList(
    payload.manual_tags !== undefined ? normalizedManualTags : detectedTags,
  );

  return {
    name: payload.name,
    product_type: payload.product_type ?? detectProductType(payload.name),
    ingredients_text: payload.ingredients_text,
    detected_tags: detectedTags,
    manual_tags: normalizedManualTags,
    final_tags: finalTags,
  };
};

export const buildProduct = (productId: number, payload: ProductInput): Product => ({
  id: productId,
  is_active: true,
  ...analyzeProduct(payload),
});

const sortProducts = (products: Product[]) =>
  [...products].sort(
    (left, right) =>
      PRODUCT_TYPE_ORDER[left.product_type] - PRODUCT_TYPE_ORDER[right.product_type] ||
      left.name.localeCompare(right.name, undefined, { sensitivity: "base" }),
  );

const serializeReasons = <
  TPriorityMap extends Record<string, number>,
  TReason extends {
    tags: [string, string];
    recommendation: string;
    notes: string;
    level: keyof TPriorityMap;
  },
>(
  reasons: TReason[],
  priorityMap: TPriorityMap,
) =>
  [...reasons]
    .sort(
      (left, right) =>
        priorityMap[right.level] - priorityMap[left.level] ||
        left.tags[0].localeCompare(right.tags[0]) ||
        left.tags[1].localeCompare(right.tags[1]),
    )
    .map((reason) => ({
      tags: reason.tags,
      recommendation: reason.recommendation,
      ...(reason.notes ? { notes: reason.notes } : {}),
    }));

const collectReasons = (
  left: Product,
  right: Product,
  rules: Map<string, { level: string; recommendation: string; notes: string }>,
) => {
  const reasons: Array<{
    tags: [string, string];
    level: string;
    recommendation: string;
    notes: string;
  }> = [];
  const seenPairs = new Set<string>();

  left.final_tags.forEach((leftTag) => {
    right.final_tags.forEach((rightTag) => {
      const normalizedPair = [leftTag, rightTag].sort() as [string, string];
      const normalizedPairKey = pairKey(normalizedPair[0], normalizedPair[1]);
      if (seenPairs.has(normalizedPairKey)) {
        return;
      }

      seenPairs.add(normalizedPairKey);
      const rule = rules.get(normalizedPairKey);
      if (!rule) {
        return;
      }

      reasons.push({
        tags: normalizedPair,
        level: rule.level,
        recommendation: rule.recommendation,
        notes: rule.notes,
      });
    });
  });

  return reasons;
};

export const analyzePairings = (products: Product[]): PairingAnalysis => {
  const sortedProducts = sortProducts(products);
  const conflicts: ProductPairConflict[] = [];
  const compatibilities: ProductPairCompatibility[] = [];

  for (let leftIndex = 0; leftIndex < sortedProducts.length; leftIndex += 1) {
    for (let rightIndex = leftIndex + 1; rightIndex < sortedProducts.length; rightIndex += 1) {
      const left = sortedProducts[leftIndex];
      const right = sortedProducts[rightIndex];
      const conflictReasons = collectReasons(left, right, conflictRules);
      const compatibilityReasons = collectReasons(left, right, compatibilityRules);

      if (conflictReasons.length > 0) {
        const topConflict = [...conflictReasons].sort(
          (first, second) =>
            CONFLICT_PRIORITY[second.level as keyof typeof CONFLICT_PRIORITY] -
              CONFLICT_PRIORITY[first.level as keyof typeof CONFLICT_PRIORITY] ||
            first.recommendation.localeCompare(second.recommendation),
        )[0];

        const isRinseOff = left.product_type === "cleanser" || right.product_type === "cleanser";
        const rawLevel = topConflict.level as ProductPairConflict["conflict_level"];
        const effectiveLevel: ProductPairConflict["conflict_level"] =
          isRinseOff && rawLevel === "avoid" ? "caution" : rawLevel;

        conflicts.push({
          products: [
            { id: left.id, name: left.name, product_type: left.product_type },
            { id: right.id, name: right.name, product_type: right.product_type },
          ],
          conflict_level: effectiveLevel,
          recommendation: topConflict.recommendation,
          reasons: serializeReasons(
            conflictReasons.map((reason) => ({
              ...reason,
              level: reason.level as keyof typeof CONFLICT_PRIORITY,
            })),
            CONFLICT_PRIORITY,
          ),
        });
        continue;
      }

      if (compatibilityReasons.length > 0) {
        const topCompatibility = [...compatibilityReasons].sort(
          (first, second) =>
            COMPATIBILITY_PRIORITY[second.level as keyof typeof COMPATIBILITY_PRIORITY] -
              COMPATIBILITY_PRIORITY[first.level as keyof typeof COMPATIBILITY_PRIORITY] ||
            first.recommendation.localeCompare(second.recommendation),
        )[0];

        compatibilities.push({
          products: [
            { id: left.id, name: left.name, product_type: left.product_type },
            { id: right.id, name: right.name, product_type: right.product_type },
          ],
          compatibility_level:
            topCompatibility.level as ProductPairCompatibility["compatibility_level"],
          recommendation: topCompatibility.recommendation,
          reasons: serializeReasons(
            compatibilityReasons.map((reason) => ({
              ...reason,
              level: reason.level as keyof typeof COMPATIBILITY_PRIORITY,
            })),
            COMPATIBILITY_PRIORITY,
          ),
        });
      }
    }
  }

  conflicts.sort(
    (left, right) =>
      CONFLICT_PRIORITY[right.conflict_level] - CONFLICT_PRIORITY[left.conflict_level] ||
      left.products[0].name.localeCompare(right.products[0].name, undefined, { sensitivity: "base" }) ||
      left.products[1].name.localeCompare(right.products[1].name, undefined, { sensitivity: "base" }),
  );

  compatibilities.sort(
    (left, right) =>
      COMPATIBILITY_PRIORITY[right.compatibility_level] -
        COMPATIBILITY_PRIORITY[left.compatibility_level] ||
      left.products[0].name.localeCompare(right.products[0].name, undefined, { sensitivity: "base" }) ||
      left.products[1].name.localeCompare(right.products[1].name, undefined, { sensitivity: "base" }),
  );

  return {
    conflicts,
    compatibilities,
  };
};
