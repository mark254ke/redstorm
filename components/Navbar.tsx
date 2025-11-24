import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <div className="bg-redstorm-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Zap className="h-6 w-6 text-white" fill="currentColor" />
            </div>
            <span className="font-bold text-2xl tracking-tighter text-white">
              REDSTORM <span className="text-redstorm-500">LABS</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollTo('services')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Case Studies</button>
              <button onClick={() => scrollTo('demo')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">AI Demo</button>
              <button onClick={() => scrollTo('about')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Why Mark?</button>
              <button 
                onClick={() => scrollTo('contact')}
                className="bg-white hover:bg-gray-200 text-black px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                Book Strategy Call
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-900 border-b border-gray-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollTo('services')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Case Studies</button>
            <button onClick={() => scrollTo('demo')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">AI Demo</button>
            <button onClick={() => scrollTo('about')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Why Mark?</button>
            <button onClick={() => scrollTo('contact')} className="bg-redstorm-600 text-white font-bold block px-3 py-3 mt-4 rounded-md text-base w-full text-center">Book Strategy Call</button>
          </div>
        </div>
      )}
    </nav>
  );
};