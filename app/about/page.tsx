import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Sobre Mí</h1>
          <p className="text-xl">Conoce mi historia y mi pasión por la fotografía</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">Mi Historia</h2>
              <p className="text-lg leading-relaxed mb-6">
                Mi pasión por la fotografía viene de familia. Desde muy pequeña, crecí rodeada de cámaras y el mágico proceso del revelado fotográfico.
                Mi padre era fotógrafo y me enseñó que las imágenes no solo capturan momentos, sino que preservan emociones y recuerdos para toda la vida.
                Hoy continúo ese legado familiar, especializándome en fotografía que celebra las conexiones humanas más importantes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Me apasiona trabajar con familias, capturando esos momentos únicos que definen quiénes somos. Cada sesión es una oportunidad para
                contar historias a través de las imágenes, desde la alegría de un cumpleaños infantil hasta la magia de una boda familiar.
                Mi objetivo es crear fotografías que trasciendan el tiempo y se conviertan en tesoros familiares.
              </p>
              <p className="text-lg leading-relaxed">
                Trabajo principalmente en Mercedes y la zona de Soriano, Uruguay, pero estoy disponible para viajes especiales.
                Creo en la importancia de construir una relación de confianza con cada cliente para capturar su esencia más auténtica.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600"
                alt="Fotógrafa profesional"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Mi Experiencia</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Fotografía Familiar</h3>
                <p>Especializada en capturar la esencia de las familias y sus momentos más preciados</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-2xl font-semibold mb-2">Bodas y Eventos</h3>
                <p>Cobertura completa de celebraciones familiares y eventos especiales</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">🎂</div>
                <h3 className="text-2xl font-semibold mb-2">Fiestas Infantiles</h3>
                <p>Capturando la magia y alegría de cumpleaños y celebraciones navideñas</p>
              </div>
            </div>
          </div>

          {/* Equipment */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Mi Equipo</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Cámaras</h3>
                  <ul className="space-y-2">
                    <li>• Canon EOS R5 - Cámara principal</li>
                    <li>• Canon EOS 5D Mark IV - Backup</li>
                    <li>• Lentes profesionales (24-70mm, 70-200mm, 50mm)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Iluminación</h3>
                  <ul className="space-y-2">
                    <li>• Flash Profoto (estudio y exterior)</li>
                    <li>• Reflectores y difusores</li>
                    <li>• Iluminación LED continua</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Lo que Dicen Mis Clientes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <p className="text-lg italic mb-4">
                  "Laura capturó la esencia de nuestra familia de una manera increíble. Las fotos de Navidad
                  con los niños son un tesoro que atesoraremos para siempre. ¡Profesional y cariñosa!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                    alt="Ana López"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">Ana López</p>
                    <p className="text-gray-600">Madre de familia, Mercedes</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <p className="text-lg italic mb-4">
                  "Nuestra boda fue perfecta gracias a Laura. No solo tomó fotos hermosas, sino que
                  se convirtió en parte de la celebración. ¡Recomiendo sus servicios al 100%!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="Martín Silva"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">Martín Silva</p>
                    <p className="text-gray-600">Novio, Dolores 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-blue-600 text-white rounded-lg p-12">
            <h2 className="text-4xl font-bold mb-4">¿Listo para Trabajar Juntos?</h2>
            <p className="text-xl mb-8">
              Me encantaría conocer tu historia y capturar tus momentos especiales.
            </p>
            <div className="space-x-4">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Contáctame
              </a>
              <a href="/portfolio" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
                Ver Mi Trabajo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}