import { CalendarDays, Clock, Users } from "lucide-react";
import type { Ride } from "@/types/booking";

interface RideCardProps {
  ride: Ride;
  freePlaces: number;
  onBook: (ride: Ride) => void;
}

export function RideCard({ ride, freePlaces, onBook }: RideCardProps) {
  const blocked = ride.status === "blocked";
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div><p className="text-sm font-semibold text-emerald-700">{ride.level}</p><h3 className="mt-1 text-xl font-bold">{ride.title}</h3></div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${blocked ? "bg-red-100 text-red-700" : freePlaces > 0 ? "bg-emerald-100 text-emerald-800" : "bg-stone-200 text-stone-700"}`}>{blocked ? "Cancelada" : freePlaces > 0 ? `${freePlaces} libres` : "Completa"}</span>
      </div>
      <div className="mt-5 grid gap-3 text-sm text-stone-600">
        <p className="flex items-center gap-2"><CalendarDays size={18} /> {new Date(`${ride.date}T12:00:00`).toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}</p>
        <p className="flex items-center gap-2"><Clock size={18} /> {ride.time} · {ride.duration}</p>
        <p className="flex items-center gap-2"><Users size={18} /> {freePlaces} de {ride.capacity} plazas disponibles</p>
      </div>
      <div className="mt-6 flex items-center justify-between"><span className="text-lg font-bold">{ride.price} € <small className="font-normal text-stone-500">/ persona</small></span><button disabled={blocked || freePlaces === 0} onClick={() => onBook(ride)} className="rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-stone-300">Reservar</button></div>
    </article>
  );
}
