import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis, useReveals } from "@/hooks/useScrollSetup";
import { useState } from "react";
import { createServerFn } from "@tanstack/react-start";
import { toast } from "sonner";

export const Route = createFileRoute("/request-demo")({
  head: () => ({
    meta: [
      { title: "Request a Demo | PowerTwinX" },
      { name: "description", content: "Book a detailed platform demonstration to see PowerTwinX in action." }
    ]
  }),
  component: RequestDemoPage,
});

const sendDemoEmail = createServerFn({ method: "POST" })
  .validator((d: any) => d as { firstName: string; lastName: string; email: string; org: string; message: string; })
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
        from: '"PowerTwinX Platform Demo" <info@powertwinx.com>',
        to: "info@powertwinx.com",
        subject: `Demo Request from ${data.firstName} ${data.lastName} (${data.org})`,
        text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nOrganization: ${data.org}\n\nGoals/Use Case:\n${data.message}`,
      });
      return { success: true };
    } catch (error: any) {
      console.error("Mail Error:", error);
      return { success: false, error: error.message };
    }
  });

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative z-10 mx-auto w-[min(92%,80rem)] px-6 md:px-12 py-20 md:py-32 ${className}`}>
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

export function RequestDemoPage() {
  useLenis();
  useReveals();

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", org: "", message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.org) {
      toast.error("Please fully fill out all the fields before submitting.");
      return;
    }
    
    setStatus("loading");
    try {
      const res = await sendDemoEmail({ data: formData });
      if (res.success) {
        setStatus("success");
        toast.success("Demo request successfully sent! Our team will contact you to schedule a session.");
        setFormData({ firstName: "", lastName: "", email: "", org: "", message: "" });
      } else {
        setStatus("error");
        toast.error("There was a problem sending your request. Please try again.");
      }
    } catch {
      setStatus("error");
      toast.error("There was an unexpected error. Please email us directly.");
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col overflow-clip bg-background font-sans">
      <CustomCursor />
      <Header />
      
      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-[0.55]" />
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-volt/10 to-transparent pointer-events-none"></div>

      <Section className="mt-32 pb-4">
        <div className="reveal text-center max-w-2xl mx-auto">
          <Eyebrow>See It In Action</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-6xl font-light">
            Request a <span className="text-gradient-volt font-medium">Platform Demo</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
             Experience the power of digital twin intelligence. Fill out the form below to schedule a personalized walkthrough for your organization.
          </p>
        </div>
      </Section>

      <Section className="pt-10 mb-20">
          <div className="reveal max-w-3xl mx-auto card-soft border-border/50 p-8 md:p-12 relative z-20 bg-background/50 backdrop-blur-xl">
              <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                          <label className="text-sm font-medium text-foreground">First Name *</label>
                          <input value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} type="text" className="w-full bg-surface/50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-volt/50 transition-colors" placeholder="John" />
                      </div>
                      <div className="space-y-3">
                          <label className="text-sm font-medium text-foreground">Last Name *</label>
                          <input value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} type="text" className="w-full bg-surface/50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-volt/50 transition-colors" placeholder="Doe" />
                      </div>
                  </div>
                  <div className="space-y-3">
                      <label className="text-sm font-medium text-foreground">Work Email *</label>
                      <input value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" className="w-full bg-surface/50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-volt/50 transition-colors" placeholder="name@utility.com" />
                  </div>
                  <div className="space-y-3">
                      <label className="text-sm font-medium text-foreground">Organization / Utility Name *</label>
                      <input value={formData.org} onChange={e => setFormData({...formData, org: e.target.value})} type="text" className="w-full bg-surface/50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-volt/50 transition-colors" placeholder="National Grid" />
                  </div>
                  <div className="space-y-3">
                      <label className="text-sm font-medium text-foreground">What are your primary goals? (Optional)</label>
                      <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className="w-full bg-surface/50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-volt/50 transition-colors resize-none" placeholder="E.g. We are looking to monitor feeder lines in real-time..."></textarea>
                  </div>
                  
                  <div className="pt-4">
                    <button disabled={status === "loading"} className="rounded-full bg-primary px-10 py-4 w-full text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50">
                        {status === "loading" ? "Submitting Request..." : status === "success" ? "Demo Requested!" : "Request Demo"}
                    </button>
                  </div>
              </form>
          </div>
      </Section>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
