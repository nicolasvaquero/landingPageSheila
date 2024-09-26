'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Globe, Instagram, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Define the allowed languages
type Language = 'es' | 'en' | 'pt';

// Define the content type
type Content = {
  [key in Language]: {
    nav: string[];
    hero: { title: string; subtitle: string };
    about: { title: string; content: string };
    news: { title: string; content: { date: string; title: string; description: string }[] };
    schedule: { title: string; events: { date: string; time: string; title: string; location: string }[] };
    classes: { title: string; offerings: { level: string; schedule: string; description: string }[] };
    gallery: { title: string; content: string };
    contact: { title: string; content: string };
  }
};

// Your content object (no changes needed here)
const content: Content = {
  es: {
    nav: ['Sobre Sheila', 'Novedades', 'Agenda', 'Clases', 'Galería', 'Contacto'],
    hero: {
      title: 'Sheila Majul',
      subtitle: 'Bailarina Árabe',
    },
    about: {
      title: 'Sobre Sheila',
      content: 'Sheila es una apasionada y talentosa bailarina árabe que da vida a la danza del Medio Oriente. Con años de experiencia, ha dominado técnicas de danza del vientre tanto tradicionales como contemporáneas. Sus actuaciones combinan movimientos fluidos, gestos expresivos y un hipnótico trabajo de caderas, creando un espectáculo encantador que transporta al público al exótico mundo de la danza árabe.'
    },
    news: {
      title: 'Novedades',
      content: [
        { date: '15 de julio de 2024', title: 'Noches de Arabia', description: '¡Únete a nosotros para una noche mágica de danza en el Gran Teatro. ¡Entradas a la venta ahora!' },
        { date: '5 de agosto de 2024', title: 'Taller de Danza de Verano', description: 'Intensivo taller de 3 días para bailarines intermedios y avanzados. Lugares limitados.' },
        { date: '1 de septiembre de 2024', title: 'Inscripción para el nuevo período', description: 'Las clases de otoño ahora están abiertas para inscripción. ¡Descuento anticipado hasta el 15 de agosto!' },
      ],
    },
    schedule: {
      title: 'Agenda',
      events: [
        { date: '15 de julio de 2024', time: '8:00 PM', title: 'Presentación de Noches de Arabia', location: 'Gran Teatro' },
        { date: '22 de julio de 2024', time: '7:30 PM', title: 'Presentación de Gala de Caridad', location: 'Ayuntamiento' },
        { date: '5-7 de agosto de 2024', time: '10:00 AM - 4:00 PM', title: 'Taller de Danza de Verano', location: 'Escuela de Danza de Sheila' },
        { date: '20 de agosto de 2024', time: '6:00 PM', title: 'Presentación en Festival Cultural', location: 'Parque Central' },
      ],
    },
    classes: {
      title: 'Clases',
      offerings: [
        { level: 'Principiantes', schedule: 'Lunes y miércoles, 6:00 PM - 7:30 PM', description: 'Introducción a movimientos básicos y ritmos.' },
        { level: 'Intermedios', schedule: 'Martes y jueves, 6:00 PM - 7:30 PM', description: 'Enfoque en la refinación de técnicas y coreografía.' },
        { level: 'Avanzados', schedule: 'Sábados, 10:00 AM - 12:00 PM', description: 'Combinaciones complejas y preparación para presentaciones.' },
        { level: 'Clases Privadas', schedule: 'Sobre cita', description: 'Instrucción personalizada adaptada a tus objetivos.' },
      ],
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
      content: 'Sheila is a passionate and talented Arabic dancer who brings Middle Eastern dance to life. With years of experience, she has mastered both traditional and contemporary belly dancing techniques. Her performances blend fluid movements, expressive gestures, and hypnotic hip work, creating an enchanting spectacle that transports audiences to the exotic world of Arabic dance.'
    },
    news: {
      title: 'News',
      content: [
        { date: 'July 15, 2024', title: 'Arabian Nights', description: 'Join us for a magical evening of dance at the Grand Theater. Tickets on sale now!' },
        { date: 'August 5, 2024', title: 'Summer Dance Workshop', description: 'Intensive 3-day workshop for intermediate and advanced dancers. Limited spots available.' },
        { date: 'September 1, 2024', title: 'New Term Enrollment', description: 'Fall classes are now open for registration. Early bird discount until August 15th!' },
      ],
    },
    schedule: {
      title: 'Schedule',
      events: [
        { date: 'July 15, 2024', time: '8:00 PM', title: 'Arabian Nights Performance', location: 'Grand Theater' },
        { date: 'July 22, 2024', time: '7:30 PM', title: 'Charity Gala Performance', location: 'City Hall' },
        { date: 'August 5-7, 2024', time: '10:00 AM - 4:00 PM', title: 'Summer Dance Workshop', location: 'Sheila\'s Dance Studio' },
        { date: 'August 20, 2024', time: '6:00 PM', title: 'Cultural Festival Performance', location: 'Central Park' },
      ],
    },
    classes: {
      title: 'Classes',
      offerings: [
        { level: 'Beginner', schedule: 'Mondays and Wednesdays, 6:00 PM - 7:30 PM', description: 'Introduction to basic movements and rhythms.' },
        { level: 'Intermediate', schedule: 'Tuesdays and Thursdays, 6:00 PM - 7:30 PM', description: 'Focus on technique refinement and choreography.' },
        { level: 'Advanced', schedule: 'Saturdays, 10:00 AM - 12:00 PM', description: 'Complex combinations and performance preparation.' },
        { level: 'Private Lessons', schedule: 'By appointment', description: 'One-on-one instruction tailored to your goals.' },
      ],
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
  pt: {
    nav: ['Sobre Sheila', 'Notícias', 'Agenda', 'Aulas', 'Galeria', 'Contato'],
    hero: {
      title: 'Sheila Majul',
      subtitle: 'Dançarina Árabe',
    },
    about: {
      title: 'Sobre Sheila',
      content: 'Sheila é uma dançarina árabe apaixonada e talentosa que dá vida à dança do Oriente Médio. Com anos de experiência, ela dominou técnicas de dança do ventre tradicionais e contemporâneas. Suas performances combinam movimentos fluidos, gestos expressivos e um trabalho hipnótico de quadris, criando um espetáculo encantador que transporta o público para o mundo exótico da dança árabe.'
    },
    news: {
      title: 'Notícias',
      content: [
        { date: '15 de julho de 2024', title: 'Noites Árabes', description: 'Junte-se a nós para uma noite mágica de dança no Grande Teatro. Ingressos à venda agora!' },
        { date: '5 de agosto de 2024', title: 'Workshop de Dança de Verão', description: 'Workshop intensivo de 3 dias para dançarinos intermediários e avançados. Vagas limitadas.' },
        { date: '1 de setembro de 2024', title: 'Inscrições para o novo período', description: 'As aulas de outono estão abertas para inscrições. Desconto para inscrições antecipadas até 15 de agosto!' },
      ],
    },
    schedule: {
      title: 'Agenda',
      events: [
        { date: '15 de julho de 2024', time: '20:00', title: 'Apresentação Noites Árabes', location: 'Grande Teatro' },
        { date: '22 de julho de 2024', time: '19:30', title: 'Apresentação Gala de Caridade', location: 'Prefeitura' },
        { date: '5-7 de agosto de 2024', time: '10:00 - 16:00', title: 'Workshop de Dança de Verão', location: 'Estúdio de Dança da Sheila' },
        { date: '20 de agosto de 2024', time: '18:00', title: 'Apresentação no Festival Cultural', location: 'Parque Central' },
      ],
    },
    classes: {
      title: 'Aulas',
      offerings: [
        { level: 'Iniciante', schedule: 'Segundas e quartas, 18:00 - 19:30', description: 'Introdução aos movimentos básicos e ritmos.' },
        { level: 'Intermediário', schedule: 'Terças e quintas, 18:00 - 19:30', description: 'Foco no aprimoramento de técnicas e coreografia.' },
        { level: 'Avançado', schedule: 'Sábados, 10:00 - 12:00', description: 'Combinações complexas e preparação para apresentações.' },
        { level: 'Aulas Particulares', schedule: 'Mediante agendamento', description: 'Instrução individual adaptada aos seus objetivos.' },
      ],
    },
    gallery: {
      title: 'Galeria',
      content: 'Explore fotos das apresentações da Sheila.',
    },
    contact: {
      title: 'Contato',
      content: 'Siga-me no Instagram para mais informações e atualizações.',
    },
  },
}

const galleryImages = [
  'https://imgur.com/5A4QREc.jpg',
  'https://imgur.com/4C6tzYr.jpg',
  'https://imgur.com/j9tGVfe.jpg',
]

function isLanguage(value: string): value is Language {
  return value === 'es' || value === 'en' || value === 'pt';
}

export function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>('es')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleLanguage = () => setLanguage(prevLang => {
    switch (prevLang) {
      case 'es': return 'en';
      case 'en': return 'pt';
      case 'pt': return 'es';
      default: return 'es';
    }
  })

  const t = isLanguage(language) ? content[language] : content['es'] // fallback to 'es' if language is invalid

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  const getCurrentYear = () => new Date().getFullYear();

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
          <p className="text-xl md:text-2xl text-gray-400 mb-8">{t.hero.subtitle}</p>
          <div className="relative w-full h-[300px] md:h-[400px] mb-8">
            <Image
              src="https://imgur.com/7cnGkBE.jpg"
              alt="Sheila Majul dancing"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        <section id="about-sheila" className="mb-24 w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">{t.about.title}</h2>
          <p className="text-lg text-gray-300">{t.about.content}</p>
        </section>

        <section id="news" className="mb-24 w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">{t.news.title}</h2>
          <ul className="space-y-4">
            {t.news.content.map((item, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.date}</p>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="schedule" className="mb-24 w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">{t.schedule.title}</h2>
          <ul className="space-y-4">
            {t.schedule.events.map((event, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300">{event.title}</h3>
                <p className="text-sm text-gray-400">{event.date} - {event.time}</p>
                <p className="text-gray-300 mt-2">{event.location}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="classes" className="mb-24 w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">{t.classes.title}</h2>
          <ul className="space-y-4">
            {t.classes.offerings.map((offering, index) => (
              <li key={index} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300">{offering.level}</h3>
                <p className="text-sm text-gray-400">{offering.schedule}</p>
                <p className="text-gray-300 mt-2">{offering.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="gallery" className="mb-24 w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">{t.gallery.title}</h2>
          <p className="text-lg text-gray-300 mb-6">{t.gallery.content}</p>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={galleryImages[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        <p>&copy; {getCurrentYear()} Sheila Majul. {
          language === 'es' ? 'Todos los derechos reservados.' :
          language === 'en' ? 'All rights reserved.' :
          'Todos os direitos reservados.'
        }</p>
      </footer>
    </div>
  )
}