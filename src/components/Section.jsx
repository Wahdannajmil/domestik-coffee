import React from 'react';
import { useNavigate } from 'react-router-dom';
import drinkImage from '../assets/img/drink.jpg';
import foodImage from '../assets/img/food.jpeg';
import placeImage from '../assets/img/place.jpeg';

const Section = () => {
  const navigate = useNavigate();

  return (
    <div className="signature-products py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-[#4A403A]">
            Discover Our Signature Products
          </h2>
          <p className="text-lg text-gray-600">
            Experience the perfect blend of taste, comfort, and style.
          </p>
        </div>

        <div className="product-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Drink */}
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate('/drink')}
          >
            <img
              src={drinkImage}
              alt="Our Drink"
              className="h-64 w-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity">
              <p className="text-white text-lg font-semibold flex items-center">
                <span className="text-2xl font-bold mr-2">+</span> See Description
              </p>
            </div>
            <p className="text-center text-[#4A403A] mt-4 text-lg font-medium">
              Drink
            </p>
          </div>

          {/* Card 2 - Food */}
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate('/food')}
          >
            <img
              src={foodImage}
              alt="Our Food"
              className="h-64 w-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity">
              <p className="text-white text-lg font-semibold flex items-center">
                <span className="text-2xl font-bold mr-2">+</span> See Description
              </p>
            </div>
            <p className="text-center text-[#4A403A] mt-4 text-lg font-medium">
              Food
            </p>
          </div>

          {/* Card 3 - Place */}
          <div
            className="relative group cursor-pointer"
            onClick={() => navigate('/place')}
          >
            <img
              src={placeImage}
              alt="Our Place"
              className="h-64 w-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity">
              <p className="text-white text-lg font-semibold flex items-center">
                <span className="text-2xl font-bold mr-2">+</span> See Description
              </p>
            </div>
            <p className="text-center text-[#4A403A] mt-4 text-lg font-medium">
              Place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
