import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LessonFrame } from "@/components/lesson-frame";
import { KeyLine, Panel } from "@/components/site-chrome";
import { JuiceGraph, JuiceMixer } from "@/components/juice-lab";
import { useStep } from "@/lib/use-step";
import {
  CORNERS,
  MANGO_PROFIT,
  ORANGE_PROFIT,
  SUGAR_CAP,
  WATER_CAP,
  formatNaira,
  type Corner,
} from "@/lib/lp";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/juice")({ component: JuiceLesson });

const TOTAL = 7;

function JuiceLesson() {
  const [step, onStep] = useStep("tlp-juice-step", TOTAL);
  const Step = STEPS[step];
  return (
    <LessonFrame
      kicker="Question 2 · Linear programming"
      title="The juice kitchen"
      step={step}
      total={TOTAL}
      onStep={onStep}
      nextLabel={step === 0 ? "Write it as maths" : undefined}
    >
      <Step />
    </LessonFrame>
  );
}

const STEPS = [
  StepStory,
  StepMaths,
  StepMix,
  StepGraph,
  StepCorners,
  StepQuiz,
  StepSheet,
];

function StepStory() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-2xl">You run a tiny juice stall</h2>
        <p className="text-soft">
          Two drinks. Mango juice makes ₦500 a litre. Orange juice makes ₦300
          a litre. You would make only mango — except you do not have infinite
          sugar or water.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border bg-surface">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border text-xs tracking-widest text-muted uppercase">
              <tr>
                <th className="px-4 py-3 font-medium">Per litre</th>
                <th className="px-4 py-3 font-medium">Mango</th>
                <th className="px-4 py-3 font-medium">Orange</th>
                <th className="px-4 py-3 font-medium">You have</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/70">
                <td className="px-4 py-3">Sugar</td>
                <td className="px-4 py-3 font-mono">2 kg</td>
                <td className="px-4 py-3 font-mono">1 kg</td>
                <td className="px-4 py-3 font-mono">40 kg</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Water</td>
                <td className="px-4 py-3 font-mono">3 L</td>
                <td className="px-4 py-3 font-mono">4 L</td>
                <td className="px-4 py-3 font-mono">60 L</td>
              </tr>
            </tbody>
          </table>
        </div>
        <KeyLine>
          Linear programming here means: write a profit formula, write the
          walls you cannot cross, then pick the legal mix with the biggest
          profit.
        </KeyLine>
      </div>
      <Panel>
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          Names we will use
        </p>
        <p className="mt-4 font-display text-3xl tracking-display">x</p>
        <p className="text-soft">litres of mango juice</p>
        <p className="mt-5 font-display text-3xl tracking-display">y</p>
        <p className="text-soft">litres of orange juice</p>
        <p className="mt-5 text-sm text-muted">
          x and y cannot be negative. You cannot make minus juice.
        </p>
      </Panel>
    </div>
  );
}

function StepMaths() {
  const [open, setOpen] = useState({ z: false, s: false, w: false, n: false });
  return (
    <div className="space-y-5">
      <h2 className="text-2xl">Turn the stall into four lines of maths</h2>
      <p className="max-w-2xl text-soft">
        Tap each card. The English is already the formula — we just write it
        with x and y.
      </p>
      <button
        type="button"
        onClick={() => setOpen((o) => ({ ...o, z: true }))}
        className="w-full rounded-xl border border-border bg-surface p-5 text-left pressable"
      >
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          What we want
        </p>
        {open.z ? (
          <div className="mt-3">
            <p className="font-display text-2xl">
              Maximise Z = {MANGO_PROFIT}x + {ORANGE_PROFIT}y
            </p>
            <p className="mt-2 text-sm text-soft">
              Each mango litre adds ₦500. Each orange litre adds ₦300. Z is
              total profit.
            </p>
          </div>
        ) : (
          <p className="mt-3 text-soft">Tap to write the objective function.</p>
        )}
      </button>
      <button
        type="button"
        onClick={() => setOpen((o) => ({ ...o, s: true }))}
        className="w-full rounded-xl border border-border bg-surface p-5 text-left pressable"
      >
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          Sugar wall
        </p>
        {open.s ? (
          <div className="mt-3">
            <p className="font-display text-2xl">2x + y ≤ {SUGAR_CAP}</p>
            <p className="mt-2 text-sm text-soft">
              2 kg per mango litre, 1 kg per orange litre, and only 40 kg in
              the sack.
            </p>
          </div>
        ) : (
          <p className="mt-3 text-soft">Tap to write the sugar constraint.</p>
        )}
      </button>
      <button
        type="button"
        onClick={() => setOpen((o) => ({ ...o, w: true }))}
        className="w-full rounded-xl border border-border bg-surface p-5 text-left pressable"
      >
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          Water wall
        </p>
        {open.w ? (
          <div className="mt-3">
            <p className="font-display text-2xl">3x + 4y ≤ {WATER_CAP}</p>
            <p className="mt-2 text-sm text-soft">
              3 litres of water per mango litre, 4 per orange litre, tank holds
              60.
            </p>
          </div>
        ) : (
          <p className="mt-3 text-soft">Tap to write the water constraint.</p>
        )}
      </button>
      <button
        type="button"
        onClick={() => setOpen((o) => ({ ...o, n: true }))}
        className="w-full rounded-xl border border-border bg-surface p-5 text-left pressable"
      >
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          No negative juice
        </p>
        {open.n ? (
          <p className="mt-3 font-display text-2xl">x ≥ 0, y ≥ 0</p>
        ) : (
          <p className="mt-3 text-soft">Tap to write the non-negativity constraints.</p>
        )}
      </button>
      {open.z && open.s && open.w && open.n && (
        <KeyLine>
          That is the whole model. The next step is not algebra for its own
          sake — it is finding which legal mix pays the most.
        </KeyLine>
      )}
    </div>
  );
}

function StepMix() {
  const [mix, setMix] = useState({ x: 8, y: 4 });
  return (
    <div className="space-y-5">
      <h2 className="text-2xl">Mix it yourself</h2>
      <p className="max-w-2xl text-soft">
        Drag the sliders. Watch sugar and water fill up. If a bar goes red,
        that mix is illegal — you do not have the ingredients. The black dot
        on the graph is your stall today.
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <JuiceMixer x={mix.x} y={mix.y} onChange={setMix} />
        </Panel>
        <Panel className="p-3 sm:p-4">
          <JuiceGraph x={mix.x} y={mix.y} />
        </Panel>
      </div>
      <KeyLine>
        The shaded triangle is every mix you are allowed to make. Anything
        outside it needs more sugar or more water than you have.
      </KeyLine>
    </div>
  );
}

function StepGraph() {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl">The two walls, drawn</h2>
      <p className="max-w-2xl text-soft">
        Each constraint is a straight line. “Less than or equal” means you
        must stay on the origin side of the line. The legal kitchen is the
        overlap of those half-planes — here, a triangle.
      </p>
      <Panel className="p-3 sm:p-5">
        <JuiceGraph x={0} y={0} showUser={false} />
      </Panel>
      <div className="grid gap-3 sm:grid-cols-2">
        <Panel>
          <p className="text-xs font-medium tracking-widest text-muted uppercase">
            Sugar · dashed
          </p>
          <p className="mt-2 font-display text-xl">2x + y = 40</p>
          <p className="mt-2 text-sm text-soft">
            Hits the mango axis at 20 L. Hits the orange axis at 40 L — off
            the top of this chart. Inside the picture, sugar is almost never
            the tight wall.
          </p>
        </Panel>
        <Panel>
          <p className="text-xs font-medium tracking-widest text-muted uppercase">
            Water · solid teal
          </p>
          <p className="mt-2 font-display text-xl">3x + 4y = 60</p>
          <p className="mt-2 text-sm text-soft">
            Hits mango at 20 L and orange at 15 L. This is the wall you
            actually bump into.
          </p>
        </Panel>
      </div>
    </div>
  );
}

function StepCorners() {
  const [pick, setPick] = useState<Corner["id"]>("mango");
  const corner = CORNERS.find((c) => c.id === pick)!;
  return (
    <div className="space-y-5">
      <h2 className="text-2xl">You only need the corners</h2>
      <p className="max-w-2xl text-soft">
        For a straight profit line over a straight-edged kitchen, the best mix
        is always a corner. There are three. Tap each. Compare the naira.
      </p>
      <div className="flex flex-wrap gap-2">
        {CORNERS.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setPick(c.id)}
            className={cn(
              "h-11 rounded-md border px-3 text-sm pressable",
              pick === c.id ? "border-fg bg-fg text-bg" : "border-border bg-surface",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel className="p-3 sm:p-4">
          <JuiceGraph x={corner.x} y={corner.y} highlight={corner.id} />
        </Panel>
        <Panel>
          <p className="text-xs font-medium tracking-widest text-muted uppercase">
            {corner.mix}
          </p>
          <p className="mt-3 font-display text-3xl tabular-nums tracking-display">
            {formatNaira(corner.z)}
          </p>
          <p className="mt-3 text-soft">{corner.why}</p>
        </Panel>
      </div>
      <KeyLine>
        Best mix: 20 litres of mango, 0 litres of orange. Maximum profit
        ₦10,000. Orange is legal, but every litre of orange you add (along the
        water wall) replaces mango that would have paid more.
      </KeyLine>
      <p className="max-w-2xl text-sm text-muted">
        Along the water wall, swapping toward more mango always raises profit.
        So you slide all the way to (20, 0). Both ingredients run out exactly
        there.
      </p>
    </div>
  );
}

function StepQuiz() {
  const [obj, setObj] = useState<string | null>(null);
  const [mix, setMix] = useState<string | null>(null);
  const [z, setZ] = useState<number | null>(null);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl">Check that it stuck</h2>

      <Panel>
        <p className="font-medium">1. What are we maximising?</p>
        <div className="mt-3 grid gap-2">
          {[
            { id: "wrong1", t: "Z = 2x + y" },
            { id: "ok", t: "Z = 500x + 300y" },
            { id: "wrong2", t: "Z = 3x + 4y" },
          ].map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setObj(o.id)}
              className={cn(
                "rounded-md border px-3 py-3 text-left font-mono text-sm pressable",
                obj === o.id ? "border-fg bg-fg/5" : "border-border",
              )}
            >
              {o.t}
            </button>
          ))}
        </div>
        {obj && (
          <p className={cn("mt-3 text-sm", obj === "ok" ? "text-ok" : "text-danger")}>
            {obj === "ok"
              ? "Yes. Profit uses the ₦500 and ₦300. The 2, 1, 3, 4 belong in the constraints."
              : "That is a resource formula, not profit. Profit is 500x + 300y."}
          </p>
        )}
      </Panel>

      <Panel>
        <p className="font-medium">2. What is the best mix?</p>
        <div className="mt-3 grid gap-2">
          {[
            { id: "none", t: "0 L mango, 0 L orange" },
            { id: "orange", t: "0 L mango, 15 L orange" },
            { id: "mango", t: "20 L mango, 0 L orange" },
            { id: "half", t: "10 L mango, 10 L orange" },
          ].map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setMix(o.id)}
              className={cn(
                "rounded-md border px-3 py-3 text-left text-sm pressable",
                mix === o.id ? "border-fg bg-fg/5" : "border-border",
              )}
            >
              {o.t}
            </button>
          ))}
        </div>
        {mix && (
          <p className={cn("mt-3 text-sm", mix === "mango" ? "text-ok" : "text-danger")}>
            {mix === "mango"
              ? "Yes. That corner scores ₦10,000. 10 and 10 is not even legal — water would be 70 L."
              : mix === "half"
                ? "10 and 10 needs 70 L of water. Illegal. The winner is 20 mango, 0 orange."
                : "Legal, but not the richest corner. All mango pays more."}
          </p>
        )}
      </Panel>

      <Panel>
        <p className="font-medium">3. Maximum profit?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[4500, 8000, 10000, 15000].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setZ(n)}
              className={cn(
                "h-11 rounded-md border px-4 font-mono pressable",
                z === n ? "border-fg bg-fg text-bg" : "border-border bg-surface",
              )}
            >
              {formatNaira(n)}
            </button>
          ))}
        </div>
        {z != null && (
          <p className={cn("mt-3 text-sm", z === 10000 ? "text-ok" : "text-danger")}>
            {z === 10000
              ? "500 × 20 + 300 × 0 = 10,000."
              : "Compute 500 times 20. Orange is zero at the optimum."}
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
      <Panel>
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          a. Model
        </p>
        <div className="mt-3 space-y-1 font-display text-xl leading-snug">
          <p>Maximise Z = 500x + 300y</p>
          <p>2x + y ≤ 40</p>
          <p>3x + 4y ≤ 60</p>
          <p>x ≥ 0, y ≥ 0</p>
        </div>
      </Panel>
      <Panel>
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          b. Optimum
        </p>
        <p className="mt-2 font-display text-2xl">x = 20, y = 0</p>
        <p className="mt-1 text-soft">20 litres mango juice, 0 litres orange juice.</p>
        <p className="mt-3 font-display text-3xl tracking-display">
          Maximum profit {formatNaira(10000)}
        </p>
      </Panel>
      <p className="text-sm text-muted">
        Revisit{" "}
        <Link to="/network" className="text-primary underline-offset-2 hover:underline">
          the project network
        </Link>{" "}
        any time. Both lessons remember the step you left on.
      </p>
    </div>
  );
}
