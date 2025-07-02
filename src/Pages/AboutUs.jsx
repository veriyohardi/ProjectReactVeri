import React, { useState } from 'react';

export default function AboutUs() {
  const [showVisi, setShowVisi] = useState(true); // State untuk mengontrol tampilan Visi atau Misi

  return (
    <section className="w-full min-h-screen py-16 bg-[#1A1A1A] text-[#E0E0E0] font-sans flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Bagian Atas: Tentang YUMMI Bakery (Full Width) */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F0D59D] text-center mb-12 relative pb-4 uppercase tracking-wide">
          Tentang YUMMI Bakery
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-[#DAA520] rounded-full"></span>
        </h1>

        {/* Bagian Kisah Kami (Full Width di Bawah Judul Utama) */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 mb-20">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold text-[#F0D59D] mb-6 relative pb-2">
              Kisah Kami
              <span className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-16 h-1 bg-[#DAA520] rounded-full"></span>
            </h3>
            <p className="text-[#E0E0E0] text-lg leading-relaxed mb-4">
              Yummi Company Bakery merupakan perusahaan yang bergerak di bidang makanan dan berfokus pada bakery. Perusahaan ini sudah memiliki pengalaman selama 7 tahun dan berdiri sejak 2018.
            </p>
            <p className="text-[#E0E0E0] text-lg leading-relaxed">
              Produk yang menjadi *best seller* yakni Korean Garlic Bread, Bolen, Aneka Donat dan Varian Roti Manis dan Asin. Keseluruhan produk yang kami olah terjamin *fresh*, karena proses produksi berlangsung setiap hari serta menggunakan bahan berkualitas dan tanpa bahan pengawet.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://i0.wp.com/jayaagungmesin.com/wp-content/uploads/2023/05/bakery-equipment.jpg?fit=700%2C548&ssl=1"
              alt="Baker sedang bekerja"
              className="w-full max-w-md h-auto object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Bagian Visi & Misi (Dua Kolom di Bawah Kisah Kami) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Kolom Kiri: Visi & Misi Konten */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-[#F0D59D] mb-6 relative pb-2">
              Visi & Misi
              <span className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-16 h-1 bg-[#DAA520] rounded-full"></span>
            </h3>

            {/* Tombol Toggle Visi/Misi */}
            <div className="flex space-x-4 mb-8 w-full justify-center md:justify-start">
              <button
                onClick={() => setShowVisi(true)}
                className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                  showVisi
                    ? 'bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] shadow-md'
                    : 'bg-[#3A3A3A] text-[#A0A0A0] hover:bg-[#4A4A4A]'
                }`}
              >
                Visi
              </button>
              <button
                onClick={() => setShowVisi(false)}
                className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                  !showVisi
                    ? 'bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] shadow-md'
                    : 'bg-[#3A3A3A] text-[#A0A0A0] hover:bg-[#4A4A4A]'
                }`}
              >
                Misi
              </button>
            </div>

            {/* Konten Visi atau Misi */}
            {showVisi ? (
              <div className="text-lg leading-relaxed animate-fade-in">
                <p className="mb-4 text-[#E0E0E0]">
                  Menjadi brand bakery nomor satu di Sumatera dalam hal jangkauan, rasa, service, dan pengalaman customer.
                </p>
              </div>
            ) : (
              <div className="text-lg leading-relaxed animate-fade-in">
                <ul className="list-none p-0 m-0">
                  <li className="flex items-start mb-3 text-[#E0E0E0]">
                    <span className="text-[#DAA520] text-xl mr-3 mt-1">✔</span>
                    Menghadirkan produk yang lezat dan bermutu tinggi secara konsisten dengan harga yang dapat dijangkau serta layanan prima.
                  </li>
                  <li className="flex items-start mb-3 text-[#E0E0E0]">
                    <span className="text-[#DAA520] text-xl mr-3 mt-1">✔</span>
                    Memberikan pengalaman terbaik kepada customer sebagai prioritas utama kami.
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Kolom Kanan: Gambar Ilustrasi Visi/Misi */}
          <div className="w-full flex justify-center md:justify-start">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQ6LQTbwzPM1I5LWF7RmDbLHHRF6gjvHjfw&s"
              alt="Konsep Visi Misi Bakery"
              className="w-full max-w-md h-auto object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
