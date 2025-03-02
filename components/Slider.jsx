import { useState, useEffect } from 'react';

function Slider() {
  const slides = Array.from({ length: 13 }, (_, i) => `/slide ${i + 1}.jpg`);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const showSlide = (index) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[344px] max-w-[988px] overflow-hidden group">
   
      <div className="relative w-[988px] h-[344px]">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      
        <div className="absolute top-2 right-2">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100 group/visual">
              <img src="/visual-search.svg" alt="Search" className="w-5 h-5" />
             
              <div className="absolute top-full right-0 mt-1 flex flex-col space-y-1 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-300">
                <div className="bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                  <img src="/save-copy.svg" alt="Save" className="w-5 h-5" />
                </div>
                <div className="bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                  <img src="/horizontal-ellipsis.svg" alt="Settings" className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-2  bg-opacity-50 hover:bg-opacity-75 text-white"
      >
        <i className="ri-arrow-left-s-line"></i>
      </button>

  
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-2  bg-opacity-50 hover:bg-opacity-75 text-white"
      >
        <i className="ri-arrow-right-s-line"></i>
      </button>

  
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <input
            key={i}
            type="radio"
            name="slide"
            className="w-3 h-3"
            checked={i === currentSlide}
            onChange={() => showSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;