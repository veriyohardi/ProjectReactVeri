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
    <footer className="bg-[#1A1A1A] text-[#E0E0E0] font-sans">
      {/* Newsletter Section */}
      <div className="relative py-16 px-6 lg:px-12 border-b border-[#3A3A3A]">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-transparent to-[#2C2C2C] opacity-50 hidden md:block"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-transparent to-[#2C2C2C] opacity-50 hidden md:block"></div>
      </div>

      {/* Footer Links */}
      <div className="py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold mb-6 text-[#F0D59D]">YUMMI</h3>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#F0D59D]">PRIVASI</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Syarat Penggunaan</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Cookie</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#F0D59D]">LAYANAN</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Toko</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Pesan Dulu</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Menu</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#F0D59D]">TENTANG KAMI</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Temukan Lokasi</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Kisah Kami</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#F0D59D]">INFORMASI</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Paket & Harga</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Jual Produk Anda</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Karir</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#F0D59D]">MEDIA SOSIAL</h4>
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-3">
                  <X className="w-6 h-6 cursor-pointer text-[#F0D59D] hover:text-[#FFD700] transition-colors" />
                  <Instagram className="w-6 h-6 cursor-pointer text-[#F0D59D] hover:text-[#FFD700] transition-colors" />
                  <Facebook className="w-6 h-6 cursor-pointer text-[#F0D59D] hover:text-[#FFD700] transition-colors" />
                  <Linkedin className="w-6 h-6 cursor-pointer text-[#F0D59D] hover:text-[#FFD700] transition-colors" />
                </div>
                <div className="w-full h-48 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6202092678095!2d101.4235219747765!3d0.5709751994234532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab67086f2e89%3A0x65a24264fec306bb!2sPoliteknik%20Caltex%20Riau!5e0!3m2!1sen!2sid!4v1752085649301!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: 'grayscale(100%) brightness(80%) contrast(120%)'
                    }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0D0D0D] py-6 text-center text-sm text-[#A0A0A0]">
        <p>&copy; {new Date().getFullYear()} YUMMI Bakery. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
}
