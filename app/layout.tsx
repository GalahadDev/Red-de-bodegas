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
  title: 'Red de Bodegas Salas | Soluciones de Almacenamiento en Santiago',
  description: 'Servicio de bodegaje y almacenamiento en Cerrillos y San Joaquín. Espacios seguros, flexibles y con atención 24/7. Más de 6 años de experiencia.',
  keywords: 'bodegas, almacenamiento, bodegaje, Santiago, Cerrillos, San Joaquín, grúa horquilla',
  authors: [{ name: 'Red de Bodegas Salas' }],
  openGraph: {
    title: 'Red de Bodegas | Soluciones de Almacenamiento',
    description: 'Servicio de bodegaje y almacenamiento en Santiago',
    url: 'https://redbodegasalas.cl',
    siteName: 'Red de Bodegas',
    locale: 'es_CL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico"></link> 
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
