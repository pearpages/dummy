import type { Product } from "@/types";
import { ActionButton } from "./ActionButton";
import { PriceTag } from "./PriceTag";

export const ProductCard = ({ product, onAdd }: { product: Product; onAdd: () => void }) => (
  <article>
    <h2>{product.name}</h2>
    <PriceTag amount={product.price} />
    <ActionButton onClick={onAdd}>Add to cart</ActionButton>
  </article>
);
