import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy | Kolverdict",
};

const sections = [
  {
    title: "Public and community content",
    body: "Kolverdict may display publicly available social or profile-related data, community-generated content, comments, votes, reputation signals, and related discussion surfaces. Data shown on the platform may come from third-party or public sources.",
  },
  {
    title: "No guarantees",
    body: "We do not guarantee that any information on the platform is complete, accurate, current, fresh, or suitable for any specific purpose. Users should not rely on Kolverdict for financial, legal, investment, or professional decisions.",
  },
  {
    title: "Technical data",
    body: "We may collect basic technical data such as analytics, browser or device information, cookies, and usage data to understand how the product is used and to improve the experience.",
  },
  {
    title: "Contact",
    body: "For questions regarding this Privacy Policy, contact us through the official project channels.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl rounded-[8px] border border-white/[0.08] bg-surface p-6 sm:p-8">
          <p className="mono-label text-xs text-accent">Legal</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-white">
            Privacy Policy
          </h1>
          <p className="mt-5 text-base leading-7 text-muted">
            Kolverdict is provided for informational, entertainment, and fun purposes. By using the site, you understand that content is for fun, informational, community, and discussion purposes only.
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
