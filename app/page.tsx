import Image from "next/image";
import Link from "next/link";
import { getSiteConfig } from "../lib/utils";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const config = await getSiteConfig();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {config.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {config.hero.subtitle}
          </p>
          <div className="space-x-4">
            <Link href="/portfolio" className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Ver Portafolio
            </Link>
            <Link href="/booking" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Reservar Sesión
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('${config.hero.backgroundImage}')`}}></div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{config.about.title}</h2>
          <p className="text-lg leading-relaxed mb-8">
            {config.about.content}
          </p>
          <Link href="/about" className="text-blue-600 hover:text-blue-800 font-semibold">
            Leer más sobre mi trabajo →
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {config.services.map((service) => (
              <div key={service.id} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                <p className="mb-4">{service.description}</p>
                <p className="text-xl font-semibold text-blue-600">Consultar presupuesto</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Photos */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Trabajos Destacados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {config.portfolio.slice(0, 3).map((photo) => (
              <div key={photo.id} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 font-semibold">
              Ver Portafolio Completo →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">¿Listo para capturar tus momentos?</h2>
          <p className="text-xl mb-8">Contáctame para discutir tu proyecto fotográfico</p>
          <div className="space-x-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Contactar
            </Link>
            <Link href="/booking" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
              Reservar Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
