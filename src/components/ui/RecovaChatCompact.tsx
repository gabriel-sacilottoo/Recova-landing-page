"use client";

/**
 * RECOVA — compact recovery chat mockup for the phone frame.
 * A tight, readable version of the Rev agent rescuing a sale, sized for the
 * 220px phone screen. Replaces the generic task-app screenshot.
 */

const lines = [
  { from: "shopper", text: "não achei meu tênis 😕" },
  { from: "rev", text: "Vou buscar opções de corrida com amortecimento!" },
  { from: "rev", text: "Encontrei 3 alternativas 👟" },
  { from: "product", text: "Nike Pegasus 41 · R$ 549,90" },
  { from: "shopper", text: "esse serve! adiciona" },
  { from: "success", text: "✓ Venda recuperada" },
];

export function RecovaChatCompact() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-panel bg-surface">
      {/* header */}
      <div className="flex items-center gap-2 border-b border-line bg-surface-muted px-3 py-2">
        <span className="flex size-6 items-center justify-center rounded-pill bg-[#065cf5] text-[11px] font-bold text-white">
          R
        </span>
        <div className="flex flex-col">
          <span className="text-[11px] leading-tight font-semibold text-ink-800">Rev</span>
          <span className="flex items-center gap-1 text-[9px] font-medium text-[#16a34a]">
            <span className="size-1 animate-pulse rounded-full bg-[#16a34a]" />
            online
          </span>
        </div>
      </div>

      {/* messages */}
      <div className="flex flex-1 flex-col gap-1.5 overflow-hidden p-2.5">
        {lines.map((m, i) => {
          if (m.from === "product") {
            return (
              <div key={i} className="flex items-center justify-between rounded-lg border border-line bg-surface-muted px-2 py-1.5">
                <span className="text-[10px] font-semibold text-ink-800">{m.text}</span>
                <span className="rounded-pill bg-[#065cf5] px-2 py-0.5 text-[9px] font-semibold text-white">
                  Add
                </span>
              </div>
            );
          }
          if (m.from === "success") {
            return (
              <div key={i} className="flex items-center justify-center gap-1 rounded-lg bg-[#16a34a]/10 px-2 py-1.5">
                <span className="text-[10px] font-semibold text-[#16a34a]">{m.text}</span>
              </div>
            );
          }
          const isRev = m.from === "rev";
          return (
            <div key={i} className={`flex ${isRev ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[90%] rounded-xl px-2 py-1 text-[10px] leading-[14px] ${
                  isRev ? "rounded-tl-sm bg-[#e8f1ff] text-ink-800" : "rounded-tr-sm bg-[#065cf5] text-white"
                }`}
              >
                {m.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
