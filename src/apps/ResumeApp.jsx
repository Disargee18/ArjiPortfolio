import { useState } from 'react';
import { PROFILE, EDUCATION } from '../data/resumeData';
import { sounds } from '../os/soundEffects';

export default function ResumeApp() {
  const [viewMode, setViewMode] = useState('sheet'); // 'sheet' (default) | 'pdf'
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    sounds.playClick();
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Argee_Boy_Paquibot_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    sounds.playClick();
    window.open('/resume.pdf', '_blank');
  };

  const handlePrint = () => {
    sounds.playClick();
    if (viewMode === 'sheet') {
      window.print();
    } else {
      window.open('/resume.pdf', '_blank')?.print();
    }
  };

  const handleCopyLink = () => {
    sounds.playClick();
    const fullUrl = `${window.location.origin}/resume.pdf`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="pdf-viewer-wrapper">
      {/* Windows 95 PDF / Document Viewer Toolbar */}
      <div className="pdf-toolbar">
        <div className="pdf-toolbar-left">
          <span style={{ fontSize: '18px' }}>📄</span>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '11px', color: '#000000' }}>
              Argee_Boy_Paquibot_Resume.pdf
            </div>
            <div style={{ fontSize: '10px', color: '#555555' }}>
              Adobe Acrobat Document • 130 KB
            </div>
          </div>
        </div>

        {/* View Switcher Toggle */}
        <div className="pdf-view-toggle">
          <button
            type="button"
            className={viewMode === 'sheet' ? 'active' : ''}
            onClick={() => {
              sounds.playClick();
              setViewMode('sheet');
            }}
            title="View interactive formatted document sheet"
          >
            📜 Formatted Sheet
          </button>
          <button
            type="button"
            className={viewMode === 'pdf' ? 'active' : ''}
            onClick={() => {
              sounds.playClick();
              setViewMode('pdf');
            }}
            title="View original uploaded PDF file"
          >
            📄 PDF File
          </button>
        </div>

        {/* Action Buttons */}
        <div className="pdf-toolbar-actions">
          <button
            type="button"
            className="win95-btn"
            onClick={handleDownload}
            title="Download PDF to computer"
          >
            💾 Download PDF
          </button>
          <button
            type="button"
            className="win95-btn"
            onClick={handleOpenNewTab}
            title="Open PDF in new tab"
          >
            ↗️ Fullscreen / New Tab
          </button>
          <button
            type="button"
            className="win95-btn"
            onClick={handlePrint}
            title="Print Document"
          >
            🖨️ Print
          </button>
          <button
            type="button"
            className="win95-btn"
            onClick={handleCopyLink}
            title="Copy Direct Link to PDF"
          >
            {copied ? '✅ Copied!' : '🔗 Copy Link'}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`pdf-content-area ${viewMode === 'sheet' ? 'sheet-mode' : ''}`}>
        {viewMode === 'pdf' ? (
          <iframe
            src="/resume.pdf#view=FitH"
            title="Argee Boy Paquibot Resume PDF"
            className="pdf-iframe"
          />
        ) : (
          <article className="about-resume-sheet" style={{ maxWidth: '820px', width: '100%', margin: '0 auto' }}>
            {/* Header */}
            <header className="resume-header">
              <h1 className="resume-name">{PROFILE.name}</h1>
              <div className="resume-contact-line">
                <span>📍 {PROFILE.location}</span>
                <span>|</span>
                <span>📞 {PROFILE.phone}</span>
                <span>|</span>
                <a href={`mailto:${PROFILE.email}`}>✉️ {PROFILE.email}</a>
                <span>|</span>
                <a href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer">
                  🔗 {PROFILE.linkedin}
                </a>
                <span>|</span>
                <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer">
                  🐙 {PROFILE.github}
                </a>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="resume-section">
              <h2 className="resume-section-title">Professional Summary</h2>
              <p style={{ margin: 0, textAlign: 'justify' }}>
                {PROFILE.summary}
              </p>
            </section>

            {/* Technical Skills */}
            <section className="resume-section">
              <h2 className="resume-section-title">Technical Skills</h2>
              <div className="resume-skills-block">
                <div>
                  <strong>Frontend Development:</strong> React, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Framer Motion, State Management
                </div>
                <div>
                  <strong>Backend & Database:</strong> Node.js, Express, Supabase (Auth & Storage), PostgreSQL, MySQL, REST APIs, Row-Level Security (RLS)
                </div>
                <div>
                  <strong>Blockchain & Web3:</strong> CashScript, Smart Contracts, Bitcoin Cash, CashTokens Integration
                </div>
                <div>
                  <strong>DevOps & Networking:</strong> Git, GitHub, Linux CLI, Selenium Automation, REST API Integrations
                </div>
                <div>
                  <strong>Leadership & Soft Skills:</strong> Project Leadership, Technical Pitching, Rapid Prototyping, Public Speaking
                </div>
              </div>
            </section>

            {/* Technical Projects */}
            <section className="resume-section">
              <h2 className="resume-section-title">Technical Projects</h2>

              {/* Seekr */}
              <div className="resume-project-item">
                <div className="resume-project-header">
                  <span className="resume-project-name">Seekr</span>
                  <span className="resume-project-award">12th UC ICT Congress Hackathon — 2nd Place Winner (01/2026)</span>
                </div>
                <ul className="resume-bullets">
                  <li>Built an intelligent code repository indexing and discovery platform that enables developers to search, analyze, and trace complex source code dependencies across multi-file codebases.</li>
                  <li>Engineered fast client-side state filtering and optimized frontend rendering to display search results with instant visual feedback and syntax highlighting.</li>
                  <li>Designed an intuitive UI/UX tailored for developer navigation, ensuring seamless inspection of repository file structures and function calls.</li>
                </ul>
              </div>

              {/* ReStart */}
              <div className="resume-project-item">
                <div className="resume-project-header">
                  <span className="resume-project-name">ReStart - Blockchain Rehabilitation Credentials</span>
                  <span className="resume-project-award">Paytaca Cashscript 3.0 Hackathon — Hackathon Champion (₱75K Grand Prize) (02/2026)</span>
                </div>
                <ul className="resume-bullets">
                  <li>Developed a decentralized credential verification platform that writes verified rehabilitation milestones permanently onto the Bitcoin Cash blockchain using CashScript smart contracts.</li>
                  <li>Engineered tamper-proof, publicly accessible credential links that allow instant third-party verification directly against the blockchain without middleman dependencies or login barriers.</li>
                  <li>Integrated CashTokens and CashScript contracts within a full-stack Next.js and Supabase application to ensure reliable transaction signing and immutable data storage.</li>
                </ul>
              </div>

              {/* Musika AI */}
              <div className="resume-project-item">
                <div className="resume-project-header">
                  <span className="resume-project-name">Musika AI</span>
                  <span className="resume-project-award">Full-Stack AI Music Streaming Platform (2025 - 2026)</span>
                </div>
                <ul className="resume-bullets">
                  <li>Architected a Spotify-inspired streaming application featuring an AI-assisted curation engine that automatically generates dynamic playlists based on user sentiment and mood inputs.</li>
                  <li>Implemented Model Context Protocol (MCP) integrations to orchestrate context-aware chatbot interactions directly within the music player interface.</li>
                  <li>Secured user profile data and playlist records using Supabase Authentication alongside granular Row-Level Security (RLS) database policies.</li>
                </ul>
              </div>

              {/* PSITS Voting System */}
              <div className="resume-project-item">
                <div className="resume-project-header">
                  <span className="resume-project-name">PSITS Voting System</span>
                  <span className="resume-project-award">Departmental Real-Time Election Web App (2025 - 2026)</span>
                </div>
                <ul className="resume-bullets">
                  <li>Spearheaded the development of a departmental election platform leveraging React and Supabase for real-time ballot casting and vote tracking.</li>
                  <li>Optimized client-side state management and database subscriptions to stream low-latency live election tallies and visual percentage updates.</li>
                  <li>Ensured strict election integrity by enforcing unique voter authentication tokens and database-level constraints to eliminate duplicate voting.</li>
                </ul>
              </div>
            </section>

            {/* Awards & Accomplishments */}
            <section className="resume-section">
              <h2 className="resume-section-title">Awards & Accomplishments</h2>
              <div className="resume-awards-grid">
                <div className="resume-award-row">
                  <span><strong>1st Place Champion (ReStart)</strong> — <em>₱75,000 Grand Prize</em></span>
                  <span>Paytaca Cashscript 3.0 Hackathon</span>
                  <span>02/2026</span>
                </div>
                <div className="resume-award-row">
                  <span><strong>Hackathon Champion</strong></span>
                  <span>UCLM Hackathon Competition</span>
                  <span>01/2026</span>
                </div>
                <div className="resume-award-row">
                  <span><strong>Best Pitcher (Hustler Award)</strong></span>
                  <span>UCLM Hackathon Competition</span>
                  <span>01/2026</span>
                </div>
                <div className="resume-award-row">
                  <span><strong>2nd Place Winner (Seekr)</strong></span>
                  <span>12th UC ICT Congress Hackathon</span>
                  <span>01/2026</span>
                </div>
                <div className="resume-award-row">
                  <span><strong>3rd Place Winner (Lightning Pitch)</strong></span>
                  <span>PSITE ICT Congress</span>
                  <span>01/2026</span>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="resume-section">
              <h2 className="resume-section-title">Education</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '11px', color: '#000000' }}>{EDUCATION.degree}</strong>
                <span style={{ fontSize: '10px', color: '#555555' }}>{EDUCATION.period}</span>
              </div>
              <div style={{ fontSize: '10.5px', color: '#333333' }}>
                {EDUCATION.institution} | GWA: {EDUCATION.gwa} | {EDUCATION.honors.join(' | ')}
              </div>
            </section>

            {/* Footer */}
            <footer className="resume-footer">
              Argee Boy Paquibot — Portfolio Resume | Official Document
            </footer>
          </article>
        )}
      </div>

      {/* Win95 Status Bar */}
      <div className="win95-statusbar">
        <div className="win95-status-field">
          {viewMode === 'pdf' ? 'Displaying original PDF: resume.pdf' : 'Displaying Formatted Document Sheet'}
        </div>
        <div className="win95-status-field fixed">
          100%
        </div>
        <div className="win95-status-field fixed">
          Page 1 of 1
        </div>
      </div>
    </div>
  );
}
