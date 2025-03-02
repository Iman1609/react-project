import React from 'react';
import "remixicon/fonts/remixicon.css";

function SideNav() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <nav className="fixed bottom-4 left-0 flex flex-col items-end space-y-4 bg-gray-100 p-2 shadow-lg rounded-r-lg z-10">
  
        <button
          onClick={scrollToTop}
          className="group relative flex items-center justify-center w-10 h-10 hover:bg-orange-600 focus:outline-none"
        >
          <i className="ri-arrow-up-s-line text-gray-400 group-hover:text-white"></i>
          <span className="absolute left-full ml-2 text-orange-600 opacity-0 group-hover:opacity-100 whitespace-nowrap">
            Top
          </span>
        </button>

   
        <button
          onClick={() => scrollToSection('flash-sale')}
          className="group relative flex items-center justify-center w-10 h-10 hover:bg-orange-600 focus:outline-none"
        >
          <i className="ri-fire-line text-gray-400 group-hover:text-white"></i>
          <span className="absolute left-full ml-2 text-orange-600 opacity-0 group-hover:opacity-100 whitespace-nowrap">
            Flash Sale
          </span>
        </button>

     
        <button
          onClick={() => scrollToSection('categories')}
          className="group relative flex items-center justify-center w-10 h-10 hover:bg-orange-600 focus:outline-none"
        >
          <i className="ri-grid-fill text-xl text-gray-400 group-hover:text-white"></i>
          <span className="absolute left-full ml-2 text-orange-600 opacity-0 group-hover:opacity-100 whitespace-nowrap">
            Categories
          </span>
        </button>

       
        <button
          onClick={() => scrollToSection('just-for-you')}
          className="group relative flex items-center justify-center w-10 h-10 hover:bg-orange-600 focus:outline-none"
        >
          <i className="ri-user-star-line text-xl text-gray-400 group-hover:text-white"></i>
          <span className="absolute left-full ml-2 text-orange-600 opacity-0 group-hover:opacity-100 whitespace-nowrap">
            Just for You
          </span>
        </button>
      </nav>
    </div>
  );
}

export default SideNav;