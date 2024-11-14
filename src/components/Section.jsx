import React from 'react';
import drinkImage from '../assets/img/drink.jpg';
import foodImage from '../assets/img/food.jpeg';
import placeImage from '../assets/img/place.jpeg';
import { useTheme } from '../context/ThemeContext'; // Import useTheme dari context

const Section = () => {
  const { isDarkMode } = useTheme(); // Mengambil nilai isDarkMode dari context

  return (
    <div
      className={`signature-products py-16 bg-gradient-to-r ${
        isDarkMode ? 'from-gray-800 to-gray-900' : 'from-yellow-100 to-yellow-200'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-start mb-12">
          <div className="md:w-5/12 px-4 mb-4 md:mb-0">
            <p
              className={`text-left mb-6 font-poppins text-xl leading-relaxed ${
                isDarkMode ? 'text-white' : 'text-gray-700'
              }`}
            >
              Kami menghadirkan sentuhan istimewa yang memanjakan mata dan lidah, menciptakan pengalaman yang tak terlupakan.
            </p>
            <button
              className={`bg-yellow-600 text-white py-3 px-8 rounded-full hover:bg-yellow-700 transition duration-300 transform hover:scale-105 shadow-lg ${
                isDarkMode ? 'bg-yellow-500' : ''
              }`}
            >
              Reservasi Sekarang
            </button>
          </div>
          <h2
            className={`text-4xl font-semibold text-center md:text-left md:w-5/12 px-4 font-montserrat ${
              isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
            }`}
          >
            Let’s Talk About Our Signature Product
          </h2>
        </div>

        <div className="product-cards flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div
            className={`card shadow-2xl p-6 rounded-xl text-center transition-transform transform hover:scale-105 hover:shadow-2xl max-w-xs border-2 ${
              isDarkMode ? 'border-yellow-500 bg-gray-800' : 'border-yellow-500 bg-white'
            }`}
          >
            <div className="flex justify-center mb-6">
              <img
                src={drinkImage}
                alt="Our Drink"
                className="h-72 object-cover rounded-lg shadow-md"
              />
            </div>
            <h3
              className={`text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`}
            >
              Our Drinks
            </h3>
            <p
              className={`text-gray-600 mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              35 Types to Choose From
            </p>
            <i className={`fas fa-arrow-right ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`}></i>
          </div>

          {/* Card 2 */}
          <div
            className={`card shadow-2xl p-6 rounded-xl text-center transition-transform transform hover:scale-105 hover:shadow-2xl max-w-xs border-2 ${
              isDarkMode ? 'border-yellow-500 bg-gray-800' : 'border-yellow-500 bg-white'
            }`}
          >
            <div className="flex justify-center mb-6">
              <img
                src={foodImage}
                alt="Our Food"
                className="h-72 object-cover rounded-lg shadow-md"
              />
            </div>
            <h3
              className={`text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`}
            >
              Our Food
            </h3>
            <p
              className={`text-gray-600 mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Fresh & Tasty Meals
            </p>
            <i className={`fas fa-arrow-right ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`}></i>
          </div>

          {/* Card 3 */}
          <div
            className={`card shadow-2xl p-6 rounded-xl text-center transition-transform transform hover:scale-105 hover:shadow-2xl max-w-xs border-2 ${
              isDarkMode ? 'border-yellow-500 bg-gray-800' : 'border-yellow-500 bg-white'
            }`}
          >
            <div className="flex justify-center mb-6">
              <img
                src={placeImage}
                alt="Our Place"
                className="h-72 object-cover rounded-lg shadow-md"
              />
            </div>
            <h3
              className={`text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`}
            >
              Our Place
            </h3>
            <p
              className={`text-gray-600 mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              A Cozy & Comfortable Space
            </p>
            <i className={`fas fa-arrow-right ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
