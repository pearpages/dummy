export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface CartLine {
  product: Product;
  quantity: number;
}
