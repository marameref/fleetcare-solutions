import { Phone, MessageSquare, MessageCircle } from "lucide-react";
import { SMS, TEL, WA } from "@/data/site";

export function MobileCtaBar() {
  return (
    <>
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-border p-3 flex gap-2 shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.15)]">
        <a href={TEL} className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground py-3 rounded-md font-bold btn-press text-xs sm:text-sm">
          <Phone className="h-4 w-4" /> Call
        </a>
        <a href={SMS} className="flex-1 inline-flex items-center justify-center gap-1.5 border border-primary text-primary py-3 rounded-md font-bold btn-press hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm">
          <MessageSquare className="h-4 w-4" /> Text
        </a>
        <a href={WA} target="_blank" rel="noopener" className="flex-1 inline-flex items-center justify-center gap-1.5 bg-accent-gold text-accent-gold-foreground py-3 rounded-md font-bold btn-press text-xs sm:text-sm">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
      <div className="lg:hidden h-20" />
    </>
  );
}
