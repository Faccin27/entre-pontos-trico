import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tricô Artesanal com Amor | Ecione Rosario Vitor",
  description:
    "Bonecas, roupas e acessórios feitos à mão com carinho. Encomende peças únicas que aquecem o coração.",
  openGraph: {
    title: "Tricô Artesanal com Amor | Ecione Rosario Vitor",
    description:
      "Bonecas, roupas e acessórios feitos à mão com carinho. Encomende peças únicas que aquecem o coração.",
    url: "https://seudominio.com", 
    siteName: "Ecione Rosario Vitor",
    images: [
      {
        url: "/images/hero.jpg", 
        width: 1200,
        height: 630,
        alt: "Tricô Artesanal com Amor por Ecione Rosario Vitor",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tricô Artesanal com Amor | Ecione Rosario Vitor",
    description:
      "Peças feitas à mão com dedicação: bonecas, roupas e acessórios que aquecem o coração.",
    images: ["/images/hero.jpg"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
