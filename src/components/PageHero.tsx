import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <p className="eyebrow animate-[fade-up_0.5s_ease-out_both]">{eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-4xl animate-[fade-up_0.7s_ease-out_both]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty animate-[fade-up_0.9s_ease-out_both]">
            {subtitle}
          </p>
        )}
        {children}
      </div>
      <div className="hairline" />
    </section>
  );
}
