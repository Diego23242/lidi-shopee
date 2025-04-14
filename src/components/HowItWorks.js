import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Elige tu producto",
      description: "Selecciona entre nuestra colección de moda y accesorios",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "Contacta por WhatsApp",
      description: "Haz clic en el botón para hablar directamente con nosotros",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.423c.172.246.515.486.729.561.214.074.43.074.595-.037.166-.111.248-.26.124-.486-.124-.223-.533-.561-.744-.636-.21-.074-.43-.037-.594.074-.166.111-.248.26-.124.486.05.074.05.074.124.038" />
          <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.768 0-3.46-.425-5-1.19l-5.2 1.3 1.37-4.96C2.47 15.05 2 13.57 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.23.35 2.39.96 3.39l.12.2L5.5 18l3.08-.78.19-.12A8 8 0 0 0 12 4z" />
        </svg>
      )
    },
    {
      title: "Recibe en tu casa",
      description: "Envíos express con seguimiento en tiempo real",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  return (
    <section id="how" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cómo Comprar en Lidi Shop</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Un proceso simple y seguro en solo 3 pasos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500 transform hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;