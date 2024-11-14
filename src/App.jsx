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
      <div id="beranda">
        <Header />
      </div>
      <div id="menu">
        <Section />
        <DaftarMenu />
      </div>
      <div id="tentang">
        <Footer />
      </div>
    </>
  );
}

export default App;
