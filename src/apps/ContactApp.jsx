import { useState } from 'react';
import { PROFILE } from '../data/resumeData';
import { sounds } from '../os/soundEffects';

export default function ContactApp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    sent: false,
    error: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status.error) {
      setStatus({ sent: false, error: '' });
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (isSubmitting) return;

    sounds.playClick();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      sounds.playDing();
      setStatus({ sent: false, error: 'Please enter your Name, Email Address, and Message.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ sent: false, error: '' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `Portfolio Message from ${formData.name.trim()}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        sounds.playDing();
        setStatus({ sent: true, error: '' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Transmission failed');
      }
    } catch (err) {
      sounds.playDing();
      setStatus({
        sent: false,
        error:
          'Transmission failed. Please check your internet connection or try again shortly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    if (isSubmitting) return;
    sounds.playClick();
    setFormData({ name: '', email: '', message: '' });
    setStatus({ sent: false, error: '' });
  };

  return (
    <div className="mail-retro-window">
      {/* Menu Bar */}
      <div className="mail-retro-menubar">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Insert</span>
        <span>Format</span>
        <span>Tools</span>
        <span>Compose</span>
        <span>Help</span>
      </div>

      {/* Retro 3D Toolbar */}
      <div className="mail-retro-toolbar">
        <button
          type="button"
          className="win95-btn mail-toolbar-btn"
          onClick={handleSubmit}
          disabled={isSubmitting}
          title="Send message now"
        >
          <span className="mail-toolbar-icon">{isSubmitting ? '⏳' : '📤'}</span>
          <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
        </button>

        <button
          type="button"
          className="win95-btn mail-toolbar-btn"
          onClick={handleReset}
          disabled={isSubmitting}
          title="Clear message"
        >
          <span className="mail-toolbar-icon">🗑️</span>
          <span>Clear</span>
        </button>

        <div className="mail-retro-divider" />

        <button
          type="button"
          className="win95-btn mail-toolbar-btn"
          onClick={() => {
            sounds.playClick();
            navigator.clipboard?.writeText(PROFILE.email);
            alert(`Copied ${PROFILE.email} to clipboard!`);
          }}
          title="Copy email address"
        >
          <span className="mail-toolbar-icon">📋</span>
          <span>Copy Address</span>
        </button>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#444444' }}>
          <span>Direct Inbox:</span>
          <strong style={{ color: 'var(--w95-navy-dark)' }}>{PROFILE.email}</strong>
        </div>
      </div>

      {/* Main Mail Compose Canvas */}
      <div className="mail-retro-canvas">
        {status.sent ? (
          /* Retro Windows 95 Message Sent Confirmation Dialog */
          <div className="mail-dialog-box win95-raised">
            <div className="mail-dialog-header">
              <span style={{ fontSize: '30px' }}>📬</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--w95-navy-dark)' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ fontSize: '11px', lineHeight: '1.45', color: '#000000' }}>
                  Your transmission was automatically delivered directly to <strong>{PROFILE.email}</strong>.
                </p>
                <p style={{ fontSize: '10px', color: '#555555' }}>
                  (No mail client or mailto link was opened).
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '16px' }}>
              <button
                type="button"
                className="win95-btn"
                onClick={handleReset}
                style={{ minWidth: '95px' }}
              >
                Send Another
              </button>
            </div>
          </div>
        ) : (
          <form className="mail-compose-form" onSubmit={handleSubmit}>
            {/* Header Rows */}
            <div className="mail-compose-row">
              <button
                type="button"
                className="win95-btn mail-field-btn"
                onClick={() => sounds.playDing()}
              >
                To...
              </button>
              <div className="mail-sunken-field readonly-field">
                Argee Boy Paquibot &lt;{PROFILE.email}&gt;
              </div>
            </div>

            <div className="mail-compose-row">
              <label className="mail-field-label" htmlFor="mail-name">
                Your Name:
              </label>
              <input
                id="mail-name"
                name="name"
                type="text"
                className="mail-sunken-input"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="mail-compose-row">
              <label className="mail-field-label" htmlFor="mail-email">
                Email Address:
              </label>
              <input
                id="mail-email"
                name="email"
                type="email"
                className="mail-sunken-input"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </div>

            {/* Error Banner */}
            {status.error && (
              <div className="mail-error-banner">
                ⚠️ {status.error}
              </div>
            )}

            {/* Message Body Textarea */}
            <div className="mail-textarea-wrapper">
              <textarea
                id="mail-message"
                name="message"
                className="mail-sunken-textarea"
                placeholder="Say Hello..."
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </div>

            {/* Retro Action Bar */}
            <div className="mail-action-footer">
              <button
                type="submit"
                className="win95-btn mail-submit-btn"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? '⏳ Transmitting Data...' : '✉ Send Message'}</span>
              </button>
              <button
                type="button"
                className="win95-btn"
                onClick={handleReset}
                disabled={isSubmitting}
              >
                Clear
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Status Bar */}
      <div className="win95-statusbar">
        <div className="win95-status-field">
          {isSubmitting
            ? 'Transmitting message to remote SMTP gateway...'
            : `Status: Connected to ${PROFILE.email}`}
        </div>
        <div className="win95-status-field fixed">
          {isSubmitting ? 'Sending...' : 'Auto-Dispatch'}
        </div>
      </div>
    </div>
  );
}
