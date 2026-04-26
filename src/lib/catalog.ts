import type { CompatibilityLevel, ConflictLevel, ProductType } from "../types";

export const productTypeLabels: Record<ProductType, string> = {
  cleanser: "Cleanser",
  toner: "Toner",
  serum: "Serum",
  moisturizer: "Moisturizer",
  sunscreen: "Sunscreen",
  mask: "Mask",
  other: "Other",
};

export const conflictLevelLabels: Record<ConflictLevel, string> = {
  avoid: "Avoid Together",
  caution: "Use Caution",
  duplicate: "Overlapping Layer",
};

export const compatibilityLevelLabels: Record<CompatibilityLevel, string> = {
  recommended: "Recommended",
  supportive: "Supportive",
};
