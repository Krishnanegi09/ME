import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Send 
} from 'lucide-react';
import { WhatsappIcon, LinkedinIcon, InstagramIcon, GithubIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="section-wrapper contact-wrapper">
      <div className="section-container">
        <div className="section-heading centered">
          <span className="section-kicker">04 // COMMENCE COLLABORATION</span>
          <h2 className="section-headline">Let's Build Something Exceptional</h2>
          <p className="section-subtext centered">
            Open for Senior Engineering Roles, System Architecture Consulting, and High-Impact Projects.
          </p>
        </div>

        {/* 4-Channel Social & Direct Touch Grid */}
        <div className="contact-channels-grid">
          {/* WhatsApp Direct */}
          <a 
            href={personalInfo.socials.whatsapp.url} 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card-channel whatsapp-channel glass-container"
          >
            <div className="channel-icon-circle whatsapp-bg">
              <WhatsappIcon size={26} />
            </div>
            <div className="channel-info">
              <span className="channel-tag">INSTANT MESSAGING</span>
              <h3 className="channel-name">WhatsApp Direct</h3>
              <p className="channel-desc">{personalInfo.socials.whatsapp.number} — Direct line for rapid inquiries and engineering consulting.</p>
              <span className="channel-action-link">Open WhatsApp Chat →</span>
            </div>
          </a>

          {/* LinkedIn Profile */}
          <a 
            href={personalInfo.socials.linkedin.url} 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card-channel linkedin-channel glass-container"
          >
            <div className="channel-icon-circle linkedin-bg">
              <LinkedinIcon size={26} />
            </div>
            <div className="channel-info">
              <span className="channel-tag">PROFESSIONAL NETWORK</span>
              <h3 className="channel-name">LinkedIn Connect</h3>
              <p className="channel-desc">in/{personalInfo.socials.linkedin.handle} — Professional background, recommendations, and dialogue.</p>
              <span className="channel-action-link">View LinkedIn Profile →</span>
            </div>
          </a>

          {/* Instagram Profile */}
          <a 
            href={personalInfo.socials.instagram.url} 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card-channel instagram-channel glass-container"
          >
            <div className="channel-icon-circle instagram-bg">
              <InstagramIcon size={26} />
            </div>
            <div className="channel-info">
              <span className="channel-tag">PERSONAL &amp; CREATIVE</span>
              <h3 className="channel-name">Follow on Instagram</h3>
              <p className="channel-desc">Behind-the-scenes engineering, creative tech, and day-to-day updates.</p>
              <span className="channel-action-link">Visit @krishnanegi →</span>
            </div>
          </a>

          {/* GitHub Profile */}
          <a 
            href={personalInfo.socials.github.url} 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card-channel github-channel glass-container"
          >
            <div className="channel-icon-circle github-bg">
              <GithubIcon size={26} />
            </div>
            <div className="channel-info">
              <span className="channel-tag">OPEN SOURCE &amp; CODE</span>
              <h3 className="channel-name">Explore GitHub Repos</h3>
              <p className="channel-desc">Source code for PhishGuard, security scanners, and experimental tools.</p>
              <span className="channel-action-link">Visit GitHub Profile →</span>
            </div>
          </a>
        </div>

        {/* Location & Direct Email Box */}
        <div className="contact-bottom-hub glass-container">
          <div className="hub-location-side">
            <div className="hub-meta-item">
              <MapPin size={20} className="hub-icon-red" />
              <div>
                <span className="hub-meta-label">PRIMARY HEADQUARTERS</span>
                <strong className="hub-meta-val">{personalInfo.location}</strong>
              </div>
            </div>

            <div className="hub-meta-item">
              <Clock size={20} className="hub-icon-red" />
              <div>
                <span className="hub-meta-label">AVAILABILITY &amp; TIMEZONE</span>
                <strong className="hub-meta-val">Indian Standard Time (UTC +5:30) • Remote Worldwide</strong>
              </div>
            </div>
          </div>

          <div className="hub-email-side">
            <span className="hub-meta-label">OFFICIAL INBOX</span>
            <div className="email-copy-bar">
              <span className="email-raw-text">{personalInfo.socials.email}</span>
              <button 
                onClick={handleCopyEmail} 
                className={`copy-action-btn ${copied ? 'copied' : ''}`}
                aria-label="Copy Email"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
              </button>
            </div>
            <a 
              href={`mailto:${personalInfo.socials.email}`} 
              className="direct-mail-button"
            >
              <Send size={15} />
              <span>Launch Email Client</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
