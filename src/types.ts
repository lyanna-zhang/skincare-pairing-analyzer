export type ProductType =
  | "cleanser"
  | "toner"
  | "serum"
  | "moisturizer"
  | "sunscreen"
  | "mask"
  | "other";

export type ConflictLevel = "avoid" | "caution" | "duplicate";
export type CompatibilityLevel = "recommended" | "supportive";
export type TagGroupType = "active" | "support";

export interface TagMetadata {
  code: string;
  group_type: TagGroupType;
  sort_order: number;
  name: string;
  description: string;
}

export interface ProductInput {
  name: string;
  product_type?: ProductType;
  ingredients_text: string;
  manual_tags?: string[];
}

export interface ProductAnalysis {
  name: string;
  product_type: ProductType;
  ingredients_text: string;
  detected_tags: string[];
  manual_tags: string[];
  final_tags: string[];
}

export interface Product extends ProductAnalysis {
  id: number;
  is_active: boolean;
}

export interface PairingProductRef {
  id: number;
  name: string;
  product_type: ProductType;
}

export interface PairingReason {
  tags: [string, string];
  recommendation: string;
  notes?: string;
}

export interface ProductPairConflict {
  products: [PairingProductRef, PairingProductRef];
  conflict_level: ConflictLevel;
  recommendation: string;
  reasons: PairingReason[];
}

export interface ProductPairCompatibility {
  products: [PairingProductRef, PairingProductRef];
  compatibility_level: CompatibilityLevel;
  recommendation: string;
  reasons: PairingReason[];
}

export interface PairingAnalysis {
  conflicts: ProductPairConflict[];
  compatibilities: ProductPairCompatibility[];
}
