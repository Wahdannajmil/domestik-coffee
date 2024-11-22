import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import DrinkPage from './pages/DrinkPage';
import FoodPage from './pages/FoodPage';
import Place from './pages/Place';

function App() {
  return (
    <Router>
      <>
        {/* Navigasi */}
        <Navbar />

        {/* Rute */}
        <Routes>
          {/* Halaman Beranda */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Section />
                <Footer />
              </>
            }
          />

          {/* Halaman Drink */}
          <Route path="/drink" element={<DrinkPage />} />

          {/* Halaman Food */}
          <Route path="/food" element={<FoodPage />} />

          {/* Halaman Place */}
          <Route path="/place" element={<Place />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
