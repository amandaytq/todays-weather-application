import React, { ReactNode } from "react";
import "./style.css";

type sizeType = "" | "small" | "medium" | "large";

type VariantType = "primary" | "secondary";

type StyleVariantType = "" | "circle";

type ButtonProps = {
  children?: ReactNode;
  variant?: VariantType;
  size?: sizeType;
  style?: StyleVariantType;
};

const Button = ({
  children,
  variant = "primary",
  size = "",
  style = "",
  ...others
}: ButtonProps) => {
  return (
    <button className={`${variant} ${size} ${style}`} {...others}>
      {children}
    </button>
  );
};

export default Button;
