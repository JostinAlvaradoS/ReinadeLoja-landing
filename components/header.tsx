"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    // Pequeño retraso para permitir que el menú móvil se cierre antes de desplazarse
    setTimeout(() => {
      const targetElement = document.querySelector(href)
      if (targetElement) {
        const headerOffset = 80 // Ajustar según la altura del header
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#corte", label: "Reinado" },
    { href: "#galeria", label: "Galería" },
    { href: "#eventos", label: "Eventos" },
    { href: "#proyectos", label: "Proyectos Sociales" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm border-b shadow-sm" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="logoReinado.webp"
            alt="Reina de Loja"
            width={170}
            height={60}
            className={`h-14 w-auto transition-all duration-300 ${scrolled ? "" : " p-1 rounded"}`}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 ${
                scrolled ? "text-[#9D8189] hover:text-[#D8B4A0]" : "text-white hover:text-[#D8B4A0]/80"
              }`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          className={`md:hidden transition-all duration-300 ${
            scrolled ? "border-[#9D8189] text-[#9D8189]" : "border-white bg-white/30 text-black hover:bg-white/50"
          }`}
          size="icon"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${scrolled ? "bg-white shadow-md" : "bg-black/90 backdrop-blur-sm"}`}
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`py-4 px-6 transition-all duration-300 text-base font-medium ${
                    scrolled
                      ? "text-[#9D8189] hover:bg-[#D8B4A0]/10 hover:text-[#D8B4A0] border-b border-gray-100"
                      : "text-white hover:bg-white/20 border-b border-white/10"
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

