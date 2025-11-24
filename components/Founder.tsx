import React from 'react';
import { Award, Code2, Rocket, GraduationCap } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 relative mb-12 lg:mb-0">
            <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                <div className="aspect-[4/5] bg-gray-800 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000" 
                    alt="Mark Karuga" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-2xl font-bold text-white">Mark Karuga</p>
                    <p className="text-redstorm-500 font-mono text-sm">Founder & Lead Architect</p>
                  </div>
                </div>
            </div>
            
            {/* Trust Badges */}
            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              <div className="bg-dark-800 px-4 py-2 rounded-lg border border-gray-800 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-bold text-gray-300">TUM C.S.</span>
              </div>
              <div className="bg-dark-800 px-4 py-2 rounded-lg border border-gray-800 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-bold text-gray-300">Python & Flutter</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <h2 className="text-base text-redstorm-500 font-bold tracking-wide uppercase mb-2">The Engineer's Perspective</h2>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
              "I build software that <br/>
              <span className="text-gray-500">solves actual problems."</span>
            </h2>
            
            <div className="prose prose-lg prose-invert text-gray-400 mb-10">
              <p>
                Hi, I'm Mark. While others are busy making slide decks, I'm deploying code.
              </p>
              <p>
                As a Computer Science scholar at the <strong>Technical University of Mombasa</strong>, I combine deep theoretical knowledge of algorithms with a relentless drive for shipping products. Redstorm Labs isn't a traditional agency—it's an agile engineering unit.
              </p>
              <p>
                My philosophy is simple: <strong>Speed wins.</strong> I use the latest AI tools to cut development time by 50%, passing those savings directly to you. When you work with me, you aren't hiring a corporation; you're partnering with a dedicated architect committed to your vision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-4 bg-dark-900 rounded-xl border-l-2 border-redstorm-500">
                 <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                   <Rocket className="h-4 w-4 text-redstorm-500" /> Agile Velocity
                 </h4>
                 <p className="text-sm text-gray-500">I ship features in days, leveraging pre-built modules and AI code generation.</p>
               </div>
               <div className="p-4 bg-dark-900 rounded-xl border-l-2 border-redstorm-500">
                 <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                   <Award className="h-4 w-4 text-redstorm-500" /> Quality First
                 </h4>
                 <p className="text-sm text-gray-500">Academic rigor means your code is clean, documented, and scalable from Day 1.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};