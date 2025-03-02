import React from 'react'
import logo from '/assets/daraz logo.png'

function Header() {
  return (
    <div>
      <header className="bg-[#F85606] h-[120px] p-2 md:p-4 fixed top-0 left-0 right-0 z-20">
      <nav className="text-white text-xs md:text-sm overflow-x-auto flex whitespace-nowrap justify-center md:justify-end gap-4 sm:gap-4 mr-[5%]">
        <p className="hover:opacity-80 cursor-pointer">SAVE ON MORE APP</p>
        <p className="hover:opacity-80 cursor-pointer">SELL ON DARAZ</p>
        <p className="hover:opacity-80 cursor-pointer">HELP & SUPPORT</p>
        <p className="hover:opacity-80 cursor-pointer">LOGIN</p>
        <p className="hover:opacity-80 cursor-pointer">SIGN UP</p>
        <p className="hover:opacity-80 cursor-pointer">زبان تبدیل کریں</p>
      </nav>
      <div className="flex items-center ml-[5%] mt-[1rem]">
        <img src={logo} alt="Daraz Logo" className="h-[40px] w-[120px]" />
        <div className="flex justify-between items-center w-full md:w-[688px] h-[45px] bg-white rounded-md overflow-hidden ml-[30px]">
          <input
            type="text"
            placeholder="Search in Daraz"
            className="bg-white flex-grow h-full w-full pl-[1rem] outline-none"
          />
          <button className="bg-[#FFE1D2] h-full w-[45px] text-[#F85606] text-[1.2rem] hover:cursor-pointer">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="fa-2x text-white ml-[40px]">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.51345 5H1.33325V3H6.15306L7.21972 8.33333H30.5315L27.5012 25H8.51345L4.51345 5ZM7.61972 10.3333L10.1531 23H25.832L28.135 10.3333H7.61972Z"
              fill="white"
            />
            <path
              d="M11.9999 28C11.9999 28.7364 11.403 29.3333 10.6666 29.3333C9.93021 29.3333 9.33325 28.7364 9.33325 28C9.33325 27.2636 9.93021 26.6667 10.6666 26.6667C11.403 26.6667 11.9999 27.2636 11.9999 28Z"
              fill="white"
            />
            <path
              d="M25.3333 29.3333C26.0696 29.3333 26.6666 28.7364 26.6666 28C26.6666 27.2636 26.0696 26.6667 25.3333 26.6667C24.5969 26.6667 23.9999 27.2636 23.9999 28C23.9999 28.7364 24.5969 29.3333 25.3333 29.3333Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header