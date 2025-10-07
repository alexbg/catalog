import { memo } from "react"
import type { Product } from "~/factory/productsFactory"

interface Props {
  product: Product
}

export default memo(function Product({product}: Props) {
  const {title, price, image} = product
  return (
    <article>
      <header>
        <h2>{title}</h2>
        <img src={image} alt={title}/>
      </header>
      <footer>
        {price}
      </footer>
    </article>
  );
});