import Desktop from './os/Desktop';
import ErrorBoundary from './os/ErrorBoundary';
import './styles/win95.css';
import './styles/desktop.css';

export default function App() {
  return (
    <ErrorBoundary>
      <Desktop />
    </ErrorBoundary>
  );
}
