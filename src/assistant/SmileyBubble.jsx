import { useState, useEffect, useRef } from 'react';

export default function SmileyBubble({
  currentMessage,
  isSpeaking,
  onUserSubmit,
  onActionClick,
  onClose,
  onMinimize,
}) {
  const [inputText, setInputText] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const inputRef = useRef(null);

  // Typewriter streaming effect
  useEffect(() => {
    if (!currentMessage?.text) {
      setDisplayedText('');
      return;
    }

    const fullText = currentMessage.text;
    setDisplayedText('');

    let idx = 0;
    const interval = setInterval(() => {
      idx += 3; // Stream 3 chars per tick for snappy retro feel
      if (idx >= fullText.length) {
        setDisplayedText(fullText);
        clearInterval(interval);
      } else {
        setDisplayedText(fullText.slice(0, idx));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [currentMessage?.text]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;
    const q = inputText.trim();
    setInputText('');
    onUserSubmit(q);
  };

  return (
    <div className="smiley-bubble-window w95-window" onMouseDown={(e) => e.stopPropagation()}>
      {/* Speech Pointer Tail */}
      <div className="smiley-bubble-tail" />

      {/* Classic Win95 Titlebar */}
      <div className="win95-titlebar smiley-titlebar">
        <div className="win95-title-left">
          <span className="smiley-mini-badge">🙂</span>
          <span className="smiley-title-text">Smiley - Win95 Assistant</span>
        </div>
        <div className="win95-title-controls">
          <button
            type="button"
            className="win95-title-btn"
            onClick={onMinimize}
            title="Minimize Assistant"
          >
            _
          </button>
          <button
            type="button"
            className="win95-title-btn"
            onClick={onClose}
            title="Close Assistant"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Speech Content Body */}
      <div className="smiley-bubble-body">
        {/* Assistant Message Bubble */}
        <div className="smiley-speech-box">
          <div className="smiley-speech-text">
            {displayedText.split('**').map((part, i) =>
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
            {displayedText.length < (currentMessage?.text?.length || 0) && (
              <span className="typewriter-cursor">▋</span>
            )}
          </div>
        </div>

        {/* Dynamic Action Buttons */}
        {currentMessage?.actions && currentMessage.actions.length > 0 && (
          <div className="smiley-actions-grid">
            {currentMessage.actions.map((act, index) => (
              <button
                key={index}
                type="button"
                className="win95-btn smiley-action-btn"
                onClick={() => onActionClick(act)}
              >
                {act.label}
              </button>
            ))}
          </div>
        )}

        {/* User Question Input Form */}
        <form className="smiley-input-form" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="w95-input smiley-input"
            placeholder="Ask Smiley about Argee's work..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit" className="win95-btn smiley-submit-btn">
            Ask
          </button>
        </form>
      </div>
    </div>
  );
}
