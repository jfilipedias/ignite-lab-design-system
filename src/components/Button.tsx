import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}

export function Button({
  asChild,
  className,
  children,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "w-full py-3 px-4 rounded bg-cyan-500 font-semibold text-black text-sm leading-4 transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
