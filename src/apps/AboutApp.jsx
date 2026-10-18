import { useState } from 'react';
import { PROFILE, EDUCATION, SKILL_CATEGORIES } from '../data/resumeData';
import { sounds } from '../os/soundEffects';

export default function AboutApp({ onOpenMail }) {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab) => {
    sounds.playClick();
    setActiveTab(tab);
  };

  return (
    <div className="about-app">
      {/* Windows 95 Tab Strip */}
      <div className="win95-tabs-container">
        <button
          type="button"
          className={`win95-tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => handleTabClick('profile')}
        >
          General Profile
        </button>
        <button
          type="button"
          className={`win95-tab ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => handleTabClick('skills')}
        >
          Technical Skills
        </button>
        <button
          type="button"
          className={`win95-tab ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => handleTabClick('education')}
        >
          Education & SBO
        </button>
        <button
          type="button"
          className={`win95-tab ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleTabClick('contact')}
        >
          Contact Information
        </button>
      </div>

      {/* Tab: Profile */}
      {activeTab === 'profile' && (
        <>
          <div className="about-hero">
            <div className="about-avatar-frame">
              <span className="about-avatar-initials">ABP</span>
              <span className="about-avatar-sub">DEV // 95</span>
            </div>
            <div className="about-hero-details">
              <h2 className="about-name">{PROFILE.name}</h2>
              <div className="about-role">{PROFILE.role}</div>
              <div className="about-location">📍 {PROFILE.location}</div>
            </div>
          </div>

          <div className="win95-groupbox">
            <span className="win95-groupbox-legend">Professional Summary</span>
            <div className="about-summary-box">
              {PROFILE.summary}
            </div>
          </div>

          <div className="win95-groupbox">
            <span className="win95-groupbox-legend">Quick Specs & Actions</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              <div><strong>Core Stack:</strong> React, Next.js, Supabase</div>
              <div><strong>Status:</strong> Available for High-Impact Roles</div>
              <div><strong>Specialty:</strong> Secure Web Apps & RLS Architecture</div>
              <div><strong>Hackathons Won:</strong> 5 Major National/Regional Honors</div>
            </div>

            <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #d0d0d0', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="win95-btn"
                onClick={() => handleTabClick('skills')}
                style={{ fontWeight: 'bold' }}
              >
                ⚡ View Technical Skills
              </button>
              <button
                type="button"
                className="win95-btn"
                onClick={() => handleTabClick('contact')}
              >
                ✉️ Contact Argee
              </button>
            </div>
          </div>
        </>
      )}

      {/* Tab: Skills */}
      {activeTab === 'skills' && (
        <div className="about-skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.name} className="win95-groupbox">
              <span className="win95-groupbox-legend">
                {category.icon} {category.name}
                {category.badge && (
                  <span style={{ marginLeft: '6px', fontSize: '9px', color: 'var(--w95-navy-dark)', fontWeight: 'bold' }}>
                    [{category.badge}]
                  </span>
                )}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className="about-skill-item">
                    <div className="about-skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="about-meter-track">
                      <div
                        className="about-meter-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Education */}
      {activeTab === 'education' && (
        <>
          <div className="win95-groupbox">
            <span className="win95-groupbox-legend">🎓 Academic Degree</span>
            <div className="about-edu-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '13px', color: 'var(--w95-navy-dark)' }}>
                  {EDUCATION.degree}
                </strong>
                <span style={{ fontSize: '11px', color: '#555555' }}>{EDUCATION.period}</span>
              </div>
              <div style={{ fontWeight: 600 }}>{EDUCATION.institution}</div>
              <div style={{ margin: '4px 0', color: '#333333' }}>
                {EDUCATION.description}
              </div>
              <div className="about-edu-badges">
                <span className="about-badge">⭐ GWA: {EDUCATION.gwa}</span>
                {EDUCATION.honors.map((honor) => (
                  <span key={honor} className="about-badge">
                    🏅 {honor}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="win95-groupbox">
            <span className="win95-groupbox-legend">🏛️ Leadership & Campus Involvement</span>
            <div style={{ background: '#ffffff', padding: '8px', lineHeight: 1.45 }}>
              Active student leader in the Student Body Organization (SBO), organizing collegiate tech initiatives, peer coding mentorship, and representing the university in provincial and national ICT Congress hackathon competitions.
            </div>
          </div>
        </>
      )}

      {/* Tab: Contact */}
      {activeTab === 'contact' && (
        <div className="win95-groupbox">
          <span className="win95-groupbox-legend">Direct Transmission Channels</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '6px' }}>
            <div>
              <strong>Email:</strong> {PROFILE.email}
            </div>
            <div>
              <strong>Phone:</strong> {PROFILE.phone}
            </div>
            <div>
              <strong>LinkedIn:</strong> {PROFILE.linkedin}
            </div>
            <div>
              <strong>GitHub:</strong> {PROFILE.github}
            </div>

            <div className="about-contacts-row">
              <button
                type="button"
                className="win95-btn"
                onClick={() => {
                  sounds.playClick();
                  if (onOpenMail) {
                    onOpenMail();
                  } else {
                    window.location.href = `mailto:${PROFILE.email}`;
                  }
                }}
              >
                ✉️ Send Message / Email
              </button>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="win95-btn"
                onClick={() => sounds.playClick()}
              >
                🔗 Open LinkedIn
              </a>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="win95-btn"
                onClick={() => sounds.playClick()}
              >
                🐙 Open GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
