import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import BackToTop from './components/BackToTop';
import Starfield from './components/Starfield';

const getActiveProjectFromHash = () => {
  if (typeof window === 'undefined') return null;
  const hash = window.location.hash;
  if (hash.startsWith('#/project/')) {
    return hash.replace('#/project/', '');
  } else if (hash.startsWith('#project/')) {
    return hash.replace('#project/', '');
  }
  return null;
};

function App() {
  const [activeProjectSlug, setActiveProjectSlug] = useState(getActiveProjectFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveProjectSlug(getActiveProjectFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToHome = () => {
    window.location.hash = '#projects';
  };

  return (
    <div className="bg-[#0d1117] min-h-screen text-white font-inter flex flex-col justify-between overflow-x-hidden">
      <Starfield />
      <div>
        <AnimatePresence mode="wait">
          {activeProjectSlug ? (
            <ProjectDetail 
              key={activeProjectSlug}
              slug={activeProjectSlug} 
              onBack={handleBackToHome} 
            />
          ) : (
            <div key="portfolio-home">
              <Navbar />
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </div>
          )}
        </AnimatePresence>
      </div>

      <BackToTop />

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Thiwanka Lakshan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
