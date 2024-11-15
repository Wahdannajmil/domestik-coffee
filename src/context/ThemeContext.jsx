import { createContext, useContext, useState, useEffect } from 'react';

// Create a Context
const ThemeContext = createContext();

// Create a Provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.setProperty('--bg-color', '#432818'); 
      root.style.setProperty('--text-color', '#f5f5f5'); 
      root.style.setProperty('--accent-color', '#7b5e57');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--bg-color', '#f5f5f5'); 
      root.style.setProperty('--text-color', '#432818'); 
      root.style.setProperty('--accent-color', '#a89f91'); 
      root.style.setProperty('--highlight-color', '#fef08a'); 
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use context easily
export const useTheme = () => useContext(ThemeContext);
