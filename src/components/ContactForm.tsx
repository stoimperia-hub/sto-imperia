"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setError(null);

    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data?.error || "send_failed");
      setSent(true);
      e.currentTarget.reset();
    } catch {
      setError("Не удалось отправить. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section" id="callback">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Оставьте заявку — мы вам перезвоним</h2>
            <p className="mt-2 text-brand-gray">Укажите контактный номер и кратко опишите проблему.</p>
          </div>

          <form onSubmit={onSubmit} className="card p-6">
            {/* Honeypot — скрытое поле (боты часто заполняют) */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <label className="text-sm text-brand-gray">Ваше имя</label>
            <input required className="mt-1 w-full rounded-lg bg-black/50 border border-white/10 p-3" name="name" placeholder="Алексей" />

            <label className="mt-4 text-sm text-brand-gray">Телефон</label>
            <input required className="mt-1 w-full rounded-lg bg-black/50 border border-white/10 p-3" name="phone" placeholder="+375 (__) ___-__-__" />

            <label className="mt-4 text-sm text-brand-gray">Комментарий</label>
            <textarea className="mt-1 w-full rounded-lg bg-black/50 border border-white/10 p-3" name="comment" rows={4} placeholder="Что случилось с авто?" />

            <button disabled={loading} className="btn-primary mt-6 justify-center">
              {loading ? "Отправка..." : "Отправить заявку"}
            </button>

            {sent && <div className="mt-3 text-brand-yellow">Спасибо! Мы свяжемся с вами в ближайшее время.</div>}
            {error && <div className="mt-3 text-red-400">{error}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
