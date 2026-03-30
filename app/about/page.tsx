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
                Desde pequeña, siempre me fascinó capturar momentos especiales con mi cámara.
                Lo que comenzó como un hobby se convirtió en mi pasión y profesión.
                Con más de 10 años de experiencia, he tenido el privilegio de documentar
                algunos de los momentos más importantes en la vida de mis clientes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Mi enfoque es crear imágenes que no solo sean técnicamente perfectas,
                sino que también cuenten historias y evoquen emociones. Creo en la importancia
                de construir una conexión genuina con cada cliente para capturar su esencia única.
              </p>
              <p className="text-lg leading-relaxed">
                Especializada en bodas, retratos y eventos, mi objetivo es hacer que cada sesión
                sea memorable y los resultados superen las expectativas.
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
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-semibold mb-2">Fotografía Profesional</h3>
                <p>Especializada en técnicas avanzadas de iluminación y composición</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-2">Edición Digital</h3>
                <p>Maestría en Adobe Lightroom y Photoshop para resultados perfectos</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-semibold mb-2">Enfoque Personal</h3>
                <p>Cada cliente recibe atención personalizada y servicio excepcional</p>
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
                  "Las fotos de nuestra boda son absolutamente perfectas. Capturó cada momento
                  especial con tanta emoción y belleza. ¡Altamente recomendada!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">María García</p>
                    <p className="text-gray-600">Novia, 2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <p className="text-lg italic mb-4">
                  "Profesional, talentosa y fácil de trabajar. Las fotos de mi familia
                  son las mejores que hemos tenido. ¡Volveremos pronto!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">Carlos Rodríguez</p>
                    <p className="text-gray-600">Cliente de Retratos</p>
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