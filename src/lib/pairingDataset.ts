import type {
  CompatibilityLevel,
  ConflictLevel,
  ProductType,
  TagMetadata,
} from "../types";

export interface TagKeyword {
  tag_code: string;
  keyword: string;
  match_type: "exact" | "contains";
  priority: number;
}

export interface ProductTypeKeyword {
  keyword: string;
  product_type: ProductType;
  priority: number;
}

export interface ConflictRule {
  tag_a: string;
  tag_b: string;
  level: ConflictLevel;
  recommendation: string;
  notes: string;
}

export interface CompatibilityRule {
  tag_a: string;
  tag_b: string;
  level: CompatibilityLevel;
  recommendation: string;
  notes: string;
}

export const pairingData: {
  tags: TagMetadata[];
  tagKeywords: TagKeyword[];
  conflicts: ConflictRule[];
  compatibilities: CompatibilityRule[];
  productTypeKeywords: ProductTypeKeyword[];
} = {
  "tags": [
    {
      "code": "aha",
      "group_type": "active",
      "sort_order": 10,
      "name": "AHA",
      "description": "Alpha hydroxy acids increase surface exfoliation."
    },
    {
      "code": "bha",
      "group_type": "active",
      "sort_order": 20,
      "name": "BHA",
      "description": "Beta hydroxy acids are lipophilic exfoliants used for pores and acne-prone skin."
    },
    {
      "code": "pha",
      "group_type": "active",
      "sort_order": 30,
      "name": "PHA",
      "description": "Polyhydroxy acids exfoliate more gently than typical AHAs."
    },
    {
      "code": "retinoid",
      "group_type": "active",
      "sort_order": 40,
      "name": "Retinoid",
      "description": "Vitamin A derivatives used for acne and photoaging care."
    },
    {
      "code": "vitamin_c",
      "group_type": "active",
      "sort_order": 50,
      "name": "Vitamin C",
      "description": "Direct vitamin C, especially L-ascorbic acid, is used for antioxidant support and brightening."
    },
    {
      "code": "vitamin_c_derivatives",
      "group_type": "active",
      "sort_order": 55,
      "name": "Vitamin C Derivatives",
      "description": "Stabilized vitamin C derivatives are commonly used for brightening and antioxidant support with improved tolerability."
    },
    {
      "code": "resveratrol",
      "group_type": "active",
      "sort_order": 58,
      "name": "Resveratrol",
      "description": "Polyphenol antioxidant used for environmental defense and tone support."
    },
    {
      "code": "ferulic_acid",
      "group_type": "active",
      "sort_order": 60,
      "name": "Ferulic Acid",
      "description": "Antioxidant acid often paired with vitamin C and vitamin E to improve photoprotection support."
    },
    {
      "code": "niacinamide",
      "group_type": "active",
      "sort_order": 60,
      "name": "Niacinamide",
      "description": "Vitamin B3 derivative used for barrier support and tone-evening."
    },
    {
      "code": "vitamin_e",
      "group_type": "support",
      "sort_order": 65,
      "name": "Vitamin E",
      "description": "Lipid-soluble antioxidant commonly used to support barrier comfort and antioxidant blends."
    },
    {
      "code": "euk_134",
      "group_type": "active",
      "sort_order": 68,
      "name": "EUK 134",
      "description": "Manganese-based antioxidant active typically kept away from direct acids and some strong antioxidant combinations."
    },
    {
      "code": "benzoyl_peroxide",
      "group_type": "active",
      "sort_order": 70,
      "name": "Benzoyl Peroxide",
      "description": "Oxidizing antimicrobial ingredient used as an acne treatment."
    },
    {
      "code": "azelaic_acid",
      "group_type": "active",
      "sort_order": 80,
      "name": "Azelaic Acid",
      "description": "Dicarboxylic acid used for acne and uneven tone support."
    },
    {
      "code": "sulfur",
      "group_type": "active",
      "sort_order": 85,
      "name": "Sulfur",
      "description": "Sulfur is a keratolytic acne-support ingredient that can become drying in stronger active routines."
    },
    {
      "code": "tea_tree_oil",
      "group_type": "active",
      "sort_order": 88,
      "name": "Tea Tree Oil",
      "description": "A fragrant essential oil used in blemish-focused formulas that may increase irritation when overlayered."
    },
    {
      "code": "peptides",
      "group_type": "support",
      "sort_order": 90,
      "name": "Peptides",
      "description": "Signal and carrier peptides are supportive conditioning ingredients."
    },
    {
      "code": "alpha_arbutin",
      "group_type": "active",
      "sort_order": 92,
      "name": "Alpha Arbutin",
      "description": "Pigment-evening active used for dark spot support."
    },
    {
      "code": "growth_factors",
      "group_type": "support",
      "sort_order": 94,
      "name": "Growth Factors",
      "description": "Growth factor actives are recovery-oriented conditioning ingredients often used in reparative routines."
    },
    {
      "code": "kojic_acid",
      "group_type": "active",
      "sort_order": 95,
      "name": "Kojic Acid",
      "description": "Pigment-focused brightening active often used in discoloration routines."
    },
    {
      "code": "tranexamic_acid",
      "group_type": "active",
      "sort_order": 98,
      "name": "Tranexamic Acid",
      "description": "Tone-evening active commonly used for post-inflammatory marks and discoloration support."
    },
    {
      "code": "licorice_extract",
      "group_type": "active",
      "sort_order": 99,
      "name": "Licorice Extract",
      "description": "Botanical brightening and soothing extract used for redness and uneven tone support."
    },
    {
      "code": "ceramides",
      "group_type": "support",
      "sort_order": 100,
      "name": "Ceramides",
      "description": "Skin-identical lipids that support stratum corneum barrier function."
    },
    {
      "code": "hyaluronic_acid",
      "group_type": "support",
      "sort_order": 110,
      "name": "Hyaluronic Acid",
      "description": "Humectant polymers that bind and retain water on skin."
    },
    {
      "code": "panthenol",
      "group_type": "support",
      "sort_order": 120,
      "name": "Panthenol",
      "description": "Pro-vitamin B5 humectant that helps soothe skin and support barrier recovery."
    },
    {
      "code": "allantoin",
      "group_type": "support",
      "sort_order": 130,
      "name": "Allantoin",
      "description": "Skin-soothing support ingredient often used to reduce visible irritation."
    },
    {
      "code": "centella_asiatica",
      "group_type": "support",
      "sort_order": 140,
      "name": "Centella Asiatica",
      "description": "Cica-family soothing botanical used for redness and barrier comfort support."
    }
  ],
  "tagKeywords": [
    {
      "tag_code": "aha",
      "keyword": "glycolic acid",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "bha",
      "keyword": "salicylic acid",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "pha",
      "keyword": "gluconolactone",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "retinoid",
      "keyword": "retinol",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "vitamin_c",
      "keyword": "ascorbic acid",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "ethyl ascorbic acid",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "resveratrol",
      "keyword": "resveratrol",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "ferulic_acid",
      "keyword": "ferulic acid",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "niacinamide",
      "keyword": "niacinamide",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "vitamin_e",
      "keyword": "tocopherol",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "euk_134",
      "keyword": "euk 134",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "benzoyl_peroxide",
      "keyword": "benzoyl peroxide",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "azelaic_acid",
      "keyword": "azelaic acid",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "sulfur",
      "keyword": "sulfur",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "tea_tree_oil",
      "keyword": "tea tree oil",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "peptides",
      "keyword": "peptide",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "alpha_arbutin",
      "keyword": "alpha-arbutin",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "growth_factors",
      "keyword": "epidermal growth factor",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "kojic_acid",
      "keyword": "kojic acid",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "tranexamic_acid",
      "keyword": "tranexamic acid",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "licorice_extract",
      "keyword": "licorice root extract",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "ceramides",
      "keyword": "ceramide",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "hyaluronic_acid",
      "keyword": "hyaluronic acid",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "panthenol",
      "keyword": "panthenol",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "allantoin",
      "keyword": "allantoin",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "centella_asiatica",
      "keyword": "centella asiatica",
      "match_type": "contains",
      "priority": 10
    },
    {
      "tag_code": "vitamin_c",
      "keyword": "l-ascorbic acid",
      "match_type": "contains",
      "priority": 15
    },
    {
      "tag_code": "aha",
      "keyword": "lactic acid",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "bha",
      "keyword": "acide salicylique",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "pha",
      "keyword": "lactobionic acid",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "retinoid",
      "keyword": "retinal",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "3-o-ethyl ascorbic acid",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "resveratrol",
      "keyword": "trans-resveratrol",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "ferulic_acid",
      "keyword": "sodium ferulate",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "niacinamide",
      "keyword": "nicotinamide",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "vitamin_e",
      "keyword": "tocopheryl acetate",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "euk_134",
      "keyword": "euk-134",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "benzoyl_peroxide",
      "keyword": "peroxyde de benzoyle",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "azelaic_acid",
      "keyword": "acide azelaique",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "sulfur",
      "keyword": "sulphur",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "tea_tree_oil",
      "keyword": "melaleuca alternifolia leaf oil",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "peptides",
      "keyword": "palmitoyl tripeptide",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "alpha_arbutin",
      "keyword": "alpha arbutin",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "growth_factors",
      "keyword": "egf",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "kojic_acid",
      "keyword": "acide kojique",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "tranexamic_acid",
      "keyword": "acide tranexamique",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "licorice_extract",
      "keyword": "glycyrrhiza glabra root extract",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "ceramides",
      "keyword": "ceramide np",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "hyaluronic_acid",
      "keyword": "sodium hyaluronate",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "panthenol",
      "keyword": "dexpanthenol",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "allantoin",
      "keyword": "allantoine",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "centella_asiatica",
      "keyword": "centella asiatica extract",
      "match_type": "contains",
      "priority": 20
    },
    {
      "tag_code": "aha",
      "keyword": "mandelic acid",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "bha",
      "keyword": "水杨酸",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "retinoid",
      "keyword": "retinaldehyde",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "ascorbyl glucoside",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "ferulic_acid",
      "keyword": "acide ferulique",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "vitamin_e",
      "keyword": "tocopheryl linoleate",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "euk_134",
      "keyword": "ethylbisiminomethylguaiacol manganese chloride",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "benzoyl_peroxide",
      "keyword": "过氧化苯甲酰",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "azelaic_acid",
      "keyword": "壬二酸",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "sulfur",
      "keyword": "soufre",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "tea_tree_oil",
      "keyword": "huile darbre a the",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "peptides",
      "keyword": "acetyl hexapeptide",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "alpha_arbutin",
      "keyword": "alpha-arbutine",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "growth_factors",
      "keyword": "sh-oligopeptide-1",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "kojic_acid",
      "keyword": "曲酸",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "tranexamic_acid",
      "keyword": "传明酸",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "licorice_extract",
      "keyword": "dipotassium glycyrrhizate",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "ceramides",
      "keyword": "ceramide ap",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "hyaluronic_acid",
      "keyword": "hydrolyzed hyaluronic acid",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "panthenol",
      "keyword": "provitamin b5",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "allantoin",
      "keyword": "尿囊素",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "centella_asiatica",
      "keyword": "cica",
      "match_type": "contains",
      "priority": 30
    },
    {
      "tag_code": "aha",
      "keyword": "tartaric acid",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "pha",
      "keyword": "acide lactobionique",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "retinoid",
      "keyword": "retinyl palmitate",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "sodium ascorbyl phosphate",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "resveratrol",
      "keyword": "白藜芦醇",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "ferulic_acid",
      "keyword": "阿魏酸",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "niacinamide",
      "keyword": "烟酰胺",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "vitamin_e",
      "keyword": "vitamine e",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "sulfur",
      "keyword": "硫磺",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "tea_tree_oil",
      "keyword": "茶树精油",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "peptides",
      "keyword": "copper tripeptide",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "alpha_arbutin",
      "keyword": "α-熊果苷",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "growth_factors",
      "keyword": "sh-polypeptide-1",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "tranexamic_acid",
      "keyword": "凝血酸",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "licorice_extract",
      "keyword": "extrait de reglisse",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "ceramides",
      "keyword": "ceramide eop",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "hyaluronic_acid",
      "keyword": "acide hyaluronique",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "panthenol",
      "keyword": "provitamin b 5",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "centella_asiatica",
      "keyword": "madecassoside",
      "match_type": "contains",
      "priority": 40
    },
    {
      "tag_code": "vitamin_c",
      "keyword": "vitamine c",
      "match_type": "contains",
      "priority": 45
    },
    {
      "tag_code": "peptides",
      "keyword": "matrixyl",
      "match_type": "contains",
      "priority": 45
    },
    {
      "tag_code": "peptides",
      "keyword": "palmitoyl pentapeptide",
      "match_type": "contains",
      "priority": 47
    },
    {
      "tag_code": "aha",
      "keyword": "acide glycolique",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "pha",
      "keyword": "葡糖酸内酯",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "retinoid",
      "keyword": "adapalene",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "vitamin_c",
      "keyword": "acide ascorbique",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "magnesium ascorbyl phosphate",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "vitamin_e",
      "keyword": "维生素e",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "euk_134",
      "keyword": "euk134",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "tea_tree_oil",
      "keyword": "茶树油",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "alpha_arbutin",
      "keyword": "alpha熊果苷",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "growth_factors",
      "keyword": "fibroblast growth factor",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "licorice_extract",
      "keyword": "甘草提取物",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "ceramides",
      "keyword": "ceramide ns",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "hyaluronic_acid",
      "keyword": "透明质酸",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "centella_asiatica",
      "keyword": "asiaticoside",
      "match_type": "contains",
      "priority": 50
    },
    {
      "tag_code": "aha",
      "keyword": "acide lactique",
      "match_type": "contains",
      "priority": 60
    },
    {
      "tag_code": "pha",
      "keyword": "乳糖酸",
      "match_type": "contains",
      "priority": 60
    },
    {
      "tag_code": "retinoid",
      "keyword": "hydroxypinacolone retinoate",
      "match_type": "contains",
      "priority": 60
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "tetrahexyldecyl ascorbate",
      "match_type": "contains",
      "priority": 60
    },
    {
      "tag_code": "vitamin_e",
      "keyword": "生育酚",
      "match_type": "contains",
      "priority": 60
    },
    {
      "tag_code": "peptides",
      "keyword": "肽",
      "match_type": "contains",
      "priority": 60
    },
    {
      "tag_code": "growth_factors",
      "keyword": "facteur de croissance",
      "match_type": "contains",
      "priority": 60
    },
    {
      "tag_code": "licorice_extract",
      "keyword": "甘草酸二钾",
      "match_type": "contains",
      "priority": 60
    },
    {
      "tag_code": "hyaluronic_acid",
      "keyword": "玻尿酸",
      "match_type": "contains",
      "priority": 60
    },
    {
      "tag_code": "panthenol",
      "keyword": "泛醇",
      "match_type": "contains",
      "priority": 60
    },
    {
      "tag_code": "aha",
      "keyword": "acide mandelique",
      "match_type": "contains",
      "priority": 70
    },
    {
      "tag_code": "retinoid",
      "keyword": "tretinoin",
      "match_type": "contains",
      "priority": 70
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "tetraisopalmitoyl ascorbic acid",
      "match_type": "contains",
      "priority": 70
    },
    {
      "tag_code": "peptides",
      "keyword": "多肽",
      "match_type": "contains",
      "priority": 70
    },
    {
      "tag_code": "growth_factors",
      "keyword": "生长因子",
      "match_type": "contains",
      "priority": 70
    },
    {
      "tag_code": "ceramides",
      "keyword": "神经酰胺",
      "match_type": "contains",
      "priority": 70
    },
    {
      "tag_code": "panthenol",
      "keyword": "维生素b5",
      "match_type": "contains",
      "priority": 70
    },
    {
      "tag_code": "centella_asiatica",
      "keyword": "积雪草",
      "match_type": "contains",
      "priority": 70
    },
    {
      "tag_code": "aha",
      "keyword": "acide tartrique",
      "match_type": "contains",
      "priority": 80
    },
    {
      "tag_code": "retinoid",
      "keyword": "retinoide",
      "match_type": "contains",
      "priority": 80
    },
    {
      "tag_code": "vitamin_c",
      "keyword": "维生素c",
      "match_type": "contains",
      "priority": 80
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "vitamin c derivative",
      "match_type": "contains",
      "priority": 80
    },
    {
      "tag_code": "growth_factors",
      "keyword": "表皮生长因子",
      "match_type": "contains",
      "priority": 80
    },
    {
      "tag_code": "centella_asiatica",
      "keyword": "积雪草提取物",
      "match_type": "contains",
      "priority": 80
    },
    {
      "tag_code": "aha",
      "keyword": "果酸",
      "match_type": "contains",
      "priority": 90
    },
    {
      "tag_code": "retinoid",
      "keyword": "视黄醇",
      "match_type": "contains",
      "priority": 90
    },
    {
      "tag_code": "vitamin_c",
      "keyword": "抗坏血酸",
      "match_type": "contains",
      "priority": 90
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "derive de vitamine c",
      "match_type": "contains",
      "priority": 90
    },
    {
      "tag_code": "retinoid",
      "keyword": "视黄醛",
      "match_type": "contains",
      "priority": 100
    },
    {
      "tag_code": "vitamin_c",
      "keyword": "左旋维c",
      "match_type": "contains",
      "priority": 100
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "乙基抗坏血酸",
      "match_type": "contains",
      "priority": 100
    },
    {
      "tag_code": "retinoid",
      "keyword": "阿达帕林",
      "match_type": "contains",
      "priority": 110
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "抗坏血酸葡糖苷",
      "match_type": "contains",
      "priority": 110
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "抗坏血酸磷酸酯镁",
      "match_type": "contains",
      "priority": 120
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "抗坏血酸磷酸酯钠",
      "match_type": "contains",
      "priority": 130
    },
    {
      "tag_code": "vitamin_c_derivatives",
      "keyword": "vc衍生物",
      "match_type": "contains",
      "priority": 140
    }
  ],
  "conflicts": [
    {
      "tag_a": "aha",
      "tag_b": "bha",
      "level": "duplicate",
      "recommendation": "AHA and BHA are overlapping exfoliating layers in one application.",
      "notes": "Prefer one exfoliating lane at a time."
    },
    {
      "tag_a": "aha",
      "tag_b": "euk_134",
      "level": "avoid",
      "recommendation": "EUK 134 should not be layered with direct acids in the same application.",
      "notes": "This antioxidant is commonly kept away from strong acidic formulas."
    },
    {
      "tag_a": "aha",
      "tag_b": "pha",
      "level": "duplicate",
      "recommendation": "AHA and PHA are overlapping exfoliating layers in one application.",
      "notes": "Prefer one exfoliating lane at a time."
    },
    {
      "tag_a": "aha",
      "tag_b": "retinoid",
      "level": "avoid",
      "recommendation": "Retinoid and AHA should not be layered in the same application.",
      "notes": "Avoid stacking strong resurfacing actives together."
    },
    {
      "tag_a": "aha",
      "tag_b": "sulfur",
      "level": "caution",
      "recommendation": "Sulfur and AHA can be too stripping in one application.",
      "notes": "Both can push exfoliation and dryness beyond what many skin barriers tolerate."
    },
    {
      "tag_a": "aha",
      "tag_b": "vitamin_c",
      "level": "caution",
      "recommendation": "Direct vitamin C and AHA can be too intense together for many routines.",
      "notes": "This combination increases acid load and can raise irritation risk in one application."
    },
    {
      "tag_a": "benzoyl_peroxide",
      "tag_b": "sulfur",
      "level": "caution",
      "recommendation": "Sulfur and benzoyl peroxide can be too drying when layered together.",
      "notes": "Keep an eye on barrier stress if both are used in the same application."
    },
    {
      "tag_a": "benzoyl_peroxide",
      "tag_b": "tea_tree_oil",
      "level": "caution",
      "recommendation": "Tea tree oil and benzoyl peroxide can be irritating when layered together.",
      "notes": "This combination can stack dryness and sting, especially on already inflamed skin."
    },
    {
      "tag_a": "bha",
      "tag_b": "euk_134",
      "level": "avoid",
      "recommendation": "EUK 134 should not be layered with direct acids in the same application.",
      "notes": "This antioxidant is commonly kept away from strong acidic formulas."
    },
    {
      "tag_a": "bha",
      "tag_b": "pha",
      "level": "duplicate",
      "recommendation": "BHA and PHA are overlapping exfoliating layers in one application.",
      "notes": "Prefer one exfoliating lane at a time."
    },
    {
      "tag_a": "bha",
      "tag_b": "retinoid",
      "level": "avoid",
      "recommendation": "Retinoid and BHA should not be layered in the same application.",
      "notes": "Avoid stacking strong resurfacing actives together."
    },
    {
      "tag_a": "bha",
      "tag_b": "sulfur",
      "level": "caution",
      "recommendation": "Sulfur and BHA can be too stripping in one application.",
      "notes": "This acne-targeting combination can become noticeably drying when overlayered."
    },
    {
      "tag_a": "bha",
      "tag_b": "vitamin_c",
      "level": "caution",
      "recommendation": "Direct vitamin C and BHA can be too intense together for many routines.",
      "notes": "This pairing may overconcentrate low-pH actives and trigger more stinging or dryness."
    },
    {
      "tag_a": "ferulic_acid",
      "tag_b": "euk_134",
      "level": "avoid",
      "recommendation": "EUK 134 should not be layered with ferulic acid in the same application.",
      "notes": "This is a commonly avoided antioxidant stack in brand-level compatibility guidance."
    },
    {
      "tag_a": "pha",
      "tag_b": "euk_134",
      "level": "caution",
      "recommendation": "EUK 134 and PHA are better separated if your routine is sensitivity-prone.",
      "notes": "PHA is gentler, but it still adds acidity to a combination that can become finicky."
    },
    {
      "tag_a": "pha",
      "tag_b": "retinoid",
      "level": "caution",
      "recommendation": "Retinoid and PHA can be too much in one application for sensitive skin.",
      "notes": "PHA is gentler than AHA and BHA, but layering can still increase irritation."
    },
    {
      "tag_a": "resveratrol",
      "tag_b": "euk_134",
      "level": "avoid",
      "recommendation": "EUK 134 should not be layered with resveratrol in the same application.",
      "notes": "This is a commonly avoided antioxidant stack in brand-level compatibility guidance."
    },
    {
      "tag_a": "retinoid",
      "tag_b": "benzoyl_peroxide",
      "level": "caution",
      "recommendation": "Benzoyl peroxide and retinoid can be irritating when layered together.",
      "notes": "This pairing is often better tolerated when separated or introduced gradually."
    },
    {
      "tag_a": "retinoid",
      "tag_b": "sulfur",
      "level": "caution",
      "recommendation": "Sulfur and retinoids can be overly drying when layered together.",
      "notes": "This acne-focused combination may increase peeling and tightness in the same routine."
    },
    {
      "tag_a": "retinoid",
      "tag_b": "tea_tree_oil",
      "level": "caution",
      "recommendation": "Tea tree oil and retinoids can be irritating when layered together.",
      "notes": "Fragrant essential oils plus retinoids can be a rough combination for sensitive skin."
    },
    {
      "tag_a": "retinoid",
      "tag_b": "vitamin_c",
      "level": "caution",
      "recommendation": "Direct vitamin C and retinoids can be better tolerated when separated into different routines.",
      "notes": "Both are effective actives, but layering them together can be too stimulating for many users."
    },
    {
      "tag_a": "vitamin_c",
      "tag_b": "benzoyl_peroxide",
      "level": "caution",
      "recommendation": "Direct vitamin C and benzoyl peroxide are often better kept apart in one routine.",
      "notes": "Oxidizing acne treatments and low-pH vitamin C can be a harsh combination in the same application."
    },
    {
      "tag_a": "vitamin_c",
      "tag_b": "euk_134",
      "level": "avoid",
      "recommendation": "EUK 134 should not be layered with direct vitamin C in the same application.",
      "notes": "This antioxidant combination is commonly flagged as unstable or counterproductive in one step."
    }
  ],
  "compatibilities": [
    {
      "tag_a": "allantoin",
      "tag_b": "centella_asiatica",
      "level": "supportive",
      "recommendation": "Allantoin and centella asiatica pair well for visible redness support.",
      "notes": "This is a gentle soothing stack often used in recovery-oriented products."
    },
    {
      "tag_a": "alpha_arbutin",
      "tag_b": "tranexamic_acid",
      "level": "supportive",
      "recommendation": "Alpha arbutin and tranexamic acid can pair well in targeted brightening routines.",
      "notes": "This combination is commonly used for visible mark and spot support."
    },
    {
      "tag_a": "azelaic_acid",
      "tag_b": "tranexamic_acid",
      "level": "supportive",
      "recommendation": "Azelaic acid and tranexamic acid can complement each other in tone-focused routines.",
      "notes": "They support post-blemish marks and uneven tone without being a redundant exfoliating pair."
    },
    {
      "tag_a": "ceramides",
      "tag_b": "centella_asiatica",
      "level": "supportive",
      "recommendation": "Centella asiatica and ceramides pair well for barrier comfort.",
      "notes": "This combination supports calmer-feeling skin while reinforcing barrier lipids."
    },
    {
      "tag_a": "ceramides",
      "tag_b": "hyaluronic_acid",
      "level": "recommended",
      "recommendation": "Ceramides and hyaluronic acid are a strong hydration and barrier-support pairing.",
      "notes": "These support ingredients complement each other without adding treatment stress."
    },
    {
      "tag_a": "ceramides",
      "tag_b": "panthenol",
      "level": "recommended",
      "recommendation": "Panthenol and ceramides are a barrier-repair powerhouse pairing.",
      "notes": "They reinforce hydration comfort and help support a stressed skin barrier."
    },
    {
      "tag_a": "ferulic_acid",
      "tag_b": "vitamin_e",
      "level": "supportive",
      "recommendation": "Vitamin E and ferulic acid work well together in antioxidant-focused routines.",
      "notes": "This pairing is often used to round out photoprotection-oriented blends."
    },
    {
      "tag_a": "growth_factors",
      "tag_b": "hyaluronic_acid",
      "level": "supportive",
      "recommendation": "Growth factors and hyaluronic acid pair well in recovery-focused routines.",
      "notes": "The pairing leans supportive and hydrating without adding another strong active lane."
    },
    {
      "tag_a": "growth_factors",
      "tag_b": "panthenol",
      "level": "supportive",
      "recommendation": "Growth factors and panthenol pair well in recovery-focused routines.",
      "notes": "This combination keeps the routine soothing and barrier-aware."
    },
    {
      "tag_a": "hyaluronic_acid",
      "tag_b": "panthenol",
      "level": "supportive",
      "recommendation": "Panthenol and hyaluronic acid pair well for water-binding comfort.",
      "notes": "This combination leans hydrating and soothing without treatment overlap."
    },
    {
      "tag_a": "niacinamide",
      "tag_b": "alpha_arbutin",
      "level": "supportive",
      "recommendation": "Alpha arbutin and niacinamide pair well for dark spot support.",
      "notes": "This pairing is a common brightening stack that does not rely on exfoliation."
    },
    {
      "tag_a": "niacinamide",
      "tag_b": "azelaic_acid",
      "level": "supportive",
      "recommendation": "Azelaic acid and niacinamide can pair well for tone-evening and calming support.",
      "notes": "This pairing can support brightening goals without overlapping exfoliation."
    },
    {
      "tag_a": "niacinamide",
      "tag_b": "ceramides",
      "level": "supportive",
      "recommendation": "Niacinamide and ceramides work well together for barrier support.",
      "notes": "This pairing supports hydration and barrier recovery."
    },
    {
      "tag_a": "niacinamide",
      "tag_b": "hyaluronic_acid",
      "level": "supportive",
      "recommendation": "Niacinamide and hyaluronic acid pair well for hydration-friendly support.",
      "notes": "This pairing is commonly well tolerated and easy to layer."
    },
    {
      "tag_a": "niacinamide",
      "tag_b": "kojic_acid",
      "level": "supportive",
      "recommendation": "Kojic acid and niacinamide can work well together in pigment-focused routines.",
      "notes": "They target uneven tone from different angles without creating duplicate exfoliation."
    },
    {
      "tag_a": "niacinamide",
      "tag_b": "licorice_extract",
      "level": "supportive",
      "recommendation": "Licorice extract and niacinamide pair well for calming brightening support.",
      "notes": "This pairing supports tone-evening while also leaning soothing."
    },
    {
      "tag_a": "niacinamide",
      "tag_b": "tranexamic_acid",
      "level": "recommended",
      "recommendation": "Tranexamic acid and niacinamide are a strong tone-evening pairing.",
      "notes": "This combination is commonly used for post-inflammatory marks and uneven tone support."
    },
    {
      "tag_a": "panthenol",
      "tag_b": "allantoin",
      "level": "supportive",
      "recommendation": "Allantoin and panthenol are a dependable soothing pairing.",
      "notes": "This combination is commonly used to cushion dryness and visible irritation."
    },
    {
      "tag_a": "panthenol",
      "tag_b": "centella_asiatica",
      "level": "recommended",
      "recommendation": "Panthenol and centella asiatica pair well in recovery-focused routines.",
      "notes": "Both ingredients lean soothing and help support a more comfortable barrier state."
    },
    {
      "tag_a": "peptides",
      "tag_b": "ceramides",
      "level": "supportive",
      "recommendation": "Peptides and ceramides pair well in barrier-support routines.",
      "notes": "This pairing layers skin-conditioning support without overlapping exfoliation."
    },
    {
      "tag_a": "peptides",
      "tag_b": "hyaluronic_acid",
      "level": "supportive",
      "recommendation": "Peptides and hyaluronic acid pair well in hydration-support routines.",
      "notes": "This is a common pairing for maintaining a plump, conditioned skin feel."
    },
    {
      "tag_a": "peptides",
      "tag_b": "panthenol",
      "level": "supportive",
      "recommendation": "Peptides and panthenol pair well for conditioned, comfortable skin support.",
      "notes": "This is a recovery-friendly pairing that does not add treatment stress."
    },
    {
      "tag_a": "resveratrol",
      "tag_b": "ferulic_acid",
      "level": "recommended",
      "recommendation": "Resveratrol and ferulic acid are a strong antioxidant-support pairing.",
      "notes": "These antioxidants are often combined to build a broader defensive blend."
    },
    {
      "tag_a": "retinoid",
      "tag_b": "niacinamide",
      "level": "supportive",
      "recommendation": "Niacinamide can pair well with retinoids to support comfort and barrier function.",
      "notes": "This is a supportive pairing often used to reduce visible irritation."
    },
    {
      "tag_a": "tranexamic_acid",
      "tag_b": "licorice_extract",
      "level": "supportive",
      "recommendation": "Licorice extract and tranexamic acid can work well together for discoloration support.",
      "notes": "This stack supports brightening goals without depending on a strong exfoliating lane."
    },
    {
      "tag_a": "vitamin_c",
      "tag_b": "ferulic_acid",
      "level": "recommended",
      "recommendation": "Vitamin C and ferulic acid are a high-value antioxidant pairing.",
      "notes": "Ferulic acid is often used to reinforce antioxidant performance in vitamin C formulas."
    },
    {
      "tag_a": "vitamin_c",
      "tag_b": "vitamin_e",
      "level": "recommended",
      "recommendation": "Vitamin C and vitamin E are a classic antioxidant pairing.",
      "notes": "This combination is commonly used to broaden antioxidant support and improve comfort."
    },
    {
      "tag_a": "vitamin_c_derivatives",
      "tag_b": "niacinamide",
      "level": "supportive",
      "recommendation": "Vitamin C derivatives and niacinamide pair well in brightening routines.",
      "notes": "This is a flexible pairing that supports tone-evening without the same sting profile as direct vitamin C."
    }
  ],
  "productTypeKeywords": [
    {
      "keyword": "cleanser",
      "product_type": "cleanser",
      "priority": 10
    },
    {
      "keyword": "cream",
      "product_type": "moisturizer",
      "priority": 10
    },
    {
      "keyword": "mask",
      "product_type": "mask",
      "priority": 10
    },
    {
      "keyword": "serum",
      "product_type": "serum",
      "priority": 10
    },
    {
      "keyword": "sunscreen",
      "product_type": "sunscreen",
      "priority": 10
    },
    {
      "keyword": "toner",
      "product_type": "toner",
      "priority": 10
    },
    {
      "keyword": "ampoule",
      "product_type": "serum",
      "priority": 20
    },
    {
      "keyword": "face wash",
      "product_type": "cleanser",
      "priority": 20
    },
    {
      "keyword": "gel cream",
      "product_type": "moisturizer",
      "priority": 20
    },
    {
      "keyword": "lotion",
      "product_type": "toner",
      "priority": 20
    },
    {
      "keyword": "masque",
      "product_type": "mask",
      "priority": 20
    },
    {
      "keyword": "spf",
      "product_type": "sunscreen",
      "priority": 20
    },
    {
      "keyword": "essence",
      "product_type": "serum",
      "priority": 30
    },
    {
      "keyword": "essence water",
      "product_type": "toner",
      "priority": 30
    },
    {
      "keyword": "gel nettoyant",
      "product_type": "cleanser",
      "priority": 30
    },
    {
      "keyword": "moisturizer",
      "product_type": "moisturizer",
      "priority": 30
    },
    {
      "keyword": "sun cream",
      "product_type": "sunscreen",
      "priority": 30
    },
    {
      "keyword": "面膜",
      "product_type": "mask",
      "priority": 30
    },
    {
      "keyword": "creme",
      "product_type": "moisturizer",
      "priority": 40
    },
    {
      "keyword": "solaire",
      "product_type": "sunscreen",
      "priority": 40
    },
    {
      "keyword": "tonique",
      "product_type": "toner",
      "priority": 40
    },
    {
      "keyword": "洁面",
      "product_type": "cleanser",
      "priority": 40
    },
    {
      "keyword": "精华",
      "product_type": "serum",
      "priority": 40
    },
    {
      "keyword": "crème",
      "product_type": "moisturizer",
      "priority": 50
    },
    {
      "keyword": "爽肤水",
      "product_type": "toner",
      "priority": 50
    },
    {
      "keyword": "防晒",
      "product_type": "sunscreen",
      "priority": 50
    },
    {
      "keyword": "面霜",
      "product_type": "moisturizer",
      "priority": 60
    },
    {
      "keyword": "乳液",
      "product_type": "moisturizer",
      "priority": 70
    }
  ]
};
