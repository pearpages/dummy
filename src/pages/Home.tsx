import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/hooks/useCart";
import { products } from "@/lib/products";

export const Home = () => {
  const cart = useCart();
  return (
    <main>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={() => cart.add(product)} />
      ))}
    </main>
  );
};
