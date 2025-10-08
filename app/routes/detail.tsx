import type { Route } from "./+types/detail";
import { oneProduct } from "~/api/apiProducts";
import { NavLink } from "react-router";
import { queryClient } from "~/queryClient";
import PlaceHolderImage from "~/components/placeholderImage";

/**
 * It load the information product and return it. It get it from a fetch or the cache
 * @param id
 * @returns Product
 */
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const product = await queryClient.ensureQueryData({
    queryKey: ["detail", params.id],
    queryFn: () => oneProduct(params.id),
    staleTime: Infinity,
  });
  return product;
}

/**
 * It is the Component Detail 
 * @url detail/:id
 * @param id
 * @returns 
 */
export default function Detail({ loaderData }: Route.ComponentProps) {
  const { title, description, image, price, category, rate } = loaderData;
  return (
    <>
      <title>Product Detail</title>
      <meta name="description" content={`Product detail of: ${title}`} />
      <meta name="author" content="Alex" />
      <meta name="keywords" content={`Product, ${category}`} />
      <article className='detail'>
        <header>
          <NavLink to="/">Back</NavLink>
          <h2>{title}</h2>
        </header>
        <section>
          <PlaceHolderImage url={image} alt={title}/>
          <div className='detail__info'>
            <div className='detail__extra'>
              <span>{category}</span>
              <span>{rate}</span>
            </div>
            <p>{description}</p>
            <p className='detail__price'>{price} $</p>
          </div>
        </section>
      </article>
    </>
  );
}
