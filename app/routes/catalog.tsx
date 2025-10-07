import type { Route } from "./+types/catalog";
import { allProducts } from "~/api/apiProducts";
import Product from './../components/product';
import { queryClient } from "~/queryClient";

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  const catalog = await queryClient.ensureQueryData({
      queryKey: ["detail"],
      queryFn: () => allProducts(),
      staleTime: Infinity,
    });
    return catalog
}

export default function Catalog({loaderData}: Route.ComponentProps) {
  const catalog = loaderData;
  let products: any = [];
  products = catalog.map((product) => {
    return <Product product={product} key={product.id}/>
  });
  return (
    <>
      <title>Catalog</title>
      <meta name="description" content="Catalog with 20 products" />
      <meta name="author" content="Alex" />
      <meta name="keywords" content="Catalog, Products" />
      <section className='catalog'>
        {products}
      </section>
    </>
  )
}
