import { claimRows, leaderboardRows, profileSignals } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";

const toneClass = {
  accent: "border-accent/25 bg-accent/10 text-accent",
  cyan: "border-accent-soft/25 bg-accent-soft/10 text-accent-soft",
  neutral: "border-white/12 bg-white/[0.045] text-white/75",
  warn: "border-warn/30 bg-warn/10 text-warn",
};

export function ProductPreview() {
  return (
    <section id="product" className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              eyebrow="Product preview"
              title="Verdict-oriented profiles and rankings."
              copy="The marketing page mirrors the actual product language: leaderboard rows, profile signals, status pills, and compact data rows without browser chrome."
            />
          </div>

          <div className="panel overflow-hidden rounded-[8px] bg-surface">
            <div className="border-b border-white/[0.08] px-4 py-4 sm:px-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mono-label text-[0.56rem] text-accent">
                    Leaderboard
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.06em] text-white">
                    Ranked signal queue
                  </h3>
                </div>
                <p className="mono-label text-[0.58rem] text-muted">Updated Live</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[620px]">
                <div className="grid grid-cols-[4rem_1.4fr_0.8fr_0.9fr] gap-4 border-b border-white/[0.08] bg-white/[0.025] px-5 py-3">
                  <p className="mono-label text-[0.54rem] text-muted">Rank</p>
                  <p className="mono-label text-[0.54rem] text-muted">KOL Profile</p>
                  <p className="mono-label text-[0.54rem] text-muted">Verdict</p>
                  <p className="mono-label text-right text-[0.54rem] text-muted">
                    Score
                  </p>
                </div>
                {leaderboardRows.map((row) => (
                  <div
                    key={row.rank}
                    className="grid grid-cols-[4rem_1.4fr_0.8fr_0.9fr] items-center gap-4 border-b border-white/[0.06] px-5 py-4 last:border-b-0"
                  >
                    <p className="mono-label text-lg text-white/35">{row.rank}</p>
                    <div>
                      <p className="font-bold text-white">{row.handle}</p>
                      <p className="mt-1 text-sm text-muted">{row.label}</p>
                    </div>
                    <span
                      className={`w-fit rounded-full border px-2.5 py-1 text-xs font-bold ${toneClass[row.tone]}`}
                    >
                      {row.verdict}
                    </span>
                    <div className="text-right">
                      <p className="mono-label text-xl text-white">{row.score}</p>
                      <p className="mt-1 text-xs text-muted">{row.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-px border-t border-white/[0.08] bg-white/[0.06] md:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-surface p-5">
                <p className="mono-label text-[0.56rem] text-accent">KOL profile</p>
                <h4 className="mt-3 text-2xl font-black tracking-[-0.06em] text-white">
                  MintScope
                </h4>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                  Early-stage call profile with mixed claim clarity and a strong
                  community correction trail.
                </p>
                <div className="mt-6 space-y-4">
                  {profileSignals.map((signal) => (
                    <div key={signal.label}>
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="mono-label text-muted">{signal.label}</span>
                        <span className="font-bold text-white">{signal.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.08]">
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: signal.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface p-5">
                <p className="mono-label text-[0.56rem] text-accent">Claim surface</p>
                <div className="mt-4 divide-y divide-white/[0.07]">
                  {claimRows.map((row) => (
                    <div
                      key={row.claim}
                      className="grid grid-cols-[1fr_auto] gap-4 py-3 first:pt-0 last:pb-0"
                    >
                      <div>
                        <p className="text-sm font-bold text-white">{row.claim}</p>
                        <p className="mt-1 text-xs text-muted">{row.signal}</p>
                      </div>
                      <span className="h-fit rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-xs font-bold text-white/75">
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
