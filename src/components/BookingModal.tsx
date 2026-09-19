import { useState, type FormEvent } from "react";
import { CheckCircle2, X } from "lucide-react";
import type { Booking, Ride } from "@/types/booking";

interface BookingModalProps { ride: Ride; freePlaces: number; onClose: () => void; onConfirm: (booking: Booking) => void; }

export function BookingModal({ ride, freePlaces, onClose, onConfirm }: BookingModalProps) {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", people: "1", level: "Sin experiencia", equipment: "Casco del centro" });
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const people = Number(form.people);
    if (!people || people > freePlaces) return;
    onConfirm({ id: crypto.randomUUID(), rideId: ride.id, name: form.name, phone: form.phone, email: form.email, people, level: form.level, equipment: form.equipment, createdAt: new Date().toISOString() });
    setSuccess(true);
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"><div className="max-h-[90vh] w-full max-w-lg overflow-auto rounded-2xl bg-white p-6 shadow-2xl">
    <div className="flex justify-between"><div><p className="text-sm font-semibold text-emerald-700">RESERVA</p><h2 className="text-2xl font-bold">{ride.title}</h2></div><button onClick={onClose} aria-label="Cerrar"><X /></button></div>
    {success ? <div className="py-12 text-center"><CheckCircle2 className="mx-auto h-14 w-14 text-emerald-700"/><h3 className="mt-4 text-2xl font-bold">¡Reserva confirmada!</h3><p className="mt-2 text-stone-600">Tu reserva se ha guardado correctamente en este dispositivo.</p><button onClick={onClose} className="mt-6 rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white">Cerrar</button></div> :
    <form onSubmit={submit} className="mt-6 space-y-4">
      <p className="rounded-lg bg-stone-100 p-3 text-sm">{ride.date} · {ride.time} · <strong>{freePlaces} plazas libres</strong></p>
      <label className="block text-sm font-medium">Nombre<input required className="mt-1 w-full rounded-lg border p-3" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label>
      <div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm font-medium">Teléfono<input required className="mt-1 w-full rounded-lg border p-3" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></label><label className="block text-sm font-medium">Correo<input required type="email" className="mt-1 w-full rounded-lg border p-3" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label></div>
      <label className="block text-sm font-medium">Número de personas<input required type="number" min="1" max={freePlaces} className="mt-1 w-full rounded-lg border p-3" value={form.people} onChange={e=>setForm({...form,people:e.target.value})}/></label>
      <label className="block text-sm font-medium">Experiencia a caballo<select className="mt-1 w-full rounded-lg border p-3" value={form.level} onChange={e=>setForm({...form,level:e.target.value})}><option>Sin experiencia</option><option>Principiante</option><option>Intermedio</option><option>Avanzado</option></select></label>
      <label className="block text-sm font-medium">Equipamiento<select className="mt-1 w-full rounded-lg border p-3" value={form.equipment} onChange={e=>setForm({...form,equipment:e.target.value})}><option>Casco del centro</option><option>Llevo mi propio casco</option><option>Necesito asesoramiento</option></select></label>
      <button className="w-full rounded-lg bg-emerald-700 p-3 font-semibold text-white hover:bg-emerald-800">Confirmar reserva</button>
    </form>}
  </div></div>;
}
