import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}

export function Text({ size = "md", asChild, className, children }: TextProps) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-md": size === "lg",
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
