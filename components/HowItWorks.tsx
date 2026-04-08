import { workflowSteps } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How it works"
          title="A faster path from public noise to usable context."
          copy="KOL Verdict keeps the workflow close to how crypto users already move: search, scan, compare, decide."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-[8px] border border-white/[0.08] bg-white/[0.06] md:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step) => (
            <article
              key={step.step}
              className="group bg-surface p-5 transition hover:bg-surface-low"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="mono-label text-[0.6rem] text-white/40">
                  {step.step}
                </span>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[0.62rem] font-bold text-accent">
                  {step.metric}
                </span>
              </div>
              <div className="mb-5 h-16 rounded-[8px] border border-white/[0.08] bg-background fine-grid p-3">
                <div className="h-2 w-1/2 rounded-full bg-white/15" />
                <div className="mt-3 h-2 w-4/5 rounded-full bg-accent/40 transition group-hover:bg-accent/70" />
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="h-2 rounded-full bg-white/10" />
                  <div className="h-2 rounded-full bg-white/10" />
                  <div className="h-2 rounded-full bg-white/10" />
                </div>
              </div>
              <h3 className="text-xl font-black tracking-[-0.055em] text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
