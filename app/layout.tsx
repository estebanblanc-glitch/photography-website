import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Fotografía Profesional - Capturando Momentos Especiales",
  description: "Página web profesional para fotógrafa. Portafolio, servicios, reservas y tienda en línea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                Fotografía Pro
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Inicio</Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">Sobre Mí</Link>
                <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition">Portafolio</Link>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition">Servicios</Link>
                <Link href="/shop" className="text-gray-600 hover:text-blue-600 transition">Tienda</Link>
                <Link href="/booking" className="text-gray-600 hover:text-blue-600 transition">Reservar</Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contacto</Link>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-gray-600 hover:text-blue-600">
                  ☰
                </button>
              </div>
            </div>
          </nav>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-auto">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Fotografía Pro</h3>
                <p className="text-gray-400">
                  Capturando momentos únicos con pasión y profesionalismo.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/portfolio" className="hover:text-white">Portafolio</Link></li>
                  <li><Link href="/services" className="hover:text-white">Servicios</Link></li>
                  <li><Link href="/booking" className="hover:text-white">Reservar</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contacto</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Servicios</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Bodas</li>
                  <li>Retratos</li>
                  <li>Eventos</li>
                  <li>Productos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>📧 contacto@fotografia.com</li>
                  <li>📱 +52 55 1234 5678</li>
                  <li>📍 Ciudad de México</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Fotografía Profesional. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
