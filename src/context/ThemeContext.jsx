import { createContext, useContext, useState, useEffect } from 'react';

// Create a Context
const ThemeContext = createContext();

// Create a Provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Ambil preferensi dari localStorage atau default ke false
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Simpan preferensi di localStorage
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Efek untuk menambahkan class di <html> dan mengubah warna tema
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.setProperty('--bg-color', '#3b1f1c'); // Latar belakang gelap
      root.style.setProperty('--text-color', '#f5f5f5'); // Teks terang
      root.style.setProperty('--accent-color', '#7b5e57'); // Warna aksen gelap
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--bg-color', '#f5f5f5'); // Latar belakang terang
      root.style.setProperty('--text-color', '#3b1f1c'); // Teks gelap
      root.style.setProperty('--accent-color', '#a89f91'); // Warna aksen terang
      root.style.setProperty('--highlight-color', '#fef08a'); // Warna kuning terang di light mode
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
