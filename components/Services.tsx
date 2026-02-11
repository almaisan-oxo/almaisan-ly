import React from 'react';
import { Briefcase, Megaphone, PenTool, Camera, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import ScrollReveal from './ScrollReveal';
import { Language } from '../types';

interface ServicesProps {
  lang: Language;
}

const iconMap: Record<string, React.ReactNode> = {
  briefcase: <Briefcase size={32} />,
  megaphone: <Megaphone size={32} />,
  'pen-tool': <PenTool size={32} />,
  camera: <Camera size={32} />,
};

const Services: React.FC<ServicesProps> = ({ lang }) => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-primary-dark relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20 px-4">
            <h3 className="text-sm md:text-base text-accent uppercase tracking-[0.4em] font-black mb-4">
              {lang === 'en' ? 'Our Expertise' : 'خبراتنا'}
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white tracking-tight rtl:tracking-normal leading-[1.2]">
              {lang === 'en' ? (
                <>Excellence in <span className="text-accent">Every Detail</span></>
              ) : (
                <>التميز في <span className="text-accent">أدق التفاصيل</span></>
              )}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100} direction="up">
              <div className="group h-full p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 backdrop-blur-sm hover:border-accent/50 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl dark:shadow-none cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-primary/5 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent mb-6 group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out">
                  {iconMap[service.icon]}
                </div>

                <h3 className="text-xl font-bold mb-4 text-primary dark:text-white group-hover:text-accent transition-colors">
                  {lang === 'en' ? service.titleEn : service.titleAr}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6">
                  {lang === 'en' ? service.descEn : service.descAr}
                </p>

                <div className="flex items-center text-accent font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>{lang === 'en' ? 'Learn More' : 'اقرأ المزيد'}</span>
                  <ArrowRight size={16} className="ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;