import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 p-6 text-white w-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <img 
          src="link-para-sua-logo.png" 
          alt="Logo" 
          className="h-12 w-auto mb-4 md:mb-0"
        />
        
        {/* Redes Sociais */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2 text-center">Redes Sociais</h2>
          <div className="flex space-x-4">
            <img src="link-para-icon-whatsapp.png" alt="WhatsApp" className="h-6 w-auto" />
            <img src="link-para-icon-facebook.png" alt="Facebook" className="h-6 w-auto" />
            <img src="link-para-icon-instagram.png" alt="Instagram" className="h-6 w-auto" />
          </div>
        </div>

        {/* Fala com a Gente */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2 text-center">Fala com a Gente</h2>
          <div className="flex items-center space-x-2">
            <img src="link-para-icon-email.png" alt="E-mail" className="h-6 w-auto" />
            <span>contato@edimonitor.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="link-para-icon-whatsapp.png" alt="WhatsApp" className="h-6 w-auto" />
            <span>+55 11 91234-5678</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-gray-300">
        <p>Copyright © 2024 Edimonitor. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
