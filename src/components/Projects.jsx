import React, { useState } from 'react';
import { realProjects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { key: 'all', label: `All Systems (${realProjects.length})` },
    { key: 'security', label: 'Cybersecurity & Crypto' },
    { key: 'fullstack', label: 'Web Applications' },
    { key: 'systems', label: 'C++ Systems' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? realProjects
    : realProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-wrapper">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-kicker">02 // VERIFIED CODEBASE</span>
          <h2 className="section-headline">Real Technical Projects</h2>
          <p className="section-subtext">
            Authentic software, security tools, and applications developed by Krishna Singh Negi.
          </p>

          {/* Filter Pills */}
          <div className="project-filter-row">
            {filterTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`filter-btn ${activeFilter === tab.key ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-card-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-blueprint-card glass-panel">
              <div className="card-top-bar">
                <div className="card-badge-group">
                  <span className={`category-pill ${project.badgeColor}`}>
                    {project.categoryLabel}
                  </span>
                  <span className="year-pill">{project.year}</span>
                </div>
                <div className="card-metrics-chip">
                  <span className="metrics-dot"></span>
                  {project.highlight}
                </div>
              </div>

              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-summary-text">{project.summary}</p>

              <div className="architecture-detail-box">
                <span className="arch-label">Implementation:</span>
                <p className="arch-text">{project.architecture}</p>
              </div>

              <div className="tech-tag-cloud">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tech-tag-pill">{tag}</span>
                ))}
              </div>

              <div className="card-footer-action">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="card-source-link"
                >
                  <GithubIcon size={16} />
                  <span>Inspect Code on GitHub</span>
                  <ExternalLink size={13} className="ext-icon" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
