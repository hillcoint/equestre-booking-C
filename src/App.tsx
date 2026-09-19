import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

const experiences = [
  { title: "Ruta de iniciación", duration: "60 min", level: "Sin experiencia", places: 6 },
  { title: "Ruta por la naturaleza", duration: "90 min", level: "Todos los niveles", places: 8 },
  { title: "Ruta al atardecer", duration: "2 h", level: "Nivel básico", places: 6 },
];

export default function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xl font-semibold">Senda Ecuestre</p>
            <p className="text-sm text-stone-500">Experiencias guiadas a caballo</p>
          </div>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#experiencias">Experiencias</a>
            <a href="#reservas">Reservar</a>
            <a href="#centro">El centro</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">Reserva online</span>
          <h1 className="mt-6 text-5xl font-bold leading-tight">Vive una experiencia ecuestre diferente</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
            Consulta nuestras próximas rutas, comprueba las plazas disponibles y reserva tu experiencia a caballo en pocos minutos.
          </p>
          <a href="#experiencias" className="mt-8 inline-flex rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800">
            Ver próximas rutas
          </a>
        </div>
        <div className="rounded-3xl bg-emerald-900 p-10 text-white shadow-xl">
          <CalendarDays className="h-10 w-10" />
          <h2 className="mt-8 text-2xl font-semibold">Próximas salidas</h2>
          <p className="mt-3 text-emerald-100">Disponibilidad actualizada en este dispositivo.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-white/10 p-4"><Clock className="mb-2" />Horarios programados</div>
            <div className="rounded-xl bg-white/10 p-4"><Users className="mb-2" />Plazas limitadas</div>
          </div>
        </div>
      </section>

      <section id="experiencias" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-semibold text-emerald-700">EXPERIENCIAS</p>
          <h2 className="mt-2 text-3xl font-bold">Elige tu próxima ruta</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {experiences.map((experience) => (
              <article key={experience.title} className="rounded-2xl border border-stone-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <div className="mt-5 space-y-3 text-sm text-stone-600">
                  <p className="flex gap-2"><Clock size={18} /> {experience.duration}</p>
                  <p className="flex gap-2"><Users size={18} /> {experience.level}</p>
                  <p className="flex gap-2"><MapPin size={18} /> Máximo {experience.places} participantes</p>
                </div>
                <button className="mt-6 w-full rounded-lg border border-emerald-700 px-4 py-2 font-semibold text-emerald-800 hover:bg-emerald-50">Ver disponibilidad</button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
