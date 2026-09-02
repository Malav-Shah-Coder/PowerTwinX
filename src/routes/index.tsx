import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Wire } from "@/components/Wire";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis, useReveals } from "@/hooks/useScrollSetup";
import { HouseIcon, PoleIcon, SolarIcon, TransformerIcon, TurbineIcon } from "@/components/Icons";
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
    q: "What exactly is a digital twin of electricity?",
    a: "A continuously synchronised virtual replica of your physical network — generation, lines, transformers and loads — fed by live telemetry so every simulation runs against reality, not a snapshot.",
  },
  {
    q: "Does it replace SCADA?",
    a: "No. PowerTwinX sits on top of SCADA, IoT meters and weather feeds, fusing them into one model you can query, replay and forecast against.",
  },
  {
    q: "How fast can a network be modelled?",
    a: "Import GIS and asset registries and the base twin builds in hours. Calibration against live measurements typically completes within a week.",
  },
  {
    q: "Can we run what-if scenarios?",
    a: "Yes — outage cascades, EV load spikes, storm scenarios and new solar interconnects all run on the live model without touching field equipment.",
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
    <section id={id} className={`relative z-10 mx-auto w-full max-w-6xl px-6 py-28 md:py-40 ${className}`}>
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

function Index() {
  useLenis();
  useReveals();
  const [progress, setProgress] = useState(0);
  const onProgress = useCallback((p: number) => {
    const pct = Math.round(p * 100);
    setProgress((prev) => (Math.round(prev * 100) === pct ? prev : pct / 100));
  }, []);
  const lit = progress > 0.93;

  return (
    <main className="relative min-h-screen overflow-clip bg-background">
      <CustomCursor />
      <Header />

      {/* the one continuous wire behind everything */}
      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-[0.55]" />
      <Wire onProgress={onProgress} />

      {/* 1. HERO */}
      <Section className="flex min-h-screen flex-col justify-center pt-40">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>Live grid intelligence</Eyebrow>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl font-light">
              The <span className="text-gradient-volt font-medium">digital twin</span> of electricity, from
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
          <div className="relative flex items-end justify-center gap-6 text-foreground/80">
            <TurbineIcon className="h-56 w-40 md:h-72 md:w-52" />
            <SolarIcon className="h-36 w-44 text-cyan md:h-44 md:w-56" />
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
                <h2 className="mt-5 text-4xl md:text-5xl">Beyond SCADA. <br/>A Living Replica.</h2>
                <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                    A digital twin isn't just a static map. It is a highly accurate, synchronized virtual model of your entire power grid—fed by real-time telemetry. Predict outages, balance load dynamically, and run thousands of what-if scenarios without touching a single physical asset.
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
                    <div className="mt-4 font-display text-xl tracking-wider uppercase text-foreground">Synchronized</div>
                </div>
            </div>
        </div>
      </Section>

      {/* 4. Why PowerTwinX? & 5. Key Benefits */}
      <Section id="why" className="py-20">
        <div className="text-center reveal mb-16 flex flex-col items-center">
            <Eyebrow>Why PowerTwinX?</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl max-w-3xl mx-auto">
                Transforming Grid Complexity into <span className="text-gradient-volt">Clarity</span>
            </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
            {[
                {title: "Predictive Intelligence", desc: "AI-driven forecasting spots anomalies and potential failures weeks before they happen, reducing unplanned downtime.", icon: "01"},
                {title: "Risk-Free Scenarios", desc: "Spin up parallel realities. Test EV surges, extreme weather impacts, and DER integrations safely in the sandbox.", icon: "02"},
                {title: "Real-Time Optimization", desc: "Minimize line losses and dynamically reroute power to avoid curtailment of renewable assets, maximizing efficiency.", icon: "03"}
            ].map((benefit, i) => (
                <div key={i} className="card-soft reveal p-8 hover:border-volt/30 transition-colors group">
                    <div className="text-4xl font-display text-muted-foreground/20 group-hover:text-volt/30 transition-colors mb-6">{benefit.icon}</div>
                    <h3 className="text-2xl font-medium mb-3">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
            ))}
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
            <h2 className="mt-5 text-4xl md:text-5xl">From zero to fully-mapped in days.</h2>
        </div>

        <div className="mt-16 space-y-12">
            {[
                {step: "Phase 1: Ingestion", content: "Import existing GIS data, SCADA history, and smart meter topology. We construct the baseline twin automatically."},
                {step: "Phase 2: Calibration", content: "AI models compare historical telemetry with physics-based simulations, tuning resistance and line parameters until the twin perfectly mirrors reality."},
                {step: "Phase 3: Live Sync", content: "WebSockets and APIs connect real-time data streams. Your digital grid is now breathing."}
            ].map((item, idx) => (
                <div key={idx} className="reveal flex flex-col md:flex-row gap-6 md:gap-12 md:items-center">
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
            <h2 className="mt-5 text-4xl">Questions along the wire.</h2>
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
        <div className="relative mx-auto flex max-w-3xl flex-col items-center">
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
