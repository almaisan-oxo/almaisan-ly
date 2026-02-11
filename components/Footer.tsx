import React from 'react';
import { Language, View } from '../types';
import { SOCIAL_LINKS } from '../constants';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';

interface FooterProps {
  lang: Language;
  setView: (v: View) => void;
}

const Footer: React.FC<FooterProps> = ({ lang, setView }) => {
  const socialItems = [
    { icon: InstagramIcon, url: SOCIAL_LINKS.instagram },
    { icon: FacebookIcon, url: SOCIAL_LINKS.facebook },
    { icon: WhatsAppIcon, url: SOCIAL_LINKS.whatsapp },
    { icon: TikTokIcon, url: SOCIAL_LINKS.tiktok },
  ];

  const handleLinkClick = (e: React.MouseEvent, view: View) => {
    e.preventDefault();
    setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-white pt-20 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="mb-8 md:mb-0">
            <img
              src="/logo-dark.png"
              alt="AL MAISAN"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          <div className="flex space-x-6 rtl:space-x-reverse">
            {socialItems.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#EBC31C] hover:to-[#ffe47a] hover:border-[#EBC31C] hover:text-primary-dark transition-all duration-300 group"
              >
                <item.icon className="group-hover:scale-110 transition-transform duration-300" size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            &copy; 2025 AL MAISAN. {lang === 'en' ? 'All Rights Reserved.' : 'جميع الحقوق محفوظة.'}
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse">
            <button onClick={(e) => handleLinkClick(e, 'privacy')} className="hover:text-accent transition-colors">
              {lang === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
            </button>
            <button onClick={(e) => handleLinkClick(e, 'terms')} className="hover:text-accent transition-colors">
              {lang === 'en' ? 'Terms of Service' : 'شروط الخدمة'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
