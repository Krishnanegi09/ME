import React, { useState, useEffect } from 'react';
import { Home, Layers, Cpu, Mail, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { WhatsappIcon } from './SocialIcons';

export default function MobileBottomDock() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="mobile-bottom-dock-container" aria-label="Mobile Navigation Dock">
      <div className="mobile-bottom-dock glass-panel">
        <a 
          href="#hero" 
          className={`dock-item ${activeSection === 'hero' ? 'active' : ''}`}
          aria-label="Home"
        >
          <Home size={18} />
          <span className="dock-label">Home</span>
        </a>

        <a 
          href="#projects" 
          className={`dock-item ${activeSection === 'projects' ? 'active' : ''}`}
          aria-label="Projects"
        >
          <Layers size={18} />
          <span className="dock-label">Systems</span>
        </a>

        <a 
          href="#skills" 
          className={`dock-item ${activeSection === 'skills' ? 'active' : ''}`}
          aria-label="Skills Stack"
        >
          <Cpu size={18} />
          <span className="dock-label">Stack</span>
        </a>

        <a 
          href="#contact" 
          className={`dock-item ${activeSection === 'contact' ? 'active' : ''}`}
          aria-label="Contact"
        >
          <Mail size={18} />
          <span className="dock-label">Contact</span>
        </a>

        <a 
          href={personalInfo.socials.whatsapp.url}
          target="_blank" 
          rel="noreferrer" 
          className="dock-item dock-whatsapp"
          aria-label="Direct WhatsApp"
        >
          <WhatsappIcon size={18} />
          <span className="dock-label">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
