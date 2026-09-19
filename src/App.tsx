import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Clock, MapPin, Settings, ShieldCheck, Users } from "lucide-react";
import { AdminPanel } from "@/components/AdminPanel";
import { BookingModal } from "@/components/BookingModal";
import { RideCard } from "@/components/RideCard";
import { bookedPlaces, getBookings, getRides, saveBookings, saveRides } from "@/lib/storage";
import type { Booking, Ride } from "@/types/booking";

export default function App() {
  const [rides, setRides] = useState<Ride[]>(getRides);
  const [bookings, setBookings] = useState<Booking[]>(getBookings);
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null);
  const [adminOpen, setAdminOpen] = useState(false);
  useEffect(() => saveRides(rides), [rides]);
  useEffect(() => saveBookings(bookings), [bookings]);
  const available = (ride: Ride) => Math.max(0, ride.capacity - bookedPlaces(ride.id, bookings));
  const nextRides = useMemo(() => [...rides].sort((a,b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`)), [rides]);
  const addBooking = (booking: Booking) => setBookings(current => [...current, booking]);
  const addRide = (ride: Ride) => setRides(current => [...current, ride]);
  const toggleRide = (rideId: string) => setRides(current => current.map(ride => ride.id === rideId ? { ...ride, status: ride.status === "blocked" ? "scheduled" : "blocked" } : ride));

  return <main className="min-h-screen bg-stone-50 text-stone-900">
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"><div><p className="text-xl font-bold">Senda Ecuestre</p><p className="text-xs text-stone-500">Experiencias guiadas a caballo</p></div><div className="flex items-center gap-5"><nav className="hidden gap-6 text-sm font-semibold md:flex"><a href="#salidas">Rutas</a><a href="#centro">El centro</a><a href="#seguridad">Seguridad</a></nav><button onClick={()=>setAdminOpen(true)} className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold hover:bg-stone-100"><Settings size={17}/> <span className="hidden sm:inline">Administración</span></button></div></div></header>
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_.8fr] lg:items-center"><div><span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">Reserva online · plazas en tiempo real</span><h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">Tu próxima aventura empieza a caballo.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">Consulta las próximas experiencias ecuestres, comprueba las plazas disponibles y reserva sin llamadas ni esperas.</p><a href="#salidas" className="mt-8 inline-flex rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800">Consultar disponibilidad</a></div><div className="rounded-3xl bg-emerald-950 p-8 text-white shadow-xl"><CalendarDays className="h-10 w-10"/><h2 className="mt-6 text-2xl font-bold">Reserva sencilla</h2><div className="mt-6 space-y-4 text-emerald-50"><p className="flex gap-3"><Clock/> Elige fecha y horario</p><p className="flex gap-3"><Users/> Comprueba las plazas libres</p><p className="flex gap-3"><ShieldCheck/> Confirma tu experiencia</p></div></div></section>
    <section id="salidas" className="bg-white py-16"><div className="mx-auto max-w-6xl px-6"><p className="font-bold text-emerald-700">PRÓXIMAS SALIDAS</p><div className="mt-2 flex flex-wrap items-end justify-between gap-4"><h2 className="text-3xl font-bold">Elige tu experiencia</h2><p className="text-sm text-stone-500">La disponibilidad se actualiza al reservar.</p></div><div className="mt-8 grid gap-6 md:grid-cols-2">{nextRides.map(ride => <RideCard key={ride.id} ride={ride} freePlaces={available(ride)} onBook={setSelectedRide}/>)}</div></div></section>
    <section id="centro" className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3"><div className="md:col-span-2"><p className="font-bold text-emerald-700">SENDA ECUESTRE</p><h2 className="mt-2 text-3xl font-bold">Rutas para disfrutar con seguridad</h2><p className="mt-4 leading-7 text-stone-600">Experiencias guiadas para principiantes, familias y jinetes con experiencia. Antes de cada salida asignamos el caballo adecuado y realizamos una breve explicación de manejo y seguridad.</p></div><div className="rounded-2xl border bg-white p-6"><MapPin className="text-emerald-700"/><h3 className="mt-4 font-bold">Punto de encuentro</h3><p className="mt-2 text-sm text-stone-600">Centro Senda Ecuestre · entorno natural y rutas señalizadas.</p></div></section>
    <section id="seguridad" className="bg-stone-900 py-12 text-stone-100"><div className="mx-auto max-w-6xl px-6"><h2 className="text-2xl font-bold">Antes de montar</h2><p className="mt-3 max-w-3xl text-stone-300">Recomendamos pantalón largo y calzado cerrado. El casco es obligatorio y puede proporcionarlo el centro. Las rutas pueden aplazarse o bloquearse por meteorología o por motivos de seguridad.</p></div></section>
    {selectedRide && <BookingModal ride={selectedRide} freePlaces={available(selectedRide)} onClose={()=>setSelectedRide(null)} onConfirm={addBooking}/>} 
    {adminOpen && <AdminPanel rides={rides} bookings={bookings} onClose={()=>setAdminOpen(false)} onAddRide={addRide} onToggleRide={toggleRide}/>} 
  </main>;
}
