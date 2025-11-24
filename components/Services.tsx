import React from 'react';
import { Brain, Code, Smartphone, Rocket, ExternalLink, ChefHat } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'ai-mvp',
    title: 'Rapid MVP Development',
    description: 'We don\'t just build prototypes; we build scalable v1 products. Using high-performance backend stacks (Python, FastAPI, PostgreSQL), we launch your core value proposition fast.',
    icon: Rocket
  },
  {
    id: 'mobile-web',
    title: 'Cross-Platform Mobile',
    description: 'Beautiful, native-compiled applications for iOS and Android using Flutter. One codebase, two platforms, half the maintenance cost.',
    icon: Smartphone
  },
  {
    id: 'custom-ai',
    title: 'LLM & AI Integration',
    description: 'From RAG chatbots to predictive models. We integrate Gemini and OpenAI APIs directly into your Python business logic to automate complex tasks.',
    icon: Brain
  },
  {
    id: 'full-stack',
    title: 'Technical Rescue',
    description: 'Have a buggy legacy codebase? We audit, refactor, and modernize existing applications to handle scale and improve security.',
    icon: Code
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
             <h2 className="text-base text-redstorm-500 font-bold tracking-wide uppercase mb-2">Our Expertise</h2>
             <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
               Premium Engineering, <br/>
               <span className="text-gray-500">Startup Economics.</span>
             </h3>
             <p className="text-xl text-gray-400 leading-relaxed mb-8">
               Most agencies over-engineer and over-charge. Redstorm Labs focuses on the "Minimum" in MVP—delivering exactly what you need to test the market, with code quality that scales when you succeed.
             </p>
             <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="text-white font-semibold border-b-2 border-redstorm-500 pb-1 hover:text-redstorm-500 transition-colors">
               Explore our tech stack &rarr;
             </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {services.map((service) => (
               <div key={service.id} className="bg-dark-800 p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all hover:bg-dark-700">
                 <service.icon className="h-8 w-8 text-redstorm-500 mb-4" />
                 <h4 className="text-white font-bold text-lg mb-2">{service.title}</h4>
                 <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Featured Case Study */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800">
           <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-redstorm-600/10 rounded-full blur-3xl"></div>
           
           <div className="lg:grid lg:grid-cols-2">
             <div className="p-10 lg:p-16 flex flex-col justify-center relative z-10">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-redstorm-900/30 text-redstorm-400 text-xs font-bold uppercase tracking-wider w-fit mb-6">
                 <ChefHat className="h-4 w-4" /> Featured Case Study
               </div>
               <h3 className="text-3xl font-extrabold text-white mb-4">Kitchen Genius</h3>
               <p className="text-gray-400 text-lg mb-8">
                 An AI-powered culinary assistant that reduces food waste. Users snap a photo of their fridge, and our custom vision model identifies ingredients to suggest optimized recipes.
               </p>
               
               <div className="flex flex-wrap gap-3 mb-8">
                 <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-mono">Flutter</span>
                 <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-mono">Gemini Vision</span>
                 <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-mono">FastAPI</span>
                 <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-mono">PostgreSQL</span>
               </div>

               <div className="flex items-center gap-4">
                 <div className="flex -space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black flex items-center justify-center text-xs font-bold text-white">MVP</div>
                 </div>
                 <span className="text-gray-500 text-sm">Deployed in 3 weeks</span>
               </div>
             </div>
             
             <div className="relative h-64 lg:h-auto bg-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1000" 
                  alt="Kitchen Genius App Interface Concept" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};