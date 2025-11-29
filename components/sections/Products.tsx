"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const products = [
  {
    id: "sportsbook",
    title: "Sportsbook Pro & eSports",
    description:
      "Accede a una plataforma completa con cuotas altamente competitivas, amplios mercados y márgenes optimizados, con cobertura en vivo de más de 10,000 eventos diarios.",
    highlight: "Más de 10,000 Eventos Diarios y eSports",
    stats: "10,000+",
    statsLabel: "Eventos diarios",
    features: [
      "Cuotas competitivas",
      "Streaming en vivo",
      "Apuestas en tiempo real",
    ],
    icon: "🎯",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "casino",
    title: "Portafolio de Casino Premium",
    description:
      "Explora un catálogo de más de 10,400 títulos, incluyendo tragamonedas con licencia, juegos de crash de tendencia y crupiers en vivo (Live Casino) de los mejores proveedores.",
    highlight: "150+ Proveedores, 10,400+ Juegos",
    stats: "10,400+",
    statsLabel: "Juegos disponibles",
    features: ["150+ proveedores", "Crupieres en vivo", "Jackpots progresivos"],
    icon: "🎰",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "licenses",
    title: "Soporte Regulatorio 360°",
    description:
      "Asesoramiento experto para garantizar el cumplimiento total con las normativas internacionales y la obtención y gestión de licencias de gaming en jurisdicciones estratégicas.",
    highlight: "Cumplimiento y Operación Legal Segura",
    stats: "100%",
    statsLabel: "Cumplimiento legal",
    features: [
      "Licencias internacionales",
      "Auditorías regulares",
      "Juego responsable",
    ],
    icon: "🧾",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "payments",
    title: "Pasarelas de Pago de Alta Conversión",
    description:
      "Integración flexible de soluciones de pago, incluyendo monedas locales, métodos fiat/crypto y pasarelas de alta velocidad para maximizar las tasas de depósito y retiro.",
    highlight: "Integración Global y Local sin Fricción",
    stats: "50+",
    statsLabel: "Métodos de pago",
    features: ["Pagos instantáneos", "Criptomonedas", "Transferencias locales"],
    icon: "💳",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "marketing",
    title: "Sistemas CRM y Afiliados Avanzados",
    description:
      "Soluciones de marketing de adquisición (CRM) y programas de afiliados personalizables con tracking avanzado, diseñadas para impulsar la captación y el engagement del jugador.",
    highlight: "Maximiza Alcance y Retención (ROI)",
    stats: "24/7",
    statsLabel: "Soporte marketing",
    features: [
      "Programa de afiliados",
      "Materiales promocionales",
      "Tracking avanzado",
    ],
    icon: "📈",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: "consulting",
    title: "Inteligencia de Negocio y Data",
    description: "Asesoramiento 360° utilizando análisis de datos (Business Intelligence) para optimizar la estructura operativa, identificar oportunidades de mercado y asegurar el crecimiento a largo plazo.",
    highlight: "Soluciones Personalizadas Basadas en Data",
    stats: "15+",
    statsLabel: "Años de experiencia",
    features: [
      "Análisis de mercado",
      "Optimización de conversión",
      "Estrategia de crecimiento",
    ],
    icon: "🧠",
    gradient: "from-violet-500 to-purple-500",
  },
];

export function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<string>("sportsbook");
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [animateKey, setAnimateKey] = useState(0);
  const currentProduct = products.find((p) => p.id === hoveredProduct);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setHoveredProduct((current) => {
        const currentIndex = products.findIndex((p) => p.id === current);
        const nextIndex = (currentIndex + 1) % products.length;
        return products[nextIndex].id;
      });
      setAnimateKey(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handleMouseEnter = (id: string) => {
    setIsAutoRotating(false);
    setHoveredProduct(id);
    setAnimateKey(prev => prev + 1);
  };

  const handleMouseLeave = () => {
    setIsAutoRotating(true);
  };

  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-[#0a0b14] to-[#1a1b2e] relative md:rounded-t-[50px] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#5b7cff] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b5cf6] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-[#5b7cff]/10 text-[#5b7cff] rounded-full text-sm font-semibold mb-6">
            PRODUCTO
          </span>

          <h2 className="text-4xl  font-bold text-white mb-6 leading-tight">
            MANTENER - Nuestro alto índice de conversión se traduce en mayores
            ganancias para ti.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Garantizamos que nuestros Operadores mantengan una alta Base de
            Jugadores Activos (AB) gracias a un portafolio de entretenimiento
            dinámico, siempre actualizado y altamente rentable
          </p>
        </div>

        <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4 w-max">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#1e1f35] rounded-2xl p-5 border border-gray-800 w-[280px] flex-shrink-0"
              >
                <div className="text-5xl mb-3">{product.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-[#0FE58B] text-sm">
                  <span className="w-1.5 h-1.5 bg-[#0FE58B] rounded-full"></span>
                  <span className="font-medium">{product.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  hoveredProduct === product.id
                    ? "bg-gradient-to-br from-[#5b7cff] to-[#8b5cf6] scale-105 shadow-2xl shadow-[#5b7cff]/50 -translate-y-2"
                    : "bg-[#1e1f35] hover:bg-[#2a2b45]"
                }`}
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-20' : ''
                  }`}></div>
                </div>
                <div
                  className={`text-6xl mb-4 transition-all duration-500 relative z-10 ${
                    hoveredProduct === product.id ? "scale-110 animate-bounce" : "scale-100"
                  }`}
                >
                  {product.icon}
                </div>
                <h3
                  className={`text-lg font-bold mb-2 transition-colors ${
                    hoveredProduct === product.id
                      ? "text-white"
                      : "text-gray-200"
                  }`}
                >
                  {product.title}
                </h3>
                <p
                  className={`text-sm transition-colors ${
                    hoveredProduct === product.id
                      ? "text-white/80"
                      : "text-gray-400"
                  }`}
                >
                  {product.highlight}
                </p>
              </div>
            ))}
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e1f35] to-[#2a2b45] shadow-2xl border border-gray-800">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentProduct?.gradient} opacity-10 transition-opacity duration-700`}></div>
            
            <div key={animateKey} className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center animate-[slideInFromRight_0.6s_ease-out]">
              <div className="text-9xl mb-8 transition-all duration-700 transform" 
                   style={{ 
                     animation: 'float 3s ease-in-out infinite, scaleIn 0.6s ease-out',
                     filter: 'drop-shadow(0 10px 20px rgba(91, 124, 255, 0.3))'
                   }}>
                {currentProduct?.icon}
              </div>

              <div className="mb-6 transition-all duration-500 transform">
                <div className="text-6xl font-bold text-white mb-2 transition-all duration-500"
                     style={{ animation: 'countUp 0.8s ease-out 0.2s both' }}>
                  {currentProduct?.stats}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {currentProduct?.statsLabel}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 transition-all duration-500"
                  style={{ animation: 'slideInLeft 0.6s ease-out 0.3s both' }}>
                {currentProduct?.title}
              </h3>
              <p className="text-gray-300 text-lg max-w-md transition-all duration-500"
                 style={{ animation: 'fadeIn 0.6s ease-out 0.4s both' }}>
                {currentProduct?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.5) rotate(-180deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        
        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
