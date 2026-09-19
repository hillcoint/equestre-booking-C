# Senda Ecuestre · equestre-booking-C

Demo funcional de una aplicación web de **reservas online para rutas guiadas a caballo**. El objetivo del proyecto es disponer de una versión base, sencilla y portable, que posteriormente pueda compararse y evolucionarse con Lovable.

## Demo pública

La aplicación se publica mediante GitHub Pages en:

**https://hillcoint.github.io/equestre-booking-C/**

El despliegue está automatizado con GitHub Actions. Cada cambio enviado a la rama `main` compila la aplicación con Vite y publica automáticamente el contenido generado en `dist`.

## Funcionalidades

### Cliente
- Consulta de próximas salidas.
- Fecha, hora, duración, nivel y precio por persona.
- Plazas disponibles calculadas en tiempo real.
- Formulario de reserva.
- Bloqueo automático de la reserva cuando una salida está completa, cancelada o su fecha está bloqueada.
- Página informativa con experiencia, precios, requisitos, seguridad y ubicación.
- Diseño responsive para móvil, tablet y escritorio.

### Administración
- Creación de nuevas salidas.
- Configuración de fecha, hora, duración, nivel, cupo y precio.
- Consulta de reservas y participantes por salida.
- Bloqueo y reapertura de rutas concretas.
- Bloqueo y reapertura de fechas completas.
- Compartir por WhatsApp el listado de reservas de todo el día.

## Guía de uso

La guía breve solicitada en los entregables está disponible en:

**`docs/GUIA_USO.md`**

Incluye cómo crear una salida, bloquear una fecha, reabrirla, compartir reservas por WhatsApp y qué ocurre si se borran los datos del navegador.

## Persistencia

Esta versión **no utiliza backend ni base de datos externa**. Las rutas, reservas y fechas bloqueadas se almacenan en `localStorage` del navegador. Esto permite probar el flujo completo sin Supabase, servidor PHP ni API.

Consecuencia importante: los datos son locales al navegador y dispositivo donde se realiza la prueba. Si se borran los datos del sitio o el `localStorage`, se perderán las reservas, salidas añadidas y fechas bloqueadas guardadas en ese dispositivo.

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- localStorage
- GitHub Actions
- GitHub Pages

## Ejecutar en local

Requisitos: Node.js y npm.

```bash
npm install
npm run dev
```

Para comprobar la compilación de producción:

```bash
npm run build
```

## Estructura principal

```text
src/
├── components/
│   ├── AdminPanel.tsx      # Gestión interna de salidas, fechas y reservas
│   ├── BookingModal.tsx    # Formulario/modal de reserva
│   └── RideCard.tsx        # Tarjeta pública de cada salida
├── lib/
│   └── storage.ts          # Persistencia y datos locales
├── types/
│   └── booking.ts          # Tipos Ride y Booking
└── App.tsx                 # Página principal y composición de la aplicación

docs/
└── GUIA_USO.md             # Guía breve de operación
```

## Responsive

La interfaz está planteada con enfoque mobile-first. En pantallas pequeñas se simplifica la navegación, los botones principales ocupan el ancho disponible, las tarjetas reorganizan sus elementos verticalmente y las secciones informativas pasan de varias columnas a una sola. El panel de administración permite desplazamiento y las tablas extensas utilizan scroll horizontal.

## Despliegue

El fichero `.github/workflows/deploy-pages.yml` ejecuta automáticamente:

```text
checkout → Node.js → npm install → npm run build → publicar dist
```

`vite.config.ts` utiliza `base: "/equestre-booking-C/"` para que los recursos JavaScript y CSS funcionen correctamente bajo la ruta de proyecto de GitHub Pages.

## Limitaciones deliberadas de esta versión

- Sin autenticación real para administración.
- Sin Supabase ni base de datos compartida.
- Sin pagos online.
- Sin envío real de email o SMS.
- Sin dirección comercial real: la ubicación mostrada es demostrativa.
- WhatsApp se utiliza mediante enlace de compartir, no mediante WhatsApp Business API.

## Estado

**MVP funcional de demostración.** Incluye flujo público de reserva, persistencia local, panel administrativo, bloqueo de fechas, listado diario por WhatsApp, contenido informativo responsive, guía de uso y despliegue automático en GitHub Pages.
