import { PROFILE } from '../data/resumeData';
import { sounds } from './soundEffects';
import AppIcon from './appIcons';

export default function StartMenu({ onOpenApp, onToggleAssistant, onOpenShutdown, onClose }) {
  const handleItem = (action) => {
    sounds.playClick();
    action();
    onClose();
  };

  return (
    <div className="w95-start-menu" onMouseDown={(e) => e.stopPropagation()}>
      {/* Blue Windows 95 Brand Sidebar */}
      <div className="w95-start-sidebar">
        <div className="w95-start-sidebar-text">
          Windows<span>95</span>
        </div>
      </div>

      {/* Menu Options */}
      <div className="w95-start-items">
        <button
          type="button"
          className="w95-start-item"
          onClick={() => handleItem(() => onOpenApp('about'))}
        >
          <span className="w95-start-item-icon">
            <AppIcon name="about" size={16} />
          </span>
          <span>About Me</span>
        </button>

        <button
          type="button"
          className="w95-start-item"
          onClick={() => handleItem(() => onOpenApp('resume'))}
        >
          <span className="w95-start-item-icon">
            <AppIcon name="resume" size={16} />
          </span>
          <span>resume.pdf</span>
        </button>

        <button
          type="button"
          className="w95-start-item"
          onClick={() => handleItem(() => onOpenApp('projects'))}
        >
          <span className="w95-start-item-icon">
            <AppIcon name="projects" size={16} />
          </span>
          <span>Projects Explorer</span>
        </button>

        <button
          type="button"
          className="w95-start-item"
          onClick={() => handleItem(() => onOpenApp('achievements'))}
        >
          <span className="w95-start-item-icon">
            <AppIcon name="achievements" size={16} />
          </span>
          <span>Achievements</span>
        </button>

        <button
          type="button"
          className="w95-start-item"
          onClick={() => handleItem(() => onOpenApp('mail'))}
        >
          <span className="w95-start-item-icon">
            <AppIcon name="mail" size={16} />
          </span>
          <span>Send Message / Mail</span>
        </button>

        <button
          type="button"
          className="w95-start-item"
          onClick={() => handleItem(onToggleAssistant)}
        >
          <span className="w95-start-item-icon">
            <AppIcon name="smiley" size={16} />
          </span>
          <span>Smiley Assistant Guide</span>
        </button>

        <div className="w95-start-divider" />

        <a
          href={PROFILE.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="w95-start-item"
          onClick={() => sounds.playClick()}
        >
          <span className="w95-start-item-icon">
            <AppIcon name="linkedin" size={16} />
          </span>
          <span>LinkedIn Profile</span>
        </a>

        <a
          href={PROFILE.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="w95-start-item"
          onClick={() => sounds.playClick()}
        >
          <span className="w95-start-item-icon">
            <AppIcon name="github" size={16} />
          </span>
          <span>GitHub Profile</span>
        </a>

        <a
          href={`mailto:${PROFILE.email}`}
          className="w95-start-item"
          onClick={() => sounds.playClick()}
        >
          <span className="w95-start-item-icon">
            <AppIcon name="mail" size={16} />
          </span>
          <span>Send Email</span>
        </a>

        <div className="w95-start-divider" />

        <button
          type="button"
          className="w95-start-item"
          onClick={() => handleItem(onOpenShutdown)}
        >
          <span className="w95-start-item-icon">
            <AppIcon name="shutdown" size={16} />
          </span>
          <span>Shut Down...</span>
        </button>
      </div>
    </div>
  );
}
