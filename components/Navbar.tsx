import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Language, Theme, View } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  currentView: View;
  setView: (v: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, setTheme, currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleNavigation = (id: string) => {
    setIsMenuOpen(false);

    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    setView('home');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled || currentView !== 'home'
          ? 'bg-white/80 dark:bg-primary-dark/85 backdrop-blur-md shadow-lg py-3 md:py-4'
          : 'bg-transparent py-4 md:py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            className="cursor-pointer group relative z-50 flex items-center"
            onClick={goHome}
          >
            <img
              src={theme === 'dark' ? '/logo-dark.png' : '/logo.png'}
              alt="AL MAISAN"
              className="h-10 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-sm font-medium uppercase tracking-widest text-primary dark:text-neutral/80 hover:text-accent dark:hover:text-accent transition-colors relative group"
              >
                {lang === 'en' ? item.labelEn : item.labelAr}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4 border-l rtl:border-r rtl:border-l-0 border-gray-300 dark:border-gray-700 pl-6 rtl:pr-6">
            <button
              onClick={toggleLang}
              className="relative overflow-hidden flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 dark:border-white/20 text-primary dark:text-white hover:border-accent hover:text-primary-dark transition-all duration-300 group bg-transparent"
              aria-label="Switch Language"
            >
              <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 flex items-center gap-2">
                <Globe size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-xs font-bold tracking-widest pt-0.5">{lang === 'en' ? 'AR' : 'EN'}</span>
              </span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-gray-300 dark:border-white/20 text-primary dark:text-white hover:border-primary dark:hover:border-accent hover:bg-primary dark:hover:bg-accent hover:text-white dark:hover:text-primary-dark transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-primary dark:text-white relative z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-white dark:bg-primary-dark transform transition-all duration-700 ease-in-out flex flex-col items-center justify-between py-12 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } md:hidden`}
      >
        {/* Elegant Close Button Inside Menu */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 rtl:left-6 rtl:right-auto p-3 rounded-full border border-primary/10 dark:border-white/10 text-primary dark:text-white hover:bg-accent hover:text-primary-dark transition-all duration-300"
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center gap-6 w-full px-6 flex-grow justify-center mt-8">
          {NAV_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className="text-3xl font-black text-primary dark:text-white hover:text-accent transition-all transform hover:scale-105 duration-300 uppercase tracking-tight rtl:tracking-normal w-full text-center py-2"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {lang === 'en' ? item.labelEn : item.labelAr}
            </button>
          ))}
        </div>

        <div className="w-full px-6 pb-6 flex flex-col items-center gap-4">
          <div className="w-12 h-1 bg-accent/30 rounded-full mb-2"></div>

          <div className="grid grid-cols-1 gap-3 w-full max-w-xs">
            <button
              onClick={toggleLang}
              className="flex items-center gap-4 text-base font-bold text-primary dark:text-white bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 px-8 py-3.5 rounded-2xl hover:border-accent hover:text-accent transition-all justify-center w-full"
            >
              <Globe size={20} />
              <span>{lang === 'en' ? 'العربية' : 'Switch to English'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="flex items-center gap-4 text-base font-bold text-primary dark:text-white bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 px-8 py-3.5 rounded-2xl hover:border-accent hover:text-accent transition-all justify-center w-full"
            >
              {theme === 'light' ? (
                <>
                  <Moon size={20} />
                  <span>{lang === 'en' ? 'Dark Mode' : 'الوضع الليلي'}</span>
                </>
              ) : (
                <>
                  <Sun size={20} />
                  <span>{lang === 'en' ? 'Light Mode' : 'الوضع النهاري'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;