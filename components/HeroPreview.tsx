import { leaderboardRows, profileSignals } from "@/lib/site-data";

export function HeroPreview() {
  return (
    <div className="panel relative overflow-hidden rounded-[8px] p-3 animate-fade-up [animation-delay:140ms]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-0 h-20 w-full bg-accent/5 blur-3xl" />
      <div className="relative overflow-hidden rounded-[8px] border border-white/[0.08] bg-surface/95">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
          <div>
            <p className="mono-label text-[0.56rem] text-muted">Signal Board</p>
            <p className="mt-1 text-sm font-bold text-white">
              Live reputation queue
            </p>
          </div>
          <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[0.65rem] font-bold text-accent">
            Synced
          </span>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-accent/0 via-accent/10 to-accent/0" />
          <div className="grid gap-px bg-white/[0.06]">
            {leaderboardRows.slice(0, 3).map((row) => (
              <div
                key={row.rank}
                className="grid grid-cols-[2.2rem_1fr_auto] items-center gap-3 bg-surface px-4 py-3"
              >
                <span className="mono-label text-[0.64rem] text-white/40">
                  {row.rank}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-bold text-white">
                      {row.handle}
                    </p>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>
                  <p className="mt-1 truncate text-xs text-muted">{row.activity}</p>
                </div>
                <div className="text-right">
                  <p className="mono-label text-sm text-white">{row.score}</p>
                  <p className="mt-1 text-[0.64rem] font-semibold text-accent">
                    {row.verdict}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 border-t border-white/[0.08] p-4 md:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[8px] border border-white/[0.08] bg-white/[0.025] p-3">
            <p className="mono-label text-[0.56rem] text-muted">Profile</p>
            <p className="mt-2 text-lg font-black tracking-[-0.05em] text-white">
              MintScope
            </p>
            <p className="mt-2 text-xs leading-5 text-muted">
              Claim cadence, sentiment shift, and trust pressure in one read.
            </p>
          </div>
          <div className="space-y-3">
            {profileSignals.map((signal) => (
              <div key={signal.label}>
                <div className="mb-1.5 flex items-center justify-between text-[0.68rem]">
                  <span className="mono-label text-muted">{signal.label}</span>
                  <span className="font-bold text-white">{signal.value}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: signal.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
