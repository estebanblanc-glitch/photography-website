import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Fotografía Profesional
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Capturando momentos únicos y emociones eternas con pasión y creatividad
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
        {/* Placeholder for hero image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920')"}}></div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Sobre Mí</h2>
          <p className="text-lg leading-relaxed mb-8">
            Soy una fotógrafa apasionada con años de experiencia capturando los momentos más preciados de la vida.
            Mi enfoque es crear imágenes que no solo sean bellas, sino que cuenten historias y evoquen emociones.
            Especializada en bodas, retratos, eventos y fotografía de producto.
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
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Fotografía de Bodas</h3>
              <p className="mb-4">Captura el día más importante de tu vida con elegancia y emoción.</p>
              <p className="text-2xl font-bold text-blue-600">Desde $2,500</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Retratos</h3>
              <p className="mb-4">Sesiones personalizadas para familias, parejas y profesionales.</p>
              <p className="text-2xl font-bold text-blue-600">Desde $150</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Eventos</h3>
              <p className="mb-4">Cubrimiento completo de eventos corporativos y sociales.</p>
              <p className="text-2xl font-bold text-blue-600">Desde $500</p>
            </div>
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
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=500"
                alt="Fotografía destacada 1"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=500"
                alt="Fotografía destacada 2"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=500"
                alt="Fotografía destacada 3"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
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
