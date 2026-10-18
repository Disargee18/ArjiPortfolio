import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Windows 95 Protected Subsystem caught error:', error, errorInfo);
  }

  handleRestart = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '16px',
            background: 'var(--w95-surface, #c0c0c0)',
            color: '#000000',
            fontFamily: 'ms_sans_serif, sans-serif',
            fontSize: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            border: '2px groove #ffffff',
            height: '100%',
            overflow: 'auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '24px' }}>⚠️</span>
            <div>
              <strong>Windows 95 Application Error</strong>
              <div style={{ fontSize: '11px', color: '#555555' }}>
                An illegal operation has been prevented.
              </div>
            </div>
          </div>
          <div
            style={{
              background: '#ffffff',
              padding: '8px',
              border: '1px solid #7f9db9',
              fontFamily: 'monospace',
              fontSize: '11px',
              whiteSpace: 'pre-wrap',
              maxHeight: '120px',
              overflow: 'auto',
            }}
          >
            {this.state.error?.message || 'Unknown runtime error'}
          </div>
          <div>
            <button
              type="button"
              className="win95-btn"
              onClick={this.handleRestart}
              style={{ padding: '4px 14px' }}
            >
              Close & Recover
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
