import { useState } from 'react';
import { ACHIEVEMENTS, PROFILE } from '../data/resumeData';
import { sounds } from '../os/soundEffects';

export default function AchievementsApp() {
  const [selectedId, setSelectedId] = useState(ACHIEVEMENTS[0].id);
  const [filter, setFilter] = useState('all');

  const selectedAward =
    ACHIEVEMENTS.find((a) => a.id === selectedId) || ACHIEVEMENTS[0];

  const filteredAwards = ACHIEVEMENTS.filter((award) => {
    if (filter === 'champions') {
      return award.rank.includes('1st') || award.rank.includes('Champion');
    }
    if (filter === 'pitch') {
      return award.title.includes('Pitch') || award.badge.includes('PITCH');
    }
    return true;
  });

  const handleSelect = (id) => {
    sounds.playClick();
    setSelectedId(id);
  };

  const handleFilter = (f) => {
    sounds.playClick();
    setFilter(f);
  };

  return (
    <div className="awards-app">
      {/* Header Bar with Filter Buttons */}
      <div className="awards-header-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '16px' }}>🏆</span>
          <strong>Hall of Fame & Hackathon Honors</strong>
        </div>
        <div className="awards-filter-group">
          <button
            type="button"
            className={`win95-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilter('all')}
          >
            All Honors ({ACHIEVEMENTS.length})
          </button>
          <button
            type="button"
            className={`win95-btn ${filter === 'champions' ? 'active' : ''}`}
            onClick={() => handleFilter('champions')}
          >
            🥇 Champions Only
          </button>
          <button
            type="button"
            className={`win95-btn ${filter === 'pitch' ? 'active' : ''}`}
            onClick={() => handleFilter('pitch')}
          >
            🎤 Pitch Awards
          </button>
        </div>
      </div>

      {/* Main Layout: List on left, Certificate on right */}
      <div className="awards-layout">
        {/* Left List Panel */}
        <div className="awards-list-panel">
          {filteredAwards.map((award) => (
            <button
              key={award.id}
              type="button"
              className={`award-item-btn ${award.id === selectedId ? 'selected' : ''}`}
              onClick={() => handleSelect(award.id)}
            >
              <span className="award-item-icon">{award.icon}</span>
              <div className="award-item-info">
                <span className="award-item-title">{award.title}</span>
                <span className="award-item-event">{award.competition}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Certificate / Plaque View */}
        <div className="award-certificate-view">
          <div className="certificate-border-frame">
            <span className="certificate-header-label">Official Certificate of Distinction</span>
            
            <h1 className="certificate-title">{selectedAward.title}</h1>
            
            <p className="certificate-present-text">This honor is proudly awarded to</p>
            
            <div className="certificate-recipient">{PROFILE.name}</div>
            
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#444444', margin: '4px 0' }}>
              For exceptional accomplishment in: <span style={{ color: 'var(--w95-navy-dark)' }}>{selectedAward.project}</span>
            </div>
            
            <div style={{ fontSize: '11px', color: '#555555' }}>
              Presented at: <strong>{selectedAward.competition}</strong> ({selectedAward.date})
            </div>

            <p className="certificate-body-desc">
              {selectedAward.description}
            </p>

            <div className="win95-groupbox" style={{ width: '100%', textAlign: 'left', background: '#ffffff' }}>
              <span className="win95-groupbox-legend">Judges Evaluation & Execution Highlights</span>
              <ul style={{ paddingLeft: '18px', fontSize: '10px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {selectedAward.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="certificate-seal-row">
              <div className="certificate-signature">
                <div className="certificate-sig-line"></div>
                <span>Event Committee / Hackathon Jury</span>
              </div>

              <div className="certificate-gold-seal">
                ⭐
              </div>

              <div className="certificate-signature">
                <div className="certificate-sig-line"></div>
                <span>Verified Credential Record</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="win95-statusbar">
        <div className="win95-status-field">
          Selected: {selectedAward.title} — {selectedAward.competition}
        </div>
        <div className="win95-status-field fixed">
          Rank: {selectedAward.badge}
        </div>
      </div>
    </div>
  );
}
