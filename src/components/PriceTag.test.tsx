import { describe, expect, it } from "vitest";
import { formatPrice } from "@/lib/format";
import { PriceTag } from "./PriceTag";

describe("PriceTag", () => {
  it("formats with two decimals", () => {
    expect(formatPrice(4.5)).toBe("4.50 €");
    expect(PriceTag).toBeTypeOf("function");
  });
});
