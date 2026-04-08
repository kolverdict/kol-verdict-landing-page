import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

const description =
  "Discover crypto KOL reputation, review claims, compare credibility signals, and move from noise to signal with KOL Verdict.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kolverdict.fun"),
  title: "KOL Verdict | Crypto KOL Reputation Signals",
  description,
  applicationName: "KOL Verdict",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KOL Verdict | Crypto KOL Reputation Signals",
    description,
    url: "https://kolverdict.fun",
    siteName: "KOL Verdict",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KOL Verdict crypto reputation signal interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KOL Verdict | Crypto KOL Reputation Signals",
    description,
    creator: "@KolsVerdict",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/kol-verdict-logo.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/kol-verdict-logo.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#080b0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrument.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
