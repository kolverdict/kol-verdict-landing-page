import { SectionHeader } from "./SectionHeader";

const points = [
  "Crypto attention is noisy by default.",
  "Influence can move faster than verification.",
  "Trust fragments across accounts, chats, and old calls.",
  "Users need a faster way to read the signal layer.",
] as const;

export function WhySection() {
  return (
    <section
      id="why-it-matters"
      className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeader
            eyebrow="Why KOL Verdict"
            title="The feed rewards attention. KOL Verdict reads reputation."
            copy="Crypto moves through narratives, screenshots, screenshots of screenshots, and old calls resurfacing at the wrong time. KOL Verdict gives the market a sharper read on who is carrying signal and who is carrying noise."
          />
          <div className="grid gap-px overflow-hidden rounded-[8px] border border-white/[0.08] bg-white/[0.06]">
            {points.map((point, index) => (
              <div key={point} className="grid grid-cols-[3rem_1fr] gap-4 bg-surface p-5">
                <p className="mono-label text-[0.6rem] text-accent">
                  {(index + 1).toString().padStart(2, "0")}
                </p>
                <p className="text-xl font-black leading-tight tracking-[-0.055em] text-white">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
