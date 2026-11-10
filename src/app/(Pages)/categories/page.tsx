import CategoriesLg from "@/app/_Components/Categories/CategoriesLg";
import PageHeader from "./../header/page";

const Categories = () => {
  return (
    <>
      <PageHeader
        title="All Categories"
        subtitle="Browse our wide range of product categories"/>

      <CategoriesLg/>
    </>
  );
};

export default Categories;
