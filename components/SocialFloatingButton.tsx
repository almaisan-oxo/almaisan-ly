import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';

const SocialFloatingButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const socialActions = [
        { id: 'whatsapp', icon: WhatsAppIcon, url: SOCIAL_LINKS.whatsapp, label: 'WhatsApp', color: '#EBC31C' },
        { id: 'facebook', icon: FacebookIcon, url: SOCIAL_LINKS.facebook, label: 'Facebook', color: '#1877F2' },
        { id: 'instagram', icon: InstagramIcon, url: SOCIAL_LINKS.instagram, label: 'Instagram', color: '#E4405F' },
        { id: 'tiktok', icon: TikTokIcon, url: SOCIAL_LINKS.tiktok, label: 'TikTok', color: '#000000' },
    ];

    return (
        <div className="md:hidden fixed bottom-6 right-6 z-[999] flex flex-col items-center gap-4">
            {/* Social Icons List */}
            <div className={`flex flex-col-reverse items-center gap-4 transition-all duration-500 origin-bottom ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-0 translate-y-10 pointer-events-none'}`}>
                {socialActions.map((action, index) => {
                    const isWhatsApp = action.id === 'whatsapp';
                    return (
                        <a
                            key={action.id}
                            href={action.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${isWhatsApp ? 'bg-accent text-primary-dark ring-2 ring-accent/50 ring-offset-2 ring-offset-primary-dark' : 'bg-primary-dark/90 text-white backdrop-blur-md border border-white/10'
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            aria-label={action.label}
                        >
                            <action.icon size={22} />
                            {isWhatsApp && (
                                <span className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-40"></span>
                            )}
                        </a>
                    );
                })}
            </div>

            {/* Main Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-105 active:scale-95 z-10 ${isOpen ? 'bg-primary-dark rotate-45' : 'bg-accent'
                    }`}
            >
                <div className={`transition-all duration-500 ${isOpen ? 'text-white' : 'text-primary-dark'}`}>
                    {isOpen ? <X size={28} /> : <Plus size={32} strokeWidth={2.5} />}
                </div>

                {/* Pulsing effect when closed to attract attention */}
                {!isOpen && (
                    <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping opacity-60"></div>
                )}
            </button>
        </div>
    );
};

export default SocialFloatingButton;
