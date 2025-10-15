import Image from "next/image";

const PHONE = "+375 (33) 657-55-75"; 

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-30 text-white" itemScope itemType="https://schema.org/AutoRepair">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-car.png"
          alt="Автосервис Империя"
          fill
          className="object-cover object-left md:object-center rounded-lg m-auto"
          priority
          style={{ maxWidth: "1280px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black-custom" />
      </div>

      <div className="container section relative z-10">
        <p className="text-brand-gray text-lg font-bold" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Брест</span>
        </p>
        <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight" itemProp="name">
          Автосервис «Империя»
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-brand-gray" itemProp="description">
          Ремонт и обслуживание легковых автомобилей
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            className="btn-primary"
            href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
            itemProp="telephone">
            Позвонить нам
          </a>
          <a className="btn-outline" href="#services">
            Смотреть услуги
          </a>
        </div>
      </div>
    </section>
  );
}
