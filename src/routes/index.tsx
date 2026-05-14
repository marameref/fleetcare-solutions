import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, MessageCircle, Menu, X, Zap, ShieldCheck, Clock, MapPin, Wrench,
  Disc3, RotateCw, CircleDot, BatteryCharging, Fuel, KeyRound, Users, Heart,
  ChevronLeft, ChevronRight, Mail, Facebook, Instagram, Twitter, ArrowRight, Star,
} from "lucide-react";
import logo from "@/assets/fleetcare-logo.jpeg";
import heroVan from "@/assets/hero-van.jpg";

const SITE_URL = "https://fleetcare-express-site.lovable.app";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1e783e50-9616-4650-a5fa-ba697799b56d/id-preview-3eea0366--bbdf9a04-5568-4f9c-b017-d722b724feb1.lovable.app-1778761556580.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mobile Tire Service & 24/7 Roadside Assistance Hampton Roads, VA | FleetCare Solutions" },
      { name: "description", content: "FleetCare Solutions LLC offers 24/7 mobile tire repair, mounting, balancing, jump starts, gas delivery & lockout service across Hampton Roads, VA. We come to you — call (948) 888-6444." },
      { name: "keywords", content: "mobile tire service, roadside assistance, flat tire repair, mobile tire repair Hampton Roads, 24/7 tire service Virginia Beach, jump start service Norfolk, tire mounting balancing, lockout service, gas delivery" },
      { property: "og:title", content: "FleetCare Solutions — 24/7 Mobile Tire & Roadside Assistance in Hampton Roads, VA" },
      { property: "og:description", content: "Fast, professional mobile tire repair and roadside assistance across Hampton Roads, Virginia. We come to you — 24 hours a day." },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "FleetCare Solutions mobile tire service van" },
      { name: "twitter:title", content: "FleetCare Solutions — 24/7 Mobile Tire & Roadside Assistance" },
      { name: "twitter:description", content: "Mobile tire repair and roadside help across Hampton Roads, Virginia. We come to you — 24/7." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
    ],
  }),
  component: Landing,
});

const PHONE = "(948) 888-6444";
const TEL = "tel:+19488886444";
const WA = "https://api.whatsapp.com/send?phone=19488886444&text=Hi%20FleetCare%2C%20I%20need%20roadside%20assistance.";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: CircleDot, title: "Tire Sales", desc: "Quality tires from trusted brands at fair, transparent prices." },
  { icon: Disc3, title: "Mounting & Balancing", desc: "Precision mounting and balancing on-site, done right." },
  { icon: RotateCw, title: "Tire Rotation", desc: "Extend tire life and improve handling with regular rotation." },
  { icon: Wrench, title: "Tire Repairs", desc: "Puncture repair and flat tire solutions wherever you are." },
  { icon: BatteryCharging, title: "Jump Starts", desc: "Dead battery? We'll get you back on the road fast." },
  { icon: Fuel, title: "Gas Delivery", desc: "Out of fuel? We deliver gas straight to your vehicle." },
  { icon: KeyRound, title: "Lockout Service", desc: "Locked out? Our team will get you back in safely." },
];

const WHY = [
  { icon: Clock, title: "24/7 Availability", desc: "Available anytime, anywhere you need us — day or night." },
  { icon: MapPin, title: "Mobile Service", desc: "We come to your location — home, work, or roadside." },
  { icon: Users, title: "Experienced Team", desc: "Skilled professionals with the right tools for every job." },
  { icon: Heart, title: "Customer First", desc: "Your safety and satisfaction are always our top priority." },
];

const PRICING = [
  { title: "Tire Repair", items: ["Flat Tire Repair", "Plug Patch", "Valve Replacement"], price: 25 },
  { title: "Mount & Balance", items: ["Mounting", "Balancing", "New Valve"], price: 50, featured: true },
  { title: "Tire Rotation", items: ["Rotate All 4 Tires", "Inspection", "Pressure Check"], price: 20 },
  { title: "Other Services", items: ["Jump Starts", "Gas Delivery", "Lockout Service"], price: 30 },
];

const AREAS = ["Chesapeake", "Virginia Beach", "Norfolk", "Suffolk", "Newport News", "Portsmouth", "Hampton"];

const TESTIMONIALS = [
  { quote: "Great service! They arrived quickly and got me back on the road in no time. Very professional and friendly. Highly recommended!", name: "Jason R.", role: "Chesapeake, VA" },
  { quote: "Called them at 11pm with a flat tire. They were there in 30 minutes and had me rolling again. Lifesavers.", name: "Marcus T.", role: "Norfolk, VA" },
  { quote: "Fair pricing, fast response, and genuinely friendly people. Exactly what you want in an emergency.", name: "Lisa M.", role: "Virginia Beach, VA" },
];

function Landing() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [tIndex, setTIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <img src={logo} alt="FleetCare Solutions logo" className="h-10 w-10 lg:h-11 lg:w-11 rounded-md object-cover" />
            <div className="leading-tight">
              <div className="text-[15px] lg:text-base font-extrabold tracking-tight text-primary">FLEETCARE</div>
              <div className="text-[9px] lg:text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">SOLUTIONS LLC</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map(n => (
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
            <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="lg:hidden p-2 -mr-2 text-primary">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="flex flex-col px-6 py-4">
              {NAV.map(n => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-sm font-semibold text-foreground/80 hover:text-primary border-b border-border last:border-0">
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative bg-hero-gradient text-white overflow-hidden pt-28 lg:pt-32 pb-20 lg:pb-28">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.82 0.16 85 / 0.4), transparent 50%)"}} />
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
              <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-6 py-3.5 rounded-md font-bold btn-press hover:bg-white/10">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative fade-up">
            <div className="absolute -inset-6 bg-accent-gold/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-premium">
              <img src={heroVan} alt="FleetCare Solutions mobile tire service van providing 24/7 roadside assistance in Hampton Roads, Virginia" width={1280} height={896} loading="eager" fetchPriority="high" className="w-full h-auto" />
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

      {/* SERVICES */}
      <section id="services" className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold tracking-[0.2em] text-accent-gold">WHAT WE DO</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-primary">Our Services</h2>
            <p className="mt-4 text-muted-foreground">Professional mobile tire & roadside services delivered wherever you need them.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map(s => (
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

      {/* WHY */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold tracking-[0.2em] text-accent-gold">WHY US</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-primary">Why Choose FleetCare Solutions?</h2>
            <p className="mt-4 text-muted-foreground">Trusted by drivers across Hampton Roads for fast, honest, expert service.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map(w => (
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

      {/* PRICING */}
      <section id="pricing" className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold tracking-[0.2em] text-accent-gold">PRICING</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-primary">Transparent & Affordable</h2>
            <p className="mt-4 text-muted-foreground">Honest, upfront pricing with no surprises. Pay only for what you need.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRICING.map(p => (
              <div key={p.title} className={`card-hover relative bg-card border-2 rounded-2xl p-7 ${p.featured ? "border-accent-gold shadow-glow-gold" : "border-border"}`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-gold text-accent-gold-foreground text-[10px] font-black tracking-wider px-3 py-1 rounded-full">MOST POPULAR</div>
                )}
                <h3 className="text-lg font-bold text-primary">{p.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {p.items.map(i => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-gold flex-shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-[10px] font-bold tracking-widest text-muted-foreground">STARTING FROM</div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-primary">${p.price}</span>
                  </div>
                </div>
                <a href={TEL} className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-md text-sm font-bold btn-press hover:bg-primary-glow">
                  Book Service
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">* Prices may vary based on location and vehicle type.</p>
        </div>
      </section>

      {/* SERVICE AREA + EMERGENCY */}
      <section id="contact" className="py-20 lg:py-28 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
            <div className="text-xs font-bold tracking-[0.2em] text-accent-gold">SERVICE AREA</div>
            <h2 className="mt-3 text-2xl lg:text-3xl font-black text-primary">Proudly Serving Hampton Roads</h2>
            <p className="mt-4 text-muted-foreground">We cover all major cities across Hampton Roads, Virginia. Not sure if you're in our area? Just give us a call.</p>
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              {AREAS.map(a => (
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
              <a href={WA} target="_blank" rel="noopener" className="mt-3 w-full inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-6 py-3.5 rounded-2xl font-bold btn-press hover:bg-white/10">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] text-accent-gold">ABOUT US</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-primary">The Shop That Comes To You.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              FleetCare Solutions is a mobile tire service company dedicated to providing fast, reliable, and professional roadside assistance across Hampton Roads. We bring the shop to you — anytime, anywhere — so a flat tire or dead battery never has to derail your day.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "24/7", l: "Available" },
                { n: "30min", l: "Avg Response" },
                { n: "7+", l: "Cities Served" },
              ].map(s => (
                <div key={s.l} className="border-l-2 border-accent-gold pl-4">
                  <div className="text-2xl lg:text-3xl font-black text-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground font-medium">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
            <img src={heroVan} alt="FleetCare technician performing mobile tire repair on-site" width={1280} height={896} loading="lazy" className="relative rounded-2xl shadow-premium w-full h-auto" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold tracking-[0.2em] text-accent-gold">TESTIMONIALS</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-primary">What Our Customers Say</h2>
          <div className="mt-12 relative bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-premium">
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({length: 5}).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent-gold text-accent-gold" />
              ))}
            </div>
            <p className="text-lg lg:text-xl text-foreground leading-relaxed font-medium">
              "{TESTIMONIALS[tIndex].quote}"
            </p>
            <div className="mt-6">
              <div className="font-bold text-primary">{TESTIMONIALS[tIndex].name}</div>
              <div className="text-sm text-muted-foreground">{TESTIMONIALS[tIndex].role}</div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button onClick={() => setTIndex((tIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous" className="h-10 w-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setTIndex(i)} aria-label={`Testimonial ${i+1}`} className={`h-2 rounded-full transition-all ${i === tIndex ? "w-8 bg-accent-gold" : "w-2 bg-border"}`} />
                ))}
              </div>
              <button onClick={() => setTIndex((tIndex + 1) % TESTIMONIALS.length)} aria-label="Next" className="h-10 w-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
                {[Facebook, Instagram, Twitter].map((I, i) => (
                  <a key={i} href="#" aria-label="Social" className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent-gold hover:text-accent-gold-foreground flex items-center justify-center transition-colors">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-bold tracking-wider text-accent-gold">QUICK LINKS</div>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                {NAV.map(n => <li key={n.href}><a href={n.href} className="hover:text-accent-gold transition-colors">{n.label}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="text-sm font-bold tracking-wider text-accent-gold">CONTACT</div>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                <li><a href={TEL} className="flex items-center gap-2 hover:text-accent-gold"><Phone className="h-4 w-4" /> {PHONE}</a></li>
                <li><a href="mailto:info@fleetcaresolutions.com" className="flex items-center gap-2 hover:text-accent-gold"><Mail className="h-4 w-4" />info@fleetcaresolutions.com</a></li>
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
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-border p-3 flex gap-2 shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.15)]">
        <a href={TEL} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md font-bold btn-press">
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a href={WA} target="_blank" rel="noopener" className="flex-1 inline-flex items-center justify-center gap-2 bg-accent-gold text-accent-gold-foreground py-3 rounded-md font-bold btn-press">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
      <div className="lg:hidden h-20" />
    </div>
  );
}
