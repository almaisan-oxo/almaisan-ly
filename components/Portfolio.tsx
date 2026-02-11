import React from 'react';
import { PROJECTS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { Language } from '../types';

interface PortfolioProps {
  lang: Language;
}

const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  return (
    <section id="portfolio" className="py-24 bg-neutral dark:bg-[#0b2620] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 text-center md:text-start">
          <ScrollReveal>
            <div className="mb-8 md:mb-0">
              <h3 className="text-sm md:text-base text-accent uppercase tracking-[0.4em] font-black mb-3">
                {lang === 'en' ? 'Selected Work' : 'أعمال مختارة'}
              </h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white tracking-tight rtl:tracking-normal leading-tight">
                {lang === 'en' ? (
                  <>Our <span className="text-accent">Masterpieces</span></>
                ) : (
                  <>روائعنا <span className="text-accent">الإبداعية</span></>
                )}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="left">
            <button className="text-primary dark:text-white border-b border-accent hover:text-accent transition-colors pb-1 text-lg">
              {lang === 'en' ? 'View All Projects' : 'عرض جميع المشاريع'}
            </button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer">
                <img
                  src={project.image}
                  alt={lang === 'en' ? project.titleEn : project.titleAr}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-accent text-sm font-semibold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {lang === 'en' ? project.categoryEn : project.categoryAr}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    {lang === 'en' ? project.titleEn : project.titleAr}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;