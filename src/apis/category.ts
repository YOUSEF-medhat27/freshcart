import { cacheLife } from "next/cache";
import type { Category, SubCategory } from "@/types/category.t";

const BASE = "https://ecommerce.routemisr.com/api/v1";

async function fetchData<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE}${path}`);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  const { data } = await response.json();
  return data as T;
}

export async function getAllCategories(): Promise<Category[]> {
  "use cache";
  cacheLife("hours");
  return fetchData<Category[]>("/categories");
}

export async function getCategory(id: string): Promise<Category> {
  "use cache";
  cacheLife("hours");
  return fetchData<Category>(`/categories/${id}`);
}

export async function getSubCategories(id: string): Promise<SubCategory[]> {
  "use cache";
  cacheLife("hours");
  return fetchData<SubCategory[]>(`/categories/${id}/subcategories`);
}

export async function getSubCategory(id: string): Promise<SubCategory> {
  "use cache";
  cacheLife("hours");
  return fetchData<SubCategory>(`/subcategories/${id}`);
}