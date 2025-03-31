import type React from "react"
import "@/app/globals.css"
import { Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata = {
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  title: "Reinas de Loja 2024-2025 | Impacto Social y Proyectos Comunitarios",
  description: "Conoce el legado social de las Reinas de Loja, galería de proyectos realizados, cómo apoyar su labor y formulario de donación para iniciativas comunitarias. ¡Tu aporte transforma vidas!",
  keywords: [
    "Reinas de Loja",
    "proyectos sociales Loja",
    "donaciones reinado Loja",
    "impacto comunitario",
    "galería reinas Loja",
    "historia reinado Loja",
    "apoyo social Ecuador",
    "Loja",
    "Municipio de Loja",
    "reinas de belleza Loja",
    "proyectos comunitarios Loja",
    "donaciones Loja",
    "reinas de Loja 2024",
    "reinas de Loja 2025",
    "proyectos sociales Ecuador",
    "donaciones Ecuador",
    "impacto social Loja",
    "reinas de Loja historia",
    "reinas de Loja galería",
    "reinas de Loja eventos",
    "reinas de Loja contacto",
    "reinas de Loja proyectos",
    "reinas de Loja donaciones",
    "reinas de Loja impacto social",
    "reinas de Loja apoyo social",
    "reinas de Loja comunidad",
    "reinas de Loja iniciativas",
  ],
  openGraph: {
    title: "Impacto Social de las Reinas de Loja | 2024-2025",
    description: "Descubre cómo las Reinas de Loja transforman su comunidad y cómo puedes apoyar sus proyectos sociales.",
    url: "https://www.reinadeloja.com",
    siteName: "Reinas de Loja - Legado Social",
    images: [
      {
        url: "https://www.reinadeloja.com/#gallery",
        width: 1200,
        height: 630,
        alt: "Reinas de Loja trabajando en proyectos comunitarios",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  alternates: {
    canonical: "https://www.reinadeloja.com",
  }
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
import { icons } from "lucide-react"
