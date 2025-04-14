import React, { useState } from 'react';

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para comprar?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Contáctanos directamente por WhatsApp y atenderemos tu pedido personalmente
          </p>
          <a
            href="https://wa.me/521234567890"
            className={`inline-flex items-center px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 ${isHovered ? 'bg-white text-orange-500 shadow-xl' : 'bg-black text-white shadow-lg'}`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.423c.172.246.515.486.729.561.214.074.43.074.595-.037.166-.111.248-.26.124-.486-.124-.223-.533-.561-.744-.636-.21-.074-.43-.037-.594.074-.166.111-.248.26-.124.486.05.074.05.074.124.038" />
              <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.768 0-3.46-.425-5-1.19l-5.2 1.3 1.37-4.96C2.47 15.05 2 13.57 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.23.35 2.39.96 3.39l.12.2L5.5 18l3.08-.78.19-.12A8 8 0 0 0 12 4z" />
            </svg>
            Chatear por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;