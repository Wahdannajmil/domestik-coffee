import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons if you're using them
import Logo from '../assets/react.svg';

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="footer-logo flex flex-col items-center md:items-start">
            <img src={Logo} alt="Logo" className="h-16 mb-4 rounded-full border-2 border-yellow-600 shadow-lg" />
            <h3 className="text-4xl font-semibold mb-2 text-yellow-600">DOMESTIK</h3>
            <p className="text-sm text-center md:text-left opacity-80 text-yellow-700">
              Your cozy corner for coffee and conversation.
            </p>
          </div>

          {/* Info Section */}
          <div className="footer-info flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-4 text-yellow-600">Contact Us</h4>
            <p className="flex items-center mb-3 text-sm">
              <i className="bi bi-geo-alt mr-2 text-yellow-400"></i>
              Jl. Menteri Supeno No.38, Kec. Semarang Selatan, Kota Semarang, Jawa Tengah
            </p>
            <p className="flex items-center mb-3 text-sm">
              <i className="bi bi-telephone mr-2 text-yellow-400"></i>
              089-372-618-628
            </p>
            <p className="flex items-center text-sm">
              <i className="bi bi-clock mr-2 text-yellow-400"></i>
              06.00 - 23.00
            </p>
          </div>

          {/* Social Links Section */}
          <div className="footer-socials flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-4 text-yellow-600">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-900 hover:text-yellow-600 transition duration-300 transform hover:scale-110">
                <i className="bi bi-whatsapp text-3xl"></i>
              </a>
              <a href="#" className="text-gray-900 hover:text-yellow-600 transition duration-300 transform hover:scale-110">
                <i className="bi bi-instagram text-3xl"></i>
              </a>
              <a href="#" className="text-gray-900 hover:text-yellow-600 transition duration-300 transform hover:scale-110">
                <i className="bi bi-envelope text-3xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center mt-12 border-t border-yellow-600 pt-4">
          <p className="text-sm opacity-80 text-yellow-700">© 2024 Domestikcoffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
