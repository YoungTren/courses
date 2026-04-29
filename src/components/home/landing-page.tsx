import Image from "next/image";

import { CosmeticsQuizCard } from "@/components/home/cosmetics-quiz-card";
import { ExpandableInfoRow } from "@/components/home/cosmetic-education-row";
import { FeatureCard } from "@/components/home/feature-card";
import { RevealOnScroll } from "@/components/home/reveal-on-scroll";
import { WhyCard } from "@/components/home/why-card";
import { WhyUsAnimatedShell } from "@/components/home/why-us-animated-shell";

const heroTeethImageSrc = "/hero-whitening-led.png";
const quizTeethImageSrc = "/quiz-test-visual.png";

/** Стабильное кадрирование между локальной сборкой и Vercel. */
const heroTeethImageSizes =
  "(max-width: 1024px) 100vw, 584px";
const quizTeethImageSizes =
  "(max-width: 1024px) 100vw, 560px";

export const LandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 text-gray-900">
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute top-0 right-0 size-[800px] rounded-full bg-gradient-to-br from-emerald-100/40 via-teal-100/30 to-transparent opacity-60 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-[600px] rounded-full bg-gradient-to-tr from-cyan-100/40 via-emerald-100/30 to-transparent opacity-50 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 size-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-3xl" />
      </div>

      <section className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 pb-0 pt-12 sm:gap-14 sm:pt-16 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:pt-20 lg:pb-0">
        <RevealOnScroll>
          <div className="animate-fade-in flex w-full min-h-0 min-w-0 flex-col lg:h-full">
            <div className="mb-8 w-full min-w-0 shrink-0 space-y-4 text-left font-serif md:mb-10 md:space-y-5">
              <h1 className="max-w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-[clamp(1.25rem,4vw,2.75rem)] leading-[1.1] font-extrabold tracking-[-0.03em] text-transparent sm:text-[clamp(1.5rem,3.8vw,3rem)] md:leading-[1.08] lg:whitespace-nowrap lg:text-[clamp(1.75rem,3.4vw,3.25rem)] xl:text-[clamp(2rem,3vw,3.5rem)]">
                Отбеливание зубов
              </h1>
              <p className="max-w-full text-[clamp(0.8125rem,2.2vw,1.125rem)] leading-snug font-medium text-gray-600 sm:text-[clamp(0.875rem,2vw,1.25rem)] md:leading-snug lg:whitespace-nowrap lg:text-[clamp(0.9375rem,1.75vw,1.375rem)] xl:text-[clamp(1rem,1.5vw,1.5rem)]">
                Стань бьюти мастером и увеличь свой доход в{" "}
                <span className="font-bold text-emerald-600">5 раз</span>
              </p>
            </div>

            <div
              id="services"
              className="shrink-0 scroll-mt-20 space-y-5 pb-8 font-serif md:space-y-6"
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
                  щадящие материалы, процедура проходит безболезненно. Все
                  материалы относятся к косметическому классу. Все на правовых
                  нормах.
                </p>
              </ExpandableInfoRow>
            </div>

            <div
              id="why-us"
              className="relative mt-12 flex min-h-0 flex-1 flex-col scroll-mt-20 lg:mt-12"
            >
              <div className="rounded-[2rem] bg-gradient-to-br from-white/70 via-white/60 to-emerald-50/40 p-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] ring-1 ring-white/60 sm:p-5">
                <WhyUsAnimatedShell>
                  <WhyCard
                    compact
                    className="why-us-card-enter"
                    title="Лёгкий старт"
                    text={
                      <p>
                        Скромный стартовый бюджет - доход уже после обучения.
                        Можно выстроить личный бренд и брендированную упаковку.
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
                      <span className="whitespace-nowrap">
                        Актуальные знания
                      </span>
                    }
                    text={
                      <p>
                        Наши специалисты минимум раз в полгода проходят новое
                        обучение, чтобы быть в курсе актуальных трендов
                      </p>
                    }
                  />

                  <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center p-2">
                    <h2 className="max-w-[min(100%,12rem)] text-center text-xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                      <span className="why-us-badge-enter inline-block rounded-full bg-gradient-to-br from-white via-emerald-50/80 to-white px-5 py-3 shadow-[0_8px_32px_rgba(16,185,129,0.2)] ring-2 ring-emerald-100/80 backdrop-blur-md">
                        Почему мы
                      </span>
                    </h2>
                  </div>
                </WhyUsAnimatedShell>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <div className="animation-delay-200 relative mt-10 flex min-h-0 w-full min-w-0 flex-col self-stretch animate-fade-in lg:mt-0 lg:h-full lg:min-h-0">
            <div className="group relative flex min-h-[24rem] w-full flex-1 flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-100 to-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-white/40 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.16)] lg:min-h-0 lg:flex-1 lg:self-stretch">
              <Image
                src={heroTeethImageSrc}
                alt="Косметическое отбеливание зубов: LED-лампа и процедура"
                fill
                sizes={heroTeethImageSizes}
                quality={90}
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "50% 42%" }}
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 via-black/30 to-transparent sm:h-44"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center p-5 pb-7 sm:p-6 sm:pb-8">
                <a
                  href="#contacts"
                  className="group/btn pointer-events-auto relative inline-flex w-full max-w-xs items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-center text-base font-bold text-white shadow-[0_10px_40px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600 hover:shadow-[0_15px_50px_rgba(16,185,129,0.5)] sm:max-w-none sm:w-auto"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                  <span className="relative">Приобрести курс</span>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section
        id="cosmetics"
        className="relative mx-auto max-w-7xl scroll-mt-20 px-8 pb-20 pt-16 lg:pt-20"
      >
        <div className="flex flex-col gap-16 lg:gap-20">
          <RevealOnScroll>
            <div
              id="quiz"
              className="group flex scroll-mt-20 flex-col overflow-hidden rounded-[1.75rem] bg-[#F4F5F7] shadow-[0_8px_30px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.08] lg:min-h-[22rem] lg:flex-row lg:items-stretch"
            >
              <div className="relative aspect-[16/9] min-h-[14rem] w-full shrink-0 overflow-hidden sm:min-h-[18rem] lg:aspect-auto lg:h-auto lg:min-h-[22rem] lg:w-[46%] lg:flex-none lg:self-stretch">
                <Image
                  src={quizTeethImageSrc}
                  alt="Косметический кабинет: клиентка в кресле заполняет анкету"
                  fill
                  sizes={quizTeethImageSizes}
                  quality={90}
                  priority
                  className="object-cover lg:transition-transform lg:duration-700 lg:group-hover:scale-105"
                  style={{ objectPosition: "50% 50%" }}
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[min(42%,11rem)] bg-gradient-to-r from-transparent via-[#F4F5F7]/55 to-[#F4F5F7] sm:w-[min(38%,13rem)] lg:w-[min(34%,15rem)]"
                  aria-hidden
                />
              </div>
              <CosmeticsQuizCard className="min-h-[22rem] flex-1 rounded-none border-t border-gray-200/80 shadow-none ring-0 sm:min-h-[24rem] lg:h-full lg:min-h-0 lg:rounded-none lg:border-t-0 lg:border-l-0" />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={70}>
            <div
              id="contacts"
              className="scroll-mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 [&>*]:min-h-0"
            >
              <FeatureCard variant="gradient" title="Прибыль">
                <div className="space-y-2 leading-snug">
                  <p>При расчёте 1 индивидуального набора + доставка.</p>
                  <p>
                    Выходит ~8,13&nbsp;$, а процедура в России в среднем стоит
                    49&nbsp;$ - значит 40&nbsp;$ у нас чистой прибыли.
                  </p>
                  <p>
                    Если брать по 1 клиенту в день, то получается: 30 дней ×
                    40&nbsp;$ = 1200&nbsp;$ чистой прибыли.
                  </p>
                </div>
              </FeatureCard>
              <FeatureCard
                variant="solid"
                title={
                  <span className="normal-case tracking-normal">Тарифы</span>
                }
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
                      Добавление в чат с учениками и экспертом по осветлению
                      зубов.
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
                <p className="mt-2 font-semibold text-gray-900">
                  Цена: 29&nbsp;900&nbsp;₽
                </p>
              </FeatureCard>
              <FeatureCard variant="gradient" title="Как проходит обучение!">
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
              </FeatureCard>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};
