import { useState, useEffect } from 'react';
import { sounds } from './soundEffects';
import AppIcon from './appIcons';

export default function Taskbar({
  startOpen,
  onToggleStart,
  windows,
  activeWindowId,
  onTaskClick,
  onToggleAssistant,
}) {
  const [time, setTime] = useState('');
  const [isMuted, setIsMuted] = useState(sounds.isMuted());

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      setTime(`${hours}:${minutes} ${ampm}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sounds.playClick();
    }
  };

  return (
    <footer className="w95-taskbar">
      {/* Start Button */}
      <button
        type="button"
        className={`w95-start-btn ${startOpen ? 'active' : ''}`}
        onClick={() => {
          sounds.playClick();
          onToggleStart();
        }}
      >
        <div className="w95-logo-quad" aria-hidden="true">
          <div className="w95-logo-red" />
          <div className="w95-logo-green" />
          <div className="w95-logo-blue" />
          <div className="w95-logo-yellow" />
        </div>
        <span>Start</span>
      </button>

      {/* Running Application Tabs */}
      <div className="w95-taskbar-tasks">
        {windows.map((win) => {
          const isActive = win.id === activeWindowId && !win.isMinimized;
          return (
            <button
              key={win.id}
              type="button"
              className={`w95-taskbar-item ${isActive ? 'active' : ''}`}
              onClick={() => {
                sounds.playClick();
                onTaskClick(win.id);
              }}
              title={win.title}
            >
              <span className="w95-task-icon-wrap">{win.icon}</span>
              <span className="w95-task-title-text">{win.title}</span>
            </button>
          );
        })}
      </div>

      {/* System Tray */}
      <div className="w95-tray">
        <button
          type="button"
          className="w95-tray-audio-btn smiley-tray-launcher"
          onClick={() => {
            sounds.playClick();
            if (onToggleAssistant) onToggleAssistant();
          }}
          title="Smiley Assistant Guide (Click to show/hide)"
        >
          <AppIcon name="smiley" size={16} />
        </button>

        <button
          type="button"
          className="w95-tray-audio-btn"
          onClick={handleToggleSound}
          title={isMuted ? 'Sound Muted (Click to Unmute)' : 'Sound Enabled (Click to Mute)'}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        <span style={{ cursor: 'default' }}>{time}</span>
      </div>
    </footer>
  );
}
