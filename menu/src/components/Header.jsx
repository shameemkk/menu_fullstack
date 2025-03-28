import React, { useState } from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-2">
          <img src={logo} alt="Logo" width={50} height={50} className="object-contain" />
        </div>
        <div>
          <div className="text-2xl font-bold">
            <span className="text-[#0796ef]">DEEP</span> NET
          </div>
          <div className="text-xl text-[#857878]">SOFT</div>
        </div>
      </div>
      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-[#0796ef] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>
      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex space-x-8 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
      >
        <a href="#" className="uppercase hover:text-[#0796ef] transition-colors">
          Home
        </a>
        <a href="#" className="uppercase  hover:text-[#0796ef] transition-colors">
          Menu
        </a>
        <a href="#" className="uppercase hover:text-[#0796ef] transition-colors">
          Make a Reservation
        </a>
        <a href="#" className="uppercase hover:text-[#0796ef] transition-colors">
          Contact Us
        </a>
      </nav>
    </header>
  )
}

export default Header
