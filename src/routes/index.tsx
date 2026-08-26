import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { OG_IMAGE, SITE_URL } from "@/data/site";

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
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
  }),
  component: App,
});
