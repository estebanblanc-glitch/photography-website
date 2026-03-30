import Image from "next/image";
import Link from "next/link";

const photos = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500", alt: "Boda 1", category: "bodas" },
  { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=500", alt: "Retrato 1", category: "retratos" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=500", alt: "Evento 1", category: "eventos" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500", alt: "Boda 2", category: "bodas" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500", alt: "Retrato 2", category: "retratos" },
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500", alt: "Evento 2", category: "eventos" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=500", alt: "Producto 1", category: "productos" },
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500", alt: "Producto 2", category: "productos" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500", alt: "Boda 3", category: "bodas" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Mi Portafolio</h1>
          <p className="text-xl">Una colección de mis mejores trabajos fotográficos</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold">Todos</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full font-semibold hover:bg-gray-300">Bodas</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full font-semibold hover:bg-gray-300">Retratos</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full font-semibold hover:bg-gray-300">Eventos</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full font-semibold hover:bg-gray-300">Productos</button>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver Detalles
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">¿Te gusta mi trabajo?</h2>
          <p className="text-xl mb-8">Contáctame para tu sesión fotográfica personalizada</p>
          <Link href="/booking" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Reservar Sesión
          </Link>
        </div>
      </section>
    </div>
  );
}