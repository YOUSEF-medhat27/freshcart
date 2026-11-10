export interface Product {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  sold?: number;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  images: string[];
  ratingsAverage: number;
  ratingsQuantity: number;
  category: { _id: string; name: string; slug?: string; image?: string };
  subcategory?: { _id: string; name: string; slug?: string }[];
  brand?: { _id: string; name: string; slug?: string; image?: string };
  createdAt?: string;
  updatedAt?: string;
}