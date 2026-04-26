# Skincare Pairing Analyzer

A lightweight skincare decision tool that helps users check whether products on their shelf are likely to conflict, complement each other, or require caution before layering.

## Product focus

The product focuses on a narrow problem: helping users understand whether products in the same routine are compatible. It is intentionally scoped as a browser-local MVP, so users can add products, review pairings quickly, and return to the same shelf without creating an account.

## Product decisions

This project reflects a few product choices:

- Narrow scope over feature expansion
- Browser-local persistence over account-based storage
- Fast shelf editing and lightweight analysis over heavier infrastructure

## What the product does

- Lets users add skincare products to `My Shelf`.
- Analyzes ingredients and inferred tags in the browser.
- Highlights pairing conflicts and compatibility signals.
- Persists the shelf locally in the same browser with `localStorage`.

## Boundaries

This is intentionally a lightweight local-first tool, not a multi-device platform.

- No login
- No cloud sync
- No shared database
- No backend runtime required

This keeps the product easy to test, easy to deploy, and easy to explain.

## Technical implementation

- `src/`: React UI and app state.
- `src/lib/pairingDataset.ts`: Static rule catalog for tags, keywords, and pairing rules.
- `src/lib/localAnalysis.ts`: TypeScript analysis engine for product tagging and pairing results.
- `src/lib/localProductStore.ts`: Browser-local product persistence.
- `src/lib/localCache.ts`: Snapshot cache for shelf state and refresh metadata.

## Run locally

```bash
npm install
npm run dev
```

Vite will print a local URL, usually:

```bash
http://127.0.0.1:5173/
```

## Deployment

This project is ready for static deployment on Vercel.

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required

## Persistence behavior

Because shelf data is stored in browser `localStorage`, each browser profile keeps its own copy of the shelf.

- Refreshing or reopening the same browser keeps the shelf.
- Clearing site data removes the shelf.
- Switching browsers, private mode, devices, or profiles does not carry the shelf over.

## Manual verification

1. Run `npm run dev`.
2. Add a product and confirm it appears in `My Shelf`.
3. Confirm pairing analysis updates immediately.
4. Delete a product and confirm it disappears from both the shelf and the analysis.
5. Refresh the page and confirm the shelf is restored from browser storage.
