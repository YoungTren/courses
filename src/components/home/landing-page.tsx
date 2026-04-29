import Image from "next/image";
import type { ReactNode } from "react";

import { CosmeticsQuizCard } from "@/components/home/cosmetics-quiz-card";
import { ExpandableInfoRow } from "@/components/home/cosmetic-education-row";
import { RevealOnScroll } from "@/components/home/reveal-on-scroll";
import { WhyUsAnimatedShell } from "@/components/home/why-us-animated-shell";
import { cn } from "@/lib/utils";

const heroTeethImageSrc = "/hero-whitening-led.png";
const quizTeethImageSrc = "/quiz-test-visual.png";

/** Стабильное кадрирование между локальной сборкой и Vercel (одинаковый object-position и sizes). */
const heroTeethImageSizes =
  "(max-width: 1024px) 100vw, 584px";
const quizTeethImageSizes =
  "(max-width: 1024px) 100vw, 560px";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F9F9FB] text-gray-900">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 pb-0 pt-6 sm:gap-12 sm:pt-8 lg:grid-cols-2 lg:items-stretch lg:gap-12 lg:pt-10 lg:pb-0">
        <RevealOnScroll>
          <div className="flex w-full min-h-0 min-w-0 flex-col lg:h-full">
          <div className="shrink-0 font-serif mb-7 w-full min-w-0 space-y-5 text-left md:mb-8 md:space-y-6">
            <h1 className="text-[1.875rem] leading-[1.15] font-semibold tracking-[-0.02em] text-[#0f172a] sm:text-[2.125rem] md:text-[2.375rem] lg:text-[2.5rem] lg:leading-[1.12] xl:text-[2.625rem]">
              Отбеливание зубов
            </h1>
            <p className="max-w-2xl text-base leading-snug text-gray-500 sm:text-lg md:text-xl md:leading-snug">
              Стань бьюти мастером и увеличь свой доход в 5 раз
            </p>
          </div>

          <div
            id="services"
            className="shrink-0 scroll-mt-20 space-y-4 pb-[5mm] font-serif md:space-y-5"
          >
            <ExpandableInfoRow title="Минимум усилий в работе">
              <p>
                Перед процедурой, даёшь заполнить анкету, наносишь гель,
                включаешь лампу и ждёшь, когда 15 мин закончится. В зависимости
                от степени осветления, повторяем процесс.
              </p>
            </ExpandableInfoRow>
            <ExpandableInfoRow title="Не требуется медицинского образования">
              <p>
                При косметическом осветлении зубов используются более мягкие и
                щадящие материалы, процедура проходит безболезненно. Все материалы
                относятся к косметическому классу. Все на правовых нормах.
              </p>
            </ExpandableInfoRow>
          </div>

          <div
            id="why-us"
            className="relative mt-9 flex min-h-0 flex-1 flex-col scroll-mt-20 lg:mt-9"
          >
            <WhyUsAnimatedShell>
              <WhyCard
                compact
                className="why-us-card-enter"
                title="Лёгкий старт"
                text={
                  <p>
                    Скромный стартовый бюджет - доход уже после обучения. Можно
                    выстроить личный бренд и брендированную упаковку.
                  </p>
                }
              />
              <WhyCard
                compact
                className="why-us-card-enter"
                title="Быстрая окупаемость"
                text={
                  <ul className="list-disc space-y-0.5 pl-3 marker:text-gray-400">
                    <li>Набор на процедуру - 3,5 $</li>
                    <li>Геля хватает на 9 процедур</li>
                    <li>LED-лампа - 310 $</li>
                    <li>Шкала Vita - 35 $</li>
                    <li>Очки - 2,2 $</li>
                    <li>Доставка - от 192 $ (вес, регион)</li>
                    <li>Срок ~1,5 мес.</li>
                  </ul>
                }
              />
              <WhyCard
                compact
                className="why-us-card-enter"
                title="Подарок"
                text={
                  <p>
                    С обучением - набор на 20 процедур и LED-лампа в подарок.
                  </p>
                }
              />
              <WhyCard
                compact
                className="why-us-card-enter"
                title={
                  <span className="whitespace-nowrap">Актуальные знания</span>
                }
                text={
                  <p>
                    Наши специалисты минимум раз в полгода проходят новое обучение,
                    чтобы быть в курсе актуальных трендов
                  </p>
                }
              />

              <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center p-2">
                <h2 className="font-serif max-w-[min(100%,11rem)] text-center text-[1.0625rem] leading-[1.15] font-semibold tracking-tight text-[#0f172a] sm:text-xl">
                  <span className="why-us-badge-enter inline-block rounded-full bg-[#F9F9FB]/95 px-3 py-2 shadow-[0_1px_3px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.06] backdrop-blur-[1px]">
                    Почему мы
                  </span>
                </h2>
              </div>
            </WhyUsAnimatedShell>
          </div>
        </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <div className="relative mt-10 flex min-h-0 w-full min-w-0 flex-col self-stretch lg:mt-0 lg:h-full lg:min-h-0">
          <div className="relative flex min-h-[20rem] w-full flex-1 flex-col overflow-hidden rounded-[1.25rem] bg-gray-100 shadow-[0_8px_32px_rgba(15,23,42,0.07)] ring-1 ring-black/[0.06] lg:min-h-0 lg:flex-1 lg:self-stretch">
            <Image
              src={heroTeethImageSrc}
              alt="Косметическое отбеливание зубов: LED-лампа и процедура"
              fill
              sizes={heroTeethImageSizes}
              quality={90}
              priority
              className="object-cover"
              style={{ objectPosition: "50% 42%" }}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent sm:h-32"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center p-4 pb-5 sm:p-5 sm:pb-6">
              <a
                href="#contacts"
                className="pointer-events-auto inline-flex w-full max-w-xs items-center justify-center rounded-full bg-green-400 px-6 py-3 text-center text-sm font-medium text-gray-900 transition hover:bg-green-500 sm:max-w-none sm:w-auto"
              >
                Приобрести курс
              </a>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      <section id="cosmetics" className="mx-auto max-w-7xl scroll-mt-20 px-8 pb-16 pt-12 lg:pt-14">
        <div className="flex flex-col gap-12 lg:gap-14">
          <RevealOnScroll>
          <div
            id="quiz"
            className="scroll-mt-20 flex flex-col overflow-hidden rounded-[1.75rem] bg-[#F4F5F7] shadow-[0_8px_30px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.08] lg:flex-row lg:items-stretch"
          >
            <div className="relative aspect-[16/9] min-h-[14rem] w-full shrink-0 sm:min-h-[18rem] lg:aspect-auto lg:h-auto lg:min-h-[22rem] lg:w-[46%] lg:flex-none lg:self-stretch">
              <Image
                src={quizTeethImageSrc}
                alt="Косметический кабинет: клиентка в кресле заполняет анкету"
                fill
                sizes={quizTeethImageSizes}
                quality={90}
                priority
                className="object-cover"
                style={{ objectPosition: "50% 50%" }}
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[min(42%,11rem)] bg-gradient-to-r from-transparent via-[#F4F5F7]/55 to-[#F4F5F7] sm:w-[min(38%,13rem)] lg:w-[min(34%,15rem)]"
                aria-hidden
              />
            </div>
            <CosmeticsQuizCard className="min-h-[22rem] flex-1 rounded-none border-t border-gray-200/80 shadow-none ring-0 sm:min-h-[24rem] lg:min-h-0 lg:h-full lg:rounded-none lg:border-t-0 lg:border-l-0" />
          </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={70}>
          <div
            id="contacts"
            className="scroll-mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6 [&>*]:min-h-0"
          >
          <VerticalFeatureCard variant="gradient" title="Прибыль">
            <div className="space-y-2 leading-snug">
              <p>При расчёте 1 индивидуального набора + доставка.</p>
              <p>
                Выходит ~8,13&nbsp;$, а процедура в России в среднем стоит
                49&nbsp;$ - значит 40&nbsp;$ у нас чистой прибыли.
              </p>
              <p>
                Если брать по 1 клиенту в день, то получается: 30 дней × 40&nbsp;$ =
                1200&nbsp;$ чистой прибыли.
              </p>
            </div>
          </VerticalFeatureCard>
          <VerticalFeatureCard
            variant="solid"
            title={<span className="normal-case tracking-normal">Тарифы</span>}
          >
            <ul className="space-y-1 leading-snug pl-0">
              <li className="flex gap-2">
                <span aria-hidden className="shrink-0">
                  ✅
                </span>
                <span>Полный пакет учебного материала</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="shrink-0">
                  ✅
                </span>
                <span>Контакты на поставщиков без посредников</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="shrink-0">
                  ✅
                </span>
                <span>
                  Добавление в чат с учениками и экспертом по осветлению зубов.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="shrink-0">
                  ✅
                </span>
                <span>Сертификат о прохождении</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="shrink-0">
                  ✅
                </span>
                <span>Доступ к обучающему материалу 6&nbsp;мес.</span>
              </li>
            </ul>
            <p className="mt-2 font-semibold text-[#111827]">
              Цена: 29&nbsp;900&nbsp;₽
            </p>
          </VerticalFeatureCard>
          <VerticalFeatureCard variant="gradient" title="Как проходит обучение!">
            <ul className="space-y-1 leading-snug pl-0">
              <li className="flex gap-2">
                <span aria-hidden className="shrink-0">
                  ✅
                </span>
                <span>Перед обучением предоплата 100%</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="shrink-0">
                  ✅
                </span>
                <span>Открывается доступ к платформе с обучением</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="shrink-0">
                  ✅
                </span>
                <span>
                  Открытие продаж по дополнению к курсу «Секретные-секреты»
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="shrink-0">
                  ✅
                </span>
                <span>Подключают к общему чату с учениками</span>
              </li>
            </ul>
          </VerticalFeatureCard>
        </div>
        </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

const WhyCard = ({
  title,
  text,
  className,
  compact,
}: {
  title: ReactNode;
  text: ReactNode;
  className?: string;
  compact?: boolean;
}) => (
  <div
    className={cn(
      compact
        ? "relative z-0 flex h-full min-h-0 flex-col rounded-2xl bg-gray-100 p-3 shadow-[0_1px_2px_rgba(15,23,42,0.05)] ring-1 ring-black/[0.05] transition hover:shadow-md sm:p-3.5"
        : "rounded-3xl bg-gray-100 p-8 transition hover:shadow-lg",
      className,
    )}
  >
    <h3
      className={cn(
        "shrink-0 tracking-normal",
        compact
          ? "mb-1 w-full text-center font-sans text-[0.75rem] leading-tight font-semibold text-[#111827] sm:text-[0.8125rem]"
          : "mb-4 text-xl",
      )}
    >
      {title}
    </h3>
    <div
      className={cn(
        compact
          ? "font-sans flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain text-[0.625rem] leading-[1.38] text-gray-600 [scrollbar-width:thin] sm:text-[0.6875rem]"
          : "text-sm leading-relaxed text-gray-600",
      )}
    >
      {text}
    </div>
  </div>
);

const VerticalFeatureCard = ({
  variant,
  title,
  children,
}: {
  variant: "solid" | "gradient";
  title: ReactNode;
  children: ReactNode;
}) => (
  <article className="relative flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] p-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.05] sm:p-5">
    {variant === "gradient" ? (
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200/95 to-gray-500/35"
        aria-hidden
      />
    ) : (
      <div className="absolute inset-0 bg-gray-100" aria-hidden />
    )}
    <div className="relative z-10 flex min-h-0 flex-1 flex-col gap-2">
      <h3 className="shrink-0 font-sans text-base font-semibold tracking-wide text-[#111827] uppercase">
        {title}
      </h3>
      <div className="min-h-0 flex-1 text-sm leading-snug text-gray-700">
        {children}
      </div>
    </div>
  </article>
);

