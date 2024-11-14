import React from 'react';
import menuData from './menuData';

const DaftarMenu = () => {
  return (
    <div className="menu-container p-8 bg-gradient-to-r from-brown-100 to-brown-200 font-serif">
      <h2 className="text-4xl font-bold text-brown-800 mb-10 text-center">Daftar Menu Coffee</h2>
      <ul className="space-y-8">
        {menuData.map((menu, index) => (
          <li
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-extrabold text-brown-900 mb-2">{menu.nama}</h3>
              <p className="text-lg font-semibold text-brown-700 mb-2">{menu.jenis}</p>
              <p className="text-lg text-brown-600 mb-4">Harga: <span className="text-yellow-600 font-semibold">Rp{menu.harga.toLocaleString()}</span></p>
            </div>
            <div className="text-left">
              <p className="text-sm text-brown-500 mb-1"><span className="font-semibold">Komposisi:</span> {menu.komposisi}</p>
              <p className="text-sm text-brown-500"><span className="font-semibold">Penyajian:</span> {menu.penyajian}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaftarMenu;
