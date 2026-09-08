import { TIMES, type ActivityId } from "@/lib/cpm";
import { cn } from "@/lib/utils";

const NW = 104;
const NH = 74;

type NodePos = { id: ActivityId; x: number; y: number };

const NODES: NodePos[] = [
  { id: "A", x: 16, y: 118 },
  { id: "B", x: 188, y: 10 },
  { id: "C", x: 188, y: 186 },
  { id: "D", x: 360, y: 10 },
  { id: "E", x: 360, y: 156 },
  { id: "F", x: 360, y: 248 },
  { id: "G", x: 540, y: 92 },
  { id: "H", x: 712, y: 92 },
];

const EDGES: { from: ActivityId; to: ActivityId }[] = [
  { from: "A", to: "B" },
  { from: "A", to: "C" },
  { from: "B", to: "D" },
  { from: "C", to: "E" },
  { from: "C", to: "F" },
  { from: "D", to: "G" },
  { from: "E", to: "G" },
  { from: "F", to: "H" },
  { from: "G", to: "H" },
];

function pos(id: ActivityId): NodePos {
  return NODES.find((n) => n.id === id)!;
}

function edgePath(from: ActivityId, to: ActivityId): string {
  const a = pos(from);
  const b = pos(to);
  const x1 = a.x + NW;
  const y1 = a.y + NH / 2;
  const x2 = b.x;
  const y2 = b.y + NH / 2;
  const midX = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
}

export type DiagramMode = "plain" | "forward" | "backward" | "slack" | "critical";

export function NetworkDiagram({
  visible,
  showEdges = true,
  mode = "plain",
  revealed,
  path,
  selected,
  onSelect,
}: {
  visible?: Set<ActivityId>;
  showEdges?: boolean;
  mode?: DiagramMode;
  revealed?: Set<ActivityId>;
  path?: ActivityId[];
  selected?: ActivityId | null;
  onSelect?: (id: ActivityId) => void;
}) {
  const shown = visible ?? new Set<ActivityId>(["A", "B", "C", "D", "E", "F", "G", "H"]);
  const highlight = path ? new Set(path) : null;

  return (
    <div className="overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
      <p className="mb-2 text-xs text-muted sm:hidden">Swipe sideways to see the whole picture.</p>
      <svg
        viewBox="0 0 840 340"
        width={840}
        height={340}
        className="max-w-none"
        role="img"
        aria-label="Project network of activities A through H"
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>

        {showEdges &&
          EDGES.map((e) => {
            if (!shown.has(e.from) || !shown.has(e.to)) return null;
            const onPath = highlight
              ? highlight.has(e.from) && highlight.has(e.to)
              : mode === "critical"
                ? TIMES[e.from].slack === 0 && TIMES[e.to].slack === 0
                : true;
            const dim = highlight ? !onPath : mode === "critical" ? !onPath : false;
            return (
              <path
                key={`${e.from}-${e.to}`}
                d={edgePath(e.from, e.to)}
                fill="none"
                className={cn(
                  dim ? "text-path-dim" : "text-fg",
                  onPath && (mode === "critical" || Boolean(highlight)) && "text-primary",
                )}
                stroke="currentColor"
                strokeWidth={onPath && (mode === "critical" || Boolean(highlight)) ? 2.6 : 1.6}
                markerEnd="url(#arrow)"
              />
            );
          })}

        {NODES.map((n) => {
          if (!shown.has(n.id)) return null;
          const t = TIMES[n.id];
          const duration = t.ef - t.es;
          const isSel = selected === n.id;
          const onPath = highlight ? highlight.has(n.id) : true;
          const critical = t.slack === 0;
          const known = !revealed || revealed.has(n.id);
          const showForward =
            (mode === "forward" || mode === "backward" || mode === "slack" || mode === "critical") &&
            known;
          const showBackward =
            (mode === "backward" || mode === "slack" || mode === "critical") && known;

          const filled =
            (mode === "critical" && critical) || isSel;
          const dimmed = Boolean(highlight && !onPath);

          const fill = filled ? "var(--color-fg)" : "var(--color-surface)";
          const stroke = filled
            ? "var(--color-fg)"
            : mode === "critical" && critical
              ? "var(--color-primary)"
              : dimmed
                ? "var(--color-path-dim)"
                : "var(--color-fg)";
          const ink = filled
            ? "var(--color-bg)"
            : dimmed
              ? "var(--color-muted)"
              : "var(--color-fg)";
          const mutedInk = filled
            ? "color-mix(in oklab, var(--color-bg) 72%, transparent)"
            : "var(--color-muted)";

          return (
            <g
              key={n.id}
              transform={`translate(${n.x} ${n.y})`}
              className={onSelect ? "cursor-pointer" : undefined}
              onClick={() => onSelect?.(n.id)}
            >
              <rect
                width={NW}
                height={NH}
                rx={10}
                fill={fill}
                stroke={stroke}
                strokeWidth={isSel || (mode === "critical" && critical) ? 2.2 : 1.5}
              />
              {showForward && (
                <>
                  <text x={10} y={16} fontSize={10} fill={mutedInk} fontFamily="ui-monospace, monospace">
                    {t.es}
                  </text>
                  <text
                    x={NW / 2}
                    y={16}
                    fontSize={10}
                    fill={mutedInk}
                    fontFamily="ui-monospace, monospace"
                    textAnchor="middle"
                  >
                    {duration}d
                  </text>
                  <text
                    x={NW - 10}
                    y={16}
                    fontSize={10}
                    fill={mutedInk}
                    fontFamily="ui-monospace, monospace"
                    textAnchor="end"
                  >
                    {t.ef}
                  </text>
                </>
              )}
              <text
                x={NW / 2}
                y={showForward ? 42 : 34}
                textAnchor="middle"
                fontSize={22}
                fontFamily="Georgia, serif"
                fill={ink}
              >
                {n.id}
              </text>
              {!showForward && (
                <text
                  x={NW / 2}
                  y={56}
                  textAnchor="middle"
                  fontSize={11}
                  fill={mutedInk}
                  fontFamily="system-ui, sans-serif"
                >
                  {duration} days
                </text>
              )}
              {showBackward && (
                <>
                  <text
                    x={10}
                    y={NH - 10}
                    fontSize={10}
                    fill={mutedInk}
                    fontFamily="ui-monospace, monospace"
                  >
                    {t.ls}
                  </text>
                  <text
                    x={NW / 2}
                    y={NH - 10}
                    fontSize={10}
                    fill={mode === "slack" && t.slack > 0 ? "var(--color-warn)" : mutedInk}
                    fontFamily="ui-monospace, monospace"
                    textAnchor="middle"
                  >
                    {t.slack > 0 ? `+${t.slack}` : "0"}
                  </text>
                  <text
                    x={NW - 10}
                    y={NH - 10}
                    fontSize={10}
                    fill={mutedInk}
                    fontFamily="ui-monospace, monospace"
                    textAnchor="end"
                  >
                    {t.lf}
                  </text>
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function NodeLegend({ kind }: { kind: "plain" | "forward" | "full" }) {
  if (kind === "plain") {
    return <p className="mt-1 text-xs text-muted">Each box is a job. The number is how many days it takes.</p>;
  }
  if (kind === "forward") {
    return (
      <p className="mt-1 font-mono text-xs text-muted">
        top-left ES · top-right EF · middle duration
      </p>
    );
  }
  return (
    <p className="mt-1 font-mono text-xs text-muted">
      top: ES · duration · EF &nbsp;·&nbsp; bottom: LS · slack · LF
    </p>
  );
}
