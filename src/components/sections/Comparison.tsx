import Image from "next/image";

import { MeaningfulIcon } from "@/components/ui/MeaningfulIcon";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { comparison } from "@/data/home";

function Row({ label, active }: { label: string; active: boolean }) {
  return (
    <li className="flex items-center gap-[6px]">
      <MeaningfulIcon name={active ? "check" : "close"} size={24} className={`size-6 shrink-0 ${active ? "text-accent" : "text-ink-300"}`} />
      {/* Both columns use the same ink; only the icon differs in the source. */}
      <span className="text-[16px] leading-6 text-ink-600 tablet:text-[18px] tablet:leading-[27px]">
        {label}
      </span>
    </li>
  );
}

/** "Choosing Aston Over Others" — two panels side by side. */
export function Comparison() {
  return (
    <section
      id="comparison"
      className="flex w-full max-w-[995px] flex-col items-start gap-10 desktop:gap-20"
    >
      <div className="flex w-full flex-col items-center gap-4">
        <SectionBadge {...comparison.badge} />
        <h2 className="text-center text-[32px] leading-[1.2] text-ink-900 tablet:text-[42px] desktop:text-[56px] desktop:leading-[72.8px]">
          {comparison.title}
        </h2>
      </div>

      <div className="flex w-full flex-col items-center gap-[30px] desktop:flex-row">
        {/* ---- other platforms ---- */}
        <div className="relative flex w-full flex-1 flex-col items-start gap-[14px] overflow-hidden hairline rounded-panel p-5 shadow-[0_0_0_5px_#ffffff]">
          <Image
            src="/images/backgrounds/comparison-others.svg"
            alt=""
            fill
            sizes="(min-width: 1320px) 482px, 100vw"
            className="rounded-panel object-cover"
          />
          <div className="relative flex w-full items-center justify-center px-[10px] py-[14px]">
            <p className="font-display text-[24px] leading-[28.8px] text-ink-800">
              {comparison.othersLabel}
            </p>
          </div>
          <ul className="relative flex w-full flex-col items-start gap-5 overflow-hidden hairline rounded-panel bg-surface p-5 shadow-[0_2px_6px_0_rgba(182,182,182,0.1)]">
            {comparison.rows.map((row) => (
              <Row key={row.others} label={row.others} active={false} />
            ))}
          </ul>
        </div>

        {/* ---- Aston ---- */}
        <div className="relative flex w-full flex-1 flex-col items-start gap-[14px] overflow-hidden rounded-panel p-5 shadow-[0_0_0_5px_#ffffff]">
          <Image
            src="/images/backgrounds/comparison-aston.jpg"
            alt=""
            fill
            sizes="(min-width: 1320px) 482px, 100vw"
            className="rounded-panel object-cover"
          />
          <div className="relative flex w-full items-center justify-center px-[10px]">
            <Image
              src="/images/logos/recova-wordmark.svg"
              alt="RECOVA"
              width={160}
              height={48}
              className="h-12 w-40 object-contain"
            />
          </div>
          <ul className="relative flex w-full flex-col items-start gap-5 overflow-hidden rounded-panel bg-surface p-5 shadow-[0_2px_6px_0_rgba(182,182,182,0.1)]">
            {comparison.rows.map((row) => (
              <Row key={row.aston} label={row.aston} active />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
