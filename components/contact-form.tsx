"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { FadeIn } from "@/components/animations"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [isFormValid, setIsFormValid] = useState(false)
  const [emailError, setEmailError] = useState<string | null>(null)

  // Validar el formulario cada vez que cambian los datos
  useEffect(() => {
    const { firstName, lastName, email, phone, interest, message } = formData

    // Validar email con regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const isEmailValid = email.trim() === "" || emailRegex.test(email)

    if (!isEmailValid && email.trim() !== "") {
      setEmailError("Por favor, ingresa un correo electrónico válido")
    } else {
      setEmailError(null)
    }

    const isValid =
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      isEmailValid &&
      phone.trim() !== "" &&
      interest !== "" &&
      message.trim() !== ""

    setIsFormValid(isValid)
  }, [formData])

  // Manejar cambios en los campos de entrada
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Manejar cambios en el select
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Verificar validación de email antes de enviar
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formData.email)) {
      setEmailError("Por favor, ingresa un correo electrónico válido")
      return
    }

    setIsSubmitting(true)
    setError(null)

    const formDataToSend = new FormData(e.currentTarget)
    const objectData = Object.fromEntries(formDataToSend)

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

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    })
    setEmailError(null)
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
          <Button onClick={resetForm} className="bg-[#D8B4A0] hover:bg-[#9D8189] text-white">
            Enviar otro mensaje
          </Button>
        </div>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 flex items-start">
            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
            <p>{error}</p>
          </div>
        )}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                Nombre <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Tu nombre"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="border-[#D8B4A0] focus-visible:ring-[#9D8189]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">
                Apellido <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Tu apellido"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="border-[#D8B4A0] focus-visible:ring-[#9D8189]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Correo electrónico <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              required
              value={formData.email}
              onChange={handleInputChange}
              className={`border-[#D8B4A0] focus-visible:ring-[#9D8189] ${emailError ? "border-red-500" : ""}`}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Teléfono <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Tu número de teléfono"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="border-[#D8B4A0] focus-visible:ring-[#9D8189]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest">
              Proyecto social que deseas apoyar <span className="text-red-500">*</span>
            </Label>
            <Select name="interest" value={formData.interest} onValueChange={handleSelectChange} required>
              <SelectTrigger className="border-[#D8B4A0] focus:ring-[#9D8189]">
                <SelectValue placeholder="Selecciona un proyecto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="creciendo-contigo">Creciendo Contigo (Camila Muñoz)</SelectItem>
                <SelectItem value="raices-de-amor">Raíces de Amor (María Dolores Samaniego)</SelectItem>
                <SelectItem value="tejiendo-ilusiones">Tejiendo Ilusiones (Claudia Guachizaca)</SelectItem>
                <SelectItem value="patitas-de-amor">Patitas de Amor (Wendy Sarmiento)</SelectItem>
                <SelectItem value="todos">Apoyar a todos los proyectos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Mensaje <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Cuéntanos cómo te gustaría apoyar..."
              rows={4}
              required
              value={formData.message}
              onChange={handleInputChange}
              className="border-[#D8B4A0] focus-visible:ring-[#9D8189]"
            />
          </div>

          <div className="text-xs text-gray-500 mb-4">
            <span className="text-red-500">*</span> Campos obligatorios
          </div>

          <Button
            type="submit"
            className="w-full bg-[#D8B4A0] hover:bg-[#9D8189] text-white"
            disabled={isSubmitting || !isFormValid}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </div>
      </form>
    </FadeIn>
  )
}

