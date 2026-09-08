import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GitFork, GlassWater } from "lucide-react";
import { SiteChrome } from "@/components/site-chrome";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteChrome>
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16">
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          CSC 296 · drawn slowly
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">
          You do not need to be clever. You need a picture.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-normal text-soft">
          These two assignment questions look like a wall of letters. They are
          not. One is a waiting line. One is a kitchen with two ingredients.
          Tap a lesson. We walk it one small step at a time.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <LessonCard
            to="/network"
            kicker="Question 1"
            icon={<GitFork className="size-5" />}
            title="The 20-day project"
            body="Eight jobs. Some cannot start until others finish. The whole project takes as long as the longest chain of waiting."
          />
          <LessonCard
            to="/juice"
            kicker="Question 2"
            icon={<GlassWater className="size-5" />}
            title="The juice kitchen"
            body="Mango juice and orange juice. Limited sugar, limited water. We find the mix that makes the most naira — by drawing the walls."
          />
        </div>

        <p className="mt-10 max-w-xl text-sm text-muted">
          Same numbers as your assignment. Same answers. The point of this page
          is not to hand you a sheet to copy. It is to make the method sit in
          your head so the next question like this does not feel like a foreign
          language.
        </p>
      </main>
    </SiteChrome>
  );
}

function LessonCard({
  to,
  kicker,
  icon,
  title,
  body,
}: {
  to: "/network" | "/juice";
  kicker: string;
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-xl border border-border bg-surface p-5 shadow-(--shadow-card) transition-[border-color,transform] duration-(--motion-fast) ease-[var(--ease-out)] pressable hover:border-fg/30 sm:p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium tracking-widest text-muted uppercase">
          {kicker}
        </span>
        <span className="text-muted">{icon}</span>
      </div>
      <h2 className="mt-4 text-2xl">{title}</h2>
      <p className="mt-3 flex-1 text-sm leading-normal text-soft">{body}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
        Start this one
        <ArrowRight className="size-4 transition-transform duration-(--motion-fast) group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
