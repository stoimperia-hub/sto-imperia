import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FDCD00",
};


export const metadata: Metadata = {
  metadataBase: new URL('https://sto-imperia.by'),
  title: {
    default: "Автосервис Империя — Брест | Ремонт авто, ТО, диагностика",
    template: "%s | Автосервис Империя — Брест"
  },
  description: "Автосервис «Империя» в Бресте. Ремонт и обслуживание легковых и грузовых автомобилей Iveco. Диагностика, ТО, замена масла, ГРМ, тормозных колодок. Гарантия качества. ☎️ +375 (33) 657-55-75",
  keywords: [
    "автосервис Брест",
    "ремонт автомобилей Брест", 
    "СТО Брест",
    "автосервис Империя",
    "диагностика авто Брест",
    "ТО автомобиля Брест",
    "замена масла Брест",
    "ремонт Iveco Брест",
    "автосервис Янки Купалы",
    "замена ГРМ Брест",
    "заправка кондиционера авто",
    "замена тормозных колодок",
    "ремонт АКПП Брест",
    "автодиагностика Брест"
  ],
  authors: [{ name: "Автосервис Империя" }],
  creator: "Автосервис Империя",
  publisher: "Автосервис Империя",
  category: "Автосервисы",
  classification: "Автомобильные услуги",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": "standard",
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  openGraph: {
    type: "website",
    title: "Автосервис Империя — Брест | Ремонт авто, ТО, диагностика",
    description: "Автосервис «Империя» в Бресте. Ремонт и обслуживание легковых и грузовых автомобилей Iveco. Диагностика, ТО, замена масла, ГРМ, тормозных колодок. Гарантия качества.",
    url: "/",
    siteName: "Автосервис Империя",
    locale: "ru_RU",
    images: [
      {
        url: "/hero-car.png",
        width: 1200,
        height: 630,
        alt: "Автосервис Империя в Бресте - ремонт и обслуживание автомобилей",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Автосервис Империя — Брест | Ремонт авто, ТО, диагностика",
    description: "Автосервис «Империя» в Бресте. Ремонт и обслуживание легковых и грузовых автомобилей Iveco. Диагностика, ТО, замена масла, ГРМ, тормозных колодок.",
    images: ["/hero-car.png"],
  },
  verification: {
    google: "your-google-verification-code", // Замените на ваш код верификации Google
    yandex: "your-yandex-verification-code", // Замените на ваш код верификации Яндекс
  },
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
      "be-BY": "/",
    },
  },
  other: {
    "geo.region": "BY-BR",
    "geo.placename": "Брест",
    "geo.position": "52.098;23.687",
    "ICBM": "52.098, 23.687",
    "format-detection": "telephone=no",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#FDCD00",
    "msapplication-TileColor": "#FDCD00",
    "msapplication-navbutton-color": "#FDCD00",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        {/* Структурированные данные JSON-LD для Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Автосервис Империя",
              "description": "Ремонт и обслуживание легковых и грузовых автомобилей Iveco в Бресте. Диагностика, ТО, замена масла, ГРМ, тормозных колодок.",
              "url": "https://sto-imperia.by",
              "logo": "https://sto-imperia.by/logo-imper.png",
              "image": "https://sto-imperia.by/hero-car.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Янки Купалы, 21",
                "addressLocality": "Брест",
                "addressRegion": "Брестская область",
                "postalCode": "224016",
                "addressCountry": "BY"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "52.098",
                "longitude": "23.687"
              },
              "telephone": "+375336575575",
              "priceRange": "$$",
              "currenciesAccepted": "BYN",
              "paymentAccepted": ["Cash", "Credit Card"],
              "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-16:00",
              "sameAs": [
                "https://www.instagram.com/sto_imperia/",
                "https://www.youtube.com/channel/UC-xyz"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "52.098",
                  "longitude": "23.687"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Услуги автосервиса",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Компьютерная диагностика",
                      "description": "Сканер, чтение/сброс ошибок, рекомендации"
                    },
                    "price": "30",
                    "priceCurrency": "BYN"
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Замена масла",
                      "description": "Двигатель + замена фильтра"
                    },
                    "price": "30",
                    "priceCurrency": "BYN"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Заправка кондиционера",
                      "description": "Заправка и проверка герметичности системы"
                    },
                    "price": "25",
                    "priceCurrency": "BYN"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Замена тормозных колодок",
                      "description": "Передние/задние, смазка направляющих"
                    },
                    "price": "30",
                    "priceCurrency": "BYN"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Замена ГРМ",
                      "description": "Ремкомплект, ролики, помпа по необходимости"
                    },
                    "price": "150",
                    "priceCurrency": "BYN"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
        
        {/* Дополнительные мета-теги для лучшей индексации */}
        <link rel="canonical" href="https://sto-imperia.by" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Империя Автосервис" />
        <meta name="application-name" content="Империя Автосервис" />
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}