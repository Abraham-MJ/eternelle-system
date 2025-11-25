'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => setIsAnimating(true), 10);
    }
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#080A0F]' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#hero" className="flex items-center">
              {/* Desktop Logo */}
              <Image 
                src="/logo-desktop.svg" 
                alt="Eternelle System" 
                width={240} 
                height={48}
                className="hidden sm:block"
                priority
              />
              {/* Mobile Logo */}
              <Image 
                src="/logo-mobile.svg" 
                alt="Eternelle System" 
                width={48} 
                height={48}
                className="block sm:hidden"
                priority
              />
            </a>
            
            <ul className="hidden lg:flex items-center gap-8 text-white text-sm">
              <li><a href="#hero" className="hover:text-gray-300 transition">Inicio</a></li>
              <li><a href="#about" className="hover:text-gray-300 transition">Nosotros</a></li>
              <li><a href="#products" className="hover:text-gray-300 transition">Productos</a></li>
              <li><a href="#business" className="hover:text-gray-300 transition">Modelo de Negocio</a></li>
              <li><a href="#tech" className="hover:text-gray-300 transition">Tecnología</a></li>
              <li><a href="#contact" className="hover:text-gray-300 transition">Contacto</a></li>
            </ul>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-3">
                <a href="https://wa.me/593994107494" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-80 transition" aria-label="Contactar por WhatsApp">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                </a>
                <a href="https://t.me/ronaldpokero" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center hover:opacity-80 transition" aria-label="Contactar por Telegram">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/></svg>
                </a>
                <a href="mailto:rggamingsolutions@gmail.com" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:opacity-80 transition" aria-label="Enviar correo electrónico">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
                </a>
              </div>
            </div>

            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú de navegación"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            onClick={closeMenu} 
          />
          
          <div className={`absolute right-0 top-0 h-full w-80 bg-[#1a1a1a] p-6 overflow-y-auto transition-transform duration-300 ${isAnimating ? 'translate-x-0' : 'translate-x-full'}`}>
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={closeMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-3 mb-8">
              <a href="https://wa.me/593994107494" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
              </a>
              <a href="https://t.me/ronaldpokero" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#0088cc] flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/></svg>
              </a>
              <a href="mailto:rggamingsolutions@gmail.com" className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
              </a>
            </div>

            <ul className="space-y-6 mb-8 text-white">
              <li><a href="#hero" className="block text-lg" onClick={closeMenu}>Inicio</a></li>
              <li><a href="#about" className="block text-lg" onClick={closeMenu}>Nosotros</a></li>
              <li><a href="#products" className="block text-lg" onClick={closeMenu}>Productos</a></li>
              <li><a href="#business" className="block text-lg" onClick={closeMenu}>Modelo de Negocio</a></li>
              <li><a href="#tech" className="block text-lg" onClick={closeMenu}>Tecnología</a></li>
              <li><a href="#contact" className="block text-lg" onClick={closeMenu}>Contacto</a></li>
            </ul>

            <div className="border-t border-white/10 pt-6">
              <Image 
                src="/logo-desktop.svg" 
                alt="Eternelle System" 
                width={180} 
                height={36}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
