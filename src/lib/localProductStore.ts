import { loadLocalShelfSnapshot } from "./localCache";
import { buildProduct } from "./localAnalysis";
import type { Product, ProductInput } from "../types";

const PRODUCT_STORE_KEY = "skincare-local-product-store";
const PRODUCT_STORE_VERSION = 1;

interface ProductStore {
  version: number;
  nextId: number;
  products: Product[];
}

const canUseLocalStorage = () =>
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const buildStoreFromSnapshot = (): ProductStore => {
  const snapshotProducts = loadLocalShelfSnapshot()?.products ?? [];
  const nextId =
    snapshotProducts.reduce((maxProductId, product) => Math.max(maxProductId, product.id), 0) + 1;

  return {
    version: PRODUCT_STORE_VERSION,
    nextId,
    products: snapshotProducts,
  };
};

const loadStore = (): ProductStore => {
  if (!canUseLocalStorage()) {
    return buildStoreFromSnapshot();
  }

  try {
    const rawStore = window.localStorage.getItem(PRODUCT_STORE_KEY);
    if (!rawStore) {
      return buildStoreFromSnapshot();
    }

    const parsedStore = JSON.parse(rawStore) as ProductStore;
    if (
      parsedStore.version !== PRODUCT_STORE_VERSION ||
      !Array.isArray(parsedStore.products) ||
      typeof parsedStore.nextId !== "number"
    ) {
      return buildStoreFromSnapshot();
    }

    return parsedStore;
  } catch {
    return buildStoreFromSnapshot();
  }
};

const saveStore = (store: ProductStore) => {
  if (!canUseLocalStorage()) {
    return;
  }

  window.localStorage.setItem(PRODUCT_STORE_KEY, JSON.stringify(store));
};

export const listStoredProducts = () => loadStore().products;

export const addStoredProduct = (payload: ProductInput) => {
  const store = loadStore();
  const createdProduct = buildProduct(store.nextId, payload);
  const nextStore = {
    version: PRODUCT_STORE_VERSION,
    nextId: store.nextId + 1,
    products: [...store.products, createdProduct],
  } satisfies ProductStore;

  saveStore(nextStore);
  return createdProduct;
};

export const removeStoredProduct = (productId: number) => {
  const store = loadStore();
  const nextProducts = store.products.filter((product) => product.id !== productId);

  if (nextProducts.length === store.products.length) {
    return;
  }

  saveStore({
    ...store,
    products: nextProducts,
  });
};
