import type { Route } from "./+types/catalog";
import { allProducts } from "~/api/apiProducts";
import Product from './../components/product';
import { queryClient } from "~/queryClient";
import { useQuery } from "@tanstack/react-query";

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  // I use it to make sure I have the data I need before the component is showed
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
    <section>
      {products}
    </section>
  )
}
