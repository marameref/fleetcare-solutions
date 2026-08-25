import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Pricing } from "@/sections/Pricing";
import { ServiceAreaCta } from "@/sections/ServiceAreaCta";
import { About } from "@/sections/About";
import { Testimonials } from "@/sections/Testimonials";

export default function App() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <ServiceAreaCta />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
