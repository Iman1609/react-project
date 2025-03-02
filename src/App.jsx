import React from 'react';
import Header from '/components/Header';
import SideNav from '/components/SideNav';
import Slider from '/components/Slider';
import AdSection from '/components/AdSection';
import FlashSale from '/components/FlashSale';
import Categories from '/components/Categories';
import JustForYou from '/components/JustForYou';
import Footer from '/components/Footer';
import tryDarazApp from '/assets/try daraz app.png';

function App() {
  return (
    <div className="font-roboto min-h-screen bg-[#F5F5F5] bg-cover bg-center">
      <div className="fixed inset-0 bg-[#F5F5F5] z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto">

        <div id="top">
          <Header />
        </div>
        <SideNav />
        <main className="pt-36 px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Slider />
            <div className="hidden md:block">
              <img src={tryDarazApp} alt="Try Daraz App" className="h-[344px]" />
            </div>
          </div>
          <AdSection />
       
          <div id="flash-sale">
            <FlashSale />
          </div>

          <div id="categories">
            <Categories />
          </div>

          <div id="just-for-you">
            <JustForYou />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;