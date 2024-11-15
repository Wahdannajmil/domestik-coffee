import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import DaftarMenu from './components/DaftarMenu';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div id="beranda" className="mt-[-80px]"> {/* Adjust margin-top to navbar height */}
        <Header />
      </div>
      <div id="menu">
        <Section />
      </div>
      <div id="tentang">
        {/* <DaftarMenu /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
