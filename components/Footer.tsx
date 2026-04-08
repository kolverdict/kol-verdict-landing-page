import { APP_URL, GITHUB_URL, TWITTER_URL } from "@/lib/site-data";
import { Logo } from "./Logo";

const footerLinks = [
  { label: "App", href: APP_URL },
  { label: "X/Twitter", href: TWITTER_URL },
  { label: "GitHub", href: GITHUB_URL },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-6 text-muted">
            KOL Verdict routes reputation and claim context into one compact crypto-native surface. The app lives at app.kolverdict.fun.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <nav aria-label="Footer links" className="flex flex-wrap gap-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-[8px] border border-white/[0.08] px-3 py-2 text-sm font-semibold text-muted transition hover:border-accent/30 hover:text-white"
                target={link.href === APP_URL ? undefined : "_blank"}
                rel={link.href === APP_URL ? undefined : "noreferrer"}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="mono-label text-[0.56rem] text-muted/70">
            Copyright 2026 KOL Verdict
          </p>
        </div>
      </div>
    </footer>
  );
}
