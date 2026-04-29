import type { ReactNode } from "react";

type FeatureCardProps = {
  variant: "solid" | "gradient";
  title: ReactNode;
  children: ReactNode;
};

export const FeatureCard = ({
  variant,
  title,
  children,
}: FeatureCardProps) => (
  <article className="group relative flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] ring-1 ring-white/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-7">
    {variant === "gradient" ? (
      <>
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50/80 to-cyan-50/60"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
      </>
    ) : (
      <>
        <div
          className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/90 to-gray-100/80"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-emerald-50/0 to-emerald-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
      </>
    )}
    <div className="absolute top-0 right-0 size-32 rounded-full bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
    <div className="relative z-10 flex min-h-0 flex-1 flex-col gap-3">
      <h3 className="shrink-0 font-sans text-lg font-extrabold tracking-tight text-gray-900 uppercase">
        {title}
      </h3>
      <div className="min-h-0 flex-1 text-sm leading-relaxed text-gray-700">
        {children}
      </div>
    </div>
  </article>
);
