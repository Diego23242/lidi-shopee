import React from 'react';
import ProductCard from './ProductCard';
import products from '../mock/data';

const ProductGrid = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Los artículos más buscados esta temporada
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="animate-fadeIn">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;