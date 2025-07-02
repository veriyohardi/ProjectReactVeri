import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="bg-[#dca9a9] px-4 py-2 rounded-md text-white text-sm font-semibold">
            <span className="text-white font-bold text-lg">THE HARVEST</span><br />
            <span className="text-white text-xs">Cakes, Bread & More...</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 font-medium text-gray-800">
          <a href="#" className="hover:text-pink-600">MENU</a>
          <a href="#" className="hover:text-pink-600">STORES</a>
          <a href="#" className="hover:text-pink-600">TREATS</a>
          <a href="#" className="hover:text-pink-600">B2B</a>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <button className="relative px-3 py-2 bg-gray-100 rounded-full flex items-center gap-1">
            CART <span role="img" aria-label="cart">🛒</span>
          </button>
          <button className="px-4 py-2 bg-pink-200 hover:bg-pink-300 text-sm font-semibold rounded-full text-white">
            LOGIN/SIGN UP
          </button>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <span role="img" aria-label="location">📍</span> Location
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
