"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type WhyUsAnimatedShellProps = {
  children: ReactNode;
  className?: string;
};

export const WhyUsAnimatedShell = ({
  children,
  className,
}: WhyUsAnimatedShellProps) => {
  const shellRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [sessionId, setSessionId] = useState(0);
  const prevIntersectingRef = useRef<boolean | null>(null);
  const hasLeftAfterSeenRef = useRef(false);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;

    const scheduleStart = () => queueMicrotask(() => setStarted(true));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scheduleStart();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (prevIntersectingRef.current === true) {
              hasLeftAfterSeenRef.current = true;
            }
            prevIntersectingRef.current = false;
            queueMicrotask(() => setStarted(false));
            return;
          }

          if (hasLeftAfterSeenRef.current) {
            setSessionId((s) => s + 1);
          }
          prevIntersectingRef.current = true;
          scheduleStart();
        });
      },
      {
        rootMargin: "14% 0px 22% 0px",
        threshold: [0, 0.04, 0.1],
      },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={shellRef}
      className="relative isolate flex h-full w-full min-h-[13rem] flex-1 flex-col sm:min-h-[15rem] lg:min-h-0"
    >
      <div
        key={sessionId}
        className={cn(
          "why-us-grid relative isolate grid h-full min-h-[13rem] grid-cols-2 grid-rows-2 gap-3 sm:min-h-[15rem] sm:gap-4 lg:min-h-0 lg:flex-1 [&>*]:h-full [&>*]:min-h-0",
          started && "why-us-animate-started",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};
