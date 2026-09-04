import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis, useReveals } from "@/hooks/useScrollSetup";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | PowerTwinX" },
      { name: "description", content: "Get in touch with PowerTwinX for inquiries, demos, or support." }
    ]
  }),
  component: ContactPage,
});

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative z-10 mx-auto w-full max-w-6xl px-6 py-20 md:py-32 ${className}`}>
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

export function ContactPage() {
  useLenis();
  useReveals();

  return (
    <main className="relative min-h-screen flex flex-col overflow-clip bg-background font-sans">
      <CustomCursor />
      <Header />
      
      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-[0.55]" />
      
      <Section className="mt-32 pb-10">
        <div className="reveal max-w-2xl">
          <Eyebrow>Connect With Us</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-light">
            Start the <span className="text-gradient-volt font-medium">Conversation</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Ready to digitize your grid? Have questions about our predictive models? Reach out to our engineering and sales teams.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20">
              
              {/* Contact Form */}
              <div className="reveal">
                  <h3 className="text-2xl font-medium mb-6">Send us a message or Book a Consultation</h3>
                  <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                      <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">First Name</label>
                              <input type="text" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-volt/50 transition-colors" placeholder="John" />
                          </div>
                          <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">Last Name</label>
                              <input type="text" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-volt/50 transition-colors" placeholder="Doe" />
                          </div>
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Work Email</label>
                          <input type="email" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-volt/50 transition-colors" placeholder="john@utility.com" />
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Organization / Utility Name</label>
                          <input type="text" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-volt/50 transition-colors" placeholder="National Grid" />
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Inquiry Type</label>
                          <select className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-volt/50 transition-colors text-foreground appearance-none">
                              <option>Request a Demo / Book Consultation</option>
                              <option>Technical Partnership</option>
                              <option>Media Inquiry</option>
                              <option>Other</option>
                          </select>
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Message</label>
                          <textarea rows={4} className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-volt/50 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                      </div>
                      <button className="rounded-full bg-primary px-8 py-3 w-full sm:w-auto text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                          Submit Request
                      </button>
                  </form>
              </div>

              {/* Office & Details */}
              <div className="reveal space-y-10">
                  <div className="card-soft p-8">
                      <h3 className="text-xl font-medium mb-4">Global Headquarters</h3>
                      <div className="space-y-4 text-sm text-muted-foreground">
                          <p>
                              <strong className="text-foreground block mb-1">Address:</strong>
                              101 Energy Way, Suite 400<br/>
                              Innovation District<br/>
                              San Francisco, CA 94105
                          </p>
                          <hr className="border-border/50" />
                          <p>
                              <strong className="text-foreground block mb-1">Email & Phone:</strong>
                              contact@powertwinx.com<br/>
                              +1 (800) 555-TWIN
                          </p>
                          <hr className="border-border/50" />
                          <p>
                              <strong className="text-foreground block mb-1">Business Hours:</strong>
                              Monday - Friday<br/>
                              9:00 AM - 6:00 PM (PST)
                          </p>
                      </div>
                  </div>

                  {/* Stylized Google Map Placeholder */}
                  <div className="relative w-full aspect-square rounded-2xl border border-border/50 bg-surface overflow-hidden group cursor-pointer shadow-[0_0_20px_rgba(205,255,100,0.02)] flex items-center justify-center">
                       {/* Map Grid Pattern */}
                       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWNDBoLTQweiBNMzkuNSAwSDQwdjQwSDM5LjV6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-50" />
                       
                       {/* Ping */}
                       <div className="relative z-10 w-4 h-4 rounded-full bg-volt">
                           <div className="absolute inset-0 rounded-full bg-volt animate-ping opacity-75" />
                       </div>
                       
                       <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm border border-border px-3 py-1.5 rounded-lg text-xs font-medium text-foreground">
                           View on Map
                       </div>
                  </div>
              </div>

          </div>
      </Section>

      <Footer />
    </main>
  );
}
