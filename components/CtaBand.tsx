import { APP_URL } from "@/lib/site-data";
import { ButtonLink } from "./ButtonLink";

export function CtaBand() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-accent/20 bg-accent/[0.06] p-6 shadow-panel sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mono-label text-xs text-accent">Launch surface</p>
            <h2 className="mt-3 max-w-3xl text-balance text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">
              Read the signal before the next crowded narrative.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              Open the live app and start evaluating KOL reputation from the product surface.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href={APP_URL} aria-label="Launch the KOL Verdict app">
              Launch App
            </ButtonLink>
            <ButtonLink
              href={APP_URL}
              variant="secondary"
              aria-label="Visit app.kolverdict.fun"
            >
              Visit app.kolverdict.fun
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
