import React from 'react';
import LidiHeader from './components/LidiHeader';
import ProductGrid from './components/ProductGrid';
import HowItWorks from './components/HowItWorks';
import ContactSection from './components/ContactSection';
import LidiFooter from './components/LidiFooter';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LidiHeader />
      <main className="flex-grow">
        <ProductGrid />
        <HowItWorks />
        <ContactSection />
      </main>
      <LidiFooter />
    </div>
  );
};

export default App;

// DONE