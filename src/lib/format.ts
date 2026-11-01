import { SYMBOLS, type Currency } from "./currency";

export const formatPrice = (amount: number, currency: Currency = "EUR") =>
  `${amount.toFixed(2)} ${SYMBOLS[currency]}`;
