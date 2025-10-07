import { memo } from "react"
import { NavLink } from "react-router";
import type { Product } from "~/factory/productsFactory"

interface Props {
  product: Product
}

export default memo(function Product({product}: Props) {
  const {title, price, image, id} = product
  return (
    <article>
      <header>
        <h2><NavLink to={`detail/${id}`}>{title}</NavLink></h2>
        <img src={image} alt={title}/>
      </header>
      <footer>
        {price}
      </footer>
    </article>
  );
});