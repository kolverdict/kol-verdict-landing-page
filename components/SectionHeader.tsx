type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mono-label text-xs text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{copy}</p>
      ) : null}
    </div>
  );
}
