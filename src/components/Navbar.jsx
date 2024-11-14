import React, { useState } from 'react';
import logo from '../assets/img/logos.png';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [activeMenu, setActiveMenu] = useState('beranda'); // State untuk menu aktif

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    document.getElementById(menu).scrollIntoView({ behavior: 'smooth' }); // Scroll ke bagian yang dipilih
  };

  return (
    <nav
    className="sticky top-0 z-50 px-6 py-4 shadow-lg transition-colors duration-500 bg-coffee-light dark:bg-coffee-dark text-coffee-textLight dark:text-coffee-textDark"
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
        <div className="text-3xl font-extrabold tracking-wide">Domestik Coffee</div>
      </div>
  
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10">
        {['beranda', 'menu', 'tentang'].map((menu) => (
          <button
            key={menu}
            onClick={() => handleMenuClick(menu)}
            className={`text-lg font-medium transition duration-300 ${
              activeMenu === menu
                ? 'text-coffee-accentLight dark:text-coffee-accentDark'
                : 'hover:text-coffee-accentLight dark:hover:text-coffee-accentDark'
            }`}
          >
            {menu.charAt(0).toUpperCase() + menu.slice(1).replace(/_/g, ' ')}
          </button>
        ))}
      </div>
  
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full shadow-md focus:outline-none bg-coffee-accentLight dark:bg-coffee-accentDark hover:opacity-80"
      >
        {isDarkMode ? (
          <FaMoon className="h-6 w-6 text-coffee-textDark" />
        ) : (
          <FaSun className="h-6 w-6 text-coffee-textLight" />
        )}
      </button>
    </div>
  </nav>
  
  );
};

export default Navbar;
