import React from 'react';
import HeroSection from './Components/HeroSection';
import After_Hero from './Components/After_Hero';
import Showcase from './Components/Showcase';
import Footer from './Components/Footer';
import BenefitsSection from './Components/BenifitsSection';
import CellLightSection from './Components/CellLightSection';
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'



export default function App() {

 
const lenis = new Lenis({
  autoRaf: true,
});


lenis.on('scroll', (e) => {
  console.log(e);
});

  return (
    <div className="min-h-screen  bg-zinc-100 flex flex-col items-center justify-center p-4">
      <HeroSection/>
      <After_Hero/>
      <Showcase/>
      <BenefitsSection/>
      <CellLightSection/>
      <Footer/>
    </div>
  );
}