"use client";

import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type ExpandableInfoRowProps = {
  title: ReactNode;
  children: ReactNode;
};

export const ExpandableInfoRow = ({
  title,
  children,
}: ExpandableInfoRowProps) => {
  const [pinnedOpen, setPinnedOpen] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);
  const expanded = pinnedOpen || hoverOpen;

  return (
    <div
      className="relative z-10 hover:z-[38]"
      onMouseEnter={() => setHoverOpen(true)}
      onMouseLeave={() => setHoverOpen(false)}
    >
      <div
        className={cn(
          "relative bg-white shadow-[0_1px_2px_rgba(15,23,42,0.05),0_4px_16px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.04]",
          "transition-shadow duration-500 ease-[cubic-bezier(0.25,0.9,0.35,1)] motion-reduce:duration-150 hover:shadow-[0_2px_4px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.06)]",
          expanded
            ? "rounded-t-[1.25rem] rounded-b-none"
            : "rounded-[1.25rem]",
        )}
      >
        <button
          type="button"
          className={cn(
            "flex w-full cursor-pointer items-start justify-between gap-4 px-5 py-[1.05rem] text-left sm:items-center sm:py-4",
            "font-serif text-[0.9375rem] leading-snug font-semibold tracking-[0.01em] text-[#111827]",
            "sm:text-base",
          )}
          aria-expanded={expanded}
          onClick={() => setPinnedOpen((p) => !p)}
        >
          <span className="min-w-0 flex-1">{title}</span>
          <ChevronDown
            aria-hidden
            className={cn(
              "size-[1.125rem] shrink-0 text-gray-400 transition-transform duration-500 ease-[cubic-bezier(0.25,0.9,0.35,1)] motion-reduce:duration-150 sm:size-5",
              expanded && "rotate-180",
            )}
          />
        </button>
      </div>

      <div
        role="region"
        aria-hidden={!expanded}
        className={cn(
          "absolute top-full right-0 left-0 z-50 -mt-px rounded-b-[1.25rem] border border-black/[0.06] border-t-0 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.12)]",
          "overflow-hidden px-5 transition-[max-height,opacity,transform,padding] duration-500 ease-[cubic-bezier(0.25,0.9,0.35,1)] motion-reduce:duration-150",
          expanded
            ? "pointer-events-auto max-h-[min(80vh,28rem)] translate-y-0 opacity-100 pt-3 pb-4"
            : "pointer-events-none max-h-0 -translate-y-1 opacity-0 py-0",
        )}
      >
        <div
          className={cn(
            "font-sans text-[0.8125rem] leading-relaxed text-gray-600 sm:text-sm",
            "[&_p+p]:mt-2",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
