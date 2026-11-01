import type { CartLine, Product } from "@/types";

export const addToCart = (lines: CartLine[], product: Product): CartLine[] => {
  const existing = lines.find((line) => line.product.id === product.id);
  if (!existing) return [...lines, { product, quantity: 1 }];
  return lines.map((line) => (line === existing ? { ...line, quantity: line.quantity + 1 } : line));
};

export const cartTotal = (lines: CartLine[]) =>
  lines.reduce((total, line) => total + line.product.price * line.quantity, 0);
