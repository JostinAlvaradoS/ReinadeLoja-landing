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
                "Camila, no solamente es una reina de belleza, su carisma y sensibilidad son increíbles, cuando de ayudar y atender se trata. Con las personas cuidadoras a familiares con discapacidad han constituido un fuerte grupo de apoyo y cariño, fortaleciendo el autoestima de los cuidadores.
                  Su trabajo es encomiable en la ayuda social.
                  Si así es su reinado con tanto trabajo, que siga reinando muchos años más."
                </p>
                <div className="flex items-center">
                  <div className="mr-5">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/testimonios/autorCamila.webp"
                        alt="Dra. Mercedes León O."
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#9D8189] text-lg">Dra. Mercedes León O.</h4>
                    <p className="text-[#9D8189]/70">Mujer rotaria, Madre Símbolo y Mujer del año 2023</p>
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
                    src="/testimonios/camilaTestimonio.webp"
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
                    src="/testimonios/lolaTestimonio.webp"
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
                  "El trabajo social que realiza María Dolores deja una huella indeleble en las mentes y corazones de los niños, 
                  así como en todos los habitantes de Loja."
                </p>
                <div className="flex items-center">
                  <div className="mr-5">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/testimonios/autorLola.webp"
                        alt="Fernando Pitizaca"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#9D8189] text-lg">Fernando Pitizaca</h4>
                    <p className="text-[#9D8189]/70">Director de cultura del Municipio de Loja</p>
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

