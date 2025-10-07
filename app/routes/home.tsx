import type { Route } from "./+types/home";
import { apiProducts } from "~/api/apiProducts";

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  return apiProducts();
}

export default function Home({loaderData}: Route.ComponentProps) {
  console.log(loaderData);
  return <>Productos</>
}
