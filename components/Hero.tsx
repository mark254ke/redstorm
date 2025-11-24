import React from 'react';
import { ArrowRight, Cpu, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden mesh-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-redstorm-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-redstorm-950/50 border border-redstorm-500/30 text-redstorm-200 text-sm font-semibold mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-redstorm-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-redstorm-500"></span>
          </span>
          Only 2 Project Slots Open for This Month
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
          SHIP YOUR AI MVP <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-redstorm-500 via-orange-500 to-yellow-500">
             IN WEEKS, NOT MONTHS.
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
          Redstorm Labs is the engineering partner for ambitious founders. 
          We build production-grade AI solutions like <span className="text-white font-semibold underline decoration-redstorm-500 decoration-2 underline-offset-4">Kitchen Genius</span> without the agency bloat.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-4">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-redstorm-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redstorm-600 hover:bg-redstorm-500 hover:scale-105 active:scale-95">
            Book Free Strategy Session
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute -inset-3 rounded-xl bg-redstorm-400 opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-200" />
          </button>
          
          <button onClick={() => document.getElementById('demo')?.scrollIntoView({behavior: 'smooth'})} className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-300 transition-all duration-200 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
            <Cpu className="mr-2 h-5 w-5" />
            Try AI Project Validator
          </button>
        </div>

        {/* Featured Credibility Badge */}
        <div className="mt-16 flex flex-col items-center animate-fade-in-up">
           <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Engineering powered by</p>
           <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <span className="font-mono font-bold text-xl text-white">Google Gemini</span>
              <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
              <span className="font-mono font-bold text-xl text-white">Flutter</span>
              <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
              <span className="font-mono font-bold text-xl text-white">T.U.M. CS</span>
              <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
              <span className="font-mono font-bold text-xl text-white">FastAPI</span>
           </div>
        </div>
      </div>
    </section>
  );
};