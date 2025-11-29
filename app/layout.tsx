import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eternellesystem.com'),
  title: "Eternelle System - Plataforma iGaming Completa | Casino & Sportsbook",
  description: "Soluciones completas de iGaming: Casino Online, Sportsbook, Licencias, Pagos Locales y más. Marca Blanca, Operador Licenciado y Sistema de Afiliados disponibles.",
  keywords: "iGaming, casino online, sportsbook, apuestas deportivas, marca blanca, white label, gaming platform, plataforma de juegos",
  authors: [{ name: "Eternelle System" }],
  creator: "Eternelle System",
  publisher: "Eternelle System",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Eternelle System - Todo el mundo del gaming en un solo lugar",
    description: "Descubre, Juega y conecta con la comunidad gamer más grande. Soluciones completas de iGaming para tu negocio.",
    url: 'https://eternellesystem.com',
    siteName: 'Eternelle System',
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eternelle System - Plataforma iGaming Completa",
    description: "Soluciones completas de iGaming: Casino, Sportsbook, Licencias y más.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://eternellesystem.com',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0d1a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/hero-logo.png" as="image" />
        <style dangerouslySetInnerHTML={{__html: `
          body{margin:0;background:#F0F2F8}
          *{box-sizing:border-box}
        `}} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
