import Image from "next/image";
import { Fragment } from "react";

import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { Marquee } from "@/components/ui/Marquee";
import { MeaningfulIcon } from "@/components/ui/MeaningfulIcon";
import { RecovaChat } from "@/components/ui/RecovaChat";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { about } from "@/data/home";

/**
 * "Learn More About Aston and Our Mission" — collage panel on the left with a
 * testimonial ticker across its base, copy and figures on the right.
 */
export function About() {
  return (
    <section
      id="about"
      className="section-shell flex-col items-center gap-10 desktop:flex-row desktop:gap-[60px]"
    >
      <div className="relative aspect-[510/569] w-full overflow-hidden rounded-panel shadow-[0_17px_24px_0_rgba(178,178,178,0.08),0_0_0_6px_#ffffff] desktop:max-w-[510px] desktop:flex-1">
        <Image
          src="/images/backgrounds/about-us.jpg"
          alt=""
          fill
          sizes="(min-width: 1320px) 510px, 100vw"
          className="rounded-panel object-cover"
        />

        {/* RECOVA glyph badge */}
        <div className="absolute top-[5%] left-1/2 flex size-[92px] -translate-x-1/2 items-start justify-start rounded-pill bg-[rgba(6,92,245,0.12)] p-[10px]">
          <div className="relative flex size-[72px] items-center overflow-hidden rounded-pill p-4">
            <Image
              src="/images/backgrounds/about-icon-plate.svg"
              alt=""
              fill
              sizes="72px"
              className="rounded-pill object-cover"
            />
            <span
              aria-hidden
              className="absolute inset-0 rounded-pill shadow-[0_6px_8px_0_rgba(131,124,124,0.06),inset_0_2px_2px_0_#81b1fb,inset_2px_0_2px_0_#81b1fb]"
            />
            <span className="relative flex size-10 items-center justify-center rounded-pill bg-[#065cf5] text-[18px] font-bold text-white">
              R
            </span>
          </div>
        </div>

        {/* Recovery chat mockup, anchored to the bottom of the panel. */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center p-5">
          <RecovaChat />
        </div>

        {/* Mini-testimonial ticker along the base. */}
        <div className="absolute inset-x-0 bottom-[5%] z-20 h-[130px]">
          <Marquee gap={15} speed={30} fade={false}>
            {about.testimonials.map((item) => (
              <figure
                key={item.name}
                className="flex w-[290px] shrink-0 flex-col gap-2 rounded-card bg-surface/95 p-4 backdrop-blur-sm"
              >
                <figcaption className="flex items-center gap-2">
                  <Image
                    src={item.avatar}
                    alt=""
                    width={30}
                    height={30}
                    className="size-[30px] rounded-pill"
                  />
                  <span className="font-display text-[16px] leading-6 text-ink-800">
                    {item.name}
                  </span>
                  <span className="ml-auto flex items-center gap-0.5 text-amber-400" aria-label="Avaliação positiva">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <MeaningfulIcon key={star} name="star" size={14} className="size-3.5 fill-current" />
                    ))}
                  </span>
                </figcaption>
                <blockquote className="text-[15px] leading-[22.5px] text-ink-400">
                  {item.quote}
                </blockquote>
              </figure>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col items-start gap-8 desktop:gap-[50px]">
        <div className="flex w-full flex-col items-start gap-[30px]">
          <div className="flex w-full flex-col items-start gap-4">
            <SectionBadge {...about.badge} />
            <div className="flex flex-col items-start gap-[14px]">
              <h2 className="text-[32px] leading-[1.2] text-ink-900 tablet:text-[38px] desktop:text-[48px] desktop:leading-[57.6px]">
                {about.title}
              </h2>
              <p className="text-[16px] leading-6 text-ink-300 tablet:text-[18px] tablet:leading-[27px]">
                {about.description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-4">
            <Button href={about.primaryCta.href}>{about.primaryCta.label}</Button>
            <Button href={about.secondaryCta.href} variant="muted">
              {about.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-4">
          {about.stats.map((stat, index) => (
            <Fragment key={stat.label}>
              {index > 0 && (
                <div aria-hidden className="hidden h-[58px] w-px shrink-0 bg-line tablet:block" />
              )}
              <div className="flex flex-col items-start gap-1">
                <p className="flex items-center justify-center font-display text-[32px] leading-[1.2] text-ink-800 tablet:text-[38px] desktop:text-[46px] desktop:leading-[55.2px]">
                  {stat.from !== undefined && stat.to !== undefined ? (
                    <CountUp from={stat.from} to={stat.to} />
                  ) : (
                    stat.value
                  )}
                  <span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="text-[15px] leading-[22.5px] whitespace-nowrap text-ink-300 desktop:text-[18px] desktop:leading-[27px]">
                  {stat.label}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
