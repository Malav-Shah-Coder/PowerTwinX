import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis, useReveals } from "@/hooks/useScrollSetup";
import { useState } from "react";
import { createServerFn } from "@tanstack/react-start";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | PowerTwinX" },
      { name: "description", content: "Get in touch with PowerTwinX for inquiries, demos, or support." }
    ]
  }),
  component: ContactPage,
});

const sendContactEmail = createServerFn({ method: "POST" })
  .validator((d: any) => d as { firstName: string; lastName: string; email: string; org: string; type: string; message: string; })
  .handler(async ({ data }) => {
    const nodemailer = (await import("nodemailer")).default;
    const transporter = nodemailer.createTransport({
      host: "mail.powertwinx.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@powertwinx.com",
        pass: "MailPower@2026",
      },
    });

    try {
      await transporter.sendMail({
        from: '"PowerTwinX Leads" <info@powertwinx.com>',
        to: "info@powertwinx.com",
        subject: `New Lead: ${data.type} from ${data.firstName} ${data.lastName}`,
        text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nOrganization: ${data.org}\nInquiry Type: ${data.type}\n\nMessage:\n${data.message}`,
      });
      return { success: true };
    } catch (error: any) {
      console.error("Mail Error:", error);
      return { success: false, error: error.message };
    }
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

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", org: "", type: "Request a Demo / Book Consultation", message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await sendContactEmail({ data: formData });
      if (res.success) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", org: "", type: "Request a Demo / Book Consultation", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
                  <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">First Name</label>
                              <input required value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} type="text" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-volt/50 transition-colors" placeholder="John" />
                          </div>
                          <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">Last Name</label>
                              <input required value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} type="text" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-volt/50 transition-colors" placeholder="Doe" />
                          </div>
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Work Email</label>
                          <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-volt/50 transition-colors" placeholder="john@utility.com" />
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Organization / Utility Name</label>
                          <input required value={formData.org} onChange={e => setFormData({...formData, org: e.target.value})} type="text" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-volt/50 transition-colors" placeholder="National Grid" />
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Inquiry Type</label>
                          <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-volt/50 transition-colors text-foreground appearance-none">
                              <option>Request a Demo / Book Consultation</option>
                              <option>Technical Partnership</option>
                              <option>Media Inquiry</option>
                              <option>Other</option>
                          </select>
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Message</label>
                          <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-volt/50 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                      </div>
                      <button disabled={status === "loading"} className="rounded-full bg-primary px-8 py-3 w-full sm:w-auto text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50">
                          {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Submit Request"}
                      </button>
                      {status === "error" && <p className="text-red-500 text-sm mt-2">There was an error sending your message. Please try again.</p>}
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
