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
  title: "Laura Rosso Fotografía - Fotógrafa Profesional en Uruguay",
  description: "Fotografía profesional especializada en familias, bodas, eventos y fiestas infantiles. Capturando momentos únicos en Mercedes, Soriano, Uruguay.",
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
                Laura Rosso Fotografía
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

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/59891247718?text=Hola%20Laura,%20me%20gustar%C3%ADa%20consultar%20sobre%20tus%20servicios%20de%20fotograf%C3%ADa"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 z-50 group"
          aria-label="Contactar por WhatsApp"
        >
          <span className="text-2xl">💬</span>
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            ¡Escríbeme por WhatsApp!
          </span>
        </a>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-auto">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Laura Rosso Fotografía</h3>
                <p className="text-gray-400">
                  Fotografía profesional especializada en capturar momentos familiares únicos.
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
                  <li>📧 laura.rosso@gmail.com</li>
                  <li>📱 +598 91247718</li>
                  <li>📍 Mercedes, Soriano, Uruguay</li>
                  <li>
                    <a
                      href="https://wa.me/59891247718"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition"
                    >
                      💬 WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Laura Rosso Fotografía. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
