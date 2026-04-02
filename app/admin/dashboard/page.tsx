'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface SiteConfig {
  site: {
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
  };
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  about: {
    title: string;
    content: string;
    image: string;
  };
  services: Array<{
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
  }>;
  portfolio: Array<{
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
  }>;
  testimonials: Array<{
    id: string;
    name: string;
    role: string;
    content: string;
    image: string;
  }>;
}

export default function AdminDashboard() {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingServiceIndex, setUploadingServiceIndex] = useState<number | null>(null);
  const [uploadingPortfolioIndex, setUploadingPortfolioIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    loadConfig();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/check-auth');
      if (!response.ok) {
        router.push('/admin');
      }
    } catch (err) {
      router.push('/admin');
    }
  };

  const loadConfig = async () => {
    try {
      const response = await fetch('/api/admin/config');
      if (response.ok) {
        const data = await response.json();
        setConfig(data);
      }
    } catch (err) {
      console.error('Error loading config:', err);
    } finally {
      setLoading(false);
    }
  };

  const saveConfig = async () => {
    if (!config) return;

    setSaving(true);
    try {
      const response = await fetch('/api/admin/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
      });

      if (response.ok) {
        alert('Configuración guardada exitosamente');
        setActiveSection(null);
      } else {
        const data = await response.json().catch(() => ({}));
        alert(data.error || 'Error al guardar la configuración');
      }
    } catch (err) {
      alert('Error al guardar la configuración');
    } finally {
      setSaving(false);
    }
  };

  const updateConfig = (section: keyof SiteConfig, field: string, value: any) => {
    if (!config) return;

    setConfig({
      ...config,
      [section]: {
        ...config[section],
        [field]: value,
      },
    });
  };

  const updateService = (index: number, field: string, value: string) => {
    if (!config) return;

    const newServices = [...config.services];
    newServices[index] = { ...newServices[index], [field]: value };
    setConfig({ ...config, services: newServices });
  };

  const addService = () => {
    if (!config) return;

    const newService = {
      id: Date.now().toString(),
      name: `Nuevo Servicio ${config.services.length + 1}`,
      price: 'Consultar',
      description: 'Contáctanos para recibir una propuesta personalizada para este servicio.',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600',
    };

    setConfig({ ...config, services: [...config.services, newService] });
  };

  const removeService = (index: number) => {
    if (!config) return;

    const newServices = config.services.filter((_, i) => i !== index);
    setConfig({ ...config, services: newServices });
  };

  const updatePortfolio = (index: number, field: string, value: string) => {
    if (!config) return;

    const newPortfolio = [...config.portfolio];
    newPortfolio[index] = { ...newPortfolio[index], [field]: value };
    setConfig({ ...config, portfolio: newPortfolio });
  };

  const addPortfolioItem = () => {
    if (!config) return;

    const newItem = {
      id: Date.now().toString(),
      title: 'Nueva Foto',
      category: 'general',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500',
      description: 'Descripción de la foto',
    };

    setConfig({ ...config, portfolio: [...config.portfolio, newItem] });
  };

  const removePortfolioItem = (index: number) => {
    if (!config) return;

    const newPortfolio = config.portfolio.filter((_, i) => i !== index);
    setConfig({ ...config, portfolio: newPortfolio });
  };

  const uploadServiceImage = async (index: number, file: File) => {
    setUploadingServiceIndex(index);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || 'No se pudo subir la imagen');
      }

      updateService(index, 'image', data.url);
      alert('Imagen subida correctamente');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Error al subir la imagen');
    } finally {
      setUploadingServiceIndex(null);
    }
  };

  const uploadPortfolioImage = async (index: number, file: File) => {
    setUploadingPortfolioIndex(index);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || 'No se pudo subir la imagen');
      }

      updatePortfolio(index, 'image', data.url);
      alert('Imagen subida correctamente');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Error al subir la imagen');
    } finally {
      setUploadingPortfolioIndex(null);
    }
  };

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Cargando...</div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-red-600">Error al cargar la configuración</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Panel de Administración - {config.site.title}
            </h1>
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {activeSection === 'site' && (
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Editar Información del Sitio</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Título</label>
                  <input
                    type="text"
                    value={config.site.title}
                    onChange={(e) => updateConfig('site', 'title', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={config.site.email}
                    onChange={(e) => updateConfig('site', 'email', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="text"
                    value={config.site.phone}
                    onChange={(e) => updateConfig('site', 'phone', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Ubicación</label>
                  <input
                    type="text"
                    value={config.site.location}
                    onChange={(e) => updateConfig('site', 'location', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Descripción</label>
                  <textarea
                    value={config.site.description}
                    onChange={(e) => updateConfig('site', 'description', e.target.value)}
                    rows={3}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {activeSection === 'services' && (
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">Editar Servicios</h2>
                <button
                  onClick={addService}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Agregar Servicio
                </button>
              </div>
              <div className="space-y-6">
                {config.services.map((service, index) => (
                  <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-md font-medium text-gray-900">Servicio {index + 1}</h3>
                      <button
                        onClick={() => removeService(index)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Eliminar
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                          type="text"
                          value={service.name}
                          onChange={(e) => updateService(index, 'name', e.target.value)}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Precio</label>
                        <input
                          type="text"
                          value={service.price}
                          onChange={(e) => updateService(index, 'price', e.target.value)}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Descripción</label>
                        <textarea
                          value={service.description}
                          onChange={(e) => updateService(index, 'description', e.target.value)}
                          rows={2}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">URL de Imagen</label>
                        <input
                          type="text"
                          value={service.image}
                          onChange={(e) => updateService(index, 'image', e.target.value)}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <div className="mt-2 flex items-center gap-3">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                void uploadServiceImage(index, file);
                              }
                              e.currentTarget.value = '';
                            }}
                            className="block w-full text-sm text-gray-700"
                          />
                          {uploadingServiceIndex === index && (
                            <span className="text-sm text-gray-500">Subiendo...</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'portfolio' && (
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">Editar Portafolio</h2>
                <button
                  onClick={addPortfolioItem}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Agregar Foto
                </button>
              </div>
              <div className="space-y-6">
                {config.portfolio.map((item, index) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-md font-medium text-gray-900">Foto {index + 1}</h3>
                      <button
                        onClick={() => removePortfolioItem(index)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Eliminar
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Título</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => updatePortfolio(index, 'title', e.target.value)}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Categoría</label>
                        <input
                          type="text"
                          value={item.category}
                          onChange={(e) => updatePortfolio(index, 'category', e.target.value)}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Descripción</label>
                        <textarea
                          value={item.description}
                          onChange={(e) => updatePortfolio(index, 'description', e.target.value)}
                          rows={2}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">URL de Imagen</label>
                        <input
                          type="text"
                          value={item.image}
                          onChange={(e) => updatePortfolio(index, 'image', e.target.value)}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <div className="mt-2 flex items-center gap-3">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                void uploadPortfolioImage(index, file);
                              }
                              e.currentTarget.value = '';
                            }}
                            className="block w-full text-sm text-gray-700"
                          />
                          {uploadingPortfolioIndex === index && (
                            <span className="text-sm text-gray-500">Subiendo...</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Información del Sitio */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Información del Sitio
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        Configuración General
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <button
                    onClick={() => setActiveSection(activeSection === 'site' ? null : 'site')}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {activeSection === 'site' ? 'Ocultar' : 'Editar información'}
                  </button>
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Servicios
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {config.services.length} servicios
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <button
                    onClick={() => setActiveSection(activeSection === 'services' ? null : 'services')}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {activeSection === 'services' ? 'Ocultar' : 'Gestionar servicios'}
                  </button>
                </div>
              </div>
            </div>

            {/* Portafolio */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Portafolio
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {config.portfolio.length} fotos
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <button
                    onClick={() => setActiveSection(activeSection === 'portfolio' ? null : 'portfolio')}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {activeSection === 'portfolio' ? 'Ocultar' : 'Gestionar portafolio'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de guardar */}
          {activeSection && (
            <div className="mt-8 flex justify-end">
              <button
                onClick={saveConfig}
                disabled={saving}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-sm font-medium disabled:opacity-50"
              >
                {saving ? 'Guardando...' : 'Guardar Cambios'}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}