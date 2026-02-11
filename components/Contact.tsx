import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Language } from '../types';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const labels = {
    title: lang === 'en' ? "Let's Create History" : 'لنصنع التاريخ معاً',
    subtitle: lang === 'en' ? 'Ready to elevate your brand? Get in touch.' : 'جاهز للارتقاء بعلامتك التجارية؟ تواصل معنا.',
    email: lang === 'en' ? 'Email Us' : 'راسلنا',
    phone: lang === 'en' ? 'Call Us' : 'اتصل بنا',
    address: lang === 'en' ? 'Visit Us' : 'زرنا',
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: labels.phone,
      value: '+218 91 600 3838',
      link: 'tel:+218916003838',
      dir: 'ltr'
    },
    {
      icon: <Mail size={24} />,
      title: labels.email,
      value: 'almaisan.ly@gmail.com',
      link: 'mailto:almaisan.ly@gmail.com',
      dir: 'ltr'
    },
    {
      icon: <MapPin size={24} />,
      title: labels.address,
      value: lang === 'en' ? 'Tripoli, Libya' : 'طرابلس، ليبيا',
      link: 'https://maps.app.goo.gl/aTRX1dMsYYGmHNZH9',
      dir: lang === 'en' ? 'ltr' : 'rtl'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-primary-dark transition-colors duration-500 relative">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-12 md:mb-16 px-4">
            <h3 className="text-xs md:text-sm text-accent uppercase tracking-[0.3em] font-bold mb-4">
              {lang === 'en' ? 'Contact Us' : 'تواصل معنا'}
            </h3>
            <h2 className="text-3xl md:text-6xl font-bold text-primary dark:text-white mb-6 md:mb-8 tracking-tight rtl:tracking-normal leading-tight">
              {lang === 'en' ? (
                <>Let's Create <span className="text-accent">History</span></>
              ) : (
                <>لنصنع <span className="text-accent">التاريخ</span> معاً</>
              )}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
              {labels.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {contactInfo.map((info, index) => (
            <ScrollReveal key={index} delay={index * 100 + 200} direction="up">
              <a
                href={info.link || undefined}
                target={info.link?.startsWith('http') ? '_blank' : undefined}
                rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`block h-full p-8 rounded-2xl bg-neutral dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-accent/50 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 group ${!info.link ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/5 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {info.icon}
                </div>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-3">{info.title}</h4>
                <p className={`text-gray-600 dark:text-gray-400 font-medium ${info.dir === 'ltr' ? 'font-sans' : ''}`} dir={info.dir}>
                  {info.value}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Simplified Social Links for Mobile/Extra Reach */}
        <ScrollReveal delay={500}>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-70 hover:opacity-100 transition-opacity">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-primary dark:text-white hover:text-accent transition-colors">Instagram</a>
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-primary dark:text-white hover:text-accent transition-colors">Facebook</a>
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-primary dark:text-white hover:text-accent transition-colors">TikTok</a>
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-primary dark:text-white hover:text-accent transition-colors">WhatsApp</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;