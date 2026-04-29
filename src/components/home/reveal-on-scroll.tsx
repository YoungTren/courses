"use client";

import {
  type CSSProperties,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Задержка перед анимацией после входа в зону видимости (каскад карточек). */
  delayMs?: number;
};

export const RevealOnScroll = ({
  children,
  className,
  delayMs = 0,
}: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const scheduleReveal = () => {
      queueMicrotask(() => setShown(true));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scheduleReveal();
      return;
    }

    const scheduleHide = () => queueMicrotask(() => setShown(false));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scheduleReveal();
          } else {
            scheduleHide();
          }
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

  const style: CSSProperties | undefined =
    delayMs > 0
      ? { transitionDelay: shown ? `${delayMs}ms` : "0ms" }
      : undefined;

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        "transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        className,
      )}
    >
      {children}
    </div>
  );
};
