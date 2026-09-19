# Guía breve de uso · Senda Ecuestre

## 1. Crear una salida

1. Abre la aplicación y entra en **Administración**.
2. En **Crear nueva salida**, indica el tipo de experiencia, fecha, hora, duración, nivel, cupo y precio.
3. Pulsa **Crear salida**.
4. La nueva salida aparecerá en la web pública y en el panel de administración.

## 2. Bloquear una fecha completa

1. En **Administración**, ve a **Gestión del día**.
2. Selecciona la fecha que quieres gestionar.
3. Pulsa **Bloquear fecha**.
4. Todas las salidas de ese día quedarán cerradas a nuevas reservas. En la página pública se mostrarán como **Fecha bloqueada**.
5. Para volver a admitir reservas, pulsa **Reabrir fecha**.

También puedes bloquear o reabrir una salida concreta desde la sección **Salida concreta** sin afectar al resto de salidas de ese día.

## 3. Compartir las reservas del día por WhatsApp

1. En **Gestión del día**, selecciona una fecha.
2. Pulsa **WhatsApp del día**.
3. Se abrirá WhatsApp con un resumen preparado que incluye las salidas de esa fecha, participantes y datos básicos de contacto de las reservas.

## 4. Dónde se guardan los datos

Esta demo guarda salidas, reservas y fechas bloqueadas en **localStorage** del navegador. Los datos permanecen en ese navegador y dispositivo mientras no se eliminen.

## 5. Qué ocurre si se borra el historial o los datos del navegador

Si se eliminan los datos del sitio, el almacenamiento local o se usa una limpieza del navegador que borre `localStorage`, se perderán las reservas creadas, las salidas añadidas y las fechas bloqueadas en ese dispositivo. La aplicación volverá a mostrar los datos de demostración iniciales.

Esta versión no usa una base de datos compartida, por lo que los datos no se sincronizan entre dispositivos ni navegadores distintos.
