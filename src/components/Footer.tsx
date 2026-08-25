import { Phone, MessageSquare, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/fleetcare-logo.jpeg";
import { EMAIL, EMAIL_LABEL, NAV, PHONE, SMS, TEL } from "@/data/site";

const SOCIALS = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="FleetCare Solutions LLC logo" loading="lazy" className="h-11 w-11 rounded-md object-cover" />
              <div className="leading-tight">
                <div className="text-base font-extrabold tracking-tight">FLEETCARE</div>
                <div className="text-[10px] font-semibold tracking-[0.18em] text-white/60">SOLUTIONS LLC</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70 leading-relaxed">
              Mobile tire service & roadside assistance across Hampton Roads, Virginia. We come to you — 24/7.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent-gold hover:text-accent-gold-foreground active:bg-accent-gold active:text-accent-gold-foreground flex items-center justify-center transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-bold tracking-wider text-accent-gold">QUICK LINKS</div>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-accent-gold transition-colors">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold tracking-wider text-accent-gold">CONTACT</div>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li><a href={TEL} className="flex items-center gap-2 hover:text-accent-gold"><Phone className="h-4 w-4" /> {PHONE}</a></li>
              <li><a href={SMS} className="flex items-center gap-2 hover:text-accent-gold"><MessageSquare className="h-4 w-4" /> Text {PHONE}</a></li>
              <li><a href={EMAIL} className="flex items-center gap-2 hover:text-accent-gold"><Mail className="h-4 w-4" />{EMAIL_LABEL}</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Hampton Roads, Virginia</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold tracking-wider text-accent-gold">HOURS</div>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Open 24/7</li>
              <li>Every day of the year</li>
              <li className="text-gold font-semibold">Emergencies always answered</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} FleetCare Solutions LLC. All Rights Reserved.
          <span className="block mt-1">
            Designed &amp; developed by{" "}
            <a
              href="https://opsfuxiontech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gold hover:text-accent-gold underline underline-offset-2 transition-colors"
            >
              Opsfuxion Technologies Ltd
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
