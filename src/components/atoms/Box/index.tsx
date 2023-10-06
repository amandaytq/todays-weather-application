import { ReactNode } from "react";
import "./style.css";

type JustifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around";

type FlexDirectionType = "row" | "column";

type sizeType = "small" | "medium" | "large";

type AlignItemsType = "flex-start" | "flex-end" | "center" | "stretch";

type BoxProps = {
  children?: ReactNode;
  flexDirection?: FlexDirectionType;
  justifyContent?: JustifyContentType;
  gap?: sizeType;
  alignItems?: AlignItemsType;
  padding?: sizeType;
  paddingX?: sizeType;
  paddingY?: sizeType;
  margin?: sizeType;
  marginX?: sizeType;
  marginY?: sizeType;
  className?: string;
};

const Box = ({
  children,
  flexDirection,
  justifyContent,
  gap,
  alignItems,
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  className,
}: BoxProps) => {
  const getStyles = () => {
    let styles = "";
    styles += flexDirection ? ` ${flexDirection}` : "";
    styles += justifyContent ? ` justify-content-${justifyContent}` : "";
    styles += gap ? ` gap-${gap}` : "";
    styles += alignItems ? ` align-items-${alignItems}` : "";
    styles += padding ? ` padding-${padding}` : "";
    styles += paddingX ? ` paddingX-${paddingX}` : "";
    styles += paddingY ? ` paddingY-${paddingY}` : "";
    styles += margin ? ` margin-${margin}` : "";
    styles += marginX ? ` marginX-${marginX}` : "";
    styles += marginY ? ` marginY-${marginY}` : "";
    styles += className ? ` ${className}` : "";

    return styles;
  };

  return <div className={`box flex${getStyles()}`}>{children}</div>;
};

export default Box;
