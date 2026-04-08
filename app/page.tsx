import { CtaBand } from "@/components/CtaBand";
import { FAQ } from "@/components/FAQ";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductPreview } from "@/components/ProductPreview";
import { ValueStrip } from "@/components/ValueStrip";
import { WhySection } from "@/components/WhySection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueStrip />
        <HowItWorks />
        <FeatureGrid />
        <ProductPreview />
        <WhySection />
        <CtaBand />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
