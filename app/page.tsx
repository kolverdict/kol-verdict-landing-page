"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { LandingFaq } from "@/components/sections/landing-faq";
import { MobileComingSoon } from "@/components/sections/mobile-coming-soon";
import { RoadmapSection } from "@/components/sections/roadmap";
import {
  Activity,
  ArrowUpRight,
  ChevronRight,
  Database,
  Menu,
  Minus,
  Radio,
  ShieldCheck,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { APP_URL, LEADERBOARD_URL, TWITTER_URL } from "@/lib/site-data";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const stats = [
  { icon: Users, label: "KOLs Tracked", value: "2,500+" },
  { icon: Activity, label: "Votes Cast", value: "1.2M+" },
  { icon: Target, label: "Community Accuracy", value: "94%" },
];

const features = [
  {
    icon: Radio,
    title: "Cut Through the Noise",
    desc: "Filter hype, ads, and paid shills. See what actually matters.",
  },
  {
    icon: Database,
    title: "Backed by Behavior",
    desc: "Track patterns, signals, and on-chain behavior to see if actions match words.",
  },
  {
    icon: ShieldCheck,
    title: "Crowd + Signal Score",
    desc: "A live reputation score shaped by community verdicts and supporting signals.",
  },
];

const signalItems = [
  "Crowd sentiment snapshots",
  "Endorse and reject vote flow",
  "On-chain behavior context",
  "Claim history and corrections",
];

const chartBars = [40, 60, 45, 70, 55, 80, 65, 90];

const leaderboardItems = [
  { rank: 1, name: "AltcoinGem", score: 95, trend: "up" },
  { rank: 2, name: "DeFiGuru", score: 92, trend: "steady" },
  { rank: 3, name: "NFTKing", score: 89, trend: "down" },
] as const;

const currentYear = 2026;

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="kol-vite-landing min-h-screen bg-[#0a0a0a] text-white selection:bg-[#bef264] selection:text-black">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#bef264]">
              <Activity className="h-5 w-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">KOL Verdict</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#platform" className="text-sm font-medium text-gray-400 transition-colors hover:text-[#bef264]">
              Platform
            </a>
            <a href={LEADERBOARD_URL} className="text-sm font-medium text-gray-400 transition-colors hover:text-[#bef264]">
              Leaderboard
            </a>
            <a href="#resources" className="text-sm font-medium text-gray-400 transition-colors hover:text-[#bef264]">
              Resources
            </a>
            <a href="#cta" className="text-sm font-medium text-gray-400 transition-colors hover:text-[#bef264]">
              Pricing
            </a>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a href={APP_URL} className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5">
              Log in
            </a>
            <a
              href={APP_URL}
              className="rounded-full bg-[#bef264] px-6 py-2 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-[#a3e635] active:scale-95"
            >
              Open App
            </a>
          </div>

          <button
            className="p-2 text-gray-400 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6 border-b border-white/5 bg-[#0a0a0a] px-6 py-8 md:hidden"
          >
            <a href="#platform" className="text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>
              Platform
            </a>
            <a href={LEADERBOARD_URL} className="text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>
              Leaderboard
            </a>
            <a href="#resources" className="text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>
              Resources
            </a>
            <a href="#cta" className="text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <div className="flex flex-col gap-4 border-t border-white/5 pt-4">
              <a href={APP_URL} className="w-full rounded-xl bg-white/5 py-3 text-center font-medium">
                Log in
              </a>
              <a href={APP_URL} className="w-full rounded-xl bg-[#bef264] py-3 text-center font-medium text-black">
                Open App
              </a>
            </div>
          </motion.div>
        ) : null}
      </nav>

      <section id="top" className="relative overflow-hidden px-6 pb-20 pt-40">
        <div className="absolute left-1/2 top-1/4 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#bef264]/10 blur-[120px]" />

        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#bef264]/20 bg-[#bef264]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#bef264]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#bef264] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#bef264]" />
            </span>
            Crowd Verdict + Signals
          </motion.div>

          <motion.h1
            {...fadeIn}
            className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl"
          >
            Don&apos;t trust KOLs. <br />
            <span className="bg-gradient-to-r from-[#bef264] to-white/50 bg-clip-text text-transparent">
              Verify them.
            </span>
          </motion.h1>

          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl"
          >
            See what the crowd thinks. Back it with real signals. No hype. No paid narratives.
          </motion.p>

          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={APP_URL}
              className="w-full rounded-full bg-[#bef264] px-8 py-4 text-lg font-bold text-black shadow-[0_0_30px_rgba(190,242,100,0.3)] transition-all hover:scale-105 hover:bg-[#a3e635] active:scale-95 sm:w-auto"
            >
              Check a KOL
            </a>
            <a
              href={LEADERBOARD_URL}
              className="w-full rounded-full border border-white/20 px-8 py-4 text-lg font-bold transition-all hover:bg-white/5 sm:w-auto"
            >
              View Leaderboard
            </a>
          </motion.div>
        </div>
      </section>

      <section id="leaderboard" className="relative px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                className="kol-circuit-bg group relative overflow-hidden rounded-2xl border border-white/5 bg-[#111] p-8"
              >
                <div className="absolute inset-0 bg-[#bef264]/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10 flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#bef264]/20 bg-[#bef264]/10">
                    <stat.icon className="h-7 w-7 text-[#bef264]" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-gray-500">{stat.label}</p>
                    <p className="font-mono text-3xl font-bold tracking-tight">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="platform" className="relative z-10 -mt-10 rounded-[40px] bg-white px-6 py-32 text-black md:rounded-[80px]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Reputation, not just reach.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              See what people really think, then check whether the behavior backs the story.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeIn}
                className="group rounded-3xl border border-gray-100 p-10 transition-colors hover:border-[#bef264]/50"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#bef264]/10 transition-colors group-hover:bg-[#bef264]">
                  <feature.icon className="h-8 w-8 text-[#bef264] transition-colors group-hover:text-black" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                <p className="leading-relaxed text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <MobileComingSoon />

      <section className="relative overflow-hidden px-6 py-32">
        <div className="kol-circuit-bg absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                See whether behavior <br />
                <span className="text-[#bef264]">backs the narrative.</span>
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-gray-400">
                Crowd sentiment gives the read. Signals and on-chain context show whether the story holds up.
              </p>
              <ul className="space-y-4">
                {signalItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#bef264]/20">
                      <ChevronRight className="h-3 w-3 text-[#bef264]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-20 mx-auto max-w-sm -rotate-3 rounded-[32px] bg-white p-8 text-black shadow-2xl transition-transform duration-500 hover:rotate-0 lg:mr-0">
                <div className="mb-8 flex flex-col items-center text-center">
                  <div className="mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white">
                      <div className="kol-avatar h-full w-full" aria-label="CryptoWhale profile avatar" />
                    </div>
                  </div>
                  <h3 className="flex items-center gap-2 text-2xl font-bold">
                    CryptoWhale
                    <ShieldCheck className="h-5 w-5 fill-blue-500/10 text-blue-500" />
                  </h3>
                  <div className="mt-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
                    Verdict score <span className="ml-1 text-green-600">92</span>
                  </div>
                </div>

                <div className="mb-6 rounded-2xl bg-gray-50 p-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Signal Check
                  </p>
                  <p className="text-sm font-bold">
                    Bullish on L2s - <span className="text-green-600">Signal-backed</span>
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase text-gray-400">Followers</p>
                    <p className="font-bold">550K</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase text-gray-400">Avg. ROI</p>
                    <p className="font-bold text-green-600">+15%</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase text-gray-400">Accuracy</p>
                    <p className="font-bold">88%</p>
                  </div>
                </div>

                <div className="mt-6 flex h-12 items-end gap-1">
                  {chartBars.map((height, index) => (
                    <div
                      key={`${height}-${index}`}
                      className="flex-1 rounded-t-sm bg-[#bef264]/30"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 z-10 hidden w-full max-w-xs rotate-3 rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl transition-transform duration-500 hover:rotate-0 md:block lg:-left-20">
                <h4 className="mb-4 flex items-center justify-between font-bold">
                  Leaderboard
                  <ArrowUpRight className="h-4 w-4 text-[#bef264]" />
                </h4>
                <div className="space-y-4">
                  {leaderboardItems.map((item) => (
                    <div key={item.rank} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-gray-500">{item.rank}.</span>
                        <div className="h-6 w-6 rounded-full bg-white/10" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold">{item.score}</span>
                        {item.trend === "up" ? <TrendingUp className="h-3 w-3 text-[#bef264]" /> : null}
                        {item.trend === "down" ? <TrendingDown className="h-3 w-3 text-red-500" /> : null}
                        {item.trend === "steady" ? <Minus className="h-3 w-3 text-gray-500" /> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <RoadmapSection />

      <LandingFaq />

      <section id="cta" className="px-6 py-32">
        <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-[40px] bg-[#bef264] p-12 text-center text-black md:p-24">
          <div className="absolute inset-0 opacity-0 transition-opacity group-hover:bg-black group-hover:opacity-5" />
          <div className="relative z-10">
            <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl">
              Stop guessing. <br />
              Start verifying.
            </h2>
            <a
              href={APP_URL}
              className="inline-flex rounded-full bg-black px-10 py-5 text-xl font-bold text-white shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              Check Your First KOL
            </a>
          </div>
        </div>
      </section>

      <footer id="resources" className="border-t border-white/5 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#bef264]">
                  <Activity className="h-5 w-5 text-black" />
                </div>
                <span className="text-xl font-bold tracking-tight">KOL Verdict</span>
              </div>
              <p className="max-w-xs leading-relaxed text-gray-500">
                Community verdicts and signal checks for people who want more than hype.
              </p>
            </div>
            <div>
              <h5 className="mb-6 font-bold">Platform</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li>
                  <a href="#platform" className="transition-colors hover:text-[#bef264]">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#top" className="transition-colors hover:text-[#bef264]">
                    Company
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-6 font-bold">Resources</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li>
                  <a href="#faq" className="transition-colors hover:text-[#bef264]">
                    FAQ
                  </a>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="transition-colors hover:text-[#bef264]">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-6 font-bold">Social</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li>
                  <a
                    href={TWITTER_URL}
                    className="transition-colors hover:text-[#bef264]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a href="#top" className="transition-colors hover:text-[#bef264]">
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-xs text-gray-600 md:flex-row">
            <p>Copyright KOL Verdict {currentYear}</p>
            <div className="flex items-center gap-8">
              <Link href="/privacy-policy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="transition-colors hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
