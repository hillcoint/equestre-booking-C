# Senda Ecuestre · equestre-booking-C

Demo funcional de una aplicación web de **reservas online para rutas guiadas a caballo**. El objetivo del proyecto es disponer de una versión base, sencilla y portable, que posteriormente pueda compararse y evolucionarse con Lovable.

## Funcionalidades

### Cliente
- Consulta de próximas salidas.
- Fecha, hora, duración, nivel y precio por persona.
- Plazas disponibles calculadas en tiempo real.
- Formulario de reserva.
- Bloqueo automático de la reserva cuando una salida está completa o cancelada.
- Página informativa con experiencia, precios, requisitos, seguridad y ubicación.
- Diseño responsive para móvil, tablet y escritorio.

### Administración
- Creación de nuevas salidas.
- Configuración de fecha, hora, duración, nivel, cupo y precio.
- Consulta de reservas y participantes por salida.
- Bloqueo y reapertura de rutas por seguridad o meteorología.
- Compartir por WhatsApp el resumen de reservas de una salida.

## Persistencia

Esta versión **no utiliza backend ni base de datos externa**. Las rutas y reservas se almacenan en `localStorage` del navegador. Esto permite probar el flujo completo sin Supabase, servidor PHP ni API.

Consecuencia importante: los datos son locales al navegador y dispositivo donde se realiza la prueba. No es todavía una solución multiusuario ni una versión preparada para producción.

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- localStorage

## Ejecutar en local

Requisitos: Node.js y npm.

```bash
npm install
npm run dev
```

Vite mostrará la URL local de desarrollo. Para comprobar que la aplicación compila para producción:

```bash
npm run build
```

## Estructura principal

```text
src/
├── components/
│   ├── AdminPanel.tsx      # Gestión interna de salidas y reservas
│   ├── BookingModal.tsx    # Formulario/modal de reserva
│   └── RideCard.tsx        # Tarjeta pública de cada salida
├── lib/
│   └── storage.ts          # Persistencia y datos locales
├── types/
│   └── booking.ts          # Tipos Ride y Booking
└── App.tsx                 # Página principal y composición de la aplicación
```

## Responsive

La interfaz está planteada con enfoque mobile-first. En pantallas pequeñas se simplifica la navegación, los botones principales ocupan el ancho disponible, las tarjetas reorganizan sus elementos verticalmente y las secciones informativas pasan de varias columnas a una sola. El panel de administración permite desplazamiento y las tablas extensas utilizan scroll horizontal.

## Limitaciones deliberadas de esta versión

- Sin autenticación real para administración.
- Sin Supabase ni base de datos compartida.
- Sin pagos online.
- Sin envío real de email o SMS.
- Sin dirección comercial real: la ubicación mostrada es demostrativa.
- WhatsApp se utiliza mediante enlace de compartir, no mediante WhatsApp Business API.

## Siguiente fase

El repositorio sirve como **versión C** de referencia. La siguiente fase consiste en crear una versión equivalente mediante Lovable para estudiar el flujo de trabajo, estructura generada, integración con GitHub y una futura migración o evolución hacia backend real/Supabase.

## Estado

**MVP funcional de demostración.** Incluye flujo público de reserva, persistencia local, panel administrativo y contenido informativo responsive.
