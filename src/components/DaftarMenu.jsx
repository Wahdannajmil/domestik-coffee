import React from 'react';
import menuData from './menuData';
import { useTheme } from '../context/ThemeContext'; // Import useTheme for dark mode

const DaftarMenu = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode status

  return (
    <div
      className={`menu-container p-8 ${
        isDarkMode ? 'bg-gradient-to-r from-coffee-dark to-coffee-light' : 'bg-gradient-to-r from-coffee-light to-coffee-dark'
      } font-serif`}
    >
      <h2
        className={`text-4xl font-bold mb-10 text-center ${
          isDarkMode ? 'text-coffee-textDark' : 'text-coffee-textLight'
        }`}
      >
        Daftar Menu Coffee
      </h2>
      <ul className="space-y-8">
        {menuData.map((menu, index) => (
          <li
            key={index}
            className={`${
              isDarkMode ? 'bg-coffee-dark text-coffee-textLight' : 'bg-white text-coffee-textDark'
            } rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
          >
            <div className="flex flex-col items-center">
              <h3
                className={`text-3xl font-extrabold mb-2 ${
                  isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                }`}
              >
                {menu.nama}
              </h3>
              <p
                className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? 'text-yellow-200' : 'text-brown-700'
                }`}
              >
                {menu.jenis}
              </p>
              <p
                className={`text-lg mb-4 ${
                  isDarkMode ? 'text-yellow-200' : 'text-brown-600'
                }`}
              >
                Harga: <span className="font-semibold text-yellow-600">Rp{menu.harga.toLocaleString()}</span>
              </p>
            </div>
            <div className="text-left">
              <p
                className={`text-sm mb-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-brown-500'
                }`}
              >
                <span className="font-semibold">Komposisi:</span> {menu.komposisi}
              </p>
              <p
                className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-brown-500'
                }`}
              >
                <span className="font-semibold">Penyajian:</span> {menu.penyajian}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaftarMenu;
