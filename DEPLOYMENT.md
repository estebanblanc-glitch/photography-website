# 🚀 Guía de Despliegue para Edición Remota

Esta guía te ayudará a configurar el sitio web de Laura para que pueda editarlo desde internet.

## 📋 Requisitos Previos

- Cuenta en [Vercel](https://vercel.com)
- Proyecto Git (GitHub, GitLab, o Bitbucket)

## 🔧 Paso 1: Preparar el Código

Asegúrate de que todos los cambios estén commiteados:

```bash
git add .
git commit -m "Add remote editing capabilities with Redis and Blob storage"
git push origin main
```

## 🌐 Paso 2: Desplegar en Vercel

### Opción A: Desde Vercel Dashboard (Recomendado)

1. Ve a [vercel.com](https://vercel.com) y haz login
2. Haz clic en "New Project"
3. Importa tu repositorio de Git
4. Configura el proyecto:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (raíz del proyecto)

### Opción B: Desde Terminal

```bash
# Instalar Vercel CLI (si no lo tienes)
npm install -g vercel

# Login en Vercel
vercel login

# Desplegar
npm run deploy
```

## ⚙️ Paso 3: Configurar Integraciones

### 3.1 Upstash Redis (para configuración del sitio)

1. Ve al [Vercel Marketplace](https://vercel.com/marketplace)
2. Busca "Upstash Redis"
3. Haz clic en "Install"
4. Selecciona tu proyecto
5. Autoriza la instalación
6. Las variables de entorno se configurarán automáticamente

### 3.2 Vercel Blob (para imágenes)

1. Ve a [Vercel Storage](https://vercel.com/dashboard/stores)
2. Haz clic en "Create Database" → "Blob"
3. Nombra tu store (ej: "laura-fotos")
4. Ve a tu proyecto en Vercel
5. Ve a "Settings" → "Environment Variables"
6. Agrega: `BLOB_READ_WRITE_TOKEN` con el token del Blob store

## 🔐 Paso 4: Configurar Variables de Entorno

En tu proyecto de Vercel, ve a **Settings → Environment Variables** y configura:

### Variables Obligatorias
```
ADMIN_PASSWORD=tu_contraseña_segura_aqui
JWT_SECRET=tu_jwt_secret_muy_seguro_de_al_menos_32_caracteres
```

### Variables de Integraciones (se configuran automáticamente)
```
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
BLOB_READ_WRITE_TOKEN=...
```

## ✅ Paso 5: Verificar Despliegue

1. Espera a que termine el despliegue
2. Ve a la URL generada por Vercel
3. Prueba acceder al panel: `https://tu-dominio.vercel.app/admin`
4. Usa la contraseña configurada

## 🔄 Paso 6: Probar Funcionalidades

### Editar Información del Sitio
1. Ve al panel de admin
2. Haz clic en "Editar información"
3. Cambia el título, email, teléfono, etc.
4. Guarda los cambios
5. Verifica que se actualice en la página principal

### Gestionar Servicios
1. Ve al panel de admin
2. Haz clic en "Gestionar servicios"
3. Agrega o edita servicios
4. Guarda los cambios
5. Verifica que aparezcan en la página de servicios

### Subir Imágenes
1. Las imágenes se suben automáticamente a Vercel Blob
2. Las URLs se generan automáticamente
3. Las imágenes son públicas y accesibles desde cualquier lugar

## 🛠️ Solución de Problemas

### Error de Redis
- Verifica que la integración de Upstash esté instalada
- Revisa que las variables de entorno estén configuradas

### Error de Blob
- Verifica que el Blob store esté creado
- Confirma que el token esté configurado correctamente

### Panel no carga
- Verifica que las variables `ADMIN_PASSWORD` y `JWT_SECRET` estén configuradas
- Revisa los logs de Vercel en "Functions"

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en Vercel Dashboard
2. Verifica la configuración de variables de entorno
3. Asegúrate de que las integraciones estén correctamente instaladas

## 🎉 ¡Listo!

Una vez configurado, Laura podrá:
- ✅ Editar su sitio desde cualquier dispositivo con internet
- ✅ Subir fotos que se almacenan en la nube
- ✅ Gestionar servicios y precios
- ✅ Actualizar información de contacto
- ✅ Todo se guarda automáticamente y es persistente

¡El sitio está listo para edición remota! 🎊📸