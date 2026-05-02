export interface BeautyProduct {
  product_name: string;
  ingredients_text: string;
}

interface SearchResponse {
  products: BeautyProduct[];
}

const isLikelyEnglish = (text: string): boolean => {
  const nonAscii = text.replace(/[\x00-\x7F]/g, "").length;
  return nonAscii / text.length < 0.15;
};

export const searchBeautyProducts = async (
  query: string,
  signal?: AbortSignal,
): Promise<BeautyProduct[]> => {
  if (!query.trim()) return [];

  const url = new URL("https://world.openbeautyfacts.org/cgi/search.pl");
  url.searchParams.set("search_terms", query.trim());
  url.searchParams.set("search_simple", "1");
  url.searchParams.set("action", "process");
  url.searchParams.set("json", "1");
  url.searchParams.set("page_size", "24");
  url.searchParams.set("lc", "en");
  url.searchParams.set("fields", "product_name,ingredients_text,lang");

  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error("Failed to search products.");
  }

  const data = (await response.json()) as SearchResponse;

  return (data.products ?? [])
    .filter(
      (p) =>
        p.product_name?.trim() &&
        p.ingredients_text?.trim() &&
        isLikelyEnglish(p.product_name),
    )
    .slice(0, 8);
};
