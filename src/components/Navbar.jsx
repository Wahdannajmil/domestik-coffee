import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logos.png';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [activeMenu, setActiveMenu] = useState('beranda'); // State untuk menu aktif

  const sections = ['beranda', 'menu', 'tentang']; // Daftar id section

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    document.getElementById(menu).scrollIntoView({ behavior: 'smooth' }); // Scroll ke bagian yang dipilih
  };

  const handleScroll = () => {
    let currentSection = '';
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top >= -100 && top < window.innerHeight / 2) {
          currentSection = section;
        }
      }
    });
    if (currentSection && currentSection !== activeMenu) {
      setActiveMenu(currentSection); // Update menu aktif saat scroll
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeMenu]);

  return (
    <nav
      className="sticky top-0 z-50 px-6 py-4 shadow-lg transition-colors duration-500 bg-coffee-light dark:bg-coffee-dark"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-full shadow-lg border-2 border-coffee-accentLight dark:border-coffee-accentDark"
          />
          <div
            className={`text-3xl font-extrabold tracking-wide transition-colors duration-300 ${
              isDarkMode ? 'text-yellow-200' : 'text-coffee-textLight'
            }`}
          >
            Domestik Coffee
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10">
          {sections.map((menu) => (
            <button
              key={menu}
              onClick={() => handleMenuClick(menu)}
              className={`relative text-lg font-medium transition duration-300 ${
                isDarkMode
                  ? 'text-yellow-200 hover:text-yellow-300'
                  : 'text-coffee-textLight hover:text-coffee-accentLight'
              } ${
                activeMenu === menu
                  ? `underline underline-offset-4 ${
                      isDarkMode
                        ? 'dark:decoration-yellow-200'
                        : 'decoration-coffee-accentDark'
                    }`
                  : ''
              }`}
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1).replace(/_/g, ' ')}
            </button>
          ))}
        </div>

        {/* Right Section: Pesan Sekarang + Dark Mode Toggle */}
        <div className="flex items-center space-x-8">
          {/* Button Pesan Sekarang */}
          <button
            onClick={() => alert('Fitur Pesan Sekarang sedang dikembangkan!')}
            className={`px-6 py-2 rounded-xl font-semibold text-sm transition duration-300 ${
              isDarkMode
                ? 'bg-yellow-200 text-coffee-dark hover:bg-yellow-300'
                : 'bg-coffee-dark text-white hover:bg-coffee-accentDark'
            }`}
          >
            Pesan Sekarang
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full shadow-md focus:outline-none bg-coffee-accentLight dark:bg-coffee-accentDark hover:opacity-80"
          >
            {isDarkMode ? (
              <FaMoon className="h-6 w-6 text-yellow-200" />
            ) : (
              <FaSun className="h-6 w-6 text-coffee-textLight" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
