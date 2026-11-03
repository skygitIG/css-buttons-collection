/*
 * Every button in the collection lives here.
 * To add a new one, append an object to this array:
 *   name  – shown on the card
 *   tags  – used by the filter chips
 *   bg    – optional preview background for the card
 *   html  – markup people will copy
 *   css   – standalone CSS people will copy (prefix classes with "cb-")
 */
window.BUTTONS = [
  {
    name: "Neon Glow",
    tags: ["hover", "glow"],
    html: `<button class="cb-neon">Neon Glow</button>`,
    css: `.cb-neon {
  padding: 14px 32px;
  font: 600 16px/1 system-ui, sans-serif;
  color: #22d3ee;
  background: transparent;
  border: 2px solid #22d3ee;
  border-radius: 10px;
  cursor: pointer;
  transition: color .3s, background .3s, box-shadow .3s;
}

.cb-neon:hover,
.cb-neon:focus-visible {
  color: #0b1120;
  background: #22d3ee;
  box-shadow: 0 0 10px #22d3ee, 0 0 40px #22d3ee80, 0 0 80px #22d3ee40;
  outline: none;
}`
  },
  {
    name: "Spinning Gradient Border",
    tags: ["animated", "gradient"],
    html: `<button class="cb-gradient-border">Gradient Border</button>`,
    css: `@property --cb-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.cb-gradient-border {
  padding: 14px 32px;
  font: 600 16px/1 system-ui, sans-serif;
  color: #fff;
  border: 2px solid transparent;
  border-radius: 12px;
  background:
    linear-gradient(#0f172a, #0f172a) padding-box,
    conic-gradient(from var(--cb-angle), #7c3aed, #ec4899, #06b6d4, #7c3aed) border-box;
  cursor: pointer;
  animation: cb-gradient-border-spin 4s linear infinite;
}

@keyframes cb-gradient-border-spin {
  to { --cb-angle: 360deg; }
}

@media (prefers-reduced-motion: reduce) {
  .cb-gradient-border { animation: none; }
}`
  },
  {
    name: "Shine Sweep",
    tags: ["hover", "gradient"],
    html: `<button class="cb-shine">Shine Sweep</button>`,
    css: `.cb-shine {
  position: relative;
  overflow: hidden;
  padding: 14px 32px;
  font: 600 16px/1 system-ui, sans-serif;
  color: #fff;
  background: #7c3aed;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}

.cb-shine::before {
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, .55), transparent);
  transform: skewX(-20deg);
  transition: left .6s ease;
}

.cb-shine:hover::before,
.cb-shine:focus-visible::before {
  left: 125%;
}`
  },
  {
    name: "3D Push",
    tags: ["depth", "click"],
    html: `<button class="cb-3d">Press Me</button>`,
    css: `.cb-3d {
  padding: 14px 32px;
  font: 700 16px/1 system-ui, sans-serif;
  color: #fff;
  background: #ec4899;
  border: 0;
  border-radius: 12px;
  box-shadow: 0 6px 0 #9d174d;
  cursor: pointer;
  transition: transform .1s, box-shadow .1s;
}

.cb-3d:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 0 #9d174d;
}

.cb-3d:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #9d174d;
}`
  },
  {
    name: "Fill Up",
    tags: ["hover", "outline"],
    html: `<button class="cb-fill">Fill Up</button>`,
    css: `.cb-fill {
  position: relative;
  z-index: 0;
  overflow: hidden;
  padding: 14px 32px;
  font: 600 16px/1 system-ui, sans-serif;
  color: #f97316;
  background: transparent;
  border: 2px solid #f97316;
  border-radius: 10px;
  cursor: pointer;
  transition: color .35s;
}

.cb-fill::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: #f97316;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform .35s ease;
}

.cb-fill:hover,
.cb-fill:focus-visible {
  color: #fff;
}

.cb-fill:hover::before,
.cb-fill:focus-visible::before {
  transform: scaleY(1);
}`
  },
  {
    name: "Arrow Slide",
    tags: ["hover", "icon"],
    html: `<button class="cb-arrow">Get started <span aria-hidden="true">→</span></button>`,
    css: `.cb-arrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  font: 600 16px/1 system-ui, sans-serif;
  color: #0f172a;
  background: #facc15;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  transition: gap .3s;
}

.cb-arrow span {
  display: inline-block;
  transition: transform .3s;
}

.cb-arrow:hover,
.cb-arrow:focus-visible {
  gap: 12px;
}

.cb-arrow:hover span,
.cb-arrow:focus-visible span {
  transform: translateX(4px);
}`
  },
  {
    name: "Glassmorphism",
    tags: ["glass", "hover"],
    bg: "linear-gradient(135deg, #7c3aed, #ec4899 55%, #f59e0b)",
    html: `<button class="cb-glass">Glass Button</button>`,
    css: `.cb-glass {
  padding: 14px 32px;
  font: 600 16px/1 system-ui, sans-serif;
  color: #fff;
  background: rgba(255, 255, 255, .15);
  border: 1px solid rgba(255, 255, 255, .35);
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, .15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  cursor: pointer;
  transition: background .3s;
}

.cb-glass:hover,
.cb-glass:focus-visible {
  background: rgba(255, 255, 255, .28);
}`
  },
  {
    name: "Neumorphism",
    tags: ["soft", "click"],
    bg: "#e0e5ec",
    html: `<button class="cb-neu">Soft Touch</button>`,
    css: `.cb-neu {
  padding: 16px 34px;
  font: 600 16px/1 system-ui, sans-serif;
  color: #5a6478;
  background: #e0e5ec;
  border: 0;
  border-radius: 14px;
  box-shadow: 6px 6px 12px #b8bec7, -6px -6px 12px #ffffff;
  cursor: pointer;
  transition: box-shadow .2s;
}

.cb-neu:active {
  box-shadow: inset 6px 6px 12px #b8bec7, inset -6px -6px 12px #ffffff;
}`
  },
  {
    name: "Pulse Ring",
    tags: ["animated", "glow"],
    html: `<button class="cb-pulse">Join Live</button>`,
    css: `.cb-pulse {
  padding: 14px 32px;
  font: 600 16px/1 system-ui, sans-serif;
  color: #fff;
  background: #10b981;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  animation: cb-pulse-ring 2s infinite;
}

@keyframes cb-pulse-ring {
  0%   { box-shadow: 0 0 0 0 rgba(16, 185, 129, .6); }
  70%  { box-shadow: 0 0 0 16px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .cb-pulse { animation: none; }
}`
  },
  {
    name: "Border Draw",
    tags: ["hover", "outline"],
    html: `<button class="cb-draw">Border Draw</button>`,
    css: `.cb-draw {
  position: relative;
  padding: 14px 32px;
  font: 600 16px/1 system-ui, sans-serif;
  color: #e2e8f0;
  background: rgba(255, 255, 255, .06);
  border: 0;
  cursor: pointer;
}

.cb-draw::before,
.cb-draw::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 2px solid transparent;
  box-sizing: border-box;
}

.cb-draw::before { top: 0; left: 0; }
.cb-draw::after { right: 0; bottom: 0; }

.cb-draw:hover::before,
.cb-draw:focus-visible::before {
  width: 100%;
  height: 100%;
  border-top-color: #06b6d4;
  border-right-color: #06b6d4;
  transition: width .2s ease-out, height .2s ease-out .2s;
}

.cb-draw:hover::after,
.cb-draw:focus-visible::after {
  width: 100%;
  height: 100%;
  border-bottom-color: #06b6d4;
  border-left-color: #06b6d4;
  transition: border-color 0s .4s, width .2s ease-out .4s, height .2s ease-out .6s;
}`
  },
  {
    name: "Neo-Brutalist",
    tags: ["click", "depth"],
    bg: "#fef9c3",
    html: `<button class="cb-brutal">Do It Now</button>`,
    css: `.cb-brutal {
  padding: 14px 30px;
  font: 800 16px/1 system-ui, sans-serif;
  color: #111;
  background: #a3e635;
  border: 2px solid #111;
  border-radius: 0;
  box-shadow: 5px 5px 0 #111;
  cursor: pointer;
  transition: transform .15s, box-shadow .15s;
}

.cb-brutal:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 #111;
}

.cb-brutal:active {
  transform: translate(5px, 5px);
  box-shadow: 0 0 0 #111;
}`
  },
  {
    name: "Text Swap",
    tags: ["hover", "text"],
    html: `<button class="cb-swap" data-text="Let's go!"><span>Hover me</span></button>`,
    css: `.cb-swap {
  position: relative;
  overflow: hidden;
  padding: 14px 32px;
  font: 600 16px/1 system-ui, sans-serif;
  color: #fff;
  background: #2563eb;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}

.cb-swap span {
  display: block;
  transition: transform .3s ease;
}

.cb-swap::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  transform: translateY(100%);
  transition: transform .3s ease;
}

.cb-swap:hover span,
.cb-swap:focus-visible span {
  transform: translateY(-200%);
}

.cb-swap:hover::after,
.cb-swap:focus-visible::after {
  transform: translateY(0);
}`
  },
  {
    name: "Rainbow Flow",
    tags: ["animated", "gradient"],
    html: `<button class="cb-rainbow">Rainbow Flow</button>`,
    css: `.cb-rainbow {
  padding: 14px 32px;
  font: 700 16px/1 system-ui, sans-serif;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .3);
  background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6, #ef4444);
  background-size: 200% 100%;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  animation: cb-rainbow-flow 6s linear infinite;
}

@keyframes cb-rainbow-flow {
  to { background-position: 200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .cb-rainbow { animation: none; }
}`
  },
  {
    name: "Icon Expand",
    tags: ["hover", "icon"],
    html: `<button class="cb-expand"><span class="cb-expand-icon" aria-hidden="true">+</span><span class="cb-expand-text">Add to cart</span></button>`,
    css: `.cb-expand {
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 14px;
  font: 600 16px/1 system-ui, sans-serif;
  color: #fff;
  background: #7c3aed;
  border: 0;
  border-radius: 999px;
  overflow: hidden;
  cursor: pointer;
}

.cb-expand-icon {
  width: 20px;
  font-size: 24px;
  line-height: 1;
  text-align: center;
}

.cb-expand-text {
  max-width: 0;
  opacity: 0;
  white-space: nowrap;
  transition: max-width .35s ease, opacity .25s ease, margin .35s ease;
}

.cb-expand:hover .cb-expand-text,
.cb-expand:focus-visible .cb-expand-text {
  max-width: 140px;
  margin-left: 8px;
  opacity: 1;
}`
  },
  {
    name: "Underline Slide",
    tags: ["hover", "text"],
    html: `<button class="cb-underline">Read more</button>`,
    css: `.cb-underline {
  position: relative;
  padding: 8px 4px;
  font: 600 17px/1 system-ui, sans-serif;
  color: #e2e8f0;
  background: none;
  border: 0;
  cursor: pointer;
}

.cb-underline::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 2px;
  background: #ec4899;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform .3s ease;
}

.cb-underline:hover::after,
.cb-underline:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left;
}`
  },
  {
    name: "Shadow Lift",
    tags: ["hover", "depth"],
    bg: "#f1f5f9",
    html: `<button class="cb-lift">Shadow Lift</button>`,
    css: `.cb-lift {
  padding: 14px 32px;
  font: 600 16px/1 system-ui, sans-serif;
  color: #0f172a;
  background: #fff;
  border: 0;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(15, 23, 42, .15);
  cursor: pointer;
  transition: transform .25s, box-shadow .25s;
}

.cb-lift:hover,
.cb-lift:focus-visible {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(15, 23, 42, .25);
}`
  }
];
