"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SlideInLeft, SlideInRight } from "@/components/animations"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Project = {
  title: string
  description: string
  features: string[]
  image: string
  queenName: string
  queenTitle: string
  queenImage: string
  shortName: string
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Creciendo Contigo",
      description:
        "Como Reina de Loja, mi proyecto principal se enfoca en brindar apoyo integral a mujeres, niñas y adolescentes con discapacidad que residen en casas hogares, con el objetivo de transformar su día a día y mejorar su calidad de vida.",
      features: [
        "Entorno de apoyo y cariño donde cada una pueda sentirse acompañada y valorada",
        "Garantizar que nunca más se sientan solas y que cada día esté lleno de momentos de alegría",
        "Facilitar su rutina diaria con herramientas necesarias para una vida más accesible",
        "Fomentar su bienestar emocional y físico",
        "Crear una red de apoyo comenzando en el Hogar San Camilo de Lellis",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-25%20at%2018.42.03_c85020ae.jpg-xM3fMzlXFazQgy83N1a7Z8WwzjOq5m.jpeg",
      queenName: "Camila Muñoz Neira",
      shortName: "Camila",
      queenTitle: "Reina de Loja 2024",
      queenImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/camila.jpg-cAZMPIotFwRrb8eo5RjNp0pksqttvo.jpeg",
    },
    {
      title: "Raíces de Amor",
      description:
        "Como Reina de la Fundación de Loja, he decidido dedicar mi proyecto social a quienes tanto nos han dado: nuestros adultos mayores. Detrás de cada mirada hay una enseñanza y detrás de cada sonrisa hay un recuerdo que merece ser compartido.",
      features: [
        "Crear espacios donde nuestros abuelitos puedan sentirse acompañados, valorados y activos",
        "Talleres de arte, música y manualidades",
        "Ejercicios físicos adaptados para adultos mayores",
        "Actividades intergeneracionales para fortalecer vínculos",
        "Mantener viva la memoria de la ciudad a través de quienes la construyeron",
      ],
      image: "/proyectos/Lola_proyecto.webp",
      queenName: "María Dolores Samaniego",
      shortName: "María",
      queenTitle: "Reina Fundación Loja 2024",
      queenImage: "/lola-new.jpg",
    },
    {
      title: "Tejiendo Ilusiones",
      description:
        "Como Reina Loja Federal, he elegido enfocar mi proyecto social en la transformación de nuestros espacios públicos. Mi objetivo es intervenir un barrio periférico, con la meta de crear juegos para los niños que viven en estas comunidades.",
      features: [
        "Crear un taller colaborativo para construir juegos",
        "Utilizar materiales accesibles y fáciles de gestionar",
        "Aplicar técnicas de tejido para crear estructuras funcionales",
        "Promover la creatividad y el trabajo en equipo",
        "Transformar espacios públicos en lugares de esperanza y alegría",
      ],
      image: "/proyectos/proyectoClau.webp",
      queenName: "Claudia Guachizaca Peralta",
      shortName: "Claudia",
      queenTitle: "Reina Federal Loja 2024",
      queenImage: "/claudia2.jpg",
    },
    {
      title: "Patitas de Amor",
      description:
        "Como Reina de Turismo, he decidido orientar mi proyecto social a aquellos que nos brindan amor incondicional: nuestros amigos peludos. No hay nada más puro que la felicidad de un perrito al recibir cariño.",
      features: [
        "Crear conciencia sobre la responsabilidad de tener un perro",
        "Promover la adopción responsable de mascotas",
        "Interactuar con perritos de diversas fundaciones",
        "Brindar cariño y ayuda a los animales que más lo necesitan",
        "Encontrar hogares llenos de amor para perritos abandonados",
      ],
      image: "/proyectos/Wendy_proyecto.webp",
      queenName: "Wendy Alexandra Sarmiento",
      shortName: "Wendy",
      queenTitle: "Reina del Turismo Loja 2024",
      queenImage: "/wendyFoto.webp",
    },
  ]

  return (
    <Tabs defaultValue="camila" className="w-full">
      <TabsList className="grid grid-cols-4 mb-12 bg-[#FDF6F0] w-full max-w-full rounded-xl overflow-hidden">
        {projects.map((project, index) => (
          <TabsTrigger
            key={index}
            value={index === 0 ? "camila" : index === 1 ? "lola" : index === 2 ? "claudia" : "wendy"}
            className="py-3 text-base data-[state=active]:text-[#D8B4A0] data-[state=active]:underline data-[state=active]:bg-[#FDF6F0] data-[state=active]:shadow-none"
          >
            <span className="block md:hidden">{project.shortName}</span>
            <span className="hidden md:block">
              {project.queenName.split(" ")[0]} {project.queenName.split(" ")[1]}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>

      {projects.map((project, index) => (
        <TabsContent
          key={index}
          value={index === 0 ? "camila" : index === 1 ? "lola" : index === 2 ? "claudia" : "wendy"}
        >
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className={`order-2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
              {index % 2 === 0 ? (
                <SlideInLeft>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src={project.queenImage || "/placeholder.svg"}
                        alt={project.queenName}
                        width={80}
                        height={80}
                        quality={90}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#D8B4A0]">{project.queenName}</h3>
                      <p className="text-[#9D8189] text-base">{project.queenTitle}</p>
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#9D8189] mb-6">{project.title}</h3>
                  <p className="text-[#9D8189] text-lg mb-6 leading-relaxed">{project.description}</p>
                  <p className="text-[#9D8189] text-lg mb-4 font-medium">
                    A través de este proyecto, buscamos proporcionar:
                  </p>
                  <ul className="list-disc list-inside text-[#9D8189] mb-8 space-y-3 text-lg pl-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="leading-relaxed">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#9D8189] text-lg mb-8 leading-relaxed">
                    Tu aporte puede transformar vidas y brindar nuevas oportunidades. Cada contribución es un paso hacia
                    un futuro mejor.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <Button className="bg-[#D8B4A0] hover:bg-[#9D8189] text-white text-base py-6 px-8" asChild>
                      <Link href="#contacto">Quiero apoyar</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#D8B4A0] text-[#9D8189] hover:bg-[#D8B4A0]/10 text-base py-6 px-8"
                      asChild
                    >
                      <Link href="#contacto">Más información</Link>
                    </Button>
                  </div>
                </SlideInLeft>
              ) : (
                <SlideInRight>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src={project.queenImage || "/placeholder.svg"}
                        alt={project.queenName}
                        width={80}
                        height={80}
                        quality={90}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#D8B4A0]">{project.queenName}</h3>
                      <p className="text-[#9D8189] text-base">{project.queenTitle}</p>
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#9D8189] mb-6">{project.title}</h3>
                  <p className="text-[#9D8189] text-lg mb-6 leading-relaxed">{project.description}</p>
                  <p className="text-[#9D8189] text-lg mb-4 font-medium">
                    A través de este proyecto, buscamos proporcionar:
                  </p>
                  <ul className="list-disc list-inside text-[#9D8189] mb-8 space-y-3 text-lg pl-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="leading-relaxed">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#9D8189] text-lg mb-8 leading-relaxed">
                    Tu aporte puede transformar vidas y brindar nuevas oportunidades. Cada contribución es un paso hacia
                    un futuro mejor.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <Button className="bg-[#D8B4A0] hover:bg-[#9D8189] text-white text-base py-6 px-8" asChild>
                      <Link href="#contacto">Quiero apoyar</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#D8B4A0] text-[#9D8189] hover:bg-[#D8B4A0]/10 text-base py-6 px-8"
                      asChild
                    >
                      <Link href="#contacto">Más información</Link>
                    </Button>
                  </div>
                </SlideInRight>
              )}
            </div>
            <div className={`order-1 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
              {index % 2 === 0 ? (
                <SlideInRight>
                  <div className="relative">
                    <div className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-[#D8B4A0]/30 to-[#9D8189]/30 blur-lg"></div>
                    <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </div>
                  </div>
                </SlideInRight>
              ) : (
                <SlideInLeft>
                  <div className="relative">
                    <div className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-[#D8B4A0]/30 to-[#9D8189]/30 blur-lg"></div>
                    <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </div>
                  </div>
                </SlideInLeft>
              )}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

