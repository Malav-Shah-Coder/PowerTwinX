import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis, useReveals } from "@/hooks/useScrollSetup";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | PowerTwinX" },
      { name: "description", content: "Portfolio and upcoming deployments of PowerTwinX." }
    ]
  }),
  component: ProjectsPage,
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

export function ProjectsPage() {
  useLenis();
  useReveals();

  return (
    <main className="relative min-h-screen overflow-clip bg-background font-sans">
      <CustomCursor />
      <Header />
      
      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-[0.55]" />
      
      <Section className="mt-32">
        <div className="reveal max-w-2xl">
          <Eyebrow>Our Work</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-6xl font-light">
            Deployments & <span className="text-gradient-volt font-medium">Portfolio</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            A comprehensive look at our active and upcoming deployments across global energy sectors.
          </p>
        </div>
      </Section>

      <Section>
          <div className="reveal mb-12 flex justify-between items-end border-b border-border pb-6">
              <h2 className="text-3xl font-medium">Upcoming Projects</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
              {[1, 2].map(i => (
                  <div key={i} className="reveal group rounded-2xl border border-border bg-surface/50 p-6 hover:border-volt/50 transition-all cursor-pointer">
                      <div className="flex justify-between items-center mb-4">
                          <span className="text-xs font-medium bg-volt/10 text-volt px-2 py-1 rounded">Q{3+i} 2026</span>
                          <span className="text-muted-foreground text-sm">Microgrid Integration</span>
                      </div>
                      <h3 className="text-xl font-medium mb-3">Project Alpha - Substation {i}</h3>
                      <p className="text-sm text-muted-foreground">Full digital replica and predictive maintenance model for a newly constructed 400kV substation.</p>
                  </div>
              ))}
          </div>
      </Section>

      <Section>
        <div className="reveal mb-12 border-b border-border pb-6">
            <h2 className="text-3xl font-medium">Project Categories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Utility Scale Renewables', 'Urban Distribution Networks', 'Industrial Microgrids', 'Transmission Lines', 'Energy Storage Systems', 'Smart City Infra'].map((cat, i) => (
                <div key={i} className="reveal card-soft p-6 flex flex-col items-center justify-center text-center h-40 hover:-translate-y-1 transition-transform">
                    <span className="font-medium">{cat}</span>
                </div>
            ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
