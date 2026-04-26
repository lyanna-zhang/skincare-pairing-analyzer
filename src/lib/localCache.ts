import type { PairingAnalysis, Product, TagMetadata } from "../types";

const LOCAL_SHELF_SNAPSHOT_KEY = "skincare-shelf-snapshot";
const LOCAL_SHELF_SNAPSHOT_VERSION = 1;

export interface LocalShelfSnapshot {
  version: number;
  products: Product[];
  pairings: PairingAnalysis | null;
  tags: TagMetadata[];
  savedAt: string;
}

const canUseLocalStorage = () =>
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isPairingAnalysis = (value: unknown): value is PairingAnalysis | null =>
  value === null ||
  (isRecord(value) && Array.isArray(value.conflicts) && Array.isArray(value.compatibilities));

export const loadLocalShelfSnapshot = (): LocalShelfSnapshot | null => {
  if (!canUseLocalStorage()) {
    return null;
  }

  try {
    const rawSnapshot = window.localStorage.getItem(LOCAL_SHELF_SNAPSHOT_KEY);
    if (!rawSnapshot) {
      return null;
    }

    const parsedSnapshot = JSON.parse(rawSnapshot) as unknown;
    if (!isRecord(parsedSnapshot)) {
      return null;
    }

    if (
      parsedSnapshot.version !== LOCAL_SHELF_SNAPSHOT_VERSION ||
      !Array.isArray(parsedSnapshot.products) ||
      !isPairingAnalysis(parsedSnapshot.pairings) ||
      !Array.isArray(parsedSnapshot.tags) ||
      typeof parsedSnapshot.savedAt !== "string"
    ) {
      return null;
    }

    return {
      version: LOCAL_SHELF_SNAPSHOT_VERSION,
      products: parsedSnapshot.products as Product[],
      pairings: parsedSnapshot.pairings,
      tags: parsedSnapshot.tags as TagMetadata[],
      savedAt: parsedSnapshot.savedAt,
    };
  } catch {
    return null;
  }
};

export const saveLocalShelfSnapshot = (
  snapshot: Omit<LocalShelfSnapshot, "version" | "savedAt"> & { savedAt?: string },
): string | null => {
  if (!canUseLocalStorage()) {
    return null;
  }

  const savedAt = snapshot.savedAt ?? new Date().toISOString();

  try {
    window.localStorage.setItem(
      LOCAL_SHELF_SNAPSHOT_KEY,
      JSON.stringify({
        version: LOCAL_SHELF_SNAPSHOT_VERSION,
        products: snapshot.products,
        pairings: snapshot.pairings,
        tags: snapshot.tags,
        savedAt,
      } satisfies LocalShelfSnapshot),
    );
    return savedAt;
  } catch {
    return null;
  }
};
