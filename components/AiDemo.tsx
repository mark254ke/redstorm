import React, { useState } from 'react';
import { analyzeProjectIdea } from '../services/geminiService';
import { AnalysisResult } from '../types';
import { Loader2, Send, Sparkles } from 'lucide-react';

export const AiDemo: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const analysis = await analyzeProjectIdea(idea);
      setResult(analysis);
    } catch (err) {
      setError("Failed to analyze idea. Please ensure API Key is configured or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-redstorm-600 to-transparent opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-redstorm-900/30 rounded-lg mb-4">
            <Sparkles className="h-6 w-6 text-redstorm-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Validate Your Idea Instantly
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Experience our engineering capability. Enter a product idea, and our AI agent (powered by Gemini) will generate a technical feasibility report.
          </p>
        </div>

        <div className="bg-dark-800 rounded-2xl p-6 md:p-10 border border-gray-800 shadow-2xl">
          <form onSubmit={handleAnalyze} className="relative">
            <label htmlFor="idea" className="sr-only">Project Idea</label>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                id="idea"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g., An AI app that scans fridge ingredients and suggests recipes..."
                className="flex-1 bg-dark-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-redstorm-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                disabled={loading || !idea.trim()}
                className="bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]"
              >
                {loading ? <Loader2 className="animate-spin h-5 w-5" /> : <><Send className="h-5 w-5" /> Analyze</>}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-900/20 border border-red-900/50 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-dark-900 p-4 rounded-lg border border-gray-800">
                  <span className="text-xs font-mono text-gray-500 uppercase">Feasibility</span>
                  <div className={`text-xl font-bold mt-1 ${result.feasibility === 'High' ? 'text-green-500' : 'text-yellow-500'}`}>
                    {result.feasibility}
                  </div>
                </div>
                <div className="bg-dark-900 p-4 rounded-lg border border-gray-800">
                  <span className="text-xs font-mono text-gray-500 uppercase">Est. Timeline</span>
                  <div className="text-xl font-bold text-white mt-1">{result.estimatedTime}</div>
                </div>
                <div className="bg-dark-900 p-4 rounded-lg border border-gray-800">
                  <span className="text-xs font-mono text-gray-500 uppercase">Primary Stack</span>
                  <div className="text-sm font-medium text-white mt-2 flex flex-wrap gap-2">
                    {result.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-gray-800 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-900 p-6 rounded-lg border border-gray-800">
                <h4 className="text-redstorm-500 font-bold mb-2 text-sm uppercase tracking-wider">Redstorm Assessment</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {result.summary}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800 text-right">
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="text-white text-sm font-semibold hover:text-redstorm-400 underline decoration-redstorm-500 decoration-2 underline-offset-4">
                    Build this with Mark &rarr;
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};