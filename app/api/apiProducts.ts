import apiSettings from './settingsApi';

export async function allProducts() {
  return fetch(`${apiSettings.baseUrl}/products`).then((data) => {
    if (!data) throw Error('Products not found');
    return data.json();
  }).then((dataJson) => {
    // Pasar por la factory
    return dataJson;
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
    // Pasar por la factory
    return dataJson;
  })
  .catch((error) => {
    console.log(error);
    return error;
  });
}