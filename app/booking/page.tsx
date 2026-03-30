'use client';

import { useState } from 'react';

const services = [
  { name: 'Sesión de Retratos', basePrice: 150, description: 'Sesión de 1 hora con 10-15 fotos editadas' },
  { name: 'Fotografía de Boda', basePrice: 2500, description: 'Cobertura completa del día de la boda' },
  { name: 'Evento Corporativo', basePrice: 500, description: 'Cobertura de evento de 2-4 horas' },
  { name: 'Sesión de Producto', basePrice: 200, description: 'Fotografía de productos para e-commerce' },
];

export default function Booking() {
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  const calculatePrice = () => {
    const service = services.find(s => s.name === selectedService);
    return service ? service.basePrice : 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    alert('Reserva enviada. Te contactaremos pronto para confirmar.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Reservar Sesión Fotográfica</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Selection */}
            <div>
              <label className="block text-lg font-semibold mb-2">Servicio</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Selecciona un servicio</option>
                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} - ${service.basePrice}
                  </option>
                ))}
              </select>
              {selectedService && (
                <p className="mt-2 text-gray-600">
                  {services.find(s => s.name === selectedService)?.description}
                </p>
              )}
            </div>

            {/* Date and Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold mb-2">Fecha Preferida</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2">Hora Preferida</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold mb-2">Nombre Completo</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Teléfono</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-lg font-semibold mb-2">Detalles Adicionales</label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe tu visión, ubicación, número de personas, etc."
              ></textarea>
            </div>

            {/* Price Calculator */}
            {selectedService && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Resumen de la Reserva</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg">{selectedService}</span>
                  <span className="text-2xl font-bold text-blue-600">${calculatePrice()}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  * El precio incluye edición básica y entrega digital. Precios adicionales pueden aplicar para paquetes premium.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Enviar Reserva
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Información Importante</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• La confirmación de la reserva está sujeta a disponibilidad</li>
            <li>• Se requiere un depósito del 50% para confirmar la fecha</li>
            <li>• Las sesiones al aire libre están sujetas a condiciones climáticas</li>
            <li>• Los precios incluyen edición profesional y entrega digital</li>
            <li>• Para bodas, se recomienda reservar con al menos 6 meses de anticipación</li>
          </ul>
        </div>
      </div>
    </div>
  );
}