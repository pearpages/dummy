import { useState } from "react";
import { addToCart, cartTotal } from "@/lib/cart";
import type { CartLine, Product } from "@/types";

export const useCart = () => {
  const [lines, setLines] = useState<CartLine[]>([]);
  return {
    lines,
    total: cartTotal(lines),
    add: (product: Product) => setLines((current) => addToCart(current, product)),
  };
};
