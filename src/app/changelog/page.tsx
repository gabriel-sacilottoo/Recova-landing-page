import { Fragment } from "react";
import Image from "next/image";
import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageBackdrop } from "@/components/layout/PageBackdrop";
import { ChangelogRail } from "@/components/ui/ChangelogRail";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { siteConfig } from "@/config/site";
import { changelogPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Stay updated with our changelog, where we regularly document all new features, improvements, and bug fixes to keep you informed about the latest updates to our website.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    title: "Changelog",
    description:
      "Stay updated with our changelog, where we regularly document all new features, improvements, and bug fixes to keep you informed about the latest updates to our website.",
    url: `${siteConfig.url}/changelog`,
  },
};

export default function ChangelogPage() {
  return (
    <>
      <Header />
      <main className="page-main">
        <PageBackdrop grid />

        <section className="relative flex w-full max-w-[996px] flex-col items-end gap-12 desktop:gap-[100px]">
          <div className="flex w-full flex-col items-center gap-4">
            <SectionBadge {...changelogPage.badge} />
            <div className="flex w-full max-w-[596px] flex-col items-center justify-center gap-[14px] text-center">
              <h1 className="text-[36px] leading-[1.2] font-semibold text-ink-900 tablet:text-[48px] desktop:text-[64px] desktop:leading-[76.8px]">
                {changelogPage.title}
              </h1>
              <p className="text-[16px] leading-6 text-ink-400 tablet:text-[18px] tablet:leading-[27px]">
                {changelogPage.description}
              </p>
            </div>
          </div>

          {/* The rail runs down the far edge of the date column, so on phones
              the list is inset to leave room for it. */}
          <ol className="relative flex w-full flex-col items-start gap-[60px] pt-[60px] pl-[45px] tablet:pt-20 tablet:pl-0 desktop:pt-[100px]">
            <ChangelogRail />

            {changelogPage.entries.map((entry) => (
              <li
                key={`${entry.date}-${entry.title}`}
                className="flex w-full flex-col items-start gap-6 tablet:flex-row tablet:gap-10 desktop:gap-[50px]"
              >
                <div className="relative flex w-full shrink-0 items-start tablet:w-[199px]">
                  <time className="text-[18px] leading-[27px] text-ink-300">
                    {entry.date}
                  </time>
                  {/* Sits on the rail: hard left of the content on phones, at
                      the far end of the 199px date column from tablet up. */}
                  <span
                    data-rail-dot
                    aria-hidden
                    className="absolute top-0 -left-9 flex size-[15px] items-center justify-center rounded-pill bg-surface p-1 tablet:left-[174px]"
                  >
                    <span className="size-[7px] rounded-pill bg-marker" />
                  </span>
                </div>

                <article className="flex-1 pb-[50px] tablet:pb-20 desktop:pb-[100px]">
                  {/* Rich text: the source spaces these blocks with top margins
                      (20 after a paragraph, 40 before a subheading, 5 before a
                      list or image), not with a uniform gap. */}
                  <div className="w-full">
                    <h2 className="font-display text-[28px] leading-[30.8px] text-ink-900 tablet:text-[32px] tablet:leading-[35.2px] desktop:text-[34px] desktop:leading-[37.4px]">
                      {entry.title}
                    </h2>
                    {entry.blocks.map((block, index) => {
                      if (block.type === "paragraph") {
                        return (
                          <p
                            key={index}
                            className="mt-5 text-[17px] leading-[25.5px] text-ink-300 desktop:text-[18px] desktop:leading-[27px]"
                          >
                            {block.text.split("\n").map((line, lineIndex) => (
                              <Fragment key={lineIndex}>
                                {lineIndex > 0 && <br />}
                                {line}
                              </Fragment>
                            ))}
                            {/* An empty paragraph is a deliberate blank line,
                                so it still needs a line box. */}
                            {block.text === "" && <br />}
                          </p>
                        );
                      }
                      if (block.type === "subheading") {
                        return (
                          <h3
                            key={index}
                            className="mt-10 font-display text-[18px] leading-[27px] text-ink-800 tablet:text-[20px] tablet:leading-[30px] desktop:text-[22px] desktop:leading-[33px]"
                          >
                            {block.text}
                          </h3>
                        );
                      }
                      if (block.type === "list") {
                        return (
                          <ol
                            key={index}
                            className="rich-list mt-[5px] text-[17px] leading-[25.5px] text-ink-300 desktop:text-[18px] desktop:leading-[27px]"
                          >
                            {block.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ol>
                        );
                      }
                      return (
                        <Image
                          key={index}
                          src={block.src}
                          alt={block.alt}
                          width={block.width}
                          height={block.height}
                          className="mt-[5px] h-auto w-full rounded-card shadow-[0_0_0_6px_#ffffff,0_17px_24px_0_rgba(178,178,178,0.06)]"
                        />
                      );
                    })}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}
