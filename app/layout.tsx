import type React from "react"
import "@/app/globals.css"
import { Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "Camila Muñoz Neira - Reina de Loja 2024",
  description:
    "Sitio oficial de la Reina de Loja 2024, Camila Muñoz Neira. Conoce su proyecto social de apadrinamiento de niños.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'