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
              <div className="reveal flex flex-col gap-10">
                  {/* Google Map Embed */}
                  <div className="relative w-full aspect-video lg:aspect-square rounded-2xl border border-border/50 bg-surface overflow-hidden shadow-[0_0_20px_rgba(205,255,100,0.02)]">
                      <iframe 
                        src="https://maps.google.com/maps?q=Titanium%20City%20Center,%20Satellite,%20Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                        className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                        style={{ border: 0 }} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                        title="Titanium City Center Map"
                      />
                  </div>

                  <div className="card-soft p-8">
                      <h3 className="text-xl font-medium mb-4">Corporate Offices</h3>
                      <div className="space-y-4 text-sm text-muted-foreground">
                          <p>
                              <strong className="text-foreground block mb-1">Address:</strong>
                              EnerSpace Technology LLP<br/>
                              H 308 Titanium City Center<br/>
                              100 ft Road, Prahlad Nagar,<br/>
                              Satellite, Ahmedabad 380015
                          </p>
                          <hr className="border-border/50" />
                          <p>
                              <strong className="text-foreground block mb-1">Email & Phone:</strong>
                              info@powertwinx.com<br/>
                              +91 8238972042
                          </p>
                          <hr className="border-border/50" />
                          <p>
                              <strong className="text-foreground block mb-1">Business Hours:</strong>
                              Monday - Friday<br/>
                              9:00 AM - 6:00 PM (IST)
                          </p>
                      </div>
                  </div>
              </div>

          </div>
      </Section>

      <Footer />
    </main>
  );
}
