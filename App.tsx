import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SocialSidebar from './components/SocialSidebar';
import SocialFloatingButton from './components/SocialFloatingButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { Language, Theme, View } from './types';

const App: React.FC = () => {
  // Initialize state from local storage or defaults
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'ar') return saved;
    // Auto-detect browser language
    const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
    return browserLang;
  });

  const [theme, setTheme] = useState<Theme>(() => {
    // Check local storage or system preference
    if (localStorage.getItem('theme') === 'dark') return 'dark';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light'; // Default to light mode as per requirements
  });

  const [currentView, setView] = useState<View>('home');

  // Effect to handle Language changes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);

    // Change font based on language
    if (lang === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-arabic');
    }
  }, [lang]);

  // Effect to handle Theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Render content based on current view
  const renderContent = () => {
    switch (currentView) {
      case 'privacy':
        return <PrivacyPolicy lang={lang} />;
      case 'terms':
        return <TermsOfService lang={lang} />;
      case 'home':
      default:
        return (
          <main>
            <Hero lang={lang} />
            <Services lang={lang} />
            <Portfolio lang={lang} />
            <WhyUs lang={lang} />
            <Contact lang={lang} />
            <LocationMap lang={lang} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative transition-colors duration-500">
      <CustomCursor />

      {/* Social Media Elements */}
      <SocialSidebar />
      <SocialFloatingButton />

      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        currentView={currentView}
        setView={setView}
      />

      <div className="w-full">
        {renderContent()}
      </div>

      <Footer lang={lang} setView={setView} />
    </div>
  );
};

export default App;