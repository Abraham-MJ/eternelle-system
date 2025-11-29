"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center text-white overflow-hidden relative pb-20"
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0d1a] via-[#0f1420] to-[#1a1028] animate-[fadeIn_0.8s_ease-out]" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0a0d1a] via-transparent to-transparent animate-[fadeIn_1.2s_ease-out]" />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-30 animate-[fadeIn_1.5s_ease-out]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(91, 124, 255, 0.15) 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Contenido de texto */}
          <div className="flex-1 max-w-3xl relative z-30">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] animate-[slideUp_0.8s_ease-out]">
              Plataforma iGaming Integral: Soluciones
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(120deg, #5b7cff 0%, #8b5cf6 50%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 30px rgba(91, 124, 255, 0.3))",
                }}
              >
                B2B para Operadores
              </span>
            </h1>

            <p className="text-base sm:text-xl  text-gray-300 mb-8 sm:mb-10 animate-[slideUp_1s_ease-out]">
              Impulsa tu Casino o Sportsbook con tecnología de punta, alta
              conversión y soporte experto 24/7
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-[fadeIn_1.2s_ease-out]">
              <a
                href="#contact"
                className="group relative bg-linear-to-r from-[#5b7cff] via-[#7c5cff] to-[#8b5cf6] text-white px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden shadow-lg shadow-[#5b7cff]/40 text-center hover:shadow-2xl hover:shadow-[#5b7cff]/60 hover:scale-105"
              >
                <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                  Contáctanos
                </span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                    animation: "pulse 1.5s ease-in-out infinite",
                  }}
                />
              </a>
              <a
                href="#about"
                className="group relative border-2 border-[#5b7cff] hover:border-transparent text-[#5b7cff] hover:text-white px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden shadow-lg shadow-[#5b7cff]/30 bg-transparent text-center hover:scale-105"
              >
                <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                  Únete ahora
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-[#5b7cff] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                    animation: "pulse 1.5s ease-in-out infinite",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full start-0 absolute top-10 md:top-[80] sm:top-[45]  2xl:top-[-180]  w-full pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-[#5b7cff]/20 to-[#a855f7]/20 blur-3xl rounded-full animate-pulse" />
        <Image
          src="/phone-bg.png"
          alt="Eternelle System"
          width={1003}
          height={1003}
          className={`absolute z-4 contain-content bottom-0 
            w-[400px] h-[400px] right-[-60px]  
            sm:w-[400px] sm:h-[400px] sm:right-[-60px] rotate-320
            md:w-[600px] md:h-[600px] md:right-[-200px]  
            lg:w-[600px] lg:h-[600px] lg:-right-20  
            xl:w-[700px] xl:h-[700px] xl:right-[-200px] xl:top-[180px] 
            2xl:w-[1003px] 2xl:h-[1003px] 2xl:right-[-350px] 2xl:top-[100px]
            ${animate ? 'animate-[slideInRotate_1.5s_cubic-bezier(0.34,1.56,0.64,1)_forwards]' : 'opacity-0'}`}
          fetchPriority="high"
        />
      </div>
      
      <style jsx>{`
        @keyframes slideInRotate {
          0% {
            transform: translateX(150%) translateY(-50%) rotate(180deg) scale(0.3);
            opacity: 0;
          }
          60% {
            transform: translateX(-10%) translateY(5%) rotate(-10deg) scale(1.1);
            opacity: 1;
          }
          80% {
            transform: translateX(5%) translateY(-2%) rotate(5deg) scale(0.95);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
