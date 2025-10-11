"use client";

import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";

const OUR_WORKS: string[] = [
  "/ourworks/work_001.jpg",
  "/ourworks/work_002.jpg",
  "/ourworks/work_003.jpg",
  "/ourworks/work_004.jpg",
  "/ourworks/work_005.jpg",
  "/ourworks/work_006.jpg",
  "/ourworks/work_007.jpg",
  "/ourworks/work_008.jpg",
  "/ourworks/work_009.jpg",
  "/ourworks/work_010.jpg",
];

export default function OurWorks() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + OUR_WORKS.length) % OUR_WORKS.length),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % OUR_WORKS.length),
    []
  );

  // клавиши для лайтбокса
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, close, prev, next]);

  // прокрутка колёсиком по горизонтали
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) return;
    // если вертикальная прокрутка — переводим её в горизонтальную
    scrollerRef.current.scrollBy({ left: e.deltaY, behavior: "auto" });
  };

  const scrollByX = (delta: number) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id="works" className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold">Наши работы</h2>

        {/* Горизонтальная полоса */}
        <div className="relative mt-8">
          {/* градиенты по краям */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent" />

          {/* стрелки */}
          <button
            onClick={() => scrollByX(-400)}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 hover:bg-black/80"
            aria-label="Прокрутить влево"
          >
            ←
          </button>
          <button
            onClick={() => scrollByX(400)}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 hover:bg-black/80"
            aria-label="Прокрутить вправо"
          >
            →
          </button>

          <div
            ref={scrollerRef}
            onWheel={onWheel}
            className="
              no-scrollbar
              flex gap-4 overflow-x-auto pb-2
              snap-x snap-mandatory
            "
          >
            {OUR_WORKS.map((src, i) => (
              <button
                key={src}
                onClick={() => openAt(i)}
                className="
                  group relative
                  w-[78vw] sm:w-[360px] lg:w-[420px]
                  aspect-video shrink-0
                  overflow-hidden rounded-2xl border border-white/5
                  snap-start
                "
              >
                <Image
                  src={src}
                  alt={`Наши работы #${i + 1}`}
                  fill
                  sizes="(max-width:640px) 78vw, (max-width:1024px) 360px, 420px"
                  className="object-cover"
                  priority={i < 3}
                />
                {/* тёмный оверлей — всегда есть, при hover чуть светлее */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="pointer-events-none absolute right-2 top-2 rounded-md bg-black/50 px-2 py-1 text-xs text-white/80">
                  Нажмите, чтобы увеличить
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Лайтбокс */}
        {open && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
            onClick={close}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="relative mx-auto h-[86vh] w-[92vw] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={OUR_WORKS[index]}
                alt={`Фото ${index + 1}`}
                fill
                sizes="92vw"
                className="object-contain"
                priority
              />
              <button
                onClick={close}
                className="absolute right-3 top-3 rounded-lg border border-white/20 bg-black/60 px-3 py-1.5 text-sm text-white hover:bg-black/80"
                aria-label="Закрыть"
              >
                ✕
              </button>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-3 text-xl hover:bg-black/80"
                aria-label="Предыдущая"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-3 text-xl hover:bg-black/80"
                aria-label="Следующая"
              >
                ›
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white/80">
                {index + 1} / {OUR_WORKS.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
