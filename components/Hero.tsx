import { APP_URL, LEADERBOARD_URL } from "@/lib/site-data";
import { ButtonLink } from "./ButtonLink";
import { HeroPreview } from "./HeroPreview";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-4 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/[0.08] blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-accent-soft/[0.055] blur-3xl" />
      </div>
      <div className="mx-auto grid min-h-[calc(100svh-9rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-3xl animate-fade-up">
          <p className="mono-label text-xs text-accent">
            Crypto KOL reputation layer
          </p>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-black leading-[0.9] tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl">
            Reputation signals for noisy crypto feeds.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            KOL Verdict helps you inspect KOL credibility, review claims,
            compare trust signals, and move from noise to signal.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={APP_URL} aria-label="Open the KOL Verdict app">
              Open App
            </ButtonLink>
            <ButtonLink href="#product" variant="secondary">
              Explore Platform
            </ButtonLink>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
            <a
              href={LEADERBOARD_URL}
              className="focus-ring rounded-[8px] border border-white/[0.08] px-3 py-2 transition hover:border-accent/30 hover:text-white"
            >
              View Leaderboard
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-muted/40 sm:block" />
            <span>app.kolverdict.fun</span>
          </div>
        </div>
        <HeroPreview />
      </div>
    </section>
  );
}
