import Link from "next/link";
import { notFound } from "next/navigation";
import { FaBoxOpen } from "react-icons/fa6";
import HomeCard from "@/app/_Components/HomeCard/HomeCard";
import { getSubCategory } from "@/apis/category"; // عدّل المسار لملف الـ categories عندك
import { getProductsBySubCategory } from "@/apis/product";
import type { SubCategory } from "@/types/category.t";
import type { Product } from "@/types/product.t";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function SubCategoryPage({ params }: Props) {
  const { id } = await params;

  let subCategory: SubCategory;
  try {
    subCategory = await getSubCategory(id);
  } catch (error) {
    console.error("getSubCategory failed:", error);
    notFound();
  }

  const products: Product[] = await getProductsBySubCategory(id).catch(
    (error) => {
      console.error("getProductsBySubCategory failed:", error);
      return [];
    },
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link href="/categories" className="text-sm text-gray-600 hover:underline">
        ← Back to Categories
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-gray-900">
        {subCategory.name}
      </h1>
      <p className="mb-6 mt-1 text-sm text-gray-600">
        Showing {products.length} products
      </p>

      {products.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl text-gray-400">
            <FaBoxOpen />
          </div>
          <h3 className="font-bold text-gray-900">No Products Found</h3>
          <p className="mb-6 text-sm text-gray-500">
            This subcategory has no products yet.
          </p>
          <Link
            href="/products"
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            View All Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {products.map((p) => (
            <HomeCard key={p._id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}