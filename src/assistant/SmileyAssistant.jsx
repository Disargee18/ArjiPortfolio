import { useState, useEffect, useRef } from 'react';
import SmileyBall from './SmileyBall';
import SmileyBubble from './SmileyBubble';
import { INTRO_MESSAGE, TOUR_STEPS, resolveQuery } from './assistantEngine';
import { sounds } from '../os/soundEffects';

export default function SmileyAssistant({ openApp, isOpen = true, onCloseToggle }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hasCustomPos, setHasCustomPos] = useState(false);
  const [isBubbleOpen, setIsBubbleOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(INTRO_MESSAGE);
  const [mood, setMood] = useState('happy');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  const isDragging = useRef(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const rootRef = useRef(null);

  // Position default near bottom-right on mount
  useEffect(() => {
    const updateDefaultPos = () => {
      if (!hasCustomPos && typeof window !== 'undefined') {
        const defaultX = Math.max(window.innerWidth - 130, 20);
        const defaultY = Math.max(window.innerHeight - 170, 40);
        setPosition({ x: defaultX, y: defaultY });
      }
    };

    updateDefaultPos();
    window.addEventListener('resize', updateDefaultPos);
    return () => window.removeEventListener('resize', updateDefaultPos);
  }, [hasCustomPos]);

  // Initial chirp when Smiley appears
  useEffect(() => {
    if (sounds.playAssistantPop) {
      sounds.playAssistantPop();
    }
  }, []);

  // When message changes, animate speaking
  useEffect(() => {
    if (currentMessage?.text) {
      setIsSpeaking(true);
      setMood(currentMessage.mood || 'speaking');

      if (currentMessage.mood === 'sarcastic' && sounds.playAssistantSarcasm) {
        sounds.playAssistantSarcasm();
      } else if (currentMessage.isTour && sounds.playAssistantChime) {
        sounds.playAssistantChime();
      } else if (sounds.playAssistantPop) {
        sounds.playAssistantPop();
      }

      const speakDuration = Math.min(currentMessage.text.length * 15 + 400, 3200);
      const timer = setTimeout(() => {
        setIsSpeaking(false);
        // keep sarcastic expression a bit longer for comedic effect!
        if (currentMessage.mood !== 'sarcastic') {
          setMood('idle');
        }
      }, speakDuration);

      return () => clearTimeout(timer);
    }
  }, [currentMessage]);

  // Drag handling
  const handlePointerDown = (e) => {
    // Only drag from smiley ball area
    if (e.target.closest('.smiley-bubble-window')) return;

    isDragging.current = true;
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };

    const handlePointerMove = (moveEvent) => {
      if (!isDragging.current) return;
      setHasCustomPos(true);
      const newX = Math.max(10, Math.min(window.innerWidth - 120, moveEvent.clientX - dragStartPos.current.x));
      const newY = Math.max(10, Math.min(window.innerHeight - 160, moveEvent.clientY - dragStartPos.current.y));
      setPosition({ x: newX, y: newY });
    };

    const handlePointerUp = () => {
      isDragging.current = false;
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  // User queries
  const handleUserQuery = (queryText) => {
    const response = resolveQuery(queryText, tourStep);

    if (response.isTour) {
      setTourStep(1);
      openApp('about');
    }

    setCurrentMessage(response);
    setIsBubbleOpen(true);
  };

  // Action clicks (buttons inside speech bubble)
  const handleActionClick = (action) => {
    if (!action) return;
    try {
      if (sounds.playClick) sounds.playClick();

      if (action.actionType === 'open_app') {
        if (action.target) {
          openApp(action.target);
        }
      } else if (action.actionType === 'open_link') {
        if (action.target) {
          window.open(action.target, '_blank');
        }
      } else if (action.actionType === 'query') {
        handleUserQuery(action.query || '');
      } else if (action.actionType === 'tour_start') {
        setTourStep(1);
        openApp(TOUR_STEPS[0].targetApp);
        setCurrentMessage({
          id: `tour-1`,
          sender: 'smiley',
          isTour: true,
          ...TOUR_STEPS[0],
        });
      } else if (action.actionType === 'tour_next') {
        const nextIdx = (action.nextStep || 1) - 1;
        if (nextIdx < TOUR_STEPS.length) {
          const nextStep = TOUR_STEPS[nextIdx];
          setTourStep(action.nextStep);
          openApp(nextStep.targetApp);
          setCurrentMessage({
            id: `tour-${action.nextStep}`,
            sender: 'smiley',
            isTour: true,
            ...nextStep,
          });
        }
      } else if (action.actionType === 'tour_end') {
        setTourStep(0);
        setCurrentMessage({
          id: 'tour-ended',
          sender: 'smiley',
          mood: 'happy',
          text: "That wraps up our tour! Feel free to explore freely or ask me anything whenever you're curious.",
          actions: [
            { label: '💼 Projects', actionType: 'open_app', target: 'projects' },
            { label: '🏆 Achievements', actionType: 'open_app', target: 'achievements' },
            { label: '📬 Contact', actionType: 'open_app', target: 'mail' },
          ],
        });
      }
    } catch (err) {
      console.error('Error in handleActionClick:', err);
    }
  };

  if (!isOpen) {
    return null;
  }

  // If minimized into a small pill
  if (isMinimized) {
    return (
      <div
        className="smiley-minimized-pill"
        onClick={() => {
          setIsMinimized(false);
          setIsBubbleOpen(true);
          if (sounds.playAssistantPop) sounds.playAssistantPop();
        }}
        title="Open Smiley Assistant"
      >
        <span>🙂</span>
        <span>Smiley Guide</span>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="smiley-assistant-root"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onPointerDown={handlePointerDown}
    >
      {/* Speech Bubble Dialog */}
      {isBubbleOpen && (
        <SmileyBubble
          currentMessage={currentMessage}
          isSpeaking={isSpeaking}
          onUserSubmit={handleUserQuery}
          onActionClick={handleActionClick}
          onClose={() => setIsBubbleOpen(false)}
          onMinimize={() => setIsMinimized(true)}
        />
      )}

      {/* 3D Smiley Ball */}
      <div className="smiley-ball-container">
        <SmileyBall
          mood={mood}
          isSpeaking={isSpeaking}
          onClick={() => {
            if (sounds.playClick) sounds.playClick();
            setIsBubbleOpen((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
}
