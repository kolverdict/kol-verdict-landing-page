import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="focus-ring group inline-flex items-center gap-2.5 rounded-[8px]"
      aria-label="KOL Verdict home"
    >
      <span className="relative grid size-8 overflow-hidden rounded-[7px] border border-white/[0.08] bg-white/[0.03] p-1">
        <Image
          src="/kol-verdict-mark.png"
          alt=""
          width={64}
          height={64}
          className="h-full w-full object-contain saturate-125"
          priority
        />
      </span>
      <span className={compact ? "hidden sm:block" : "block"}>
        <span className="block text-sm font-black uppercase leading-none tracking-[-0.04em] text-white">
          KOL Verdict
        </span>
        <span className="mono-label mt-1 block text-[0.5rem] leading-none text-muted/75">
          Verdict Engine
        </span>
      </span>
    </Link>
  );
}
