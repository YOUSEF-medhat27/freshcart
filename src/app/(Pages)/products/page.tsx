import { getAllProducts, getFilteredProducts } from "@/apis/product";
import { getCategory, getSubCategory } from "@/apis/category"; 
import { getBrand } from "@/apis/brand";
import Container from "@/app/_Components/Container/Container";
import HomeCard from "@/app/_Components/HomeCard/HomeCard";
import PageHeader from "@/app/_Components/PageHeader/PageHeader";
import { Product } from "@/types/product.t";
import Link from "next/link";
import { FaBoxOpen } from "react-icons/fa6";

interface Props {
  searchParams: Promise<{
    subcategory?: string;
    category?: string;
    brand?: string;
  }>;
}

type HeaderInfo = {
  title: string;
  subtitle: string;
  image?: string;
  crumbs: { label: string; href: string }[];
  crumbLabel?: string;
};

async function getHeaderInfo({
  subcategory,
  category,
  brand,
}: {
  subcategory?: string;
  category?: string;
  brand?: string;
}): Promise<HeaderInfo> {
  const fallback: HeaderInfo = {
    title: "All Products",
    subtitle: "Explore our complete product collection",
    crumbs: [],
  };

  try {
    if (subcategory) {
      const sub = await getSubCategory(subcategory);
      const cat = await getCategory(sub.category);
      return {
        title: cat.name,
        subtitle: `Browse products in ${sub.name}`,
        image: cat.image,
        crumbs: [
          { label: "Categories", href: "/categories" },
          { label: cat.name, href: `/categories/${cat._id}` },
        ],
        crumbLabel: sub.name,
      };
    }

    if (category) {
      const cat = await getCategory(category);
      return {
        title: cat.name,
        subtitle: `Browse products in ${cat.name}`,
        image: cat.image,
        crumbs: [
          { label: "Categories", href: "/categories" },
          { label: cat.name, href: `/categories/${cat._id}` },
        ],
      };
    }

    if (brand) {
      const b = await getBrand(brand);
      return {
        title: b.name,
        subtitle: `Shop ${b.name} products`,
        image: b.image,
        crumbs: [{ label: "Brands", href: "/Brand" }],
      };
    }
  } catch (error) {
    console.error("getHeaderInfo failed:", error);
  }

  return fallback;
}

const page = async ({ searchParams }: Props) => {
  const { subcategory, category, brand } = await searchParams;
  const hasFilter = Boolean(subcategory || category || brand);

  const [header, data] = await Promise.all([
    getHeaderInfo({ subcategory, category, brand }),
    hasFilter
      ? getFilteredProducts({ subcategory, category, brand })
      : getAllProducts(),
  ]);

  const products: Product[] = data;

  return (
    <>
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
        image={header.image}
        crumbs={header.crumbs}
        crumbLabel={header.crumbLabel}
      />

      <Container>
        <div className="my-6 flex items-center gap-3 text-sm text-gray-500">
          <span>Showing {products.length} products</span>
          {hasFilter && (
            <Link href="/products" className="text-gray-600 underline">
              Clear filters
            </Link>
          )}
        </div>

        {products.length === 0 ? (
          <div className="flex flex-col items-center py-16 text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl text-gray-400">
              <FaBoxOpen />
            </div>
            <h3 className="font-bold text-gray-900">No Products Found</h3>
            <p className="mb-6 text-sm text-gray-500">
              There are no products matching your selection.
            </p>
            <Link
              href="/products"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              View All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
              <HomeCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default page;