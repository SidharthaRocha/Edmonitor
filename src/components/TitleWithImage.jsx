import React from 'react';
import Imgbase from "../assets/imageBase.png";

const TitleWithImage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 mt-20"> {/* Centraliza e adiciona margem superior */}
      <img 
        src={Imgbase}
        alt="Descrição da Imagem" 
        className="h-64 w-auto rounded-lg mx-4 md:mx-20 mt-10" // Aumenta a margem superior da imagem
      />
      <div className="text-purple-800 text-xl font-bold text-center md:text-left md:-mt-32 md:w-1/2 mt-10"> {/* Aumenta a margem superior do texto */}
        <span className="block">Como usar um aplicativo de</span>
        <span className="block">acompanhamento escolar para</span>
        <span className="block">melhorar o ensino</span>
      </div>
    </div>
  );
};

export default TitleWithImage;