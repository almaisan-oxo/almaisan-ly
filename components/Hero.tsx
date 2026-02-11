import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral via-white to-gray-200 dark:from-primary-dark dark:via-[#0f382e] dark:to-black transition-colors duration-700"></div>

        {/* Decorative animated blobs - Adjusted for mobile */}
        <div className="absolute top-[-10%] left-[-20%] md:left-[-10%] w-[80%] md:w-[50%] h-[50%] bg-accent/10 md:bg-accent/20 rounded-full blur-[100px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-20%] md:right-[-10%] w-[80%] md:w-[50%] h-[50%] bg-primary/10 md:bg-primary/20 dark:bg-accent/5 md:dark:bg-accent/10 rounded-full blur-[100px] md:blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center h-full pt-16 md:pt-0">
        <ScrollReveal delay={200}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-primary dark:text-white leading-[1.15] md:leading-none mb-8 md:mb-10 tracking-tight rtl:tracking-normal max-w-[95%] mx-auto">
            {lang === 'en' ? (
              <>
                We Craft <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#cfa815]">Your Vision</span>
              </>
            ) : (
              <>
                نصوغ <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#cfa815]">رؤيتك</span> ببراعة
              </>
            )}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300/90 mb-10 md:mb-14 font-light leading-relaxed px-4">
            {lang === 'en'
              ? 'AL MAISAN is a premier advertising agency bridging the gap between imagination and reality through luxury design and strategic innovation.'
              : 'الميسان هي وكالة إعلان رائدة تسد الفجوة بين الخيال والواقع من خلال التصميم الفاخر والابتكار الاستراتيجي.'
            }
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-10 md:px-12 py-4 md:py-5 bg-accent text-primary-dark font-black text-base md:text-lg rounded-full overflow-hidden group shadow-[0_10px_30px_rgba(235,195,28,0.4)] hover:shadow-[0_15px_40px_rgba(235,195,28,0.6)] transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10 flex items-center">
              {lang === 'en' ? 'Start Your Project' : 'ابدأ مشروعك'}
            </span>
            <div className="absolute inset-0 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
          </button>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary dark:text-white opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;