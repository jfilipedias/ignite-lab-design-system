import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  asChild?: boolean;
  children: ReactNode;
}

export function Button({ asChild, children }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component className="w-full py-4 px-3 rounded bg-cyan-500 font-semibold text-black text-sm leading-4 transition-colors hover:bg-cyan-300 focus:ring-2 ring-white">
      {children}
    </Component>
  );
}
