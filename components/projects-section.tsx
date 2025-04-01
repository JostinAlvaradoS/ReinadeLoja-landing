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
      description: "Como Reina de Loja, mi proyecto principal se enfoca en brindar apoyo integral a mujeres, niñas y adolescentes con discapacidad que residen en casas hogares, con el objetivo de transformar su día a día y mejorar su calidad de vida. Con pequeños gestos de cariño y dedicación, podemos transformar la vida de una niña sin hogar, ofreciéndole el amor y apoyo que le permita sentirse valiosa y llena de esperanza cada día.",
      features: [
        "Un entorno lleno de apoyo y cariño, donde cada una de ellas pueda sentirse acompañada y valorada.",
        "Garantizar que nunca más se sientan solas y que cada día esté lleno de momentos de alegría, dignidad y esperanza.",
        "Facilitar su rutina diaria, proporcionando las herramientas necesarias para hacer su vida más accesible y llevadera, mientras se fomenta su bienestar emocional y físico.",
        "La visión de 'Creciendo Contigo' es crear una red de apoyo que comience en el Hogar San Camilo de Lellis, con la meta de expandirnos y llegar a otras casas hogares de la ciudad, brindando el cuidado adecuado a todas las niñas y adolescentes que lo necesiten.",
        "Invitamos a fisioterapeutas, médicos, psicopedagogos o estudiantes en estas áreas, empresas que deseen contribuir con recursos esenciales y a todas las personas con el corazón dispuesto a apadrinar a una niña con amor y apoyo incondicional.",
      ],
      image: "proyectos/camila.webp",
      queenName: "Camila Muñoz Neira",
      shortName: "Camila",
      queenTitle: "Reina de Loja 2024",
      queenImage: "camila.webp"
    },
    {
      title: "Raíces de Amor",
      description:
        "Como Reina de la Fundación de Loja, he decidido dedicar mi proyecto social a quienes tanto nos han dado: nuestros adultos mayores. Detrás de cada mirada hay una enseñanza y detrás de cada sonrisa hay un recuerdo que merece ser compartido. Porque una sociedad que cuida a sus mayores, es una sociedad con memoria, con gratitud y con corazón.",
      features: [
        "Crear espacios donde nuestros abuelitos puedan sentirse acompañados, valorados y activos",
        "Talleres de arte, música y manualidades",
        "Ejercicios físicos adaptados para adultos mayores",
        "Actividades intergeneracionales para fortalecer vínculos",
        "Mantener viva la memoria de la ciudad a través de quienes la construyeron",
        "Invitamos a: psicólogos, fisioterapeutas, artistas, músicos, terapeutas ocupacionales y a todas las personas con el deseo de regalar su tiempo y cariño."
      ],
      image: "proyectos/Lola_proyecto.webp",
      queenName: "María Dolores Samaniego",
      shortName: "María",
      queenTitle: "Reina Fundación Loja 2024",
      queenImage: "lola-new.webp",
    },
    {
      title: "Tejiendo Ilusiones",
      description:
        "Como Reina Loja Federal, he elegido enfocar mi proyecto social en la transformación de nuestros espacios públicos. Mi objetivo es intervenir un barrio periférico, con la meta de crear juegos para los niños que viven en estas comunidades. Cada pequeño cambio en nuestros espacios, es una gran oportunidad para sembrar esperanza, creatividad y un futuro lleno de sonrisas para nuestros niños.",
      features: [
        "Crear un taller colaborativo para construir juegos",
        "Utilizar materiales accesibles y fáciles de gestionar",
        "Aplicar técnicas de tejido para crear estructuras funcionales",
        "Promover la creatividad y el trabajo en equipo",
        "Transformar espacios públicos en lugares de esperanza y alegría",
        "Invitamos a arquitectos, estudiantes de arquitectura, voluntarios en la gestión de materiales, personas con experiencia en técnicas de tejido y a todos aquellos con el deseo de aportar su tiempo, conocimiento y esfuerzo para transformar estos espacios."
      ],
      image: "proyectos/proyectoClau.webp",
      queenName: "Claudia Guachizaca Peralta",
      shortName: "Claudia",
      queenTitle: "Reina Federal Loja 2024",
      queenImage: "claudia2.webp",
    },
    {
      title: "Apadrinamiento Virtual de Perritos",
      description: "Como Reina del turismo, propongo este proyecto con el propósito de darles una segunda oportunidad a perritos en adopción que han sido rescatados de situaciones difíciles. Muchos de ellos pasan desapercibidos debido a la falta de visibilidad, y es ahí donde cada uno de nosotros puede marcar la diferencia. Porque el amor más puro tiene cuatro patas y una cola que nunca deja de moverse. Ellos nos dan su amor incondicionalmente, lo mínimo que podemos hacer es darles una vida digna y feliz.",
      features: [
        "Uso de códigos QR en redes sociales y distintos espacios de la ciudad para aumentar la visibilidad de los perritos en adopción.",
        "Acceso a una plataforma con la historia, personalidad y necesidades de cada perrito disponible para adopción.",
        "Apadrinamiento virtual sin responsabilidades económicas ni de cuidado directo, solo difusión en redes sociales.",
        "Posibilidad de contribuir con donaciones de alimentos, juguetes e insumos para mejorar la calidad de vida de los perritos mientras esperan un hogar.",
        "Colaboración con rescatistas, albergues, veterinarios y empresas comprometidas con el bienestar animal.",  
        "Invitamos a voluntarios, amantes de los animales, organizaciones que promuevan la adopción responsable y a todas las personas dispuestas a brindar su tiempo y apoyo para ayudar a que más perritos encuentren un hogar digno."
      ],
      image: "proyectos/Wendy_proyecto.webp",
      queenName: "Wendy Sarmiento Castillo",
      shortName: "Wendy",
      queenTitle: "Reina del Turismo Loja 2024",
      queenImage: "wendyFoto.webp"
    }
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

