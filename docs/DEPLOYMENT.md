# Despliegue

La aplicación es un frontend Vite estático.

## Build

```bash
npm install
npm run build
```

El resultado se genera normalmente en `dist/` y puede desplegarse en un hosting estático compatible con aplicaciones Vite/React.

## Importante

La persistencia actual es localStorage. Un despliegue público no convierte la demo en un sistema multiusuario: cada navegador mantiene sus propios datos. Para reservas reales compartidas entre clientes y administración será necesario sustituir esta persistencia por una base de datos/backend.
