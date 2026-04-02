import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getSiteConfig, saveSiteConfig } from '@/lib/utils';

const JWT_SECRET = process.env.JWT_SECRET || 'tu-secreto-jwt-aqui'; // Cambiar en producción

const FALLBACK_SERVICE_IMAGE = 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600';

function verifyToken(request: NextRequest) {
  const token = request.cookies.get('admin-token')?.value;
  if (!token) return false;

  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  if (!verifyToken(request)) {
    return NextResponse.json(
      { error: 'No autorizado' },
      { status: 401 }
    );
  }

  try {
    const config = await getSiteConfig();
    return NextResponse.json(config);
  } catch (error) {
    console.error('Error reading config:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Error al leer la configuración' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if (!verifyToken(request)) {
    return NextResponse.json(
      { error: 'No autorizado' },
      { status: 401 }
    );
  }

  try {
    const newConfig = await request.json();

    // Validar que la configuración tenga la estructura correcta
    if (!newConfig.site || !newConfig.hero || !newConfig.about) {
      return NextResponse.json(
        { error: 'Configuración inválida' },
        { status: 400 }
      );
    }

    const normalizedConfig = {
      ...newConfig,
      services: Array.isArray(newConfig.services)
        ? newConfig.services.map((service: any, index: number) => ({
            id: String(service?.id || `service-${Date.now()}-${index}`),
            name: String(service?.name || `Servicio ${index + 1}`).trim(),
            price: 'Consultar',
            description: String(service?.description || 'Descripción del servicio').trim(),
            image: String(service?.image || FALLBACK_SERVICE_IMAGE).trim(),
          }))
        : [],
    };

    await saveSiteConfig(normalizedConfig);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving config:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Error al guardar la configuración' },
      { status: 500 }
    );
  }
}