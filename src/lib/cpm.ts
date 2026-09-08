export type ActivityId = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";

export type Activity = {
  id: ActivityId;
  duration: number;
  predecessors: ActivityId[];
  waitFor: string;
};

export const ACTIVITIES: Activity[] = [
  { id: "A", duration: 3, predecessors: [], waitFor: "Nothing. A is the first job." },
  { id: "B", duration: 4, predecessors: ["A"], waitFor: "A must finish first." },
  { id: "C", duration: 2, predecessors: ["A"], waitFor: "A must finish first." },
  { id: "D", duration: 5, predecessors: ["B"], waitFor: "B must finish first." },
  { id: "E", duration: 1, predecessors: ["C"], waitFor: "C must finish first." },
  { id: "F", duration: 2, predecessors: ["C"], waitFor: "C must finish first." },
  { id: "G", duration: 4, predecessors: ["D", "E"], waitFor: "Both D and E must finish. G waits for the slower of the two." },
  { id: "H", duration: 4, predecessors: ["F", "G"], waitFor: "Both F and G must finish. H waits for the slower of the two." },
];

export const ORDER: ActivityId[] = ["A", "B", "C", "D", "E", "F", "G", "H"];

export type Times = {
  es: number;
  ef: number;
  ls: number;
  lf: number;
  slack: number;
};

export const TIMES: Record<ActivityId, Times> = {
  A: { es: 0, ef: 3, ls: 0, lf: 3, slack: 0 },
  B: { es: 3, ef: 7, ls: 3, lf: 7, slack: 0 },
  C: { es: 3, ef: 5, ls: 9, lf: 11, slack: 6 },
  D: { es: 7, ef: 12, ls: 7, lf: 12, slack: 0 },
  E: { es: 5, ef: 6, ls: 11, lf: 12, slack: 6 },
  F: { es: 5, ef: 7, ls: 14, lf: 16, slack: 9 },
  G: { es: 12, ef: 16, ls: 12, lf: 16, slack: 0 },
  H: { es: 16, ef: 20, ls: 16, lf: 20, slack: 0 },
};

export const PROJECT_DURATION = 20;

export const CRITICAL: ActivityId[] = ["A", "B", "D", "G", "H"];

export const SLACK_ACTIVITIES: ActivityId[] = ["C", "E", "F"];

export type PathId = "p1" | "p2" | "p3";

export type ProjectPath = {
  id: PathId;
  nodes: ActivityId[];
  days: number;
  label: string;
  note: string;
};

export const PATHS: ProjectPath[] = [
  {
    id: "p1",
    nodes: ["A", "B", "D", "G", "H"],
    days: 20,
    label: "A → B → D → G → H",
    note: "The long way. 3+4+5+4+4 = 20 days.",
  },
  {
    id: "p2",
    nodes: ["A", "C", "E", "G", "H"],
    days: 14,
    label: "A → C → E → G → H",
    note: "A shorter side road. 3+2+1+4+4 = 14 days.",
  },
  {
    id: "p3",
    nodes: ["A", "C", "F", "H"],
    days: 11,
    label: "A → C → F → H",
    note: "The shortest road. 3+2+2+4 = 11 days.",
  },
];

export const FORWARD_BEATS: Record<
  ActivityId,
  { title: string; body: string }
> = {
  A: {
    title: "A has no one in front of it",
    body: "We start the clock at day 0. A takes 3 days, so it finishes on day 3. Write ES = 0, EF = 3.",
  },
  B: {
    title: "B waits for A",
    body: "A finishes on day 3, so the earliest B can start is day 3. B takes 4 days. ES = 3, EF = 7.",
  },
  C: {
    title: "C also waits for A",
    body: "Same start as B: day 3. C is shorter — only 2 days — so it finishes on day 5. ES = 3, EF = 5.",
  },
  D: {
    title: "D waits for B",
    body: "B finishes on day 7, so D starts then. D is a long job: 5 days. ES = 7, EF = 12.",
  },
  E: {
    title: "E waits for C",
    body: "C finishes on day 5. E only takes 1 day. ES = 5, EF = 6. Fast, but not on the long road.",
  },
  F: {
    title: "F waits for C",
    body: "Also after C, so it starts on day 5 and takes 2 days. ES = 5, EF = 7.",
  },
  G: {
    title: "G waits for both D and E — take the slower one",
    body: "D finishes on day 12. E finishes on day 6. G cannot start until BOTH are done, so it waits until day 12. Then 4 days of work. ES = 12, EF = 16. This is the key rule: when two arrows come in, use the later finish.",
  },
  H: {
    title: "H waits for both F and G",
    body: "F is done on day 7. G is done on day 16. H waits for the later one: day 16. Then 4 days. ES = 16, EF = 20. The project cannot finish before H does, so the whole project is 20 days.",
  },
};

export const BACKWARD_BEATS: Record<
  ActivityId,
  { title: string; body: string }
> = {
  H: {
    title: "Start from the end",
    body: "The project ends on day 20. H takes 4 days, so the latest it can start is day 16. LS = 16, LF = 20. Same as its earliest times — H has no spare time.",
  },
  G: {
    title: "G has to be done before H starts",
    body: "H must start by day 16, so G must finish by day 16. G takes 4 days, so it must start by day 12. LS = 12, LF = 16.",
  },
  F: {
    title: "F also feeds H — but it has room",
    body: "H must start by 16, so F must finish by 16. F only takes 2 days, so it could start as late as day 14. LS = 14, LF = 16. Compare that with its earliest start of 5: lots of spare time.",
  },
  D: {
    title: "D has to feed G on time",
    body: "G must start by 12, so D must finish by 12. D takes 5 days → LS = 7, LF = 12. Same as earliest. No spare time.",
  },
  E: {
    title: "E also feeds G — with spare time",
    body: "G must start by 12, so E must finish by 12. E only takes 1 day, so it could start as late as day 11. LS = 11, LF = 12. It was ready on day 5, so it can wait.",
  },
  B: {
    title: "B has to feed D on time",
    body: "D must start by 7, so B must finish by 7. B takes 4 days → LS = 3, LF = 7. Tight. No spare time.",
  },
  C: {
    title: "C feeds two jobs — use the tighter deadline",
    body: "E must start by 11, F must start by 14. C has to satisfy the earlier one: finish by day 11. C takes 2 days → LS = 9, LF = 11. It could have started on day 3, so it has 6 days of slack.",
  },
  A: {
    title: "A feeds B and C — use the tighter one",
    body: "B must start by day 3, C by day 9. The tighter one is B. So A must finish by day 3. A takes 3 days → LS = 0, LF = 3. The first job is already on the clock.",
  },
};

export const BACKWARD_ORDER: ActivityId[] = [
  "H",
  "G",
  "F",
  "D",
  "E",
  "B",
  "C",
  "A",
];

export function byId(id: ActivityId): Activity {
  const found = ACTIVITIES.find((a) => a.id === id);
  if (!found) throw new Error(`Unknown activity ${id}`);
  return found;
}

export function isCritical(id: ActivityId): boolean {
  return TIMES[id].slack === 0;
}
