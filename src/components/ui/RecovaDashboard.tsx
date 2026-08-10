"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

/**
 * RECOVA — product dashboard mockup.
 * A hand-built, realistic preview of the recovery dashboard, replacing the
 * stock photo the Aston template shipped with. Uses the authoritative brand
 * colours and shows the product actually doing its job: recovering sales
 * from failed searches.
 */

const recovered = [
  { query: "tênis de corrida", intent: "Corrida / amortecedor", product: "Nike Air Zoom Pegasus 41", price: "R$ 549,90", status: "Venda recuperada", time: "agora" },
  { query: "vestido preto", intent: "Festa / elegante", product: "Vestido Midi Seda Preta", price: "R$ 329,90", status: "Venda recuperada", time: "há 2 min" },
  { query: "fone bluetooth", intent: "Cancelamento de ruído", product: "JBL Tune 770NC", price: "R$ 499,00", status: "Venda recuperada", time: "há 5 min" },
  { query: "cadeira gamer", intent: "Ergonômica / ajustável", product: "Cadeira ThunderX3", price: "R$ 1.199,00", status: "Venda recuperada", time: "há 9 min" },
];

const bars = [42, 58, 47, 66, 52, 74, 61, 82, 69, 88, 77, 95];

/** Animated counter that counts up when scrolled into view. */
function CountUp({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  useEffect(() => {
    if (!inView) return;
    const dur = 900;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} className="font-numeric">
      {prefix}
      {val.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

export function RecovaDashboard() {
  return (
    <div className="w-full overflow-hidden rounded-panel border border-line bg-surface shadow-[var(--shadow-ring-6)]">
      {/* ---- window chrome ---- */}
      <div className="flex items-center justify-between border-b border-line bg-surface-muted px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-2 rounded-pill bg-surface px-3 py-1 text-[12px] font-medium text-ink-400">
          <span className="size-1.5 rounded-full bg-[#16a34a]" />
          app.recova.ai
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-pill bg-surface px-3 py-1 text-[12px] font-semibold text-ink-600">Últimos 30 dias</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.4fr_1fr]">
        {/* ---- left: KPIs + chart ---- */}
        <div className="border-b border-line p-6 lg:border-r lg:border-b-0">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-card border border-line bg-surface-muted p-4">
              <p className="text-[12px] font-medium text-ink-400">Vendas recuperadas</p>
              <p className="mt-1 text-[30px] leading-none font-bold tracking-tight text-ink-900">
                <CountUp to={1284} prefix="+" />
              </p>
              <p className="mt-2 flex items-center gap-1 text-[12px] font-semibold text-[#16a34a]">
                <span className="flex size-4 items-center justify-center rounded-full bg-[#16a34a]/15 text-[9px]">▲</span>
                12,4% vs. mês anterior
              </p>
            </div>
            <div className="rounded-card border border-line bg-surface-muted p-4">
              <p className="text-[12px] font-medium text-ink-400">Receita resgatada</p>
              <p className="mt-1 text-[30px] leading-none font-bold tracking-tight text-ink-900">
                <CountUp to={48.2} prefix="R$ " suffix="k" decimals={1} />
              </p>
              <p className="mt-2 flex items-center gap-1 text-[12px] font-semibold text-[#16a34a]">
                <span className="flex size-4 items-center justify-center rounded-full bg-[#16a34a]/15 text-[9px]">▲</span>
                9,8% vs. mês anterior
              </p>
            </div>
            <div className="rounded-card border border-line bg-surface-muted p-4">
              <p className="text-[12px] font-medium text-ink-400">Taxa de recuperação</p>
              <p className="mt-1 text-[30px] leading-none font-bold tracking-tight text-ink-900">
                <CountUp to={18.6} suffix="%" decimals={1} />
              </p>
              <p className="mt-2 flex items-center gap-1 text-[12px] font-semibold text-[#16a34a]">
                <span className="flex size-4 items-center justify-center rounded-full bg-[#16a34a]/15 text-[9px]">▲</span>
                3,2 pts
              </p>
            </div>
          </div>

          {/* chart */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-semibold text-ink-700">Vendas recuperadas por dia</p>
              <div className="flex items-center gap-3 text-[12px] font-medium text-ink-400">
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#065cf5]" /> RECOVA
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#c6ced9]" /> Busca nativa
                </span>
              </div>
            </div>
            <div className="mt-4 flex h-[150px] items-end gap-[6px]">
              {bars.map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full rounded-t-[4px] bg-linear-to-t from-[#065cf5] to-[#4c8ff9]"
                    style={{ opacity: 0.35 + (i / bars.length) * 0.65 }}
                  />
                  <div className="h-[3px] w-full rounded-full bg-[#c6ced9]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---- right: live recovery feed ---- */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-semibold text-ink-700">Resgates ao vivo</p>
            <span className="flex items-center gap-1.5 rounded-pill bg-[#e8f1ff] px-2.5 py-1 text-[11px] font-semibold text-[#065cf5]">
              <span className="size-1.5 animate-pulse rounded-full bg-[#065cf5]" />
              AO VIVO
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {recovered.map((r, i) => (
              <div key={r.query} className="rounded-card border border-line bg-surface-muted p-3">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-semibold text-ink-800">
                    “{r.query}” <span className="font-normal text-ink-400">→ {r.intent}</span>
                  </p>
                  <span className="text-[11px] font-medium text-ink-300">{r.time}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-[12px] font-medium text-ink-600">{r.product}</p>
                  <p className="font-numeric text-[13px] font-bold text-ink-900">{r.price}</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="rounded-pill bg-[#16a34a]/10 px-2 py-0.5 text-[11px] font-semibold text-[#16a34a]">
                    ✓ {r.status}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-ink-300">
                    <span className="size-1.5 rounded-full bg-[#16a34a]" />
                    atribuída à RECOVA
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
