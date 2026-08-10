import { Instrument_Sans, Manrope } from "next/font/google";
import localFont from "next/font/local";

/** Body / UI typeface. */
export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
});

/** Used only for the numeric rating chips in the hero. */
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

/**
 * Display typeface. Self-hosted from Fontshare — the same weights the Framer
 * project loads. See README "Changing fonts" for licensing notes.
 */
export const clashGrotesk = localFont({
  src: [
    { path: "../../public/fonts/ClashGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/ClashGrotesk-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/ClashGrotesk-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash-grotesk",
  display: "swap",
});
