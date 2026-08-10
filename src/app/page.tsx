import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Comparison } from "@/components/sections/Comparison";
import { CoreFeatures } from "@/components/sections/CoreFeatures";
import { DownloadApp } from "@/components/sections/DownloadApp";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { MobileApp } from "@/components/sections/MobileApp";
import { Motto } from "@/components/sections/Motto";
import { Numbers } from "@/components/sections/Numbers";
import { PlatformHighlight } from "@/components/sections/PlatformHighlight";
import { PowerfulFeatures } from "@/components/sections/PowerfulFeatures";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatsIn } from "@/components/sections/WhatsIn";
import { WhoCanUse } from "@/components/sections/WhoCanUse";

/**
 * Section order mirrors the original Framer page exactly, minus the blog
 * preview that sat between Process and FAQ. The 200px rhythm between the
 * remaining sections is unchanged, so removing it leaves no gap.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <main className="page-main">
        <Motto />
        <WhatsIn />
        <PlatformHighlight />
        <CoreFeatures />
        <Numbers />
        <PowerfulFeatures />
        <MobileApp />
        <DownloadApp />
        <Pricing />
        <Comparison />
        <About />
        <WhoCanUse />
        <Team />
        <Process />
        <Faq />
        <FinalCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
