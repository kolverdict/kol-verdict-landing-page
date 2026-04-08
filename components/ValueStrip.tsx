import { valuePoints } from "@/lib/site-data";

export function ValueStrip() {
  return (
    <section
      aria-label="KOL Verdict value points"
      className="border-y border-white/[0.08] bg-surface/45"
    >
      <div className="mx-auto grid max-w-7xl gap-px bg-white/[0.06] px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {valuePoints.map((point) => (
          <div key={point.eyebrow} className="bg-surface/95 px-4 py-6 sm:px-5">
            <p className="mono-label text-[0.56rem] text-accent">
              {point.eyebrow}
            </p>
            <h3 className="mt-3 text-lg font-black tracking-[-0.05em] text-white">
              {point.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{point.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
