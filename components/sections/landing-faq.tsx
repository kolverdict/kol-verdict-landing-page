const faqItems = [
  {
    question: "What is KOL Verdict?",
    answer:
      "KOL Verdict is a reputation layer for crypto KOLs. It blends community votes, on-chain signals, and behavior patterns to show who earns trust and who just farms attention.",
  },
  {
    question: "How is this different from just checking Twitter?",
    answer:
      "Twitter shows reach. It does not show whether the calls held up, whether wallets matched the story, or whether the same behavior keeps getting flagged. We care about signal, not noise.",
  },
  {
    question: "Can a big KOL still score badly here?",
    answer:
      "Yes. A huge following means distribution, not credibility. Follower count can be bought. Trust has to be earned.",
  },
  {
    question: "How do you calculate trust scores?",
    answer:
      "Not with a black box. Scores are shaped by community voting, signal history, consistency over time, and on-chain or behavioral context. The point is explainable trust, not mystery math.",
  },
  {
    question: "What signals do you actually track?",
    answer:
      "Things like call follow-through, wallet behavior, timing patterns, consistency between words and actions, and how the crowd keeps reading the same account over time.",
  },
  {
    question: "Why should I trust your data?",
    answer:
      "Because we do not ask you to trust one source. KOL Verdict cross-checks crowd input with observable behavior and makes the read visible. If the signal is weak, it should look weak in public.",
  },
  {
    question: "Can this be manipulated?",
    answer:
      "Anything in crypto can be attacked. The edge is transparency. Votes, patterns, and signal shifts are harder to fake at scale without leaving fingerprints.",
  },
  {
    question: "What happens if the crowd is wrong?",
    answer:
      "Then the read should correct. Crowd sentiment matters, but it is not sacred. That is why votes are one layer, not the whole verdict.",
  },
  {
    question: "Do KOLs get paid to appear here?",
    answer:
      "No. Presence is not sponsorship. KOLs show up because people follow them, discuss them, and vote on them, not because they bought placement.",
  },
  {
    question: "How do I contribute?",
    answer:
      "Open a profile, leave your verdict, and vote. Useful contributions sharpen the reputation layer for everyone else using it.",
  },
  {
    question: "What do I gain from voting?",
    answer:
      "A better filter. Honest input makes it harder for paid narratives, fake influence, and recycled hype to hide in plain sight.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. KOL Verdict helps you judge credibility, not outsource decisions. Use it to verify people, not to replace your own research.",
  },
  {
    question: "Is my wallet and data safe?",
    answer:
      "KOL Verdict should never need your private keys. If wallet connection is used, it is for product access, not control of funds.",
  },
] as const;

export function LandingFaq() {
  return (
    <section id="faq" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#bef264]">
            FAQ
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-[#111]">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className="group border-b border-white/10 p-6 last:border-b-0 md:px-8"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-xl font-bold tracking-tight text-white">
                <span>{item.question}</span>
                <span className="shrink-0 text-2xl text-[#bef264] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400 md:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
