import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageBackdrop } from "@/components/layout/PageBackdrop";
import { Pricing } from "@/components/sections/Pricing";
import { PricingTable } from "@/components/sections/PricingTable";
import { Testimonials } from "@/components/sections/Testimonials";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing",
    description: siteConfig.seo.defaultDescription,
    url: `${siteConfig.url}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <section className="relative flex w-full flex-col items-center gap-20 px-4 pt-[160px] pb-[10px] tablet:px-10 desktop:gap-[150px] desktop:px-0">
        <PageBackdrop />
        <div className="relative flex w-full justify-center">
          <Pricing />
        </div>
      </section>
      <main className="page-main">
        <PricingTable />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
