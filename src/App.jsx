import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import DrinkPage from './pages/DrinkPage';
import FoodPage from './pages/FoodPage';
import Place from './pages/Place';

function NavbarWrapper() {
  const location = useLocation(); // Ambil lokasi saat ini
  const hiddenRoutes = ['/drink', '/food', '/place']; // Daftar rute di mana Navbar disembunyikan

  // Jika rute saat ini termasuk dalam daftar hiddenRoutes, jangan render Navbar
  return hiddenRoutes.includes(location.pathname) ? null : <Navbar />;
}

function App() {
  return (
    <Router>
      <>
        {/* Navbar */}
        <NavbarWrapper />

        {/* Rute */}
        <Routes>
          {/* Halaman Beranda */}
          <Route
            path="/"
            element={
              <>
                <div id="beranda" className="mt-[-80px]"> {/* Offset for Navbar */}
                  <Header />
                </div>
                <div id="menu">
                  <Section />
                </div>
                <div id="tentang">
                  <Footer />
                </div>
              </>
            }
          />

          {/* Halaman Drink */}
          <Route
            path="/drink"
            element={
              <div id="drink">
                <DrinkPage />
              </div>
            }
          />

          {/* Halaman Food */}
          <Route
            path="/food"
            element={
              <div id="food">
                <FoodPage />
              </div>
            }
          />

          {/* Halaman Place */}
          <Route
            path="/place"
            element={
              <div id="place">
                <Place />
              </div>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
