import { PriceTag } from "@/components/PriceTag";
import { useCart } from "@/hooks/useCart";

export default function Cart() {
  const cart = useCart();
  return (
    <main>
      <p>{cart.lines.length} item(s) in your cart</p>
      <PriceTag amount={cart.total} />
    </main>
  );
}
