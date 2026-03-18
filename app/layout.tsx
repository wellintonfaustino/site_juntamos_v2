import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juntamos - Seu Provador Virtual",
  description: "Prove roupas virtualmente em qualquer e-commerce com Inteligência Artificial. Experimente o High-Tech Neon do Juntamos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className={`${outfit.variable} ${syne.variable} antialiased font-sans bg-background text-foreground min-h-[100dvh] selection:bg-emerald/30 selection:text-emerald`}
      >
        {children}
      </body>
    </html>
  );
}
