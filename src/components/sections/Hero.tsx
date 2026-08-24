"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { RecovaDashboard } from "@/components/ui/RecovaDashboard";
import { siteConfig } from "@/config/site";
import { hero } from "@/data/home";
import { heroVariants, transitions, widgetColumnVariants } from "@/lib/motion";

/** One floating artwork tile in the hero's side columns. */
function Widget({
  src,
  w,
  h,
  top,
  left,
  rotate,
  radius,
  shadow,
}: {
  src: string;
  w: number;
  h: number;
  top: number;
  left: number;
  rotate: number;
  radius: number;
  shadow: string;
}) {
  return (
    <div
      className="absolute overflow-hidden"
      style={{
        width: w,
        height: h,
        top,
        left,
        borderRadius: radius,
        transform: `rotate(${rotate}deg)`,
        boxShadow: shadow,
      }}
    >
      <Image
        src={src}
        alt=""
        width={w}
        height={h}
        className="size-full object-cover"
        style={{ borderRadius: radius }}
      />
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  // Framer animates these once on load; with reduced motion we render the
  // resolved state directly rather than a shortened animation.
  const animate = reduceMotion ? undefined : "visible";
  const initial = reduceMotion ? "visible" : "hidden";

  // The widget columns slide a shorter distance on tablet (±111px vs ±201px),
  // matching the project's per-breakpoint override.
  const [widgetTravel, setWidgetTravel] = useState(201);
  useEffect(() => {
    setWidgetTravel(window.matchMedia("(min-width: 1320px)").matches ? 201 : 111);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex w-full flex-col items-center gap-[50px] overflow-hidden px-4 pt-[160px] pb-[10px] tablet:gap-[70px] tablet:px-10 desktop:gap-[90px] desktop:px-0"
    >
      {/* -------------------------------------------------- decorative layer */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[725px]">
        {/* Soft brand-blue radial glow behind the dashboard for depth. */}
        <div
          className="absolute top-[380px] left-1/2 h-[420px] w-[900px] max-w-[90vw] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(6,92,245,0.10) 0%, rgba(6,92,245,0.04) 45%, transparent 70%)",
          }}
        />
        {/* Subtle data grid behind the glow for texture. */}
        <div
          className="absolute top-[300px] left-1/2 h-[520px] w-[1100px] max-w-[95vw] -translate-x-1/2 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,92,245,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,92,245,0.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <motion.div
          variants={heroVariants.lightRayLeft}
          initial={initial}
          animate={animate}
          transition={transitions.lightRay}
          className="absolute top-0 left-0 h-[462px] w-[345px] desktop:h-[725px] desktop:w-[541px]"
        >
          <Image
            src="/images/backgrounds/hero-light-ray-left.jpg"
            alt=""
            fill
            sizes="(min-width: 1320px) 541px, 345px"
            className="object-contain"
            priority
          />
        </motion.div>
        <motion.div
          variants={heroVariants.lightRayRight}
          initial={initial}
          animate={animate}
          transition={transitions.lightRay}
          className="absolute top-0 right-0 h-[462px] w-[345px] desktop:h-[725px] desktop:w-[541px]"
        >
          <Image
            src="/images/backgrounds/hero-light-ray-right.jpg"
            alt=""
            fill
            sizes="(min-width: 1320px) 541px, 345px"
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Widget columns are hidden on phone, matching the Framer variants. */}
        <motion.div
          variants={widgetColumnVariants("left", widgetTravel)}
          initial={initial}
          animate={animate}
          transition={transitions.widgetColumn}
          className="absolute top-0 -left-[90px] hidden h-[725px] w-[217px] tablet:block desktop:left-0"
        >
          {hero.widgets.left.map((widget) => (
            <Widget key={widget.src} {...widget} shadow="var(--shadow-widget)" />
          ))}
          <div className="absolute inset-x-0 top-[300px] h-[345px] bg-linear-to-b from-transparent to-page" />
        </motion.div>

        <motion.div
          variants={widgetColumnVariants("right", widgetTravel)}
          initial={initial}
          animate={animate}
          transition={transitions.widgetColumn}
          className="absolute top-0 -right-[90px] hidden h-[725px] w-[201px] tablet:block desktop:right-0"
        >
          {hero.widgets.right.map((widget) => (
            <Widget key={widget.src} {...widget} shadow="var(--shadow-widget-alt)" />
          ))}
          <div className="absolute top-[300px] right-[-16px] left-0 h-[345px] bg-linear-to-b from-transparent to-page" />
        </motion.div>
      </div>

      {/* ------------------------------------------------------------ content */}
      <div className="relative flex w-full max-w-[1101px] flex-col items-center gap-[50px]">
        <div className="relative flex w-full flex-col items-center gap-10 desktop:px-20">
          <motion.div
            aria-hidden
            variants={heroVariants.riseIn}
            initial={initial}
            animate={animate}
            transition={transitions.grid}
            className="pointer-events-none absolute top-[256px] left-1/2 z-0 h-[85px] w-[549px] -translate-x-1/2 tablet:h-[223px] tablet:w-[1441px]"
          >
            <Image
              src="/images/backgrounds/hero-grid.svg"
              alt=""
              fill
              sizes="(min-width: 810px) 1441px, 549px"
              className="object-cover"
            />
          </motion.div>

          <div className="relative flex w-full max-w-[941px] flex-col items-center gap-4">
            <motion.div
              variants={heroVariants.badge}
              initial={initial}
              animate={animate}
              transition={transitions.badge}
              className="flex items-center gap-[6px] overflow-hidden rounded-pill bg-surface py-2 pr-[14px] pl-2 shadow-[var(--shadow-badge)]"
            >
              <span className="relative flex h-[26px] w-[60px] shrink-0">
                {hero.badge.avatars.map((avatar, index) => (
                  <Image
                    key={avatar}
                    src={avatar}
                    alt=""
                    width={26}
                    height={26}
                    className="absolute top-0 size-[26px] rounded-pill shadow-[0_0_0_2px_#ffffff]"
                    style={{ left: index * 15 }}
                  />
                ))}
              </span>
              <span className="text-[16px] leading-6 text-ink-600">
                {hero.badge.text}
              </span>
            </motion.div>

            <div className="flex w-full flex-col items-center justify-center gap-5 text-center">
              <motion.h1
                variants={heroVariants.heading}
                initial={initial}
                animate={animate}
                transition={transitions.heading}
                className="text-[40px] leading-[1.15] font-semibold text-ink-800 tablet:text-[56px] desktop:text-[72px] desktop:leading-[82px]"
              >
                {hero.title}
              </motion.h1>
              <motion.p
                variants={heroVariants.riseIn}
                initial={initial}
                animate={animate}
                transition={transitions.paragraph}
                className="max-w-[620px] text-[17px] leading-[26px] font-medium text-ink-500 tablet:text-[19px] tablet:leading-[29px]"
              >
                {hero.description}
              </motion.p>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center gap-4">
            <motion.div
              variants={heroVariants.riseIn}
              initial={initial}
              animate={animate}
              transition={transitions.button}
              className="flex flex-col items-center gap-3 tablet:flex-row"
            >
              <Button
                href={siteConfig.heroCta.href}
                className="h-[58px] px-6 py-4 text-[17px] leading-[25.5px]"
              >
                {siteConfig.heroCta.label}
              </Button>
              <Link
                href="/contact"
                className="group flex items-center gap-1.5 text-[16px] leading-6 font-semibold text-ink-500 transition-colors duration-200 hover:text-ink-800"
              >
                or book a demo
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
            </motion.div>
            <motion.div
              variants={heroVariants.riseIn}
              initial={initial}
              animate={animate}
              transition={transitions.note}
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            >
              <span className="flex items-center gap-1.5 text-[14px] leading-6 text-ink-400">
                <span className="flex size-4 items-center justify-center rounded-full bg-[#16a34a]/15 text-[10px] text-[#16a34a]">✓</span>
                Free 30-day pilot
              </span>
              <span className="flex items-center gap-1.5 text-[14px] leading-6 text-ink-400">
                <span className="flex size-4 items-center justify-center rounded-full bg-[#16a34a]/15 text-[10px] text-[#16a34a]">✓</span>
                No credit card
              </span>
              <span className="flex items-center gap-1.5 text-[14px] leading-6 text-ink-400">
                <span className="flex size-4 items-center justify-center rounded-full bg-[#16a34a]/15 text-[10px] text-[#16a34a]">✓</span>
                5-minute setup
              </span>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={heroVariants.visual}
          initial={initial}
          animate={animate}
          transition={transitions.visual}
          className="relative w-full"
        >
          <div className="relative w-full overflow-hidden rounded-panel border border-white shadow-[var(--shadow-ring-6)]">
            <RecovaDashboard />
          </div>

          {/* ---- floating depth layer: live-rescue toast + recovered-sale card ---- */}
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden tablet:block">
            {/* atmospheric depth card — top left, blurred to sit behind the dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="absolute -top-4 -left-4 flex items-center gap-2.5 rounded-card border border-line bg-surface/80 p-2.5 backdrop-blur-sm"
              style={{ filter: "blur(1.5px)", opacity: 0.7 }}
            >
              <span className="flex size-8 items-center justify-center rounded-[9px] bg-[#16a34a]/15 text-[#16a34a]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-[12px] leading-4 font-semibold text-ink-800">+18.6% conversion</span>
                <span className="text-[11px] leading-3.5 text-ink-400">from search recovery</span>
              </span>
            </motion.div>

            {/* live rescue toast — top right */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute top-6 -right-3 flex items-center gap-3 rounded-card border border-line bg-surface p-3 shadow-[0_24px_50px_-12px_rgba(6,53,93,0.45),0_4px_12px_-4px_rgba(6,53,93,0.15)]"
            >
              <span className="flex size-9 items-center justify-center rounded-[10px] bg-[#e8f1ff] text-[#065cf5]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-[13px] leading-5 font-semibold text-ink-800">Rev recovered a sale</span>
                <span className="text-[12px] leading-4 text-ink-400">“running shoe” → $549.90</span>
              </span>
            </motion.div>

            {/* recovered-sale card — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-card border border-line bg-surface p-3 shadow-[0_24px_50px_-12px_rgba(6,53,93,0.45),0_4px_12px_-4px_rgba(6,53,93,0.15)]"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-[#16a34a]/15 text-[#16a34a]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-[13px] leading-5 font-semibold text-ink-800">Sale recovered</span>
                <span className="text-[12px] leading-4 text-ink-400">+$549.90 · attributed to RECOVA</span>
              </span>
            </motion.div>

            {/* live badge — bottom right, balances the composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              className="absolute -right-2 -bottom-3 flex items-center gap-1.5 rounded-pill border border-line bg-surface px-3 py-1.5 shadow-[0_16px_32px_-10px_rgba(6,53,93,0.35)]"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#16a34a] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#16a34a]" />
              </span>
              <span className="text-[12px] leading-4 font-semibold text-ink-700">AO VIVO</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ------------------------------------------------------ trust logos */}
      <div className="relative flex w-full max-w-[1101px] flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-[30px]">
          <p className="text-center text-[16px] leading-6 text-ink-600 tablet:text-[18px] tablet:leading-[27px]">
            {hero.trustedText}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-[14px]">
            {hero.logos.map((logo, index) => (
              <div key={logo} className="flex items-center gap-[14px]">
                {index > 0 && <div aria-hidden className="h-6 w-px bg-line" />}
                <Image
                  src={logo}
                  alt=""
                  width={126}
                  height={42}
                  className="h-[42px] w-[126px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
