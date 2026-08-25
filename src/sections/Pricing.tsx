import { Phone, MessageSquare, MessageCircle, ShieldCheck } from "lucide-react";
import { SMS, TEL, WA } from "@/data/site";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold tracking-[0.2em] text-accent-gold">PRICING</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-primary">Request a Custom Quote</h2>
          <p className="mt-4 text-muted-foreground">Competitive, personalized pricing for mobile tire service and roadside assistance across Hampton Roads, Virginia. Contact us today for your exact rate.</p>
        </div>
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
            <h3 className="text-xl lg:text-2xl font-black text-primary">Custom Pricing for Every Service</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At FleetCare Solutions, we believe in fair, transparent quotes tailored to your exact needs. Pricing for mobile tire repair, tire mounting and balancing, tire rotation, TPMS diagnostics, jump starts, gas delivery, and lockout assistance depends on your vehicle type, location within Hampton Roads, and the complexity of the job. Contact us directly for a detailed, no-obligation quote on any service — our team is happy to walk you through every option.
            </p>
            <div className="mt-6 bg-accent-gold/10 border border-accent-gold/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-accent-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-primary">Mobilization Fee Required</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    A compulsory non-refundable mobilization fee is required from all clients before a FleetCare agent is dispatched to your location. This fee secures your appointment and covers the cost of sending our mobile unit directly to you. Full service pricing will be confirmed upfront when you call or message us.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={TEL} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md font-bold btn-press hover:bg-primary-glow">
                <Phone className="h-5 w-5" /> Call for a Quote
              </a>
              <a href={SMS} className="flex-1 inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3 rounded-md font-bold btn-press hover:bg-primary hover:text-primary-foreground">
                <MessageSquare className="h-5 w-5" /> Text for Pricing
              </a>
              <a href={WA} target="_blank" rel="noopener" className="flex-1 inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3 rounded-md font-bold btn-press hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="h-5 w-5" /> WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
