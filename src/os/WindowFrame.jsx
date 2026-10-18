import { useState, useRef, useEffect } from 'react';
import { sounds } from './soundEffects';

export default function WindowFrame({
  id,
  title,
  icon,
  children,
  isActive,
  isMinimized,
  isMaximized,
  zIndex,
  initialPosition = { x: 50, y: 30 },
  initialSize = { width: 680, height: 480 },
  onFocus,
  onMinimize,
  onMaximize,
  onClose,
}) {
  const [position, setPosition] = useState(() => {
    if (typeof window !== 'undefined') {
      const maxX = Math.max(10, window.innerWidth - 100);
      const maxY = Math.max(10, window.innerHeight - 100);
      return {
        x: Math.min(Math.max(10, initialPosition.x), maxX),
        y: Math.min(Math.max(10, initialPosition.y), maxY),
      };
    }
    return initialPosition;
  });

  const [size, setSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return {
        width: Math.min(initialSize.width, Math.max(320, window.innerWidth - 20)),
        height: Math.min(initialSize.height, Math.max(220, window.innerHeight - 50)),
      };
    }
    return initialSize;
  });
  const isDragging = useRef(false);
  const isResizing = useRef(false);
  const dragStart = useRef({ mouseX: 0, mouseY: 0, windowX: 0, windowY: 0 });
  const resizeStart = useRef({ mouseX: 0, mouseY: 0, windowW: 0, windowH: 0 });

  // Handle Dragging
  const handleMouseDownTitle = (e) => {
    // Only drag with left mouse button and not on buttons
    if (e.button !== 0 || e.target.closest('button')) return;
    if (isMaximized) return;

    onFocus();
    isDragging.current = true;
    dragStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      windowX: position.x,
      windowY: position.y,
    };
  };

  // Handle Resizing
  const handleMouseDownResize = (e) => {
    if (e.button !== 0 || isMaximized) return;
    e.stopPropagation();
    onFocus();
    isResizing.current = true;
    resizeStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      windowW: size.width,
      windowH: size.height,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging.current) {
        const deltaX = e.clientX - dragStart.current.mouseX;
        const deltaY = e.clientY - dragStart.current.mouseY;
        const newX = Math.max(0, Math.min(window.innerWidth - 100, dragStart.current.windowX + deltaX));
        const newY = Math.max(0, Math.min(window.innerHeight - 80, dragStart.current.windowY + deltaY));
        setPosition({ x: newX, y: newY });
      } else if (isResizing.current) {
        const deltaX = e.clientX - resizeStart.current.mouseX;
        const deltaY = e.clientY - resizeStart.current.mouseY;
        const newW = Math.max(340, resizeStart.current.windowW + deltaX);
        const newH = Math.max(240, resizeStart.current.windowH + deltaY);
        setSize({ width: newW, height: newH });
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      isResizing.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isMinimized) return null;

  return (
    <div
      className={`w95-window ${isMaximized ? 'maximized' : ''}`}
      style={{
        zIndex,
        left: isMaximized ? 0 : `${position.x}px`,
        top: isMaximized ? 0 : `${position.y}px`,
        width: isMaximized ? '100%' : `${size.width}px`,
        height: isMaximized ? '100%' : `${size.height}px`,
      }}
      onMouseDown={onFocus}
    >
      {/* Title Bar */}
      <div
        className={`win95-titlebar ${isActive ? '' : 'inactive'}`}
        onMouseDown={handleMouseDownTitle}
        onDoubleClick={() => {
          sounds.playClick();
          onMaximize();
        }}
      >
        <div className="win95-title-left">
          <span className="win95-title-icon">{icon}</span>
          <span>{title}</span>
        </div>

        <div className="win95-title-controls">
          <button
            type="button"
            className="win95-title-btn"
            onClick={(e) => {
              e.stopPropagation();
              sounds.playClick();
              onMinimize();
            }}
            title="Minimize"
          >
            _
          </button>
          <button
            type="button"
            className="win95-title-btn"
            onClick={(e) => {
              e.stopPropagation();
              sounds.playClick();
              onMaximize();
            }}
            title={isMaximized ? 'Restore' : 'Maximize'}
          >
            {isMaximized ? '❐' : '□'}
          </button>
          <button
            type="button"
            className="win95-title-btn"
            onClick={(e) => {
              e.stopPropagation();
              sounds.playClick();
              onClose();
            }}
            title="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Window Body & Inner Content */}
      <div className="w95-window-body">
        <div className="w95-window-inner-content">{children}</div>
      </div>

      {/* Resize Handle */}
      {!isMaximized && (
        <div
          className="w95-resize-handle"
          onMouseDown={handleMouseDownResize}
          title="Drag to resize"
        />
      )}
    </div>
  );
}
