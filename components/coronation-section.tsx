"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SlideInLeft, SlideInRight } from "@/components/animations"

export function CoronationSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-[#9D8189] mb-10">Coronación</h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <SlideInLeft>
          <div className="relative">
            <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-[#D8B4A0]/30 to-[#9D8189]/30 blur-lg"></div>
            <div className="relative overflow-hidden rounded-lg border-4 border-white shadow-lg">
              <Image
                src="/coronacion.webp"
                alt="Coronación del Reinado de Loja 2024"
                width={600}
                height={400}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </SlideInLeft>
        <SlideInRight>
          <h3 className="font-serif text-2xl font-bold text-[#9D8189] mb-4">Un Compromiso con Loja</h3>
          <p className="text-[#9D8189] mb-4">
            El 24 de octubre de 2024, en una emotiva ceremonia celebrada en el Teatro Bolívar, se llevó a cabo la
            coronación de la nueva Reina de Loja y su corte de honor. Camila Muñoz Neira fue proclamada Reina de Loja,
            acompañada por María Dolores Samaniego como Reina de la Fundación, Claudia Guachizaca Peralta como Reina
            Loja Federal y Wendy Sarmiento como Reina de Turismo.
          </p>
          <p className="text-[#9D8189] mb-6">
            Las cuatro representantes, elegidas por el Comité Cívico Empresarial de Loja, asumieron con orgullo,
            responsabilidad y dedicación su rol, comprometidas a trabajar en equipo con entrega y firme convicción por
            el bienestar de la comunidad, enfocadas en generar cambios positivos y en promover el progreso y la unidad
            de la ciudad de Loja.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#D8B4A0] hover:bg-[#9D8189] text-white" asChild>
              <Link href="#galeria">Ver más fotos</Link>
            </Button>
            <Button variant="outline" className="border-[#D8B4A0] text-[#9D8189] hover:bg-[#D8B4A0]/10" asChild>
              <Link href="#proyectos">Conocer los proyectos</Link>
            </Button>
          </div>
        </SlideInRight>
      </div>
    </div>
  )
}

