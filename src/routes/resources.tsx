import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis, useReveals } from "@/hooks/useScrollSetup";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources | PowerTwinX" },
      { name: "description", content: "Whitepapers, insights, and documentation for PowerTwinX." }
    ]
  }),
  component: ResourcesPage,
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

export function ResourcesPage() {
  useLenis();
  useReveals();

  const resourceCategories = [
      {title: "Whitepapers", desc: "In-depth research on grid digitization and AI models.", count: 12},
      {title: "Industry Insights", desc: "Trends and analysis from power sector experts.", count: 45},
      {title: "Guides & Documentation", desc: "Technical implementation manuals for PowerTwinX APIs.", count: 8},
      {title: "Research Papers", desc: "Peer-reviewed studies on predictive grid algorithms.", count: 15}
  ];

  return (
    <main className="relative min-h-screen overflow-clip bg-background font-sans">
      <CustomCursor />
      <Header />
      
      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-[0.55]" />
      
      <Section className="mt-32 pb-10">
        <div className="reveal max-w-2xl">
          <Eyebrow>Knowledge Base</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-6xl font-light">
            Insights & <span className="text-gradient-volt font-medium">Resources</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Expand your understanding of grid intelligence. Access our library of whitepapers, documentation, and industry insights.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
          <div className="grid gap-6 md:grid-cols-2">
              {resourceCategories.map((cat, i) => (
                  <div key={i} className="reveal card-soft p-8 hover:bg-muted/30 transition-colors group cursor-pointer flex justify-between items-center">
                      <div>
                          <h3 className="text-xl font-medium mb-2 group-hover:text-volt transition-colors">{cat.title}</h3>
                          <p className="text-sm text-muted-foreground">{cat.desc}</p>
                      </div>
                      <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-xs font-display">
                          {cat.count}
                      </div>
                  </div>
              ))}
          </div>

          <div className="mt-20 reveal">
              <Eyebrow>Latest Articles</Eyebrow>
              <h2 className="text-3xl mt-4 mb-8">From the Blog</h2>
              
              <div className="space-y-6">
                  {[
                      {date: "Oct 24, 2026", title: "Navigating the EV Surge: Why Forecasting Needs to Move Faster"},
                      {date: "Sep 12, 2026", title: "The Hidden Cost of Uncalibrated Substation Models"},
                      {date: "Aug 05, 2026", title: "Machine Learning vs. Physics-based Models in Grid Planning"}
                  ].map((blog, i) => (
                      <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-xl border border-border hover:border-volt/30 transition-colors cursor-pointer group">
                          <div className="md:w-32 text-sm text-muted-foreground font-display">{blog.date}</div>
                          <div className="flex-1 text-lg font-medium group-hover:text-volt transition-colors">{blog.title}</div>
                          <div className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-volt">
                              Read Article ➔
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </Section>

      <Footer />
    </main>
  );
}
