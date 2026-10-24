import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <strong>{personalInfo.name}</strong>. All rights reserved.
          </p>
          <p className="footer-meta">
            Designed &amp; Architected with React 19, Vite, and hardware-accelerated 4K Canvas scrub motion.
          </p>
        </div>

        <div className="footer-right">
          <span className="footer-location-text">
            Operating from {personalInfo.location}
          </span>
          <button onClick={scrollToTop} className="back-top-btn" aria-label="Back to Top">
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
