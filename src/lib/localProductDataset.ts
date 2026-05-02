export interface LocalProduct {
  brand: string;
  product_name: string;
  ingredients_text: string;
}

export const LOCAL_PRODUCTS: LocalProduct[] = [
  // ─── CeraVe ───────────────────────────────────────────────────────────────
  {
    brand: "CeraVe",
    product_name: "CeraVe Hydrating Facial Cleanser",
    ingredients_text:
      "Aqua/Water, Glycerin, Cetearyl Alcohol, Phenoxyethanol, Stearyl Alcohol, Cetyl Alcohol, PEG-40 Stearate, Behentrimonium Methosulfate, Glyceryl Stearate SE, Xanthan Gum, Carbomer, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Lauroyl Lactylate, Sodium Hyaluronate, Tocopheryl Acetate, Dipotassium Phosphate, Potassium Phosphate, Disodium EDTA, Methylparaben, Propylparaben",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Foaming Facial Cleanser",
    ingredients_text:
      "Aqua/Water, Cocamidopropyl Betaine, Glycerin, Sodium Lauroyl Sarcosinate, Niacinamide, Sodium Chloride, Zinc PCA, Phospholipids, Cholesterol, Sodium Hyaluronate, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Carbomer, Sodium Hydroxide, Sodium Lauroyl Lactylate, Disodium EDTA, Methylparaben, Propylparaben",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Moisturizing Cream",
    ingredients_text:
      "Aqua/Water, Glycerin, Cetearyl Alcohol, Caprylic/Capric Triglyceride, Behentrimonium Methosulfate, Cetyl Alcohol, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Hyaluronate, Dimethicone, Carbomer, Sodium Lauroyl Lactylate, Methylparaben, Propylparaben, Phenoxyethanol, Ethylhexylglycerin, Disodium EDTA",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Daily Moisturizing Lotion",
    ingredients_text:
      "Aqua/Water, Glycerin, Cetearyl Alcohol, Caprylic/Capric Triglyceride, Cetyl Alcohol, Dimethicone, Hyaluronic Acid, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Behentrimonium Methosulfate, Sodium Lauroyl Lactylate, Methylparaben, Propylparaben, Carbomer, Disodium EDTA, Sodium Hydroxide",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe AM Facial Moisturizing Lotion SPF 30",
    ingredients_text:
      "Active: Homosalate 9%, Octinoxate 7.5%, Octisalate 5%, Zinc Oxide 4%. Inactive: Aqua/Water, Glycerin, Niacinamide, Dimethicone, Cetearyl Alcohol, Cetyl Alcohol, PEG-40 Stearate, Behentrimonium Methosulfate, Sodium Hyaluronate, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Lauroyl Lactylate, Methylparaben, Propylparaben, Phenoxyethanol, Disodium EDTA, Carbomer",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe PM Facial Moisturizing Lotion",
    ingredients_text:
      "Aqua/Water, Glycerin, Niacinamide, Cetearyl Alcohol, Caprylic/Capric Triglyceride, Cetyl Alcohol, Dimethicone, Behentrimonium Methosulfate, Sodium Hyaluronate, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Lauroyl Lactylate, Methylparaben, Propylparaben, Carbomer, Disodium EDTA",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Renewing SA Cleanser",
    ingredients_text:
      "Aqua/Water, Glycerin, Cocamidopropyl Betaine, Sodium Lauroyl Sarcosinate, Salicylic Acid, Niacinamide, Zinc PCA, Sodium Chloride, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Hyaluronate, Sodium Lauroyl Lactylate, Carbomer, Sodium Hydroxide, Disodium EDTA, Phenoxyethanol",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Resurfacing Retinol Serum",
    ingredients_text:
      "Aqua/Water, Glycerin, Niacinamide, Propanediol, Dimethicone, Retinol, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Hyaluronate, Caprylic/Capric Triglyceride, Sodium Lauroyl Lactylate, Limonene, Carbomer, Sodium Hydroxide, Ethylhexylglycerin, Disodium EDTA, Phenoxyethanol",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Eye Repair Cream",
    ingredients_text:
      "Aqua/Water, Glycerin, Niacinamide, Cetearyl Alcohol, Caprylic/Capric Triglyceride, Cetyl Alcohol, Dimethicone, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Hyaluronate, Behentrimonium Methosulfate, Sodium Lauroyl Lactylate, Allantoin, Carbomer, Disodium EDTA, Methylparaben",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Hydrating Hyaluronic Acid Serum",
    ingredients_text:
      "Aqua/Water, Glycerin, Niacinamide, Sodium Hyaluronate, Hyaluronic Acid, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Dimethicone, Sodium Lauroyl Lactylate, Carbomer, Sodium Hydroxide, Disodium EDTA, Phenoxyethanol, Ethylhexylglycerin",
  },

  // ─── La Roche-Posay ──────────────────────────────────────────────────────
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Toleriane Hydrating Gentle Cleanser",
    ingredients_text:
      "Aqua/Water, Glycerin, Cetearyl Glucoside, Cetyl Alcohol, Niacinamide, Ceramide NP, Capryloyl Glycine, Decyl Glucoside, Sodium Chloride, Xanthan Gum, Citric Acid, Sodium Hyaluronate",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Toleriane Double Repair Face Moisturizer",
    ingredients_text:
      "Aqua/Water, Glycerin, Dimethicone, Niacinamide, Squalane, Aluminum Starch Octenylsuccinate, Ceramide NP, Ceramide AP, Ceramide EOP, Lactic Acid, Zinc Gluconate, Carbomer, Glyceryl Stearate, Sodium Hydroxide, Sodium Hyaluronate, Caprylyl Glycol, Xanthan Gum, Tocopherol, Caprylic/Capric Triglyceride",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Cicaplast Baume B5",
    ingredients_text:
      "Aqua/Water, Glycerin, Dimethicone, Cetearyl Alcohol, Zinc Oxide, Manganese Gluconate, Panthenol, Cera Microcristallina/Microcrystalline Wax, PEG-100 Stearate, Propylene Glycol, Sodium Stearoyl Glutamate, Carbomer, Sodium Hydroxide, Disodium EDTA",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Effaclar Purifying Foaming Gel Cleanser",
    ingredients_text:
      "Aqua/Water, Cocamidopropyl Betaine, Sodium Laureth Sulfate, Glycerin, Zinc Pidolate, Sodium Chloride, PEG-120 Methyl Glucose Dioleate, Tocopheryl Acetate, Potassium Hydroxide, Disodium EDTA",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Effaclar Duo+ Moisturizer",
    ingredients_text:
      "Aqua/Water, Glycerin, Dimethicone, Niacinamide, Salicylic Acid, Zinc PCA, Lipo-Hydroxy Acid, Ceramide NP, Carbomer, Xanthan Gum, Sodium Hydroxide, Caprylic/Capric Triglyceride, Tocopherol, Disodium EDTA, Caprylyl Glycol",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Anthelios Melt-in Milk Sunscreen SPF 60",
    ingredients_text:
      "Active: Avobenzone 3%, Homosalate 10%, Octisalate 5%, Octocrylene 10%. Inactive: Aqua/Water, Glycerin, Silica, Dimethicone, PEG-100 Stearate, Glyceryl Stearate, Caprylyl Glycol, Carbomer, Triethanolamine, Tocopherol, Disodium EDTA",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Anthelios UVMune 400 Invisible Fluid SPF 50+",
    ingredients_text:
      "Aqua/Water, Glycerin, C12-15 Alkyl Benzoate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Drometrizole Trisiloxane, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Homosalate, Octocrylene, Caprylic/Capric Triglyceride, Dimethicone, Niacinamide, Silica, Tocopherol, Carbomer, Sodium Hydroxide, Disodium EDTA",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Toleriane Ultra Moisturizer",
    ingredients_text:
      "Aqua/Water, Glycerin, Dimethicone, Niacinamide, Ceramide NP, Squalane, Glyceryl Stearate, Carbomer, Xanthan Gum, Sodium Hydroxide, Sodium Hyaluronate, Caprylyl Glycol, Disodium EDTA",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Lipikar Baume AP+M",
    ingredients_text:
      "Aqua/Water, Glycerin, Myristyl Alcohol, Paraffinum Liquidum/Mineral Oil, Niacinamide, Shea Butter, Ceramide NP, Stearyl Alcohol, PEG-100 Stearate, Sodium Lauroyl Lactylate, Allantoin, Carbomer, Sodium Hydroxide, Disodium EDTA, Methylparaben",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Hyalu B5 Pure Hyaluronic Acid Serum",
    ingredients_text:
      "Aqua/Water, Glycerin, Sodium Hyaluronate, Hyaluronic Acid, Panthenol, Madecassoside, Ascorbyl Glucoside, Niacinamide, Propanediol, Xanthan Gum, Citric Acid, Disodium EDTA, Phenoxyethanol",
  },

  // ─── The Ordinary ────────────────────────────────────────────────────────
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Niacinamide 10% + Zinc 1%",
    ingredients_text:
      "Aqua (Water), Niacinamide, Pentylene Glycol, Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum, Xanthan Gum, Isoceteth-20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Hyaluronic Acid 2% + B5",
    ingredients_text:
      "Aqua (Water), Sodium Hyaluronate, Panthenol, Sodium Hyaluronate Crosspolymer, Propanediol, Pentylene Glycol, Glycerin, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Lactic Acid, Trisodium Ethylenediamine Disuccinate, Citric Acid, Ethoxydiglycol, Ethylhexylglycerin, Hexylene Glycol, 1,2-Hexanediol, Phenoxyethanol",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Retinol 0.2% in Squalane",
    ingredients_text:
      "Squalane, Caprylic/Capric Triglyceride, Retinol, Solanum Lycopersicum (Tomato) Fruit Extract, Simmondsia Chinensis (Jojoba) Seed Oil",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Retinol 0.5% in Squalane",
    ingredients_text:
      "Squalane, Caprylic/Capric Triglyceride, Retinol, Solanum Lycopersicum (Tomato) Fruit Extract, Simmondsia Chinensis (Jojoba) Seed Oil",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Retinol 1% in Squalane",
    ingredients_text:
      "Squalane, Caprylic/Capric Triglyceride, Retinol, Solanum Lycopersicum (Tomato) Fruit Extract, Simmondsia Chinensis (Jojoba) Seed Oil",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary AHA 30% + BHA 2% Peeling Solution",
    ingredients_text:
      "Glycolic Acid, Aqua (Water), Aloe Barbadensis Leaf Water, Sodium Hydroxide, Propanediol, Salicylic Acid, Cocamidopropyl Dimethylamine, Dextrin, 1,2-Hexanediol, Glycerin, Chamomilla Recutita (Matricaria) Flower Extract, Tasmannia Lanceolata Fruit/Leaf Extract, Sodium Hyaluronate Crosspolymer, Potassium Citrate, Lactic Acid, Tartaric Acid, Citric Acid, Hydroxyethylcellulose, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Propanediol",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Natural Moisturizing Factors + HA",
    ingredients_text:
      "Aqua (Water), Glycerin, Urea, Lactic Acid, Sodium PCA, Serine, Alanine, Glycine, Threonine, Proline, Arginine, Valine, Isoleucine, Phenylalanine, Glutamic Acid, Sodium Hyaluronate, Allantoin, Polyquaternium-51, Pentylene Glycol, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Chlorphenesin, Carbomer",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Squalane Cleanser",
    ingredients_text:
      "Squalane, Sucrose Stearate, Aqua (Water), Triethyl Citrate, Sucrose Laurate, Helianthus Annuus (Sunflower) Seed Wax, Polyglyceryl-6 Polyricinoleate",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Vitamin C Suspension 23% + HA Spheres 2%",
    ingredients_text:
      "Ascorbic Acid, Isodecyl Neopentanoate, Squalane, PEG/PPG-17/6 Copolymer, Polysilicone-11, Sodium Hyaluronate Crosspolymer, Silica, Isononyl Isononanoate",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Ascorbyl Glucoside Solution 12%",
    ingredients_text:
      "Aqua (Water), Ascorbyl Glucoside, Propanediol, Hydroxypropyl Cyclodextrin, Pentylene Glycol, Sodium Hydroxide, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Chlorphenesin",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Caffeine Solution 5% + EGCG",
    ingredients_text:
      "Aqua (Water), Caffeine, Epigallocatechin Gallatyl Glucoside, Glycerin, Pentylene Glycol, Xanthan Gum, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Chlorphenesin",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Azelaic Acid Suspension 10%",
    ingredients_text:
      "Aqua (Water), Azelaic Acid, Isodecyl Neopentanoate, Dimethicone, Propanediol, Dimethicone/Vinyl Dimethicone Crosspolymer, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Ethylhexylglycerin",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Alpha Arbutin 2% + HA",
    ingredients_text:
      "Aqua (Water), Alpha-Arbutin, Sodium Hyaluronate Crosspolymer, Propanediol, Ferulic Acid, Pentylene Glycol, Trisodium Ethylenediamine Disuccinate, Lactic Acid, Phenoxyethanol, Chlorphenesin",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Salicylic Acid 2% Solution",
    ingredients_text:
      "Aqua (Water), Salicylic Acid, Witch Hazel, Propanediol, Pentylene Glycol, Glycerin, Niacinamide, Allantoin, Sodium Citrate, Citric Acid, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Chlorphenesin",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Multi-Peptide + HA Serum",
    ingredients_text:
      "Aqua (Water), Glycerin, Pentylene Glycol, Acetyl Hexapeptide-3, Palmitoyl Dipeptide-5 Diaminobutyroyl Hydroxythreonine, Palmitoyl Dipeptide-5 Diaminohydroxybutyrate, Palmitoyl Tripeptide-38, Sodium Hyaluronate Crosspolymer, Sodium Hyaluronate, Glycine, Alanine, Serine, Valine, Proline, Threonine, Isoleucine, Leusine (Leucine), Aspartic Acid (Aspartame), Tyrosine, Arginine, Glutamic Acid, Phenylalanine, Glycine Soja (Soybean) Protein, Biotinoyl Tripeptide-1, Xanthan Gum, Lactic Acid, Citric Acid, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Chlorphenesin",
  },

  // ─── SVR ─────────────────────────────────────────────────────────────────
  {
    brand: "SVR",
    product_name: "SVR Sebiaclear Serum",
    ingredients_text:
      "Aqua/Water, Niacinamide, Glycerin, Zinc Gluconate, Salicylic Acid, Lactic Acid, Caffeine, Panthenol, Allantoin, Xanthan Gum, Sodium Hydroxide, Disodium EDTA, Phenoxyethanol, Ethylhexylglycerin",
  },
  {
    brand: "SVR",
    product_name: "SVR Cicavit+ Creme",
    ingredients_text:
      "Aqua/Water, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Panthenol, Allantoin, Madecassoside, Centella Asiatica Extract, Tocopherol, Ceramide NP, Carbomer, Sodium Hydroxide, Phenoxyethanol, Ethylhexylglycerin",
  },
  {
    brand: "SVR",
    product_name: "SVR Ampoule [HA] Hyaluronic Acid Serum",
    ingredients_text:
      "Aqua/Water, Sodium Hyaluronate, Hyaluronic Acid, Glycerin, Pentylene Glycol, Allantoin, Panthenol, Xanthan Gum, Sodium Hydroxide, Citric Acid, Disodium EDTA, Phenoxyethanol",
  },
  {
    brand: "SVR",
    product_name: "SVR Densitium 45+ Night Cream",
    ingredients_text:
      "Aqua/Water, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Niacinamide, Sodium Hyaluronate, Retinol, Peptides, Ceramide NP, Tocopherol, Carbomer, Sodium Hydroxide, Disodium EDTA, Phenoxyethanol",
  },
  {
    brand: "SVR",
    product_name: "SVR Topialyse Baume Protect+",
    ingredients_text:
      "Aqua/Water, Glycerin, Paraffinum Liquidum/Mineral Oil, Petrolatum, Ceramide NP, Sodium Hyaluronate, Allantoin, Panthenol, Niacinamide, Cetearyl Alcohol, PEG-100 Stearate, Carbomer, Sodium Hydroxide, Disodium EDTA, Methylparaben",
  },
  {
    brand: "SVR",
    product_name: "SVR Clairial Cream SPF 50+",
    ingredients_text:
      "Active: Titanium Dioxide, Zinc Oxide. Inactive: Aqua/Water, Glycerin, Niacinamide, Ascorbyl Glucoside, Alpha-Arbutin, Kojic Acid, Sodium Hyaluronate, Cetearyl Alcohol, Dimethicone, Carbomer, Sodium Hydroxide, Phenoxyethanol, Disodium EDTA",
  },
  {
    brand: "SVR",
    product_name: "SVR Sun Secure Blur SPF 50+",
    ingredients_text:
      "Active: Uvinul A Plus, Tinosorb S, Uvinul T 150, Mexoryl XL. Inactive: Aqua/Water, Glycerin, Niacinamide, Silica, Dimethicone, Cyclopentasiloxane, Cetyl PEG/PPG-10/1 Dimethicone, Carbomer, Sodium Hydroxide, Disodium EDTA, Phenoxyethanol",
  },
];

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const searchLocalProducts = (query: string): LocalProduct[] => {
  if (!query.trim()) return [];

  const tokens = normalize(query).split(" ").filter(Boolean);
  if (tokens.length === 0) return [];

  return LOCAL_PRODUCTS.filter((product) => {
    const haystack = normalize(product.product_name);
    return tokens.every((token) => haystack.includes(token));
  }).slice(0, 8);
};
