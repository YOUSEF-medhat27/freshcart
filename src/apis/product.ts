import { cacheLife } from "next/cache";
import type { Product } from "@/types/product.t";

const BASE = "https://ecommerce.routemisr.com/api/v1";

async function fetchData<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE}${path}`);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  const { data } = await response.json();
  return data as T;
}

export async function getAllProducts(): Promise<Product[]> {
  "use cache";
  cacheLife("hours");
  return fetchData<Product[]>("/products?limit=100");
}

export async function getProduct(id: string): Promise<Product> {
  "use cache";
  cacheLife("hours");
  return fetchData<Product>(`/products/${id}`);
}

export async function getProductsByCategory(id: string): Promise<Product[]> {
  "use cache";
  cacheLife("hours");
  return fetchData<Product[]>(`/products?category[in]=${id}&limit=100`);
}

export async function getProductsBySubCategory(id: string): Promise<Product[]> {
  "use cache";
  cacheLife("hours");
  return fetchData<Product[]>(`/products?subcategory[in]=${id}&limit=100`);
}

export async function getProductsByBrand(id: string): Promise<Product[]> {
  "use cache";
  cacheLife("hours");
  return fetchData<Product[]>(`/products?brand=${id}&limit=100`);
}