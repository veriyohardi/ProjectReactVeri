import React, { useState } from 'react';
import { Mail, X, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#E0E0E0] font-sans"> {/* Latar belakang footer gelap */}
      {/* Newsletter Section */}
      <div className="relative py-16 px-6 lg:px-12 border-b border-[#3A3A3A]"> {/* Border bawah untuk pemisah */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-transparent to-[#2C2C2C] opacity-50 hidden md:block"></div> {/* Efek gradien samping */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-transparent to-[#2C2C2C] opacity-50 hidden md:block"></div> {/* Efek gradien samping */}
        
        <div className="max-w-4xl mx-auto text-center relative z-10"> {/* z-10 agar konten di atas gradien */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#F0D59D] mb-4"> {/* Judul emas */}
            Bergabunglah dan Dapatkan Diskon 15%!
          </h2>
          <p className="text-[#A0A0A0] mb-8"> {/* Teks abu-abu terang */}
            Berlangganan newsletter kami untuk mendapatkan kode diskon 15%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <div className="relative flex-1 w-full sm:w-auto">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A0A0A0]" /> {/* Ikon abu-abu terang */}
              <input
                type="email"
                placeholder="Alamat email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#4A4A4A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAA520] bg-[#1A1A1A] text-[#E0E0E0] placeholder-[#A0A0A0] transition-all duration-200"
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] px-8 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-bold"
            >
              Berlangganan
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer Links */}
      <div className="py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold mb-6 text-[#F0D59D]">YUMMI</h3> {/* Logo/Nama Perusahaan emas */}
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#F0D59D]">PRIVASI</h4> {/* Judul emas */}
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors">Syarat Penggunaan</a></li>
                <li><a href="#" className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors">Cookie</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#F0D59D]">LAYANAN</h4> {/* Judul emas */}
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors">Toko</a></li>
                <li><a href="#" className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors">Pesan Dulu</a></li>
                <li><a href="#" className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors">Menu</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#F0D59D]">TENTANG KAMI</h4> {/* Judul emas */}
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors">Temukan Lokasi</a></li>
                <li><a href="#" className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors">Kisah Kami</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#F0D59D]">INFORMASI</h4> {/* Judul emas */}
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors">Paket & Harga</a></li>
                <li><a href="#" className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors">Jual Produk Anda</a></li>
                <li><a href="#" className="text-[#E0E0E0] hover:text-[#FFD700] transition-colors">Karir</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#F0D59D]">MEDIA SOSIAL</h4> {/* Judul emas */}
              <div className="flex space-x-3">
                <X className="w-6 h-6 cursor-pointer text-[#F0D59D] hover:text-[#FFD700] transition-colors" /> {/* Ikon lebih besar, warna emas */}
                <Instagram className="w-6 h-6 cursor-pointer text-[#F0D59D] hover:text-[#FFD700] transition-colors" />
                <Facebook className="w-6 h-6 cursor-pointer text-[#F0D59D] hover:text-[#FFD700] transition-colors" />
                <Linkedin className="w-6 h-6 cursor-pointer text-[#F0D59D] hover:text-[#FFD700] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#0D0D0D] py-6 text-center text-sm text-[#A0A0A0]"> {/* Latar belakang copyright lebih gelap */}
        <p>&copy; {new Date().getFullYear()} YUMMI Bakery. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
}
