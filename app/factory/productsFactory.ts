import type { apiProduct } from './../api/apiProducts';

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rate: number;
  count: number;
  title: string;
}

export default function factoryProduct(product: apiProduct): Product | undefined{
  if (!product) return undefined;
  return {
    category: product.category,
    description: product.description,
    id: product.id,
    image: product.image,
    price: product.price,
    rate: product.rating.rate,
    count: product.rating.count,
    title: product.title
  }
}