import React from 'react';
import { Zap, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="bg-redstorm-600 p-1 rounded">
              <Zap className="h-5 w-5 text-white" fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-white">
              REDSTORM <span className="text-redstorm-500">LABS</span>
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Redstorm Labs. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Based in Mombasa, Kenya.</p>
        </div>
      </div>
    </footer>
  );
};