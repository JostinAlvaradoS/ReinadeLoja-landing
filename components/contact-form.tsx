"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"
import { FadeIn } from "@/components/animations"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const objectData = Object.fromEntries(formData)

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
        method: "POST",
        body: JSON.stringify(objectData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Error al enviar el formulario. Inténtalo de nuevo.")
      }

      setIsSubmitted(true)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Ocurrió un error inesperado.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <FadeIn>
        <div className="bg-white rounded-lg p-8 shadow-md text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <h3 className="text-xl font-bold text-[#9D8189] mb-2">¡Mensaje Enviado!</h3>
          <p className="text-[#9D8189] mb-4">
            Gracias por tu interés en nuestro proyecto social. Me pondré en contacto contigo a la brevedad posible.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-[#D8B4A0] hover:bg-[#9D8189] text-white">
            Enviar otro mensaje
          </Button>
        </div>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Tu nombre"
                required
                className="border-[#D8B4A0] focus-visible:ring-[#9D8189]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Tu apellido"
                required
                className="border-[#D8B4A0] focus-visible:ring-[#9D8189]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              name="_replyto"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              required
              className="border-[#D8B4A0] focus-visible:ring-[#9D8189]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Tu número de teléfono"
              required
              className="border-[#D8B4A0] focus-visible:ring-[#9D8189]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest">Tipo de apoyo</Label>
            <Select name="interest">
              <SelectTrigger className="border-[#D8B4A0] focus:ring-[#9D8189]">
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apadrinar">Apadrinar a un niño</SelectItem>
                <SelectItem value="donacion">Realizar una donación</SelectItem>
                <SelectItem value="voluntariado">Voluntariado</SelectItem>
                <SelectItem value="otro">Otro tipo de apoyo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Cuéntanos cómo te gustaría apoyar..."
              rows={4}
              className="border-[#D8B4A0] focus-visible:ring-[#9D8189]"
            />
          </div>

          <Button type="submit" className="w-full bg-[#D8B4A0] hover:bg-[#9D8189] text-white" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </div>
      </form>
    </FadeIn>
  )
}