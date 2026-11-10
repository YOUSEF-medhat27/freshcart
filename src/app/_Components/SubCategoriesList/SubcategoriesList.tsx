import Link from "next/link";
import type { SubCategory } from "@/types/category.t";
import { FaFolderOpen } from "react-icons/fa6";

interface Props {
  subs: SubCategory[];
}

export default function SubCategoriesList({ subs }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {subs.map((sub) => (
        <Link
          key={sub._id}
          href={`/products?subcategory=${sub._id}`}
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-primary-600 text-2xl">
            <FaFolderOpen />
          </div>
          <p className="font-bold">{sub.name}</p>
        </Link>
      ))}
    </div>
  );
}