"use client";

import { useState } from "react";
import NavbarLogo from "./NavbarLogo";

const PHONE = "+375 (33) 657-55-75";
const INSTAGRAM = "https://www.instagram.com/sto_imperia/";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <NavbarLogo />

        <nav className="hidden md:flex items-center gap-8 text-lg">
          <a href="/about" className="hover:text-brand-yellow">
            О нас
          </a>
          <a href="#services" className="hover:text-brand-yellow">
            Услуги
          </a>
          <a href="#works" className="hover:text-brand-yellow">
            Наши работы
          </a>
          <a href="#contacts" className="hover:text-brand-yellow">
            Контакты
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            className="hover:text-brand-yellow">
            Instagram
          </a>
          <a
            href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
            className="btn-outline">
            {PHONE}
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть меню">
          <div className="h-5 w-7 border-y-2 border-brand-yellow" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black h-screen w-full">
          <div className="container flex flex-col gap-5 py-5 h-full">
            <a href="#about" onClick={() => setOpen(false)} className="text-lg font-bold">
              О нас
            </a>
            <a href="#services" onClick={() => setOpen(false)} className="text-lg font-bold">
              Услуги
            </a>
            <a href="#works" onClick={() => setOpen(false)} className="text-lg font-bold">
              Наши работы
            </a>
            <a href="#contacts" onClick={() => setOpen(false)} className="text-lg font-bold">
              Контакты
            </a>
            <a href={INSTAGRAM} target="_blank" onClick={() => setOpen(false)} className="text-lg font-bold">
              Instagram
            </a>
            <a
              className="btn-primary w-full justify-center"
              href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}>
              Позвонить
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
