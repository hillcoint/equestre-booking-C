# Responsive notes

La implementación usa los breakpoints estándar de Tailwind y un enfoque mobile-first.

## Cambios principales

- Header compacto en móvil y navegación completa en escritorio.
- Hero: una columna en móvil, dos en escritorio.
- CTA principal: ancho completo en móvil.
- Tarjetas de rutas: una columna en móvil, dos desde `md`.
- Precios: una columna en móvil, tres desde `md`.
- Beneficios: una columna y dos desde `sm`.
- Seguridad: una columna, dos desde `sm` y cuatro desde `lg`.
- Ubicación: una columna y dos desde `md`.
- Footer apilado en móvil y horizontal desde `md`.

El panel administrativo ya protege su tabla mediante `overflow-x-auto` y utiliza una distribución de una columna que pasa a dos en pantallas grandes.
