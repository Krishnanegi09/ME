import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './SocialIcons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu overlay is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About', note: 'GEHU & Credentials' },
    { href: '#projects', label: 'Systems', note: 'Real Codebases' },
    { href: '#skills', label: 'Stack', note: 'Security & Tech' },
    { href: '#contact', label: 'Contact', note: 'Direct Line' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Group */}
        <a href="#hero" className="brand-group" onClick={() => setMobileMenuOpen(false)}>
          <span className="brand-badge">{personalInfo.monogram}</span>
          <div className="brand-details">
            <span className="brand-title">{personalInfo.name}</span>
            <span className="brand-location">
              <MapPin size={11} className="location-icon" />
              {personalInfo.locationShort}
            </span>
          </div>
        </a>

        {/* Laptop / Desktop Floating Pill Navigation */}
        <nav className="desktop-nav" aria-label="Desktop Navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-item">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions & Social Icons */}
        <div className="navbar-actions">
          <div className="social-icon-strip desktop-only">
            <a
              href={personalInfo.socials.github.url}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon-btn"
              title="GitHub Profile"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={personalInfo.socials.linkedin.url}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon-btn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href={personalInfo.socials.instagram.url}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-icon-btn"
              title="Instagram Profile"
            >
              <InstagramIcon size={15} />
            </a>
            <a
              href={personalInfo.socials.whatsapp.url}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="social-icon-btn whatsapp"
              title="Chat on WhatsApp"
            >
              <WhatsappIcon size={15} />
            </a>
          </div>

          <div className="status-indicator desktop-only">
            <span className="status-beacon"></span>
            <span className="status-label">Available</span>
          </div>

          <a
            href={personalInfo.socials.whatsapp.url}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp-compact"
            title="Direct WhatsApp"
          >
            <WhatsappIcon size={14} />
            <span className="whatsapp-text">WhatsApp</span>
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-toggle glass-panel"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Frosted Glass Mobile Navigation Overlay */}
      <div className={`mobile-glass-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-overlay-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-overlay-panel glass-panel">
          <div className="mobile-panel-header">
            <div className="mobile-brand-meta">
              <span className="brand-badge">{personalInfo.monogram}</span>
              <div>
                <strong className="mobile-user-name">{personalInfo.name}</strong>
                <span className="mobile-user-sub">
                  <MapPin size={11} className="location-icon" />
                  {personalInfo.location}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links List */}
          <nav className="mobile-links-grid" aria-label="Mobile Navigation Links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-link-card glass-panel"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div>
                  <span className="mobile-link-title">{link.label}</span>
                  <span className="mobile-link-note">{link.note}</span>
                </div>
                <ArrowUpRight size={18} className="mobile-link-arrow" />
              </a>
            ))}
          </nav>

          {/* Direct Social Links Hub in Mobile Overlay */}
          <div className="mobile-social-hub">
            <span className="mobile-hub-label">Direct Communication Channels</span>
            <div className="mobile-social-buttons">
              <a
                href={personalInfo.socials.whatsapp.url}
                target="_blank"
                rel="noreferrer"
                className="mobile-social-btn whatsapp-action"
                onClick={() => setMobileMenuOpen(false)}
              >
                <WhatsappIcon size={18} />
                <span>WhatsApp</span>
              </a>
              <a
                href={personalInfo.socials.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="mobile-social-btn linkedin-action"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socials.github.url}
                target="_blank"
                rel="noreferrer"
                className="mobile-social-btn github-action"
                onClick={() => setMobileMenuOpen(false)}
              >
                <GithubIcon size={18} />
                <span>GitHub Repos</span>
              </a>
              <a
                href={personalInfo.socials.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="mobile-social-btn instagram-action"
                onClick={() => setMobileMenuOpen(false)}
              >
                <InstagramIcon size={18} />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="mobile-panel-footer">
            <div className="mobile-academic-chip">
              <ShieldCheck size={14} className="accent-red-icon" />
              <span>Graphic Era Hill University, Dehradun (CSE Cybersecurity)</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
