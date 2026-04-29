"use client";

export const CosmeticsQuizCard = () => (
  <article
    id="quiz"
    className="relative flex min-h-[20rem] w-full scroll-mt-20 flex-col overflow-hidden rounded-[1.75rem] p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.05] sm:min-h-[22rem] lg:min-h-0"
  >
    <div className="absolute inset-0 bg-gray-100" aria-hidden />
    <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center gap-6">
      <h2 className="w-full max-w-4xl px-1 text-center font-serif text-base leading-snug tracking-tight text-[#0f172a] sm:text-lg md:text-[clamp(0.9375rem,1.65vw,1.125rem)] md:whitespace-nowrap lg:text-[clamp(1rem,1.5vw,1.25rem)]">
        Пройди легкий тест и получи план по отбеливанию зубов
      </h2>
      <div className="min-h-0 w-full flex-1 overflow-y-auto text-sm leading-snug text-gray-700 [scrollbar-width:thin]">
        <form
          className="mx-auto flex w-full max-w-xl flex-col gap-4 sm:max-w-2xl"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mx-auto grid w-full grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-0 md:gap-x-14">
            <fieldset className="flex flex-col items-center gap-2 border-0 p-0 text-center">
              <legend className="mb-0 w-full px-1 text-[0.8125rem] font-medium text-[#111827]">
                Есть медицинское образование?
              </legend>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <label className="flex cursor-pointer items-center gap-2 text-[0.8125rem] text-gray-700">
                  <input
                    type="radio"
                    name="med-education"
                    value="yes"
                    className="size-3.5 accent-green-500"
                  />
                  Да
                </label>
                <label className="flex cursor-pointer items-center gap-2 text-[0.8125rem] text-gray-700">
                  <input
                    type="radio"
                    name="med-education"
                    value="no"
                    className="size-3.5 accent-green-500"
                  />
                  Нет
                </label>
              </div>
            </fieldset>

            <fieldset className="flex flex-col items-center gap-2 border-0 p-0 text-center">
              <legend className="mb-0 w-full px-1 text-[0.8125rem] font-medium text-[#111827]">
                Ты работаешь в бьюти сфере?
              </legend>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <label className="flex cursor-pointer items-center gap-2 text-[0.8125rem] text-gray-700">
                  <input
                    type="radio"
                    name="beauty-work"
                    value="yes"
                    className="size-3.5 accent-green-500"
                  />
                  Да
                </label>
                <label className="flex cursor-pointer items-center gap-2 text-[0.8125rem] text-gray-700">
                  <input
                    type="radio"
                    name="beauty-work"
                    value="no"
                    className="size-3.5 accent-green-500"
                  />
                  Нет
                </label>
              </div>
            </fieldset>
          </div>

          <textarea
            id="cosmetics-course-goal"
            name="course-goal"
            rows={3}
            placeholder="Для чего тебе этот курс?"
            aria-label="Для чего тебе этот курс?"
            className="w-full resize-y rounded-lg border border-gray-200 bg-white/90 px-2.5 py-2 text-[0.8125rem] leading-snug text-gray-800 outline-none placeholder:text-gray-500 focus:border-gray-300 focus:ring-2 focus:ring-green-400/25"
          />

          <button
            type="submit"
            className="mt-1 w-full rounded-full bg-green-400 px-3 py-2 text-[0.8125rem] font-medium text-gray-900 transition hover:bg-green-500"
          >
            Получить план
          </button>
        </form>
      </div>
    </div>
  </article>
);
