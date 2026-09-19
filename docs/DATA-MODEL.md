# Modelo de datos del MVP

## Ride

Representa una salida ecuestre y contiene identificador, título, fecha, hora, duración, nivel, capacidad, precio y estado.

## Booking

Representa una reserva asociada a una salida e incluye los datos de contacto y participación necesarios para la demo.

## Disponibilidad

Las plazas libres se calculan restando de la capacidad de la salida el total de personas incluidas en sus reservas.

Los objetos se persisten en localStorage mediante las funciones de `src/lib/storage.ts`.
