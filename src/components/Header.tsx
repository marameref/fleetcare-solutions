import { useState } from "react";
import { Phone, MessageSquare, Menu, X } from "lucide-react";
import logo from "@/assets/fleetcare-logo.jpeg";
import { NAV, SMS, TEL } from "@/data/site";
import { useScrolled } from "@/hooks/useScrolled";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <img src={logo} alt="FleetCare Solutions logo" className="h-10 w-10 lg:h-11 lg:w-11 rounded-md object-cover" />
          <div className="leading-tight">
            <div className="text-[15px] lg:text-base font-extrabold tracking-tight text-primary">FLEETCARE</div>
            <div className="text-[9px] lg:text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">SOLUTIONS LLC</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors relative group">
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={TEL} className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 lg:px-5 py-2.5 rounded-md text-sm font-bold btn-press shadow-premium hover:bg-primary-glow">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a href={SMS} className="hidden sm:inline-flex items-center gap-2 border border-primary text-primary px-3 py-2.5 rounded-md text-sm font-bold btn-press hover:bg-primary hover:text-primary-foreground">
            <MessageSquare className="h-4 w-4" /> Text
          </a>
          <button
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-primary"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-border bg-white">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold text-foreground/80 hover:text-primary border-b border-border last:border-0"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
