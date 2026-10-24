import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ShieldCheck, GraduationCap, Award, MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-kicker">01 // VERIFIED PROFILE &amp; ACADEMICS</span>
          <h2 className="section-headline">Defensive Security &amp; Engineering</h2>
          <p className="section-subtext">
            Undergraduate in Computer Science Engineering (Cybersecurity Specialization) at Graphic Era Hill University.
          </p>
        </div>

        <div className="about-main-layout">
          {/* Main Glass Narrative Card */}
          <div className="about-narrative-card glass-panel">
            <h3 className="narrative-title">Background &amp; Focus</h3>
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="narrative-body">
                {paragraph}
              </p>
            ))}

            {/* Real Education Card */}
            <div className="education-glass-box">
              <div className="edu-icon-wrap">
                <GraduationCap size={22} className="accent-red-icon" />
              </div>
              <div className="edu-details">
                <span className="edu-tag">FORMAL ACADEMICS</span>
                <h4 className="edu-degree">{personalInfo.education.degree}</h4>
                <p className="edu-college">{personalInfo.education.institution}</p>
                <div className="edu-meta-row">
                  <span className="edu-badge">{personalInfo.education.year}</span>
                  <span className="edu-score">Current CGPA: {personalInfo.education.score}</span>
                </div>
              </div>
            </div>

            {/* Real Certifications */}
            <div className="certifications-block">
              <h4 className="block-subheading">
                <Award size={18} className="accent-red-icon" />
                <span>Industry Certifications</span>
              </h4>
              <div className="cert-cards-grid">
                {personalInfo.certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="cert-item-glass">
                    <CheckCircle2 size={15} className="cert-check" />
                    <div>
                      <strong className="cert-title">{cert.title}</strong>
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Contact Highlight */}
            <div className="location-feature-card">
              <MapPin size={18} className="location-pin-accent" />
              <div>
                <strong>Based in {personalInfo.location}</strong>
                <span>Graphic Era Hill University Campus • Ready for Global Remote &amp; On-Site Roles</span>
              </div>
            </div>
          </div>

          {/* Stats Glass Column */}
          <div className="stats-column">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass-panel">
                <span className="stat-large-val">{stat.value}</span>
                <span className="stat-desc">{stat.label}</span>
                <div className="stat-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
