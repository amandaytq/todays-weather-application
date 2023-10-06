import { ReactNode } from "react";
import "./style.css";

type sizeType = "" | "small" | "medium" | "large";

type ColorType = "primary" | "secondary";

type VariantType = "" | "circle";

type ButtonProps = {
  children?: ReactNode;
  variant?: VariantType;
  size?: sizeType;
  color?: ColorType;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  children,
  color = "primary",
  size = "",
  variant = "",
  disabled = false,
  onClick,
  ...others
}: ButtonProps) => {
  return (
    <button
      className={`${variant} ${size} ${color}`}
      onClick={onClick}
      disabled={disabled}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
