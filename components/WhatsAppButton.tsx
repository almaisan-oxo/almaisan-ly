import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { WhatsAppIcon } from './SocialIcons';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary shadow-lg transition-transform duration-300 hover:scale-110">
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full border-2 border-accent/60 animate-ripple"></div>
        <div className="absolute inset-0 rounded-full border-2 border-accent/60 animate-ripple" style={{ animationDelay: '1s' }}></div>
        
        {/* Icon */}
        <WhatsAppIcon className="text-accent relative z-10" size={32} />
      </div>
    </a>
  );
};

export default WhatsAppButton;