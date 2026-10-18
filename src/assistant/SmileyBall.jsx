import { useEffect, useState } from 'react';

/**
 * Authentic Circular Minimalist Pixel-Art Smiley Ball Component
 * Matches the iconic circular pixel-art yellow smiley with top-left curved gloss,
 * vertical capsule eyes, and clean curved smile.
 * Supports moods: 'idle', 'speaking', 'sarcastic', 'happy', 'proud', 'thinking'
 */
export default function SmileyBall({ mood = 'idle', isSpeaking = false, onClick, size = 96 }) {
  const [blink, setBlink] = useState(false);
  const [talkFrame, setTalkFrame] = useState(0);

  // Periodic natural blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 3800 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Talking mouth animation loop
  useEffect(() => {
    if (!isSpeaking) {
      setTalkFrame(0);
      return;
    }
    const talkInterval = setInterval(() => {
      setTalkFrame((prev) => (prev === 0 ? 1 : 0));
    }, 180);

    return () => clearInterval(talkInterval);
  }, [isSpeaking]);

  const activeMood = isSpeaking ? 'speaking' : mood;

  return (
    <div
      className={`smiley-ball-pixel-wrapper mood-${activeMood}`}
      onClick={onClick}
      style={{ width: `${size}px`, height: `${size + 8}px` }}
      title="Click me to chat with Smiley!"
    >
      <svg
        className="smiley-pixel-svg"
        viewBox="0 0 32 32"
        width={size}
        height={size}
        style={{ shapeRendering: 'crispEdges', imageRendering: 'pixelated' }}
      >
        {/* ==================== 1. CIRCLE BLACK OUTLINE ==================== */}
        {/* Top/Bottom Horizontal caps */}
        <rect x="11" y="2" width="10" height="1" fill="#000000" />
        <rect x="11" y="29" width="10" height="1" fill="#000000" />

        {/* Diagonal Corner Steps */}
        <rect x="8" y="3" width="3" height="1" fill="#000000" />
        <rect x="21" y="3" width="3" height="1" fill="#000000" />
        <rect x="8" y="28" width="3" height="1" fill="#000000" />
        <rect x="21" y="28" width="3" height="1" fill="#000000" />

        <rect x="6" y="4" width="2" height="1" fill="#000000" />
        <rect x="24" y="4" width="2" height="1" fill="#000000" />
        <rect x="6" y="27" width="2" height="1" fill="#000000" />
        <rect x="24" y="27" width="2" height="1" fill="#000000" />

        <rect x="4" y="5" width="2" height="1" fill="#000000" />
        <rect x="26" y="5" width="2" height="1" fill="#000000" />
        <rect x="4" y="26" width="2" height="1" fill="#000000" />
        <rect x="26" y="26" width="2" height="1" fill="#000000" />

        <rect x="3" y="6" width="1" height="2" fill="#000000" />
        <rect x="28" y="6" width="1" height="2" fill="#000000" />
        <rect x="3" y="24" width="1" height="2" fill="#000000" />
        <rect x="28" y="24" width="1" height="2" fill="#000000" />

        {/* Left & Right Vertical Sides */}
        <rect x="2" y="8" width="1" height="16" fill="#000000" />
        <rect x="29" y="8" width="1" height="16" fill="#000000" />

        {/* ==================== 2. SOLID VIBRANT YELLOW FILL ==================== */}
        <rect x="11" y="3" width="10" height="1" fill="#ffe600" />
        <rect x="8" y="4" width="16" height="1" fill="#ffe600" />
        <rect x="6" y="5" width="20" height="1" fill="#ffe600" />
        <rect x="4" y="6" width="24" height="2" fill="#ffe600" />
        <rect x="3" y="8" width="26" height="16" fill="#ffe600" />
        <rect x="4" y="24" width="24" height="2" fill="#ffe600" />
        <rect x="6" y="26" width="20" height="1" fill="#ffe600" />
        <rect x="8" y="27" width="16" height="1" fill="#ffe600" />
        <rect x="11" y="28" width="10" height="1" fill="#ffe600" />

        {/* ==================== 3. SIGNATURE TOP-LEFT CURVED GLOSS HIGHLIGHT ==================== */}
        {/* Crisp curved white shine matching reference image */}
        <rect x="9" y="4" width="3" height="1" fill="#ffffff" />
        <rect x="7" y="5" width="3" height="1" fill="#ffffff" />
        <rect x="5" y="6" width="3" height="1" fill="#ffffff" />
        <rect x="5" y="7" width="2" height="1" fill="#ffffff" />
        <rect x="4" y="8" width="2" height="3" fill="#ffffff" />
        <rect x="4" y="11" width="1" height="1" fill="#ffffff" />

        {/* ==================== 4. EYES ==================== */}
        {blink ? (
          <>
            {/* Blinking: Clean horizontal slit */}
            <rect x="10" y="14" width="4" height="1" fill="#000000" />
            <rect x="18" y="14" width="4" height="1" fill="#000000" />
          </>
        ) : activeMood === 'happy' || activeMood === 'proud' ? (
          <>
            {/* Cheerful Caret Eyes (^ ^) */}
            <rect x="10" y="13" width="1" height="2" fill="#000000" />
            <rect x="11" y="12" width="2" height="1" fill="#000000" />
            <rect x="13" y="13" width="1" height="2" fill="#000000" />

            <rect x="18" y="13" width="1" height="2" fill="#000000" />
            <rect x="19" y="12" width="2" height="1" fill="#000000" />
            <rect x="21" y="13" width="1" height="2" fill="#000000" />
          </>
        ) : activeMood === 'sarcastic' ? (
          <>
            {/* Left Eyebrow Raised Skeptical */}
            <rect x="9" y="8" width="4" height="1" fill="#000000" />
            {/* Left Eye: Standard Capsule */}
            <rect x="11" y="11" width="2" height="5" fill="#000000" />
            <rect x="10" y="12" width="4" height="3" fill="#000000" />

            {/* Right Eyebrow Flat */}
            <rect x="19" y="9" width="3" height="1" fill="#000000" />
            {/* Right Eye: Standard Capsule */}
            <rect x="19" y="11" width="2" height="5" fill="#000000" />
            <rect x="18" y="12" width="4" height="3" fill="#000000" />
          </>
        ) : activeMood === 'thinking' ? (
          <>
            {/* Thinking: Eyes shifted upward */}
            <rect x="11" y="10" width="2" height="5" fill="#000000" />
            <rect x="10" y="11" width="4" height="3" fill="#000000" />

            <rect x="19" y="10" width="2" height="5" fill="#000000" />
            <rect x="18" y="11" width="4" height="3" fill="#000000" />
          </>
        ) : (
          <>
            {/* Default Iconic Vertical Capsule/Pill Eyes (from Reference Image) */}
            {/* Left Eye */}
            <rect x="11" y="11" width="2" height="5" fill="#000000" />
            <rect x="10" y="12" width="4" height="3" fill="#000000" />

            {/* Right Eye */}
            <rect x="19" y="11" width="2" height="5" fill="#000000" />
            <rect x="18" y="12" width="4" height="3" fill="#000000" />
          </>
        )}

        {/* ==================== 5. MOUTH ==================== */}
        {activeMood === 'sarcastic' ? (
          <>
            {/* Crooked Smirk */}
            <rect x="10" y="21" width="2" height="1" fill="#000000" />
            <rect x="12" y="22" width="4" height="1" fill="#000000" />
            <rect x="16" y="21" width="4" height="1" fill="#000000" />
            <rect x="20" y="20" width="2" height="1" fill="#000000" />
            <rect x="22" y="19" width="1" height="2" fill="#000000" />
          </>
        ) : activeMood === 'speaking' ? (
          talkFrame === 0 ? (
            <>
              {/* Speaking Mouth Open */}
              <rect x="11" y="19" width="10" height="3" fill="#000000" />
              <rect x="12" y="20" width="8" height="1" fill="#ffe600" />
            </>
          ) : (
            <>
              {/* Speaking Mouth Closed */}
              <rect x="12" y="20" width="8" height="1" fill="#000000" />
            </>
          )
        ) : activeMood === 'happy' || activeMood === 'proud' ? (
          <>
            {/* Wide Joyful Smile */}
            <rect x="7" y="16" width="1" height="2" fill="#000000" />
            <rect x="8" y="18" width="1" height="1" fill="#000000" />
            <rect x="9" y="19" width="1" height="1" fill="#000000" />
            <rect x="10" y="20" width="2" height="1" fill="#000000" />
            <rect x="12" y="21" width="8" height="1" fill="#000000" />
            <rect x="20" y="20" width="2" height="1" fill="#000000" />
            <rect x="22" y="19" width="1" height="1" fill="#000000" />
            <rect x="23" y="18" width="1" height="1" fill="#000000" />
            <rect x="24" y="16" width="1" height="2" fill="#000000" />
          </>
        ) : activeMood === 'thinking' ? (
          <>
            {/* Cute 'o' mouth */}
            <rect x="14" y="19" width="4" height="3" fill="#000000" />
            <rect x="15" y="20" width="2" height="1" fill="#ffe600" />
          </>
        ) : (
          <>
            {/* Iconic Classic Smile Curve (from Reference Image) */}
            <rect x="8" y="17" width="1" height="2" fill="#000000" />
            <rect x="9" y="19" width="1" height="1" fill="#000000" />
            <rect x="10" y="20" width="1" height="1" fill="#000000" />
            <rect x="11" y="21" width="2" height="1" fill="#000000" />
            <rect x="13" y="22" width="6" height="1" fill="#000000" />
            <rect x="19" y="21" width="2" height="1" fill="#000000" />
            <rect x="21" y="20" width="1" height="1" fill="#000000" />
            <rect x="22" y="19" width="1" height="1" fill="#000000" />
            <rect x="23" y="17" width="1" height="2" fill="#000000" />
          </>
        )}
      </svg>
    </div>
  );
}
