type Segment = {
  text: string;
  accent?: boolean;
};

type Point = {
  lead: Segment[];
  body: Segment[];
};

type RoadmapPhase = {
  phase: string;
  title: string;
  points: Point[];
  outcome: string;
};

const roadmap: RoadmapPhase[] = [
  {
    phase: "PHASE 01",
    title: "Trust Engine",
    points: [
      {
        lead: [{ text: "KOL scoring v1" }],
        body: [
          { text: "built from votes, " },
          { text: "on-chain", accent: true },
          { text: " context, and " },
          { text: "behavior patterns", accent: true },
        ],
      },
      {
        lead: [{ text: "Community voting system" }],
        body: [
          {
            text: "that captures endorsement, rejection, and confidence",
          },
        ],
      },
      {
        lead: [{ text: "Core signal tracking" }],
        body: [{ text: "for consistency, call quality, and follow-through" }],
      },
      {
        lead: [{ text: "Public KOL profiles" }],
        body: [{ text: "with verdicts, history, and signal snapshots" }],
      },
    ],
    outcome:
      "A usable trust layer that ranks credibility by behavior, not follower count.",
  },
  {
    phase: "PHASE 02",
    title: "Transparency Layer",
    points: [
      {
        lead: [{ text: "Open score breakdowns" }],
        body: [{ text: "so every verdict can be inspected" }],
      },
      {
        lead: [{ text: "KOL history timelines" }],
        body: [{ text: "showing calls, edits, deletes, and outcomes" }],
      },
      {
        lead: [{ text: "Voter credibility weighting" }],
        body: [{ text: "to separate signal from cheap noise" }],
      },
      {
        lead: [{ text: "Anti-manipulation safeguards" }],
        body: [
          {
            text: "against brigading, sybil behavior, and vote farming",
          },
        ],
      },
    ],
    outcome:
      "Trust stops being a black box and becomes something users can audit.",
  },
  {
    phase: "PHASE 03",
    title: "Signal Intelligence",
    points: [
      {
        lead: [{ text: "Advanced weighting for" }],
        body: [{ text: "conviction, consistency, and track record" }],
      },
      {
        lead: [
          { text: "Wallet tracking", accent: true },
          { text: " tied" },
        ],
        body: [{ text: "to call timing, behavior, and performance" }],
      },
      {
        lead: [{ text: "Narrative detection to" }],
        body: [{ text: "separate trend-chasing from real alpha" }],
      },
      {
        lead: [{ text: "Risk alerts when" }],
        body: [{ text: "a KOL starts showing repeat red-flag patterns" }],
      },
    ],
    outcome:
      "KOL Verdict moves from static profiles to live reputation intelligence.",
  },
  {
    phase: "PHASE 04",
    title: "Verdict Network",
    points: [
      {
        lead: [{ text: "Contributor leaderboard for" }],
        body: [{ text: "the highest-signal voters" }],
      },
      {
        lead: [
          { text: "Reputation", accent: true },
          { text: " rails and" },
        ],
        body: [{ text: "points systems for credible contributors" }],
      },
      {
        lead: [
          { text: "API access", accent: true },
          { text: " for" },
        ],
        body: [{ text: "traders, funds, dashboards, and research tools" }],
      },
      {
        lead: [{ text: "Mobile and extension" }],
        body: [{ text: "surfaces that bring verdicts into the feed" }],
      },
    ],
    outcome:
      "KOL Verdict becomes trust infrastructure for crypto, not just a website.",
  },
];

function renderSegments(segments: Segment[]) {
  return segments.map((segment, index) => (
    <span
      key={`${segment.text}-${index}`}
      className={segment.accent ? "text-[#bef264]" : undefined}
    >
      {segment.text}
    </span>
  ));
}

function renderTitle(title: string) {
  if (title === "Transparency Layer") {
    return (
      <>
        <span className="text-[#bef264]">Transparency</span> Layer
      </>
    );
  }

  return title;
}

export function RoadmapSection() {
  return (
    <section aria-labelledby="roadmap-title" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="roadmap-title"
            className="text-4xl font-bold tracking-tight md:text-5xl"
          >
            Roadmap
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {roadmap.map((item) => (
            <article
              key={item.phase}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.03] md:p-6"
            >
              <p className="mb-2 text-[10px] font-bold tracking-widest text-[#bef264]/70">
                {item.phase}
              </p>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {renderTitle(item.title)}
              </h3>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/60 marker:text-white/30">
                {item.points.map((point, index) => (
                  <li key={`${item.phase}-${index}`}>
                    <span className="text-white/90">
                      {renderSegments(point.lead)}
                    </span>
                    {point.body.length ? " " : null}
                    {renderSegments(point.body)}
                  </li>
                ))}
              </ul>

              <p className="mt-4 border-t border-white/10 pt-3 text-sm text-white/80">
                <span className="font-semibold text-[#bef264]">Outcome:</span>{" "}
                {item.outcome}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-base font-semibold leading-relaxed tracking-tight text-white md:mt-10 md:text-lg">
          We&apos;re not building another dashboard. We&apos;re building the{" "}
          <span className="text-[#bef264]">trust layer for crypto</span>.
        </p>
      </div>
    </section>
  );
}
