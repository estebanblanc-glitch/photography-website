import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Contraseña por defecto - cambiar en producción
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'laura2024';
const JWT_SECRET = process.env.JWT_SECRET || 'tu-secreto-jwt-aqui'; // Cambiar en producción

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { error: 'Contraseña requerida' },
        { status: 400 }
      );
    }

    const isValidPassword = await bcrypt.compare(password, await bcrypt.hash(ADMIN_PASSWORD, 10));

    if (password === ADMIN_PASSWORD) {
      const token = jwt.sign(
        { admin: true },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      const response = NextResponse.json({ success: true });
      response.cookies.set('admin-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60, // 24 horas
      });

      return response;
    }

    return NextResponse.json(
      { error: 'Contraseña incorrecta' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Error en login:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}