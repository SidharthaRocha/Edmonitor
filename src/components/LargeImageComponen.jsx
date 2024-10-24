import React from 'react';

const LargeImageComponent = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-10">
            <img
                src="https://via.placeholder.com/400"
                alt="Imagem Grande"
                className="w-full md:w-1/2 lg:w-2/5 rounded shadow-lg"
            />
            <div className="flex flex-col items-center text-center md:ml-8">
                <h1 className="text-purple-800 text-3xl md:text-4xl font-bold mb-4">
                    Título Grande
                </h1>
                <p className="text-base md:text-lg mb-6">
                    Este é o texto que será centralizado abaixo do título. Você pode adicionar mais informações aqui.
                </p>
               
            
                <a
                    href="#"
                    className="bg-purple-800 text-white rounded-full py-2 px-6 shadow-lg text-lg hover:bg-purple-700 transition duration-300"
                    style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.5)' }}
                >
                    Saiba Mais
                </a>
                
            </div>
            <img
                src="https://via.placeholder.com/400"
                alt="Imagem Grande"
                className="w-full md:w-1/2 lg:w-2/5 rounded shadow-lg"
            />
        </div>
    );
};

export default LargeImageComponent;
