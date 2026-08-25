import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold tracking-[0.2em] text-accent-gold">WHAT WE DO</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-primary">Our Services</h2>
          <p className="mt-4 text-muted-foreground">Professional mobile tire & roadside services delivered wherever you need them.</p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="card-hover group bg-card border border-border rounded-2xl p-6 cursor-pointer">
              <div className="h-12 w-12 rounded-xl bg-primary/5 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors">
                <s.icon className="h-6 w-6 text-primary group-hover:text-accent-gold transition-colors" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
