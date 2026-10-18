import { useState, useEffect, useRef } from 'react';
import WindowFrame from './WindowFrame';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu';
import AboutApp from '../apps/AboutApp';
import ProjectsApp from '../apps/ProjectsApp';
import AchievementsApp from '../apps/AchievementsApp';
import ContactApp from '../apps/ContactApp';
import ResumeApp from '../apps/ResumeApp';
import { sounds } from './soundEffects';
import AppIcon from './appIcons';
import SmileyAssistant from '../assistant/SmileyAssistant';
import ErrorBoundary from './ErrorBoundary';
import '../styles/assistant.css';

const APPS_CONFIG = {
  about: {
    id: 'about',
    title: 'About Me - Argee Boy Paquibot',
    icon: <AppIcon name="about" size={16} />,
    component: AboutApp,
    defaultPos: { x: 120, y: 25 },
    defaultSize: { width: 660, height: 490 },
  },
  resume: {
    id: 'resume',
    title: 'resume.pdf - Document Viewer',
    icon: <AppIcon name="resume" size={16} />,
    component: ResumeApp,
    defaultPos: { x: 120, y: 55 },
    defaultSize: { width: 750, height: 560 },
  },
  projects: {
    id: 'projects',
    title: 'Projects Explorer - Internet Explorer 3.0',
    icon: <AppIcon name="projects" size={16} />,
    component: ProjectsApp,
    defaultPos: { x: 90, y: 55 },
    defaultSize: { width: 740, height: 510 },
  },
  achievements: {
    id: 'achievements',
    title: 'Achievements & Hackathon Honors',
    icon: <AppIcon name="achievements" size={16} />,
    component: AchievementsApp,
    defaultPos: { x: 130, y: 80 },
    defaultSize: { width: 720, height: 490 },
  },
  mail: {
    id: 'mail',
    title: 'Outlook Express - Send Message to Argee',
    icon: <AppIcon name="mail" size={16} />,
    component: ContactApp,
    defaultPos: { x: 170, y: 105 },
    defaultSize: { width: 700, height: 530 },
  },
};

const DESKTOP_ICONS = [
  {
    id: 'about',
    label: 'About Me',
    icon: <AppIcon name="about" size={32} />,
    hint: 'View Argee Boy Paquibot Profile & Skills',
  },
  {
    id: 'resume',
    label: 'resume.pdf',
    icon: <AppIcon name="resume" size={32} />,
    hint: 'Argee Boy Paquibot Resume - PDF Document',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <AppIcon name="projects" size={32} />,
    hint: 'Browse Hackathon & Engineering Projects',
  },
  {
    id: 'achievements',
    label: 'Achievements',
    icon: <AppIcon name="achievements" size={32} />,
    hint: 'View Hackathon Trophies & Awards',
  },
  {
    id: 'mail',
    label: 'Send Message',
    icon: <AppIcon name="mail" size={32} />,
    hint: 'Send a message or email directly to Argee',
  },
  {
    id: 'smiley',
    label: 'Smiley Guide',
    icon: <AppIcon name="smiley" size={32} />,
    hint: 'AI Assistant & Desktop Guide (Interactive Tour & Sarcasm)',
  },
  {
    id: 'recycle',
    label: 'Recycle Bin',
    icon: <AppIcon name="recycle" size={32} />,
    hint: 'Empty',
  },
];

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState([
    {
      ...APPS_CONFIG.about,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
    },
  ]);

  const [activeWindowId, setActiveWindowId] = useState('about');
  const [selectedIconId, setSelectedIconId] = useState(null);
  const [startOpen, setStartOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(true);
  const [showShutdownDialog, setShowShutdownDialog] = useState(false);
  const [isShutDown, setIsShutDown] = useState(false);
  const topZIndex = useRef(11);
  const soundStarted = useRef(false);

  // Play startup sound on first user click anywhere
  const handleInitialUserGesture = () => {
    if (!soundStarted.current) {
      soundStarted.current = true;
      sounds.playStartup();
    }
  };

  const bringToFront = (id) => {
    topZIndex.current += 1;
    setActiveWindowId(id);
    setOpenWindows((prev) =>
      prev.map((win) =>
        win.id === id ? { ...win, zIndex: topZIndex.current, isMinimized: false } : win
      )
    );
  };

  const openApp = (id) => {
    sounds.playClick();
    if (id === 'smiley') {
      setAssistantOpen(true);
      if (sounds.playAssistantPop) sounds.playAssistantPop();
      return;
    }

    if (id === 'recycle') {
      sounds.playDing();
      alert('Recycle Bin is empty. No bugs or deleted features found!');
      return;
    }

    const config = APPS_CONFIG[id];
    if (!config) return;

    topZIndex.current += 1;
    const nextZ = topZIndex.current;
    setActiveWindowId(id);

    setOpenWindows((prev) => {
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        return prev.map((w) =>
          w.id === id ? { ...w, isMinimized: false, zIndex: nextZ } : w
        );
      } else {
        return [
          ...prev,
          {
            ...config,
            isMinimized: false,
            isMaximized: false,
            zIndex: nextZ,
          },
        ];
      }
    });
  };

  const handleMinimize = (id) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
    if (activeWindowId === id) {
      const remaining = openWindows.filter((w) => w.id !== id && !w.isMinimized);
      if (remaining.length > 0) {
        const top = remaining.reduce((highest, curr) =>
          curr.zIndex > highest.zIndex ? curr : highest
        );
        setActiveWindowId(top.id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  const handleMaximize = (id) => {
    setOpenWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w))
    );
  };

  const handleClose = (id) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
    if (activeWindowId === id) {
      const remaining = openWindows.filter((w) => w.id !== id && !w.isMinimized);
      if (remaining.length > 0) {
        const top = remaining.reduce((highest, curr) =>
          curr.zIndex > highest.zIndex ? curr : highest
        );
        setActiveWindowId(top.id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  const handleTaskbarClick = (id) => {
    const win = openWindows.find((w) => w.id === id);
    if (!win) return;

    if (win.isMinimized) {
      bringToFront(id);
    } else if (activeWindowId === id) {
      handleMinimize(id);
    } else {
      bringToFront(id);
    }
  };

  const handleDesktopClick = (e) => {
    handleInitialUserGesture();
    // If clicking on desktop background, deselect icon and close Start Menu
    if (!e.target.closest('.w95-desktop-icon') && !e.target.closest('.w95-start-btn') && !e.target.closest('.w95-start-menu')) {
      setSelectedIconId(null);
      setStartOpen(false);
    }
  };

  // Safe to Turn Off Computer Screen
  if (isShutDown) {
    return (
      <div className="shutdown-safe-screen">
        <div style={{ fontSize: '40px' }}>💾</div>
        <div className="shutdown-safe-text">
          It's now safe to turn off your computer.
        </div>
        <button
          type="button"
          className="reboot-btn"
          onClick={() => {
            setIsShutDown(false);
            sounds.playStartup();
          }}
        >
          🔄 Restart Portfolio OS
        </button>
      </div>
    );
  }

  return (
    <div className="w95-desktop" onMouseDown={handleDesktopClick}>
      {/* Desktop Icons */}
      <div className="w95-desktop-icons">
        {DESKTOP_ICONS.map((icon) => (
          <div
            key={icon.id}
            className={`w95-desktop-icon ${selectedIconId === icon.id ? 'selected' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              handleInitialUserGesture();
              setSelectedIconId(icon.id);
              openApp(icon.id);
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              openApp(icon.id);
            }}
            title={icon.hint}
          >
            <div className="w95-icon-graphic">{icon.icon}</div>
            <div className="w95-icon-label">{icon.label}</div>
          </div>
        ))}
      </div>

      {/* Floating Windows Layer */}
      <div className="w95-windows-container">
        {openWindows.map((win) => {
          const AppComponent = win.component;
          return (
            <WindowFrame
              key={win.id}
              id={win.id}
              title={win.title}
              icon={win.icon}
              isActive={win.id === activeWindowId && !win.isMinimized}
              isMinimized={win.isMinimized}
              isMaximized={win.isMaximized}
              zIndex={win.zIndex}
              initialPosition={win.defaultPos}
              initialSize={win.defaultSize}
              onFocus={() => bringToFront(win.id)}
              onMinimize={() => handleMinimize(win.id)}
              onMaximize={() => handleMaximize(win.id)}
              onClose={() => handleClose(win.id)}
            >
              <ErrorBoundary onReset={() => handleClose(win.id)}>
                <AppComponent
                  onOpenMail={() => openApp('mail')}
                  onOpenResume={() => openApp('resume')}
                  onOpenApp={(id) => openApp(id)}
                />
              </ErrorBoundary>
            </WindowFrame>
          );
        })}
      </div>

      {/* Start Menu */}
      {startOpen && (
        <StartMenu
          onOpenApp={(id) => {
            openApp(id);
            setStartOpen(false);
          }}
          onToggleAssistant={() => {
            setAssistantOpen((prev) => !prev);
            setStartOpen(false);
          }}
          onOpenShutdown={() => {
            setShowShutdownDialog(true);
            setStartOpen(false);
          }}
          onClose={() => setStartOpen(false)}
        />
      )}

      {/* Classic Windows 95 Taskbar */}
      <Taskbar
        startOpen={startOpen}
        onToggleStart={() => setStartOpen((prev) => !prev)}
        windows={openWindows}
        activeWindowId={activeWindowId}
        onTaskClick={handleTaskbarClick}
        onToggleAssistant={() => setAssistantOpen((prev) => !prev)}
      />

      {/* Retro 3D Ball Smiley AI Assistant */}
      <SmileyAssistant
        openApp={openApp}
        isOpen={assistantOpen}
        onCloseToggle={() => setAssistantOpen(false)}
      />

      {/* Classic Windows 95 Shut Down Dialog */}
      {showShutdownDialog && (
        <div className="shutdown-modal-backdrop" onMouseDown={() => sounds.playDing()}>
          <div
            className="w95-window shutdown-dialog"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="win95-titlebar">
              <div className="win95-title-left">
                <span className="win95-title-icon">
                  <AppIcon name="shutdown" size={16} />
                </span>
                <span>Shut Down Windows</span>
              </div>
              <div className="win95-title-controls">
                <button
                  type="button"
                  className="win95-title-btn"
                  onClick={() => setShowShutdownDialog(false)}
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="shutdown-dialog-content">
              <div className="shutdown-computer-icon">🖥️</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p>What would you like the computer to do?</p>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <input type="radio" name="shutdown-opt" defaultChecked readOnly />
                  <span>Shut down</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <input type="radio" name="shutdown-opt" disabled />
                  <span style={{ color: '#888888' }}>Restart</span>
                </label>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '6px',
                padding: '8px 12px',
                borderTop: '1px solid #dfdfdf',
              }}
            >
              <button
                type="button"
                className="win95-btn"
                onClick={() => {
                  setShowShutdownDialog(false);
                  setIsShutDown(true);
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className="win95-btn"
                onClick={() => setShowShutdownDialog(false)}
              >
                No
              </button>
              <button
                type="button"
                className="win95-btn"
                onClick={() => {
                  sounds.playDing();
                  alert('Windows 95 Portfolio Help: Navigate between About, Projects, and Achievements apps!');
                }}
              >
                Help
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
