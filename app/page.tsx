"use client"

import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
import { Gallery } from "@/components/gallery"
import { ProjectsSection } from "@/components/projects-section"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { TestimonialSection } from "@/components/testimonial-section"
import { CoronationSection } from "@/components/coronation-section"
import { UpcomingEvents } from "@/components/upcoming-events"
import { RoyalCourt } from "@/components/royal-court"
import { FadeInStagger, FadeInStaggerItem, ScaleIn, AnimateOnScroll } from "@/components/animations"
import { Header } from "@/components/header"
import { useEffect, useState } from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { SponsorsSection } from "@/components/sponsors-section"

export default function Home() {
  const { scrollY } = useScroll()
  const [isMounted, setIsMounted] = useState(false)

  // Valores de transformación para la animación de desaparición
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroY = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    // Inicializar comportamiento de desplazamiento suave
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#FDF6F0] overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section - 100vh with full image background */}
      <section id="inicio" className="h-screen relative flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/coronacion-cuatro-reinas.jpeg"
            alt="Reinas de Loja 2024"
            fill
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>

        {isMounted && (
          <motion.div
            className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 pb-20 md:pb-24 w-full"
            style={{ opacity: heroOpacity, y: heroY }}
          >
            <div className="text-center">
              <FadeInStagger>
                <FadeInStaggerItem>
                  <h2 className="font-serif text-white text-xl md:text-2xl mb-3">Reinas de Loja 2024 - 2025</h2>
                </FadeInStaggerItem>
                <FadeInStaggerItem>
                  <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                    Belleza, Cultura y Tradición
                  </h1>
                </FadeInStaggerItem>
                <FadeInStaggerItem>
                  <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg md:text-xl">
                    Representantes de la Ciudad de Loja, mujeres comprometidas, dedicadas a impulsar el bienestar y el
                    desarrollo social, puestas al servicio de su comunidad.
                  </p>
                </FadeInStaggerItem>
                <FadeInStaggerItem>
                  <Button className="bg-[#D8B4A0] hover:bg-[#9D8189] text-white text-lg py-6 px-8 rounded-xl" asChild>
                    <Link href="#corte">Conoce el Reinado</Link>
                  </Button>
                </FadeInStaggerItem>
              </FadeInStagger>
            </div>

            <motion.div
              className="flex justify-center mt-12 absolute bottom-12 left-0 right-0"
              style={{ opacity: heroOpacity }}
            >
              <Link href="#corte" className="animate-bounce">
                <ChevronDown className="h-10 w-10 text-white" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Royal Court Section */}
      <AnimateOnScroll>
        <section id="corte" className="py-20 md:py-28 lg:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <RoyalCourt />
          </div>
        </section>
      </AnimateOnScroll>

      {/* Gallery Section */}
      <AnimateOnScroll>
        <section id="galeria" className="py-20 md:py-28 lg:py-32 bg-[#FDF6F0] overflow-hidden">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <ScaleIn>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#9D8189] mb-16">
                Galería de Momentos
              </h2>
            </ScaleIn>
            <Gallery />
          </div>
        </section>
      </AnimateOnScroll>

      {/* Coronation Section */}
      <section className="py-16 md:py-20 bg-[#FDF6F0] overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <CoronationSection />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <AnimateOnScroll direction="right">
        <section id="eventos" className="py-20 md:py-28 lg:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <ScaleIn>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#9D8189] mb-6">
                Próximos Eventos
              </h2>
              <p className="text-center text-[#9D8189] max-w-3xl mx-auto mb-16 text-lg md:text-xl">
                Acompáñanos en nuestras actividades y eventos para apoyar a los niños de las casas hogares de Loja. Tu
                presencia hace la diferencia.
              </p>
            </ScaleIn>
            <UpcomingEvents />
          </div>
        </section>
      </AnimateOnScroll>

      {/* Projects Section - Alineado con el padding de Coronación */}
      <AnimateOnScroll>
        <section id="proyectos" className="py-20 md:py-28 lg:py-32 bg-[#FDF6F0] overflow-hidden">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <ScaleIn>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#9D8189] mb-6">
                Proyectos Sociales
              </h2>
              <p className="text-center text-[#9D8189] max-w-3xl mx-auto mb-16 text-lg md:text-xl">
                Conoce los proyectos sociales liderados por cada una de nuestras representantes, enfocados en mejorar la
                calidad de vida de los grupos prioritarios de nuestra ciudad.
              </p>
            </ScaleIn>
            <ProjectsSection />
          </div>
        </section>
      </AnimateOnScroll>

      {/* Testimonial Section */}
      <AnimateOnScroll direction="left">
        <section className="py-20 md:py-28 lg:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <TestimonialSection />
          </div>
        </section>
      </AnimateOnScroll>

      {/* Contact Section */}
      <AnimateOnScroll direction="right">
        <section id="contacto" className="py-20 md:py-28 lg:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <ScaleIn>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#9D8189] mb-6">
                Sé parte del cambio
              </h2>
              <p className="text-center text-[#9D8189] max-w-3xl mx-auto mb-16 text-lg md:text-xl">
                Si deseas contribuir a nuestros proyectos sociales, completa el siguiente formulario y nos pondremos en
                contacto contigo.
              </p>
            </ScaleIn>
            <div className="max-w-xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Footer */}
      <footer className="bg-[#9D8189] text-white py-12 overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
              <Image
                src="/logo-reina-loja.png"
                alt="Reina de Loja"
                width={180}
                height={70}
                className="h-20 w-auto bg-white/90 p-2 rounded"
              />
              <div className="h-8 w-px bg-white/30 hidden md:block"></div>
              <span className="font-serif text-2xl">Reinado de Loja 2024</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#D8B4A0] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-base">
            <p>© 2025 Reina de Loja. Todos los derechos reservados.</p>
          </div>
          <p className="mt-4 text-sm text-white/70 text-center">
            Sitio web desarrollado por{" "}
            <a
              href="https://jostinalvaradoportafolio.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D8B4A0] transition-colors underline decoration-dotted"
            >
              Jostin Alvarado
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

