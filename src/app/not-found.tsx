import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageBackdrop } from "@/components/layout/PageBackdrop";
import { Button } from "@/components/ui/Button";
import { notFoundPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="page-main min-h-[70vh]">
        <PageBackdrop grid />

        <section className="relative flex w-full max-w-[700px] flex-col items-center justify-center gap-6 text-center">
          <p className="font-display text-[96px] leading-[1] font-semibold text-accent tablet:text-[140px]">
            {notFoundPage.code}
          </p>
          <div className="flex flex-col items-center gap-[14px]">
            <h1 className="text-[32px] leading-[1.2] text-ink-900 tablet:text-[42px] desktop:text-[56px] desktop:leading-[72.8px]">
              {notFoundPage.title}
            </h1>
            <p className="text-[16px] leading-6 text-ink-400 tablet:text-[18px] tablet:leading-[27px]">
              {notFoundPage.description}
            </p>
          </div>
          <Button href={notFoundPage.ctaHref}>{notFoundPage.ctaLabel}</Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
