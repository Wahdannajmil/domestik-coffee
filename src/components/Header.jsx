import React from 'react';
import homepageImage from '../assets/img/homepage1.png'; // Import gambar
import { ArrowDown } from 'react-bootstrap-icons'; // Menggunakan ikon lebih sederhana
import { useTheme } from '../context/ThemeContext'; // Import context

const Header = () => {
  const { isDarkMode } = useTheme(); // Gunakan state dari ThemeContext

  return (
    <div className="hero relative">
      {/* Background Image */}
      <img
        alt="Interior of a cozy cafe with wooden furniture and warm lighting"
        src={homepageImage}
        className={`w-full h-screen object-cover brightness-75 ${isDarkMode ? 'brightness-50' : 'brightness-90'}`}
      />

      {/* Overlay with Text */}
      <div
        className={`overlay absolute inset-0 flex flex-col justify-center items-center text-center transition-colors duration-500 ${
          isDarkMode
            ? 'bg-black bg-opacity-50 text-yellow-200'
            : 'bg-yellow-50 bg-opacity-30 text-coffee-dark' // Updated text color for light mode
        }`}
      >
        {/* Subheading */}
        <p
          className={`text-lg font-bold tracking-wider uppercase animate-fadeIn font-merriweather mt-10 ${
            isDarkMode ? 'text-yellow-200' : 'text-brown-600'
          }`}
        >
          Temukan Kenikmatan di Setiap Sruputan
        </p>

        {/* Main Heading */}
        <h1
          className={`text-6xl md:text-7xl font-extrabold my-6 tracking-wide animate-slideDown font-cinzel ${
            isDarkMode ? 'text-yellow-200' : 'text-brown-800'
          }`}
        >
          DOMESTIK COFFEE
        </h1>

        {/* Description */}
        <p
          className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-merriweather ${
            isDarkMode ? 'text-gray-300' : 'text-brown-700'
          }`}
        >
          Di sini, kami menyajikan pengalaman ngopi terbaik, diiringi dengan atmosfer hangat dan
          nyaman. Nikmati setiap momen bersama teman-teman tercinta di DOMESTIK.
        </p>

        {/* Scroll Down Button */}
        <div className="mt-10 animate-bounce">
          <a
            href="#content"
            className={`flex flex-col items-center transition duration-300 ${
              isDarkMode
                ? 'text-yellow-200 hover:text-yellow-300'
                : 'text-brown-900 hover:text-brown-700' // Updated hover color for light mode
            }`}
          >
            <span className="text-md font-semibold uppercase tracking-wide font-merriweather">
              Gulir ke Bawah
            </span>
            <ArrowDown
              className={`text-5xl mt-2 ${
                isDarkMode ? 'text-yellow-200' : 'text-brown-900'
              }`}
            />
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Merriweather:wght@400;700&display=swap');

          .font-cinzel {
            font-family: 'Cinzel', serif;
          }

          .font-merriweather {
            font-family: 'Merriweather', serif;
          }

          .animate-fadeIn {
            animation: fadeIn 1.5s ease-out forwards;
          }

          .animate-slideDown {
            animation: slideDown 1.5s ease-out forwards;
          }

          .animate-bounce {
            animation: bounce 2s infinite;
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-50px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
};

export default Header;
