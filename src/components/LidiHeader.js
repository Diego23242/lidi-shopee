import React, { useState, useEffect } from 'react';

const LidiHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 👈 Nuevo estado

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Lidi Shop</h1>
        </div>

        {/* Menú para pantallas grandes */}
        <nav className="hidden md:flex space-x-8">
          <a href="#products" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Productos</a>
          <a href="#how" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Cómo comprar</a>
          <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Contacto</a>
        </nav>

        {/* Botón hamburguesa */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 flex flex-col space-y-2">
          <a href="#products" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Productos</a>
          <a href="#how" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Cómo comprar</a>
          <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Contacto</a>
        </nav>
      )}
    </header>
  );
};

export default LidiHeader;
