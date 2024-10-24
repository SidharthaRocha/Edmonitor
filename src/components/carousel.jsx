import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Exemplos de dados para os cards
const cardData = [
  { id: 1, title: 'Card 1', content: 'Conteúdo do Card 1' },
  { id: 2, title: 'Card 2', content: 'Conteúdo do Card 2' },
  { id: 3, title: 'Card 3', content: 'Conteúdo do Card 3' },
  { id: 4, title: 'Card 4', content: 'Conteúdo do Card 4' },
  { id: 5, title: 'Card 5', content: 'Conteúdo do Card 5' },
];

const Carousel = () => {
  const settings = {
    dots: false, // Desativa os pontos de navegação
    infinite: true,
    speed: 1000, // Duração da transição entre os slides
    slidesToShow: 3, // Número de slides mostrados por vez
    slidesToScroll: 1,
    autoplay: true, // Ativar autoplay
    autoplaySpeed: 4000, // Tempo entre as trocas (4000ms = 4 segundos)
    cssEase: 'linear', // Efeito de transição suave
    responsive: [
      {
        breakpoint: 768, // Para telas menores que 768px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Para telas entre 768px e 1024px
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-4">Carrossel de Cards</h2>
      <Slider {...settings}>
        {cardData.map(card => (
          <div key={card.id} className="bg-white rounded-lg shadow-md p-4 mx-2">
            <h3 className="font-semibold text-lg">{card.title}</h3>
            <p className="text-gray-700">{card.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

