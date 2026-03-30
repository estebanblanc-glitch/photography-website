import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getSiteConfig, saveSiteConfig } from '../../../lib/utils';

const JWT_SECRET = process.env.JWT_SECRET || 'tu-secreto-jwt-aqui'; // Cambiar en producción

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
      { error: 'Error al leer la configuración' },
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

    await saveSiteConfig(newConfig);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving config:', error);
    return NextResponse.json(
      { error: 'Error al guardar la configuración' },
      { status: 500 }
    );
  }
}