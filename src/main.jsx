import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './common/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter> {/* Wrap App with BrowserRouter */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
