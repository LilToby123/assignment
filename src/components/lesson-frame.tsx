import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteChrome } from "@/components/site-chrome";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export function LessonFrame({
  kicker,
  title,
  step,
  total,
  onStep,
  children,
  nextLabel,
  hideNext,
}: {
  kicker: string;
  title: string;
  step: number;
  total: number;
  onStep: (next: number) => void;
  children: ReactNode;
  nextLabel?: string;
  hideNext?: boolean;
}) {
  const atStart = step <= 0;
  const atEnd = step >= total - 1;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowRight" && !atEnd && !hideNext) onStep(step + 1);
      if (e.key === "ArrowLeft" && !atStart) onStep(step - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [atEnd, atStart, hideNext, onStep, step]);

  return (
    <SiteChrome>
      <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-5xl flex-col px-4 pb-28 pt-5 sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:pt-8">
        <Link
          to="/"
          className="mb-5 inline-flex w-fit items-center gap-1.5 text-sm text-muted hover:text-fg"
        >
          <ChevronLeft className="size-4" />
          All lessons
        </Link>

        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          {kicker}
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h1 className="max-w-xl text-3xl sm:text-4xl">{title}</h1>
          <p className="font-mono text-sm text-muted tabular-nums">
            {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>

        <ol className="mt-5 flex gap-1.5" aria-hidden>
          {Array.from({ length: total }, (_, i) => (
            <li key={i} className="flex-1">
              <button
                type="button"
                onClick={() => onStep(i)}
                className={cn(
                  "h-1.5 w-full rounded-full transition-colors duration-(--motion-fast)",
                  i <= step ? "bg-primary" : "bg-border",
                )}
                aria-label={`Go to step ${i + 1}`}
              />
            </li>
          ))}
        </ol>

        <div className="mt-8 flex-1">{children}</div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Button
            variant="outline"
            onClick={() => onStep(step - 1)}
            disabled={atStart}
            aria-label="Previous step"
          >
            <ArrowLeft />
            Back
          </Button>
          {!hideNext && (
            <Button
              onClick={() => onStep(Math.min(total - 1, step + 1))}
              disabled={atEnd}
            >
              {atEnd ? "Done" : (nextLabel ?? "Next")}
              <ArrowRight />
            </Button>
          )}
        </div>
      </div>
    </SiteChrome>
  );
}
