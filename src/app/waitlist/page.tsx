import Image from "next/image";
import type { Metadata } from "next";

import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { siteConfig } from "@/config/site";
import { waitlistPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Waitlist",
  description:
    "Join our waitlist to secure your spot and be the first to know when our courses become available!",
  alternates: { canonical: "/waitlist" },
  openGraph: {
    title: "Waitlist",
    description:
      "Join our waitlist to secure your spot and be the first to know when our courses become available!",
    url: `${siteConfig.url}/waitlist`,
  },
};

/**
 * Standalone page — the original has no header or footer here, so the visitor
 * stays focused on the single field.
 */
export default function WaitlistPage() {
  return (
    <main className="relative flex w-full flex-col items-center justify-center gap-12 overflow-hidden px-4 py-20 desktop:gap-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[811px]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(233, 243, 250) 0%, rgb(240, 247, 252) 86.1396%, rgb(246, 247, 249) 100%)",
        }}
      />

      <section className="relative flex w-full max-w-[835px] flex-col items-center gap-[30px]">
        {/* Concentric rings around the Aston glyph. */}
        <div className="relative flex size-32 items-center justify-center">
          <Image
            src="/images/backgrounds/waitlist-ring.svg"
            alt=""
            width={128}
            height={128}
            className="absolute size-32"
          />
          <Image
            src="/images/backgrounds/waitlist-ring.svg"
            alt=""
            width={97}
            height={97}
            className="absolute size-[97px]"
          />
          <div className="relative flex size-[73px] items-center justify-center overflow-hidden rounded-pill p-[14px]">
            <Image
              src="/images/backgrounds/whats-in-logo-ring.svg"
              alt=""
              fill
              sizes="73px"
              className="rounded-pill object-cover"
            />
            <span
              aria-hidden
              className="absolute inset-0 rounded-pill shadow-[inset_0_2.6px_2.6px_0_#81b1fb,inset_2.6px_0_2.6px_0_#81b1fb,0_7.8px_10.4px_0_rgba(131,124,124,0.06)]"
            />
            <span className="relative flex size-[45px] items-center justify-center rounded-pill bg-[#065cf5] text-[22px] font-bold text-white">
              R
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-5 text-center desktop:px-[60px]">
          <h1 className="text-[36px] leading-[1.2] font-semibold text-ink-800 tablet:text-[48px] desktop:text-[64px] desktop:leading-[76.8px]">
            {waitlistPage.title}
          </h1>
          <p className="text-[16px] leading-6 text-ink-400 tablet:text-[18px] tablet:leading-[27px]">
            {waitlistPage.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-8 desktop:gap-[50px]">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <WaitlistForm />
            <p className="flex items-center justify-center gap-1 text-center text-[16px] leading-6 text-ink-200">
              <Image
                src="/images/icons/info.svg"
                alt=""
                width={18}
                height={18}
                className="size-[18px]"
              />
              <span>
                {waitlistPage.note}
                <span className="font-normal">{waitlistPage.noteEmphasis}</span>
              </span>
            </p>
          </div>

        </div>
      </section>

      <section className="relative flex w-full max-w-[1100px] flex-col items-center gap-[7px]">
        <div className="flex items-center justify-center rounded-t-card bg-surface px-5 pt-[14px] pb-3">
          <p className="text-[16px] leading-[19.8px] text-ink-400 tablet:text-[18px]">
            {waitlistPage.videoLabel}
          </p>
        </div>
        <div className="relative w-full overflow-hidden rounded-panel shadow-[var(--shadow-ring-6)]">
          <Image
            src={waitlistPage.videoThumbnail}
            alt="A walkthrough of the Aston platform"
            width={1100}
            height={577}
            className="h-auto w-full object-cover"
          />
          <span className="absolute inset-0 bg-black/20" />
          <span className="absolute top-1/2 left-1/2 flex size-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Image src="/images/icons/play-button.svg" alt="" width={52} height={52} />
          </span>
        </div>
      </section>
    </main>
  );
}
