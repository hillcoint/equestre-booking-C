# Senda Ecuestre · equestre-booking-C

Aplicación web responsive para gestionar y reservar experiencias guiadas a caballo.

Este repositorio corresponde a la versión **C (ChatGPT)** del experimento. La aplicación se ha construido de forma deliberadamente sencilla y portable, sin backend ni servicios externos: los datos se almacenan en `localStorage` del navegador.

## Objetivo

El proyecto sirve como MVP funcional para un centro ecuestre que necesita publicar salidas, controlar plazas y recibir reservas online. También se utiliza como base para comparar el desarrollo manual/asistido por ChatGPT con una posterior versión creada en Lovable.

## Funcionalidades

### Zona pública

- Landing page informativa del centro ecuestre.
- Próximas salidas disponibles.
- Fecha, hora, duración, nivel, precio y plazas de cada ruta.
- Reserva online mediante formulario.
- Control de plazas disponibles.
- Información de precios orientativos.
- Requisitos, normas y recomendaciones de seguridad.
- Información del centro y punto de encuentro.
- Diseño responsive para móvil, tablet y escritorio.

### Administración

El botón **Administración** abre el panel interno de demostración.

Desde él se puede:

- Crear nuevas salidas.
- Definir fecha y hora.
- Indicar duración y nivel.
- Definir cupo / caballos disponibles.
- Establecer precio.
- Consultar las reservas de una salida.
- Ver número de participantes.
- Bloquear una ruta por seguridad o meteorología.
- Reabrir una ruta bloqueada.
- Compartir por WhatsApp el listado de reservas de la salida seleccionada.

## Persistencia de datos

La aplicación no utiliza una base de datos real.

Las salidas y reservas se guardan mediante `localStorage`, por lo que permanecen disponibles al recargar la página en el mismo navegador. Los datos no se comparten entre dispositivos ni usuarios.

Esto es intencionado: esta versión busca validar interfaz, flujo de reserva y gestión antes de incorporar infraestructura como Supabase o un backend propio.

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- localStorage

## Estructura principal

```text
src/
├── components/
│   ├── AdminPanel.tsx
│   ├── BookingModal.tsx
│   └── RideCard.tsx
├── lib/
│   └── storage.ts
├── types/
│   └── booking.ts
└── App.tsx
```

## Ejecución en local

Requisitos: Node.js y npm.

```bash
npm install
npm run dev
```

Vite mostrará la URL local de desarrollo en la terminal.

Para generar la versión de producción:

```bash
npm run build
```

## Responsive

La interfaz está planteada mobile-first. En pantallas pequeñas se simplifica la navegación, los CTA ocupan el ancho disponible, las secciones pasan a una sola columna y el panel de administración permite desplazamiento horizontal en tablas cuando sea necesario. En tablet y escritorio se activan las rejillas de dos, tres o cuatro columnas según el contenido.

## Limitaciones actuales

Esta es una versión MVP/demo. No incluye:

- autenticación real del administrador;
- base de datos remota;
- pagos online;
- envío automático de email o WhatsApp;
- sincronización entre dispositivos;
- dirección real del centro;
- reglas avanzadas de disponibilidad por caballo.

El acceso a Administración es visible porque el objetivo actual es demostrar el flujo, no proteger un entorno de producción.

## Posible evolución

Una versión de producción podría sustituir `localStorage` por Supabase o por una API propia y añadir autenticación, roles, base de datos, notificaciones y pagos sin necesidad de rehacer la interfaz principal.

## Estado

**MVP funcional.** Landing informativa, reservas, control de plazas y panel de administración implementados.
