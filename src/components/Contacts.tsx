const PHONE = "+375 (33) 657-55-75"; 
const ADDRESS = "ул. Янки Купалы, 21, Брест"; 
const INSTAGRAM = "https://www.instagram.com/sto_imperia/"; 

export default function Contacts() {
  return (
    <section id="contacts" className="section" itemScope itemType="https://schema.org/AutoRepair">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="card overflow-hidden">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9645145aef307324fb79806fef5a459f249622951f2e5348479a8ff1d7265f69&amp;source=constructor" max-width="550" width="100%" height="100%" frameBorder="0"></iframe>
          </div>

          <div className="flex flex-col gap-4">
            <div className="card p-6" itemScope itemType="https://schema.org/PostalAddress">
              <div className="text-brand-gray">Адрес</div>
              <div className="mt-1 text-lg font-semibold" itemProp="streetAddress">{ADDRESS}</div>
              <meta itemProp="addressLocality" content="Брест" />
              <meta itemProp="addressRegion" content="Брестская область" />
              <meta itemProp="addressCountry" content="BY" />
              <div className="mt-4 text-brand-gray">Телефон</div>
              <a
                className="mt-1 inline-block text-lg font-semibold text-brand-yellow"
                href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
                itemProp="telephone">
                {PHONE}
              </a>
              <div className="mt-4 text-brand-gray">Соцсети</div>
              <div className="mt-1 flex gap-3">
                <a className="btn-outline" href={INSTAGRAM} target="_blank" rel="noopener noreferrer" itemProp="sameAs">
                  Instagram
                </a>
              </div>
            </div>

            {/* Видео: как добраться */}
            <div className="card overflow-hidden">
              <iframe src="https://www.youtube.com/embed/AM8hF78D5eo" title="СТО &quot;Империя&quot; Как к нам добраться? Брест | Автосервис" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen max-width="550" width="100%" height="500"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
