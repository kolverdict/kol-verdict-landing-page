import { APP_URL, LEADERBOARD_URL, navLinks } from "@/lib/site-data";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-h-12 items-center justify-between gap-3">
          <Logo compact />
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-[8px] px-3 py-2 text-sm font-medium text-muted transition hover:bg-white/[0.045] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ButtonLink
              href={LEADERBOARD_URL}
              variant="secondary"
              className="hidden sm:inline-flex"
              aria-label="View the KOL Verdict leaderboard in the app"
            >
              View Leaderboard
            </ButtonLink>
            <ButtonLink href={APP_URL} aria-label="Open the KOL Verdict app">
              Open App
            </ButtonLink>
          </div>
        </div>
        <nav
          aria-label="Section navigation"
          className="flex gap-1 overflow-x-auto pb-1 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring shrink-0 rounded-[8px] border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-semibold text-muted transition hover:border-accent/30 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LEADERBOARD_URL}
            className="focus-ring shrink-0 rounded-[8px] border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-semibold text-muted transition hover:border-accent/30 hover:text-white sm:hidden"
          >
            Leaderboard
          </a>
        </nav>
      </div>
    </header>
  );
}
