import type { Route } from "./+types/catalog";
import { allProducts } from "~/api/apiProducts";
import Product from './../components/product';

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  return allProducts();
}

export default function Catalog({loaderData}: Route.ComponentProps) {
  const products = loaderData.map((product) => {
    // If it does a re-render it children shouldn't to re-render, the object is in cache, so is always the same
    // and is using a React.memo, so if the parent do a re-render, it shouldn't
    return <Product product={product} key={product.id}/>
  })
  return (
    <section>
      {products}
    </section>
  )
}
