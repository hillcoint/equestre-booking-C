import type { Booking, Ride } from "@/types/booking";

const RIDES_KEY = "senda-ecuestre-rides";
const BOOKINGS_KEY = "senda-ecuestre-bookings";
const BLOCKED_DATES_KEY = "senda-ecuestre-blocked-dates";

export const initialRides: Ride[] = [
  { id: "r1", title: "Ruta de iniciación", date: "2026-09-26", time: "10:00", duration: "60 min", level: "Sin experiencia", capacity: 6, price: 28, status: "scheduled" },
  { id: "r2", title: "Ruta por la naturaleza", date: "2026-09-26", time: "12:00", duration: "90 min", level: "Todos los niveles", capacity: 8, price: 38, status: "scheduled" },
  { id: "r3", title: "Ruta al atardecer", date: "2026-09-27", time: "19:00", duration: "2 h", level: "Nivel básico", capacity: 6, price: 48, status: "scheduled" },
  { id: "r4", title: "Ruta familiar", date: "2026-09-28", time: "11:00", duration: "60 min", level: "Iniciación", capacity: 6, price: 30, status: "scheduled" },
];

function read<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) as T : fallback;
  } catch {
    return fallback;
  }
}

export const getRides = () => read<Ride[]>(RIDES_KEY, initialRides);
export const saveRides = (rides: Ride[]) => localStorage.setItem(RIDES_KEY, JSON.stringify(rides));
export const getBookings = () => read<Booking[]>(BOOKINGS_KEY, []);
export const saveBookings = (bookings: Booking[]) => localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
export const getBlockedDates = () => read<string[]>(BLOCKED_DATES_KEY, []);
export const saveBlockedDates = (dates: string[]) => localStorage.setItem(BLOCKED_DATES_KEY, JSON.stringify(dates));
export const bookedPlaces = (rideId: string, bookings: Booking[]) => bookings.filter((booking) => booking.rideId === rideId).reduce((total, booking) => total + booking.people, 0);
