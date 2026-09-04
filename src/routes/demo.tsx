import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis, useReveals } from "@/hooks/useScrollSetup";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Platform Demo | PowerTwinX" },
      { name: "description", content: "Experience the PowerTwinX digital twin platform." }
    ]
  }),
  component: DemoPage,
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

export function DemoPage() {
  useLenis();
  useReveals();

  return (
    <main className="relative min-h-screen flex flex-col overflow-clip bg-background font-sans">
      <CustomCursor />
      <Header />
      
      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-[0.55]" />
      
      <Section className="mt-32 pb-20 flex flex-col items-center justify-center text-center">
        <div className="reveal max-w-3xl mx-auto">
          <Eyebrow>Interactive Experience</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-light">
            Experience the <span className="text-gradient-volt font-medium">Grid</span> in Real-Time
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Take a guided tour through our digital twin sandbox. Watch load flows resolve in milliseconds and see predictive anomaly detection in action.
          </p>
        </div>

        <div className="mt-16 w-full reveal">
            <div className="relative w-full aspect-video rounded-3xl border border-border/50 bg-black/50 backdrop-blur-sm overflow-hidden flex items-center justify-center group cursor-pointer shadow-[0_0_50px_rgba(205,255,100,0.05)]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] opacity-50 mix-blend-screen" />
                
                {/* Interface Mockup Elements */}
                <div className="absolute left-6 top-6 right-6 bottom-6 border border-border/30 rounded-xl bg-surface/20">
                    <div className="flex justify-between items-center px-4 py-3 border-b border-border/30">
                        <div className="flex gap-2 text-xs text-muted-foreground">
                            <span>Substation Alpha</span>
                            <span>•</span>
                            <span className="text-volt">Live Sync</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 w-20 h-20 rounded-full bg-volt/10 border border-volt/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-volt border-b-[10px] border-b-transparent ml-1" />
                </div>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">Click to launch the interactive sandbox simulation.</p>
        </div>

        <div className="mt-20 reveal grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto">
            <div className="card-soft p-8 text-center md:text-left">
                <h3 className="text-2xl font-medium mb-3">Schedule a 1:1 Demo</h3>
                <p className="text-muted-foreground text-sm mb-6">Discuss your specific grid architecture and challenges with our power systems engineers.</p>
                <a href="#book" className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Book Consultation</a>
            </div>
            <div className="card-soft p-8 text-center md:text-left">
                <h3 className="text-2xl font-medium mb-3">Self-Serve Sandbox</h3>
                <p className="text-muted-foreground text-sm mb-6">Already have an invite code? Enter the restricted sandbox access area to evaluate.</p>
                <a href="#sandbox" className="inline-block rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium hover:bg-muted transition-colors">Enter Sandbox</a>
            </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
