import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Home", exact: true },
  { to: "/network", label: "The project" },
  { to: "/juice", label: "The juices" },
] as const;

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-30 border-b border-border/80 bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
          <Link
            to="/"
            className="font-display text-lg tracking-display text-fg sm:text-xl"
          >
            The Longest Path
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            {LINKS.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "rounded-md px-2.5 py-2 transition-colors duration-(--motion-quick) sm:px-3",
                    active
                      ? "bg-fg text-bg"
                      : "text-muted hover:bg-fg/5 hover:text-fg",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}

export function KeyLine({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-primary pl-4 font-medium leading-snug text-fg">
      {children}
    </p>
  );
}

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-xl border border-border bg-surface p-4 shadow-(--shadow-card) sm:p-6",
        className,
      )}
    >
      {children}
    </section>
  );
}
