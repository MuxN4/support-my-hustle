"use client"
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="w-full bg-white h-[90px] flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 border-b border-gray-100">
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80px] h-[80px] flex items-center justify-center overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Company Logo" 
                className="w-18 h-18 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 cursor-pointer">
        {/* FAQ */}
        <div className="group relative flex items-center">
          <div className="group-hover:border-orange-500 border border-[#2a2a2a] border-dashed rounded-full w-[60px] h-[60px] flex items-center justify-center transition-colors duration-300">
            <span className="text-[#2a2a2a] group-hover:text-[#2a2a2a] text-base">FAQ</span>
          </div>
          
          <div className="absolute -right-5 -top-3">
            <div className="bg-orange-500 group-hover:bg-[#2a2a2a] rounded-full w-5 h-5 flex items-center justify-center transition-colors duration-300">
              <span className="text-white font-bold text-xs">?</span>
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="animate-pulse">
              <div className="w-5 h-5 bg-orange-500 bg-opacity-30 rotate-45"></div>
            </div>
          </div>
        </div>
              
        {/* DISCOVER */}
        <div className="group relative cursor-pointer">
            <span className="text-[#2a2a2a] text-base">DISCOVER</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full">
                <div className="h-[2px] bg-orange-500 w-full group-hover:h-[3px] transition-all duration-300"></div>
          </div>
        </div>

        {/* LOGIN */}
        <div className="group relative bg-transparent hover:bg-gray-100 py-2 px-6 rounded-full transition-colors duration-300 cursor-pointer">
            <span className="text-[#2a2a2a] text-base">LOGIN</span>
        </div>
        
        {/* SIGNUP */}
        <div className="group">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 cursor-pointer">
            SIGNUP
          </button>
        </div>
      </div>
            
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="border border-[#2a2a2a] rounded-full w-[40px] h-[40px] flex flex-col items-center justify-center gap-1 p-2 focus:outline-none"
        >
          <div className={`w-5 h-0.5 bg-[#2a2a2a] transition-all ${mobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-[#2a2a2a] transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-5 h-0.5 bg-[#2a2a2a] transition-all ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-white overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-between items-center p-6">
              <div className="w-20 h-20">
                <img 
                  src="/logo.png" 
                  alt="Company Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="border border-[#2a2a2a] rounded-full w-[40px] h-[40px] flex flex-col items-center justify-center gap-1 p-2 focus:outline-none"
              >
                <div className="w-5 h-0.5 bg-[#2a2a2a] transform rotate-45 translate-y-1.5"></div>
                <div className="w-5 h-0.5 bg-[#2a2a2a] transform -rotate-45 -translate-y-1.5"></div>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-grow flex flex-col justify-center space-y-8 px-6">
              <div className="flex items-center space-x-4 p-4 hover:bg-gray-100 rounded-lg">
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full"></div>
                <span className="text-[#2a2a2a] text-2xl">FAQ</span>
              </div>
              
              <div className="flex items-center space-x-4 p-4 hover:bg-gray-100 rounded-lg">
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full"></div>
                <span className="text-[#2a2a2a] text-2xl">DISCOVER</span>
              </div>
              
              <div className="flex items-center space-x-4 p-4 hover:bg-gray-100 rounded-lg">
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full"></div>
                <span className="text-[#2a2a2a] text-2xl">LOGIN</span>
              </div>
            </div>

            {/* Signup Button */}
            <div className="p-6">
              <button className="bg-[#FF6B35] hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-full transition-colors duration-300 w-full text-xl">
                SIGNUP
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
