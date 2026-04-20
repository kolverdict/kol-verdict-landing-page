"use client";

import { useEffect, useState } from "react";

const CONTRACT_ADDRESS = "..........pump";

export function TokenSection() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="token" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <p className="mb-3 text-[10px] font-bold tracking-widest text-[#bef264]/70">
            KOL TOKEN
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            $KOL — aligned incentives for trust
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/60">
            $KOL will power governance and reward contributors who surface
            high-signal insights and accurate verdicts.
          </p>

          <div className="mt-6">
            <p className="mb-2 text-sm font-medium text-white/70">
              Contract Address
            </p>
            <button
              type="button"
              onClick={handleCopy}
              className="flex w-full items-center justify-between gap-4 rounded-lg border border-white/10 px-3 py-2 text-left transition-colors hover:border-white/20 hover:bg-white/[0.03]"
              aria-label="Copy KOL token contract address"
            >
              <span className="font-mono text-sm text-white/80">
                {CONTRACT_ADDRESS}
              </span>
              <span className="shrink-0 text-xs font-medium text-white/60">
                {copied ? "Copied" : "Copy"}
              </span>
            </button>
            <p className="mt-3 text-xs text-white/40">
              Verify contract before interacting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
