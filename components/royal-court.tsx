"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScaleIn, FadeInStaggerItem, FadeInStagger } from "@/components/animations"

type RoyalMember = {
  name: string
  title: string
  image: string
  description: string
  project: string
  isMain?: boolean
  isSecondary?: boolean
  isTertiary?: boolean
}

export function RoyalCourt() {
  const royalMembers: RoyalMember[] = [
    {
      name: "María Dolores Samaniego",
      title: "Reina de la Fundación de Loja 2024",
      image: "/lola-new.jpg",
      description:
        "Su vocación se impulsa por el compromiso social, generando cambios y promoviendo una sociedad más empática y consciente.",
      project: "Raíces de Amor",
      isSecondary: true,
    },
    {
      name: "Camila Muñoz Neira",
      title: "Reina de Loja 2024",
      image: "camila.webp",
      description:
        "Su liderazgo se basa en un firme compromiso con el bienestar de la comunidad, buscando siempre inspirar a otros mediante el servicio.",
      project: "Creciendo Contigo",
      isMain: true,
    },
    {
      name: "Claudia Guachizaca Peralta",
      title: "Reina Loja Federal 2024",
      image: "/claudia-new.jpg",
      description:
        "Su visión se enfoca en la unidad y solidaridad, promoviendo la colaboración entre los sectores de la sociedad.",
      project: "Tejiendo Ilusiones",
      isSecondary: true,
    },
    {
      name: "Wendy Alexandra Sarmiento",
      title: "Reina del Turismo Loja 2024",
      image: "/wendyFoto.webp",
      description:
        "Su propósito se centra en el valor de la empatía y la acción colectiva, fomentando el turismo y el desarrollo local.",
      project: "Patitas de Amor",
      isTertiary: true,
    },
  ]

  // Separar las reinas por jerarquía
  const mainQueen = royalMembers.find((member) => member.isMain)
  const secondaryQueens = royalMembers.filter((member) => member.isSecondary)
  const tertiaryQueen = royalMembers.find((member) => member.isTertiary)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScaleIn>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#9D8189] mb-6">
            Reina de Loja y su Corte de Honor
          </h2>
          <p className="text-center text-[#9D8189] max-w-2xl mx-auto mb-12 text-lg">
            Conoce a las distinguidas representantes que conforman el Reinado de Loja 2024, embajadoras de nuestra
            cultura y belleza.
          </p>
        </ScaleIn>

        <div className="w-[95%] mx-auto">
          <FadeInStagger>
            {/* Estructura de rombo */}
            <div className="relative">
              {/* Reina principal (arriba) */}
              {mainQueen && (
                <div className="flex justify-center mb-16">
                  <FadeInStaggerItem className="flex flex-col items-center">
                    <div className="relative mb-6 z-10">
                      <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#D8B4A0] to-[#9D8189] opacity-20 blur-xl"></div>
                      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#D8B4A0]/30 to-[#9D8189]/30 blur-lg"></div>
                      <div className="relative overflow-hidden rounded-full border-4 border-white shadow-xl">
                        <Image
                          src={mainQueen.image || "/placeholder.svg"}
                          alt={mainQueen.name}
                          width={240}
                          height={240}
                          quality={90}
                          sizes="(max-width: 768px) 224px, 256px"
                          className="w-56 h-56 md:w-64 md:h-64 object-cover object-top"
                        />
                      </div>
                    </div>
                    <div className="text-center max-w-md">
                      <h3 className="font-serif text-2xl font-bold text-[#D8B4A0]">{mainQueen.name}</h3>
                      <p className="text-[#9D8189] font-medium mb-3">{mainQueen.title}</p>
                      <div className="w-24 h-1 bg-[#D8B4A0] mx-auto mb-4"></div>
                      <p className="text-[#9D8189] mb-6 text-lg">{mainQueen.description}</p>
                      <Button className="bg-[#D8B4A0] hover:bg-[#9D8189] text-white py-5 px-6 text-base" asChild>
                        <Link href="#proyectos">Conoce su Proyecto</Link>
                      </Button>
                    </div>
                  </FadeInStaggerItem>
                </div>
              )}

              {/* Reinas secundarias (centro) */}
              {secondaryQueens.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start mb-16">
                  {secondaryQueens.map((member, index) => (
                    <FadeInStaggerItem key={index} className="flex flex-col items-center">
                      <div className="relative mb-5">
                        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#D8B4A0]/30 to-[#9D8189]/30 blur-lg"></div>
                        <div className="relative overflow-hidden rounded-full border-4 border-white shadow-md">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={200}
                            height={200}
                            quality={90}
                            sizes="(max-width: 768px) 176px, 192px"
                            className="w-44 h-44 md:w-48 md:h-48 object-cover object-top"
                          />
                        </div>
                      </div>
                      <div className="text-center max-w-xs">
                        <h3 className="font-serif text-xl font-bold text-[#D8B4A0]">{member.name}</h3>
                        <p className="text-[#9D8189] font-medium mb-3">{member.title}</p>
                        <div className="w-16 h-0.5 bg-[#D8B4A0] mx-auto mb-4"></div>
                        <p className="text-[#9D8189] mb-6 text-base">{member.description}</p>
                        <Button
                          variant="outline"
                          className="border-[#D8B4A0] text-[#9D8189] hover:bg-[#D8B4A0]/10"
                          asChild
                        >
                          <Link href="#proyectos">Ver proyecto</Link>
                        </Button>
                      </div>
                    </FadeInStaggerItem>
                  ))}
                </div>
              )}

              {/* Reina terciaria (abajo) */}
              {tertiaryQueen && (
                <div className="flex justify-center">
                  <FadeInStaggerItem className="flex flex-col items-center max-w-sm">
                    <div className="relative mb-5">
                      <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#D8B4A0]/30 to-[#9D8189]/30 blur-lg"></div>
                      <div className="relative overflow-hidden rounded-full border-4 border-white shadow-md">
                        <Image
                          src={tertiaryQueen.image || "/placeholder.svg"}
                          alt={tertiaryQueen.name}
                          width={200}
                          height={200}
                          quality={90}
                          sizes="(max-width: 768px) 176px, 192px"
                          className="w-44 h-44 md:w-48 md:h-48 object-cover object-top"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-serif text-xl font-bold text-[#D8B4A0]">{tertiaryQueen.name}</h3>
                      <p className="text-[#9D8189] font-medium mb-3">{tertiaryQueen.title}</p>
                      <div className="w-16 h-0.5 bg-[#D8B4A0] mx-auto mb-4"></div>
                      <p className="text-[#9D8189] mb-6 text-base">{tertiaryQueen.description}</p>
                      <Button
                        variant="outline"
                        className="border-[#D8B4A0] text-[#9D8189] hover:bg-[#D8B4A0]/10"
                        asChild
                      >
                        <Link href="#proyectos">Ver proyecto</Link>
                      </Button>
                    </div>
                  </FadeInStaggerItem>
                </div>
              )}

              {/* Líneas conectoras del rombo (solo visible en desktop) */}
              <div className="hidden md:block">
                {/* Línea vertical superior */}
                <div className="absolute top-[calc(64px+2rem)] left-1/2 w-px h-16 bg-[#D8B4A0]/20 -translate-x-1/2"></div>

                {/* Líneas diagonales hacia las reinas secundarias */}
                <div className="absolute top-[calc(64px+2rem)] left-1/2 w-[30%] h-px bg-[#D8B4A0]/20 -translate-x-full rotate-[30deg] origin-right"></div>
                <div className="absolute top-[calc(64px+2rem)] left-1/2 w-[30%] h-px bg-[#D8B4A0]/20 rotate-[-30deg] origin-left"></div>

                {/* Líneas diagonales desde las reinas secundarias hacia la terciaria */}
                <div className="absolute bottom-[calc(48px+10rem)] left-[calc(25%+24px)] w-[20%] h-px bg-[#D8B4A0]/20 rotate-[30deg] origin-left"></div>
                <div className="absolute bottom-[calc(48px+10rem)] right-[calc(25%+24px)] w-[20%] h-px bg-[#D8B4A0]/20 rotate-[-30deg] origin-right"></div>
              </div>
            </div>
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}

