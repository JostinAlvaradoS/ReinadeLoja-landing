"use client"

import Image from "next/image"
import { SlideInLeft, SlideInRight, ScaleIn } from "@/components/animations"

export function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <ScaleIn>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#9D8189] mb-16">
            Impacto en la Comunidad
          </h2>
        </ScaleIn>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <div className="order-2 md:order-1">
            <SlideInLeft>
              <div className="bg-[#FDF6F0] p-8 rounded-xl shadow-md">
                <p className="text-[#9D8189] italic mb-6 text-lg leading-relaxed">
                  "El trabajo que realiza Camila con los niños de las casas hogares ha sido transformador. Su dedicación
                  y compromiso han traído esperanza a muchos pequeños que necesitan apoyo y cariño."
                </p>
                <div className="flex items-center">
                  <div className="mr-5">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Directora Casa Hogar"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#9D8189] text-lg">María Sánchez</h4>
                    <p className="text-[#9D8189]/70">Directora Casa Hogar "Esperanza"</p>
                  </div>
                </div>
              </div>
            </SlideInLeft>
          </div>
          <div className="order-1 md:order-2">
            <SlideInRight>
              <div className="relative">
                <div className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-[#D8B4A0]/30 to-[#9D8189]/30 blur-lg"></div>
                <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-25%20at%2018.44.12_3d01ac31.jpg-p6vnixIWxXQMpvY9GGlNtDIjKa8Jeo.jpeg"
                    alt="Camila en visita comunitaria"
                    width={600}
                    height={400}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SlideInLeft>
              <div className="relative">
                <div className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-[#D8B4A0]/30 to-[#9D8189]/30 blur-lg"></div>
                <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-25%20at%2018.42.04_e2059dd1.jpg-0mP0EtmKhZrEcgsOnOejg87qZvFBEB.jpeg"
                    alt="Camila con niños de la comunidad"
                    width={600}
                    height={400}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </SlideInLeft>
          </div>
          <div>
            <SlideInRight>
              <div className="bg-[#FDF6F0] p-8 rounded-xl shadow-md">
                <p className="text-[#9D8189] italic mb-6 text-lg leading-relaxed">
                  "El programa de apadrinamiento impulsado por nuestra Reina de Loja ha permitido que muchos niños
                  reciban educación, atención médica y el cariño que tanto necesitan. Es un orgullo para nuestra ciudad
                  contar con una representante tan comprometida con las causas sociales."
                </p>
                <div className="flex items-center">
                  <div className="mr-5">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Alcalde de Loja"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#9D8189] text-lg">Carlos Rodríguez</h4>
                    <p className="text-[#9D8189]/70">Autoridad Municipal</p>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </section>
  )
}

