import React from 'react';
import { Language } from '../types';
import ScrollReveal from './ScrollReveal';
import { MapPin, Navigation } from 'lucide-react';

interface LocationMapProps {
  lang: Language;
}

const LocationMap: React.FC<LocationMapProps> = ({ lang }) => {
  const mapLink = "https://maps.app.goo.gl/aTRX1dMsYYGmHNZH9";
  // Using a generic query for Tripoli as a fallback for the visual embed since exact coordinates from short-link aren't available without API resolution.
  const embedUrl = "https://maps.google.com/maps?q=Tripoli+Libya&t=m&z=13&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="pb-24 pt-0 bg-white dark:bg-primary-dark transition-colors duration-500">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="relative w-full h-[500px] md:h-[600px] rounded-[30px] overflow-hidden shadow-2xl group border border-gray-100 dark:border-white/10">

            {/* Map Iframe with Cinematic Filters */}
            <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800">
              <iframe
                title="Location Map"
                src={embedUrl}
                className="absolute inset-0 w-full h-full border-0 transition-transform duration-1000 group-hover:scale-105"
                style={{
                  filter: 'grayscale(100%) contrast(1.2) opacity(0.8)',
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Brand Tint Overlay */}
            <div
              className="absolute inset-0 bg-primary pointer-events-none mix-blend-multiply opacity-30 z-10"
            ></div>

            {/* Visual Center Pulse Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <span className="relative flex h-8 w-8 justify-center items-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-accent shadow-[0_0_20px_rgba(235,195,28,0.8)]"></span>
              </span>
            </div>

            {/* Floating Glass Card */}
            <div className={`absolute bottom-6 left-6 right-6 md:bottom-12 ${lang === 'en' ? 'md:left-12 md:right-auto' : 'md:right-12 md:left-auto'} md:w-[400px] p-8 rounded-2xl z-30 overflow-hidden`}>

              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-primary-dark/85 backdrop-blur-[15px]"></div>

              {/* Gold Border */}
              <div className="absolute inset-0 rounded-2xl border border-accent/30 pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10 text-center md:text-start">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-accent">
                  <MapPin size={24} />
                  <h3 className="text-xl font-bold uppercase tracking-widest">
                    {lang === 'en' ? 'Headquarters' : 'المقر الرئيسي'}
                  </h3>
                </div>

                <h4 className="text-2xl font-bold text-white mb-2">
                  {lang === 'en' ? 'Visit Our Office' : 'تفضل بزيارة مكتبنا'}
                </h4>

                <p className="text-gray-300 mb-8 font-light leading-relaxed">
                  {lang === 'en'
                    ? 'Experience the luxury of Al Maisan firsthand. We welcome you to discuss your vision in our creative space.'
                    : 'جرب فخامة الميسان بنفسك. نرحب بك لمناقشة رؤيتك في مساحتنا الإبداعية.'}
                </p>

                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-accent text-primary-dark font-bold py-4 rounded-xl hover:bg-white hover:text-primary-dark transition-all duration-300 shadow-[0_0_20px_rgba(235,195,28,0.3)] hover:shadow-[0_0_30px_rgba(235,195,28,0.5)] group/btn"
                >
                  <span>{lang === 'en' ? 'Get Directions' : 'الحصول على الاتجاهات'}</span>
                  <Navigation size={18} className="transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LocationMap;