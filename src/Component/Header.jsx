import React, { useState } from 'react';
import { Heart, ShoppingCart, Search } from 'lucide-react'; // Mengimpor ikon Search
import GoldLogo from './GoldLogo'; // Mengimpor komponen GoldLogo

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', searchTerm);
    // Tambahkan logika pencarian di sini, misalnya redirect ke halaman hasil pencarian
    setSearchTerm('');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] bg-opacity-90 backdrop-blur-sm shadow-xl border-b border-[#3A2E1A]"> {/* Background lebih gelap, sedikit blur, bayangan lebih kuat, border bawah emas gelap */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105"> {/* Efek hover pada logo */}
          <GoldLogo width="80" height="80" className="h-auto" /> {/* Mengatur ukuran logo */}
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-8"> {/* Jarak antar menu lebih lebar */}
          <a href="/" className="relative text-[#E0E0E0] hover:text-[#F0D59D] transition-colors font-semibold py-2 group"> {/* Font lebih tebal, efek underline */}
            BERANDA
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F0D59D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="/about" className="relative text-[#E0E0E0] hover:text-[#F0D59D] transition-colors font-semibold py-2 group">
            TENTANG KAMI
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F0D59D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="/products" className="relative text-[#E0E0E0] hover:text-[#F0D59D] transition-colors font-semibold py-2 group">
            PRODUK
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F0D59D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="/custom-order/custom-order" className="relative text-[#E0E0E0] hover:text-[#F0D59D] transition-colors font-semibold py-2 group">
            PESANAN KHUSUS
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F0D59D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="/kesan" className="relative text-[#E0E0E0] hover:text-[#F0D59D] transition-colors font-semibold py-2 group">
            TESTIMONIAL
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F0D59D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center space-x-5"> {/* Jarak antar ikon lebih lebar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center bg-[#2C2C2C] rounded-full px-4 py-2 shadow-inner focus-within:ring-2 focus-within:ring-[#DAA520] transition-all duration-300"> {/* Padding lebih besar, ring emas */}
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none border-none bg-transparent text-sm text-[#E0E0E0] placeholder-[#A0A0A0] w-32 lg:w-48 pr-2" /* Menambahkan padding kanan */
            />
            <button type="submit" className="text-[#F0D59D] hover:text-[#FFD700] transition-colors">
                <Search className="w-5 h-5" />
            </button>
          </form>
          <Heart className="w-7 h-7 text-[#F0D59D] cursor-pointer hover:text-[#FFD700] transition-colors transform hover:scale-110" /> {/* Ikon lebih besar, efek scale hover */}
          <ShoppingCart className="w-7 h-7 text-[#F0D59D] cursor-pointer hover:text-[#FFD700] transition-colors transform hover:scale-110" /> {/* Ikon lebih besar, efek scale hover */}
        </div>

        {/* Mobile Menu Button (Anda bisa menambahkan logika untuk ini jika ingin) */}
        {/* <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button> */}
      </nav>
    </header>
  );
}
