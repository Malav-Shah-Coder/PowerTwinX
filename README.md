# Electric Flow Visualized

Build a single-page scrolling landing page for a "Digital Twin of Electricity" project. The entire page is built around ONE continuous animated wire/cable that represents electricity traveling from its source to a home — this is the signature visual of the site.

The Wire (core mechanic)

Design ONE long SVG path that runs the full height of the page, starting at a wind turbine + solar panel section at the top and ending at a house at the bottom.

The path must NOT be a straight vertical line. Make it a hand-drawn doodle style: it should meander left and right across the page width, loop slightly, curve around section content, sometimes cut close to one edge, sometimes swing to the other — like a squiggly cable someone dropped and it settled randomly. Generate it as a smooth bezier/catmull-rom path with irregular control points so it feels organic, not procedural or symmetric.

Use stroke-dasharray + stroke-dashoffset (or a masked duplicate path) so that:
-- The full path is visible from the start in a plain/neutral gray/dashed "unpowered" style.
-- As the user scrolls, the portion of the path behind current scroll position progressively fills in with a bright "energized" color (electric yellow/cyan or a gradient) — same logic as a scroll-progress timeline, but following the wandering path instead of a straight line.

Drive this with GSAP ScrollTrigger's scrub, mapping scroll progress (0 to 1) directly to stroke-dashoffset of the path so the color-fill feels perfectly tied to scroll, not delayed.

Optional nice touch (seen in reference): a small circular marker/dot that rides along the path at the exact current scroll position, like a "current position" cursor traveling the wire.

Scroll feel

Integrate Lenis for smooth/inertia scrolling — scroll should feel like scrubbing through a cinematic sequence, elastic and fluid, not default browser jump-scroll.

Sections fade/slide in as they enter viewport, synced with the wire animation, so it reads as one continuous flow, not stacked separate blocks.

Add a custom circular cursor (hollow ring, subtle) that follows the mouse, like in the reference — reinforces the "explore/scrub" feel.

Page structure / sections (in order)

Hero: wind turbine + solar panel illustration — the wire visibly originates from here.

A "How it works" or generative capacity section — explains source generation (random supporting content, stats, or an animated illustration).

A substation/transformer section — wire passes through, maybe a visual "step-down" moment.

A "grid/network" section — showcase the digital twin concept itself (data, monitoring, real-time visualization angle), since that's the actual product.

A power line/pole section — wire continues its journey across the page.

Final section: the wire connects to a house. The house should glow/pulse (windows light up, soft outer glow, maybe a brief flash) exactly when the wire's energized color reaches it — this is the payoff moment.

Feel free to insert 1–2 additional content sections (e.g. "why digital twin matters", team/CTA) wherever natural — they don't need to follow the wire structurally, just need the wire doodling past/behind them.

Visual style

Clean, modern, minimal — light or dark background (your call), with the energized wire color as the one vivid accent color against a mostly neutral palette.

Illustrative/flat icons for turbine, solar panel, pole, house — simple enough not to compete with the wire.

Tech stack

React, SVG for the path, GSAP + ScrollTrigger for scroll-driven animation, Lenis for smooth scroll.

Fully responsive: the doodle path should be regenerated or repositioned sensibly at different breakpoints, not just squished.

Build this as a working prototype with placeholder icons for turbine/solar/pole/house. Priority #1: nailing the scroll-linked color-fill on the wandering wire. Priority #2: the smooth scroll feel. Priority #3: the house glow payoff.

make it in light theme but use colors in that way that it feels premium and mordern but it compliments each other also done use section that only have ttitle and paragraph use section like grids faqg and much more that make whole website amazing

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e767fa4d-f831-44b5-97de-222d82a059d5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
