import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "muted",
  children,
}: {
  className?: string;
  tone?: "muted" | "primary" | "ok" | "danger";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium tracking-wide",
        tone === "muted" && "bg-fg/8 text-muted",
        tone === "primary" && "bg-primary text-primary-fg",
        tone === "ok" && "bg-ok/12 text-ok",
        tone === "danger" && "bg-danger/12 text-danger",
        className,
      )}
    >
      {children}
    </span>
  );
}
