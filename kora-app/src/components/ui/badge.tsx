import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider",
  {
    variants: {
      variant: {
        solid: "bg-ink text-bone",
        light: "bg-bone text-ink",
        clay: "bg-clay text-bone",
      },
    },
    defaultVariants: { variant: "solid" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
