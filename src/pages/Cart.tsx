import { PriceTag } from "@/components/PriceTag";
import { useCart } from "@/hooks/useCart";

export default function Cart() {
  const cart = useCart();
  return (
    <main>
      <p>{cart.lines.length} items</p>
      <PriceTag amount={cart.total} />
    </main>
  );
}
