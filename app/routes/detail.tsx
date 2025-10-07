import type { Route } from "./+types/detail";
import { allProducts, oneProduct } from "~/api/apiProducts";
import Product from "./../components/product";
import { NavLink } from "react-router";
import { dehydrate, useQuery } from "@tanstack/react-query";
import { queryClient } from "~/queryClient";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  // I use it to make sure I have the data I need before the component is showed
  const product = await queryClient.ensureQueryData({
    queryKey: ["detail", params.id],
    queryFn: () => oneProduct(params.id),
    staleTime: Infinity,
  });
  return { id: params.id, product };
}

export default function Detail({ loaderData }: Route.ComponentProps) {
  const { id, product } = loaderData;
  console.log(product);
  return (
    <>
      <NavLink to="/">Home</NavLink>
    </>
  );
}
