import { memo } from "react"
import { NavLink } from "react-router";
import type { Product } from "~/factory/productsFactory"

interface Props {
  product: Product
}

/**
 * It is to show the product in the catalog page
 * It is a memo component, so it shouldn't re-render if the props are the same
 */
export default memo(function Product({product}: Props) {
  const {title, price, image, id, rate} = product;

  return (
    <article className='card'>
      <header>
        <h2><NavLink to={`detail/${id}`}>{title}</NavLink></h2>
      </header>
      <section>
        <img src={image} alt={title} width={'256px'} height={'auto'}/>
      </section>
      <footer>
        <span>{price} $</span>
        <span>Rate: {rate}</span>
      </footer>
    </article>
  );
});