import Navbar2 from "../components/Navbar2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const DrinkPage = () => {
  const navigate = useNavigate();

  const drinks = [
    { name: "Espresso", price: "IDR 25,000", description: "Rich and bold shot of espresso." },
    { name: "Cappuccino", price: "IDR 35,000", description: "Espresso with steamed milk and a frothy top." },
    { name: "Latte", price: "IDR 40,000", description: "Espresso with creamy steamed milk." },
    { name: "Mocha", price: "IDR 45,000", description: "A blend of espresso, chocolate, and milk." },
    { name: "Iced Coffee", price: "IDR 30,000", description: "Chilled coffee served over ice." },
    { name: "Matcha Latte", price: "IDR 50,000", description: "Japanese green tea with milk." },
  ];

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center mb-4 text-gray-700 hover:text-gray-900 transition"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Home
          </button>

          <h1 className="text-3xl font-bold text-center mb-8">Café Drinks Menu</h1>

          {/* Drinks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {drinks.map((drink, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-gray-800">{drink.name}</h2>
                <p className="text-gray-600">{drink.description}</p>
                <p className="mt-4 text-lg font-bold text-gray-900">{drink.price}</p>
              </div>
            ))}
          </div>
        </div>
          </div>
          <Footer/>
    </>
  );
};

export default DrinkPage;
