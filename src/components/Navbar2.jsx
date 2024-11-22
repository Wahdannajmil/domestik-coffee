import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../assets/img/logos.png';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar2 = () => {
  const navigate = useNavigate(); // Inisialisasi navigate
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [activeMenu, setActiveMenu] = useState('');

  const menus = [
    { name: 'Drink', route: '/drink' },
    { name: 'Food', route: '/food' },
    { name: 'Place', route: '/place' },
  ];

  const handleMenuClick = (menu) => {
    setActiveMenu(menu.route);
    navigate(menu.route); // Arahkan ke route yang sesuai
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveMenu(currentPath); // Set menu aktif berdasarkan rute saat ini
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 px-6 py-4 shadow-lg transition-all duration-500 backdrop-blur-sm ${
        isDarkMode ? 'bg-coffee-dark' : 'bg-coffee-light'
      }`}
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
          {menus.map((menu) => (
            <button
              key={menu.route}
              onClick={() => handleMenuClick(menu)}
              className={`relative text-lg font-medium transition duration-300 ${
                isDarkMode
                  ? 'text-yellow-200 hover:text-yellow-300'
                  : 'text-coffee-textLight hover:text-coffee-accentLight'
              } ${
                activeMenu === menu.route
                  ? `underline underline-offset-4 ${
                      isDarkMode
                        ? 'dark:decoration-yellow-200'
                        : 'decoration-coffee-accentDark'
                    }`
                  : ''
              }`}
            >
              {menu.name}
            </button>
          ))}
        </div>

        {/* Right Section: Pesan Sekarang + Dark Mode Toggle */}
        <div className="flex items-center space-x-8">
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

export default Navbar2;
