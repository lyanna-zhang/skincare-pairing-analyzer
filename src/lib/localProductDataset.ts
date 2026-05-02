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

  // ─── Avène ───────────────────────────────────────────────────────────────
  {
    brand: "Avène",
    product_name: "Avène Cicalfate+ Restorative Protective Cream",
    ingredients_text:
      "AVENE THERMAL SPRING WATER (AVENE AQUA), CAPRYLIC/CAPRIC TRIGLYCERIDE, MINERAL OIL (PARAFFINUM LIQUIDUM), GLYCERIN, HYDROGENATED VEGETABLE OIL, ZINC OXIDE, PROPYLENE GLYCOL, POLYGLYCERYL-2 SESQUIISOSTEARATE, PEG-22/DODECYL GLYCOL COPOLYMER, ALUMINUM STEARATE, AQUAPHILUS DOLOMIAE FERMENT FILTRATE, ARGININE, BEESWAX (CERA ALBA), COPPER SULFATE, MAGNESIUM STEARATE, MAGNESIUM SULFATE, MICROCRYSTALLINE WAX (CERA MICROCRISTALLINA), TROMETHAMINE, ZINC SULFATE",
  },
  {
    brand: "Avène",
    product_name: "Avène Cleanance Cleansing Gel",
    ingredients_text:
      "AVENE THERMAL SPRING WATER (AVENE AQUA), AQUA, ZINC COCETH SULFATE, LAURYL BETAINE, DECYL GLUCOSIDE, CETEARETH-60 MYRISTYL GLYCOL, PEG-7 GLYCERYL COCOATE, POLYSORBATE 20, CITRIC ACID, FRAGRANCE (PARFUM), ISOPROPYL ALCOHOL, PEG-40 HYDROGENATED CASTOR OIL, PEG-6, PPG-26-BUTETH-26, SILYBUM MARIANUM FRUIT EXTRACT, SODIUM BENZOATE, SODIUM CHLORIDE, SODIUM HYDROXIDE, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, ZINC GLUCONATE",
  },
  {
    brand: "Avène",
    product_name: "Avène Hydrance Rich Hydrating Cream",
    ingredients_text:
      "AVENE THERMAL SPRING WATER (AVENE AQUA), MINERAL OIL (PARAFFINUM LIQUIDUM), GLYCERIN, ISOHEXADECANE, DIMETHICONE, CETEARYL ALCOHOL, CARTHAMUS TINCTORIUS (SAFFLOWER) SEED OIL, ISOCETYL STEAROYL STEARATE, TRIETHYLHEXANOIN, GLYCERYL STEARATE, PEG-100 STEARATE, 1,2-HEXANEDIOL, BUTYROSPERMUM PARKII (SHEA) BUTTER, CETEARYL GLUCOSIDE, BENZOIC ACID, FRAGRANCE (PARFUM), PHYTOSTEROLS, POLYACRYLATE-13, POLYISOBUTENE, POLYSORBATE 20, SODIUM HYDROXIDE, SORBITAN ISOSTEARATE, AQUA, XANTHAN GUM",
  },
  {
    brand: "Avène",
    product_name: "Avène Cleanance Solar SPF50+",
    ingredients_text:
      "Avene Thermal Spring Water (Avene Aqua), C12-15 Alkyl Benzoate, Methylene Bis-Benzatriazolyl Tetramethylbutylphenol, Cetearyl Isononanoate, Aqua, Diisopropyl Adipate, Isodecyl Neopentanoate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Diethylhexyl Butamido Triazone, Polymethyl Methacrylate, Butyl Methoxydibenzoylmethane, Potassium Cetyl Phosphate, Decyl Glucoside, Glyceryl Laurate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Benzoic Acid, Caprylic/Capric Triglyceride, Caprylyl Glycol, Disodium EDTA, Fragrance (Parfum), Glyceryl Behenate, Silica, Sodium Hydroxide, Tocopheryl Glucoside, Xanthan Gum, Zinc Gluconate",
  },
  {
    brand: "Avène",
    product_name: "Avène Hydrance Light Hydrating Emulsion",
    ingredients_text:
      "AVENE THERMAL SPRING WATER (AVENE AQUA), GLYCERIN, PROPYLENE GLYCOL DICAPRYLATE/DICAPRATE, C14-22 ALCOHOLS, DIMETHICONE, ISOCETYL STEAROYL STEARATE, TRIETHYLHEXANOIN, 1,2-HEXANEDIOL, MICROCRYSTALLINE CELLULOSE, POTASSIUM CETYL PHOSPHATE, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, BENZOIC ACID, C12-20 ALKYL GLUCOSIDE, FRAGRANCE (PARFUM), HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, PHYTOSTEROLS, POLYSORBATE 60, SCLEROTIUM GUM, SODIUM HYDROXIDE, SORBITAN ISOSTEARATE, SQUALANE, AQUA",
  },
  {
    brand: "Avène",
    product_name: "Avène XeraCalm AD Lipid-Replenishing Balm",
    ingredients_text:
      "AVENE THERMAL SPRING WATER (AVENE AQUA), GLYCERIN, CARTHAMUS TINCTORIUS (SAFFLOWER) SEED OIL, CETEARYL ALCOHOL, HYDROGENATED VEGETABLE OIL, BUTYROSPERMUM PARKII (SHEA) BUTTER, CAPRYLIC/CAPRIC TRIGLYCERIDE, GLYCERYL STEARATE, AQUAPHILUS DOLOMIAE EXTRACT, ARGININE, CETEARYL GLUCOSIDE, CITRIC ACID, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, SODIUM DEXTRAN SULFATE, SODIUM STEAROYL GLUTAMATE, TOCOPHEROL, XANTHAN GUM",
  },

  // ─── Bioderma ────────────────────────────────────────────────────────────
  {
    brand: "Bioderma",
    product_name: "Bioderma Sensibio H2O Micellar Water",
    ingredients_text:
      "Aqua, PEG-6 Caprylic/Capric Glycerides, Aloe Barbadensis Leaf Extract, Cucumis Sativus (Cucumber) Fruit Extract, Mannitol, Xylitol, Rhamnose, Fructooligosaccharides, Lecithin, Ginkgo Biloba Leaf Extract, Camellia Sinensis Leaf Extract, Propylene Glycol, Disodium EDTA, Cetrimonium Bromide, Sodium Hydroxide, Citric Acid",
  },
  {
    brand: "Bioderma",
    product_name: "Bioderma Sebium H2O Micellar Water",
    ingredients_text:
      "Aqua, PEG-6 Caprylic/Capric Glycerides, Sodium Citrate, Zinc Gluconate, Copper Sulfate, Ginkgo Biloba Leaf Extract, Mannitol, Xylitol, Rhamnose, Fructooligosaccharides, Propylene Glycol, Citric Acid, Disodium EDTA, Cetrimonium Bromide, Fragrance (Parfum)",
  },
  {
    brand: "Bioderma",
    product_name: "Bioderma Sensibio DS+ Soothing Cream",
    ingredients_text:
      "Aqua, Cocos Nucifera (Coconut) Oil, Propylene Glycol, Caprylic/Capric Triglyceride, Dimethicone, Glycyrrhetinic Acid, Sorbitan Sesquioleate, Piroctone Olamine, Glyceryl Undecylenate, Climbazole, Fructooligosaccharides, Laminaria Ochroleuca Extract, Cetyl Alcohol, Carbomer, Sclerotium Gum, Sodium Hydroxide, Phenoxyethanol",
  },
  {
    brand: "Bioderma",
    product_name: "Bioderma Sebium Pore Refiner",
    ingredients_text:
      "Aqua, Silica, Propylheptyl Caprylate, Glycerin, Propanediol, Ethylhexyl Pelargonate, Polyglyceryl-3 Methylglucose Distearate, Arachidyl Alcohol, Helianthus Annuus (Sunflower) Seed Wax, Caprylic/Capric Triglyceride, Dicaprylyl Carbonate, Sodium Polyacryloyldimethyl Taurate, Behenyl Alcohol, Fragrance (Parfum), Citric Acid, Xanthan Gum, Dextrin Palmitate, Arachidyl Glucoside, Trisodium Ethylenediamine Disuccinate, Salicylic Acid, Diisostearyl Malate, Fomes Officinalis (Mushroom) Extract, Sodium Hydroxide, Mannitol, Xylitol, Rhamnose, Lactobacillus Ferment, Tocopherol",
  },
  {
    brand: "Bioderma",
    product_name: "Bioderma Sebium Mat Control",
    ingredients_text:
      "Aqua, Glycerin, Cyclopentasiloxane, Methyl Methacrylate Crosspolymer, Dipropylene Glycol, Polymethylsilsesquioxane, PEG-10 Dimethicone, Butylene Glycol, Sodium Chloride, Zinc Gluconate, Disodium EDTA, Salicylic Acid, Mannitol, Xylitol, Rhamnose, Xanthan Gum, Sodium Hydroxide, Pyridoxine HCl, Fomes Officinalis (Mushroom) Extract, PEG-40 Hydrogenated Castor Oil, Phenoxyethanol, Fragrance (Parfum)",
  },
  {
    brand: "Bioderma",
    product_name: "Bioderma Atoderm Intensive Balm",
    ingredients_text:
      "Aqua, Glycerin, Paraffinum Liquidum (Mineral Oil), Helianthus Annuus (Sunflower) Seed Oil, Behenyl Alcohol, Canola Oil, Sucrose Stearate, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Pentylene Glycol, Phytosterols, Xylitol, Zinc Gluconate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Palmitamide MEA, 1,2-Hexanediol, Caprylyl Glycol, Sodium Citrate, Mannitol, Rhamnose, Sodium Lauroyl Lactylate, Sodium Hydroxide, Polysorbate 60, Tocopherol, Phytosphingosine, Ceramide NP, Ethylhexylglycerin, Ceramide AP, Cholesterol, Carbomer, Xanthan Gum, Fructooligosaccharides, Caprylic/Capric Triglyceride, Laminaria Ochroleuca Extract, Ceramide EOP",
  },

  // ─── Eucerin ─────────────────────────────────────────────────────────────
  {
    brand: "Eucerin",
    product_name: "Eucerin Sun Gel-Cream Oil Control SPF50+",
    ingredients_text:
      "Aqua, Homosalate, Polymethylsilsesquioxane, Butyl Methoxydibenzoylmethane, Ethylhexyl Salicylate, Octocrylene, Alcohol Denat, Tapioca Starch, Phenylbenzimidazole Sulfonic Acid, Cyclomethicone, Behenyl Alcohol, Cetearyl Alcohol, Methylpropanediol, Silica Dimethyl Silylate, Glycerin, Carnitine, Glycyrrhiza Inflata Root Extract, Sodium Stearoyl Glutamate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Carbomer, Xanthan Gum, Sodium Hydroxide, Sodium Chloride, Trisodium EDTA, Ethylhexylglycerin, Phenoxyethanol",
  },
  {
    brand: "Eucerin",
    product_name: "Eucerin Sun Pigment Control Fluid SPF50",
    ingredients_text:
      "Aqua, C12-15 Alkyl Benzoate, Alcohol Denat., Butyl Methoxydibenzoylmethane, Ethylhexyl Triazone, Butylene Glycol Dicaprylate/Dicaprate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Dibutyl Adipate, Glyceryl Stearate Citrate, Silica, Phenylbenzimidazole Sulfonic Acid, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Tapioca Starch, Silica Dimethyl Silylate, Cetearyl Alcohol, Behenyl Alcohol, Isobutylamido Thiazolyl Resorcinol (Thiamidol), Glycyrrhiza Inflata Root Extract, Glycyrrhetinic Acid, Tocopheryl Acetate, Glycerin, Xanthan Gum, Carrageenan, Hydroxypropyl Methylcellulose, Sodium Hydroxide, Trisodium EDTA, Hydroxyacetophenone, Phenoxyethanol, Ethylhexylglycerin",
  },
  {
    brand: "Eucerin",
    product_name: "Eucerin Aquaphor Healing Ointment",
    ingredients_text:
      "Paraffinum Liquidum, Ceresin, Lanolin Alcohol, Panthenol, Glycerin, Bisabolol",
  },
  {
    brand: "Eucerin",
    product_name: "Eucerin Anti-Pigment Serum",
    ingredients_text:
      "Aqua, Alcohol Denat., Butylene Glycol, Glycerin, Isopropyl Palmitate, Cetearyl Isononanoate, Diisopropyl Adipate, Propylheptyl Caprylate, Cetearyl Alcohol, Distarch Phosphate, Isobutylamido Thiazolyl Resorcinol, Sodium Ascorbyl Phosphate, Sodium Hyaluronate, Glycyrrhiza Inflata Root Extract, Tocopherol, Glucosylrutin, Sodium Stearoyl Glutamate, Glyceryl Stearate, Hydroxypropyl Starch Phosphate, Xanthan Gum, Gellan Gum, Dimethicone, Isoquercitrin, Citric Acid, Sodium Chloride, Ethylhexylglycerin, Trisodium EDTA, Phenoxyethanol",
  },
  {
    brand: "Eucerin",
    product_name: "Eucerin DermoPure Triple Action Fluid",
    ingredients_text:
      "Aqua, Alcohol Denat., Glycerin, Tapioca Starch, Carbomer, Salicylic Acid, Isobutylamido Thiazolyl Resorcinol, Decylene Glycol, Glycyrrhiza Inflata Root Extract, Panthenol, Glucosylrutin, Isoquercitrin, Ammonium Acryloyldimethyltaurate/VP Copolymer, Pantolactone, Sodium Hydroxide, Trisodium EDTA, Citric Acid",
  },
  {
    brand: "Eucerin",
    product_name: "Eucerin Anti-Pigment Night Cream",
    ingredients_text:
      "Aqua, Glycerin, Alcohol Denat., Butyrospermum Parkii Butter, Cetearyl Isononanoate, Squalane, Isopropyl Palmitate, Panthenol, Glyceryl Stearate Citrate, Cetearyl Alcohol, Hydrogenated Coco-Glycerides, Methylpropanediol, Lauroyl Lysine, Isobutylamido Thiazolyl Resorcinol (Thiamidol), Glycyrrhiza Inflata Root Extract, Tocopherol, Glucosylrutin, Pantolactone, Xanthan Gum, Isoquercitrin, Distarch Phosphate, Citric Acid, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol",
  },

  // ─── ISDIN ───────────────────────────────────────────────────────────────
  {
    brand: "ISDIN",
    product_name: "ISDIN Isdinceutics K-OX Eyes",
    ingredients_text:
      "Aqua, Glycerin, Isohexadecane, Isopropyl Myristate, PPG-15 Stearyl Ether, PEG-30 Dipolyhydroxystearate, Phytonadione Epoxide, Magnesium Sulfate, Phenoxyethanol, Ozokerite, Fragrance (Parfum), Titanium Dioxide (CI 77891), Sodium Dextran Sulfate, Acrylates/C12-22 Alkyl Methacrylate Copolymer, Steareth-20, Hesperidin Methyl Chalcone, Disodium EDTA, Hydrolyzed Hyaluronic Acid, Ethylhexylglycerin, PEG-8, Pentylene Glycol, Tocopherol, N-Hydroxysuccinimide, BHT, Dipeptide-2, Ascorbyl Palmitate, Palmitoyl Tetrapeptide-7, Ascorbic Acid, Citric Acid, Chrysin, Palmitoyl Tripeptide-1",
  },
  {
    brand: "ISDIN",
    product_name: "ISDIN Isdinceutics Hyaluronic Concentrate",
    ingredients_text:
      "Aqua, Dimethicone, Propanediol, Glycerin, 1,2-Hexanediol, Sodium Acrylates Copolymer, Dimethicone Crosspolymer, Butylene Glycol, Pseudoalteromonas Ferment Extract, Glycereth-26, Lecithin, Maltodextrin, Sodium Benzoate, Pentylene Glycol, Lens Esculenta (Lentil) Seed Extract, Fragrance (Parfum), Disodium EDTA, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate, Xanthan Gum, Citric Acid, Biosaccharide Gum-1, Carbomer, Polysorbate 20, Sodium Lactate, Salicylic Acid, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7",
  },
  {
    brand: "ISDIN",
    product_name: "ISDIN Isdinceutics Retinal Intense Night Serum",
    ingredients_text:
      "Aqua, Dimethicone, Dibutyl Adipate, Niacinamide, Isoamyl Laurate, Lauryl PEG/PPG-18/18 Methicone, Glycerin, Propanediol, Dimethicone/Vinyl Dimethicone Crosspolymer, Alcohol Denat., Bakuchiol, 1,2-Hexanediol, Pentylene Glycol, Caprylic/Capric Triglyceride, Ethylcellulose, Hydroxyacetophenone, Caprylyl Glycol, Fragrance (Parfum), Sodium Acrylates Crosspolymer-2, Polyacrylate Crosspolymer-6, Vigna Aconitifolia Seed Extract, Tocopheryl Acetate, Tocopherol, Citric Acid, Xanthan Gum, Maltodextrin, Melatonin, Retinal (Retinaldehyde), Silica, Disodium EDTA, Phospholipids, Ascorbic Acid, Rosmarinus Officinalis (Rosemary) Leaf Extract, Palmitoyl Tetrapeptide-7, Chrysin",
  },
  {
    brand: "ISDIN",
    product_name: "ISDIN Isdinceutics Hyaluronic Moisture Cream",
    ingredients_text:
      "Aqua, C15-19 Alkane, Propanediol, Glycerin, Caprylic/Capric Triglyceride, Butylene Glycol, Cellulose, Sodium Acrylates Crosspolymer-2, Dimethicone, 1,2-Hexanediol, Panthenol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Caprylyl Glycol, Ammonium Acryloyldimethyltaurate/VP Copolymer, Tocopheryl Acetate, Trehalose, Urea, Fragrance (Parfum), Tocopherol, Vigna Aconitifolia Seed Extract, Citric Acid, Maltodextrin, Sodium Hyaluronate, Tetrasodium Glutamate Diacetate, Hydrolyzed Hyaluronic Acid, Pentylene Glycol, Serine, Camellia Japonica Flower Extract, Alteromonas Ferment Extract",
  },
  {
    brand: "ISDIN",
    product_name: "ISDIN Glicolisdin 15% Glycolic Gel",
    ingredients_text:
      "Aqua, Alcohol Denat., Glycolic Acid, Butylene Glycol, Allantoin, Glycerin, Phenoxyethanol, Carbomer, Sodium Hydroxide, Ethylhexylglycerin, Sodium Benzoate",
  },
  {
    brand: "ISDIN",
    product_name: "ISDIN Glicolisdin 8% Glycolic Cream",
    ingredients_text:
      "Aqua, Glycolic Acid, PEG-40 Stearate, Glyceryl Stearate, Caprylic/Capric Triglyceride, Cetyl Alcohol, Stearyl Alcohol, Allantoin, Glycerin, Phenoxyethanol, Carbomer, Sodium Hydroxide, Ethylhexylglycerin",
  },

  // ─── Vichy ───────────────────────────────────────────────────────────────
  {
    brand: "Vichy",
    product_name: "Vichy Mineral 89 Hyaluronic Acid Serum",
    ingredients_text:
      "Aqua, PEG/PPG/Polybutylene Glycol-8/5/3 Glycerin, Glycerin, Butylene Glycol, Methylpropanediol, Niacinamide, Sodium Hyaluronate, Pentylene Glycol, Hydroxyacetophenone, Sodium Citrate, Citric Acid, Phenoxyethanol",
  },
  {
    brand: "Vichy",
    product_name: "Vichy Capital Soleil SPF50 Dry Touch",
    ingredients_text:
      "AQUA, HOMOSALATE, SILICA, ETHYLHEXYL SALICYLATE, ETHYLHEXYL TRIAZONE, C12-15 ALKYL BENZOATE, ALCOHOL DENAT., OCTOCRYLENE, BUTYL METHOXYDIBENZOYLMETHANE, DROMETRIZOLE TRISILOXANE, GLYCERIN, NIACINAMIDE, ISOCETYL STEARATE, DIMETHICONE, DIETHYLAMINO HYDROXYBENZOYL HEXYL BENZOATE, CETEARYL ALCOHOL, SODIUM POLYACRYLATE, PEG-100 STEARATE, GLYCERYL STEARATE, TRIETHANOLAMINE, TOCOPHEROL, CARBOMER, DISODIUM EDTA, XANTHAN GUM",
  },
  {
    brand: "Vichy",
    product_name: "Vichy Normaderm Anti-Aging Anti-Blemish",
    ingredients_text:
      "AQUA, ALCOHOL DENAT., GLYCERIN, DIMETHICONE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PEG-20 STEARATE, NIACINAMIDE, SALICYLIC ACID, GLYCERYL STEARATE, STEARIC ACID, AMMONIUM POLYACRYLOYLDIMETHYL TAURATE, HYDROXYACETOPHENONE, CAPRYLOYL SALICYLIC ACID, CAFFEINE, RETINOL, TOCOPHEROL, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, SODIUM HYDROXIDE, CARBOMER, DISODIUM EDTA, PHENOXYETHANOL",
  },
  {
    brand: "Vichy",
    product_name: "Vichy LiftActiv Eyes Supreme",
    ingredients_text:
      "Aqua, Dimethicone, Hydrogenated Polyisobutene, Glycerin, Cetyl Alcohol, Glyceryl Stearate, PEG-100 Stearate, Niacinamide, Caffeine, Rhamnose, Sodium Hyaluronate, Adenosine, Panthenol, Bisabolol, Tocopherol, Carbomer, Triethanolamine, Xanthan Gum, Disodium EDTA, Phenoxyethanol",
  },
  {
    brand: "Vichy",
    product_name: "Vichy Normaderm 3-in-1 Cleansing Gel",
    ingredients_text:
      "Aqua, Kaolin, Butylene Glycol, Zea Mays Starch, Glycerin, Decyl Glucoside, Carrageenan, Niacinamide, Salicylic Acid, Zinc Gluconate, Citric Acid, Sodium Hydroxide, Phenoxyethanol, Caprylyl Glycol",
  },

  // ─── Caudalie ────────────────────────────────────────────────────────────
  {
    brand: "Caudalie",
    product_name: "Caudalie Vinoperfect Radiance Serum",
    ingredients_text:
      "AQUA, BUTYLENE GLYCOL, GLYCERIN, COCO-CAPRYLATE/CAPRATE, SQUALANE, PALMITOYL GRAPEVINE SHOOT EXTRACT, VITIS VINIFERA (GRAPE) SEED EXTRACT, NIACINAMIDE, SODIUM HYALURONATE, GLYCOLIC ACID, LACTIC ACID, SALICYLIC ACID, POLYSORBATE 20, CARBOMER, SODIUM HYDROXIDE, XANTHAN GUM, DISODIUM EDTA, PHENOXYETHANOL, ETHYLHEXYLGLYCERIN",
  },
  {
    brand: "Caudalie",
    product_name: "Caudalie Vinoclean Cleansing Foam",
    ingredients_text:
      "Aqua, Glycerin, Sodium Cocoyl Glutamate, Caprylyl/Capryl Glucoside, Cocamidopropyl Betaine, Glyceryl Glucoside, Vitis Vinifera (Grape) Juice, Sodium Benzoate, Citric Acid, Glyceryl Caprylate, Potassium Sorbate, Parfum (Fragrance)",
  },
  {
    brand: "Caudalie",
    product_name: "Caudalie Vinoclean Hydrating Toning Lotion",
    ingredients_text:
      "Aqua, Butylene Glycol, Rosa Damascena Flower Water, Saccharide Isomerate, Methylpropanediol, Vitis Vinifera (Grape) Seed Extract, Glycerin, Niacinamide, Panthenol, Sodium Hyaluronate, Sodium PCA, Allantoin, Citric Acid, Sodium Benzoate, Potassium Sorbate, Parfum (Fragrance)",
  },
  {
    brand: "Caudalie",
    product_name: "Caudalie Exfoliating Cream Cleanser",
    ingredients_text:
      "Aqua, Polyethylene, Hexyldecyl Stearate, Mel (Honey), Glycerin, Vitis Vinifera (Grape) Seed Extract, Cetearyl Alcohol, Coco-Betaine, Glyceryl Stearate, PEG-100 Stearate, Carbomer, Sodium Hydroxide, Phenoxyethanol, Parfum (Fragrance)",
  },
  {
    brand: "Caudalie",
    product_name: "Caudalie Beauty Elixir",
    ingredients_text:
      "Aqua, Alcohol, Citrus Aurantium Amara (Bitter Orange) Flower Water, Fragrance (Parfum), Rosa Damascena Flower Water, Vitis Vinifera (Grape) Seed Extract, Anthemis Nobilis Flower Water, Rosmarinus Officinalis (Rosemary) Leaf Water, Salvia Officinalis (Sage) Leaf Water",
  },

  // ─── Filorga ─────────────────────────────────────────────────────────────
  {
    brand: "Filorga",
    product_name: "Filorga Time-Filler 5XP Anti-Wrinkle Cream",
    ingredients_text:
      "AQUA, GLYCERIN, PROPYLHEPTYL CAPRYLATE, BUTYLENE GLYCOL, CELLULOSE, SQUALANE, NIACINAMIDE, CETYL ALCOHOL, PENTYLENE GLYCOL, PHENOXYETHANOL, CYCLOPENTASILOXANE, CAPRYLIC/CAPRIC TRIGLYCERIDE, DICAPRYLYL CARBONATE, BEHENYL ALCOHOL, HYDROXYACETOPHENONE, SODIUM HYALURONATE, ADENOSINE, ECTOIN, ACETYL HEXAPEPTIDE-8, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7, HYDROLYZED COLLAGEN, TOCOPHEROL, XANTHAN GUM, CARBOMER, SODIUM HYDROXIDE, DISODIUM EDTA",
  },
  {
    brand: "Filorga",
    product_name: "Filorga Optim-Eyes Eye Contour",
    ingredients_text:
      "Aqua, Glycerin, Caprylic/Capric Triglyceride, C12-16 Alcohols, Dicaprylyl Carbonate, Cyclopentasiloxane, Butylene Glycol, Niacinamide, Cetearyl Alcohol, Phenoxyethanol, Hydroxyacetophenone, Caffeine, Sodium Hyaluronate, Adenosine, Acetyl Hexapeptide-8, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Hydrolyzed Collagen, Tocopherol, Carbomer, Sodium Hydroxide, Xanthan Gum, Disodium EDTA",
  },
  {
    brand: "Filorga",
    product_name: "Filorga Oxygen-Glow Radiance Cream",
    ingredients_text:
      "AQUA, PROPANEDIOL, HYDROGENATED COCONUT ACID, C15-19 ALKANE, SODIUM HYALURONATE, GLYCERIN, NIACINAMIDE, ADENOSINE, ECTOIN, CAFFEINE, ACETYL HEXAPEPTIDE-8, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7, HYDROLYZED COLLAGEN, TOCOPHEROL, CAPRYLIC/CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, PHENOXYETHANOL, HYDROXYACETOPHENONE, CARBOMER, SODIUM HYDROXIDE, XANTHAN GUM, DISODIUM EDTA",
  },
  {
    brand: "Filorga",
    product_name: "Filorga Sleep & Lift Night Cream",
    ingredients_text:
      "Aqua, Cetyl Palmitate, Myristyl Myristate, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Glycerin, Niacinamide, Butylene Glycol, Dimethicone, Hydroxyacetophenone, Sodium Hyaluronate, Adenosine, Acetyl Hexapeptide-8, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Hydrolyzed Collagen, Tocopherol, Phenoxyethanol, Carbomer, Sodium Hydroxide, Xanthan Gum, Disodium EDTA",
  },

  // ─── SkinCeuticals ───────────────────────────────────────────────────────
  {
    brand: "SkinCeuticals",
    product_name: "SkinCeuticals C E Ferulic Antioxidant Serum",
    ingredients_text:
      "Aqua, Dipropylene Glycol, Ascorbic Acid, Glycerin, Leureth-23, Phenoxyethanol, Tocopherol, Triethanolamine, Ferulic Acid, Panthenol, Sodium Hyaluronate, EDTA",
  },
  {
    brand: "SkinCeuticals",
    product_name: "SkinCeuticals Hydrating B5 Gel",
    ingredients_text:
      "Aqua, Glycerin, Phenoxyethanol, Sodium Hyaluronate, Calcium Pantothenate, Sodium Benzoate, Allantoin, Carbomer, Sodium Hydroxide",
  },
  {
    brand: "SkinCeuticals",
    product_name: "SkinCeuticals Phyto Corrective Soothing Gel",
    ingredients_text:
      "Aqua, Glycerin, Propylene Glycol, Phenoxyethanol, Polysorbate 80, Sodium Benzoate, Sodium PCA, Allantoin, Hyaluronic Acid, Dipotassium Glycyrrhizate, Thymol, Sodium Hydroxide, Carbomer, Cucumis Sativus (Cucumber) Fruit Extract, Centella Asiatica Extract, Rumex Occidentalis Extract",
  },
  {
    brand: "SkinCeuticals",
    product_name: "SkinCeuticals Discoloration Defense Serum",
    ingredients_text:
      "Aqua, Butylene Glycol, Niacinamide, Hydroxyethylpiperazine Ethane Sulfonic Acid, Glycerin, Kojic Acid, Tranexamic Acid, Sodium Hyaluronate, Hydroxyphenyl Propamidobenzoic Acid, Phenoxyethanol, Pentylene Glycol, Citric Acid, Sodium Hydroxide",
  },
  {
    brand: "SkinCeuticals",
    product_name: "SkinCeuticals Blemish + Age Defense Serum",
    ingredients_text:
      "Alcohol Denat, Aqua, Methylpropanediol, Glycolic Acid, Diisopropyl Adipate, Octadecenedioic Acid, Dioic Acid, Salicylic Acid, Niacinamide, Butylene Glycol, Sodium Hydroxide, Disodium EDTA",
  },
  {
    brand: "SkinCeuticals",
    product_name: "SkinCeuticals Triple Lipid Restore 2:4:2",
    ingredients_text:
      "Aqua, Dimethicone, Hydrogenated Polyisobutene, Glycerin, Cholesterol, C12-15 Alkyl Benzoate, Glyceryl Stearate, Cetearyl Alcohol, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Palmitic Acid, Phenoxyethanol, Sodium Hyaluronate, Tocopherol, Carbomer, Sodium Hydroxide, Disodium EDTA",
  },
  {
    brand: "SkinCeuticals",
    product_name: "SkinCeuticals Phloretin CF Antioxidant Serum",
    ingredients_text:
      "Aqua, Alcohol Denat., Ascorbic Acid, Phloretin, Ferulic Acid, Glycerin, Tocopherol, Sodium Hyaluronate, Phenoxyethanol, Disodium EDTA",
  },
  {
    brand: "SkinCeuticals",
    product_name: "SkinCeuticals Advanced Brightening UV Defense SPF50",
    ingredients_text:
      "AQUA, ALCOHOL DENAT., ETHYLHEXYL TRIAZONE, DROMETRIZOLE TRISILOXANE, ISONONYL ISONONANOATE, HOMOSALATE, NIACINAMIDE, BUTYL METHOXYDIBENZOYLMETHANE, BIS-ETHYLHEXYLOXYPHENOL METHOXYPHENYL TRIAZINE, METHYLPROPANEDIOL, DIISOPROPYL ADIPATE, HYDROXYPHENYL PROPAMIDOBENZOIC ACID, KOJIC ACID, TRANEXAMIC ACID, GLYCERIN, SODIUM HYALURONATE, TOCOPHEROL, CARBOMER, SODIUM HYDROXIDE, DISODIUM EDTA, PHENOXYETHANOL",
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
