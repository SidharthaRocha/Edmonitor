import React from 'react';

const CardComponent = () => {
    const cards = [
        { title: "Título 1", text: "Este é o texto do card 1.", imgSrc: "https://via.placeholder.com/600x200" },
        { title: "Título 2", text: "Este é o texto do card 2.", imgSrc: "https://via.placeholder.com/600x200" },
        { title: "Título 3", text: "Este é o texto do card 3.", imgSrc: "https://via.placeholder.com/600x200" },
    ];

    return (
        <div className="flex flex-col items-center p-10">
            <h1 className="text-purple-800 text-3xl font-bold mb-6 text-center">
                Uma monitoria <span className="text-yellow-500 font-bold underline">completa</span>
            </h1>
            <div className="flex flex-col space-y-4">
                {cards.map((card, index) => (
                    <div key={index} className="relative bg-gray-200 rounded-lg shadow-lg p-6 w-full lg:w-128 flex flex-row items-center"> {/* Aumenta a largura do card */}
                        <div className="flex flex-col flex-grow text-left">
                            <div className="absolute top-0 left-0 bg-white rounded-br-md px-2 text-xs text-purple-800">Novo</div>
                            <h3 className="text-purple-800 text-lg font-semibold mb-2">{card.title}</h3>
                            <p className="text-black mb-4">{card.text}</p>
                            <div className="flex justify-center"> {/* Centraliza o botão */}
                                <a href="#" className="bg-purple-800 text-white rounded py-2 px-4 shadow-md hover:bg-purple-700 transition">
                                    Saiba Mais
                                </a>
                            </div>
                        </div>
                        <img src={card.imgSrc} alt="Imagem do card" className="w-1/3 h-32 object-cover rounded ml-4" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardComponent;
