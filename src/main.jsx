import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';  // Import the ThemeProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>  {/* Wrap your App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
