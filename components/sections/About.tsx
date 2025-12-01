"use client";
import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { NetworkBackground } from "../NetworkBackground";
import { useLanguage } from "@/components/LanguageProvider";

export function About() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="bg-[#F0F2F8] pb-24 relative z-20 rounded-t-[40px] md:rounded-t-[80px] pt-24 overflow-hidden"
    >
      <NetworkBackground />
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div
          ref={headerRef}
          className={`flex justify-center mb-4 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-[#5b7cff]/10 text-[#5b7cff] rounded-full text-sm font-semibold">
            {t.about.badge}
          </span>
        </div>

        <p className="text-base text-gray-500 text-center mb-6 max-w-2xl mx-auto">
          {t.about.subtitle}
        </p>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
          {t.about.description.split('Eternelle System').map((part, i, arr) => (
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <span className="font-semibold text-[#5b7cff]">Eternelle System</span>
              </span>
            ) : part
          ))}
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div
            className={`bg-white/50 backdrop-blur-sm rounded-[24px] p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionProperty: isVisible ? "all" : "opacity, transform",
              transitionDuration: isVisible ? "0.3s" : "0.5s",
              transitionDelay: isVisible ? "0s" : "0.2s",
            }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#5b7cff] to-[#4a6bef] rounded-lg flex items-center justify-center mb-5 shadow-lg hover:scale-110 transition-transform duration-300">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.about.mission}</h3>
            <p className="text-gray-600 leading-relaxed text-[15px] mb-3">
              {t.about.missionText1}
            </p>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              {t.about.missionText2}
            </p>
          </div>

          <div className="space-y-6">
            <div
              className={`bg-white/50 backdrop-blur-sm rounded-[24px] p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionProperty: isVisible ? "all" : "opacity, transform",
                transitionDuration: isVisible ? "0.3s" : "0.5s",
                transitionDelay: isVisible ? "0s" : "0.4s",
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-lg flex items-center justify-center mb-5 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.about.vision}</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {t.about.visionText}
              </p>
            </div>

            <div
              className={`bg-white/50 backdrop-blur-sm rounded-[24px] p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionProperty: isVisible ? "all" : "opacity, transform",
                transitionDuration: isVisible ? "0.3s" : "0.5s",
                transitionDelay: isVisible ? "0s" : "0.6s",
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-lg flex items-center justify-center mb-5 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.about.values}</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {t.about.valuesText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
