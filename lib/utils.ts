import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

export interface SiteConfig {
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

const CONFIG_KEY = 'site-config';
const DEFAULT_CONFIG: SiteConfig = {
  site: {
    title: 'Laura Rosso Fotografía',
    description: 'Fotografía profesional especializada en familias, bodas, eventos y fiestas infantiles. Capturando momentos únicos en Mercedes, Soriano, Uruguay.',
    email: 'laura.rosso@gmail.com',
    phone: '+598 91247718',
    location: 'Mercedes, Soriano, Uruguay'
  },
  hero: {
    title: 'Laura Rosso Fotografía',
    subtitle: 'Capturando momentos familiares únicos con pasión y creatividad desde hace generaciones',
    backgroundImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920'
  },
  about: {
    title: 'Mi Historia',
    content: 'Mi pasión por la fotografía viene de familia. Desde muy pequeña, crecí rodeada de cámaras y el mágico proceso del revelado fotográfico. Mi padre era fotógrafo y me enseñó que las imágenes no solo capturan momentos, sino que preservan emociones y recuerdos para toda la vida. Hoy continúo ese legado familiar, especializándome en fotografía que celebra las conexiones humanas más importantes.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600'
  },
  services: [
    {
      id: 'family',
      name: 'Fotografía Familiar',
      price: 'Desde $150',
      description: 'Sesiones personalizadas para familias, capturando momentos únicos y conexiones especiales.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600'
    },
    {
      id: 'wedding',
      name: 'Bodas',
      price: 'Desde $2,500',
      description: 'Cobertura completa de tu día especial, desde la preparación hasta el último baile.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600'
    },
    {
      id: 'birthday',
      name: 'Fiestas Infantiles',
      price: 'Desde $200',
      description: 'Capturando la alegría y magia de cumpleaños y celebraciones infantiles.',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600'
    }
  ],
  portfolio: [
    {
      id: '1',
      title: 'Sesión Familiar',
      category: 'familia',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500',
      description: 'Hermosa sesión familiar en el parque'
    },
    {
      id: '2',
      title: 'Boda en el Jardín',
      category: 'bodas',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500',
      description: 'Boda romántica en jardín'
    },
    {
      id: '3',
      title: 'Cumpleaños Mágico',
      category: 'infantil',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500',
      description: 'Fiesta de cumpleaños infantil'
    }
  ],
  testimonials: [
    {
      id: '1',
      name: 'Ana López',
      role: 'Madre de familia, Mercedes',
      content: 'Laura capturó la esencia de nuestra familia de una manera increíble. Las fotos de Navidad con los niños son un tesoro que atesoraremos para siempre. ¡Profesional y cariñosa!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: '2',
      name: 'Martín Silva',
      role: 'Novio, Dolores 2024',
      content: 'Nuestra boda fue perfecta gracias a Laura. No solo tomó fotos hermosas, sino que se convirtió en parte de la celebración. ¡Recomiendo sus servicios al 100%!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  ]
};

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    // Intentar obtener desde Redis
    const configData = await redis.get(CONFIG_KEY);
    if (configData) {
      return JSON.parse(configData as string);
    }

    // Si no existe, guardar el config por defecto y retornarlo
    await redis.set(CONFIG_KEY, JSON.stringify(DEFAULT_CONFIG));
    return DEFAULT_CONFIG;
  } catch (error) {
    console.error('Error reading site config from Redis:', error);
    // En desarrollo o si Redis no está disponible, usar config por defecto
    return DEFAULT_CONFIG;
  }
}

export async function saveSiteConfig(config: SiteConfig): Promise<void> {
  try {
    await redis.set(CONFIG_KEY, JSON.stringify(config));
  } catch (error) {
    console.error('Error saving site config to Redis:', error);
    throw new Error('No se pudo guardar la configuración');
  }
}