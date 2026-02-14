
# 🚀 Guía de Despliegue en Cloudflare Pages

Esta guía te ayudará a publicar la plataforma de *Los Lobos Enduro Team* en Cloudflare Pages, conectada directamente a tu repositorio de GitHub.

## 1. Preparación del Repositorio
Asegúrate de que todo el código actual esté subido a tu repositorio de GitHub.
Si tienes el proyecto en local pero no en GitHub:
   - Crea un repositorio nuevo en GitHub llamado `los-lobos-enduro`.
   - Inicializa git y sube el código:
     ```bash
     git init
     git add .
     git commit -m "Initial commit for Cloudflare"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/los-lobos-enduro.git
     git push -u origin main
     ```

## 2. Configuración en Cloudflare Dashboard
1.  Ingresa a [Cloudflare Dashboard](https://dash.cloudflare.com/) y selecciona tu cuenta.
2.  Ve a **Workers & Pages** en el menú de la izquierda.
3.  Haz clic en el botón azul **Create application**.
4.  Selecciona la pestaña **Pages** y haz clic en **Connect to Git**.
5.  Autoriza a Cloudflare para acceder a tu cuenta de GitHub (si no lo has hecho) y selecciona el repositorio `los-lobos-enduro`.
6.  Haz clic en **Begin setup**.

## 3. Configuración de Build (Vital)
En la pantalla de configuración ("Set up builds and deployments"):

*   **Project name**: `los-lobos-enduro` (o el que prefieras).
*   **Production branch**: `main`.
*   **Framework preset**: Selecciona **Next.js**.

**Ajustas los comandos (IMPORTANTE):**
Cloudflare intentará usar `npm run build` por defecto. Para asegurar compatibilidad total con las funciones Edge (como los webhooks de Stripe), usaremos `@cloudflare/next-on-pages`.

*   **Build command**: `npm run pages:build`
    *(Este comando ejecuta `npx @cloudflare/next-on-pages@1`, que he configurado en tu `package.json`)*
*   **Build output directory**: `.vercel/output/static`
    *(Esta es la carpeta que genera el adaptador de Cloudflare, NO uses `.next` ni `out`)*

## 4. Variables de Entorno (Environment Variables)
No le des a "Save and Deploy" todavía. Busca la sección **Environment variables (advanced)** y añade tus claves de Supabase y Stripe.

| Variable Name | Value (Valor) |
| :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Tu URL de Supabase (ej. `https://xyz.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Tu clave `anon` pública de Supabase |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Tu clave pública de Stripe (ej. `pk_test_...`) |
| `STRIPE_SECRET_KEY` | Tu clave secreta de Stripe (ej. `sk_test_...`) |
| `NODE_VERSION` | `18` (Opcional, pero recomendado para estabilidad) |

## 5. Despliegue
1.  Haz clic en **Save and Deploy**.
2.  Cloudflare comenzará a clonar tu repositorio, instalar dependencias y contruir el sitio.
3.  Si todo sale bien (puede tardar 2-3 minutos), verás un enlace verde: `https://los-lobos-enduro.pages.dev`.

¡Felicidades! Tu web ya está en vivo y lista para la montaña. 🏔️🏁

---

### Solución de Problemas Comunes

#### ❌ Error `ERR_SSL_VERSION_OR_CIPHER_MISMATCH`
Si ves este error al intentar abrir tu web:
**¡No te asustes, el código está bien!**
Este error significa que Cloudflare está **generando el certificado de seguridad (SSL)**.
1.  **Espera 10-15 minutos**: Es el tiempo normal de propagación para un dominio nuevo.
2.  **Prueba en Incognito**: A veces tu navegador guarda el error en caché.
3.  **Verifica en el Dashboard**: Ve a la pestaña **Custom Domains** en tu proyecto de Pages. Debería decir "Active" (verde). Si dice "Initializing" (naranja), solo sigue esperando.

#### 🛠️ Error de Imágenes (500)
Si las imágenes no cargan o dan error 500:
Edita `next.config.mjs` y descomenta `unoptimized: true` dentro de `images: { ... }`. Esto desactiva la optimización automática que a veces falla en el plan gratuito si no está configurada.

#### 🔍 Error de Base de Datos
Si no carga la lista de eventos, verifica que tus Environment Variables en Cloudflare sean exactamente iguales a las de tu `.env.local` y que no tengan espacios extra.
