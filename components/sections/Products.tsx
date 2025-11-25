'use client';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const products = [
  {
    id: 'sportsbook',
    title: 'Sportsbook',
    description: 'Una amplia variedad de deportes, altas cuotas y cobertura en vivo de los eventos más populares',
    highlight: 'Más de 10,000 eventos al día',
    stats: '10,000+',
    statsLabel: 'Eventos diarios',
    features: ['Cuotas competitivas', 'Streaming en vivo', 'Apuestas en tiempo real'],
    icon: '🎯',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'casino',
    title: 'Casino Online',
    description: 'Tragamonedas con licencia, juegos de crash, póker y crupieres en vivo',
    highlight: '150+ proveedores, 10,400+ juegos',
    stats: '10,400+',
    statsLabel: 'Juegos disponibles',
    features: ['150+ proveedores', 'Crupieres en vivo', 'Jackpots progresivos'],
    icon: '🎰',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'licenses',
    title: 'Licencias y Regulación',
    description: 'Cumplimiento total con regulaciones internacionales y licencias de gaming',
    highlight: 'Operación legal y segura',
    stats: '100%',
    statsLabel: 'Cumplimiento legal',
    features: ['Licencias internacionales', 'Auditorías regulares', 'Juego responsable'],
    icon: '🧾',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'payments',
    title: 'Pagos Locales',
    description: 'Integración con métodos de pago locales para facilitar transacciones',
    highlight: 'Múltiples opciones de pago',
    stats: '50+',
    statsLabel: 'Métodos de pago',
    features: ['Pagos instantáneos', 'Criptomonedas', 'Transferencias locales'],
    icon: '💳',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'marketing',
    title: 'Marketing & Afiliación',
    description: 'Programas de afiliados y estrategias de marketing digital efectivas',
    highlight: 'Maximiza tu alcance',
    stats: '24/7',
    statsLabel: 'Soporte marketing',
    features: ['Programa de afiliados', 'Materiales promocionales', 'Tracking avanzado'],
    icon: '📈',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'consulting',
    title: 'Consultoría Estratégica',
    description: 'Asesoramiento experto para optimizar tu operación de iGaming',
    highlight: 'Soluciones personalizadas',
    stats: '15+',
    statsLabel: 'Años de experiencia',
    features: ['Análisis de mercado', 'Optimización de conversión', 'Estrategia de crecimiento'],
    icon: '🧠',
    gradient: 'from-violet-500 to-purple-500'
  }
];

export function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<string>('sportsbook');
  const currentProduct = products.find(p => p.id === hoveredProduct);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-[#0a0b14] to-[#1a1b2e] relative md:rounded-t-[50px]">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-3xl mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-[#5b7cff]/10 text-[#5b7cff] rounded-full text-sm font-semibold mb-6">
            PRODUCTO
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Nuestro alto índice de conversión se traduce en mayores ganancias para ti
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed">
            Después del primer depósito, los jugadores siguen con nosotros porque siempre encuentran algo interesante entre las mil opciones de entretenimiento
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
                <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{product.description}</p>
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
            {products.map((product) => (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  hoveredProduct === product.id
                    ? 'bg-gradient-to-br from-[#5b7cff] to-[#8b5cf6] scale-105 shadow-2xl shadow-[#5b7cff]/50'
                    : 'bg-[#1e1f35] hover:bg-[#2a2b45]'
                }`}
              >
                <div className={`text-6xl mb-4 transition-all ${
                  hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                }`}>
                  {product.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 transition-colors ${
                  hoveredProduct === product.id ? 'text-white' : 'text-gray-200'
                }`}>
                  {product.title}
                </h3>
                <p className={`text-sm transition-colors ${
                  hoveredProduct === product.id ? 'text-white/80' : 'text-gray-400'
                }`}>
                  {product.highlight}
                </p>
              </div>
            ))}
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e1f35] to-[#2a2b45] shadow-2xl border border-gray-800">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center transition-all duration-500">
              <div className="text-9xl mb-8 animate-pulse">
                {currentProduct?.icon}
              </div>

              <div className="mb-6">
                <div className="text-6xl font-bold text-white mb-2">
                  {currentProduct?.stats}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {currentProduct?.statsLabel}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {currentProduct?.title}
              </h3>
              <p className="text-gray-300 text-lg max-w-md">
                {currentProduct?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
