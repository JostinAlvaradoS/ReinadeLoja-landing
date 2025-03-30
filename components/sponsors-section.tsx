"use client"

import Image from "next/image"
import { ScaleIn, FadeInStagger, FadeInStaggerItem } from "@/components/animations"

type Sponsor = {
  name: string
  logo: string
  url?: string
}

export function SponsorsSection() {
  const sponsors: Sponsor[] = [
    {
      name: "LUXE Studio",
      logo: "/sponsors/luxe-studio.png",
      url: "#",
    },
    {
      name: "Isabel López Joyería",
      logo: "/sponsors/isabel-lopez-joyeria.png",
      url: "#",
    },
    {
      name: "Nievecitas",
      logo: "/sponsors/nievecitas.jpeg",
      url: "#",
    },
    {
      name: "Angelica Arevalo",
      logo: "/sponsors/angArevalo.jpg",
      url: "#",
    },
    {
      name: "Banco de Loja",
      logo: "/sponsors/bcoLoja.jpg",
      url: "#",
    },
    {
      name: "Nievecitas",
      logo: "/sponsors/coop.jpg",
      url: "#",
    },
    {
      name: "Velocity",
      logo: "/sponsors/velocity.webp",
      url: "#",
    },
    {
      name: "Macon",
      logo: "/sponsors/macon.png",
      url: "#",
    },
    {
      name: "Dali",
      logo: "/sponsors/Dali.png",
      url: "#",
    },
  ]

  return (
    <section className="py-16 bg-white border-t border-[#D8B4A0]/20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <ScaleIn>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-[#9D8189] mb-6">
            Auspiciantes Oficiales
          </h2>
          <p className="text-center text-[#9D8189] max-w-2xl mx-auto mb-12 text-base">
            Agradecemos a nuestros auspiciantes oficiales por su valioso apoyo al Reinado de Loja 2024.
          </p>
        </ScaleIn>

        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            {sponsors.map((sponsor, index) => (
              <FadeInStaggerItem key={index}>
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="h-24 w-48 relative flex items-center justify-center">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                </a>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  )
}

