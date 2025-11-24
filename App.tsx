import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Services } from './components/Services';
import { AiDemo } from './components/AiDemo';
import { Founder } from './components/Founder';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-redstorm-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <AiDemo />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;