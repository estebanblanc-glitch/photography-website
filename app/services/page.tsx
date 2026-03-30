import Link from 'next/link';

const services = [
  {
    name: 'Fotografía de Bodas',
    price: 'Desde $2,500',
    description: 'Captura el día más importante de tu vida con elegancia y emoción.',
    features: [
      'Cobertura completa del día de la boda',
      'Fotos de preparación de novia y novio',
      'Ceremonia y recepción',
      'Sesión de pareja (1 hora adicional)',
      'Edición profesional de todas las fotos',
      'Entrega en alta resolución',
      'Álbum digital incluido'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600'
  },
  {
    name: 'Retratos y Sesiones Personales',
    price: 'Desde $150',
    description: 'Sesiones personalizadas para capturar tu esencia única.',
    features: [
      'Sesión de 1 hora en estudio o locación',
      '10-15 fotos editadas profesionalmente',
      'Entrega digital en alta resolución',
      'Consejos de styling incluidos',
      'Opciones de impresión disponibles',
      'Sesiones familiares disponibles'
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600'
  },
  {
    name: 'Eventos Corporativos',
    price: 'Desde $500',
    description: 'Documenta tus eventos empresariales con profesionalismo.',
    features: [
      'Cobertura de 2-4 horas del evento',
      'Fotos de discursos y presentaciones',
      'Fotografías de grupo y networking',
      'Entrega en 24-48 horas',
      'Uso comercial autorizado',
      'Edición básica incluida'
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600'
  },
  {
    name: 'Fotografía de Producto',
    price: 'Desde $200',
    description: 'Haz que tus productos luzcan irresistibles.',
    features: [
      'Fotografía de hasta 10 productos',
      'Iluminación profesional en estudio',
      'Fondos personalizados',
      'Edición para e-commerce',
      'Archivos optimizados para web',
      'Opciones de impresión disponibles'
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Mis Servicios</h1>
          <p className="text-xl">Soluciones fotográficas profesionales para cada ocasión</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.name} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
                  <p className="text-xl text-blue-600 font-semibold mb-4">{service.price}</p>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/booking"
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                  >
                    Reservar Ahora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Calculadora de Precios</h2>
          <p className="text-lg mb-8">
            Los precios pueden variar según la complejidad del proyecto, ubicación y requisitos específicos.
            Contáctame para un presupuesto personalizado.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Factores que Afectan el Precio</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Incluye:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Equipo profesional</li>
                  <li>• Edición de fotos</li>
                  <li>• Entrega digital</li>
                  <li>• Derechos de uso personal</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Costos Adicionales:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Viaje y desplazamiento</li>
                  <li>• Impresiones físicas</li>
                  <li>• Álbumes personalizados</li>
                  <li>• Sesiones extendidas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">¿Tienes un Proyecto Especial?</h2>
          <p className="text-xl mb-8">
            Si no encuentras exactamente lo que buscas, puedo crear un paquete personalizado para ti.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Consultar Precio
            </Link>
            <Link href="/booking" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
              Reservar Sesión
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}