import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

/** 1px hairline divider used throughout the footer. */
function Divider({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`bg-line ${className}`} />;
}

export function Footer() {
  const { footer, logo, name, tagline } = siteConfig;

  return (
    <footer className="flex w-full justify-center bg-surface">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 px-4 pt-14 pb-10 tablet:gap-[60px] tablet:px-[30px] tablet:pt-20 desktop:px-0">
        {/* ---- Brand row ---- */}
        <div className="flex w-full flex-col items-start justify-between gap-6 tablet:flex-row tablet:items-center tablet:gap-4">
          <div className="flex items-center gap-4">
            <Link href="/#hero" aria-label={`${name} — home`}>
              <Image
                src={logo.footer}
                alt={name}
                width={130}
                height={54}
                className="h-[54px] w-[130px] object-contain"
              />
            </Link>
            <Divider className="hidden h-[25px] w-px tablet:block" />
            <p className="hidden text-[18px] leading-[27px] text-ink-250 tablet:block">
              {footer.copyright}
            </p>
          </div>
          <p className="font-display text-[18px] leading-[27px] text-ink-500">
            “{tagline}”
          </p>
          <p className="text-[18px] leading-[27px] text-ink-250 tablet:hidden">
            {footer.copyright}
          </p>
        </div>

        <Divider className="h-px w-full" />

        {/* ---- Link columns ---- */}
        <div className="flex w-full">
          <nav
            aria-label="Footer"
            className="grid w-full grid-cols-2 gap-8 tablet:flex tablet:justify-between"
          >
            {footer.columns.map((column) => (
              <div key={column.title} className="flex flex-col items-start gap-5">
                <h2 className="font-display text-[22px] leading-[33px] text-ink-500">
                  {column.title}
                </h2>
                <ul className="flex flex-col items-start gap-[10px]">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.href}`}>
                      <Link
                        href={link.href}
                        className="text-[18px] leading-[27px] text-ink-250 transition-colors duration-200 hover:text-ink-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* ---- Disclaimer ---- */}
        <div className="flex w-full flex-col items-center gap-10 border-t border-line pt-8">
          <p className="max-w-[902px] text-[16px] leading-[24px] text-ink-300 tablet:text-[18px] tablet:leading-[27px]">
            {footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
