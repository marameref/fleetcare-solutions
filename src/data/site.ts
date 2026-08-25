import {
  CircleDot, Disc3, RotateCw, Wrench, Gauge, BatteryCharging, Fuel, KeyRound,
  Clock, MapPin, Users, Heart, type LucideIcon,
} from "lucide-react";

export const SITE_URL = "https://fleetcare-express-site.lovable.app";

export const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1e783e50-9616-4650-a5fa-ba697799b56d/id-preview-3eea0366--bbdf9a04-5568-4f9c-b017-d722b724feb1.lovable.app-1778761556580.png";

export const PHONE = "(948) 888-6444";
export const TEL = "tel:+19488886444";
export const SMS = "sms:+19488886444";
export const WA =
  "https://api.whatsapp.com/send?phone=19488886444&text=Hi%20FleetCare%2C%20I%20need%20roadside%20assistance.";
export const EMAIL = "mailto:info@fleetcaresolutions.com";
export const EMAIL_LABEL = "info@fleetcaresolutions.com";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export interface CardItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const SERVICES: CardItem[] = [
  { icon: CircleDot, title: "Tire Sales", desc: "Quality tires from trusted brands at fair, transparent prices." },
  { icon: Disc3, title: "Mounting & Balancing", desc: "Precision mounting and balancing on-site, done right." },
  { icon: RotateCw, title: "Tire Rotation", desc: "Extend tire life and improve handling with regular rotation." },
  { icon: Wrench, title: "Tire Repairs", desc: "Puncture repair and flat tire solutions wherever you are." },
  { icon: Gauge, title: "TPMS", desc: "Tire Pressure Monitoring System diagnostics, sensor replacement, and reprogramming for safer driving." },
  { icon: BatteryCharging, title: "Jump Starts", desc: "Dead battery? We'll get you back on the road fast." },
  { icon: Fuel, title: "Gas Delivery", desc: "Out of fuel? We deliver gas straight to your vehicle." },
  { icon: KeyRound, title: "Lockout Service", desc: "Locked out? Our team will get you back in safely." },
];

export const WHY: CardItem[] = [
  { icon: Clock, title: "24/7 Availability", desc: "Available anytime, anywhere you need us — day or night." },
  { icon: MapPin, title: "Mobile Service", desc: "We come to your location — home, work, or roadside." },
  { icon: Users, title: "Experienced Team", desc: "Skilled professionals with the right tools for every job." },
  { icon: Heart, title: "Customer First", desc: "Your safety and satisfaction are always our top priority." },
];

export const AREAS = [
  "Chesapeake", "Virginia Beach", "Norfolk", "Suffolk", "Newport News", "Portsmouth", "Hampton",
];

export const STATS = [
  { n: "24/7", l: "Available" },
  { n: "30min", l: "Avg Response" },
  { n: "7+", l: "Cities Served" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Great service! They arrived quickly and got me back on the road in no time. Very professional and friendly. Highly recommended!", name: "Jason R.", role: "Chesapeake, VA" },
  { quote: "Called them at 11pm with a flat tire. They were there in 30 minutes and had me rolling again. Lifesavers.", name: "Marcus T.", role: "Norfolk, VA" },
  { quote: "Fair pricing, fast response, and genuinely friendly people. Exactly what you want in an emergency.", name: "Lisa M.", role: "Virginia Beach, VA" },
];

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${SITE_URL}/#business`,
  name: "FleetCare Solutions LLC",
  description:
    "24/7 mobile tire service and roadside assistance across Hampton Roads, Virginia. Flat tire repair, mounting & balancing, jump starts, gas delivery, and lockout service — we come to you.",
  url: SITE_URL,
  telephone: "+1-948-888-6444",
  priceRange: "$$",
  image: OG_IMAGE,
  address: {
    "@type": "PostalAddress",
    addressRegion: "VA",
    addressCountry: "US",
    addressLocality: "Hampton Roads",
  },
  areaServed: [
    "Chesapeake, VA", "Virginia Beach, VA", "Norfolk, VA",
    "Suffolk, VA", "Newport News, VA", "Portsmouth, VA", "Hampton, VA",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [],
};
