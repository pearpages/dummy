import { formatPrice } from "@/lib/format";

export const PriceTag = ({ amount }: { amount: number }) => (
  <span className="price-tag">{formatPrice(amount)}</span>
);
