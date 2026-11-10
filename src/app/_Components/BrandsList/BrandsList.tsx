import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/types/brand.t";

interface Props {
  brands: Brand[];
}

export default function BrandsList({ brands }: Props) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {brands.map((brand) => (
        <Link
          key={brand._id}
          href={`/Brand/${brand._id}`}
          className="flex flex-col items-center justify-between rounded-3xl border border-gray-100 bg-white px-5 pb-4 pt-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-44 w-full">
            <Image
              src={brand.image}
              alt={brand.name}
              fill
              sizes="(max-width: 768px) 50vw, 16vw"
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-xs font-semibold text-gray-900">
            {brand.name}
          </p>
        </Link>
      ))}
    </div>
  );
}