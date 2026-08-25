import { Phone, MessageSquare, MessageCircle, Zap, ShieldCheck, Heart } from "lucide-react";
import heroVan from "@/assets/hero-van.jpg";
import { PHONE, SMS, TEL, WA } from "@/data/site";

export function Hero() {
  return (
    <section className="relative bg-hero-gradient text-white overflow-hidden pt-28 lg:pt-32 pb-20 lg:pb-28">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.82 0.16 85 / 0.4), transparent 50%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wide backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent-gold animate-pulse" />
            24/7 EMERGENCY MOBILE SERVICE
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05]">
            We Come To You,<br />
            <span className="text-gold">So You Can Keep Moving.</span>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-xl">
            24/7 mobile tire service & roadside assistance wherever you are across Hampton Roads, Virginia.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/85">
            <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-gold" /> Fast Response</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Professional</span>
            <span className="inline-flex items-center gap-2"><Heart className="h-4 w-4 text-gold" /> Reliable Service</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={TEL} className="inline-flex items-center justify-center gap-2 bg-accent-gold text-accent-gold-foreground px-6 py-3.5 rounded-md font-bold btn-press shadow-glow-gold">
              <Phone className="h-5 w-5" /> {PHONE}
            </a>
            <a href={SMS} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-6 py-3.5 rounded-md font-bold btn-press hover:bg-white/10">
              <MessageSquare className="h-5 w-5" /> Text Us
            </a>
            <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-6 py-3.5 rounded-md font-bold btn-press hover:bg-white/10">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="relative fade-up">
          <div className="absolute -inset-6 bg-accent-gold/20 rounded-3xl blur-3xl" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-premium">
            <img
              src={heroVan}
              alt="FleetCare Solutions mobile tire service van providing 24/7 roadside assistance in Hampton Roads, Virginia"
              width={1280}
              height={896}
              loading="eager"
              fetchPriority="high"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
              <div>
                <div className="text-xs text-white/70">Average Response</div>
                <div className="text-lg font-bold text-white">Under 30 minutes</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-accent-gold flex items-center justify-center">
                <Zap className="h-5 w-5 text-accent-gold-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
