import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KOL Verdict",
    short_name: "KOL Verdict",
    description:
      "Community verdicts, signal checks, and on-chain context for crypto KOLs.",
    start_url: "/",
    display: "standalone",
    background_color: "#080b0c",
    theme_color: "#080b0c",
    icons: [
      {
        src: "/kol-verdict-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
