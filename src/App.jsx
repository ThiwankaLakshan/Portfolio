import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white font-inter">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Thiwanka Lakshan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
