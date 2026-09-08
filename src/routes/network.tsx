import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LessonFrame } from "@/components/lesson-frame";
import { KeyLine, Panel } from "@/components/site-chrome";
import { NetworkDiagram, NodeLegend } from "@/components/network-diagram";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useStep } from "@/lib/use-step";
import {
  ACTIVITIES,
  BACKWARD_BEATS,
  BACKWARD_ORDER,
  CRITICAL,
  FORWARD_BEATS,
  ORDER,
  PATHS,
  PROJECT_DURATION,
  SLACK_ACTIVITIES,
  TIMES,
  type ActivityId,
} from "@/lib/cpm";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/network")({ component: NetworkLesson });

const TOTAL = 9;

function NetworkLesson() {
  const [step, onStep] = useStep("tlp-network-step", TOTAL);
  const Step = STEPS[step];
  return (
    <LessonFrame
      kicker="Question 1 · Project network"
      title="The 20-day project"
      step={step}
      total={TOTAL}
      onStep={onStep}
      nextLabel={step === 0 ? "Show me the jobs" : undefined}
    >
      <Step />
    </LessonFrame>
  );
}

const STEPS = [
  StepIdea,
  StepJobs,
  StepPicture,
  StepRoads,
  StepForward,
  StepBackward,
  StepSlack,
  StepQuiz,
  StepSheet,
];

function StepIdea() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        <h2 className="text-2xl">What is this question even asking?</h2>
        <p className="text-soft">
          You have eight jobs, labelled A to H. Some jobs cannot start until
          other jobs finish. The examiner wants four things:
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-soft">
          <li>A picture of who waits for whom.</li>
          <li>The earliest and latest each job can start and finish.</li>
          <li>The chain of jobs that decides the finish date.</li>
          <li>Which jobs have spare time, and how much.</li>
        </ol>
        <KeyLine>
          The whole project takes as long as the longest chain of jobs that
          must happen one after another. That chain is called the critical
          path.
        </KeyLine>
      </div>
      <Panel>
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          A picture to hold onto
        </p>
        <p className="mt-3 text-soft">
          Three friends walk to the same party down three different streets.
          The party cannot start until the last friend arrives. The longest
          walk is the one that matters. The short walks have spare time — they
          could have dawdled and still made it.
        </p>
        <p className="mt-4 text-sm text-muted">
          Jobs are the friends. Arrows are the streets. Slack is dawdling time.
        </p>
      </Panel>
    </div>
  );
}

function StepJobs() {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl">Meet the eight jobs</h2>
      <p className="max-w-2xl text-soft">
        Read the middle column as English, not as a code. “Predecessor” just
        means “must finish first.”
      </p>
      <div className="overflow-x-auto rounded-xl border border-border bg-surface">
        <table className="w-full min-w-xl text-left text-sm">
          <thead className="border-b border-border text-xs tracking-widest text-muted uppercase">
            <tr>
              <th className="px-4 py-3 font-medium">Job</th>
              <th className="px-4 py-3 font-medium">Days</th>
              <th className="px-4 py-3 font-medium">Must wait for</th>
            </tr>
          </thead>
          <tbody>
            {ACTIVITIES.map((a) => (
              <tr key={a.id} className="border-b border-border/70 last:border-0">
                <td className="px-4 py-3 font-display text-lg">{a.id}</td>
                <td className="px-4 py-3 font-mono tabular-nums">{a.duration}</td>
                <td className="px-4 py-3 text-soft">{a.waitFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <KeyLine>
        Two jobs can run at the same time if they do not wait on each other. B
        and C both wait only on A, so after A they can overlap.
      </KeyLine>
    </div>
  );
}

function StepPicture() {
  const [selected, setSelected] = useState<ActivityId | null>("A");
  const a = ACTIVITIES.find((x) => x.id === selected);
  return (
    <div className="space-y-5">
      <h2 className="text-2xl">Draw who waits for whom</h2>
      <p className="max-w-2xl text-soft">
        Each box is a job. Each arrow means “this one must finish before that
        one starts.” Tap a box.
      </p>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.85fr)]">
        <Panel className="p-3 sm:p-4">
          <NetworkDiagram selected={selected} onSelect={setSelected} />
          <NodeLegend kind="plain" />
        </Panel>
        {a && (
          <Panel>
            <p className="font-display text-2xl">{a.id}</p>
            <p className="mt-1 text-sm text-muted">{a.duration} days</p>
            <p className="mt-3 text-soft">{a.waitFor}</p>
          </Panel>
        )}
      </div>
    </div>
  );
}

function StepRoads() {
  const [pathId, setPathId] = useState<(typeof PATHS)[number]["id"]>("p1");
  const path = PATHS.find((p) => p.id === pathId)!;
  return (
    <div className="space-y-5">
      <h2 className="text-2xl">There are three roads to the end</h2>
      <p className="max-w-2xl text-soft">
        Add the days along a road. The project cannot finish faster than the
        slowest road, because that road still has to be walked.
      </p>
      <div className="flex flex-wrap gap-2">
        {PATHS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPathId(p.id)}
            className={cn(
              "h-11 rounded-md border px-3 text-sm pressable",
              pathId === p.id
                ? "border-fg bg-fg text-bg"
                : "border-border bg-surface text-fg",
            )}
          >
            {p.days} days
          </button>
        ))}
      </div>
      <Panel className="p-3 sm:p-4">
        <NetworkDiagram path={path.nodes} />
      </Panel>
      <Panel>
        <p className="font-mono text-sm text-muted">{path.label}</p>
        <p className="mt-2 text-soft">{path.note}</p>
      </Panel>
      <KeyLine>
        20, 14, and 11. The longest is 20. That is already the project
        duration — we will prove it properly with the forward pass next.
      </KeyLine>
    </div>
  );
}

function StepForward() {
  const [i, setI] = useState(0);
  const current = ORDER[i];
  const revealed = useMemo(() => new Set(ORDER.slice(0, i + 1)), [i]);
  const beat = FORWARD_BEATS[current];
  return (
    <div className="space-y-5">
      <h2 className="text-2xl">Forward pass — how early can each job start?</h2>
      <p className="max-w-2xl text-soft">
        Walk left to right. A job’s earliest start is the latest finish of the
        jobs it waits on. Earliest finish is start plus duration.
      </p>
      <Panel className="p-3 sm:p-4">
        <NetworkDiagram mode="forward" revealed={revealed} selected={current} />
        <NodeLegend kind="forward" />
      </Panel>
      <Panel>
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          Job {current}
        </p>
        <h3 className="mt-2 text-xl">{beat.title}</h3>
        <p className="mt-2 text-soft">{beat.body}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() => setI((n) => Math.max(0, n - 1))}
            disabled={i === 0}
          >
            Previous job
          </Button>
          <Button onClick={() => setI((n) => Math.min(ORDER.length - 1, n + 1))} disabled={i === ORDER.length - 1}>
            Next job
          </Button>
        </div>
      </Panel>
      {i === ORDER.length - 1 && (
        <KeyLine>
          H finishes on day 20. That is the earliest the whole project can
          finish. Write “project duration = 20 days.”
        </KeyLine>
      )}
    </div>
  );
}

function StepBackward() {
  const [i, setI] = useState(0);
  const current = BACKWARD_ORDER[i];
  const revealed = useMemo(
    () => new Set(BACKWARD_ORDER.slice(0, i + 1)),
    [i],
  );
  const beat = BACKWARD_BEATS[current];
  return (
    <div className="space-y-5">
      <h2 className="text-2xl">Backward pass — how late can a job start?</h2>
      <p className="max-w-2xl text-soft">
        Now walk right to left, from the finish date of 20. A job’s latest
        finish is the earliest “must start” of the jobs that wait on it. If two
        jobs wait on it, use the tighter deadline.
      </p>
      <Panel className="p-3 sm:p-4">
        <NetworkDiagram mode="backward" revealed={revealed} selected={current} />
        <NodeLegend kind="full" />
      </Panel>
      <Panel>
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          Job {current}
        </p>
        <h3 className="mt-2 text-xl">{beat.title}</h3>
        <p className="mt-2 text-soft">{beat.body}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() => setI((n) => Math.max(0, n - 1))}
            disabled={i === 0}
          >
            Previous job
          </Button>
          <Button
            onClick={() => setI((n) => Math.min(BACKWARD_ORDER.length - 1, n + 1))}
            disabled={i === BACKWARD_ORDER.length - 1}
          >
            Next job
          </Button>
        </div>
      </Panel>
    </div>
  );
}

function StepSlack() {
  const [focus, setFocus] = useState<"critical" | "slack">("critical");
  return (
    <div className="space-y-5">
      <h2 className="text-2xl">Slack is spare time. Zero slack is the critical path.</h2>
      <p className="max-w-2xl text-soft">
        Slack = latest start − earliest start. Same number as latest finish −
        earliest finish. If it is zero, that job cannot slip by a single day
        without pushing the whole project.
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFocus("critical")}
          className={cn(
            "h-11 rounded-md border px-3 text-sm pressable",
            focus === "critical" ? "border-fg bg-fg text-bg" : "border-border bg-surface",
          )}
        >
          Show the tight jobs
        </button>
        <button
          type="button"
          onClick={() => setFocus("slack")}
          className={cn(
            "h-11 rounded-md border px-3 text-sm pressable",
            focus === "slack" ? "border-fg bg-fg text-bg" : "border-border bg-surface",
          )}
        >
          Show spare time
        </button>
      </div>
      <Panel className="p-3 sm:p-4">
        <NetworkDiagram
          mode={focus === "critical" ? "critical" : "slack"}
          path={focus === "critical" ? CRITICAL : undefined}
        />
        <NodeLegend kind="full" />
      </Panel>
      <div className="grid gap-3 sm:grid-cols-2">
        <Panel>
          <p className="text-xs font-medium tracking-widest text-muted uppercase">
            Critical path
          </p>
          <p className="mt-2 font-display text-2xl">A → B → D → G → H</p>
          <p className="mt-2 text-soft">
            3 + 4 + 5 + 4 + 4 = {PROJECT_DURATION} days. Delay any of these
            and dinner is late.
          </p>
        </Panel>
        <Panel>
          <p className="text-xs font-medium tracking-widest text-muted uppercase">
            Jobs with slack
          </p>
          <ul className="mt-3 space-y-2 text-soft">
            {SLACK_ACTIVITIES.map((id) => (
              <li key={id} className="flex justify-between gap-3">
                <span>Job {id}</span>
                <span className="font-mono tabular-nums">{TIMES[id].slack} days</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}

function StepQuiz() {
  const [picked, setPicked] = useState<Set<ActivityId>>(new Set());
  const [duration, setDuration] = useState<number | null>(null);
  const [path, setPath] = useState<string | null>(null);

  const slackOk =
    SLACK_ACTIVITIES.every((id) => picked.has(id)) &&
    [...picked].every((id) => SLACK_ACTIVITIES.includes(id));

  function toggle(id: ActivityId) {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl">Check that it stuck</h2>
      <p className="text-soft">No marks. Tap until it feels obvious.</p>

      <Panel>
        <p className="font-medium">1. Which path is critical?</p>
        <div className="mt-3 grid gap-2">
          {PATHS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPath(p.id)}
              className={cn(
                "rounded-md border px-3 py-3 text-left text-sm pressable",
                path === p.id ? "border-fg bg-fg/5" : "border-border bg-surface",
              )}
            >
              {p.label}
              <span className="ml-2 text-muted">({p.days}d)</span>
            </button>
          ))}
        </div>
        {path && (
          <p className={cn("mt-3 text-sm", path === "p1" ? "text-ok" : "text-danger")}>
            {path === "p1"
              ? "Yes. The longest chain is the critical path."
              : "That road is shorter, so it has spare time. The critical path is the long one."}
          </p>
        )}
      </Panel>

      <Panel>
        <p className="font-medium">2. How many days is the whole project?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[14, 16, 20, 24].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setDuration(n)}
              className={cn(
                "h-11 min-w-16 rounded-md border px-4 font-mono pressable",
                duration === n ? "border-fg bg-fg text-bg" : "border-border bg-surface",
              )}
            >
              {n}
            </button>
          ))}
        </div>
        {duration != null && (
          <p className={cn("mt-3 text-sm", duration === 20 ? "text-ok" : "text-danger")}>
            {duration === 20
              ? "Yes. H’s earliest finish is 20, and the long road adds to 20."
              : "Add A+B+D+G+H: 3+4+5+4+4. That is 20."}
          </p>
        )}
      </Panel>

      <Panel>
        <p className="font-medium">3. Tap every job that has slack. Leave the tight ones alone.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {ORDER.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => toggle(id)}
              className={cn(
                "size-11 rounded-md border font-display text-lg pressable",
                picked.has(id) ? "border-fg bg-fg text-bg" : "border-border bg-surface",
              )}
            >
              {id}
            </button>
          ))}
        </div>
        {picked.size > 0 && (
          <p className={cn("mt-3 text-sm", slackOk ? "text-ok" : "text-danger")}>
            {slackOk
              ? "C has 6 days, E has 6, F has 9. The rest have zero."
              : "Slack jobs are the ones not on A–B–D–G–H."}
          </p>
        )}
      </Panel>
    </div>
  );
}

function StepSheet() {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl">The answers, in one place</h2>
      <p className="text-soft">
        If you can say these four sentences out loud, you can write the
        assignment.
      </p>
      <ol className="space-y-4">
        <li>
          <Panel>
            <p className="text-xs font-medium tracking-widest text-muted uppercase">
              a. Network
            </p>
            <p className="mt-2 text-soft">
              A splits into B and C. B goes to D. C splits into E and F. D and
              E meet at G. F and G meet at H.
            </p>
          </Panel>
        </li>
        <li>
          <Panel>
            <p className="text-xs font-medium tracking-widest text-muted uppercase">
              b. Times
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-lg text-left text-sm">
                <thead className="text-xs tracking-widest text-muted uppercase">
                  <tr>
                    {["Job", "ES", "EF", "LS", "LF", "Slack"].map((h) => (
                      <th key={h} className="py-2 pr-4 font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ORDER.map((id) => {
                    const t = TIMES[id];
                    return (
                      <tr key={id} className="border-t border-border/70">
                        <td className="py-2 pr-4 font-display">{id}</td>
                        <td className="py-2 pr-4 font-mono tabular-nums">{t.es}</td>
                        <td className="py-2 pr-4 font-mono tabular-nums">{t.ef}</td>
                        <td className="py-2 pr-4 font-mono tabular-nums">{t.ls}</td>
                        <td className="py-2 pr-4 font-mono tabular-nums">{t.lf}</td>
                        <td className="py-2 pr-4 font-mono tabular-nums">
                          {t.slack}
                          {t.slack === 0 && (
                            <Badge tone="primary" className="ml-2">
                              critical
                            </Badge>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Panel>
        </li>
        <li>
          <Panel>
            <p className="text-xs font-medium tracking-widest text-muted uppercase">
              c. Critical path
            </p>
            <p className="mt-2 font-display text-2xl">A → B → D → G → H</p>
            <p className="mt-1 text-soft">Total project duration: 20 days.</p>
          </Panel>
        </li>
        <li>
          <Panel>
            <p className="text-xs font-medium tracking-widest text-muted uppercase">
              d. Slack
            </p>
            <p className="mt-2 text-soft">C = 6 days. E = 6 days. F = 9 days. All other jobs have 0.</p>
          </Panel>
        </li>
      </ol>
      <p className="text-sm text-muted">
        Next:{" "}
        <Link to="/juice" className="text-primary underline-offset-2 hover:underline">
          the juice kitchen
        </Link>
        .
      </p>
    </div>
  );
}
