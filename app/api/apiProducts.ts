import factoryProduct from '~/factory/productsFactory';
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

export async function allProducts() {
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

export function oneProduct(id: number) {
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