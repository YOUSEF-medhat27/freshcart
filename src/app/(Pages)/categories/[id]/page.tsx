import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaFolderOpen } from "react-icons/fa6";
import { getCategory, getSubCategories } from "@/apis/category";
import type { Category, SubCategory } from "@/types/category.t";
import SubCategoriesList from "@/app/_Components/SubCategoriesList/SubcategoriesList";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CategoryDetailsPage({ params }: Props) {
  const { id } = await params;

  let category: Category;
  let subs: SubCategory[];

  try {
    [category, subs] = await Promise.all([
      getCategory(id),
      getSubCategories(id),
    ]);
  } catch {
    notFound();
  }

  return (
    <div>
    
      <div className="bg-linear-to-br from-green-500 to-green-400 px-4 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm">
            <Link href="/">Home</Link> /{" "}
            <Link href="/categories">Categories</Link> /{" "}
            <span className="font-semibold">{category.name}</span>
          </p>

          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{category.name}</h1>
              <p className="text-sm opacity-90">
                Choose a subcategory to browse products
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Link
          href="/categories"
          className="mb-6 inline-block text-gray-600 hover:text-green-600"
        >
          ← Back to Categories
        </Link>

        <h2 className="mb-4 text-lg font-bold">
          {subs.length} Subcategories in {category.name}
        </h2>

        {subs.length === 0 ? (
          <p className="text-gray-500"> No subcategories Found for this category.</p>
        ) : (
          <SubCategoriesList subs={subs} />
        )}
      </div>
    </div>
  );
}
