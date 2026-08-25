import { MapPin, Phone, MessageSquare, MessageCircle, ArrowRight } from "lucide-react";
import { AREAS, PHONE, SMS, TEL, WA } from "@/data/site";

export function ServiceAreaCta() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
          <div className="text-xs font-bold tracking-[0.2em] text-accent-gold">SERVICE AREA</div>
          <h2 className="mt-3 text-2xl lg:text-3xl font-black text-primary">Proudly Serving Hampton Roads</h2>
          <p className="mt-4 text-muted-foreground">We cover all major cities across Hampton Roads, Virginia. Not sure if you're in our area? Just give us a call.</p>
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            {AREAS.map((a) => (
              <div key={a} className="flex items-center gap-2 text-sm font-medium text-foreground bg-secondary/60 rounded-lg px-3 py-2.5">
                <MapPin className="h-4 w-4 text-accent-gold" /> {a}
              </div>
            ))}
          </div>
        </div>
        <div className="relative bg-hero-gradient text-white rounded-3xl p-8 lg:p-10 overflow-hidden">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-accent-gold/20 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-gold/20 border border-accent-gold/40 text-xs font-bold tracking-wide text-gold">
              <span className="h-2 w-2 rounded-full bg-accent-gold animate-pulse" /> EMERGENCY HOTLINE
            </div>
            <h2 className="mt-5 text-3xl lg:text-4xl font-black leading-tight">Emergency? <br />We're Here To Help.</h2>
            <p className="mt-3 text-white/75">Call us now for immediate assistance. Our team is available 24/7, every day of the year.</p>
            <a href={TEL} className="mt-7 group flex items-center gap-4 bg-accent-gold text-accent-gold-foreground rounded-2xl p-5 btn-press shadow-glow-gold">
              <div className="h-14 w-14 rounded-xl bg-accent-gold-foreground/10 flex items-center justify-center">
                <Phone className="h-7 w-7" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-[10px] font-bold tracking-widest opacity-70">CALL US NOW</div>
                <div className="text-2xl font-black">{PHONE}</div>
              </div>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={SMS} className="mt-3 w-full inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-6 py-3.5 rounded-2xl font-bold btn-press hover:bg-white/10">
              <MessageSquare className="h-5 w-5" /> Text Us
            </a>
            <a href={WA} target="_blank" rel="noopener" className="mt-3 w-full inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-6 py-3.5 rounded-2xl font-bold btn-press hover:bg-white/10">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
