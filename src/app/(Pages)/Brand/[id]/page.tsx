import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaBoxOpen } from "react-icons/fa6";
import HomeCard from "@/app/_Components/HomeCard/HomeCard";
import { getBrand } from "@/apis/brand";
import { getProductsByBrand } from "@/apis/product";
import type { Brand } from "@/types/brand.t";
import type { Product } from "@/types/product.t";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BrandDetailsPage({ params }: Props) {
  const { id } = await params;

  let brand: Brand;
  try {
    brand = await getBrand(id);
  } catch (error) {
    console.error("getBrand failed:", error);
    notFound();
  }

  const products: Product[] = await getProductsByBrand(id).catch((error) => {
    console.error("getProductsByBrand failed:", error);
    return [];
  });

 
  return (
    <div>
     {/* Header */}
      <div className="bg-linear-to-br from-green-500 to-green-400 px-4 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm">
            <Link href="/">Home</Link> / <Link href="/Brand">Brands</Link> /{" "}
            <span className="font-semibold">{brand.name}</span>
          </p>

          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white">
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                sizes="64px"
                className="object-contain p-2"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{brand.name}</h1>
              <p className="text-sm opacity-90">Shop {brand.name} products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex items-center gap-3 text-sm">
          <span className="text-gray-600">Active Filters:</span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-purple-800">
            {brand.name}
          </span>
          <Link href="/brands" className="text-gray-600 underline">
            Clear all
          </Link>
        </div>

        <p className="mb-4 text-sm text-gray-600">
          Showing {products.length} products
        </p>

        {products.length === 0 ? (
          <div className="flex flex-col items-center py-16 text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl text-gray-400">
              <FaBoxOpen />
            </div>
            <h3 className="font-bold text-gray-900">No Products Found</h3>
            <p className="mb-6 text-sm text-gray-500">
              This brand has no products yet.
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
    </div>
  );
}
