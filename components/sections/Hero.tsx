'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center text-white overflow-hidden relative pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d1a] via-[#0f1420] to-[#1a1028] animate-[fadeIn_0.8s_ease-out]" />
      <div className="absolute inset-0 animate-[fadeIn_1s_ease-out]" style={{
        background: 'radial-gradient(ellipse at 10% 20%, rgba(91, 124, 255, 0.2) 0%, transparent 40%), radial-gradient(ellipse at 90% 80%, rgba(168, 85, 247, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(15, 229, 139, 0.05) 0%, transparent 60%)'
      }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1a] via-transparent to-transparent animate-[fadeIn_1.2s_ease-out]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30 animate-[fadeIn_1.5s_ease-out]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(91, 124, 255, 0.15) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }} />
      
      <div className="absolute bottom-0 right-0 w-full sm:w-[70%] md:w-[60%] lg:w-[50%] h-[50%] sm:h-[55%] md:h-[60%] pointer-events-none overflow-visible opacity-50 sm:opacity-70 md:opacity-100 animate-[slideInRight_1s_ease-out]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5b7cff]/20 to-[#a855f7]/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 translate-x-[30%] sm:translate-x-[25%] md:translate-x-[20%] scale-75 sm:scale-90 md:scale-100">
          <Image
            src="/hero-logo.svg"
            alt="Eternelle System"
            width={800}
            height={800}
            className="block"
            style={{filter: 'drop-shadow(0 0 50px rgba(91,124,255,0.4))'}}
            priority
            fetchPriority="high"
            unoptimized
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 -mt-20 sm:mt-0">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] animate-[slideUp_0.8s_ease-out]">
            Todo el mundo del gaming{' '}
            <span className="inline-block" style={{
              background: 'linear-gradient(120deg, #5b7cff 0%, #8b5cf6 50%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(91, 124, 255, 0.3))'
            }}>
              en un solo lugar
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 animate-[slideUp_1s_ease-out]">
            Descubre, Juega y conecta con la comunidad gamer más grande
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 animate-[fadeIn_1.2s_ease-out]">
            <a 
              href="#contact"
              className="group relative bg-gradient-to-r from-[#5b7cff] via-[#7c5cff] to-[#8b5cf6] text-white px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden shadow-lg shadow-[#5b7cff]/40 text-center hover:shadow-2xl hover:shadow-[#5b7cff]/60 hover:scale-105"
            >
              <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">Contáctanos</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
                animation: 'pulse 1.5s ease-in-out infinite'
              }} />
            </a>
            <a 
              href="#about"
              className="group relative border-2 border-[#5b7cff] hover:border-transparent text-[#5b7cff] hover:text-white px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden shadow-lg shadow-[#5b7cff]/30 bg-transparent text-center hover:scale-105"
            >
              <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">Únete ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5b7cff] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
                animation: 'pulse 1.5s ease-in-out infinite'
              }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
