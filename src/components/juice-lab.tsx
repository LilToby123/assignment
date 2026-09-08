import { useMemo } from "react";
import {
  CORNERS,
  SUGAR_CAP,
  WATER_CAP,
  formatNaira,
  isFeasible,
  profit,
  sugarUsed,
  waterUsed,
  type Corner,
} from "@/lib/lp";
import { cn } from "@/lib/utils";

const VB_W = 360;
const VB_H = 280;
const PAD_L = 42;
const PAD_B = 32;
const PAD_T = 18;
const PAD_R = 16;
const X_MAX = 24;
const Y_MAX = 18;

function xPx(x: number) {
  return PAD_L + (x / X_MAX) * (VB_W - PAD_L - PAD_R);
}
function yPx(y: number) {
  return PAD_T + (1 - y / Y_MAX) * (VB_H - PAD_T - PAD_B);
}

export function JuiceGraph({
  x,
  y,
  highlight,
  showUser = true,
}: {
  x: number;
  y: number;
  highlight?: Corner["id"] | null;
  showUser?: boolean;
}) {
  const sugarLine = useMemo(() => {
    // y = 40 - 2x, clipped to the top of the chart
    const xAtYMax = (40 - Y_MAX) / 2;
    return [
      [xAtYMax, Y_MAX],
      [20, 0],
    ] as [number, number][];
  }, []);

  const waterLine: [number, number][] = [
    [0, 15],
    [20, 0],
  ];

  const feasible = [
    [xPx(0), yPx(0)],
    [xPx(20), yPx(0)],
    [xPx(0), yPx(15)],
  ]
    .map((p) => p.join(","))
    .join(" ");

  const feasibleMix = isFeasible(x, y);

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Graph of mango litres versus orange litres with sugar and water limits"
    >
      <polygon points={feasible} fill="var(--color-primary)" fillOpacity={0.12} />

      {/* axes */}
      <line
        x1={xPx(0)}
        y1={yPx(0)}
        x2={xPx(X_MAX)}
        y2={yPx(0)}
        stroke="var(--color-fg)"
        strokeWidth={1.2}
      />
      <line
        x1={xPx(0)}
        y1={yPx(0)}
        x2={xPx(0)}
        y2={yPx(Y_MAX)}
        stroke="var(--color-fg)"
        strokeWidth={1.2}
      />

      {Array.from({ length: 5 }, (_, i) => i * 5).map((tick) => (
        <g key={`x-${tick}`}>
          <line
            x1={xPx(tick)}
            y1={yPx(0)}
            x2={xPx(tick)}
            y2={yPx(0) + 4}
            stroke="var(--color-fg)"
          />
          <text
            x={xPx(tick)}
            y={yPx(0) + 16}
            textAnchor="middle"
            fontSize={9}
            fill="var(--color-muted)"
            fontFamily="ui-monospace, monospace"
          >
            {tick}
          </text>
        </g>
      ))}
      {[0, 5, 10, 15].map((tick) => (
        <g key={`y-${tick}`}>
          <line
            x1={xPx(0)}
            y1={yPx(tick)}
            x2={xPx(0) - 4}
            y2={yPx(tick)}
            stroke="var(--color-fg)"
          />
          <text
            x={xPx(0) - 8}
            y={yPx(tick) + 3}
            textAnchor="end"
            fontSize={9}
            fill="var(--color-muted)"
            fontFamily="ui-monospace, monospace"
          >
            {tick}
          </text>
        </g>
      ))}

      <text
        x={xPx(12)}
        y={VB_H - 2}
        textAnchor="middle"
        fontSize={10}
        fill="var(--color-muted)"
      >
        Mango juice, litres (x)
      </text>
      <text
        x={12}
        y={yPx(9)}
        textAnchor="middle"
        fontSize={10}
        fill="var(--color-muted)"
        transform={`rotate(-90 12 ${yPx(9)})`}
      >
        Orange juice, litres (y)
      </text>

      {/* sugar line */}
      <line
        x1={xPx(sugarLine[0][0])}
        y1={yPx(sugarLine[0][1])}
        x2={xPx(sugarLine[1][0])}
        y2={yPx(sugarLine[1][1])}
        stroke="var(--color-muted)"
        strokeWidth={1.5}
        strokeDasharray="5 4"
      />
      <text
        x={xPx(12.4)}
        y={yPx(40 - 24) - 6}
        fontSize={9}
        fill="var(--color-muted)"
      >
        sugar wall
      </text>

      {/* water line */}
      <line
        x1={xPx(waterLine[0][0])}
        y1={yPx(waterLine[0][1])}
        x2={xPx(waterLine[1][0])}
        y2={yPx(waterLine[1][1])}
        stroke="var(--color-primary)"
        strokeWidth={2}
      />
      <text x={xPx(6)} y={yPx(11.2)} fontSize={9} fill="var(--color-primary)">
        water wall
      </text>

      {CORNERS.map((c) => {
        const active = highlight === c.id;
        return (
          <g key={c.id}>
            <circle
              cx={xPx(c.x)}
              cy={yPx(c.y)}
              r={active ? 7 : 5}
              fill={c.id === "mango" ? "var(--color-primary)" : "var(--color-fg)"}
              stroke="var(--color-surface)"
              strokeWidth={2}
            />
            <text
              x={xPx(c.x) + (c.x === 0 ? 8 : -8)}
              y={yPx(c.y) + (c.y === 0 ? -10 : 16)}
              textAnchor={c.x === 0 ? "start" : "end"}
              fontSize={9}
              fill="var(--color-fg)"
            >
              ({c.x}, {c.y})
            </text>
          </g>
        );
      })}

      {showUser && (
        <circle
          cx={xPx(x)}
          cy={yPx(y)}
          r={6}
          fill={feasibleMix ? "var(--color-fg)" : "var(--color-danger)"}
          stroke="var(--color-surface)"
          strokeWidth={2}
        />
      )}
    </svg>
  );
}

export function ResourceBar({
  label,
  used,
  cap,
}: {
  label: string;
  used: number;
  cap: number;
}) {
  const ratio = Math.min(1, used / cap);
  const over = used > cap + 1e-6;
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-2 text-sm">
        <span className="text-soft">{label}</span>
        <span className={cn("font-mono tabular-nums", over ? "text-danger" : "text-muted")}>
          {used.toFixed(0)} / {cap}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-border">
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-(--motion-fast) ease-[var(--ease-out)]",
            over ? "bg-danger" : "bg-primary",
          )}
          style={{ width: `${Math.min(100, ratio * 100)}%` }}
        />
      </div>
    </div>
  );
}

export function JuiceMixer({
  x,
  y,
  onChange,
}: {
  x: number;
  y: number;
  onChange: (next: { x: number; y: number }) => void;
}) {
  const s = sugarUsed(x, y);
  const w = waterUsed(x, y);
  const z = profit(x, y);
  const ok = isFeasible(x, y);

  return (
    <div className="grid gap-5">
      <label className="grid gap-2">
        <span className="flex items-baseline justify-between text-sm">
          <span>Mango juice</span>
          <span className="font-mono tabular-nums text-muted">{x} L</span>
        </span>
        <input
          type="range"
          min={0}
          max={22}
          step={1}
          value={x}
          onChange={(e) => onChange({ x: Number(e.target.value), y })}
          className="h-11 w-full accent-primary"
          aria-label="Litres of mango juice"
        />
      </label>
      <label className="grid gap-2">
        <span className="flex items-baseline justify-between text-sm">
          <span>Orange juice</span>
          <span className="font-mono tabular-nums text-muted">{y} L</span>
        </span>
        <input
          type="range"
          min={0}
          max={18}
          step={1}
          value={y}
          onChange={(e) => onChange({ x, y: Number(e.target.value) })}
          className="h-11 w-full accent-juice"
          aria-label="Litres of orange juice"
        />
      </label>

      <ResourceBar label="Sugar" used={s} cap={SUGAR_CAP} />
      <ResourceBar label="Water" used={w} cap={WATER_CAP} />

      <div className="flex items-end justify-between gap-3 border-t border-border pt-4">
        <div>
          <p className="text-xs tracking-widest text-muted uppercase">Profit</p>
          <p
            className={cn(
              "font-display text-3xl tabular-nums tracking-display",
              ok ? "text-fg" : "text-danger",
            )}
          >
            {formatNaira(z)}
          </p>
        </div>
        <p className={cn("text-sm", ok ? "text-ok" : "text-danger")}>
          {ok ? "This mix is allowed." : "Not enough sugar or water."}
        </p>
      </div>
    </div>
  );
}
