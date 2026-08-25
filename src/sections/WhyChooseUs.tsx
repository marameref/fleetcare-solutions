import { WHY } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold tracking-[0.2em] text-accent-gold">WHY US</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-primary">Why Choose FleetCare Solutions?</h2>
          <p className="mt-4 text-muted-foreground">Trusted by drivers across Hampton Roads for fast, honest, expert service.</p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY.map((w) => (
            <div key={w.title} className="card-hover group bg-card border border-border rounded-2xl p-7 text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform duration-300">
                <w.icon className="h-7 w-7 text-accent-gold" />
              </div>
              <h3 className="mt-5 text-base font-bold text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
