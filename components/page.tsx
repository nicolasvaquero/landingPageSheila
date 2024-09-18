'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Globe, Instagram, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const content = {
  es: {
    nav: ['Sobre Sheila', 'Novedades', 'Agenda', 'Clases', 'Galería', 'Contacto'],
    hero: {
      title: 'Sheila Majul',
      subtitle: 'Bailarina Árabe',
    },
    about: {
      title: 'Sobre Sheila',
      content: 'Sheila es una apasionada y talentosa bailarina árabe que da vida a los fascinantes ritmos y movimientos elegantes de la danza del Medio Oriente. Con años de entrenamiento dedicado y experiencia en actuaciones, ha dominado las intrincadas técnicas de la danza del vientre, incorporando estilos tanto tradicionales como contemporáneos en sus cautivadoras rutinas. Las actuaciones de Sheila son una vibrante celebración del arte cultural, combinando movimientos corporales fluidos, gestos expresivos con las manos y un hipnótico trabajo de caderas para crear un espectáculo verdaderamente encantador que transporta al público al exótico mundo de la danza árabe.',
    },
    news: {
      title: 'Novedades',
      content: 'Próximo espectáculo: "Noches de Arabia" - 15 de julio',
    },
    schedule: {
      title: 'Agenda',
      content: 'Consulta las próximas actuaciones y eventos de Sheila.',
    },
    classes: {
      title: 'Clases',
      content: 'Aprende danza árabe con Sheila. Clases para todos los niveles.',
    },
    gallery: {
      title: 'Galería',
      content: 'Explora fotos de las actuaciones de Sheila.',
    },
    contact: {
      title: 'Contacto',
      content: 'Sígueme en Instagram para más información y actualizaciones.',
    },
  },
  en: {
    nav: ['About Sheila', 'News', 'Schedule', 'Classes', 'Gallery', 'Contact'],
    hero: {
      title: 'Sheila Majul',
      subtitle: 'Arab Dancer',
    },
    about: {
      title: 'About Sheila',
      content: 'Sheila is a passionate and talented Arabic dancer who brings the mesmerizing rhythms and graceful movements of Middle Eastern dance to life. With years of dedicated training and performance experience, she has mastered the intricate techniques of belly dancing, incorporating both traditional and contemporary styles into her captivating routines. Sheila\' performances are a vibrant celebration of cultural artistry, blending fluid body movements, expressive hand gestures, and hypnotic hip work to create a truly enchanting spectacle that transports audiences to the exotic world of Arabic dance'
    },
    news: {
      title: 'News',
      content: 'Upcoming show: "Arabian Nights" - July 15th',
    },
    schedule: {
      title: 'Schedule',
      content: 'Check out Sheila\'s upcoming performances and events.',
    },
    classes: {
      title: 'Classes',
      content: 'Learn Arab dance with Sheila. Classes for all levels.',
    },
    gallery: {
      title: 'Gallery',
      content: 'Explore photos of Sheila\'s performances.',
    },
    contact: {
      title: 'Contact',
      content: 'Follow me on Instagram for more information and updates.',
    },
  },
}

const galleryImages = [
  'https://imgur.com/5A4QREc.jpg',
  'https://imgur.com/4C6tzYr.jpg',
  'https://imgur.com/j9tGVfe.jpg',
]

export function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('es')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es')

  const t = content[language]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  useEffect(() => {
    const timer = setInterval(nextImage, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{t.hero.title}</h1>
          <nav className="hidden md:flex space-x-6">
            {t.nav.map((item, index) => (
              <a key={index} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-purple-400 transition-colors">
                {item}
              </a>
            ))}
            <button onClick={toggleLanguage} className="flex items-center hover:text-purple-400 transition-colors">
              <Globe className="w-4 h-4 mr-1" />
              {language.toUpperCase()}
            </button>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          {t.nav.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block py-2 hover:text-purple-400 transition-colors"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
          <button onClick={toggleLanguage} className="flex items-center py-2 hover:text-purple-400 transition-colors">
            <Globe className="w-4 h-4 mr-1" />
            {language.toUpperCase()}
          </button>
        </div>
      )}

      <main className="container mx-auto px-4 py-8 flex flex-col items-center">
        <section id="hero" className="text-center mb-24 w-full max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">{t.hero.subtitle}</p>
        </section>

        <section id="about-sheila" className="mb-24 w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">{t.about.title}</h2>
          <p className="text-lg text-gray-300">{t.about.content}</p>
        </section>

        <section id="news" className="mb-24 w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">{t.news.title}</h2>
          <p className="text-lg text-gray-300">{t.news.content}</p>
        </section>

        <section id="schedule" className="mb-24 w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">{t.schedule.title}</h2>
          <p className="text-lg text-gray-300">{t.schedule.content}</p>
        </section>

        <section id="classes" className="mb-24 w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">{t.classes.title}</h2>
          <p className="text-lg text-gray-300">{t.classes.content}</p>
        </section>

        <section id="gallery" className="mb-24 w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">{t.gallery.title}</h2>
          <p className="text-lg text-gray-300 mb-6">{t.gallery.content}</p>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={galleryImages[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              fill
              className="object-cover rounded-lg"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        <section id="contact" className="mb-24 w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">{t.contact.title}</h2>
          <p className="text-lg text-gray-300 mb-6">{t.contact.content}</p>
          <Link 
            href="https://www.instagram.com/sheila_majul/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            <Instagram className="w-8 h-8 text-white" />
          </Link>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 p-4 text-center">
        <p>&copy; 2023 Sheila Majul. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
      </footer>
    </div>
  )
}