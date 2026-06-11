import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aztech II · FTC 17626",
  description:
    "Aztech II, equipo 17626 de FIRST Tech Challenge desde la CDMX. Innovación, inclusión y tecnología como herramienta de cambio social.",
  icons: { icon: "/brand/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`dark ${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
