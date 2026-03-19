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
  metadataBase: new URL('https://juntamos.com.br'),
  title: "Juntamos | O Seu Provador Virtual para Qualquer Loja Online",
  description: "Cansado de devolver roupas compradas na internet? Instale a extensão Juntamos e prove qualquer peça virtualmente no seu próprio corpo antes de comprar.",
  keywords: ["provador virtual", "IA para roupas", "extensão chrome", "moda online", "comprar roupa online", "juntamos"],
  authors: [{ name: "Juntamos Team" }],
  openGraph: {
    title: "Juntamos | O Seu Provador Virtual para Qualquer Loja Online",
    description: "Prove roupas virtualmente em qualquer e-commerce com a nossa extensão inteligente.",
    url: "https://juntamos.com.br", // Ajuste para a URL final se soubesse, mantendo o domínio principal
    siteName: "Juntamos",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Juntamos - Provador Virtual de Roupas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juntamos | O Seu Provador Virtual",
    description: "A revolução de como você compra roupas online. Prove em qualquer loja com IA.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://juntamos.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
