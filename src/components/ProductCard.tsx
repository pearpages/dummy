import type { Product } from "@/types";
import { Button } from "./Button";
import { PriceTag } from "./PriceTag";

export const ProductCard = ({ product, onAdd }: { product: Product; onAdd: () => void }) => (
  <article>
    <h2>{product.name}</h2>
    <PriceTag amount={product.price} />
    <Button onClick={onAdd}>Add to cart</Button>
  </article>
);
