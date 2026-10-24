import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Terminal, 
  MapPin, 
  ArrowRight,
  Activity,
  Cpu,
  Sparkles,
  Lock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';

export default function Hero() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLocalTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        {/* Top Meta Chips */}
        <div className="hero-top-meta">
          <div className="role-chip">
            <ShieldCheck size={14} className="accent-red-icon" />
            <span>{personalInfo.role}</span>
          </div>

          <div className="location-chip">
            <MapPin size={13} className="accent-red-icon" />
            <span>{personalInfo.location}</span>
            <span className="live-clock-badge">
              <span className="live-clock-dot"></span>
              {localTime ? `${localTime} IST` : 'IST (UTC+5:30)'}
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="hero-main-title">
          Cybersecurity &amp; Full-Stack{' '}
          <span className="gradient-highlight">Software Engineering.</span>
        </h1>

        <p className="hero-description">
          Hi, I'm <strong>{personalInfo.name}</strong>, Computer Science &amp; Cybersecurity student at{' '}
          <strong>Graphic Era Hill University, Dehradun</strong>. I engineer defensive security systems, 
          automated vulnerability scanners, and robust full-stack applications.
        </p>

        {/* Action Buttons Hub (Adaptive Wrap for Laptop & Mobile) */}
        <div className="hero-actions-hub">
          <a href="#projects" className="btn-primary-action">
            <span>Explore Real Projects</span>
            <ArrowRight size={16} />
          </a>

          <a 
            href={personalInfo.socials.whatsapp.url} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-whatsapp-action"
            title="Chat directly on WhatsApp"
          >
            <WhatsappIcon size={18} />
            <span>WhatsApp</span>
          </a>

          <a 
            href={personalInfo.socials.linkedin.url} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-glass-action"
            title="Connect on LinkedIn"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>

          <a 
            href={personalInfo.socials.github.url} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-glass-action"
            title="Inspect GitHub Repos"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Graphic Telemetry Cards (Bento Glass Matrix) */}
        <div className="hero-graphic-telemetry-grid">
          <div className="telemetry-item glass-panel">
            <div className="telemetry-top">
              <span className="telemetry-badge red">ACADEMICS</span>
              <Activity size={14} className="telemetry-icon" />
            </div>
            <strong className="telemetry-val">GEHU Dehradun</strong>
            <span className="telemetry-sub">B.Tech CSE (Cybersecurity) • 2023–2027</span>
          </div>

          <div className="telemetry-item glass-panel">
            <div className="telemetry-top">
              <span className="telemetry-badge blue">CRYPTOGRAPHY</span>
              <Lock size={14} className="telemetry-icon" />
            </div>
            <strong className="telemetry-val">Defensive Tools</strong>
            <span className="telemetry-sub">AES-128, Fernet, Nmap &amp; Threat Scanners</span>
          </div>

          <div className="telemetry-item glass-panel">
            <div className="telemetry-top">
              <span className="telemetry-badge green">CLOUD &amp; WEB</span>
              <Cpu size={14} className="telemetry-icon" />
            </div>
            <strong className="telemetry-val">AWS &amp; Full-Stack</strong>
            <span className="telemetry-sub">React 19, FastAPI, Node.js &amp; Cloud Quest</span>
          </div>
        </div>

        {/* Terminal Diagnostics Card */}
        <div className="terminal-card glass-panel">
          <div className="terminal-bar">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">
              <Terminal size={12} />
              <span>krishna-negi@gehu-cybersec: ~/profile</span>
            </div>
            <span className="terminal-tag">SYSTEM TELEMETRY</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-row">
              <span className="term-prompt">$</span>
              <span className="term-cmd">whoami &amp;&amp; cat verified_profile.json</span>
            </div>
            <div className="terminal-output">
              <div><span className="term-key">NAME:</span> {personalInfo.name}</div>
              <div><span className="term-key">UNIVERSITY:</span> {personalInfo.education.institution} (2023 - 2027)</div>
              <div><span className="term-key">LOCATION:</span> {personalInfo.location}</div>
              <div><span className="term-key">SPECIALIZATION:</span> {personalInfo.education.degree}</div>
              <div><span className="term-key">CERTIFICATIONS:</span> AWS Cloud Practitioner • AWS Cloud Quest • Infosys Infosec</div>
              <div><span className="term-key">CONTACT:</span> WhatsApp +91 94115 93708 • krishnanegi0906@gmail.com</div>
              <div><span className="term-key">STATUS:</span> <span className="term-green">{personalInfo.status}</span></div>
            </div>
          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="hero-scroll-prompt">
          <div className="mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
          <span>Scroll down to examine 4K interactive frames &amp; verified work</span>
        </div>
      </div>
    </section>
  );
}
