import apiSettings from './settingsApi';

export async function apiProducts() {
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

export function apiProduct(id: number) {

}