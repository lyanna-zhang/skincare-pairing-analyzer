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

  // ─── From Boticinal ──────────────────────────────────────────────────────
  {
    brand: "CeraVe",
    product_name: "CeraVe Foaming Facial Cleanser",
    ingredients_text:
      "AQUA/WATER, GLYCERIN, COCO-BETAINE, PROPYLENE GLYCOL, SODIUM COCOYL GLYCINATE, PEG-120 METHYL GLUCOSE DIOLEATE, SODIUM CHLORIDE, ACRYLATES COPOLYMER, CITRIC ACID, CAPRYLOYL GLYCINE, CAPRYLYL GLYCOL, SODIUM HYDROXIDE, NIACINAMIDE, DISODIUM EDTA, SODIUM HYALURONATE, SODIUM LAUROYL LACTYLATE, CERAMIDE NP, PHENOXYETHANOL, CERAMIDE AP, PHYTOSPHINGOSINE, CHOLESTEROL, XANTHAN GUM, CARBOMER, ETHYLHEXYLGLYCERIN, CERAMIDE EOP",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Moisturizing Cream (454g)",
    ingredients_text:
      "AQUA/WATER, GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, CETEARETH-20, PETROLATUM, DIMETHICONE, PHENOXYETHANOL, BEHENTRIMONIUM METHOSULFATE, POTASSIUM PHOSPHATE, ETHYLHEXYLGLYCERIN, SODIUM LAUROYL LACTYLATE, DISODIUM EDTA, DIPOTASSIUM PHOSPHATE, CERAMIDE NP, CERAMIDE AP, PHYTOSPHINGOSINE, CHOLESTEROL, XANTHAN GUM, CARBOMER, SODIUM HYALURONATE, TOCOPHEROL, CERAMIDE EOP",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Facial Moisturizing Cream",
    ingredients_text:
      "Aqua (Water), Glycerin, Caprylic/Capric Triglyceride, Niacinamide, Cetearyl Alcohol, Dimethicone, Phenoxyethanol, Ceteareth-20, Behentrimonium Methosulfate, Caprylyl Glycol, Polyglyceryl-3 Diisostearate, Sodium Lauroyl Lactylate, Potassium Phosphate, Disodium Edta, Dipotassium Phosphate, Ceramide NP, Ceramide AP, Phytosphingosine, Cholesterol, Xanthan Gum, Carbomer, Ethylhexylglycerin, Sodium Hyaluronate, Ceramide EOP",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Daily Moisturizing Lotion (473ml)",
    ingredients_text:
      "Aqua/Water, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Cetyl Alcohol, Dimethicone, Phenoxyethanol, Polysorbate 20, Ceteareth-20, Behentrimonium Methosulfate, Polyglyceryl-3 Diisostearate, Sodium Lauroyl Lactylate, Ethylhexylglycerin, Potassium Phosphate, Disodium Edta, Dipotassium Phosphate, Ceramide NP, Ceramide AP, Phytosphingosine, Cholesterol, Xanthan Gum, Carbomer, Sodium Hyaluronate, Tocopherol, Ceramide EOP",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Hydrating Cleanser Cream",
    ingredients_text:
      "Aqua / Water, Glycerin, Cetearyl Alcohol, Phenoxyethanol, Stearyl Alcohol, Cetyl Alcohol, Peg-40 Stearate, Behentrimonium Methosulfate, Glyceryl Stearate, Polysorbate 20, Ethylhexylglycerin, Potassium Phosphate, Disodium Edta, Dipotassium Phosphate, Sodium Lauroyl Lactylate, Ceramide NP, Ceramide AP, Phytosphingosine, Cholesterol, Sodium Hyaluronate, Xanthan Gum, Carbomer, Tocopherol, Ceramide EOP",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Eye Repair Cream (14ml)",
    ingredients_text:
      "Aqua/Water, Niacinamide, Cetyl Alcohol, Caprylic/Capric Triglyceride, Glycerin, Propanediol, Isononyl Isononanoate, Jojoba Esters, PEG-20 Methyl Glucose Sesquistearate, Cetearyl Alcohol, Dimethicone, Methyl Glucose Sesquistearate, Phenoxyethanol, Sorbitol, Behentrimonium Methosulfate, Carbomer, Laureth-4, Triethanolamine, Tocopherol, Butylene Glycol, Prunus Amygdalus Dulcis Oil, Hydrogenated Vegetable Oil, Ethylhexylglycerin, Tetrasodium EDTA, Sodium Lauroyl Lactylate, Sodium Hydroxide, Zinc Citrate, Ceramide NP, Ceramide AP, Phytosphingosine, Cholesterol, Xanthan Gum, Potassium Sorbate, Sodium Hyaluronate, Ceramide EOP",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Resurfacing Retinol Serum (30ml)",
    ingredients_text:
      "Aqua/Water, Propanediol, Dimethicone, Cetearyl Ethylhexanoate, Niacinamide, Ammonium Polyacryloyldimethyl Taurate, Dipotassium Glycyrrhizate, Hydrogenated Lecithin, Potassium Phosphate, Ceramide NP, Ceramide AP, Ceramide EOP, Carbomer, Cetearyl Alcohol, Behentrimonium Methosulfate, Dimethiconol, Lecithin, Sodium Citrate, Retinol, Sodium Hyaluronate, Sodium Lauroyl Lactylate, Cholesterol, Phenoxyethanol, Alcohol, Isopropyl Myristate, Caprylyl Glycol, Citric Acid, Trisodium Ethylenediamine Disuccinate, Pentylene Glycol, Phytosphingosine, Xanthan Gum, Polysorbate 20, Ethylhexylglycerin",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe AM Moisturizing Lotion SPF50",
    ingredients_text:
      "AQUA / WATER, GLYCERIN, ISOPROPYL PALMITATE, BIS-ETHYLHEXYLOXYPHENOL METHOXYPHENYL TRIAZINE, ETHYLHEXYL SALICYLATE, NIACINAMIDE, PENTYLENE GLYCOL, BUTYL METHOXYDIBENZOYLMETHANE, ETHYLHEXYL TRIAZONE, PROPANEDIOL, ZEA MAYS STARCH / CORN STARCH, POTASSIUM CETYL PHOSPHATE, DIISOPROPYL SEBACATE, ORYZA SATIVA CERA / RICE BRAN WAX, STEARIC ACID, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, GLYCERYL STEARATE, CETEARYL ALCOHOL, TRIETHANOLAMINE, BEHENTRIMONIUM METHOSULFATE, TRIETHYL CITRATE, SODIUM HYALURONATE, SODIUM POLYACRYLATE, SODIUM LAUROYL LACTYLATE, MYRISTIC ACID, CHOLESTEROL, PALMITIC ACID, TOCOPHEROL, CAPRYLYL GLYCOL, CITRIC ACID, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, XANTHAN GUM, PHYTOSPHINGOSINE, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, BUTYROSPERMUM PARKII BUTTER / SHEA BUTTER, BENZOIC ACID, PEG-100 STEARATE",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe SA Smoothing Cleanser",
    ingredients_text:
      "Aqua/Water, Sodium Lauroyl Sarcosinate, Cocamidopropyl Hydroxysultaine, Glycerin, Niacinamide, Gluconolactone, Sodium Methyl Cocoyl Taurate, PEG-150 Pentaerythrityl Tetrastearate, Ceramide NP, Ceramide AP, Ceramide EOP, Carbomer, Calcium Gluconate, Salicylic Acid, Sodium Benzoate, Sodium Lauroyl Lactylate, Cholesterol, Phenoxyethanol, Disodium EDTA, Tetrasodium EDTA, Hydrolyzed Hyaluronic Acid, Phytosphingosine, Xanthan Gum, Ethylhexylglycerin",
  },
  {
    brand: "CeraVe",
    product_name: "CeraVe Oil Control Gel Cream",
    ingredients_text:
      "AQUA / WATER, NIACINAMIDE, GLYCERIN, CETEARYL ISONONANOATE, C14-22 ALCOHOLS, ISOPROPYL MYRISTATE, ZEA MAYS STARCH / CORN STARCH, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, CARBOMER, CETEARYL ALCOHOL, BEHENTRIMONIUM METHOSULFATE, TRIETHYL CITRATE, SILICA, SODIUM HYDROXIDE, SODIUM HYALURONATE, SODIUM LAUROYL LACTYLATE, CHOLESTEROL, PHENOXYETHANOL, CITRIC ACID, CAPRYLYL GLYCOL, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, XANTHAN GUM, PHYTOSPHINGOSINE, POLYACRYLATE CROSSPOLYMER-6, BENZOIC ACID, C12-20 ALKYL GLUCOSIDE",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Niacinamide 10% + Zinc 1%",
    ingredients_text:
      "AQUA (WATER), NIACINAMIDE, PENTYLENE GLYCOL, ZINC PCA, DIMETHYL ISOSORBIDE, TAMARINDUS INDICA SEED GUM, XANTHAN GUM, ISOCETETH-20, ETHOXYDIGLYCOL, PHENOXYETHANOL, CHLORPHENESIN",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary AHA 30% + BHA 2% Peeling Solution",
    ingredients_text:
      "GLYCOLIC ACID, AQUA (WATER), ALOE BARBADENSIS LEAF WATER, SODIUM HYDROXIDE, DAUCUS CAROTA SATIVA EXTRACT, PROPANEDIOL, COCAMIDOPROPYL DIMETHYLAMINE, SALICYLIC ACID, LACTIC ACID, TARTARIC ACID, CITRIC ACID, PANTHENOL, SODIUM HYALURONATE CROSSPOLYMER, TASMANNIA LANCEOLATA FRUIT/LEAF EXTRACT, GLYCERIN, PENTYLENE GLYCOL, XANTHAN GUM, POLYSORBATE 20, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, POTASSIUM SORBATE, SODIUM BENZOATE, ETHYLHEXYLGLYCERIN, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Hyaluronic Acid 2% + B5",
    ingredients_text:
      "AQUA (WATER), SODIUM HYALURONATE, PROPANEDIOL, PENTYLENE GLYCOL, HYDROLYZED HYALURONIC ACID, SODIUM HYALURONATE CROSSPOLYMER, PHOSPHOLIPIDS, SPHINGOLIPIDS, PANTHENOL, AHNFELTIOPSIS CONCINNA EXTRACT, GLYCERIN, POLYSORBATE 20, CITRIC ACID, SODIUM CITRATE, P-ANISIC ACID, TOCOPHEROL, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, CAPRYLYL GLYCOL, ETHOXYDIGLYCOL, ETHYLHEXYLGLYCERIN, HEXYLENE GLYCOL, PHENOXYETHANOL, CHLORPHENESIN",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Alpha Arbutin 2% + HA",
    ingredients_text:
      "AQUA (WATER), ALPHA-ARBUTIN, PROPANEDIOL, POLYACRYLATE CROSSPOLYMER-6, HYDROLYZED SODIUM HYALURONATE, ERGOTHIONEINE, POLYSORBATE 20, CITRIC ACID, SODIUM CITRATE, SODIUM HYDROXIDE, SODIUM METABISULFITE, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, ETHOXYDIGLYCOL, PHENOXYETHANOL, CHLORPHENESIN",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Natural Moisturizing Factors + HA",
    ingredients_text:
      "Aqua (Water), Caprylic/Capric Triglyceride, Cetyl Alcohol, Propanediol, Stearyl Alcohol, Glycerin, Sodium Hyaluronate, Arginine, Aspartic Acid, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Glucose, Maltose, Fructose, Trehalose, Sodium PCA, PCA, Sodium Lactate, Urea, Allantoin, Linoleic Acid, Oleic Acid, Phytosteryl Canola Glycerides, Palmitic Acid, Stearic Acid, Lecithin, Triolein, Tocopherol, Carbomer, Isoceteth-20, Polysorbate 60, Sodium Chloride, Citric Acid, Trisodium Ethylenediamine Disuccinate, Pentylene Glycol, Triethanolamine, Sodium Hydroxide, Phenoxyethanol, Chlorphenesin",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Multi-Peptide + HA Serum",
    ingredients_text:
      "AQUA (WATER), GLYCERIN, LACTOCOCCUS FERMENT LYSATE, ACETYL HEXAPEPTIDE-8, PENTAPEPTIDE-18, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7, PALMITOYL TRIPEPTIDE-38, DIPEPTIDE DIAMINOBUTYROYL BENZYLAMIDE DIACETATE, ACETYLARGINYLTRYPTOPHYL DIPHENYLGLYCINE, SODIUM HYALURONATE CROSSPOLYMER, SODIUM HYALURONATE, ALLANTOIN, GLYCINE, ALANINE, SERINE, VALINE, ISOLEUCINE, PROLINE, THREONINE, HISTIDINE, PHENYLALANINE, ARGININE, ASPARTIC ACID, TREHALOSE, FRUCTOSE, GLUCOSE, MALTOSE, UREA, SODIUM PCA, PCA, SODIUM LACTATE, CITRIC ACID, HYDROXYPROPYL CYCLODEXTRIN, SODIUM CHLORIDE, SODIUM HYDROXIDE, BUTYLENE GLYCOL, PENTYLENE GLYCOL, ACACIA SENEGAL GUM, XANTHAN GUM, CARBOMER, POLYSORBATE 20, PPG-26-BUTETH-26, PEG-40 HYDROGENATED CASTOR OIL, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, ETHOXYDIGLYCOL, SODIUM BENZOATE, CAPRYLYL GLYCOL, ETHYLHEXYLGLYCERIN, PHENOXYETHANOL, CHLORPHENESIN",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Vitamin C Suspension 23% + HA Spheres 2%",
    ingredients_text:
      "ASCORBIC ACID, SQUALANE, ISODECYL NEOPENTANOATE, ISONONYL ISONONANOATE, COCONUT ALKANES, ETHYLENE/PROPYLENE/STYRENE COPOLYMER, ETHYLHEXYL PALMITATE, SILICA DIMETHYL SILYLATE, SODIUM HYALURONATE, GLUCOMANNAN, COCO-CAPRYLATE/CAPRATE, BUTYLENE/ETHYLENE/STYRENE COPOLYMER, ACRYLATES/ETHYLHEXYL ACRYLATE CROSSPOLYMER, TRIHYDROXYSTEARIN, BHT",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Squalane Cleanser",
    ingredients_text:
      "Squalane, Aqua (Water), Coco-Caprylate/Caprate, Glycerin, Sucrose Stearate, Ethyl Macadamiate, Caprylic/Capric Triglyceride, Hydrogenated Starch Hydrolysate, Sucrose Laurate, Polyacrylate Crosspolymer-6, Isoceteth-20, Sodium Polyacrylate, Tocopherol, Hydroxymethoxyphenyl Decanone, Trisodium Ethylenediamine Disuccinate, Malic Acid, Ethylhexylglycerin, Chlorphenesin",
  },
  {
    brand: "The Ordinary",
    product_name: "The Ordinary Salicylic Acid 2% Solution",
    ingredients_text:
      "AQUA (WATER), SACCHARIDE ISOMERATE, COCAMIDOPROPYL DIMETHYLAMINE, SALICYLIC ACID, HYDROXYETHYLCELLULOSE, POLYSORBATE 20, CITRIC ACID, SODIUM CITRATE, SODIUM HYDROXIDE, PHENOXYETHANOL, CHLORPHENESIN",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Effaclar Foaming Gel Cleanser",
    ingredients_text:
      "Aqua/Water, Sodium Laureth Sulfate, Peg-8, Coco-Betaine, Hexylene Glycol, Sodium Chloride, Peg-120 Methyl Glucose Dioleate, Zinc Pca, Sodium Hydroxide, Caprylyl Glycol, Citric Acid, Sodium Benzoate, Phenoxyethanol",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Effaclar Mat+ Moisturizer",
    ingredients_text:
      "AQUA / WATER / EAU, GLYCERIN, DIMETHICONE, ISOCETYL STEARATE, ALCOHOL DENAT., SILICA, DIMETHICONE/VINYL DIMETHICONE CROSSPOLYMER, ACRYLAMIDE/SODIUM ACRYLOYLDIMETHYLTAURATE COPOLYMER, BUTYLENE GLYCOL, COCAMIDE MEA, SORBITAN OLEATE, SARCOSINE, GLYCERYL STEARATE, PEG-100 STEARATE, ISOHEXADECANE, SODIUM HYDROXIDE, SILICA SILYLATE, PERLITE, HYDROXYACETOPHENONE, CAPRYLOYL SALICYLIC ACID, CITRIC ACID, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, XANTHAN GUM, PENTYLENE GLYCOL, POLYSORBATE 80, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, TOCOPHEROL, SALICYLIC ACID",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Toleriane Dermo Cleanser",
    ingredients_text:
      "Aqua, Ethylhexyl Palmitate, Glycerin, Dipropylene Glycol, Carbomer, Sodium Hydroxide, Ethylhexylglycerin, Capryl Glycol",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Cicaplast Baume B5+",
    ingredients_text:
      "AQUA / WATER / EAU, HYDROGENATED POLYISOBUTENE, DIMETHICONE, GLYCERIN, BUTYROSPERMUM PARKII BUTTER / SHEA BUTTER, PANTHENOL, ZEA MAYS STARCH / CORN STARCH, NIACINAMIDE, MADECASSOSIDE, ZINC GLUCONATE, MANGANESE GLUCONATE, COPPER GLUCONATE, BISABOLOL, CERA MICROCRISTALLINA / MICROCRYSTALLINE WAX, ISOPROPYL MYRISTATE, PEG-100 STEARATE, GLYCERYL STEARATE, STEARYL ALCOHOL, DIMETHICONOL, SODIUM HYDROXIDE, CARBOMER, DISODIUM EDTA",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Effaclar Duo+M",
    ingredients_text:
      "AQUA / WATER / EAU, GLYCERIN, DIMETHICONE, ISOCETYL STEARATE, NIACINAMIDE, ISOPROPYL LAUROYL SARCOSINATE, SILICA, AMMONIUM POLYACRYLOYLDIMETHYL TAURATE, ALCOHOL DENAT., HYDROGENATED PALM GLYCERIDES, TOCOPHEROL, HYDROXYACETOPHENONE, SARCOSINE, PIROCTONE OLAMINE, SALICYLIC ACID, CAPRYLOYL SALICYLIC ACID, CERAMIDE NP, ZINC PCA, ACETYL GLUCOSAMINE, CITRIC ACID, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, XANTHAN GUM, PENTYLENE GLYCOL, TRIETHANOLAMINE",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Anthelios UVMune 400 SPF50+ Hydrating Cream",
    ingredients_text:
      "AQUA / WATER / EAU, DIISOPROPYL SEBACATE, ALCOHOL DENAT., ETHYLHEXYL SALICYLATE, ETHYLHEXYL TRIAZONE, BIS-ETHYLHEXYLOXYPHENOL METHOXYPHENYL TRIAZINE, DROMETRIZOLE TRISILOXANE, DIETHYLAMINO HYDROXYBENZOYL HEXYL BENZOATE, GLYCERIN, C12-15 ALKYL BENZOATE, SILICA, NIACINAMIDE, DIMETHICONE, ISOCETYL STEARATE, SQUALANE, SODIUM HYALURONATE, TOCOPHEROL, CARBOMER, SODIUM HYDROXIDE, DISODIUM EDTA",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Toleriane Sensitive Riche",
    ingredients_text:
      "Aqua / Water, Isocetyl Stearate, Coco-Caprylate/Caprate, Squalene, Butyrospermum Parkii Butter / Shea Butter, Glycerin, Ceramide NP, Niacinamide, Panthenol, Sodium Hyaluronate, Carbomer, Xanthan Gum, Sodium Hydroxide, Disodium EDTA, Caprylyl Glycol",
  },
  {
    brand: "La Roche-Posay",
    product_name: "La Roche-Posay Effaclar Serum",
    ingredients_text:
      "Aqua / Water, Alcohol Denat., Propanediol, Glycolic Acid, Niacinamide, Dimethyl Isosorbide, Glycerin, Zinc PCA, Salicylic Acid, Sodium Hydroxide, Capryloyl Salicylic Acid, Citric Acid, Disodium EDTA, Caprylyl Glycol, Phenoxyethanol",
  },
  {
    brand: "SVR",
    product_name: "SVR Sebiaclear Ampoule Flash",
    ingredients_text:
      "AQUA/WATER/EAU, AZELAIC ACID, GLYCERIN, ISOPROPYL ALCOHOL, ISOPENTYLDIOL, NIACINAMIDE, ZINC GLUCONATE, DICAPRYLYL ETHER, SALICYLIC ACID, PENTYLENE GLYCOL, SODIUM HYDROXIDE, MICROCRYSTALLINE CELLULOSE, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, SPHINGOMONAS FERMENT EXTRACT, CELLULOSE GUM, TOCOPHEROL",
  },
  {
    brand: "SVR",
    product_name: "SVR Sebiaclear Foaming Gel Cleanser",
    ingredients_text:
      "AQUA/WATER/EAU, GLYCERIN, GLUCONOLACTONE, DECYL GLUCOSIDE, DISODIUM COCOYL GLUTAMATE, COCO-BETAINE, GLYCERYL OLEATE, SODIUM COCOYL GLUTAMATE, NIACINAMIDE, AZELAIC ACID, ZINC GLUCONATE, SALICYLIC ACID, XANTHAN GUM, CITRIC ACID, SODIUM HYDROXIDE, PHENOXYETHANOL, ETHYLHEXYLGLYCERIN",
  },
  {
    brand: "SVR",
    product_name: "SVR Sun Secure Blur SPF50+",
    ingredients_text:
      "AQUA (PURIFIED WATER), ETHYLHEXYL METHOXYCINNAMATE, CYCLOPENTASILOXANE, POLYMETHYL METHACRYLATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, BUTYL METHOXYDIBENZOYLMETHANE, NIACINAMIDE, OCTOCRYLENE, BIS-ETHYLHEXYLOXYPHENOL METHOXYPHENYL TRIAZINE, DIISOPROPYL ADIPATE, DIMETHICONE, GLYCERIN, SILICA, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, SODIUM HYDROXIDE, PHENOXYETHANOL, TOCOPHEROL",
  },
  {
    brand: "SVR",
    product_name: "SVR Topialyse Baume Protect+ (400ml)",
    ingredients_text:
      "Aqua/Water/Eau, Helianthus Annuus (Sunflower) Seed Oil, Cocos Nucifera (Coconut) Oil, Orbignya Oleifera Seed Oil, Glycerin, Cetearyl Alcohol, Ceramide NP, Panthenol, Allantoin, Niacinamide, Sodium Hyaluronate, Carbomer, Sodium Hydroxide, Phenoxyethanol, Ethylhexylglycerin",
  },
  {
    brand: "SVR",
    product_name: "SVR Sebiaclear Mat + Pores",
    ingredients_text:
      "AQUA/WATER/EAU, SILICA, PROPANEDIOL, GLUCONOLACTONE, NIACINAMIDE, UNDECANE, ORBIGNYA OLEIFERA SEED OIL, ZINC GLUCONATE, TRIDECANE, AZELAIC ACID, SALICYLIC ACID, HYDROXYACETOPHENONE, XANTHAN GUM, CITRIC ACID, SODIUM HYDROXIDE, PHENOXYETHANOL, ETHYLHEXYLGLYCERIN",
  },
  {
    brand: "SVR",
    product_name: "SVR Sebiaclear Creme SPF50+",
    ingredients_text:
      "AQUA/WATER/EAU, SILICA, DIETHYLAMINO HYDROXYBENZOYL HEXYL BENZOATE, DIISOPROPYL ADIPATE, ETHYLHEXYL TRIAZONE, BIS-ETHYLHEXYLOXYPHENOL METHOXYPHENYL TRIAZINE, GLYCERIN, NIACINAMIDE, GLUCONOLACTONE, ZINC GLUCONATE, AZELAIC ACID, SALICYLIC ACID, CARBOMER, SODIUM HYDROXIDE, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, PHENOXYETHANOL, ETHYLHEXYLGLYCERIN",
  },
  {
    brand: "SVR",
    product_name: "SVR Sebiaclear Micro-Peel",
    ingredients_text:
      "Aqua, Alcohol Denat, Niacinamide, Lactobionic Acid, Zinc Gluconate, Salicylic Acid, Sodium Hydroxide, Azelaic Acid, Glycerin, Panthenol, Citric Acid, Phenoxyethanol, Ethylhexylglycerin",
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
