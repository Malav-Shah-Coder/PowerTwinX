import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Wire } from "@/components/Wire";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis, useReveals } from "@/hooks/useScrollSetup";
import { HouseIcon, PoleIcon, SolarIcon, TransformerIcon, TurbineIcon } from "@/components/Icons";

export const Route = createFileRoute("/main")({
  head: () => ({
    meta: [
      { title: "Voltline — Digital Twin of Electricity" },
      {
        name: "description",
        content:
          "Follow a single live wire from turbine to home. Voltline is a real-time digital twin of the electricity grid: simulate, monitor and predict every watt.",
      },
      { property: "og:title", content: "Voltline — Digital Twin of Electricity" },
      {
        property: "og:description",
        content:
          "A scroll-driven journey along one energized wire: generation, substation, grid intelligence and the home it powers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
    a: "No. Voltline sits on top of SCADA, IoT meters and weather feeds, fusing them into one model you can query, replay and forecast against.",
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
    <main className="relative min-h-screen flex flex-col overflow-clip bg-background">
      <CustomCursor />

      <header className="fixed left-1/2 top-5 z-50 flex w-[min(92%,72rem)] -translate-x-1/2 items-center justify-between rounded-full border border-border bg-surface/70 px-5 py-3 backdrop-blur-xl">
        <span className="font-display text-lg">Voltline</span>
        <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
          <a href="#generate" className="transition-colors hover:text-foreground">Generate</a>
          <a href="#twin" className="transition-colors hover:text-foreground">The Twin</a>
          <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs tabular-nums text-muted-foreground sm:inline">
            {Math.round(progress * 100)}%
          </span>
          <a
            href="#house"
            className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground"
          >
            Power a home
          </a>
        </div>
      </header>

      {/* the one continuous wire behind everything */}
      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-[0.55]" />
      <Wire onProgress={onProgress} />

      {/* HERO */}
      <Section className="flex min-h-screen flex-col justify-center pt-40">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>Live grid intelligence</Eyebrow>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">
              The <span className="text-gradient-volt">digital twin</span> of electricity, from
              first gust to last lightbulb.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              One wire. One journey. Scroll to send power from a turbine on the ridge, through the
              substation and across the grid, until a house wakes up.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#generate"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                Follow the current
              </a>
              <a
                href="#twin"
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                See the twin
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

      {/* GENERATION */}
      <Section id="generate">
        <div className="reveal">
          <Eyebrow>01 — Generation</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-4xl md:text-5xl">
            Capacity that changes by the minute, modelled by the second.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k} className="reveal card-soft p-6">
              <div className="font-display text-4xl">{s.k}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="reveal card-soft p-7 lg:col-span-2">
            <h3 className="text-2xl">Wind + solar, blended in real time</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Forecast irradiance and wind curves feed the twin continuously, so dispatch decisions
              are made against tomorrow's weather rather than yesterday's averages.
            </p>
            <div className="mt-7 flex h-32 items-end gap-1.5">
              {Array.from({ length: 34 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${(22 + Math.abs(Math.sin(i * 0.55)) * 78).toFixed(2)}%`,
                    backgroundColor:
                      i % 3 === 0 ? "var(--volt)" : "color-mix(in oklab, var(--cyanx) 35%, white)",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="reveal card-soft flex flex-col justify-between p-7">
            <SolarIcon className="h-24 w-28 text-cyan" />
            <div>
              <h3 className="text-2xl">Curtailment, avoided</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Spot surplus before it happens and route it into storage instead of the ground.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SUBSTATION */}
      <Section id="substation">
        <div className="reveal card-soft grid gap-10 overflow-hidden p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12">
          <div className="flex items-center justify-center">
            <TransformerIcon className="h-44 w-44 text-foreground/80" />
          </div>
          <div>
            <Eyebrow>02 — Substation</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl">The step-down moment.</h2>
            <p className="mt-4 text-muted-foreground">
              400kV becomes 11kV becomes 230V. Every transformation is a place where energy is lost,
              measured, or misreported — and the twin watches all three.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["400 kV", "Transmission in"],
                ["11 kV", "Distribution out"],
                ["0.4%", "Modelled loss"],
              ].map(([a, b]) => (
                <div key={a} className="rounded-xl border border-border bg-muted/60 px-4 py-3">
                  <div className="font-display text-2xl">{a}</div>
                  <div className="text-xs text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* DIGITAL TWIN / GRID */}
      <Section id="twin">
        <div className="reveal max-w-2xl">
          <Eyebrow>03 — The digital twin</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl">
            A living model of the network, not a dashboard of the past.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <div className="reveal card-soft p-7 md:col-span-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Network health · live</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-volt [animation:pulse-glow_1.8s_ease-in-out_infinite]" />
                streaming
              </span>
            </div>
            <div className="mt-5 grid grid-cols-12 gap-1.5">
              {Array.from({ length: 72 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[4px]"
                  style={{
                    backgroundColor:
                      i % 11 === 0
                        ? "var(--volt)"
                        : i % 5 === 0
                          ? "color-mix(in oklab, var(--cyanx) 45%, white)"
                          : "var(--muted)",
                  }}
                />
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Every cell is a feeder segment. Anomalies surface as heat before a customer ever calls.
            </p>
          </div>
          <div className="reveal card-soft p-7 md:col-span-2">
            <h3 className="text-2xl">Replay any second</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Rewind the grid to the instant before a fault and re-run it with different settings.
            </p>
            <div className="mt-6 space-y-3">
              {["Load flow", "Fault cascade", "EV surge", "Storm mode"].map((t, i) => (
                <div key={t} className="flex items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${45 + i * 15}%`,
                        background: "linear-gradient(90deg, var(--cyanx), var(--volt))",
                      }}
                    />
                  </div>
                  <span className="w-24 shrink-0 text-xs text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>
          {[
            ["Predictive maintenance", "Assets flag themselves weeks before failure windows."],
            ["Loss attribution", "Technical vs. commercial losses, separated per feeder."],
            ["Scenario sandbox", "Test interconnects without energising anything."],
          ].map(([t, s]) => (
            <div key={t} className="reveal card-soft p-7 md:col-span-2">
              <h3 className="text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* POWER LINES */}
      <Section id="lines">
        <div className="reveal flex flex-col items-center text-center">
          <Eyebrow>04 — Transit</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-4xl md:text-5xl">
            Kilometres of line, each one accounted for.
          </h2>
          <div className="mt-14 flex w-full items-end justify-between text-foreground/70">
            {[0, 1, 2, 3].map((i) => (
              <PoleIcon key={i} className="h-32 w-24 md:h-44 md:w-32" />
            ))}
          </div>
        </div>
      </Section>

      {/* WHY IT MATTERS */}
      <Section id="why">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="reveal md:col-span-1">
            <Eyebrow>Why it matters</Eyebrow>
            <h2 className="mt-5 text-4xl">Grids got complicated. Models didn't.</h2>
          </div>
          <div className="reveal grid gap-4 md:col-span-2 sm:grid-cols-2">
            {[
              ["Bidirectional flow", "Rooftop solar turned consumers into generators overnight."],
              ["Volatile demand", "Heat pumps and EVs reshape the evening peak every year."],
              ["Ageing assets", "Half the network was designed for a world without batteries."],
              ["Zero tolerance", "Outage minutes are now measured, published and penalised."],
            ].map(([t, s]) => (
              <div key={t} className="card-soft p-6">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 text-4xl">Questions along the wire.</h2>
          </div>
          <div className="reveal divide-y divide-border rounded-3xl border border-border bg-surface">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium">
                  {f.q}
                  <span className="text-volt transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* HOUSE PAYOFF */}
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
            Everything you just scrolled past happens thousands of times a second. Voltline is the
            model that keeps up with it.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#twin"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground"
            >
              Request a twin demo
            </a>
            <a
              href="#generate"
              className="rounded-full border border-border bg-surface px-7 py-3 text-sm font-medium"
            >
              Ride the wire again
            </a>
          </div>
        </div>
      </Section>

      <footer className="relative z-10 border-t border-border px-6 py-10 text-center text-xs text-muted-foreground">
        Voltline · Digital Twin of Electricity — prototype
      </footer>
    </main>
  );
}
