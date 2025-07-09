import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Results from './components/Results';
import ImplantTypes from './components/ImplantTypes';
import TreatmentSteps from './components/TreatmentSteps';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Results />
        <ImplantTypes />
        <TreatmentSteps />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;