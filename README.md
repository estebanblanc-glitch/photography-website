# Fotografía Profesional - Sitio Web

Una página web completa y profesional para una fotógrafa, construida con Next.js 16, TypeScript y Tailwind CSS.

## Características

- **Portafolio Interactivo**: Galería de fotos con categorías y filtros
- **Sistema de Reservas**: Formulario de reserva con calculadora de precios
- **Tienda en Línea**: Carrito de compras con productos fotográficos
- **Páginas Informativas**: Servicios detallados, sobre mí, contacto
- **Panel de Administración**: Gestión de contenido sin conocimientos técnicos
- **Diseño Responsivo**: Optimizado para móviles y desktop
- **SEO Optimizado**: Metadatos y estructura para motores de búsqueda

## Tecnologías Utilizadas

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework CSS utilitario
- **Stripe** - Procesamiento de pagos (preparado para integración)
- **ESLint** - Linting de código

## Estructura del Proyecto

```
photography-website/
├── app/
│   ├── admin/          # Panel de administración
│   │   ├── dashboard/  # Dashboard principal
│   │   └── page.tsx    # Login de admin
│   ├── about/          # Página "Sobre Mí"
│   ├── booking/        # Sistema de reservas
│   ├── contact/        # Página de contacto
│   ├── portfolio/      # Portafolio de fotos
│   ├── services/       # Servicios y precios
│   ├── shop/           # Tienda en línea
│   ├── layout.tsx      # Layout principal con navegación
│   └── page.tsx        # Página de inicio
├── data/               # Configuración del sitio
├── lib/                # Utilidades
├── public/             # Archivos estáticos
├── .vscode/            # Configuración VS Code
└── package.json        # Dependencias
```

## Instalación y Uso

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Acceder al sitio:**
   - Sitio web: http://localhost:3000
   - Panel de administración: http://localhost:3000/admin

## Panel de Administración

El panel de administración permite gestionar todo el contenido del sitio web sin necesidad de conocimientos técnicos.

### Acceso al Panel
1. Ve a http://localhost:3000/admin
2. Ingresa la contraseña: `laura2024`
3. Haz clic en "Iniciar Sesión"

### Funcionalidades del Panel

#### 📝 Información del Sitio
- Editar título, descripción, email, teléfono y ubicación
- Información que aparece en el sitio y metadatos

#### 🎯 Servicios
- Agregar, editar y eliminar servicios
- Modificar nombres, precios, descripciones e imágenes
- Los cambios se reflejan automáticamente en la página de servicios

#### 📸 Portafolio
- Gestionar fotos del portafolio (próximamente)
- Organizar por categorías
- Subir nuevas imágenes

#### 💾 Guardar Cambios
- Todos los cambios se guardan en archivos JSON
- Los cambios son inmediatos en el sitio web
- No requieren reinicio del servidor

### Seguridad
- Autenticación por contraseña
- Sesiones seguras con JWT
- Acceso restringido solo a administradores

## Personalización

El sitio está completamente personalizado para Laura Rosso Fotografía, incluyendo:
- Colores y diseño profesional
- Contenido adaptado a fotografía familiar y eventos
- Integración con WhatsApp para contacto directo
- Precios en pesos uruguayos
- Información de ubicación en Mercedes, Soriano

## Próximas Funcionalidades

- [ ] Gestión completa del portafolio
- [ ] Sistema de subida de imágenes
- [ ] Gestión de testimonials
- [ ] Backup y restauración de configuración
- [ ] Estadísticas de visitas

## Despliegue en Vercel para Edición Remota

Para que Laura pueda editar el sitio desde internet, sigue la guía completa en [DEPLOYMENT.md](./DEPLOYMENT.md).

### Resumen Rápido

1. **Configurar integraciones en Vercel:**
   - Upstash Redis (para configuración)
   - Vercel Blob (para imágenes)

2. **Variables de entorno necesarias:**
   ```bash
   ADMIN_PASSWORD=tu_contraseña_segura
   JWT_SECRET=tu_jwt_secret_seguro
   # Las demás se configuran automáticamente
   ```

3. **Desplegar:**
   ```bash
   npm run deploy
   ```

4. **Acceder:** `https://tu-dominio.vercel.app/admin`

---

## Desarrollo Local vs Producción

- **Desarrollo**: Usa archivos locales y configuración por defecto
- **Producción**: Usa Redis para configuración e imágenes en Blob storage

El código automáticamente detecta el entorno y usa el almacenamiento apropiado.

3. **Abrir en navegador:**
   Visita [http://localhost:3000](http://localhost:3000)

4. **Construir para producción:**
   ```bash
   npm run build
   npm start
   ```

## Personalización

### Cambiar Información de Contacto
Edita `app/contact/page.tsx` y `app/layout.tsx` para actualizar:
- Correo electrónico
- Teléfono
- Dirección

### Agregar Nuevas Fotos
- Reemplaza las URLs de Unsplash en las páginas con tus propias imágenes
- Para producción, considera usar un servicio de almacenamiento como Cloudinary

### Configurar Pagos
Para activar la tienda:
1. Crea una cuenta en Stripe
2. Agrega las claves API en variables de entorno
3. Implementa los webhooks para procesar pagos

### Personalizar Servicios
Edita `app/services/page.tsx` para modificar:
- Precios
- Descripciones de servicios
- Características incluidas

## Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Otros Proveedores
Compatible con cualquier plataforma que soporte Next.js:
- Netlify
- Railway
- Heroku

## Próximas Mejoras

- [ ] Integración completa con Stripe
- [ ] Sistema de administración para subir fotos
- [ ] Calendario interactivo para reservas
- [ ] Sistema de envío de correos
- [ ] Base de datos para almacenar reservas y productos
- [ ] Optimización de imágenes
- [ ] Internacionalización (i18n)

## Licencia

Este proyecto es privado y está diseñado específicamente para uso personal.

## Soporte

Para soporte técnico o personalización adicional, contacta al desarrollador.
