"use client";

/**
 * RECOVA — compact dashboard screen for the Painel marquee.
 * A tight phone-style dashboard showing recovery KPIs. Replaces the generic
 * task-app screenshots the Aston template shipped with.
 */

const variants = [
  { title: "Recovered sales", value: "+1,284", delta: "+12.4%" },
  { title: "Recovered revenue", value: "$48.2k", delta: "+9.8%" },
  { title: "Recovery rate", value: "18.6%", delta: "+3.2 pts" },
  { title: "Attributed events", value: "100%", delta: "in real time" },
];

export function DashboardScreen({ index }: { index: number }) {
  const v = variants[index % variants.length];
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[18px] bg-surface">
      <div className="flex items-center justify-between border-b border-line bg-surface-muted px-3 py-2">
        <span className="text-[11px] font-semibold text-ink-800">RECOVA dashboard</span>
        <span className="flex items-center gap-1 text-[9px] font-semibold text-[#065cf5]">
          <span className="size-1 animate-pulse rounded-full bg-[#065cf5]" />
          LIVE
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="rounded-lg border border-line bg-surface-muted p-2.5">
          <p className="text-[10px] font-medium text-ink-400">{v.title}</p>
          <p className="mt-0.5 font-numeric text-[18px] leading-none font-bold text-ink-900">{v.value}</p>
          <p className="mt-1 text-[10px] font-semibold text-[#16a34a]">▲ {v.delta}</p>
        </div>
        <div className="flex flex-1 items-end gap-1 rounded-lg border border-line bg-surface-muted p-2.5">
          {[40, 55, 48, 70, 62, 85, 75, 92].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[3px] bg-[#065cf5]"
              style={{ height: `${h}%`, opacity: 0.4 + (i / 8) * 0.6 }}
            />
          ))}
        </div>
        <div className="rounded-lg border border-line bg-surface-muted p-2.5">
          <p className="text-[10px] font-medium text-ink-400">Last rescue</p>
          <p className="mt-0.5 text-[11px] font-semibold text-ink-800">“running shoe”</p>
          <p className="text-[10px] font-medium text-[#16a34a]">✓ $549.90 recovered</p>
        </div>
      </div>
    </div>
  );
}
