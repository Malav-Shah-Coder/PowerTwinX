import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** deterministic pseudo random */
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

/** Catmull-Rom through points -> smooth cubic bezier path */
type Pt = { x: number; y: number };
function smoothPath(pts: Pt[]) {
  const first = pts[0];
  if (!first || pts.length < 2) return "";
  let d = `M ${first.x.toFixed(1)} ${first.y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p1 = pts[i] as Pt;
    const p2 = pts[i + 1] as Pt;
    const p0 = (pts[i - 1] ?? p1) as Pt;
    const p3 = (pts[i + 2] ?? p2) as Pt;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

function buildPath(w: number, h: number) {
  const rand = rng(20260805);
  const narrow = w < 760;
  const margin = narrow ? w * 0.12 : w * 0.08;
  const usable = w - margin * 2;
  const steps = Math.max(14, Math.round(h / (narrow ? 320 : 260)));
  const pts: { x: number; y: number }[] = [{ x: w * 0.5, y: 0 }];
  let dir = 1;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    // irregular swing amplitude, sometimes hugging an edge
    const amp = 0.25 + rand() * (narrow ? 0.5 : 0.75);
    const jitter = (rand() - 0.5) * 0.18;
    const x = margin + usable * (0.5 + dir * amp * 0.5 + jitter);
    const y = h * (t - 0.5 / steps + (rand() - 0.5) * (0.35 / steps));
    pts.push({ x: Math.min(w - margin * 0.4, Math.max(margin * 0.4, x)), y });
    // occasionally stay on the same side to break symmetry
    if (rand() > 0.22) dir *= -1;
  }
  pts.push({ x: w * 0.5, y: h - 8 });
  return smoothPath(pts);
}

export function Wire({ onProgress }: { onProgress?: (p: number, y: number) => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const litRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGGElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [d, setD] = useState("");

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      setSize((s) => (s.w === w && s.h === h ? s : { w, h }));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (size.w > 0 && size.h > 0) setD(buildPath(size.w, size.h));
  }, [size]);

  useEffect(() => {
    const lit = litRef.current;
    const base = pathRef.current;
    if (!lit || !base || !d) return;
    const len = lit.getTotalLength();
    gsap.set(lit, { strokeDasharray: len, strokeDashoffset: len });

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        gsap.set(lit, { strokeDashoffset: len * (1 - p) });
        const pt = base.getPointAtLength(len * p);
        if (dotRef.current) gsap.set(dotRef.current, { x: pt.x, y: pt.y });
        onProgress?.(p, pt.y);
      },
    });
    ScrollTrigger.refresh();
    return () => st.kill();
  }, [d, onProgress]);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 z-0">
      {size.w > 0 && (
        <svg
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          fill="none"
          className="h-full w-full overflow-visible"
          aria-hidden
        >
          <defs>
            <linearGradient id="voltGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--cyanx)" />
              <stop offset="45%" stopColor="var(--volt)" />
              <stop offset="100%" stopColor="var(--volt)" />
            </linearGradient>
            <filter id="voltGlow" x="-30%" y="-5%" width="160%" height="110%">
              <feGaussianBlur stdDeviation="7" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            ref={pathRef}
            d={d}
            stroke="var(--border)"
            strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray="10 12"
          />
          <path
            ref={litRef}
            d={d}
            stroke="url(#voltGrad)"
            strokeWidth={4}
            strokeLinecap="round"
            filter="url(#voltGlow)"
          />
          <g ref={dotRef}>
            <circle r="14" fill="var(--volt)" opacity="0.18" />
            <circle r="6.5" fill="var(--surface)" stroke="var(--volt)" strokeWidth="3" />
          </g>
        </svg>
      )}
    </div>
  );
}
