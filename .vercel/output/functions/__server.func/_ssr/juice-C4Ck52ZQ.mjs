import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn, n as Panel, t as KeyLine } from "./site-chrome-D8kb4py8.mjs";
import { n as LessonFrame, r as useStep } from "./use-step-DetrjiDK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/juice-C4Ck52ZQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function sugarUsed(x, y) {
	return 2 * x + 1 * y;
}
function waterUsed(x, y) {
	return 3 * x + 4 * y;
}
function profit(x, y) {
	return 500 * x + 300 * y;
}
function isFeasible(x, y) {
	return x >= 0 && y >= 0 && sugarUsed(x, y) <= 40.000000001 && waterUsed(x, y) <= 60.000000001;
}
var CORNERS = [
	{
		id: "none",
		x: 0,
		y: 0,
		z: 0,
		label: "Make nothing",
		mix: "0 L mango, 0 L orange",
		why: "Uses no resources. Earns nothing. A legal point, but a bad business."
	},
	{
		id: "mango",
		x: 20,
		y: 0,
		z: 1e4,
		label: "All mango",
		mix: "20 L mango, 0 L orange",
		why: "Uses every kilogram of sugar and every litre of water. Highest profit of the three corners."
	},
	{
		id: "orange",
		x: 0,
		y: 15,
		z: 4500,
		label: "All orange",
		mix: "0 L mango, 15 L orange",
		why: "Water runs out first (60 L). Sugar still has 25 kg left unused. Profit is only ₦4,500."
	}
];
CORNERS[1];
function formatNaira(n) {
	return `₦${Math.round(n).toLocaleString("en-NG")}`;
}
var VB_W = 360;
var VB_H = 280;
var PAD_L = 42;
var PAD_T = 18;
var X_MAX = 24;
var Y_MAX = 18;
function xPx(x) {
	return PAD_L + x / X_MAX * 302;
}
function yPx(y) {
	return PAD_T + (1 - y / Y_MAX) * 230;
}
function JuiceGraph({ x, y, highlight, showUser = true }) {
	const sugarLine = (0, import_react.useMemo)(() => {
		return [[11, Y_MAX], [20, 0]];
	}, []);
	const waterLine = [[0, 15], [20, 0]];
	const feasible = [
		[xPx(0), yPx(0)],
		[xPx(20), yPx(0)],
		[xPx(0), yPx(15)]
	].map((p) => p.join(",")).join(" ");
	const feasibleMix = isFeasible(x, y);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${VB_W} ${VB_H}`,
		className: "h-auto w-full",
		role: "img",
		"aria-label": "Graph of mango litres versus orange litres with sugar and water limits",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: feasible,
				fill: "var(--color-primary)",
				fillOpacity: .12
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: xPx(0),
				y1: yPx(0),
				x2: xPx(X_MAX),
				y2: yPx(0),
				stroke: "var(--color-fg)",
				strokeWidth: 1.2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: xPx(0),
				y1: yPx(0),
				x2: xPx(0),
				y2: yPx(Y_MAX),
				stroke: "var(--color-fg)",
				strokeWidth: 1.2
			}),
			Array.from({ length: 5 }, (_, i) => i * 5).map((tick) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: xPx(tick),
				y1: yPx(0),
				x2: xPx(tick),
				y2: yPx(0) + 4,
				stroke: "var(--color-fg)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: xPx(tick),
				y: yPx(0) + 16,
				textAnchor: "middle",
				fontSize: 9,
				fill: "var(--color-muted)",
				fontFamily: "ui-monospace, monospace",
				children: tick
			})] }, `x-${tick}`)),
			[
				0,
				5,
				10,
				15
			].map((tick) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: xPx(0),
				y1: yPx(tick),
				x2: xPx(0) - 4,
				y2: yPx(tick),
				stroke: "var(--color-fg)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: xPx(0) - 8,
				y: yPx(tick) + 3,
				textAnchor: "end",
				fontSize: 9,
				fill: "var(--color-muted)",
				fontFamily: "ui-monospace, monospace",
				children: tick
			})] }, `y-${tick}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: xPx(12),
				y: 278,
				textAnchor: "middle",
				fontSize: 10,
				fill: "var(--color-muted)",
				children: "Mango juice, litres (x)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: 12,
				y: yPx(9),
				textAnchor: "middle",
				fontSize: 10,
				fill: "var(--color-muted)",
				transform: `rotate(-90 12 ${yPx(9)})`,
				children: "Orange juice, litres (y)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: xPx(sugarLine[0][0]),
				y1: yPx(sugarLine[0][1]),
				x2: xPx(sugarLine[1][0]),
				y2: yPx(sugarLine[1][1]),
				stroke: "var(--color-muted)",
				strokeWidth: 1.5,
				strokeDasharray: "5 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: xPx(12.4),
				y: yPx(16) - 6,
				fontSize: 9,
				fill: "var(--color-muted)",
				children: "sugar wall"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: xPx(waterLine[0][0]),
				y1: yPx(waterLine[0][1]),
				x2: xPx(waterLine[1][0]),
				y2: yPx(waterLine[1][1]),
				stroke: "var(--color-primary)",
				strokeWidth: 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: xPx(6),
				y: yPx(11.2),
				fontSize: 9,
				fill: "var(--color-primary)",
				children: "water wall"
			}),
			CORNERS.map((c) => {
				const active = highlight === c.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: xPx(c.x),
					cy: yPx(c.y),
					r: active ? 7 : 5,
					fill: c.id === "mango" ? "var(--color-primary)" : "var(--color-fg)",
					stroke: "var(--color-surface)",
					strokeWidth: 2
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: xPx(c.x) + (c.x === 0 ? 8 : -8),
					y: yPx(c.y) + (c.y === 0 ? -10 : 16),
					textAnchor: c.x === 0 ? "start" : "end",
					fontSize: 9,
					fill: "var(--color-fg)",
					children: [
						"(",
						c.x,
						", ",
						c.y,
						")"
					]
				})] }, c.id);
			}),
			showUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: xPx(x),
				cy: yPx(y),
				r: 6,
				fill: feasibleMix ? "var(--color-fg)" : "var(--color-danger)",
				stroke: "var(--color-surface)",
				strokeWidth: 2
			})
		]
	});
}
function ResourceBar({ label, used, cap }) {
	const ratio = Math.min(1, used / cap);
	const over = used > cap + 1e-6;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1 flex items-baseline justify-between gap-2 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-soft",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("font-mono tabular-nums", over ? "text-danger" : "text-muted"),
			children: [
				used.toFixed(0),
				" / ",
				cap
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-2 overflow-hidden rounded-full bg-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-full transition-[width] duration-(--motion-fast) ease-[var(--ease-out)]", over ? "bg-danger" : "bg-primary"),
			style: { width: `${Math.min(100, ratio * 100)}%` }
		})
	})] });
}
function JuiceMixer({ x, y, onChange }) {
	const s = sugarUsed(x, y);
	const w = waterUsed(x, y);
	const z = profit(x, y);
	const ok = isFeasible(x, y);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-baseline justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mango juice" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono tabular-nums text-muted",
						children: [x, " L"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 0,
					max: 22,
					step: 1,
					value: x,
					onChange: (e) => onChange({
						x: Number(e.target.value),
						y
					}),
					className: "h-11 w-full accent-primary",
					"aria-label": "Litres of mango juice"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-baseline justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Orange juice" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono tabular-nums text-muted",
						children: [y, " L"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 0,
					max: 18,
					step: 1,
					value: y,
					onChange: (e) => onChange({
						x,
						y: Number(e.target.value)
					}),
					className: "h-11 w-full accent-juice",
					"aria-label": "Litres of orange juice"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceBar, {
				label: "Sugar",
				used: s,
				cap: 40
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceBar, {
				label: "Water",
				used: w,
				cap: 60
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-3 border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-muted uppercase",
					children: "Profit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("font-display text-3xl tabular-nums tracking-display", ok ? "text-fg" : "text-danger"),
					children: formatNaira(z)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("text-sm", ok ? "text-ok" : "text-danger"),
					children: ok ? "This mix is allowed." : "Not enough sugar or water."
				})]
			})
		]
	});
}
var TOTAL = 7;
function JuiceLesson() {
	const [step, onStep] = useStep("tlp-juice-step", TOTAL);
	const Step = STEPS[step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonFrame, {
		kicker: "Question 2 · Linear programming",
		title: "The juice kitchen",
		step,
		total: TOTAL,
		onStep,
		nextLabel: step === 0 ? "Write it as maths" : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {})
	});
}
var STEPS = [
	StepStory,
	StepMaths,
	StepMix,
	StepGraph,
	StepCorners,
	StepQuiz,
	StepSheet
];
function StepStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "You run a tiny juice stall"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-soft",
					children: "Two drinks. Mango juice makes ₦500 a litre. Orange juice makes ₦300 a litre. You would make only mango — except you do not have infinite sugar or water."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-xl border border-border bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "border-b border-border text-xs tracking-widest text-muted uppercase",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Per litre"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Mango"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Orange"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "You have"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: "Sugar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono",
									children: "2 kg"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono",
									children: "1 kg"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono",
									children: "40 kg"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: "Water"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono",
								children: "3 L"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono",
								children: "4 L"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono",
								children: "60 L"
							})
						] })] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyLine, { children: "Linear programming here means: write a profit formula, write the walls you cannot cross, then pick the legal mix with the biggest profit." })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-muted uppercase",
				children: "Names we will use"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-3xl tracking-display",
				children: "x"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-soft",
				children: "litres of mango juice"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 font-display text-3xl tracking-display",
				children: "y"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-soft",
				children: "litres of orange juice"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm text-muted",
				children: "x and y cannot be negative. You cannot make minus juice."
			})
		] })]
	});
}
function StepMaths() {
	const [open, setOpen] = (0, import_react.useState)({
		z: false,
		s: false,
		w: false,
		n: false
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Turn the stall into four lines of maths"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-soft",
				children: "Tap each card. The English is already the formula — we just write it with x and y."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen((o) => ({
					...o,
					z: true
				})),
				className: "w-full rounded-xl border border-border bg-surface p-5 text-left pressable",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-muted uppercase",
					children: "What we want"
				}), open.z ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl",
						children: [
							"Maximise Z = ",
							500,
							"x + ",
							300,
							"y"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-soft",
						children: "Each mango litre adds ₦500. Each orange litre adds ₦300. Z is total profit."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-soft",
					children: "Tap to write the objective function."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen((o) => ({
					...o,
					s: true
				})),
				className: "w-full rounded-xl border border-border bg-surface p-5 text-left pressable",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-muted uppercase",
					children: "Sugar wall"
				}), open.s ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl",
						children: ["2x + y ≤ ", 40]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-soft",
						children: "2 kg per mango litre, 1 kg per orange litre, and only 40 kg in the sack."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-soft",
					children: "Tap to write the sugar constraint."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen((o) => ({
					...o,
					w: true
				})),
				className: "w-full rounded-xl border border-border bg-surface p-5 text-left pressable",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-muted uppercase",
					children: "Water wall"
				}), open.w ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl",
						children: ["3x + 4y ≤ ", 60]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-soft",
						children: "3 litres of water per mango litre, 4 per orange litre, tank holds 60."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-soft",
					children: "Tap to write the water constraint."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen((o) => ({
					...o,
					n: true
				})),
				className: "w-full rounded-xl border border-border bg-surface p-5 text-left pressable",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-muted uppercase",
					children: "No negative juice"
				}), open.n ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-2xl",
					children: "x ≥ 0, y ≥ 0"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-soft",
					children: "Tap to write the non-negativity constraints."
				})]
			}),
			open.z && open.s && open.w && open.n && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyLine, { children: "That is the whole model. The next step is not algebra for its own sake — it is finding which legal mix pays the most." })
		]
	});
}
function StepMix() {
	const [mix, setMix] = (0, import_react.useState)({
		x: 8,
		y: 4
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Mix it yourself"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-soft",
				children: "Drag the sliders. Watch sugar and water fill up. If a bar goes red, that mix is illegal — you do not have the ingredients. The black dot on the graph is your stall today."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JuiceMixer, {
					x: mix.x,
					y: mix.y,
					onChange: setMix
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					className: "p-3 sm:p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JuiceGraph, {
						x: mix.x,
						y: mix.y
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyLine, { children: "The shaded triangle is every mix you are allowed to make. Anything outside it needs more sugar or more water than you have." })
		]
	});
}
function StepGraph() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "The two walls, drawn"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-soft",
				children: "Each constraint is a straight line. “Less than or equal” means you must stay on the origin side of the line. The legal kitchen is the overlap of those half-planes — here, a triangle."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				className: "p-3 sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JuiceGraph, {
					x: 0,
					y: 0,
					showUser: false
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: "Sugar · dashed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-xl",
						children: "2x + y = 40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-soft",
						children: "Hits the mango axis at 20 L. Hits the orange axis at 40 L — off the top of this chart. Inside the picture, sugar is almost never the tight wall."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: "Water · solid teal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-xl",
						children: "3x + 4y = 60"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-soft",
						children: "Hits mango at 20 L and orange at 15 L. This is the wall you actually bump into."
					})
				] })]
			})
		]
	});
}
function StepCorners() {
	const [pick, setPick] = (0, import_react.useState)("mango");
	const corner = CORNERS.find((c) => c.id === pick);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "You only need the corners"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-soft",
				children: "For a straight profit line over a straight-edged kitchen, the best mix is always a corner. There are three. Tap each. Compare the naira."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: CORNERS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPick(c.id),
					className: cn("h-11 rounded-md border px-3 text-sm pressable", pick === c.id ? "border-fg bg-fg text-bg" : "border-border bg-surface"),
					children: c.label
				}, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					className: "p-3 sm:p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JuiceGraph, {
						x: corner.x,
						y: corner.y,
						highlight: corner.id
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: corner.mix
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-3xl tabular-nums tracking-display",
						children: formatNaira(corner.z)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-soft",
						children: corner.why
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyLine, { children: "Best mix: 20 litres of mango, 0 litres of orange. Maximum profit ₦10,000. Orange is legal, but every litre of orange you add (along the water wall) replaces mango that would have paid more." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-sm text-muted",
				children: "Along the water wall, swapping toward more mango always raises profit. So you slide all the way to (20, 0). Both ingredients run out exactly there."
			})
		]
	});
}
function StepQuiz() {
	const [obj, setObj] = (0, import_react.useState)(null);
	const [mix, setMix] = (0, import_react.useState)(null);
	const [z, setZ] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Check that it stuck"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "1. What are we maximising?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-2",
					children: [
						{
							id: "wrong1",
							t: "Z = 2x + y"
						},
						{
							id: "ok",
							t: "Z = 500x + 300y"
						},
						{
							id: "wrong2",
							t: "Z = 3x + 4y"
						}
					].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setObj(o.id),
						className: cn("rounded-md border px-3 py-3 text-left font-mono text-sm pressable", obj === o.id ? "border-fg bg-fg/5" : "border-border"),
						children: o.t
					}, o.id))
				}),
				obj && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-3 text-sm", obj === "ok" ? "text-ok" : "text-danger"),
					children: obj === "ok" ? "Yes. Profit uses the ₦500 and ₦300. The 2, 1, 3, 4 belong in the constraints." : "That is a resource formula, not profit. Profit is 500x + 300y."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "2. What is the best mix?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-2",
					children: [
						{
							id: "none",
							t: "0 L mango, 0 L orange"
						},
						{
							id: "orange",
							t: "0 L mango, 15 L orange"
						},
						{
							id: "mango",
							t: "20 L mango, 0 L orange"
						},
						{
							id: "half",
							t: "10 L mango, 10 L orange"
						}
					].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMix(o.id),
						className: cn("rounded-md border px-3 py-3 text-left text-sm pressable", mix === o.id ? "border-fg bg-fg/5" : "border-border"),
						children: o.t
					}, o.id))
				}),
				mix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-3 text-sm", mix === "mango" ? "text-ok" : "text-danger"),
					children: mix === "mango" ? "Yes. That corner scores ₦10,000. 10 and 10 is not even legal — water would be 70 L." : mix === "half" ? "10 and 10 needs 70 L of water. Illegal. The winner is 20 mango, 0 orange." : "Legal, but not the richest corner. All mango pays more."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "3. Maximum profit?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						4500,
						8e3,
						1e4,
						15e3
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setZ(n),
						className: cn("h-11 rounded-md border px-4 font-mono pressable", z === n ? "border-fg bg-fg text-bg" : "border-border bg-surface"),
						children: formatNaira(n)
					}, n))
				}),
				z != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-3 text-sm", z === 1e4 ? "text-ok" : "text-danger"),
					children: z === 1e4 ? "500 × 20 + 300 × 0 = 10,000." : "Compute 500 times 20. Orange is zero at the optimum."
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-muted uppercase",
				children: "a. Model"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-1 font-display text-xl leading-snug",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Maximise Z = 500x + 300y" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "2x + y ≤ 40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "3x + 4y ≤ 60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "x ≥ 0, y ≥ 0" })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-muted uppercase",
					children: "b. Optimum"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl",
					children: "x = 20, y = 0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-soft",
					children: "20 litres mango juice, 0 litres orange juice."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-display text-3xl tracking-display",
					children: ["Maximum profit ", formatNaira(1e4)]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Revisit",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/network",
						className: "text-primary underline-offset-2 hover:underline",
						children: "the project network"
					}),
					" ",
					"any time. Both lessons remember the step you left on."
				]
			})
		]
	});
}
//#endregion
export { JuiceLesson as component };
