import type { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  children: ReactNode;
}
const Button = ({ children }: ButtonProps) => {
  return <button className="custom-button">{children}</button>;
};

export default Button;
