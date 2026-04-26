import { analyzePairings, getTagCatalog } from "./localAnalysis";
import { addStoredProduct, listStoredProducts, removeStoredProduct } from "./localProductStore";
import type { PairingAnalysis, Product, ProductInput, TagMetadata } from "../types";

export const fetchProducts = async (): Promise<Product[]> => listStoredProducts();

export const fetchTags = async (): Promise<TagMetadata[]> => getTagCatalog();

export const createProduct = async (payload: ProductInput): Promise<Product> => addStoredProduct(payload);

export const deleteProduct = async (productId: number): Promise<void> => {
  removeStoredProduct(productId);
};

export const fetchPairings = async (): Promise<PairingAnalysis> =>
  analyzePairings(listStoredProducts());
