import { useState } from 'react';
import { PROJECTS } from '../data/resumeData';
import { sounds } from '../os/soundEffects';

export default function ProjectsApp() {
  const [selectedId, setSelectedId] = useState(
    PROJECTS && PROJECTS.length > 0 ? PROJECTS[0].id : 'seekr'
  );

  const selectedProject =
    (PROJECTS && PROJECTS.find((p) => p.id === selectedId)) ||
    (PROJECTS && PROJECTS[0]) ||
    null;

  if (!selectedProject) {
    return (
      <div style={{ padding: '24px', fontFamily: 'sans-serif', textAlign: 'center' }}>
        No project data available.
      </div>
    );
  }

  const handleSelect = (id) => {
    sounds.playClick();
    setSelectedId(id);
  };

  const currentIndex = PROJECTS ? PROJECTS.findIndex((p) => p.id === selectedId) : 0;

  const goPrev = () => {
    sounds.playClick();
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedId(PROJECTS[prevIndex].id);
  };

  const goNext = () => {
    sounds.playClick();
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedId(PROJECTS[nextIndex].id);
  };

  return (
    <div className="projects-app">
      {/* IE Menu Bar */}
      <div className="ie-menubar">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Favorites</span>
        <span>Help</span>
      </div>

      {/* IE Navigation Toolbar */}
      <div className="ie-toolbar">
        <button
          type="button"
          className="ie-tool-btn"
          onClick={goPrev}
          title="Back to previous project"
        >
          <span className="ie-tool-icon">⬅️</span>
          <span>Back</span>
        </button>
        <button
          type="button"
          className="ie-tool-btn"
          onClick={goNext}
          title="Forward to next project"
        >
          <span className="ie-tool-icon">➡️</span>
          <span>Forward</span>
        </button>
        <button
          type="button"
          className="ie-tool-btn"
          onClick={() => {
            sounds.playClick();
            setSelectedId(PROJECTS[0].id);
          }}
          title="Home"
        >
          <span className="ie-tool-icon">🏠</span>
          <span>Home</span>
        </button>
        <button
          type="button"
          className="ie-tool-btn"
          onClick={() => sounds.playDing()}
          title="Refresh"
        >
          <span className="ie-tool-icon">🔄</span>
          <span>Refresh</span>
        </button>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#555555' }}>
          <span>Microsoft Internet Explorer</span>
          <span style={{ fontSize: '15px' }}>🌐</span>
        </div>
      </div>

      {/* IE Address Bar */}
      <div className="ie-address-row">
        <span className="ie-address-label">Address</span>
        <input
          type="text"
          readOnly
          className="ie-address-input"
          value={`http://argee-paquibot.dev/projects/${selectedProject.id}`}
        />
        <button
          type="button"
          className="win95-btn"
          onClick={() => sounds.playDing()}
        >
          Go
        </button>
      </div>

      {/* IE Viewport */}
      <div className="ie-viewport">
        {/* Project Selector Sidebar */}
        <aside className="ie-project-sidebar">
          <div className="ie-sidebar-header">Technical Projects ({PROJECTS.length})</div>
          {PROJECTS.map((proj) => (
            <button
              key={proj.id}
              type="button"
              className={`ie-project-tab-btn ${proj.id === selectedId ? 'active' : ''}`}
              onClick={() => handleSelect(proj.id)}
            >
              <span>{proj.icon}</span>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {proj.title}
              </span>
            </button>
          ))}
        </aside>

        {/* Project Details Display */}
        <div className="ie-project-display">
          {/* Award Banner */}
          <div className={`project-award-banner ${selectedProject.awardType}`}>
            <span>🏆</span>
            <span>{selectedProject.award}</span>
          </div>

          {/* Project Title & Category */}
          <div className="project-title-row">
            <div>
              <h2 className="project-main-title">{selectedProject.title}</h2>
              <div className="project-category">{selectedProject.category}</div>
            </div>
            <span style={{ fontSize: '11px', color: '#666666' }}>{selectedProject.date}</span>
          </div>

          {/* High level summary */}
          <div style={{ background: '#f9f9f9', padding: '10px', borderLeft: '3px solid var(--w95-navy-dark)', lineHeight: 1.5 }}>
            {selectedProject.summary}
          </div>

          {/* Technical accomplishments bullet points from resume */}
          <div className="win95-groupbox">
            <span className="win95-groupbox-legend">Architecture & Technical Execution</span>
            <ul className="project-bullets-list">
              {(selectedProject.bullets || []).map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="win95-groupbox">
            <span className="win95-groupbox-legend">Technologies & Libraries</span>
            <div className="project-tech-chips">
              {(selectedProject.tech || []).map((tech) => (
                <span key={tech} className="project-tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action links */}
          <div className="project-action-buttons">
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noreferrer"
              className="win95-btn"
              onClick={() => sounds.playClick()}
            >
              🐙 Source Code / Repository
            </a>
            <button
              type="button"
              className="win95-btn"
              onClick={() => {
                sounds.playDing();
                alert(`Launched inspection protocol for ${selectedProject.title}`);
              }}
            >
              🚀 Launch Demo System
            </button>
          </div>
        </div>
      </div>

      {/* Windows 95 Status Bar */}
      <div className="win95-statusbar">
        <div className="win95-status-field">
          Document: Done (Status 200 OK)
        </div>
        <div className="win95-status-field fixed">
          Internet Zone
        </div>
      </div>
    </div>
  );
}
