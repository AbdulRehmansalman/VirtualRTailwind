import React from 'react';
import Navbar from './Components/Navbar.jsx';
import HeroSection from './Components/HeroSection.jsx';
import { Features } from './Components/Features.jsx';
import WorkFlow from './Components/WorkFlow.jsx';
import Pricing from './Components/Pricing.jsx';
import Footer from './Components/Footer.jsx';
import Testimonial from './Components/Testimonial.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-7">
        <HeroSection />
        <Features />
        <WorkFlow />
        <Pricing />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default App;
