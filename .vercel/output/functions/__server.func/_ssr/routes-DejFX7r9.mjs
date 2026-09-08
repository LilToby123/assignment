import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SiteChrome } from "./site-chrome-D8kb4py8.mjs";
import { a as ArrowRight, n as GlassWater, r as GitFork } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DejFX7r9.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-muted uppercase",
				children: "CSC 296 · drawn slowly"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-2xl text-4xl sm:text-5xl",
				children: "You do not need to be clever. You need a picture."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-lg leading-normal text-soft",
				children: "These two assignment questions look like a wall of letters. They are not. One is a waiting line. One is a kitchen with two ingredients. Tap a lesson. We walk it one small step at a time."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonCard, {
					to: "/network",
					kicker: "Question 1",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitFork, { className: "size-5" }),
					title: "The 20-day project",
					body: "Eight jobs. Some cannot start until others finish. The whole project takes as long as the longest chain of waiting."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonCard, {
					to: "/juice",
					kicker: "Question 2",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassWater, { className: "size-5" }),
					title: "The juice kitchen",
					body: "Mango juice and orange juice. Limited sugar, limited water. We find the mix that makes the most naira — by drawing the walls."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 max-w-xl text-sm text-muted",
				children: "Same numbers as your assignment. Same answers. The point of this page is not to hand you a sheet to copy. It is to make the method sit in your head so the next question like this does not feel like a foreign language."
			})
		]
	}) });
}
function LessonCard({ to, kicker, icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group flex flex-col rounded-xl border border-border bg-surface p-5 shadow-(--shadow-card) transition-[border-color,transform] duration-(--motion-fast) ease-[var(--ease-out)] pressable hover:border-fg/30 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium tracking-widest text-muted uppercase",
					children: kicker
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: icon
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 flex-1 text-sm leading-normal text-soft",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary",
				children: ["Start this one", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-(--motion-fast) group-hover:translate-x-0.5" })]
			})
		]
	});
}
//#endregion
export { Home as component };
