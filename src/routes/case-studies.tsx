import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis, useReveals } from "@/hooks/useScrollSetup";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | PowerTwinX" },
      { name: "description", content: "Real world impact and KPIs driven by PowerTwinX digital twins." }
    ]
  }),
  component: CaseStudiesPage,
});

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative z-10 mx-auto w-full max-w-6xl px-6 py-20 ${className}`}>
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

const caseStudiesList = [
    {
        title: "National Grid Optimization",
        industry: "Transmission",
        challenge: "High technical losses and unpredictable congestion during peak renewable generation.",
        solution: "Deployed PowerTwinX for live flow simulation and dynamic rerouting.",
        implementation: "3 weeks for total mapping & SCADA integration.",
        results: ["15% reduction in technical loss", "Zero curtailment incidents", "$2M saved annually"]
    },
    {
        title: "Metro City Distribution",
        industry: "Distribution",
        challenge: "Frequent unpredicted transformer failures causing massive urban blackouts.",
        solution: "Implemented predictive thermal modeling and anomaly detection via PowerTwinX.",
        implementation: "2 weeks for asset ingestion and live sync.",
        results: ["99.8% predictive accuracy", "40% faster response time", "Zero blind spots"]
    }
];

export function CaseStudiesPage() {
  useLenis();
  useReveals();

  return (
    <main className="relative min-h-screen overflow-clip bg-background font-sans">
      <CustomCursor />
      <Header />
      
      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-[0.55]" />
      
      <Section className="mt-32 pb-10">
        <div className="reveal max-w-2xl">
          <Eyebrow>Proven Impact</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-6xl font-light">
            Real-world <span className="text-gradient-volt font-medium">Results</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Explore how utilities and operators around the world use PowerTwinX to solve complex grid challenges and achieve measurable KPIs.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
          {/* Filters Simulator */}
          <div className="reveal flex gap-3 mb-10 overflow-x-auto pb-4">
              {['All', 'Transmission', 'Distribution', 'Renewables'].map((f, i) => (
                  <button key={i} className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-primary-foreground border-primary' : 'bg-surface border-border hover:bg-muted'}`}>
                      {f}
                  </button>
              ))}
          </div>

          <div className="grid gap-12">
              {caseStudiesList.map((study, i) => (
                  <div key={i} className="reveal card-soft border border-border/50 p-8 md:p-12 overflow-hidden relative group">
                      <div className="absolute top-0 right-0 p-8 text-6xl font-display text-muted-foreground/10 group-hover:text-volt/10 transition-colors pointer-events-none">
                          0{i + 1}
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-10 relative z-10">
                          <div className="md:w-1/3">
                              <span className="text-xs font-bold text-volt uppercase tracking-wider">{study.industry}</span>
                              <h2 className="text-3xl font-medium mt-3 mb-6">{study.title}</h2>
                              <div className="space-y-4">
                                  <div>
                                      <h4 className="text-sm font-medium text-foreground">Challenge</h4>
                                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{study.challenge}</p>
                                  </div>
                                  <div>
                                      <h4 className="text-sm font-medium text-foreground">Solution</h4>
                                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{study.solution}</p>
                                  </div>
                                  <div>
                                      <h4 className="text-sm font-medium text-foreground">Implementation</h4>
                                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{study.implementation}</p>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="md:w-2/3 bg-muted/20 rounded-2xl p-8 border border-border/40">
                              <h3 className="text-lg font-medium mb-6">Key Results & KPIs</h3>
                              <div className="grid sm:grid-cols-3 gap-6">
                                  {study.results.map((res, idx) => {
                                      const highlight = res.split(' ')[0];
                                      const rest = res.substring(highlight.length + 1);
                                      return (
                                        <div key={idx} className="flex flex-col">
                                            <span className="text-4xl font-display text-volt mb-2">{highlight}</span>
                                            <span className="text-sm text-muted-foreground">{rest}</span>
                                        </div>
                                      );
                                  })}
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </Section>

      <Footer />
    </main>
  );
}
