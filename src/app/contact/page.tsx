import Image from "next/image";
import type { Metadata } from "next";
import { Fragment } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageBackdrop } from "@/components/layout/PageBackdrop";
import { Faq } from "@/components/sections/Faq";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { siteConfig } from "@/config/site";
import { contactPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Connect with us effortlessly using the contact form, or find our contact details below. We look forward to hearing from you!",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Get in Touch",
    description:
      "Connect with us effortlessly using the contact form, or find our contact details below. We look forward to hearing from you!",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="page-main">
        <PageBackdrop />

        <section className="relative flex w-full max-w-[997px] flex-col items-end gap-10 desktop:gap-20">
          <div className="flex w-full flex-col items-center gap-4">
            <SectionBadge {...contactPage.badge} />
            <div className="flex w-full max-w-[697px] flex-col items-center justify-center gap-[14px] text-center">
              <h1 className="text-[36px] leading-[1.2] font-semibold text-ink-800 tablet:text-[48px] desktop:text-[64px] desktop:leading-[76.8px]">
                {contactPage.title}
              </h1>
              <p className="text-[16px] leading-6 text-ink-400 tablet:text-[18px] tablet:leading-[27px]">
                {contactPage.description}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-10 desktop:gap-[70px]">
            <div className="relative flex w-full items-start justify-center">
              <Image
                src="/images/backgrounds/contact-ui-left.jpg"
                alt=""
                width={348}
                height={557}
                aria-hidden
                className="pointer-events-none absolute top-0 left-0 hidden h-full w-[348px] object-contain desktop:block"
              />
              <Image
                src="/images/backgrounds/contact-ui-right.png"
                alt=""
                width={349}
                height={557}
                aria-hidden
                className="pointer-events-none absolute top-0 right-0 hidden h-full w-[349px] object-contain desktop:block"
              />
              <ContactForm />
            </div>

            <div className="flex w-full flex-col items-center gap-10">
              <div className="flex w-full items-center gap-3">
                <div aria-hidden className="h-px flex-1 bg-line" />
                <span className="text-[18px] leading-[27px] text-ink-700">
                  {contactPage.dividerLabel}
                </span>
                <div aria-hidden className="h-px flex-1 bg-line" />
              </div>

              <div className="flex w-full flex-col items-center gap-6 tablet:flex-row tablet:gap-[30px]">
                {contactPage.channels.map((channel, index) => (
                  <Fragment key={channel.label}>
                    {index > 0 && (
                      <div aria-hidden className="hidden h-[42px] w-px bg-line tablet:block" />
                    )}
                    <a
                      href={channel.href}
                      className="flex flex-1 items-center gap-4 rounded-card bg-surface-muted py-4 pr-5 pl-4 shadow-[var(--shadow-ring)] transition-colors duration-200 hover:bg-surface-subtle"
                    >
                      <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[12px] bg-surface">
                        <Image
                          src={channel.icon}
                          alt=""
                          width={25}
                          height={24}
                          className="size-6"
                        />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[16px] leading-6 text-ink-300">
                          {channel.label}
                        </span>
                        <span className="font-display text-[18px] leading-[27px] text-ink-800">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
