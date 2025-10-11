import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import OurWorks from "@/components/OurWorks";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="section">
          <div className="container">
            <div className="max-w-3xl text-left">
              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">О нас</h2>
              <p className="mt-3 text-brand-gray">
                Мы специализируемся на диагностике, техническом обслуживании и
                ремонте легковых автомобилей, а также грузовых автомобилей
                Iveco. Работаем по записи, соблюдаем сроки и фиксируем смету до
                начала работ.
              </p>
            </div>
          </div>
        </section>

        <Services />
        <Advantages />
        <OurWorks />
        <Reviews />
        <ContactForm />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
