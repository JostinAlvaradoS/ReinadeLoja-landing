"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ScaleIn } from "@/components/animations"
import { ImageLightbox } from "./image-lightbox"

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const images = [
    {
      src: "gallery/1.webp",
      alt: "Navidad Solidaria: llevando alegría y amor a los niños del barrio La Banda Alto.",
    },
    {
      src: "gallery/2.webp",
      alt: "Reinas de Loja en conjunto con el juez y el director de la Judicatura, en la presentación del libro 'Derechos de la Niñez y la Adolescencia', de autoría del Dr. Luis Samaniego.",
    },
    {
      src: "gallery/3.webp",
      alt: "Reinas de Loja junto al alcalde y personal municipal durante el desfile en conmemoración de los 476 años de fundación de la ciudad.",
    },
    {
      src: "gallery/4.webp",
      alt: "Reinas de Loja en la inauguración del salón social 'Dr. Bolívar Guerrero' del Colegio de Abogados de Loja.",
    },
    {
      src: "gallery/5.webp",
      alt: "Reinas de Loja, Reina de la Posta de la Lojanidad, el alcalde y ciudadanos en la Posta Barrial.",
    },
    {
      src: "gallery/6.webp",
      alt: "Reinas de Loja en el evento 'Rodada de Altura', en conmemoración al 8 de marzo.",
    },
    {
      src: "gallery/7.webp",
      alt: "Reina de Loja y Reina de Fundación en la campaña 'Dulces Sonrisas Navideñas'.",
    },
    {
      src: "gallery/8.webp",
      alt: "Reinas de Loja conmemorando el Día Mundial de la Discapacidad, promoviendo la inclusión y el respeto por la diversidad.",
    },
    {
      src: "gallery/9.webp",
      alt: "Reinas de Loja en visita a la Congregación de las Hermanas de la Virgen de Mátara.",
    },
    {
      src: "gallery/10.webp",
      alt: "Reinas de Loja, junto al alcalde, la gobernadora y ciudadanos, en la feria 'Dulces de San Sebastián'.",
    },
    {
      src: "gallery/11.webp",
      alt: "Reinas de Loja rindiendo homenaje con trajes tradicionales de la mujer lojana de antaño.",
    },
    {
      src: "gallery/12.webp",
      alt: "Reinas de Loja en rueda de prensa en el Gran Victoria Boutique Hotel, presentando sus dignidades.",
    },
    {
      src: "gallery/13.webp",
      alt: "Reinas de Loja junto al equipo de bomberos.",
    },
    {
      src: "gallery/14.webp",
      alt: "Reinas de Loja participando en la eucaristía en honor a San Sebastián, patrono jurado de Loja.",
    },
    {
      src: "gallery/15.webp",
      alt: "Reinas de Loja y Bruno Valarezo, CEO de Clipp, en la inauguración de la novena edición del Festival Internacional de Artes Vivas Loja.",
    },
    {
      src: "gallery/16.webp",
      alt: 'Reinas de Loja, junto al alcalde, la presidenta del CASMUL y autoridades, en la feria artesanal "Enamórate".',
    },
    {
      src: "gallery/18.webp",
      alt: "Reinas de Loja junto al alcalde y su esposa, en el desfile conmemorativo por los 204 años de independencia de la ciudad.",
    },
    {
      src: "gallery/19.webp",
      alt: "Reinas de Loja en agasajo navideño para los jóvenes del Centro de Adolescentes Infractores de Loja.",
    },
    {
      src: "gallery/21.webp",
      alt: 'Reinas de Loja visitando a las niñas del centro "Renacer".',
    },
  ];
  

  const duplicatedImages = [...images, ...images]

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  return (
       <div className="space-y-12" ref={ref}>
      <ScaleIn>
        <div className="overflow-hidden relative">
          <div className="relative w-full">
            {/* Primera fila */}
            <div className="flex animate-scroll">
              {images.map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="min-w-[55.33%] p-3"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md group transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                    <div className="aspect-square relative">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        quality={95}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 text-sm font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Segunda fila - dirección opuesta */}
            <div className="flex animate-scroll-reverse mt-6">
              {images
                .slice()
                .reverse()
                .map((image, index) => (
                  <div
                    key={`row2-${index}`}
                    className="min-w-[55.33%] p-3"
                    onClick={() => handleImageClick(images.length - 1 - index)}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-md group transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                      <div className="aspect-square relative">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          quality={95}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-4 text-sm font-medium">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </ScaleIn>
    
      {/* Lightbox */}
      <ImageLightbox
        images={images}
        initialIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
      
      <ScaleIn className="mt-16">
        <h3 className="font-serif text-2xl text-center text-[#9D8189] mb-6">Momentos Destacados</h3>
        <p className="text-center text-[#9D8189] max-w-3xl mx-auto mb-8">
          Conoce los eventos más importantes, tanto sociales como culturales, en los que participan nuestras
          representantes, llevando el mensaje de solidaridad y compromiso con toda la comunidad lojana.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="relative group overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="aspect-[4/3] relative">
              <Image
                src="momentosDestacados/momentoDestacado.webp"
                alt="Coronación Reina de Loja y su Corte de Honor 2024"
                fill
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-serif text-lg font-bold">Coronación Reina de Loja 2024</h4>
                <p className="text-white/90 text-sm mt-1">
                  Ceremonia oficial de coronación de la Reina de Loja y su Corte de Honor
                </p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="aspect-[4/3] relative">
              <Image
                src="momentosDestacados/pregon.webp"
                alt="Desfile de inicio de las fiestas novembrinas"
                fill
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-serif text-lg font-bold">Fiestas Novembrinas</h4>
                <p className="text-white/90 text-sm mt-1">
                  Desfile del pregón por los 204 años de independencia y 476 años de fundación de Loja
                </p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="aspect-[4/3] relative">
              <Image
                src="momentosDestacados/agasajo.webp"
                alt="Agasajo navideño a niños de nuestro cantón"
                fill
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-serif text-lg font-bold">Agasajo Navideño</h4>
                <p className="text-white/90 text-sm mt-1">Celebración navideña con niños de nuestro cantón</p>
              </div>
            </div>
          </div>
        </div>
      </ScaleIn>
    </div>
  )
}

