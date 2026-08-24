"use client";

/**
 * RECOVA — process step screen mockup.
 * A compact phone-style screen for each step of the onboarding flow:
 * connect store → validate pilot → scale & measure. Replaces the generic
 * task-app screenshots the Aston template shipped with.
 */

interface ProcessScreenProps {
  step: number;
}

const content: Record<number, { title: string; rows: { label: string; value: string; ok?: boolean }[]; footer: string }> = {
  1: {
    title: "Connect store",
    rows: [
      { label: "Platform", value: "Shopify" },
      { label: "Store", value: "mystore.com" },
      { label: "Native search", value: "Detected" },
      { label: "RECOVA layer", value: "Active" },
    ],
    footer: "✓ Connected in 2 min",
  },
  2: {
    title: "Pilot active",
    rows: [
      { label: "Searches monitored", value: "12,480" },
      { label: "Failures detected", value: "1,842" },
      { label: "Conversations started", value: "1,120" },
      { label: "Sales recovered", value: "214" },
    ],
    footer: "✓ 18.6% recovery rate",
  },
  3: {
    title: "Scale & metrics",
    rows: [
      { label: "Revenue recovered", value: "$48.2k" },
      { label: "Conversion rate", value: "+12%" },
      { label: "Attributed events", value: "100%" },
      { label: "Attribution", value: "100% real" },
    ],
    footer: "✓ Real-time dashboard",
  },
};

export function ProcessScreen({ step }: ProcessScreenProps) {
  const data = content[step];
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-panel bg-surface">
      <div className="flex items-center justify-between border-b border-line bg-surface-muted px-3 py-2">
        <span className="text-[11px] font-semibold text-ink-800">{data.title}</span>
        <span className="flex items-center gap-1 text-[9px] font-semibold text-[#065cf5]">
          <span className="size-1 animate-pulse rounded-full bg-[#065cf5]" />
          RECOVA
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        {data.rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between rounded-lg border border-line bg-surface-muted px-2.5 py-2">
            <span className="text-[10px] font-medium text-ink-400">{row.label}</span>
            <span className="flex items-center gap-1 text-[10px] font-semibold text-ink-800">
              {row.ok && <span className="text-[#16a34a]">✓</span>}
              {row.value}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 border-t border-line bg-[#16a34a]/10 px-3 py-2">
        <span className="text-[10px] font-semibold text-[#16a34a]">{data.footer}</span>
      </div>
    </div>
  );
}
