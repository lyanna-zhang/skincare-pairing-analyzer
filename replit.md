# SkinPair — Effortless Precision

## Overview
A skincare product compatibility checker that lets users add their products and get an analysis of which combinations to avoid and which work well together. All logic runs entirely in the browser — no backend server required.

## Architecture
- **Framework**: React 18 + TypeScript + Vite
- **Type**: Pure frontend SPA (Single Page Application)
- **State**: In-memory + localStorage (for shelf snapshot persistence between sessions)
- **No backend / no database**: All analysis is done locally using a built-in pairing dataset

## Key Files
- `src/App.tsx` — Main UI component
- `src/types.ts` — TypeScript type definitions
- `src/lib/shelfService.ts` — Service layer (wraps local storage and analysis)
- `src/lib/localAnalysis.ts` — Ingredient tag detection and pairing analysis engine
- `src/lib/localProductStore.ts` — In-memory product store
- `src/lib/localCache.ts` — localStorage snapshot persistence
- `src/lib/pairingData.ts` / `pairingDataset.ts` — Built-in skincare ingredient conflict/compatibility rules
- `src/lib/catalog.ts` — Label mappings for conflict/compatibility levels
- `src/lib/localProductDataset.ts` — Local curated product database (~123 products, 11 brands, all English)
- `src/lib/openBeautyFacts.ts` — Open Beauty Facts API with English-only filtering
- `src/components/ProductNameInput.tsx` — Autofill component (local first, API fallback)
- `src/styles.css` — Global styles
- `public/skincare-background.png` — Background image asset

## Local Product Database
123 verified products with real INCI ingredient lists, sourced from Boticinal.com pharmacy:
- **CeraVe** (20) — cleansers, moisturizers, serums, SPF
- **The Ordinary** (24) — acids, serums, retinol, vitamin C
- **La Roche-Posay** (18) — Effaclar, Toleriane, Anthelios, Cicaplast lines
- **SVR** (14) — Sebiaclear, Topialyse lines
- **SkinCeuticals** (8) — C E Ferulic, Blemish + Age Defense, Triple Lipid Restore
- **ISDIN** (6) — Isdinceutics serums, Glicolisdin
- **Eucerin** (6) — Sun, Anti-Pigment, DermoPure, Aquaphor
- **Bioderma** (6) — Sensibio, Sebium lines
- **Avène** (6) — Cicalfate, Cleanance, Hydrance, XeraCalm
- **Vichy** (5) — Mineral 89, Capital Soleil, Normaderm, LiftActiv
- **Caudalie** (5) — Vinoperfect, Vinoclean
- **Filorga** (4) — Time-Filler, Optim-Eyes, Oxygen-Glow

## Development
- **Dev server**: `npm run dev` (runs on port 5000, host 0.0.0.0)
- **Build**: `npm run build`

## Deployment
- **Type**: Static site
- **Build command**: `npm run build`
- **Public dir**: `dist`
