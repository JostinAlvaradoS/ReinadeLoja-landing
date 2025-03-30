"use client"

import Image from "next/image"
import { Instagram, Linkedin, Globe, Mail, MapPin, Phone, Clock } from "lucide-react"

type QueenSocial = {
  name: string
  title: string
  instagram: string
}

export function Footer() {
  const queens: QueenSocial[] = [
    {
      name: "Camila Muñoz Neira",
      title: "Reina de Loja",
      instagram: "https://www.instagram.com/cameliizzz",
    },
    {
      name: "María Dolores Samaniego",
      title: "Reina de la Fundación",
      instagram: "https://www.instagram.com/lolasamaniegoo",
    },
    {
      name: "Claudia Guachizaca",
      title: "Reina Federal",
      instagram: "https://www.instagram.com/clau_gperalta",
    },
    {
      name: "Wendy Sarmiento",
      title: "Reina del Turismo",
      instagram: "https://www.instagram.com/alexa1.rs",
    },
  ]

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Reinado", href: "#corte" },
    { name: "Galería", href: "#galeria" },
    { name: "Eventos", href: "#eventos" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ]

  // Información del desarrollador
  const developer = {
    name: "Jostin Alvarado",
    portfolio: "https://jostinalvaradoportafolio.web.app/",
    instagram: "https://www.instagram.com/jostin.alvarados",
    linkedin: "https://www.linkedin.com/in/jostinalvarado",
  }

  // Información de contacto
  const contactInfo = {
    email: "contacto@reinadeloja.com",
    phone: "+593 99 123 4567",
    address: "Municipio de Loja, Calle Bolívar y José Antonio Eguiguren",
    hours: "Lunes a Viernes: 9:00 - 17:00",
    website: "www.reinadeloja.com",
  }

  return (
    <footer className="bg-[#B095A0] text-white py-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <Image
                src="/logoReinado.png"
                alt="Reina de Loja"
                width={150}
                height={60}
                className="bg-white/80 h-16 w-auto p-2 rounded"
              />
            </div>
            <p className="text-white/80 text-sm mt-4">
              Reinado de Loja 2024-2025, comprometido con el desarrollo social y cultural de nuestra ciudad.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://www.instagram.com/reinadodeloja"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram del Reinado de Loja"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-bold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-white hover:underline transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto - NUEVA COLUMNA */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg font-bold mb-4 text-white">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">{contactInfo.website}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-white/80 hover:text-white text-sm">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales de las reinas */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-bold mb-4 text-white">Encuéntranos en Instagram</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {queens.map((queen, index) => (
                <a
                  key={index}
                  href={queen.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                  aria-label={`Instagram de ${queen.name}`}
                >
                  <Instagram className="h-5 w-5 text-white/90" />
                  <div>
                    <p className="text-white font-medium text-sm">{queen.name}</p>
                    <p className="text-white/70 text-xs">{queen.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 my-6"></div>

        {/* Copyright y créditos */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
          <p>© 2025 Reina de Loja. Todos los derechos reservados.</p>

          {/* Información del desarrollador con iconos */}
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row items-center gap-3">
            <p>Sitio web desarrollado por {developer.name}</p>
            <div className="flex items-center gap-2">
              <a
                href={developer.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label="Portafolio del desarrollador"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href={developer.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label="Instagram del desarrollador"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label="LinkedIn del desarrollador"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

