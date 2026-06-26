import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "h-12 w-full rounded-full border border-line bg-bone px-5 text-base text-ink outline-none transition placeholder:text-ink-mute focus:border-ink",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
