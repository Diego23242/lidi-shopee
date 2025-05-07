import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}  // aparece desde abajo
    animate={{ opacity: 1, y: 0 }}   // se desliza hacia arriba
    transition={{ duration: 0.6, ease: 'easeOut' }}  
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-xl scale-105' : 'shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          {product.isPopular && (
            <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Popular
            </span>
          )}
          {product.isNew && (
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Nuevo
            </span>
          )}
          {product.discount && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <div className="flex flex-col items-end">
            {product.discount ? (
              <>
                <span className="text-gray-400 text-sm line-through">
                  ${(product.price * 100 / (100 - product.discount)).toFixed(2)}
                </span>
                <span className="text-orange-500 font-bold">${product.price}</span>
              </>
            ) : (
              <span className="text-gray-900 font-bold">${product.price}</span>
            )}
          </div>
        </div>
        <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
        <a 
          href={`https://wa.me/523271090436?text=Hola!%20Quiero%20comprar%20el%20${encodeURIComponent(product.name)}`}
          className={`mt-4 inline-flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${isHovered ? 'bg-orange-600 text-white' : 'bg-orange-500 text-white'}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..."></path>
            <path d="M12 2a10 10 0 0 1 10 10..."></path>
          </svg>
          Pedir por WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
