import React from 'react';
import { verifiedSkills } from '../data/portfolioData';
import { Code2, Shield, Globe, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Code2 size={22} className="accent-red-icon" />;
      case 1:
        return <Shield size={22} className="accent-blue-icon" />;
      case 2:
        return <Globe size={22} className="accent-green-icon" />;
      default:
        return <Code2 size={22} />;
    }
  };

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-kicker">03 // VERIFIED ARSENAL</span>
          <h2 className="section-headline">Skills &amp; Technologies</h2>
          <p className="section-subtext">
            Core programming languages, cybersecurity toolsets, and frameworks verified from active projects.
          </p>
        </div>

        <div className="skills-category-layout">
          {verifiedSkills.map((group, index) => (
            <div key={index} className="skill-category-card glass-panel">
              <div className="category-header">
                <div className="category-icon-bubble">
                  {getIcon(index)}
                </div>
                <h3 className="category-title">{group.category}</h3>
              </div>

              <div className="skill-pills-wrap">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="interactive-skill-badge">
                    <CheckCircle2 size={13} className="check-bullet" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
