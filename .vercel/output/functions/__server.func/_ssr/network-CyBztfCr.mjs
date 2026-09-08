import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn, n as Panel, t as KeyLine } from "./site-chrome-D8kb4py8.mjs";
import { n as LessonFrame, r as useStep, t as Button } from "./use-step-DetrjiDK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/network-CyBztfCr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ACTIVITIES = [
	{
		id: "A",
		duration: 3,
		predecessors: [],
		waitFor: "Nothing. A is the first job."
	},
	{
		id: "B",
		duration: 4,
		predecessors: ["A"],
		waitFor: "A must finish first."
	},
	{
		id: "C",
		duration: 2,
		predecessors: ["A"],
		waitFor: "A must finish first."
	},
	{
		id: "D",
		duration: 5,
		predecessors: ["B"],
		waitFor: "B must finish first."
	},
	{
		id: "E",
		duration: 1,
		predecessors: ["C"],
		waitFor: "C must finish first."
	},
	{
		id: "F",
		duration: 2,
		predecessors: ["C"],
		waitFor: "C must finish first."
	},
	{
		id: "G",
		duration: 4,
		predecessors: ["D", "E"],
		waitFor: "Both D and E must finish. G waits for the slower of the two."
	},
	{
		id: "H",
		duration: 4,
		predecessors: ["F", "G"],
		waitFor: "Both F and G must finish. H waits for the slower of the two."
	}
];
var ORDER = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H"
];
var TIMES = {
	A: {
		es: 0,
		ef: 3,
		ls: 0,
		lf: 3,
		slack: 0
	},
	B: {
		es: 3,
		ef: 7,
		ls: 3,
		lf: 7,
		slack: 0
	},
	C: {
		es: 3,
		ef: 5,
		ls: 9,
		lf: 11,
		slack: 6
	},
	D: {
		es: 7,
		ef: 12,
		ls: 7,
		lf: 12,
		slack: 0
	},
	E: {
		es: 5,
		ef: 6,
		ls: 11,
		lf: 12,
		slack: 6
	},
	F: {
		es: 5,
		ef: 7,
		ls: 14,
		lf: 16,
		slack: 9
	},
	G: {
		es: 12,
		ef: 16,
		ls: 12,
		lf: 16,
		slack: 0
	},
	H: {
		es: 16,
		ef: 20,
		ls: 16,
		lf: 20,
		slack: 0
	}
};
var CRITICAL = [
	"A",
	"B",
	"D",
	"G",
	"H"
];
var SLACK_ACTIVITIES = [
	"C",
	"E",
	"F"
];
var PATHS = [
	{
		id: "p1",
		nodes: [
			"A",
			"B",
			"D",
			"G",
			"H"
		],
		days: 20,
		label: "A → B → D → G → H",
		note: "The long way. 3+4+5+4+4 = 20 days."
	},
	{
		id: "p2",
		nodes: [
			"A",
			"C",
			"E",
			"G",
			"H"
		],
		days: 14,
		label: "A → C → E → G → H",
		note: "A shorter side road. 3+2+1+4+4 = 14 days."
	},
	{
		id: "p3",
		nodes: [
			"A",
			"C",
			"F",
			"H"
		],
		days: 11,
		label: "A → C → F → H",
		note: "The shortest road. 3+2+2+4 = 11 days."
	}
];
var FORWARD_BEATS = {
	A: {
		title: "A has no one in front of it",
		body: "We start the clock at day 0. A takes 3 days, so it finishes on day 3. Write ES = 0, EF = 3."
	},
	B: {
		title: "B waits for A",
		body: "A finishes on day 3, so the earliest B can start is day 3. B takes 4 days. ES = 3, EF = 7."
	},
	C: {
		title: "C also waits for A",
		body: "Same start as B: day 3. C is shorter — only 2 days — so it finishes on day 5. ES = 3, EF = 5."
	},
	D: {
		title: "D waits for B",
		body: "B finishes on day 7, so D starts then. D is a long job: 5 days. ES = 7, EF = 12."
	},
	E: {
		title: "E waits for C",
		body: "C finishes on day 5. E only takes 1 day. ES = 5, EF = 6. Fast, but not on the long road."
	},
	F: {
		title: "F waits for C",
		body: "Also after C, so it starts on day 5 and takes 2 days. ES = 5, EF = 7."
	},
	G: {
		title: "G waits for both D and E — take the slower one",
		body: "D finishes on day 12. E finishes on day 6. G cannot start until BOTH are done, so it waits until day 12. Then 4 days of work. ES = 12, EF = 16. This is the key rule: when two arrows come in, use the later finish."
	},
	H: {
		title: "H waits for both F and G",
		body: "F is done on day 7. G is done on day 16. H waits for the later one: day 16. Then 4 days. ES = 16, EF = 20. The project cannot finish before H does, so the whole project is 20 days."
	}
};
var BACKWARD_BEATS = {
	H: {
		title: "Start from the end",
		body: "The project ends on day 20. H takes 4 days, so the latest it can start is day 16. LS = 16, LF = 20. Same as its earliest times — H has no spare time."
	},
	G: {
		title: "G has to be done before H starts",
		body: "H must start by day 16, so G must finish by day 16. G takes 4 days, so it must start by day 12. LS = 12, LF = 16."
	},
	F: {
		title: "F also feeds H — but it has room",
		body: "H must start by 16, so F must finish by 16. F only takes 2 days, so it could start as late as day 14. LS = 14, LF = 16. Compare that with its earliest start of 5: lots of spare time."
	},
	D: {
		title: "D has to feed G on time",
		body: "G must start by 12, so D must finish by 12. D takes 5 days → LS = 7, LF = 12. Same as earliest. No spare time."
	},
	E: {
		title: "E also feeds G — with spare time",
		body: "G must start by 12, so E must finish by 12. E only takes 1 day, so it could start as late as day 11. LS = 11, LF = 12. It was ready on day 5, so it can wait."
	},
	B: {
		title: "B has to feed D on time",
		body: "D must start by 7, so B must finish by 7. B takes 4 days → LS = 3, LF = 7. Tight. No spare time."
	},
	C: {
		title: "C feeds two jobs — use the tighter deadline",
		body: "E must start by 11, F must start by 14. C has to satisfy the earlier one: finish by day 11. C takes 2 days → LS = 9, LF = 11. It could have started on day 3, so it has 6 days of slack."
	},
	A: {
		title: "A feeds B and C — use the tighter one",
		body: "B must start by day 3, C by day 9. The tighter one is B. So A must finish by day 3. A takes 3 days → LS = 0, LF = 3. The first job is already on the clock."
	}
};
var BACKWARD_ORDER = [
	"H",
	"G",
	"F",
	"D",
	"E",
	"B",
	"C",
	"A"
];
var NW = 104;
var NH = 74;
var NODES = [
	{
		id: "A",
		x: 16,
		y: 118
	},
	{
		id: "B",
		x: 188,
		y: 10
	},
	{
		id: "C",
		x: 188,
		y: 186
	},
	{
		id: "D",
		x: 360,
		y: 10
	},
	{
		id: "E",
		x: 360,
		y: 156
	},
	{
		id: "F",
		x: 360,
		y: 248
	},
	{
		id: "G",
		x: 540,
		y: 92
	},
	{
		id: "H",
		x: 712,
		y: 92
	}
];
var EDGES = [
	{
		from: "A",
		to: "B"
	},
	{
		from: "A",
		to: "C"
	},
	{
		from: "B",
		to: "D"
	},
	{
		from: "C",
		to: "E"
	},
	{
		from: "C",
		to: "F"
	},
	{
		from: "D",
		to: "G"
	},
	{
		from: "E",
		to: "G"
	},
	{
		from: "F",
		to: "H"
	},
	{
		from: "G",
		to: "H"
	}
];
function pos(id) {
	return NODES.find((n) => n.id === id);
}
function edgePath(from, to) {
	const a = pos(from);
	const b = pos(to);
	const x1 = a.x + NW;
	const y1 = a.y + NH / 2;
	const x2 = b.x;
	const y2 = b.y + NH / 2;
	const midX = (x1 + x2) / 2;
	return `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
}
function NetworkDiagram({ visible, showEdges = true, mode = "plain", revealed, path, selected, onSelect }) {
	const shown = visible ?? /* @__PURE__ */ new Set([
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H"
	]);
	const highlight = path ? new Set(path) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-xs text-muted sm:hidden",
			children: "Swipe sideways to see the whole picture."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 840 340",
			width: 840,
			height: 340,
			className: "max-w-none",
			role: "img",
			"aria-label": "Project network of activities A through H",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
					id: "arrow",
					viewBox: "0 0 10 10",
					refX: "9",
					refY: "5",
					markerWidth: "8",
					markerHeight: "8",
					orient: "auto-start-reverse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 0 0 L 10 5 L 0 10 z",
						fill: "currentColor"
					})
				}) }),
				showEdges && EDGES.map((e) => {
					if (!shown.has(e.from) || !shown.has(e.to)) return null;
					const onPath = highlight ? highlight.has(e.from) && highlight.has(e.to) : mode === "critical" ? TIMES[e.from].slack === 0 && TIMES[e.to].slack === 0 : true;
					const dim = highlight ? !onPath : mode === "critical" ? !onPath : false;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: edgePath(e.from, e.to),
						fill: "none",
						className: cn(dim ? "text-path-dim" : "text-fg", onPath && (mode === "critical" || Boolean(highlight)) && "text-primary"),
						stroke: "currentColor",
						strokeWidth: onPath && (mode === "critical" || Boolean(highlight)) ? 2.6 : 1.6,
						markerEnd: "url(#arrow)"
					}, `${e.from}-${e.to}`);
				}),
				NODES.map((n) => {
					if (!shown.has(n.id)) return null;
					const t = TIMES[n.id];
					const duration = t.ef - t.es;
					const isSel = selected === n.id;
					const onPath = highlight ? highlight.has(n.id) : true;
					const critical = t.slack === 0;
					const known = !revealed || revealed.has(n.id);
					const showForward = (mode === "forward" || mode === "backward" || mode === "slack" || mode === "critical") && known;
					const showBackward = (mode === "backward" || mode === "slack" || mode === "critical") && known;
					const filled = mode === "critical" && critical || isSel;
					const dimmed = Boolean(highlight && !onPath);
					const fill = filled ? "var(--color-fg)" : "var(--color-surface)";
					const stroke = filled ? "var(--color-fg)" : mode === "critical" && critical ? "var(--color-primary)" : dimmed ? "var(--color-path-dim)" : "var(--color-fg)";
					const ink = filled ? "var(--color-bg)" : dimmed ? "var(--color-muted)" : "var(--color-fg)";
					const mutedInk = filled ? "color-mix(in oklab, var(--color-bg) 72%, transparent)" : "var(--color-muted)";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						transform: `translate(${n.x} ${n.y})`,
						className: onSelect ? "cursor-pointer" : void 0,
						onClick: () => onSelect?.(n.id),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								width: NW,
								height: NH,
								rx: 10,
								fill,
								stroke,
								strokeWidth: isSel || mode === "critical" && critical ? 2.2 : 1.5
							}),
							showForward && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: 10,
									y: 16,
									fontSize: 10,
									fill: mutedInk,
									fontFamily: "ui-monospace, monospace",
									children: t.es
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
									x: NW / 2,
									y: 16,
									fontSize: 10,
									fill: mutedInk,
									fontFamily: "ui-monospace, monospace",
									textAnchor: "middle",
									children: [duration, "d"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: 94,
									y: 16,
									fontSize: 10,
									fill: mutedInk,
									fontFamily: "ui-monospace, monospace",
									textAnchor: "end",
									children: t.ef
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: NW / 2,
								y: showForward ? 42 : 34,
								textAnchor: "middle",
								fontSize: 22,
								fontFamily: "Georgia, serif",
								fill: ink,
								children: n.id
							}),
							!showForward && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
								x: NW / 2,
								y: 56,
								textAnchor: "middle",
								fontSize: 11,
								fill: mutedInk,
								fontFamily: "system-ui, sans-serif",
								children: [duration, " days"]
							}),
							showBackward && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: 10,
									y: 64,
									fontSize: 10,
									fill: mutedInk,
									fontFamily: "ui-monospace, monospace",
									children: t.ls
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: NW / 2,
									y: 64,
									fontSize: 10,
									fill: mode === "slack" && t.slack > 0 ? "var(--color-warn)" : mutedInk,
									fontFamily: "ui-monospace, monospace",
									textAnchor: "middle",
									children: t.slack > 0 ? `+${t.slack}` : "0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: 94,
									y: 64,
									fontSize: 10,
									fill: mutedInk,
									fontFamily: "ui-monospace, monospace",
									textAnchor: "end",
									children: t.lf
								})
							] })
						]
					}, n.id);
				})
			]
		})]
	});
}
function NodeLegend({ kind }) {
	if (kind === "plain") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-xs text-muted",
		children: "Each box is a job. The number is how many days it takes."
	});
	if (kind === "forward") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 font-mono text-xs text-muted",
		children: "top-left ES · top-right EF · middle duration"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 font-mono text-xs text-muted",
		children: "top: ES · duration · EF \xA0·\xA0 bottom: LS · slack · LF"
	});
}
function Badge({ className, tone = "muted", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium tracking-wide", tone === "muted" && "bg-fg/8 text-muted", tone === "primary" && "bg-primary text-primary-fg", tone === "ok" && "bg-ok/12 text-ok", tone === "danger" && "bg-danger/12 text-danger", className),
		children
	});
}
var TOTAL = 9;
function NetworkLesson() {
	const [step, onStep] = useStep("tlp-network-step", TOTAL);
	const Step = STEPS[step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonFrame, {
		kicker: "Question 1 · Project network",
		title: "The 20-day project",
		step,
		total: TOTAL,
		onStep,
		nextLabel: step === 0 ? "Show me the jobs" : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {})
	});
}
var STEPS = [
	StepIdea,
	StepJobs,
	StepPicture,
	StepRoads,
	StepForward,
	StepBackward,
	StepSlack,
	StepQuiz,
	StepSheet
];
function StepIdea() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "What is this question even asking?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-soft",
					children: "You have eight jobs, labelled A to H. Some jobs cannot start until other jobs finish. The examiner wants four things:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal space-y-2 pl-5 text-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A picture of who waits for whom." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The earliest and latest each job can start and finish." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The chain of jobs that decides the finish date." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Which jobs have spare time, and how much." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyLine, { children: "The whole project takes as long as the longest chain of jobs that must happen one after another. That chain is called the critical path." })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-muted uppercase",
				children: "A picture to hold onto"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-soft",
				children: "Three friends walk to the same party down three different streets. The party cannot start until the last friend arrives. The longest walk is the one that matters. The short walks have spare time — they could have dawdled and still made it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "Jobs are the friends. Arrows are the streets. Slack is dawdling time."
			})
		] })]
	});
}
function StepJobs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Meet the eight jobs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-soft",
				children: "Read the middle column as English, not as a code. “Predecessor” just means “must finish first.”"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl border border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-xl text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "border-b border-border text-xs tracking-widest text-muted uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Job"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Days"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Must wait for"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: ACTIVITIES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border/70 last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-display text-lg",
								children: a.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono tabular-nums",
								children: a.duration
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-soft",
								children: a.waitFor
							})
						]
					}, a.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyLine, { children: "Two jobs can run at the same time if they do not wait on each other. B and C both wait only on A, so after A they can overlap." })
		]
	});
}
function StepPicture() {
	const [selected, setSelected] = (0, import_react.useState)("A");
	const a = ACTIVITIES.find((x) => x.id === selected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Draw who waits for whom"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-soft",
				children: "Each box is a job. Each arrow means “this one must finish before that one starts.” Tap a box."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.85fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-3 sm:p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkDiagram, {
						selected,
						onSelect: setSelected
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeLegend, { kind: "plain" })]
				}), a && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: a.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [a.duration, " days"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-soft",
						children: a.waitFor
					})
				] })]
			})
		]
	});
}
function StepRoads() {
	const [pathId, setPathId] = (0, import_react.useState)("p1");
	const path = PATHS.find((p) => p.id === pathId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "There are three roads to the end"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-soft",
				children: "Add the days along a road. The project cannot finish faster than the slowest road, because that road still has to be walked."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: PATHS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setPathId(p.id),
					className: cn("h-11 rounded-md border px-3 text-sm pressable", pathId === p.id ? "border-fg bg-fg text-bg" : "border-border bg-surface text-fg"),
					children: [p.days, " days"]
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				className: "p-3 sm:p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkDiagram, { path: path.nodes })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-sm text-muted",
				children: path.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-soft",
				children: path.note
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyLine, { children: "20, 14, and 11. The longest is 20. That is already the project duration — we will prove it properly with the forward pass next." })
		]
	});
}
function StepForward() {
	const [i, setI] = (0, import_react.useState)(0);
	const current = ORDER[i];
	const revealed = (0, import_react.useMemo)(() => new Set(ORDER.slice(0, i + 1)), [i]);
	const beat = FORWARD_BEATS[current];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Forward pass — how early can each job start?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-soft",
				children: "Walk left to right. A job’s earliest start is the latest finish of the jobs it waits on. Earliest finish is start plus duration."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "p-3 sm:p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkDiagram, {
					mode: "forward",
					revealed,
					selected: current
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeLegend, { kind: "forward" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium tracking-widest text-muted uppercase",
					children: ["Job ", current]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-xl",
					children: beat.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-soft",
					children: beat.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setI((n) => Math.max(0, n - 1)),
						disabled: i === 0,
						children: "Previous job"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => setI((n) => Math.min(ORDER.length - 1, n + 1)),
						disabled: i === ORDER.length - 1,
						children: "Next job"
					})]
				})
			] }),
			i === ORDER.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyLine, { children: "H finishes on day 20. That is the earliest the whole project can finish. Write “project duration = 20 days.”" })
		]
	});
}
function StepBackward() {
	const [i, setI] = (0, import_react.useState)(0);
	const current = BACKWARD_ORDER[i];
	const revealed = (0, import_react.useMemo)(() => new Set(BACKWARD_ORDER.slice(0, i + 1)), [i]);
	const beat = BACKWARD_BEATS[current];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Backward pass — how late can a job start?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-soft",
				children: "Now walk right to left, from the finish date of 20. A job’s latest finish is the earliest “must start” of the jobs that wait on it. If two jobs wait on it, use the tighter deadline."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "p-3 sm:p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkDiagram, {
					mode: "backward",
					revealed,
					selected: current
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeLegend, { kind: "full" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium tracking-widest text-muted uppercase",
					children: ["Job ", current]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-xl",
					children: beat.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-soft",
					children: beat.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setI((n) => Math.max(0, n - 1)),
						disabled: i === 0,
						children: "Previous job"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => setI((n) => Math.min(BACKWARD_ORDER.length - 1, n + 1)),
						disabled: i === BACKWARD_ORDER.length - 1,
						children: "Next job"
					})]
				})
			] })
		]
	});
}
function StepSlack() {
	const [focus, setFocus] = (0, import_react.useState)("critical");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Slack is spare time. Zero slack is the critical path."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-soft",
				children: "Slack = latest start − earliest start. Same number as latest finish − earliest finish. If it is zero, that job cannot slip by a single day without pushing the whole project."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFocus("critical"),
					className: cn("h-11 rounded-md border px-3 text-sm pressable", focus === "critical" ? "border-fg bg-fg text-bg" : "border-border bg-surface"),
					children: "Show the tight jobs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFocus("slack"),
					className: cn("h-11 rounded-md border px-3 text-sm pressable", focus === "slack" ? "border-fg bg-fg text-bg" : "border-border bg-surface"),
					children: "Show spare time"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "p-3 sm:p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkDiagram, {
					mode: focus === "critical" ? "critical" : "slack",
					path: focus === "critical" ? CRITICAL : void 0
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeLegend, { kind: "full" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: "Critical path"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl",
						children: "A → B → D → G → H"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-soft",
						children: [
							"3 + 4 + 5 + 4 + 4 = ",
							20,
							" days. Delay any of these and dinner is late."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-muted uppercase",
					children: "Jobs with slack"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-soft",
					children: SLACK_ACTIVITIES.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Job ", id] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono tabular-nums",
							children: [TIMES[id].slack, " days"]
						})]
					}, id))
				})] })]
			})
		]
	});
}
function StepQuiz() {
	const [picked, setPicked] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [duration, setDuration] = (0, import_react.useState)(null);
	const [path, setPath] = (0, import_react.useState)(null);
	const slackOk = SLACK_ACTIVITIES.every((id) => picked.has(id)) && [...picked].every((id) => SLACK_ACTIVITIES.includes(id));
	function toggle(id) {
		setPicked((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Check that it stuck"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-soft",
				children: "No marks. Tap until it feels obvious."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "1. Which path is critical?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-2",
					children: PATHS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPath(p.id),
						className: cn("rounded-md border px-3 py-3 text-left text-sm pressable", path === p.id ? "border-fg bg-fg/5" : "border-border bg-surface"),
						children: [p.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-2 text-muted",
							children: [
								"(",
								p.days,
								"d)"
							]
						})]
					}, p.id))
				}),
				path && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-3 text-sm", path === "p1" ? "text-ok" : "text-danger"),
					children: path === "p1" ? "Yes. The longest chain is the critical path." : "That road is shorter, so it has spare time. The critical path is the long one."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "2. How many days is the whole project?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						14,
						16,
						20,
						24
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setDuration(n),
						className: cn("h-11 min-w-16 rounded-md border px-4 font-mono pressable", duration === n ? "border-fg bg-fg text-bg" : "border-border bg-surface"),
						children: n
					}, n))
				}),
				duration != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-3 text-sm", duration === 20 ? "text-ok" : "text-danger"),
					children: duration === 20 ? "Yes. H’s earliest finish is 20, and the long road adds to 20." : "Add A+B+D+G+H: 3+4+5+4+4. That is 20."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "3. Tap every job that has slack. Leave the tight ones alone."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: ORDER.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => toggle(id),
						className: cn("size-11 rounded-md border font-display text-lg pressable", picked.has(id) ? "border-fg bg-fg text-bg" : "border-border bg-surface"),
						children: id
					}, id))
				}),
				picked.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-3 text-sm", slackOk ? "text-ok" : "text-danger"),
					children: slackOk ? "C has 6 days, E has 6, F has 9. The rest have zero." : "Slack jobs are the ones not on A–B–D–G–H."
				})
			] })
		]
	});
}
function StepSheet() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "The answers, in one place"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-soft",
				children: "If you can say these four sentences out loud, you can write the assignment."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: "a. Network"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-soft",
						children: "A splits into B and C. B goes to D. C splits into E and F. D and E meet at G. F and G meet at H."
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: "b. Times"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-lg text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "text-xs tracking-widest text-muted uppercase",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
									"Job",
									"ES",
									"EF",
									"LS",
									"LF",
									"Slack"
								].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-4 font-medium",
									children: h
								}, h)) })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: ORDER.map((id) => {
								const t = TIMES[id];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-border/70",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4 font-display",
											children: id
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4 font-mono tabular-nums",
											children: t.es
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4 font-mono tabular-nums",
											children: t.ef
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4 font-mono tabular-nums",
											children: t.ls
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4 font-mono tabular-nums",
											children: t.lf
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-2 pr-4 font-mono tabular-nums",
											children: [t.slack, t.slack === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												tone: "primary",
												className: "ml-2",
												children: "critical"
											})]
										})
									]
								}, id);
							}) })]
						})
					})] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-widest text-muted uppercase",
							children: "c. Critical path"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-2xl",
							children: "A → B → D → G → H"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-soft",
							children: "Total project duration: 20 days."
						})
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: "d. Slack"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-soft",
						children: "C = 6 days. E = 6 days. F = 9 days. All other jobs have 0."
					})] }) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Next:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/juice",
						className: "text-primary underline-offset-2 hover:underline",
						children: "the juice kitchen"
					}),
					"."
				]
			})
		]
	});
}
//#endregion
export { NetworkLesson as component };
