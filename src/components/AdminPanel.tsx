import { useMemo, useState, type FormEvent } from "react";
import { CalendarDays, CalendarPlus, LockKeyhole, MessageCircle, Users, X } from "lucide-react";
import type { Booking, Ride } from "@/types/booking";

interface AdminPanelProps {
  rides: Ride[];
  bookings: Booking[];
  blockedDates: string[];
  onClose: () => void;
  onAddRide: (ride: Ride) => void;
  onToggleRide: (rideId: string) => void;
  onToggleDate: (date: string) => void;
}

export function AdminPanel({ rides, bookings, blockedDates, onClose, onAddRide, onToggleRide, onToggleDate }: AdminPanelProps) {
  const [selectedRideId, setSelectedRideId] = useState(rides[0]?.id ?? "");
  const [selectedDate, setSelectedDate] = useState(rides[0]?.date ?? "");
  const [form, setForm] = useState({ title: "Ruta de iniciación", date: "", time: "10:00", duration: "60 min", level: "Sin experiencia", capacity: "6", price: "30" });
  const selectedRide = rides.find((ride) => ride.id === selectedRideId);
  const rideBookings = useMemo(() => bookings.filter((booking) => booking.rideId === selectedRideId), [bookings, selectedRideId]);
  const participants = rideBookings.reduce((total, booking) => total + booking.people, 0);
  const availableDates = useMemo(() => Array.from(new Set(rides.map((ride) => ride.date))).sort(), [rides]);
  const selectedDateRides = rides.filter((ride) => ride.date === selectedDate);
  const selectedDateRideIds = new Set(selectedDateRides.map((ride) => ride.id));
  const selectedDateBookings = bookings.filter((booking) => selectedDateRideIds.has(booking.rideId));
  const dateBlocked = selectedDate ? blockedDates.includes(selectedDate) : false;

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const ride: Ride = { id: crypto.randomUUID(), title: form.title, date: form.date, time: form.time, duration: form.duration, level: form.level, capacity: Number(form.capacity), price: Number(form.price), status: "scheduled" };
    onAddRide(ride);
    setSelectedRideId(ride.id);
    setSelectedDate(ride.date);
  };

  const shareDayWhatsApp = () => {
    if (!selectedDate) return;
    const lines = selectedDateRides.flatMap((ride) => {
      const rideBookingsForDay = bookings.filter((booking) => booking.rideId === ride.id);
      const total = rideBookingsForDay.reduce((sum, booking) => sum + booking.people, 0);
      const bookingLines = rideBookingsForDay.length
        ? rideBookingsForDay.map((booking, index) => `  ${index + 1}. ${booking.name} — ${booking.people} persona(s) — ${booking.phone}`)
        : ["  Sin reservas"];
      return [`${ride.time} · ${ride.title} (${total}/${ride.capacity})`, ...bookingLines, ""];
    });
    const totalPeople = selectedDateBookings.reduce((sum, booking) => sum + booking.people, 0);
    const message = `Senda Ecuestre\nReservas del día ${selectedDate}\nTotal participantes: ${totalPeople}\n\n${lines.join("\n")}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 p-4 md:p-8"><div className="mx-auto max-w-6xl rounded-3xl bg-stone-50 shadow-2xl">
    <header className="flex items-center justify-between border-b bg-white px-6 py-5"><div><p className="text-sm font-bold text-emerald-700">GESTIÓN INTERNA</p><h2 className="text-2xl font-bold">Panel de administración</h2></div><button onClick={onClose} className="rounded-lg p-2 hover:bg-stone-100" aria-label="Cerrar"><X /></button></header>
    <div className="grid gap-6 p-6 lg:grid-cols-[.85fr_1.15fr]">
      <section className="rounded-2xl border bg-white p-5"><div className="flex items-center gap-2"><CalendarPlus className="text-emerald-700"/><h3 className="text-lg font-bold">Crear nueva salida</h3></div><form onSubmit={submit} className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium sm:col-span-2">Tipo de experiencia<input required className="mt-1 w-full rounded-lg border p-3" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/></label>
        <label className="text-sm font-medium">Fecha<input required type="date" className="mt-1 w-full rounded-lg border p-3" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></label><label className="text-sm font-medium">Hora<input required type="time" className="mt-1 w-full rounded-lg border p-3" value={form.time} onChange={e=>setForm({...form,time:e.target.value})}/></label>
        <label className="text-sm font-medium">Duración<input required className="mt-1 w-full rounded-lg border p-3" value={form.duration} onChange={e=>setForm({...form,duration:e.target.value})}/></label><label className="text-sm font-medium">Nivel<input required className="mt-1 w-full rounded-lg border p-3" value={form.level} onChange={e=>setForm({...form,level:e.target.value})}/></label>
        <label className="text-sm font-medium">Cupo / caballos<input required type="number" min="1" className="mt-1 w-full rounded-lg border p-3" value={form.capacity} onChange={e=>setForm({...form,capacity:e.target.value})}/></label><label className="text-sm font-medium">Precio orientativo (€)<input required type="number" min="0" className="mt-1 w-full rounded-lg border p-3" value={form.price} onChange={e=>setForm({...form,price:e.target.value})}/></label>
        <button className="rounded-lg bg-emerald-700 p-3 font-bold text-white sm:col-span-2">Crear salida</button>
      </form></section>

      <section className="rounded-2xl border bg-white p-5">
        <div className="flex items-center gap-2"><CalendarDays className="text-emerald-700"/><h3 className="text-lg font-bold">Gestión del día</h3></div>
        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_auto] sm:items-end">
          <label className="text-sm font-medium">Fecha<select className="mt-1 w-full rounded-lg border p-3" value={selectedDate} onChange={e=>setSelectedDate(e.target.value)}>{availableDates.map(date=><option key={date} value={date}>{date}</option>)}</select></label>
          <button disabled={!selectedDate} onClick={()=>selectedDate && onToggleDate(selectedDate)} className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold ${dateBlocked ? "bg-emerald-700 text-white" : "bg-red-100 text-red-700"}`}><LockKeyhole size={17}/>{dateBlocked ? "Reabrir fecha" : "Bloquear fecha"}</button>
          <button disabled={!selectedDate} onClick={shareDayWhatsApp} className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-bold text-white disabled:bg-stone-300"><MessageCircle size={18}/> WhatsApp del día</button>
        </div>
        {selectedDate && <p className="mt-3 text-sm text-stone-600">{selectedDateRides.length} salida(s) · {selectedDateBookings.reduce((sum, booking)=>sum+booking.people,0)} participante(s){dateBlocked ? " · fecha bloqueada" : ""}</p>}

        <div className="mt-7 border-t pt-5"><p className="text-sm font-bold text-emerald-700">SALIDA CONCRETA</p>
        <select className="mt-3 w-full rounded-lg border p-3" value={selectedRideId} onChange={e=>setSelectedRideId(e.target.value)}>{rides.map(ride=><option key={ride.id} value={ride.id}>{ride.date} · {ride.time} · {ride.title}</option>)}</select>
        {selectedRide && <><div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-stone-100 p-4"><div><p className="font-bold">{selectedRide.title}</p><p className="text-sm text-stone-600"><Users className="mr-1 inline" size={16}/>{participants} / {selectedRide.capacity} participantes reservados</p></div><button onClick={()=>onToggleRide(selectedRide.id)} className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold ${selectedRide.status === "blocked" ? "bg-emerald-700 text-white" : "bg-red-100 text-red-700"}`}><LockKeyhole size={17}/>{selectedRide.status === "blocked" ? "Reabrir ruta" : "Bloquear ruta"}</button></div>
        <div className="mt-4 overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead><tr className="border-b text-stone-500"><th className="py-3">Cliente</th><th>Contacto</th><th>Personas</th><th>Nivel</th><th>Equipo</th></tr></thead><tbody>{rideBookings.map(booking=><tr key={booking.id} className="border-b"><td className="py-3 font-semibold">{booking.name}</td><td>{booking.phone}<br/><span className="text-xs text-stone-500">{booking.email}</span></td><td>{booking.people}</td><td>{booking.level}</td><td>{booking.equipment}</td></tr>)}{rideBookings.length===0 && <tr><td colSpan={5} className="py-8 text-center text-stone-500">Todavía no hay reservas para esta salida.</td></tr>}</tbody></table></div></>}
        </div>
      </section>
    </div>
  </div></div>;
}
