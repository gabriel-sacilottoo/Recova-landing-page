"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * RECOVA — recovery chat mockup.
 * Shows the Rev agent rescuing a sale in real time: the shopper's failed
 * search becomes a conversation that ends in a recovered purchase.
 *
 * Messages appear sequentially with a "typing…" indicator between turns,
 * so the mockup reads as a live conversation rather than a static print.
 */

const messages = [
  {
    from: "shopper",
    text: "looking for a running shoe, but found nothing",
    time: "now",
  },
  {
    from: "rev",
    text: "Got it! You want a running shoe. Let me find options with good cushioning and light weight. 🏃",
    time: "now",
  },
  {
    from: "rev",
    text: "I found 3 options that fit you:",
    time: "now",
  },
  {
    from: "product",
    text: "Nike Air Zoom Pegasus 41 — $549.90",
    time: "now",
  },
  {
    from: "product",
    text: "Adidas Ultraboost 5 — $599.00",
    time: "now",
  },
  {
    from: "shopper",
    text: "is the Pegasus available in my size?",
    time: "now",
  },
  {
    from: "rev",
    text: "Yes! We have sizes 40 to 44 in stock. Want me to add it to your cart?",
    time: "now",
  },
  {
    from: "shopper",
    text: "yes, add it!",
    time: "now",
  },
  {
    from: "success",
    text: "✓ Sale recovered — $549.90 attributed to RECOVA",
    time: "now",
  },
];

/** Per-message reveal delay (ms) so the conversation plays out in sequence. */
const REVEAL_MS = 1100;

function TypingDots() {
  return (
    <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-[#e8f1ff] px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="size-1.5 rounded-full bg-[#065cf5]"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

export function RecovaChat() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    messages.forEach((_, i) => {
      timers.push(setTimeout(() => setVisible(i + 1), i * REVEAL_MS));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-panel border border-line bg-surface shadow-[var(--shadow-ring-6)]">
      {/* header */}
      <div className="flex items-center justify-between border-b border-line bg-surface-muted px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-pill bg-[#065cf5] text-[13px] font-bold text-white">
            R
          </span>
          <div className="flex flex-col">
            <span className="text-[13px] font-semibold text-ink-800">Rev · Recovery agent</span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#16a34a]">
              <span className="size-1.5 animate-pulse rounded-full bg-[#16a34a]" />
              online · replying now
            </span>
          </div>
        </div>
        <span className="rounded-pill bg-[#e8f1ff] px-2.5 py-1 text-[11px] font-semibold text-[#065cf5]">
          Query: “running shoe”
        </span>
      </div>

      {/* messages */}
      <div className="flex flex-col gap-3 p-5">
        <AnimatePresence>
          {messages.slice(0, visible).map((m, i) => {
            if (m.from === "product") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between rounded-card border border-line bg-surface-muted px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-[8px] bg-[#e8f1ff] text-[14px]">
                      👟
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-semibold text-ink-800">{m.text}</span>
                      <span className="text-[11px] font-medium text-ink-400">in stock · fast shipping</span>
                    </div>
                  </div>
                  <span className="rounded-pill bg-[#065cf5] px-3 py-1.5 text-[12px] font-semibold text-white">
                    Add
                  </span>
                </motion.div>
              );
            }
            if (m.from === "success") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center justify-center gap-2 rounded-card bg-[#16a34a]/10 px-4 py-3"
                >
                  <span className="text-[14px]">🎉</span>
                  <span className="text-[13px] font-semibold text-[#16a34a]">{m.text}</span>
                </motion.div>
              );
            }
            const isRev = m.from === "rev";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${isRev ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-[19px] ${
                    isRev
                      ? "rounded-tl-sm bg-[#e8f1ff] text-ink-800"
                      : "rounded-tr-sm bg-[#065cf5] text-white"
                  }`}
                >
                  {m.text}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* typing indicator while the conversation is still playing */}
        {visible < messages.length && (
          <motion.div
            key="typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-start"
          >
            <TypingDots />
          </motion.div>
        )}
      </div>
    </div>
  );
}
