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
        solution: "Deployed PowerTwinX for live power-flow simulation, congestion analysis, and dynamic rerouting.",
        implementation: "Digital mapping with SCADA and operational-data integration.",
        results: ["15% potential reduction in technical losses*", "Zero avoidable curtailment events*", "$2M potential annual savings*"],
        footnote: "*Illustrative PowerTwinX deployment targets — replace with validated customer results when available."
    },
    {
        title: "Smarter Feeder Management",
        industry: "Distribution",
        challenge: "Limited visibility across distribution feeders caused voltage instability, inefficient asset utilisation, and delayed identification of network losses.",
        solution: "PowerTwinX created a live digital representation of the distribution network to analyse power flows, identify anomalies, and optimise feeder operations.",
        implementation: "Integrated GIS, smart-meter, SCADA, and feeder data into the PowerTwinX digital twin.",
        results: ["20% faster identification of network anomalies*", "10% improvement in asset utilisation*", "25% reduction in avoidable field interventions*"],
        footnote: "*Illustrative PowerTwinX targets.\n\nThis one is particularly well-grounded in real-world digital-twin applications. An IEA-supported Indian distribution-grid project used smart meters and sensors across 23 feeders and digital-twin models to analyse losses, load profiles, and voltage quality. It reported improved asset utilisation, more accurate energy measurement, and better visibility."
    },
    {
        title: "Renewable Generation Optimization",
        industry: "Renewable Energy",
        challenge: "Variable solar and wind generation creates unpredictable power flows, increasing the risk of curtailment and making grid balancing more difficult.",
        solution: "PowerTwinX simulates renewable-generation scenarios, forecasts system behaviour, and identifies optimal operating strategies before changes are implemented.",
        implementation: "Connected generation data, weather inputs, network conditions, and operational models within the PowerTwinX environment.",
        results: ["12% potential increase in renewable utilisation*", "30% faster scenario analysis*", "18% potential reduction in curtailment*"],
        footnote: "*Illustrative PowerTwinX targets.\n\nThere is strong research support for this type of application: a UK smart-energy-network digital-twin demonstrator estimated that voltage-control strategies could reduce solar curtailment by 56% for an exemplar day."
    },
    {
        title: "Predictive Asset Management",
        industry: "Asset Intelligence",
        challenge: "Reactive maintenance can result in unexpected failures, costly downtime, and unnecessary field inspections.",
        solution: "PowerTwinX creates a digital representation of critical assets and continuously analyses operational behaviour to identify deviations and potential failure conditions.",
        implementation: "Combined asset data, sensor information, historical performance, and predictive models within the digital twin.",
        results: ["30% potential reduction in unplanned downtime*", "20% potential reduction in maintenance costs*", "40% faster fault identification*"],
        footnote: "*Illustrative PowerTwinX targets.\n\nThis direction is also supported by current digital-twin research, which identifies predictive maintenance, fault detection, scenario simulation, and operational optimisation as major power-system applications."
    },
    {
        title: "Intelligent Energy Optimization",
        industry: "Energy Consumption",
        challenge: "Large energy consumers often lack a unified view of where, when, and why energy is being consumed, making optimisation reactive rather than continuous.",
        solution: "PowerTwinX builds a digital view of energy consumption across connected systems, identifying inefficient patterns and opportunities for intelligent load optimisation.",
        implementation: "Connected real-time consumption data, equipment behaviour, operational schedules, and optimisation models.",
        results: ["15% potential reduction in energy consumption*", "20% improvement in peak-load management*", "10% potential reduction in energy costs*"],
        footnote: "*Illustrative PowerTwinX targets."
    }
];

export function CaseStudiesPage() {
  useLenis();
  useReveals();

  return (
    <main className="relative min-h-screen flex flex-col overflow-clip bg-background font-sans">
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
          {/* Filters Simulator - Temporarily Hidden */}
          {false && (
          <div className="reveal flex gap-3 mb-10 overflow-x-auto pb-4 custom-scrollbar">
              {['All', 'Transmission', 'Distribution', 'Renewable Energy', 'Asset Intelligence', 'Energy Consumption'].map((f, i) => (
                  <button key={i} className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors whitespace-nowrap ${i === 0 ? 'bg-primary text-primary-foreground border-primary' : 'bg-surface border-border hover:bg-muted'}`}>
                      {f}
                  </button>
              ))}
          </div>
          )}

          <div className="grid gap-12">
              {caseStudiesList.map((study, i) => (
                  <div key={i} className="reveal card-soft border border-border/50 p-8 md:p-12 overflow-hidden relative group">
                      {/* <div className="absolute top-0 right-0 p-8 text-6xl font-display text-muted-foreground/10 group-hover:text-volt/10 transition-colors pointer-events-none">
                          0{i + 1}
                      </div> */}
                      
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
                          <div className="md:w-2/3 bg-muted/20 rounded-2xl p-8 border border-border/40 flex flex-col justify-between">
                              <div>
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
                              {study.footnote && (
                                  <div className="mt-8 pt-6 border-t border-border/50">
                                      <p className="text-xs text-muted-foreground/60 whitespace-pre-wrap leading-relaxed">{study.footnote}</p>
                                  </div>
                              )}
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
