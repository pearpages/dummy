import { lazy, Suspense, useState } from "react";
import { Home } from "@/pages/Home";

const Cart = lazy(() => import("@/pages/Cart"));

export const App = () => {
  const [page, setPage] = useState<"home" | "cart">("home");
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("cart")}>Cart</button>
      </nav>
      {page === "home" ? <Home /> : <Cart />}
    </Suspense>
  );
};
