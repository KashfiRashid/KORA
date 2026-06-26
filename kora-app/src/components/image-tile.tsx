import Image from "next/image";
import { cn } from "@/lib/utils";

export function ImageTile({
  src,
  alt,
  label,
  className,
  position = "object-center",
  priority = false,
  fit = "contain",
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  position?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-line bg-bone-soft",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={cn(
          fit === "cover" ? "object-cover" : "object-contain",
          "transition-transform duration-700 ease-out group-hover:scale-[1.04]",
          position
        )}
        priority={priority}
      />
      {label ? (
        <span className="absolute bottom-4 left-4 z-10 rounded-full bg-ink/45 px-3 py-1.5 text-xs uppercase tracking-wider text-bone backdrop-blur">
          {label}
        </span>
      ) : null}
    </div>
  );
}
