import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';

const SocialSidebar: React.FC = () => {
  const links = [
    { ...SOCIAL_LINKS, id: 'whatsapp', icon: WhatsAppIcon, url: SOCIAL_LINKS.whatsapp, label: 'WhatsApp' },
    { ...SOCIAL_LINKS, id: 'facebook', icon: FacebookIcon, url: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { ...SOCIAL_LINKS, id: 'instagram', icon: InstagramIcon, url: SOCIAL_LINKS.instagram, label: 'Instagram' },
    { ...SOCIAL_LINKS, id: 'tiktok', icon: TikTokIcon, url: SOCIAL_LINKS.tiktok, label: 'TikTok' },
  ];

  return (
    <div className="hidden md:flex fixed left-4 md:left-8 rtl:right-4 rtl:md:right-8 rtl:left-auto top-[55%] -translate-y-1/2 flex-col items-center gap-4 md:gap-6 z-30 scale-90 md:scale-100 origin-left rtl:origin-right transition-all duration-500">
      {/* Top Line */}
      <div className="w-px h-12 md:h-24 bg-gradient-to-b from-transparent via-accent/50 to-accent"></div>

      {/* Icons */}
      <div className="flex flex-col gap-4 md:gap-6 items-center">
        {links.map((link) => {
          const isWhatsApp = link.id === 'whatsapp';
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-center rounded-full transition-all duration-300 w-9 h-9 md:w-10 md:h-10 bg-primary hover:scale-110 hover:shadow-[0_0_15px_rgba(235,195,28,0.4)] ${isWhatsApp
                ? 'border border-accent shadow-[0_0_10px_rgba(235,195,28,0.3)]'
                : 'border border-accent/30 hover:border-accent'
                }`}
              aria-label={link.label}
            >
              {isWhatsApp && (
                <span className="absolute inset-0 rounded-full border border-accent opacity-50 animate-ping"></span>
              )}

              <link.icon
                className={`transition-all duration-300 ${isWhatsApp
                  ? 'text-accent'
                  : 'text-gray-400 group-hover:text-accent'
                  }`}
                size={18}
              />

              {/* Tooltip - Hidden on mobile for better UX */}
              <span className={`hidden md:block absolute left-12 rtl:right-12 rtl:left-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-dark text-white text-xs py-1 px-3 rounded whitespace-nowrap pointer-events-none`}>
                {link.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Bottom Line */}
      <div className="w-px h-12 md:h-24 bg-gradient-to-t from-transparent via-accent/50 to-accent"></div>
    </div>
  );
};

export default SocialSidebar;