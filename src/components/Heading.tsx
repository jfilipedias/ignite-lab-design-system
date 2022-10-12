import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children: React.ReactNode;
}

export function Heading({ size = "md", asChild, children }: HeadingProps) {
  const Wrapper = asChild ? Slot : "h2";

  return (
    <Wrapper
      className={clsx("text-gray-100 font-sans font-bold", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Wrapper>
  );
}
