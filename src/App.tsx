import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AIMediaShowcase from './components/AIMediaShowcase';
import GameShowcase from './components/GameShowcase';
import MusicPlayer from './components/MusicPlayer';
import About from './components/About';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <ParticleBackground />
          <Navigation />
          <main>
            <Hero />
            <AIMediaShowcase />
            <GameShowcase />
            <MusicPlayer />
            <About />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
