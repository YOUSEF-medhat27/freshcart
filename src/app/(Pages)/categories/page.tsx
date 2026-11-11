import Categories from "@/app/_Components/Categories/Categories";
import PageHeader from "./../header/page";

const CategoriesPage = () => {
  return (
    <>
      <PageHeader
        title="All Categories"
        subtitle="Browse our wide range of product categories"/>

      <Categories />
    </>
  );
};

export default CategoriesPage;
