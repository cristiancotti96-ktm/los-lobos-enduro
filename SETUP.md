
# Los Lobos Enduro Team - Web Platform Setup

## Pasos para iniciar el proyecto

Debido a que el entorno actual no tiene Node.js instalado, he generado la estructura completa del proyecto manualmente. Para ejecutarlo, sigue estos pasos:

### 1. Prerequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

### 2. Instalación de Dependencias
Abre una terminal en esta carpeta (`Los Lobos Enduro Team`) y ejecuta:

```bash
npm install
```

Esto descargará Next.js, React, Tailwind CSS, Supabase y todas las librerías necesarias definidas en `package.json`.

### 3. Configuración de Supabase
1. Ve a [Supabase](https://supabase.com/) y crea un nuevo proyecto.
2. Ve al **SQL Editor** en tu dashboard de Supabase.
3. Abre el archivo `supabase/schema.sql` que he generado en este proyecto.
4. Copia todo el contenido y ejecútalo en el SQL Editor de Supabase. Esto creará las tablas (`profiles`, `eventos`, `inscripciones`) y las políticas de seguridad (RLS).

### 4. Variables de Entorno
Crea un archivo llamado `.env.local` en la raíz del proyecto y añade tus credenciales de Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
STRIPE_SECRET_KEY=tu_clave_secreta_de_stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_clave_publica_de_stripe
```

### 5. Configuración de Stripe (Pagos)
Para los pagos, necesitarás configurar los Webhooks de Stripe para que apunten a tu endpoint de API (que se implementará en `src/app/api/webhooks/stripe/route.ts`).

### 6. Ejecutar el Servidor de Desarrollo
Una vez configurado todo, ejecuta:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la web.

## Estructura del Proyecto

- `src/app`: Rutas de la aplicación (Next.js App Router).
- `src/components`: Componentes reutilizables (Navbar, Footer, UI).
- `src/lib`: Configuración de clientes (Supabase, Stripe).
- `supabase`: Esquema de base de datos SQL.
- `public`: Archivos estáticos.

## Diseño
El diseño utiliza Tailwind CSS con una paleta de colores personalizada:
- Naranja Rústico (`text-orange-500`, `bg-orange-600`)
- Verde Bosque (Integrado en variables CSS)
- Gris Piedra y Fondos Oscuros para el modo "Rugged".
