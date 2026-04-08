import { faqs } from "@/lib/site-data";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader
          eyebrow="FAQ"
          title="Practical answers before you open the app."
        />
        <div className="divide-y divide-white/[0.08] rounded-[8px] border border-white/[0.08] bg-surface">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group p-5" open={index === 0}>
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-6 rounded-[8px] text-left text-lg font-black tracking-[-0.045em] text-white">
                {faq.question}
                <span className="text-xl text-accent transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
