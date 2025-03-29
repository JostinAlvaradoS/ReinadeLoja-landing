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
      title: "Inauguración Casa Hogar 'Esperanza'",
      date: "15 de Abril, 2024",
      time: "10:00 AM",
      location: "Av. Universitaria y Calle Lourdes, Loja",
      description:
        "Ceremonia de inauguración de la nueva Casa Hogar 'Esperanza', un espacio renovado para niños en situación de vulnerabilidad.",
    },
    {
      id: "event-2",
      title: "Gala Benéfica 'Corazones Unidos'",
      date: "28 de Abril, 2024",
      time: "19:00 PM",
      location: "Hotel Howard Johnson, Salón Real, Loja",
      description:
        "Cena de gala para recaudar fondos destinados al programa de apadrinamiento de niños de casas hogares.",
    },
    {
      id: "event-3",
      title: "Jornada Médica Gratuita",
      date: "5 de Mayo, 2024",
      time: "09:00 AM - 16:00 PM",
      location: "Parque Central de Loja",
      description:
        "Atención médica gratuita para niños y familias de escasos recursos, en colaboración con médicos voluntarios de la ciudad.",
    },
  ]

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <ScaleIn>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-[#D8B4A0]/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold text-[#9D8189] mb-3">{event.title}</h3>
                  <div className="bg-[#D8B4A0]/10 text-[#9D8189] px-4 py-1 rounded-full text-sm font-medium">
                    Próximo
                  </div>
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
                <Button
                  variant="outline"
                  className="w-full border-[#D8B4A0] text-[#9D8189] hover:bg-[#D8B4A0]/10 py-5 text-base"
                  asChild
                >
                  <Link href="#contacto">Más información</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScaleIn>
    </div>
  )
}

