import React from 'react';

const LidiFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">Lidi Shop</span>
            </div>
            <p className="text-gray-400">Moda y accesorios con envío a todo el país</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Novedades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Más vendidos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ofertas</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Métodos de pago</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guía de tallas</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Devoluciones</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Lidi Shop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default LidiFooter;