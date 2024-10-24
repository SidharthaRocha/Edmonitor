import React from 'react';
import Menu from './components/Menu';
import TitleWithImage from './components/TitleWithImage';
import CardComponent from './components/CardComponent';
import Carousel from "./components/carousel"
import LargeImageComponent from "./components/LargeImageComponen";
import Footer from './components/Footer';

import './index.css'; // Certifique-se de que o CSS do Tailwind está importado

const App = () => {
  return (
    <body>
      <div className="container mx-auto mt-10">
      <Menu />
    
      <TitleWithImage />
      <LargeImageComponent/>
      <CardComponent/>
      <Carousel/>

      <Footer />

    </div>
    </body>
    
    );
};



export default App
