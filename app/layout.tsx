import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google"; // 1. Импортируем твои шрифты
import "./globals.css";

// 2. Настраиваем их
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Realize — Performance Advertising",
  description: "Performance Advertising at Scale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Добавляем переменные шрифтов в className тега <html>
    <html lang="en" className={`${dmSans.variable} ${syne.variable} h-full`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}