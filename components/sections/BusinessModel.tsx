'use client';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { NetworkBackground } from '../NetworkBackground';
import { useLanguage } from '@/components/LanguageProvider';

const businessModelIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" key="white-label">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
    <path d="M3 9h18M9 21V9" strokeWidth="2" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" key="own-brand">
    <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinejoin="round" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinejoin="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" key="affiliate">
    <circle cx="12" cy="12" r="3" strokeWidth="2" />
    <circle cx="19" cy="7" r="2" strokeWidth="2" />
    <circle cx="5" cy="7" r="2" strokeWidth="2" />
    <circle cx="19" cy="17" r="2" strokeWidth="2" />
    <circle cx="5" cy="17" r="2" strokeWidth="2" />
    <path d="M14 10l3-2M10 10L7 8M14 14l3 2M10 14l-3 2" strokeWidth="2" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" key="modular">
    <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
    <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full" key="gamification">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeWidth="2" strokeLinejoin="round" />
  </svg>
];

const businessModelColors = [
  'from-[#667eea] to-[#764ba2]',
  'from-[#f093fb] to-[#f5576c]',
  'from-[#4facfe] to-[#00f2fe]',
  'from-[#43e97b] to-[#38f9d7]',
  'from-[#fa709a] to-[#fee140]',
];

export function BusinessModel() {
  const { t } = useLanguage();
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();
  const businessModels = t.business.models;

  return (
    <section id="business" className="py-24 bg-[#F0F2F8] relative overflow-hidden">
      <NetworkBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#5b7cff]/10 to-[#8b5cf6]/10 text-[#5b7cff] rounded-full text-sm font-semibold mb-6 border border-[#5b7cff]/20">
            {t.business.badge}
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t.business.title}<br />
            <span className="bg-gradient-to-r from-[#5b7cff] to-[#8b5cf6] bg-clip-text text-transparent">
              {t.business.titleHighlight}
            </span>
          </h2>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            {t.business.subtitle}<br />
            {t.business.subtitleLine2}
          </p>
        </div>

        <div className="mb-20">
          <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6 w-max">
              {businessModels.map((model, index) => (
                <div
                  key={index}
                  className="w-[300px] flex-shrink-0"
                  onClick={() => setFlippedCard(flippedCard === String(index) ? null : String(index))}
                >
                  <div
                    className={`relative w-full h-[380px] transition-all duration-700 transform-style-3d ${flippedCard === String(index) ? 'rotate-y-180' : ''
                      }`}
                  >
                    <div className="absolute inset-0 backface-hidden bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center text-center border border-gray-100">
                      <div className={`w-24 h-24 mb-8 bg-gradient-to-br ${businessModelColors[index]} rounded-2xl p-5 text-white shadow-lg`}>
                        {businessModelIcons[index]}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        {model.title}
                      </h3>
                      <p className="text-[#5b7cff] font-semibold text-sm mb-6 uppercase tracking-wide">
                        {model.subtitle}
                      </p>
                      <div className="mt-auto">
                        <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                          <span>{t.business.tapDetails}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br ${businessModelColors[index]} rounded-3xl p-6 shadow-2xl flex flex-col text-white overflow-hidden justify-center items-center text-center`}>
                      <div className="w-16 h-16 bg-white/20 rounded-xl p-3 mb-4 backdrop-blur-sm">
                        {businessModelIcons[index]}
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

          <div className="hidden lg:block max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {businessModels.slice(0, 3).map((model, index) => (
                <div
                  key={index}
                  className="h-[380px] perspective-1000 group"
                  onMouseEnter={() => setFlippedCard(String(index))}
                  onMouseLeave={() => setFlippedCard(null)}
                >
                  <div
                    className={`relative w-full h-full transition-all duration-700 transform-style-3d ${flippedCard === String(index) ? 'rotate-y-180' : ''
                      }`}
                  >
                    <div className="absolute inset-0 backface-hidden bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center text-center border border-gray-100">
                      <div className={`w-24 h-24 mb-8 bg-gradient-to-br ${businessModelColors[index]} rounded-2xl p-5 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        {businessModelIcons[index]}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        {model.title}
                      </h3>
                      <p className="text-[#5b7cff] font-semibold text-sm mb-6 uppercase tracking-wide">
                        {model.subtitle}
                      </p>
                      <div className="mt-auto">
                        <div className="inline-flex items-center gap-2 text-gray-400 text-sm group-hover:text-[#5b7cff] transition-colors">
                          <span>{t.business.seeDetails}</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br ${businessModelColors[index]} rounded-3xl p-8 shadow-2xl flex flex-col text-white`}>
                      <div className="flex-1">
                        <div className="w-16 h-16 bg-white/20 rounded-xl p-3 mb-6 backdrop-blur-sm">
                          {businessModelIcons[index]}
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
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {businessModels.slice(3).map((model, index) => {
                const actualIndex = index + 3;
                return (
                <div
                  key={actualIndex}
                  className="h-[380px] perspective-1000 group"
                  onMouseEnter={() => setFlippedCard(String(actualIndex))}
                  onMouseLeave={() => setFlippedCard(null)}
                >
                  <div
                    className={`relative w-full h-full transition-all duration-700 transform-style-3d ${flippedCard === String(actualIndex) ? 'rotate-y-180' : ''
                      }`}
                  >
                    <div className="absolute inset-0 backface-hidden bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center text-center border border-gray-100">
                      <div className={`w-24 h-24 mb-8 bg-gradient-to-br ${businessModelColors[actualIndex]} rounded-2xl p-5 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        {businessModelIcons[actualIndex]}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        {model.title}
                      </h3>
                      <p className="text-[#5b7cff] font-semibold text-sm mb-6 uppercase tracking-wide">
                        {model.subtitle}
                      </p>
                      <div className="mt-auto">
                        <div className="inline-flex items-center gap-2 text-gray-400 text-sm group-hover:text-[#5b7cff] transition-colors">
                          <span>{t.business.seeDetails}</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br ${businessModelColors[actualIndex]} rounded-3xl p-8 shadow-2xl flex flex-col text-white`}>
                      <div className="flex-1">
                        <div className="w-16 h-16 bg-white/20 rounded-xl p-3 mb-6 backdrop-blur-sm">
                          {businessModelIcons[actualIndex]}
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
              )})}
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-[#5b7cff] to-[#8b5cf6] rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            {t.business.cta}
          </h3>
          <a 
            href="#contact"
            className="inline-block px-10 py-4 bg-white text-[#5b7cff] rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
          >
            {t.business.ctaButton}
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
