import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as cn, r as SiteChrome } from "./site-chrome-D8kb4py8.mjs";
import { a as ArrowRight, i as ChevronLeft, o as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-step-DetrjiDK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[scale,background-color,color,border-color,opacity] duration-(--motion-quick) ease-[var(--ease-out)] disabled:pointer-events-none disabled:opacity-40 pressable [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg hover:bg-primary/90",
			outline: "border border-border bg-surface text-fg hover:border-fg/30",
			ghost: "text-fg hover:bg-fg/5",
			inverse: "bg-fg text-bg hover:bg-fg/90"
		},
		size: {
			md: "h-11 rounded-md px-4 text-sm",
			lg: "h-12 rounded-md px-5 text-base",
			xl: "h-14 rounded-lg px-6 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function LessonFrame({ kicker, title, step, total, onStep, children, nextLabel, hideNext }) {
	const atStart = step <= 0;
	const atEnd = step >= total - 1;
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
			if (e.key === "ArrowRight" && !atEnd && !hideNext) onStep(step + 1);
			if (e.key === "ArrowLeft" && !atStart) onStep(step - 1);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		atEnd,
		atStart,
		hideNext,
		onStep,
		step
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteChrome, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-5xl flex-col px-4 pb-28 pt-5 sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "mb-5 inline-flex w-fit items-center gap-1.5 text-sm text-muted hover:text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "All lessons"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-muted uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-xl text-3xl sm:text-4xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-sm text-muted tabular-nums",
					children: [
						String(step + 1).padStart(2, "0"),
						" / ",
						String(total).padStart(2, "0")
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 flex gap-1.5",
				"aria-hidden": true,
				children: Array.from({ length: total }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onStep(i),
						className: cn("h-1.5 w-full rounded-full transition-colors duration-(--motion-fast)", i <= step ? "bg-primary" : "bg-border"),
						"aria-label": `Go to step ${i + 1}`
					})
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex-1",
				children
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg/95 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: () => onStep(step - 1),
				disabled: atStart,
				"aria-label": "Previous step",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), "Back"]
			}), !hideNext && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => onStep(Math.min(total - 1, step + 1)),
				disabled: atEnd,
				children: [atEnd ? "Done" : nextLabel ?? "Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
			})]
		})
	})] });
}
function useStep(key, total) {
	const [step, setStep] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(key);
			if (raw == null) return;
			const n = Number(raw);
			if (Number.isFinite(n)) setStep(Math.min(total - 1, Math.max(0, n)));
		} catch {}
	}, [key, total]);
	return [step, (0, import_react.useCallback)((next) => {
		const clamped = Math.min(total - 1, Math.max(0, next));
		setStep(clamped);
		try {
			localStorage.setItem(key, String(clamped));
		} catch {}
	}, [key, total])];
}
//#endregion
export { LessonFrame as n, useStep as r, Button as t };
