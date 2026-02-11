import React from 'react';
import { STATS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { Language } from '../types';

interface WhyUsProps {
  lang: Language;
}

const WhyUs: React.FC<WhyUsProps> = ({ lang }) => {
  return (
    <section id="why-us" className="py-24 bg-primary dark:bg-primary-dark text-white relative overflow-hidden transition-colors duration-500">
      {/* Decorative Gold Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #EBC31C 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20 px-4">
            <h3 className="text-sm md:text-base text-accent uppercase tracking-[0.4em] font-black mb-4">
              {lang === 'en' ? 'Who We Are' : 'من نحن'}
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight rtl:tracking-normal leading-[1.2]">
              {lang === 'en' ? (
                <>Redefining <span className="text-accent">Luxury Advertising</span></>
              ) : (
                <>نعيد تعريف <span className="text-accent">الإعلان الفاخر</span></>
              )}
            </h2>
            <p className="text-white/90 text-base md:text-xl leading-relaxed font-light px-2">
              {lang === 'en'
                ? 'Founded on the principles of excellence and innovation, Al Maisan is not just an advertising agency; we are architects of perception. We believe that every brand has a soul, a unique narrative waiting to be told with elegance and precision. Our team of visionaries combines artistic mastery with data-driven strategies to position your brand at the pinnacle of its industry.'
                : 'تأسست الميسان على مبادئ التميز والابتكار، وهي ليست مجرد وكالة إعلانات؛ نحن مهندسون للإدراك. نؤمن بأن لكل علامة تجارية روحاً وقصة فريدة تنتظر أن تُروى بأناقة ودقة. يجمع فريقنا من أصحاب الرؤى بين البراعة الفنية والاستراتيجيات المبنية على البيانات لوضع علامتك التجارية في قمة مجالها.'}
            </p>
          </div>
        </ScrollReveal>

        {/* Philosophy & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <ScrollReveal delay={200} direction="left">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-colors duration-300 h-full">
              <h3 className="text-2xl font-bold text-accent mb-4">
                {lang === 'en' ? 'Our Philosophy' : 'فلسفتنا'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {lang === 'en'
                  ? "We don't follow trends; we set them. Our philosophy is rooted in the belief that luxury is not a price point, but an experience. Every pixel, every word, and every strategy is curated to evoke desire and establish authority."
                  : "نحن لا نتبع الصيحات؛ بل نصنعها. فلسفتنا متجذرة في الإيمان بأن الفخامة ليست مجرد سعر، بل تجربة. كل بكسل، وكل كلمة، وكل استراتيجية يتم تنسيقها لإثارة الرغبة وترسيخ الهيبة."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} direction="right">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-colors duration-300 h-full">
              <h3 className="text-2xl font-bold text-accent mb-4">
                {lang === 'en' ? 'Our Vision' : 'رؤيتنا'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {lang === 'en'
                  ? "To redefine the landscape of digital advertising in the Middle East and beyond, creating a legacy of brands that define opulence and sophistication. We aim to be the silent engine behind the world's most prestigious names."
                  : "إعادة تعريف مشهد الإعلان الرقمي في الشرق الأوسط وما وراءه، وصناعة إرث من العلامات التجارية التي تُعرف الرفاهية والرقي. نهدف لأن نكون المحرك الصامت وراء أرقى الأسماء في العالم."}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-white/10 rtl:divide-x-reverse border-t border-white/10 pt-16">
          {STATS.map((stat, index) => (
            <ScrollReveal key={stat.id} delay={index * 100 + 400} direction="up">
              <div className="p-4 group">
                <div className="text-4xl md:text-6xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium tracking-wider uppercase text-white/80">
                  {lang === 'en' ? stat.labelEn : stat.labelAr}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;