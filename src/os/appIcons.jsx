import React from 'react';
import { Computer } from '@react95/icons/Computer';
import { Explore } from '@react95/icons/Explore';
import { Mail } from '@react95/icons/Mail';
import { RecycleEmpty } from '@react95/icons/RecycleEmpty';
import { Star } from '@react95/icons/Star';
import { PowerOff } from '@react95/icons/PowerOff';
import { Network } from '@react95/icons/Network';
import { Notepad } from '@react95/icons/Notepad';

/**
 * Custom Circular Minimalist Pixel-Art Smiley Ball Icon for Desktop / Menus
 * Matches the reference image: circular yellow pixel body, signature curved gloss,
 * vertical capsule eyes, and curved smile.
 */
export function SmileyBallIcon({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ shapeRendering: 'crispEdges', imageRendering: 'pixelated', display: 'inline-block' }}
    >
      {/* Circle Black Outline */}
      <rect x="11" y="2" width="10" height="1" fill="#000000" />
      <rect x="11" y="29" width="10" height="1" fill="#000000" />
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
      <rect x="2" y="8" width="1" height="16" fill="#000000" />
      <rect x="29" y="8" width="1" height="16" fill="#000000" />

      {/* Yellow Fill */}
      <rect x="11" y="3" width="10" height="1" fill="#ffe600" />
      <rect x="8" y="4" width="16" height="1" fill="#ffe600" />
      <rect x="6" y="5" width="20" height="1" fill="#ffe600" />
      <rect x="4" y="6" width="24" height="2" fill="#ffe600" />
      <rect x="3" y="8" width="26" height="16" fill="#ffe600" />
      <rect x="4" y="24" width="24" height="2" fill="#ffe600" />
      <rect x="6" y="26" width="20" height="1" fill="#ffe600" />
      <rect x="8" y="27" width="16" height="1" fill="#ffe600" />
      <rect x="11" y="28" width="10" height="1" fill="#ffe600" />

      {/* Signature Curved Top-Left White Gloss Highlight */}
      <rect x="9" y="4" width="3" height="1" fill="#ffffff" />
      <rect x="7" y="5" width="3" height="1" fill="#ffffff" />
      <rect x="5" y="6" width="3" height="1" fill="#ffffff" />
      <rect x="5" y="7" width="2" height="1" fill="#ffffff" />
      <rect x="4" y="8" width="2" height="3" fill="#ffffff" />
      <rect x="4" y="11" width="1" height="1" fill="#ffffff" />

      {/* Vertical Capsule Eyes */}
      <rect x="11" y="11" width="2" height="5" fill="#000000" />
      <rect x="10" y="12" width="4" height="3" fill="#000000" />
      <rect x="19" y="11" width="2" height="5" fill="#000000" />
      <rect x="18" y="12" width="4" height="3" fill="#000000" />

      {/* Curved Smile */}
      <rect x="8" y="17" width="1" height="2" fill="#000000" />
      <rect x="9" y="19" width="1" height="1" fill="#000000" />
      <rect x="10" y="20" width="1" height="1" fill="#000000" />
      <rect x="11" y="21" width="2" height="1" fill="#000000" />
      <rect x="13" y="22" width="6" height="1" fill="#000000" />
      <rect x="19" y="21" width="2" height="1" fill="#000000" />
      <rect x="21" y="20" width="1" height="1" fill="#000000" />
      <rect x="22" y="19" width="1" height="1" fill="#000000" />
      <rect x="23" y="17" width="1" height="2" fill="#000000" />
    </svg>
  );
}

/**
 * Pixel-art Windows 95 Gold Trophy Icon for Achievements
 */
export function Win95TrophyIcon({ size = 32 }) {
  if (size <= 16) {
    return <Star variant="16x16_4" />;
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ shapeRendering: 'crispEdges', display: 'inline-block' }}
    >
      {/* Golden Trophy Cup Body */}
      {/* Rim */}
      <rect x="8" y="4" width="16" height="3" fill="#ffea00" stroke="#000000" strokeWidth="1" />
      <rect x="10" y="5" width="12" height="1" fill="#ffffff" />
      {/* Main Cup */}
      <path
        d="M 8 7 L 24 7 L 22 17 L 18 20 L 14 20 L 10 17 Z"
        fill="#ffcc00"
        stroke="#000000"
        strokeWidth="1"
      />
      {/* Left Handle */}
      <path
        d="M 8 7 C 3 7 3 15 8 16"
        fill="none"
        stroke="#e65100"
        strokeWidth="2"
      />
      {/* Right Handle */}
      <path
        d="M 24 7 C 29 7 29 15 24 16"
        fill="none"
        stroke="#e65100"
        strokeWidth="2"
      />
      {/* Cup Highlight */}
      <path d="M 10 8 L 13 8 L 12 16 L 11 16 Z" fill="#ffffff" opacity="0.9" />
      <path d="M 19 8 L 22 8 L 20 16 L 19 16 Z" fill="#b26a00" />
      {/* Stem */}
      <rect x="14" y="20" width="4" height="4" fill="#ff9100" stroke="#000000" strokeWidth="1" />
      {/* Pedestal Base */}
      <rect x="11" y="24" width="10" height="3" fill="#6d4c41" stroke="#000000" strokeWidth="1" />
      <rect x="8" y="27" width="16" height="4" fill="#3e2723" stroke="#000000" strokeWidth="1" />
      {/* Gold Plaque */}
      <rect x="11" y="28" width="10" height="2" fill="#ffd54f" />
      {/* Star Badge on Trophy */}
      <polygon
        points="16,10 17.2,12.5 20,13 18,15 18.5,17.5 16,16 13.5,17.5 14,15 12,13 14.8,12.5"
        fill="#ffffff"
      />
    </svg>
  );
}

/**
 * Pixel-art Windows 95 GitHub / Octocat Icon
 */
export function Win95GitHubIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      style={{ shapeRendering: 'crispEdges', display: 'inline-block' }}
    >
      <rect x="3" y="2" width="10" height="12" rx="3" fill="#24292e" />
      {/* Ears */}
      <polygon points="3,2 5,0 6,2" fill="#24292e" />
      <polygon points="10,2 11,0 13,2" fill="#24292e" />
      {/* Face Inset */}
      <ellipse cx="8" cy="8.5" rx="3.5" ry="3" fill="#ffffff" />
      {/* Eyes */}
      <circle cx="6.5" cy="8.5" r="0.8" fill="#24292e" />
      <circle cx="9.5" cy="8.5" r="0.8" fill="#24292e" />
      {/* Nose */}
      <polygon points="8,9.5 7.5,10 8.5,10" fill="#ff80ab" />
    </svg>
  );
}

/**
 * Pixel-art Windows 95 PDF Document Icon (32x32)
 */
export function Win95PdfIcon({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ shapeRendering: 'crispEdges', display: 'inline-block' }}
    >
      {/* Shadow */}
      <rect x="7" y="5" width="18" height="24" fill="#000000" opacity="0.35" />
      {/* White Document Base */}
      <polygon points="6,4 19,4 25,10 25,28 6,28" fill="#ffffff" stroke="#000000" strokeWidth="1" />
      {/* Folded Top-Right Corner */}
      <polygon points="19,4 25,10 19,10" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
      {/* Red PDF Banner Ribbon */}
      <rect x="5" y="11" width="20" height="9" fill="#c00000" />
      <rect x="5" y="11" width="20" height="1" fill="#ff5555" />
      <rect x="5" y="19" width="20" height="1" fill="#700000" />
      {/* PDF Label text */}
      <text
        x="15"
        y="18"
        fontFamily="Arial, sans-serif"
        fontSize="7px"
        fontWeight="bold"
        fill="#ffffff"
        textAnchor="middle"
        letterSpacing="0.5px"
      >
        PDF
      </text>
      {/* Document Text Line Hints */}
      <rect x="9" y="22" width="12" height="1" fill="#808080" />
      <rect x="9" y="24" width="8" height="1" fill="#808080" />
    </svg>
  );
}

/**
 * Pixel-art Windows 95 PDF Document Small Icon (16x16)
 */
export function Win95PdfSmallIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" style={{ shapeRendering: 'crispEdges' }}>
      <polygon points="3,1 10,1 13,4 13,14 3,14" fill="#ffffff" stroke="#000000" strokeWidth="1" />
      <polygon points="10,1 13,4 10,4" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
      <rect x="2" y="6" width="12" height="5" fill="#c00000" />
      <text
        x="8"
        y="10"
        fontFamily="Arial, sans-serif"
        fontSize="4.5px"
        fontWeight="bold"
        fill="#ffffff"
        textAnchor="middle"
      >
        PDF
      </text>
    </svg>
  );
}

/**
 * Unified Windows 95 App Icon Component
 */
export default function AppIcon({ name, size = 32 }) {
  const isSmall = size <= 20;
  const variant = isSmall ? '16x16_4' : '32x32_4';

  switch (name) {
    case 'about':
      return <Computer variant={variant} />;
    case 'projects':
      // Explore in @react95/icons only has 32x32_4; passing 16x16_4 crashes React with undefined component
      return (
        <Explore
          variant="32x32_4"
          width={size}
          height={size}
          style={{ width: size, height: size, display: 'inline-block' }}
        />
      );
    case 'achievements':
      return isSmall ? <Star variant="16x16_4" /> : <Win95TrophyIcon size={size} />;
    case 'mail':
      return <Mail variant={variant} />;
    case 'recycle':
      return <RecycleEmpty variant={variant} />;
    case 'smiley':
      return <SmileyBallIcon size={size} />;
    case 'linkedin':
      return <Network variant={variant} />;
    case 'github':
      return <Win95GitHubIcon size={size} />;
    case 'shutdown':
      return <PowerOff variant={variant} />;
    case 'notepad':
      return <Notepad variant={variant} />;
    case 'pdf':
    case 'resume':
      return isSmall ? <Win95PdfSmallIcon /> : <Win95PdfIcon size={size} />;
    default:
      return <Computer variant={variant} />;
  }
}
