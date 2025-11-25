'use client';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const businessModels = [
  {
    id: 'white-label',
    title: 'Marca Blanca',
    subtitle: 'White Label',
    description: 'Lanza tu propia plataforma de iGaming con nuestra solución completa. Personaliza la marca, gestiona tu operación y comienza a generar ingresos rápidamente.',
    color: 'from-[#667eea] to-[#764ba2]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
        <path d="M3 9h18M9 21V9" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 'own-brand',
    title: 'Marca Propia',
    subtitle: 'Operador Licenciado',
    description: 'Conviértete en un operador licenciado con tu propia marca. Te acompañamos en todo el proceso de licenciamiento y proporcionamos las herramientas necesarias.',
    color: 'from-[#f093fb] to-[#f5576c]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'affiliate',
    title: 'Sistema de Afiliados',
    subtitle: 'Affiliate Program',
    description: 'Genera ingresos promocionando nuestra plataforma. Accede a materiales de marketing, tracking avanzado y comisiones competitivas.',
    color: 'from-[#4facfe] to-[#00f2fe]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <circle cx="12" cy="12" r="3" strokeWidth="2" />
        <circle cx="19" cy="7" r="2" strokeWidth="2" />
        <circle cx="5" cy="7" r="2" strokeWidth="2" />
        <circle cx="19" cy="17" r="2" strokeWidth="2" />
        <circle cx="5" cy="17" r="2" strokeWidth="2" />
        <path d="M14 10l3-2M10 10L7 8M14 14l3 2M10 14l-3 2" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 'modular',
    title: 'Integración Modular',
    subtitle: 'Modular Integration',
    description: 'Integra solo los módulos que necesitas. Desde sportsbook hasta casino, pagos o gestión de usuarios. Flexibilidad total para tu negocio.',
    color: 'from-[#43e97b] to-[#38f9d7]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
        <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2" />
      </svg>
    )
  }
];

export function BusinessModel() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="business" className="py-24 bg-[#F0F2F8] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#5b7cff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b5cf6] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#5b7cff]/10 to-[#8b5cf6]/10 text-[#5b7cff] rounded-full text-sm font-semibold mb-6 border border-[#5b7cff]/20">
            MODELO DE NEGOCIOS
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Elige cómo trabajar<br />
            <span className="bg-gradient-to-r from-[#5b7cff] to-[#8b5cf6] bg-clip-text text-transparent">
              con nosotros
            </span>
          </h2>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Ofrecemos diferentes modelos de negocio adaptados a tus necesidades.<br />
            Desde soluciones llave en mano hasta integraciones personalizadas.
          </p>
        </div>

        <div className="mb-20">
          <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6 w-max">
              {businessModels.map((model) => (
                <div
                  key={model.id}
                  className="w-[300px] flex-shrink-0"
                  onClick={() => setFlippedCard(flippedCard === model.id ? null : model.id)}
                >
                  <div
                    className={`relative w-full h-[380px] transition-all duration-700 transform-style-3d ${flippedCard === model.id ? 'rotate-y-180' : ''
                      }`}
                  >
                    <div className="absolute inset-0 backface-hidden bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center text-center border border-gray-100">
                      <div className={`w-24 h-24 mb-8 bg-gradient-to-br ${model.color} rounded-2xl p-5 text-white shadow-lg`}>
                        {model.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        {model.title}
                      </h3>
                      <p className="text-[#5b7cff] font-semibold text-sm mb-6 uppercase tracking-wide">
                        {model.subtitle}
                      </p>
                      <div className="mt-auto">
                        <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                          <span>Toca para ver detalles</span>
                        </div>
                      </div>
                    </div>

                    <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br ${model.color} rounded-3xl p-6 shadow-2xl flex flex-col text-white overflow-hidden justify-center items-center text-center`}>
                      <div className="w-16 h-16 bg-white/20 rounded-xl p-3 mb-4 backdrop-blur-sm">
                        {model.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 leading-tight">
                        {model.title}
                      </h3>
                      <p className="text-white/95 text-sm leading-relaxed">
                        {model.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {businessModels.map((model) => (
              <div
                key={model.id}
                className="h-[380px] perspective-1000 group"
                onMouseEnter={() => setFlippedCard(model.id)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className={`relative w-full h-full transition-all duration-700 transform-style-3d ${flippedCard === model.id ? 'rotate-y-180' : ''
                    }`}
                >
                  <div className="absolute inset-0 backface-hidden bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center text-center border border-gray-100">
                    <div className={`w-24 h-24 mb-8 bg-gradient-to-br ${model.color} rounded-2xl p-5 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {model.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      {model.title}
                    </h3>
                    <p className="text-[#5b7cff] font-semibold text-sm mb-6 uppercase tracking-wide">
                      {model.subtitle}
                    </p>
                    <div className="mt-auto">
                      <div className="inline-flex items-center gap-2 text-gray-400 text-sm group-hover:text-[#5b7cff] transition-colors">
                        <span>Ver detalles</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br ${model.color} rounded-3xl p-8 shadow-2xl flex flex-col text-white`}>
                    <div className="flex-1">
                      <div className="w-16 h-16 bg-white/20 rounded-xl p-3 mb-6 backdrop-blur-sm">
                        {model.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 leading-tight">
                        {model.title}
                      </h3>
                      <p className="text-white/95 text-[15px] leading-relaxed mb-6">
                        {model.description}
                      </p>
                    </div>


                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-[#5b7cff] to-[#8b5cf6] rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿No estás seguro cuál modelo es mejor para ti?
          </h3>
          <a 
            href="#contact"
            className="inline-block px-10 py-4 bg-white text-[#5b7cff] rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
          >
            Contactanos
          </a>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
