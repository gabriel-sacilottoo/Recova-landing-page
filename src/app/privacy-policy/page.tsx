import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageBackdrop } from "@/components/layout/PageBackdrop";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { siteConfig } from "@/config/site";
import { privacyPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "We collect and protect your personal information to enhance your experience, process transactions, and communicate with you, while ensuring your privacy is respected and your data is secure.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy",
    description:
      "We collect and protect your personal information to enhance your experience, process transactions, and communicate with you, while ensuring your privacy is respected and your data is secure.",
    url: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="page-main">
        <PageBackdrop />

        <section className="relative flex w-full max-w-[796px] flex-col items-start gap-12 desktop:gap-20">
          <div className="flex w-full flex-col items-center gap-4">
            <SectionBadge {...privacyPage.badge} />
            <div className="flex w-full flex-col items-center justify-center gap-[14px] text-center">
              <h1 className="text-[36px] leading-[1.2] font-semibold text-ink-900 tablet:text-[48px] desktop:text-[64px] desktop:leading-[76.8px]">
                {privacyPage.title}
              </h1>
              <p className="text-[16px] leading-6 text-ink-400 tablet:text-[18px] tablet:leading-[27px]">
                {privacyPage.description}
              </p>
              <p className="text-[16px] leading-6 text-ink-200">
                {privacyPage.lastUpdated}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-10">
            {privacyPage.sections.map((section) => (
              <div key={section.heading} className="flex w-full flex-col items-start gap-3">
                <h2 className="font-display text-[22px] leading-[33px] text-ink-800 tablet:text-[24px] tablet:leading-9">
                  {section.heading}
                </h2>
                {section.body && (
                  <p className="text-[16px] leading-6 text-ink-300 tablet:text-[18px] tablet:leading-[27px]">
                    {section.body}
                  </p>
                )}
                {section.items && (
                  <ul className="flex list-disc flex-col gap-1 pl-5 text-[16px] leading-[27px] text-ink-300 tablet:text-[18px]">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
