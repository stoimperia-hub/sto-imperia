"use client";
import Image from "next/image";
import { useRef, useState } from "react";

type Service = {
  title: string;
  price: string;
  desc?: string;
  img?: string;
};

const SERVICES: Service[] = [
  {
    title: "Заправка кондиционера",
    price: "от 25р.",
    desc: "Заправка и проверка герметичности системы.",
    img: "/services/ac.png",
  },
  {
    title: "Замена колодок",
    price: "от 30р.",
    desc: "Передние/задние, смазка направляющих.",
    img: "/services/brake.png",
  },
  {
    title: "Замена масла",
    price: "от 30р.",
    desc: "Двигатель + заменa фильтра.",
    img: "/services/oil.png",
  },
  {
    title: "Замена ГРМ",
    price: "от 150р.",
    desc: "Ремкомплект, ролики, помпа по необходимости.",
    img: "/services/timing.png",
  },
  {
    title: "Компьютерная диагностика",
    price: "30р.",
    desc: "Сканер, чтение/сброс ошибок, рекомендации.",
    img: "/services/obd.png",
  },
  {
    title: "Диагностика подвески",
    price: "10р.",
    desc: "Осмотр узлов, люфты, амортизаторы.",
    img: "/services/suspension.png",
  },
  {
    title: "Замена масла в АКПП/МКПП",
    price: "от 30р.",
    desc: "Частичная/полная, фильтр/прокладка по ТЗ.",
    img: "/services/atf.png",
  },
  {
    title: "Подбор и продажа запчастей",
    price: "Выгодные цены",
    desc: "Оригинал и проверенные аналоги.",
    img: "/services/parts.png",
  },
];

const PHONE = "+375 (33) 657-55-75";

export default function Services() {
  const [i, setI] = useState(0);
  const s = SERVICES[i];

  const startX = useRef(0);
  const startY = useRef(0);
  const dx = useRef(0);
  const dy = useRef(0);
  const swiping = useRef(false);

  const THRESHOLD = 48; // пикселей для срабатывания свайпа

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
    dx.current = 0;
    dy.current = 0;
    swiping.current = true;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!swiping.current) return;
    const t = e.touches[0];
    dx.current = t.clientX - startX.current;
    dy.current = t.clientY - startY.current;

    // если вертикаль преобладает — не считаем это свайпом (даём странице скроллиться)
    if (Math.abs(dy.current) > Math.abs(dx.current)) return;

    // Можно отменить горизонтальную прокрутку страницы (необязательно)
    // e.preventDefault();
  };

  const onTouchEnd = () => {
    if (!swiping.current) return;
    swiping.current = false;

    if (
      Math.abs(dx.current) > Math.abs(dy.current) &&
      Math.abs(dx.current) > THRESHOLD
    ) {
      if (dx.current < 0) next(); // свайп влево -> следующая
      else prev(); // свайп вправо -> предыдущая
    }
  };

  const prev = () => setI((p) => (p - 1 + SERVICES.length) % SERVICES.length);
  const next = () => setI((p) => (p + 1) % SERVICES.length);

  return (
    <section id="services" className="section bg-neutral-950/30">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Левый текстовый блок */}
          <div>
            {" "}
            <p className="text-brand-yellow font-semibold uppercase">
              Наши
            </p>{" "}
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">
              {" "}
              Услуги и цены{" "}
            </h2>{" "}
            <p className="mt-4 text-brand-gray max-w-prose">
              {" "}
              Мы работаем с профессиональным оборудованием и запчастями,
              согласуем смету до начала работ и соблюдаем сроки. Для записи —
              позвоните нам или оставьте заявку.{" "}
            </p>{" "}
          </div>

          {/* Карусель с выбранной услугой — свайпы на мобиле */}
          <div
            className="relative"
            style={{ minHeight: "295px" }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}>
            {/* Стрелки (десктоп) */}
            <button
              onClick={prev}
              className="absolute -left-3 top-1/2 -translate-y-1/2 hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 hover:bg-black/80"
              aria-label="Предыдущая услуга">
              ←
            </button>
            <button
              onClick={next}
              className="absolute -right-3 top-1/2 -translate-y-1/2 hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 hover:bg-black/80"
              aria-label="Следующая услуга">
              →
            </button>

            <div className="flex flex-col sm:grid sm:grid-cols-2 sm:items-center gap-6">
              {/* Картинка услуги */}
              <div className="relative h-44 sm:h-48">
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-brand-yellow/10 blur-2xl" />
                <Image
                  src={s.img ?? "/services/placeholder.png"}
                  alt={s.title}
                  fill
                  className="object-contain drop-shadow-[0_10px_30px_rgba(253,205,0,0.25)]"
                  sizes="(max-width: 640px) 100vw, 360px"
                  priority
                />
              </div>

              {/* Текст и кнопки */}
              <div className="sm:col-start-2 w-full text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6">
                  <div className="mx-auto sm:mx-0">
                    <h3 className="text-xl md:text-2xl font-bold">{s.title}</h3>
                    {s.desc && (
                      <p className="mt-1 text-sm text-brand-gray">{s.desc}</p>
                    )}
                  </div>
                  <div className="text-center sm:text-right">
                    <div className="text-lg font-bold text-brand-yellow">
                      {s.price}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 justify-center sm:justify-start">
                  <a
                    className="btn-primary"
                    href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}>
                    Записаться
                  </a>
                  <a className="btn-outline" href="#works">
                    Посмотреть примеры работ
                  </a>
                </div>

                {/* точки-переключатели */}
                <div className="mt-5 flex gap-2 justify-center sm:justify-start">
                  {SERVICES.map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Перейти к ${idx + 1}-й услуге`}
                      onClick={() => setI(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === idx
                          ? "w-6 bg-brand-yellow"
                          : "w-3 bg-white/25 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Сетка карточек ниже (быстрый выбор) — оставлена только для ≥ lg */}
        <div className="mt-10 hidden lg:grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((item, idx) => (
            <button
              key={item.title}
              onClick={() => setI(idx)}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/70 transition">
              <div className="absolute inset-0">
                <Image
                  src={item.img ?? "/services/placeholder.png"}
                  alt=""
                  fill
                  className="object-cover opacity-20 group-hover:opacity-35 transition"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="relative p-5 text-left">
                <div className="text-sm text-brand-gray">Услуга</div>
                <div className="mt-1 font-semibold">{item.title}</div>
                <div className="mt-1 text-brand-yellow text-sm">
                  {item.price}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
