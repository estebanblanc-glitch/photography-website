# Fotografía Profesional - Sitio Web

Una página web completa y profesional para una fotógrafa, construida con Next.js 16, TypeScript y Tailwind CSS.

## Características

- **Portafolio Interactivo**: Galería de fotos con categorías y filtros
- **Sistema de Reservas**: Formulario de reserva con calculadora de precios
- **Tienda en Línea**: Carrito de compras con productos fotográficos
- **Páginas Informativas**: Servicios detallados, sobre mí, contacto
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
│   ├── about/          # Página "Sobre Mí"
│   ├── booking/        # Sistema de reservas
│   ├── contact/        # Página de contacto
│   ├── portfolio/      # Portafolio de fotos
│   ├── services/       # Servicios y precios
│   ├── shop/           # Tienda en línea
│   ├── layout.tsx      # Layout principal con navegación
│   └── page.tsx        # Página de inicio
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
