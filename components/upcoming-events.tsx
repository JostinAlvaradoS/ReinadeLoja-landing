"use client"

import { CalendarDays, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScaleIn } from "@/components/animations"

type Event = {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
}

export function UpcomingEvents() {
  const events: Event[] = [
    {
      id: "event-1",
      title: 'Colocación de Placa Conmemorativa "Matilde Hidalgo de Procel"',
      date: "Próximamente",
      time: "Por definir",
      location: "Calles Bernardo Valdivieso y Lourdes(esquina), Loja",
      description:
        "En homenaje a su legado, se colocará una placa en el lugar donde estuvo la casa de Matilde Hidalgo de Procel.",
    },
    {
      id: "event-2",
      title: "Evento de Adopción de Perritos y Noche Cultural",
      date: "Próximamente",
      time: "Por definir",
      location: "Forest Experience, Eduardo Kingman, Loja",
      description:
        "Una oportunidad única para darles un hogar a los peluditos y disfrutar una noche llena de música, danza, emprendimiento local y mucho más.",
    },
  ]

  // Determinar las clases de grid según la cantidad de eventos
  const getGridClasses = () => {
    switch (events.length) {
      case 0:
        return "hidden"
      case 1:
        return "flex justify-center" // Centrar un solo evento
      case 2:
        return "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" // Dos eventos centrados
      case 3:
        return "grid md:grid-cols-3 gap-8" // Tres eventos en fila
      default:
        return "grid md:grid-cols-2 lg:grid-cols-3 gap-8" // Más de tres eventos en grid
    }
  }

  // Determinar el ancho máximo del contenedor según la cantidad de eventos
  const getContainerMaxWidth = () => {
    switch (events.length) {
      case 1:
        return "max-w-lg" // Ancho máximo para un evento
      case 2:
        return "max-w-4xl" // Ancho máximo para dos eventos
      default:
        return "max-w-6xl" // Ancho máximo para tres o más eventos
    }
  }

  return (
    <div className={`space-y-8 ${getContainerMaxWidth()} mx-auto`}>
      <ScaleIn>
        {events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#9D8189] text-lg">No hay eventos programados en este momento.</p>
            <p className="text-[#9D8189] mt-2">¡Vuelve pronto para conocer nuestras próximas actividades!</p>
          </div>
        ) : (
          <div className={getGridClasses()}>
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-[#D8B4A0]/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full max-w-md mx-auto"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#9D8189] mb-3">{event.title}</h3>
                  </div>
                  <p className="text-[#9D8189] mb-6 text-base leading-relaxed">{event.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-[#9D8189]">
                      <CalendarDays className="w-5 h-5 mr-3 text-[#D8B4A0]" />
                      <span className="text-base">{event.date}</span>
                    </div>
                    <div className="flex items-center text-[#9D8189]">
                      <Clock className="w-5 h-5 mr-3 text-[#D8B4A0]" />
                      <span className="text-base">{event.time}</span>
                    </div>
                    <div className="flex items-center text-[#9D8189]">
                      <MapPin className="w-5 h-5 mr-3 text-[#D8B4A0]" />
                      <span className="text-base">{event.location}</span>
                    </div>
                  </div>
                  {/* <Button
                    variant="outline"
                    className="w-full border-[#D8B4A0] text-[#9D8189] hover:bg-[#D8B4A0]/10 py-5 text-base"
                    asChild
                  >
                    <Link href="#contacto">Más información</Link>
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </ScaleIn>
    </div>
  )
}

