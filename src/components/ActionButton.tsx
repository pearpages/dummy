import type { ButtonHTMLAttributes } from "react";

export const ActionButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className="button" {...props} />
);
