import React, { useState } from 'react';
import { BiLogIn } from "react-icons/bi";
import { ShoppingCart, Search } from 'lucide-react';
import { Link } from "react-router-dom"; // Import Link
import GoldLogo from './GoldLogo';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', searchTerm);
    setSearchTerm('');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] bg-opacity-90 backdrop-blur-sm shadow-xl border-b border-[#3A2E1A]">
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
        >
          <GoldLogo width="80" height="80" className="h-auto" />
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="relative text-[#E0E0E0] hover:text-[#F0D59D] transition-colors font-semibold py-2 group"
          >
            BERANDA
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F0D59D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            to="/about"
            className="relative text-[#E0E0E0] hover:text-[#F0D59D] transition-colors font-semibold py-2 group"
          >
            TENTANG KAMI
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F0D59D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            to="/products"
            className="relative text-[#E0E0E0] hover:text-[#F0D59D] transition-colors font-semibold py-2 group"
          >
            PRODUK
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F0D59D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            to="/custom-order/custom-order"
            className="relative text-[#E0E0E0] hover:text-[#F0D59D] transition-colors font-semibold py-2 group"
          >
            PESANAN KHUSUS
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F0D59D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            to="/kesan"
            className="relative text-[#E0E0E0] hover:text-[#F0D59D] transition-colors font-semibold py-2 group"
          >
            TESTIMONIAL
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F0D59D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center space-x-5">
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center bg-[#2C2C2C] rounded-full px-4 py-2 shadow-inner focus-within:ring-2 focus-within:ring-[#DAA520] transition-all duration-300"
          >
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none border-none bg-transparent text-sm text-[#E0E0E0] placeholder-[#A0A0A0] w-32 lg:w-48 pr-2"
            />
            <button
              type="submit"
              className="text-[#F0D59D] hover:text-[#FFD700] transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
          <Link to="/login">
            <BiLogIn className="w-7 h-7 text-[#F0D59D] cursor-pointer hover:text-[#FFD700] transition-colors transform hover:scale-110" />
          </Link>
          <ShoppingCart className="w-7 h-7 text-[#F0D59D] cursor-pointer hover:text-[#FFD700] transition-colors transform hover:scale-110" />
        </div>
      </nav>
    </header>
  );
}
