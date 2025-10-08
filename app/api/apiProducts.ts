import factoryProduct, { type Product } from '~/factory/productsFactory';
import apiSettings from './settingsApi';

export interface apiProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

/**
 * It do a fetch to get all the products and transform it by factoryProduct
 * @returns Array Products
 */
export async function allProducts(): Promise<Product[]> {
  return fetch(`${apiSettings.baseUrl}/products`).then((data) => {
    if (!data) throw Error('Products not found');
    return data.json();
  }).then((dataJson) => {
    return dataJson.map((product: apiProduct) => {
      return factoryProduct(product);
    })
  })
  .catch((error) => {
    console.log(error);
    return error;
  });
}

/**
 * It do a fetch to get one product by its id and transform it by factoryProduct
 * @param id string
 * @returns Product
 */
export function oneProduct(id: string): Promise<Product> {
  return fetch(`${apiSettings.baseUrl}/products/${id}`).then((data) => {
    if (!data) throw Error('Product not found');
    return data.json();
  }).then((dataJson) => {
    return factoryProduct(dataJson);
  })
  .catch((error) => {
    console.log(error);
    return error;
  });
}