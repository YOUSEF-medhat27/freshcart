import { FaTags } from "react-icons/fa6";
import BrandsList from "../../_Components/BrandsList/BrandsList";
import { getAllBrands } from "../../../apis/brand";
import PageHeader from "../header/page";

export default async function BrandsPage() {
  const brands = await getAllBrands();

  return (
    <>
      <PageHeader
        title="Top Brands"
        subtitle="Shop from your favorite brands"
        icon={FaTags}
        background="bg-linear-to-br from-[#7F22FE] via-[#8E51FF] to-[#C27AFF]"
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        
        <BrandsList brands={brands} />
      </div>
    </>
  );
}
