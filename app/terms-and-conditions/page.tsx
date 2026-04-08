import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Terms & Conditions | Kolverdict",
};

const sections = [
  {
    title: "Informational use only",
    body: "Kolverdict is provided for fun, entertainment, commentary, and informational purposes only. Nothing on the platform is financial advice, legal advice, investment advice, or factual certification of any person, KOL, or project.",
  },
  {
    title: "Use at your own risk",
    body: "All users use the platform at their own risk. We take no responsibility for actions taken based on content shown on the platform.",
  },
  {
    title: "No warranties",
    body: "We make no warranties regarding accuracy, reliability, completeness, ranking fairness, reputation scoring, or suitability of any content. KOL profiles, scores, votes, comments, and reputation signals may be incomplete, opinion-based, community-driven, automated, delayed, or inaccurate.",
  },
  {
    title: "No liability",
    body: "We are not liable for loss, damages, trading decisions, reputation impact, or any direct or indirect consequences from use of the site.",
  },
  {
    title: "Changes",
    body: "We may update, modify, or remove features or content at any time without notice. Continued use of the platform means acceptance of these terms.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl rounded-[8px] border border-white/[0.08] bg-surface p-6 sm:p-8">
          <p className="mono-label text-xs text-accent">Legal</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-white">
            Terms & Conditions
          </h1>
          <p className="mt-5 text-base leading-7 text-muted">
            These terms apply to your use of Kolverdict. The platform is community and opinion based, and no responsibility is taken by the platform for reliance on its content.
          </p>
          <div className="mt-8 space-y-7">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-black tracking-[-0.04em] text-white">
                  {section.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-muted">{section.body}</p>
              </section>
            ))}
          </div>
          <p className="mono-label mt-10 text-[0.6rem] text-muted/70">
            Last updated: April 8, 2026
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
