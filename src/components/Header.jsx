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
        className="w-full h-screen object-cover brightness-75"
      />

      {/* Overlay with Text */}
      <div
        className={`overlay absolute inset-0 flex flex-col justify-center items-center text-center transition-colors duration-500 ${
          isDarkMode ? 'bg-black bg-opacity-40 text-white' : 'bg-white bg-opacity-60 text-black'
        }`}
      >
        {/* Subheading */}
        <p className="text-2xl font-semibold tracking-wide uppercase animate-fadeIn font-poppins">
          Temukan Kenikmatan di Setiap Sruputan
        </p>

        {/* Main Heading */}
        <h1 className="text-7xl font-extrabold my-6 tracking-wider animate-slideDown font-poppins">
          DOMESTIK COFFEE
        </h1>

        {/* Description */}
        <p className="text-lg max-w-2xl mx-auto animate-fadeIn delay-200 font-poppins">
          Di sini, kami menyajikan pengalaman ngopi terbaik, diiringi dengan atmosfer hangat dan
          nyaman. Nikmati setiap momen bersama teman-teman tercinta di DOMESTIK.
        </p>

        {/* Scroll Down Button */}
        <div className="mt-10 animate-bounce">
          <a
            href="#content"
            className={`flex flex-col items-center ${
              isDarkMode ? 'text-yellow-400 hover:text-yellow-500' : 'text-brown-700 hover:text-brown-800'
            } transition duration-300`}
          >
            <span className="text-md font-semibold uppercase">Gulir ke Bawah</span>
            <ArrowDown className="text-5xl mt-2" />
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
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
