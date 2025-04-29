import React, { useState, useEffect } from 'react';

const LidiHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleLinkClick = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <header className={`fixed w-full z-50 overflow-x-hidden transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Lidi Shop</h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#products" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Productos</a>
          <a href="#how" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Cómo comprar</a>
          <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Contacto</a>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-gray-600 focus:outline-none"
          >
            {menuOpen ? (
              // Icono de cerrar (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono hamburguesa
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 shadow-md rounded-b-lg">
          <nav className="flex flex-col space-y-4">
            <a onClick={handleLinkClick} href="#products" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Productos</a>
            <a onClick={handleLinkClick} href="#how" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Cómo comprar</a>
            <a onClick={handleLinkClick} href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default LidiHeader;
