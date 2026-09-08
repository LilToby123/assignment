import { b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-chrome-D8kb4py8.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var LINKS = [
	{
		to: "/",
		label: "Home",
		exact: true
	},
	{
		to: "/network",
		label: "The project"
	},
	{
		to: "/juice",
		label: "The juices"
	}
];
function SiteChrome({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-30 border-b border-border/80 bg-bg/90 backdrop-blur-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-lg tracking-display text-fg sm:text-xl",
					children: "The Longest Path"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex items-center gap-1 text-sm",
					children: LINKS.map((link) => {
						const active = pathname === link.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: cn("rounded-md px-2.5 py-2 transition-colors duration-(--motion-quick) sm:px-3", active ? "bg-fg text-bg" : "text-muted hover:bg-fg/5 hover:text-fg"),
							children: link.label
						}, link.to);
					})
				})]
			})
		}), children]
	});
}
function KeyLine({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "border-l-2 border-primary pl-4 font-medium leading-snug text-fg",
		children
	});
}
function Panel({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("rounded-xl border border-border bg-surface p-4 shadow-(--shadow-card) sm:p-6", className),
		children
	});
}
//#endregion
export { cn as i, Panel as n, SiteChrome as r, KeyLine as t };
