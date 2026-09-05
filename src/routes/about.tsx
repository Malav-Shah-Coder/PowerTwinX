import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis, useReveals } from "@/hooks/useScrollSetup";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | PowerTwinX" },
      { name: "description", content: "Learn about PowerTwinX, our vision, mission, and the team behind the ultimate digital twin platform." }
    ]
  }),
  component: AboutPage,
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

export function AboutPage() {
  useLenis();
  useReveals();

  return (
    <main className="relative min-h-screen flex flex-col overflow-clip bg-background font-sans">
      <CustomCursor />
      <Header />
      
      {/* Background Effect */}
      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-[0.55]" />
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-volt/5 to-transparent pointer-events-none" />

      {/* Hero / Company Overview */}
      <Section className="mt-16">
        <div className="reveal max-w-3xl">
          <Eyebrow>About Us</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-light">
            Making the Energy Journey <br className="hidden md:block" />
            <span className="text-gradient-volt font-medium">Visible, Intelligent</span> & Better.
          </h1>
          <div className="mt-6 space-y-4">
            <p className="text-xl text-muted-foreground leading-relaxed">
              PowerTwinX was built to bring greater clarity to the way energy moves, performs, and is used. We combine digital twin technology with energy intelligence to create a connected digital view of the energy journey — from generation and transmission to delivery and consumption.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our focus is simple: help energy systems become easier to understand, analyse, optimise, and improve.
            </p>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
            <div className="card-soft reveal p-10 flex flex-col justify-center">
                <h2 className="text-3xl mb-4 font-medium">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                    A world where the entire energy journey can be understood as one connected system — from generation and transmission to delivery and consumption. We envision a future where better visibility leads to smarter decisions, greater efficiency, and more intelligent use of energy.
                </p>
            </div>
            <div className="card-soft reveal p-10 flex flex-col justify-center">
                <h2 className="text-3xl mb-4 font-medium">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                    To make energy easier to see, understand, analyse, and optimise through digital intelligence. PowerTwinX connects the physical energy journey with a digital perspective, helping organisations make better decisions about how energy is transmitted, delivered, and used.
                </p>
            </div>
        </div>
      </Section>

      {/* Leadership Team */}
      <Section className="mb-12 md:mb-20">
        <div className="reveal mb-12">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-5 text-4xl">Guiding Our Vision</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[ 
                {name: "Er Dr Niraj Shah", role: "Director of PowerTwinX", image: "/Niraj-Shah.png"},
                {name: "Sudip Metha", role: "Director of PowerTwinX", image: "/Sudip-Mehta.png"}
            ].map((member, i) => (
                <div key={i} className="reveal group relative overflow-hidden rounded-2xl border border-border bg-surface p-1">
                    <div className="aspect-[3/4] bg-muted/30 rounded-xl overflow-hidden relative transition-transform duration-700 group-hover:scale-[1.03]">
                         <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 z-10" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                        <h3 className="text-xl font-medium text-white drop-shadow-md">{member.name}</h3>
                        <p className="text-sm text-volt mt-1 font-medium tracking-wide">{member.role}</p>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* Engineering / Development Team */}
      <Section className="mb-20 md:mb-32">
        <div className="reveal mb-12">
            <Eyebrow>Our Team</Eyebrow>
            <h2 className="mt-5 text-4xl">The Innovators Behind the Platform</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
            {[ 
                {name: "Malav Shah", image: "/Malav-Shah.png"},
                {name: "Rakhshit Kothari", image: "/Rakhshit-Kothari.png"},
                {name: "Deep Prajapati", image: "/Deep-Prajapati.png"}
            ].map((member, i) => (
                <div key={i} className="reveal group relative overflow-hidden rounded-2xl border border-border bg-surface p-1">
                    <div className="w-full aspect-square bg-muted/30 rounded-xl overflow-hidden relative transition-transform duration-700 group-hover:scale-[1.03]">
                         <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 z-10" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                        <h3 className="text-xl font-medium text-white drop-shadow-md">{member.name}</h3>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* Partners & Certifications - Temporarily Hidden */}
      {false && (
      <Section>
          <div className="reveal text-center mb-12">
            <h2 className="text-2xl text-muted-foreground font-light">Trusted by Industry Leaders & Certified for Excellence</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale">
              {/* Partner Logos placeholders */}
              <div className="h-10 w-32 bg-muted-foreground/30 animate-pulse rounded-md" />
              <div className="h-10 w-32 bg-muted-foreground/30 animate-pulse rounded-md" />
              <div className="h-10 w-32 bg-muted-foreground/30 animate-pulse rounded-md" />
              <div className="h-10 w-32 bg-muted-foreground/30 animate-pulse rounded-md" />
          </div>
      </Section>
      )}

      <Footer />
    </main>
  );
}
