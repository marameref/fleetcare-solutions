import heroVan from "@/assets/hero-van.jpg";
import { STATS } from "@/data/site";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs font-bold tracking-[0.2em] text-accent-gold">ABOUT US</div>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-primary">The Shop That Comes To You.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            FleetCare Solutions is a mobile tire service company dedicated to providing fast, reliable, and professional roadside assistance across Hampton Roads. We bring the shop to you — anytime, anywhere — so a flat tire or dead battery never has to derail your day.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div key={s.l} className="border-l-2 border-accent-gold pl-4">
                <div className="text-2xl lg:text-3xl font-black text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
          <img
            src={heroVan}
            alt="FleetCare technician performing mobile tire repair on-site"
            width={1280}
            height={896}
            loading="lazy"
            className="relative rounded-2xl shadow-premium w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
