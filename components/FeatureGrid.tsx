import { features } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";

export function FeatureGrid() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Feature set"
            title="Compact surfaces for high-noise markets."
            copy="Each surface is designed to answer one question quickly: who deserves attention, what should be reviewed, and where trust is thin."
          />
          <div className="grid gap-px overflow-hidden rounded-[8px] border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="min-h-44 bg-surface p-5 transition hover:bg-surface-low"
              >
                <p className="mono-label text-[0.56rem] text-accent">
                  {(index + 1).toString().padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-xl font-black tracking-[-0.055em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
