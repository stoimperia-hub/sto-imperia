import { IconWarranty, IconQuality, IconMechanics, IconWideRange } from "@/components/icons/ImperiaIcons";

const items = [
  { title: "Гарантия", text: "Письменная гарантия на работы и детали.", Icon: IconWarranty },
  { title: "Качество", text: "Оригинальные и проверенные аналоги запчастей.", Icon: IconQuality },
  { title: "Опытные механики", text: "Только мастера с реальным стажем.", Icon: IconMechanics },
  { title: "Широкий спектр работ", text: "От ТО до сложных ремонтных операций.", Icon: IconWideRange },
];

export default function Advantages() {
  return (
    <section className="section bg-neutral-900/40 border-y border-white/5">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold">Преимущества</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, text, Icon }) => (
            <div key={title} className="card p-6">
              <Icon className="text-brand-yellow" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-brand-gray">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}