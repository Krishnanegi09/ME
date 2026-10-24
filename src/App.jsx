import React from 'react';
import ScrollCanvas from './components/ScrollCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomDock from './components/MobileBottomDock';

export default function App() {
  return (
    <div className="portfolio-app-root">
      {/* 4K Background Animation & Cinematic 20% Black Tint */}
      <ScrollCanvas />

      {/* Main Interactive Foreground */}
      <div className="portfolio-foreground-layer">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <MobileBottomDock />
      </div>
    </div>
  );
}
