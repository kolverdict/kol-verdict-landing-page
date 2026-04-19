const storeBadges = [
  { icon: "\uF8FF", label: "App Store" },
  { icon: "\u25B6", label: "Google Play" },
] as const;

export function MobileComingSoon() {
  return (
    <section
      aria-labelledby="mobile-coming-soon-title"
      className="relative px-6 py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[40px] border border-white/10 bg-[#111] px-6 py-12 text-center sm:px-10 md:px-14 md:py-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#bef264]">
            Coming Soon
          </p>
          <h2
            id="mobile-coming-soon-title"
            className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-5xl"
          >
            KOL Verdict in your pocket.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
            Vote on KOLs, track reputation, and verify signals &mdash; anytime,
            anywhere.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-gray-500">
            iOS and Android apps launching soon.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {storeBadges.map((badge) => (
              <button
                key={badge.label}
                type="button"
                disabled
                aria-disabled="true"
                className="flex w-full cursor-not-allowed flex-col items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-4 text-white opacity-80 transition-all sm:w-auto sm:min-w-[220px]"
              >
                <span className="flex items-center gap-2 text-base font-bold">
                  <span aria-hidden="true" className="text-lg leading-none">
                    {badge.icon}
                  </span>
                  {badge.label}
                </span>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Coming Soon
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
