import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Advantages from "@/components/Advantages";

export const metadata: Metadata = {
  title: "О нас — Автосервис Империя в Бресте",
  description: "Автосервис «Империя» — ваш надежный партнер в обслуживании и ремонте автомобилей в Бресте. Опытные мастера, современное оборудование, качественные запчасти. Профессиональный подход и честные цены.",
  keywords: [
    "о нас автосервис Брест",
    "Империя автосервис история",
    "команда автосервиса Брест", 
    "опытные автомеханики Брест",
    "профессиональный автосервис",
    "надежный автосервис Брест"
  ],
  openGraph: {
    title: "О нас — Автосервис Империя в Бресте",
    description: "Автосервис «Империя» — ваш надежный партнер в обслуживании и ремонте автомобилей в Бресте. Опытные мастера, современное оборудование, качественные запчасти.",
    url: "/about",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Главная", href: "/" },
    { name: "О нас", current: true }
  ];

  return (
    <>
      <Navbar />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <article itemScope itemType="https://schema.org/AboutPage">
            <header>
              <h1 className="text-3xl font-bold mb-6" itemProp="headline">О нас</h1>
            </header>
            
            <div className="prose max-w-none" itemProp="text">
              <p className="text-lg mb-4">
                Добро пожаловать в автосервис «<span itemProp="name">Империя</span>» — ваш надежный партнер в обслуживании и ремонте автомобилей.
              </p>
              <p className="mb-4" itemProp="description">
                Мы предоставляем полный спектр услуг по техническому обслуживанию и ремонту автомобилей различных марок и моделей.
                Наша команда опытных специалистов использует современное оборудование и качественные запчасти.
              </p>
              <p className="mb-4">
                В нашем автосервисе вы можете рассчитывать на профессиональный подход, честные цены и качественный сервис.
              </p>
            </div>
            
            <Advantages />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}