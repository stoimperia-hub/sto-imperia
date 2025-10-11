import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});


export const metadata: Metadata = {
title: "Автосервис Империя — Брест",
description: "Ремонт и обслуживание легковых и грузовых автомобилей Iveco. Брест.",
openGraph: {
title: "Автосервис Империя — Брест",
description: "Ремонт и обслуживание легковых и грузовых автомобилей Iveco. Брест.",
locale: "ru_RU",
type: "website",
},
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="ru">
<body className={`${inter.variable} font-sans`}>{children}</body>
</html>
);
}