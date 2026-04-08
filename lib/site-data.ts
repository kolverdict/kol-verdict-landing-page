export const APP_URL = "https://app.kolverdict.fun";
export const LEADERBOARD_URL = "https://app.kolverdict.fun/leaderboard";
export const TWITTER_URL = "https://x.com/KolsVerdict";
export const GITHUB_URL = "https://github.com/kolverdict";

export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Why It Matters", href: "#why-it-matters" },
  { label: "FAQ", href: "#faq" },
] as const;

export const valuePoints = [
  { eyebrow: "01", title: "Evaluate Signal", copy: "Scan verdict context before the feed decides for you." },
  { eyebrow: "02", title: "Inspect Reputation", copy: "Review profile-level trust, claim, and community markers." },
  { eyebrow: "03", title: "Compare KOLs", copy: "Read rankings against the same credibility frame." },
  { eyebrow: "04", title: "Reduce Noise", copy: "Move faster without treating every thread as signal." },
] as const;

export const workflowSteps = [
  { step: "01", title: "Search or open a KOL", copy: "Start from a profile, leaderboard row, or live feed surface.", metric: "Lookup" },
  { step: "02", title: "Review verdict signals", copy: "Read trust, claim, and reputation markers in one compact pass.", metric: "Signals" },
  { step: "03", title: "Compare credibility", copy: "Stack profiles against rank, sentiment, and history patterns.", metric: "Rank" },
  { step: "04", title: "Act with more confidence", copy: "Use context before following narratives into crowded trades.", metric: "Decision" },
] as const;

export const features = [
  { title: "Reputation snapshots", copy: "Dense profile summaries for credibility, claim hygiene, and community read." },
  { title: "Leaderboards", copy: "Rank KOLs by verdict score, sentiment pressure, and attention quality." },
  { title: "Claim review surface", copy: "Keep bold calls and recurring narratives connected to review context." },
  { title: "Profile-based evaluation", copy: "Inspect each KOL as a reputation record, not a one-off post." },
  { title: "Community trust signals", copy: "See how the crowd reads confidence, caution, and repeated behavior." },
  { title: "Fast crypto-native UX", copy: "Designed for quick scans, short sessions, and high-noise market windows." },
] as const;

export const leaderboardRows = [
  { rank: "01", handle: "0xSignalDesk", label: "Market structure", score: "91", verdict: "High Trust", tone: "accent", activity: "42 claims reviewed" },
  { rank: "02", handle: "MintScope", label: "Early-stage calls", score: "84", verdict: "Watchlist", tone: "cyan", activity: "18 claims disputed" },
  { rank: "03", handle: "ChainMotive", label: "Narrative analyst", score: "76", verdict: "Mixed", tone: "neutral", activity: "31 signals logged" },
  { rank: "04", handle: "AlphaLedger", label: "Deal flow radar", score: "68", verdict: "Review", tone: "warn", activity: "9 claims pending" },
] as const;

export const profileSignals = [
  { label: "Trust Index", value: "82", width: "82%" },
  { label: "Claim Clarity", value: "74", width: "74%" },
  { label: "Noise Risk", value: "31", width: "31%" },
] as const;

export const claimRows = [
  { claim: "Repeated launch-window calls", status: "Tracked", signal: "Consistent" },
  { claim: "Unverified ROI language", status: "Flagged", signal: "Needs review" },
  { claim: "Community correction history", status: "Open", signal: "Mixed" },
] as const;

export const faqs = [
  {
    question: "What is KOL Verdict?",
    answer: "KOL Verdict is a crypto reputation and signal product for evaluating KOL profiles, claims, rankings, and trust markers.",
  },
  {
    question: "Is this only for crypto Twitter / X personalities?",
    answer: "The product is built for crypto-native public voices first, including X personalities, analysts, callers, and narrative accounts.",
  },
  {
    question: "Can I browse without connecting a wallet?",
    answer: "The public marketing site requires no wallet. The app experience lives at app.kolverdict.fun and may expose wallet-based features where needed.",
  },
  {
    question: "What does a verdict represent?",
    answer: "A verdict is a compact reputation read built from trust signals, claim context, profile history, and community evaluation surfaces.",
  },
  {
    question: "Where do I go to use the app?",
    answer: "Open https://app.kolverdict.fun to use the KOL Verdict app and browse the active product surfaces.",
  },
] as const;
