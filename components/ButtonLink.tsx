import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const baseClass =
  "focus-ring inline-flex min-h-11 items-center justify-center rounded-[8px] px-4 py-2.5 text-sm font-semibold transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0";

const variantClasses = {
  primary: "border border-accent/70 bg-accent text-[#071409] shadow-button hover:bg-accent/90",
  secondary: "border border-white/12 bg-white/[0.055] text-white hover:border-accent/35 hover:bg-white/[0.085]",
  ghost: "border border-transparent text-muted hover:border-white/10 hover:bg-white/[0.045] hover:text-white",
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${baseClass} ${variantClasses[variant]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </a>
  );
}
