import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState, useRef } from "react";
import { Wire } from "@/components/Wire";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis, useReveals } from "@/hooks/useScrollSetup";
import { HouseIcon, PoleIcon, SolarIcon, TransformerIcon, TurbineIcon } from "@/components/Icons";
import { Layers, Fingerprint, LayoutDashboard, ShieldCheck, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PowerTwinX — Digital Twin of Electricity" },
      {
        name: "description",
        content:
          "Follow a single live wire from turbine to home. PowerTwinX is a real-time digital twin of the electricity grid: simulate, monitor and predict every watt.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { k: "1.2M", l: "Sensor points streamed per minute" },
  { k: "99.98%", l: "Simulation-to-field accuracy" },
  { k: "<40ms", l: "Twin state refresh latency" },
  { k: "18%", l: "Average loss reduction" },
];

const faqs = [
  {
    q: "How does PowerTwinX create a digital twin of electricity?",
    a: "A digital twin gives you a living view of your energy network — where power flows, where it is constrained, and where it can perform better.",
  },
  {
    q: "How does it work with our existing SCADA infrastructure?",
    a: "It works with the systems you already have, adding intelligence across your energy data to move from monitoring to optimisation.",
  },
  {
    q: "How quickly can we model an entire energy network?",
    a: "From existing network data to a dynamic digital model, PowerTwinX helps you build a clearer picture of your system without rebuilding your operational infrastructure.",
  },
  {
    q: "Can we test scenarios before making real-world changes?",
    a: "Yes. Test changes digitally before making them physically — understand the impact, compare possibilities and choose the smarter path forward.",
  },
];

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative z-10 mx-auto w-full max-w-6xl px-6 py-28 md:py-40", className)}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-volt" />
      {children}
    </span>
  );
}

function AnimatedLines() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block overflow-visible -z-10 mt-10">
      <svg className="h-full w-full opacity-80" preserveAspectRatio="none" viewBox="0 0 1000 600">
        <defs>
          <linearGradient id="voltLine" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stopColor="var(--volt)" stopOpacity="0.2" />
             <stop offset="50%" stopColor="var(--volt)" stopOpacity="1" />
             <stop offset="100%" stopColor="var(--volt)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="voltLineVert" x1="0%" y1="100%" x2="0%" y2="0%">
             <stop offset="0%" stopColor="var(--volt)" stopOpacity="0.2" />
             <stop offset="100%" stopColor="var(--volt)" stopOpacity="1" />
          </linearGradient>
          <filter id="voltGlowBlur">
             <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
             <feMerge>
                 <feMergeNode in="coloredBlur"/>
                 <feMergeNode in="SourceGraphic"/>
             </feMerge>
          </filter>
        </defs>
        
        {/* Base Track */}
        <g stroke="var(--border)" strokeWidth="1.5" fill="none" opacity="0.6">
          <path d="M 310 160 C 380 160, 450 300, 500 300" />
          <path d="M 310 440 C 380 440, 450 300, 500 300" />
          <path d="M 690 160 C 620 160, 550 300, 500 300" />
          <path d="M 690 440 C 620 440, 550 300, 500 300" />
          <path d="M 500.1 520 C 500 420, 500 350, 500 300" />
        </g>

        {/* Animated Moving Dashes */}
        <g strokeWidth="3" fill="none" filter="url(#voltGlowBlur)">
          <path stroke="url(#voltLine)" d="M 310 160 C 380 160, 450 300, 500 300" strokeDasharray="30 60">
            <animate attributeName="stroke-dashoffset" from="180" to="0" dur="2s" repeatCount="indefinite" />
          </path>
          <path stroke="url(#voltLine)" d="M 310 440 C 380 440, 450 300, 500 300" strokeDasharray="30 60">
            <animate attributeName="stroke-dashoffset" from="180" to="0" dur="2.5s" repeatCount="indefinite" />
          </path>
          <path stroke="url(#voltLine)" d="M 690 160 C 620 160, 550 300, 500 300" strokeDasharray="30 60">
            <animate attributeName="stroke-dashoffset" from="180" to="0" dur="2s" repeatCount="indefinite" />
          </path>
          <path stroke="url(#voltLine)" d="M 690 440 C 620 440, 550 300, 500 300" strokeDasharray="30 60">
            <animate attributeName="stroke-dashoffset" from="180" to="0" dur="2.5s" repeatCount="indefinite" />
          </path>
          <path stroke="url(#voltLineVert)" d="M 500.1 520 C 500 420, 500 350, 500 300" strokeDasharray="30 60">
            <animate attributeName="stroke-dashoffset" from="180" to="0" dur="1.8s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Glowing Anchor Dots */}
        <g fill="var(--volt)" filter="url(#voltGlowBlur)">
            <circle cx="310" cy="160" r="4" />
            <circle cx="310" cy="440" r="4" />
            <circle cx="690" cy="160" r="4" />
            <circle cx="690" cy="440" r="4" />
            <circle cx="500" cy="520" r="4" />
            <circle cx="500" cy="300" r="6" />
        </g>
      </svg>
    </div>
  );
}

function PlatformCard({ num, title, highlight, desc, icon: Icon }: { num: string, title: string, highlight: string, desc: string, icon: any }) {
  return (
    <div className="card-soft reveal group flex items-start gap-4 p-5 hover:border-volt/30 transition-all bg-black/90 backdrop-blur-md relative z-10 w-full sm:w-[300px]">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-background border border-border shadow-sm group-hover:border-volt/50 transition-colors duration-500">
        <Icon className="h-6 w-6 text-foreground group-hover:text-volt transition-colors" />
      </div>
      <div>
        <div className="text-xs font-semibold tracking-wider text-white">{num}</div>
        <h3 className="mt-1 text-xl font-medium text-white">
          {title} <span className="text-gradient-volt font-bold">{highlight}</span>
        </h3>
        <p className="mt-2 text-sm text-white leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Index() {
  useLenis();
  useReveals();
  const [progress, setProgress] = useState(0);
  const [lit, setLit] = useState(false);
  const houseRef = useRef<HTMLDivElement>(null);

  const onProgress = useCallback((p: number, y?: number) => {
    const pct = Math.round(p * 100);
    setProgress((prev) => (Math.round(prev * 100) === pct ? prev : pct / 100));

    if (y !== undefined && houseRef.current) {
      let curr: HTMLElement | null = houseRef.current;
      let houseTop = 0;
      while (curr && curr.tagName !== "MAIN") {
        houseTop += curr.offsetTop;
        curr = curr.offsetParent as HTMLElement;
      }
      
      // Keep it lit if the wire tip has crossed into the house.
      if (y > houseTop + 250) {
        setLit(true);
      } else {
        setLit(false);
      }
    }
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col overflow-clip bg-background">
      <CustomCursor />
      <Header />

      {/* the one continuous wire behind everything */}
      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-[0.55]" />
      <Wire onProgress={onProgress} />

      {/* 1. HERO */}
      <Section className="flex min-h-screen flex-col justify-center pt-40">
        <div className="grid items-center gap-14 md:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Live grid intelligence</Eyebrow>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl font-light">
              The <span className="text-gradient-volt font-bold">digital twin</span> of electricity, from
              first gust to last lightbulb.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              One wire. One journey. Scroll to send power from a turbine on the ridge, through the
              substation and across the grid, until a house wakes up. Experience PowerTwinX.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#what-is-it"
                className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                Discover PowerTwinX
              </a>
              <a
                href="/demo"
                className="rounded-full border border-border bg-surface px-7 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                Platform Demo
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center text-foreground/80">
            <video
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 w-full max-w-xl rounded-2xl object-cover border border-border shadow-[var(--shadow-soft)]"
            />
            <div
              className="absolute -z-10 h-64 w-64 rounded-full blur-3xl"
              style={{ backgroundColor: "var(--volt-soft)", opacity: 0.7 }}
            />
          </div>
        </div>
      </Section>

      {/* 2. What is a Digital Twin? */}
      <Section id="what-is-it" className="py-20 md:py-32">
        <div className="reveal grid gap-10 md:grid-cols-2 md:items-center">
            <div>
                <Eyebrow>Understanding PowerTwinX</Eyebrow>
                <h2 className="mt-5 text-4xl md:text-5xl">A Digital View. <br/>A Smarter Journey.</h2>
                <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                    A digital twin brings the physical energy network into a virtual environment—making it easier to see how energy moves, where losses occur, and how the system performs. Explore changes, analyse possibilities, and identify opportunities to optimise before decisions reach the physical world.
                </p>
            </div>
            <div className="card-soft relative min-h-[300px] flex items-center justify-center overflow-hidden border-volt/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-background to-surface opacity-50"></div>
                <div className="absolute inset-0 group">
                    <div className="w-full h-full flex flex-wrap gap-1 p-4 opacity-30">
                        {Array.from({length: 100}).map((_, i) => (
                             <div key={i} className="w-[8%] h-[8%] rounded-sm bg-muted-foreground/10 transition-colors duration-1000" style={{backgroundColor: i % 7 === 0 ? 'var(--volt)' : ''}} />
                        ))}
                    </div>
                </div>
                <div className="relative z-10 text-center">
                    <TransformerIcon className="h-28 w-28 text-volt drop-shadow-[0_0_15px_rgba(205,255,100,0.4)] mix-blend-screen" />
                    <div className="mt-4 font-display text-xl tracking-wider uppercase text-foreground">DIGITALLY CONNECTED</div>
                </div>
            </div>
        </div>
      </Section>

      {/* 4. Why PowerTwinX? & 5. Key Benefits */}
      <Section id="why" className="py-20">
        <div className="text-center reveal mb-16 flex flex-col items-center">
            <Eyebrow>Why PowerTwinX?</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl max-w-3xl mx-auto">
                Turning Energy Complexity into <span className="text-gradient-volt">Clarity</span>
            </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
            {[
                {title: "Digital Understanding", desc: "Create a digital view of the energy journey to understand how energy moves, performs, and changes across the system.", icon: "01"},
                {title: "Explore Before You Act", desc: "Analyse changes, evaluate possibilities, and understand potential outcomes digitally before implementing decisions in the physical system.", icon: "02"},
                {title: "Smarter Optimisation", desc: "Identify losses, uncover opportunities, and improve how energy is transmitted, delivered, and ultimately used.", icon: "03"}
            ].map((benefit, i) => (
                <div key={i} className="card-soft reveal p-8 hover:border-volt/30 transition-colors group">
                    <div className="text-4xl font-display text-muted-foreground/20 group-hover:text-volt/30 transition-colors mb-6">{benefit.icon}</div>
                    <h3 className="text-2xl font-medium mb-3">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
            ))}
        </div>
      </Section>

      <Section id="platform-architecture" className="py-20 md:py-20 relative overflow-hidden bg-background/50 backdrop-blur-sm border rounded-2xl border-black">
        <div className="text-center reveal mb-16 flex flex-col items-center">
            <Eyebrow>WHY POWERTWINX™</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl max-w-3xl mx-auto">
                One platform. A smarter energy <span className="text-gradient-volt font-medium">tomorrow.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
                From data to decisions — everything connected, intelligent and secure.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center max-w-[85rem] mx-auto my-20 relative z-10 w-full px-4 lg:px-12 xl:px-16">
            <AnimatedLines />
            <div className="flex flex-col gap-8 lg:gap-24 w-full max-w-[300px] mx-auto lg:mx-0 lg:ml-0 lg:mr-auto">
                <PlatformCard num="01" title="One" highlight="Platform" desc="Everything connected." icon={Layers} />
                <PlatformCard num="02" title="One" highlight="Identity" desc="Each asset is unique." icon={Fingerprint} />
            </div>

            <div className="relative mx-auto flex w-full max-w-sm flex-col items-center justify-center lg:max-w-md reveal pb-10 pt-4 lg:py-0 order-first lg:order-none">
                <div className="absolute inset-0 bg-volt/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                <img src="/platform-layers.png" alt="Platform Layers" className="w-full object-contain mix-blend-screen drop-shadow-[0_0_40px_rgba(205,255,100,0.15)] transition-transform duration-700 hover:scale-[1.03]" />
                <div className="mt-8 -mb-6 lg:-mb-12 w-full max-w-[300px] mx-auto z-20 flex justify-center">
                     <PlatformCard num="03" title="One" highlight="Dashboard" desc="Real-time visibility." icon={LayoutDashboard} />
                </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-24 w-full max-w-[300px] mx-auto lg:mx-0 lg:mr-0 lg:ml-auto">
                <PlatformCard num="05" title="One" highlight="Intelligence" desc="AI-powered decisions." icon={Brain} />
                <PlatformCard num="04" title="One" highlight="Truth" desc="Blockchain secured." icon={ShieldCheck} />
            </div>
        </div>
      </Section>

      {/* 7. Statistics & Impact (Keep as current style) */}
      <Section id="generation">
        <div className="reveal">
          <Eyebrow>Impact & Scale</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-4xl md:text-5xl">
            Capacity that changes by the minute, modelled by the second.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k} className="reveal card-soft p-6 border-b-2 border-b-transparent hover:border-b-volt transition-all">
              <div className="font-display text-4xl">{s.k}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Implementation Process */}
      <Section id="implementation" className="py-20 md:py-32">
        <div className="reveal max-w-2xl">
            <Eyebrow>Implementation</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl">From Energy Data to a Living Digital Twin.</h2>
        </div>

        <div className="mt-16 space-y-12">
            {[
                {step: "Build the Foundation", content: "Bring together existing energy, network, and system data to create a connected digital representation of the physical energy journey."},
                {step: "Understand & Calibrate", content: "Use historical information and system behaviour to build a digital view that reflects how the real energy network performs."},
                {step: "Connect & Evolve", content: "Bring changing energy conditions into the digital environment, keeping the view of the system aligned with what is happening in the real world."}
            ].map((item, idx) => (
                <div key={idx} className="reveal flex flex-col md:flex-row gap-6 md:gap-12 md:items-center bg-background/90 backdrop-blur p-6 md:p-8 rounded-3xl border border-border/10">
                    <div className="shrink-0 w-16 h-16 rounded-full border border-volt bg-volt/5 flex items-center justify-center font-display text-2xl text-volt">
                        {idx + 1}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl mb-2">{item.step}</h3>
                        <p className="text-muted-foreground">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* 9. FAQs */}
      <Section id="faq">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 text-4xl">Questions. Modelled. Answered.</h2>
          </div>
          <div className="reveal divide-y divide-border rounded-3xl border border-border bg-surface">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5 cursor-pointer">
                <summary className="flex list-none items-center justify-between gap-6 text-base font-medium">
                  {f.q}
                  <span className="text-volt transition-transform group-open:rotate-45 block">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* 10. Call to Action / House Payoff */}
      <Section id="house" className="pb-44 text-center">
        <div ref={houseRef} className="relative mx-auto flex max-w-3xl flex-col items-center">
          <div
            className="absolute top-10 h-72 w-72 rounded-full blur-3xl transition-opacity duration-700"
            style={{
              backgroundColor: "var(--volt)",
              opacity: lit ? 0.45 : 0,
              animation: lit ? "pulse-glow 2.6s ease-in-out infinite" : undefined,
            }}
          />
          <HouseIcon
            lit={lit}
            className={`relative h-56 w-64 transition-all duration-500 md:h-72 md:w-80 ${
              lit ? "text-foreground scale-[1.03]" : "text-foreground/60"
            }`}
          />
          <h2 className="mt-10 text-4xl md:text-6xl">
            {lit ? (
              <>
                The lights are <span className="text-gradient-volt">on</span>.
              </>
            ) : (
              <>Keep scrolling — the current is almost home.</>
            )}
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Everything you just scrolled past happens thousands of times a second. PowerTwinX is the
            platform that keeps up with it.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/demo"
              className="rounded-full bg-primary px-8 py-4 px-10 text-sm font-medium text-primary-foreground hover:scale-105 transition-transform"
            >
              Book a Consultation
            </a>
            <a
              href="/about"
              className="rounded-full border border-border bg-surface px-8 py-4 text-sm font-medium hover:bg-muted transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
