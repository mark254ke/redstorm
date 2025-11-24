import React from 'react';
import { Mail, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-redstorm-900 to-black rounded-3xl overflow-hidden shadow-2xl relative border border-redstorm-900/50">
          
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16 relative z-10 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                  Let's Build Your MVP.
                </h2>
                <p className="text-red-100 text-lg mb-8 leading-relaxed">
                  You have the vision. I have the engineering firepower. Let's create a roadmap to get your product to market in the next 30 days.
                </p>
                
                <div className="space-y-6 mb-12">
                   <div className="flex items-center gap-3 text-red-100">
                     <CheckCircle2 className="h-5 w-5 text-redstorm-500" />
                     <span>Free 15-Minute Technical Strategy Session</span>
                   </div>
                   <div className="flex items-center gap-3 text-red-100">
                     <CheckCircle2 className="h-5 w-5 text-redstorm-500" />
                     <span>Confidential Idea Feasibility Audit</span>
                   </div>
                   <div className="flex items-center gap-3 text-red-100">
                     <CheckCircle2 className="h-5 w-5 text-redstorm-500" />
                     <span>Rough Cost & Timeline Estimate</span>
                   </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                 <p className="text-sm text-red-300 uppercase tracking-widest font-bold">Contact Directly</p>
                 <a href="mailto:mark@redstormlabs.com" className="flex items-center gap-3 text-white font-bold text-xl hover:text-redstorm-400 transition-colors">
                   <Mail className="h-6 w-6" /> mark@redstormlabs.com
                 </a>
              </div>
            </div>

            <div className="bg-white p-10 lg:p-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Strategy Session</h3>
              <p className="text-gray-500 mb-8 text-sm">No sales pressure. Just engineering talk.</p>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" className="block w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 border focus:ring-2 focus:ring-redstorm-500 focus:border-redstorm-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="block w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 border focus:ring-2 focus:ring-redstorm-500 focus:border-redstorm-500 outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-bold text-gray-700 mb-1">Project Idea (Brief)</label>
                  <textarea id="project" rows={3} className="block w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 border focus:ring-2 focus:ring-redstorm-500 focus:border-redstorm-500 outline-none transition-all" placeholder="I want to build an AI that..."></textarea>
                </div>
                <button type="button" className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-black hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-200">
                  Request Free Call <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  Limited slots available for {new Date().toLocaleString('default', { month: 'long' })}.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};