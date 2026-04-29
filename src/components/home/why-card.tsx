import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type WhyCardProps = {
  title: ReactNode;
  text: ReactNode;
  className?: string;
  compact?: boolean;
};

export const WhyCard = ({
  title,
  text,
  className,
  compact,
}: WhyCardProps) => (
  <div
    className={cn(
      compact
        ? "group relative z-0 flex h-full min-h-0 flex-col rounded-2xl bg-gradient-to-br from-white/90 to-gray-50/80 p-3 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-white/80 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,185,129,0.15)] hover:ring-emerald-200/40 sm:p-3.5"
        : "group relative z-0 flex min-h-0 flex-col rounded-2xl bg-gradient-to-br from-white/90 to-gray-50/80 p-8 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-white/80 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(16,185,129,0.15)] hover:scale-[1.02]",
      className,
    )}
  >
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 transition-all duration-500 group-hover:from-emerald-500/5 group-hover:to-teal-500/5",
      )}
      aria-hidden
    />
    <h3
      className={cn(
        "relative shrink-0 tracking-normal text-gray-900",
        compact
          ? "mb-1 w-full text-center font-sans text-[0.75rem] leading-tight font-semibold sm:text-[0.8125rem]"
          : "mb-4 text-xl font-bold tracking-tight",
      )}
    >
      {title}
    </h3>
    <div
      className={cn(
        "relative flex min-h-0 flex-1 flex-col overflow-y-auto text-gray-600",
        compact
          ? "font-sans text-[0.625rem] leading-[1.38] overscroll-contain [scrollbar-width:thin] sm:text-[0.6875rem]"
          : "text-sm leading-relaxed sm:text-base",
      )}
    >
      {text}
    </div>
  </div>
);
