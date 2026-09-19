# Responsive checklist

Revisión aplicada a la interfaz de Senda Ecuestre.

## Móvil
- Contenedor sin overflow horizontal global.
- Padding reducido a 16 px en secciones principales.
- Hero en una columna.
- CTA principal a ancho completo.
- Navegación secundaria oculta para evitar saturación.
- Botón de Administración conserva icono y oculta texto cuando falta espacio.
- Tarjetas y bloques informativos en una columna.
- Tablas del panel administrativo mantienen scroll horizontal.

## Tablet
- Padding de 24 px.
- Tarjetas de rutas en dos columnas cuando existe espacio suficiente.
- Requisitos y contenidos informativos adaptan automáticamente su rejilla.
- Texto del botón Administración vuelve a mostrarse.

## Escritorio
- Ancho máximo de contenido: `max-w-6xl`.
- Hero en dos columnas.
- Navegación completa visible desde breakpoint `lg`.
- Precios en tres columnas.
- Requisitos de seguridad en cuatro columnas.
- Ubicación en dos columnas.

## Criterios
- No se usan anchos fijos para la estructura principal.
- Los grids cambian mediante breakpoints de Tailwind.
- Iconos críticos usan `shrink-0` junto a textos largos.
- El contenido principal utiliza `overflow-x-hidden` como protección ante desbordamientos accidentales.
- Los elementos interactivos mantienen áreas de pulsación cómodas en móvil.

> Nota: la comprobación definitiva en producción debe hacerse también en dispositivos/navegadores reales o con las herramientas responsive del navegador.
