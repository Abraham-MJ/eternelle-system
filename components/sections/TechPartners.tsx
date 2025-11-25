'use client';

import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function TechPartners() {
  const brands = [
    { name: 'Fast Track', image: '/brands/fast-track-transformed.webp' },
    { name: 'Cellxpert', image: '/brands/cellxpert-logo.webp' },
    { name: 'Solitics', image: '/brands/solitics1.webp' },
    { name: 'Jumio', image: '/brands/Jumio23-RGB.webp' },
    { name: 'Covery', image: '/brands/covery_solve_fraud.webp' },
    { name: 'Workanova', image: '/brands/WorkanovaNewLogo-2.webp' },
    { name: 'Pact', image: '/brands/pact.webp' },
    { name: 'Rapidpace', image: '/brands/rapidpace-logo-1.webp' },
    { name: 'LiveChat', image: '/brands/livechat.webp' },
    { name: 'Cloudflare', image: '/brands/cloudflare.png' },
    { name: 'SendGrid', image: '/brands/sendgrid.webp' },
    { name: 'Metabase', image: '/brands/metabase.png' },
  ];
  
  const row1 = [brands[0], brands[1], brands[2], brands[3]];
  const row2 = [brands[4], brands[5], brands[6], brands[7]];
  const row3 = [brands[8], brands[9], brands[10], brands[11]];
  
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="tech" className="py-24 bg-gradient-to-br from-[#0a0d1a] via-[#0f1420] to-[#1a1028] overflow-hidden relative md:rounded-t-[50px]">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(91, 124, 255, 0.4) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#5b7cff] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
            Tecnologías y Partners
          </h2>
          <p className="text-gray-400 text-lg">Integraciones de clase mundial para máxima confiabilidad</p>
        </div>
        
        <div className="space-y-8">
          <div className="relative overflow-hidden py-2" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="flex gap-8 animate-[scroll-right_30s_linear_infinite]">
              {[...row1, ...row1, ...row1].map((brand, i) => (
                <div key={i} className="flex-shrink-0 w-44 h-20 bg-white rounded-xl flex items-center justify-center border border-white/20 hover:scale-105 transition-all duration-300 group relative p-4">
                  <Image 
                    src={brand.image} 
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain relative z-10"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden py-2" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="flex gap-8 animate-[scroll-right_30s_linear_infinite]" style={{ animationDelay: '-15s' }}>
              {[...row2, ...row2, ...row2].map((brand, i) => (
                <div key={i} className="flex-shrink-0 w-44 h-20 bg-white rounded-xl flex items-center justify-center border border-white/20 hover:scale-105 transition-all duration-300 group relative p-4">
                  <Image 
                    src={brand.image} 
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain relative z-10"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden py-2" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="flex gap-8 animate-[scroll-left_30s_linear_infinite]">
              {[...row3, ...row3, ...row3].map((brand, i) => (
                <div key={i} className="flex-shrink-0 w-44 h-20 bg-white rounded-xl flex items-center justify-center border border-white/20 hover:scale-105 transition-all duration-300 group relative p-4">
                  <Image 
                    src={brand.image} 
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain relative z-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
