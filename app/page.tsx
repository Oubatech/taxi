import { AvailabilityBanner } from "@/components/availability-banner";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { CoverageArea } from "@/components/coverage-area";
import { WhyUs } from "@/components/why-us";
import { FAQ } from "@/components/faq";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";

export default function Home() {
  return (
    <>
      <AvailabilityBanner />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <CoverageArea />
        <WhyUs />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
