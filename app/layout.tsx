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
  "Don't trust KOLs. Verify them with community verdicts, signal checks, and on-chain context.";

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
      { url: "/kol-verdict-mark.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/kol-verdict-mark.png", type: "image/png", sizes: "512x512" }],
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
