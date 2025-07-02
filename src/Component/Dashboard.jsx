import React from "react";
import { CakeSlice, Croissant, CupSoda, IceCream2, Sandwich, ChevronLeft, ChevronRight, Heart } from "lucide-react"; // Mengimpor Heart ikon dari lucide-react

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-[#1A1A1A] text-[#E0E0E0] font-sans"> {/* Latar belakang utama gelap */}
      {/* Hero Section */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between bg-cover bg-center px-6 lg:px-24 py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26, 26, 26, 0.9), rgba(26, 26, 26, 0.9)), url('https://rotienak.com/wp-content/uploads/2024/08/jenis-jenis-bakery-3-1024x597.jpg.webp')", // Overlay gelap yang lebih kuat
        }}
      >
        {/* Text Content */}
        <div className="z-10 max-w-xl">
          <p className="uppercase text-sm tracking-widest mb-2 text-[#F0D59D]">Selamat Datang di Bakery Kami</p> {/* Warna emas */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-[#F0D59D]"> {/* Warna emas */}
            Sajian panggang segar <br /> setiap hari!
          </h1>
          <p className="mb-6 text-[#A0A0A0]"> {/* Warna abu-abu terang */}
            Nikmati berbagai roti, kue, dan pastry kami yang dibuat dengan cinta dan bahan-bahan terbaik.
          </p>
          <button className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] px-6 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"> {/* Tombol emas */}
            Pesan Sekarang
          </button>
        </div>

        {/* Hero Image */}
        <div className="relative mt-12 md:mt-0 md:ml-12">
          <img
            src="https://dm.emea.cms.aldi.cx/is/image/aldiprodeu/Editorial-hero-Bakery-250325-UK?wid=2625"
            alt="Bakery Hero"
            className="rounded-full w-80 h-80 object-cover shadow-lg border-4 border-[#3A3A3A]" // Border gelap
          />
          <div className="absolute -right-10 top-1/2 w-32 h-32 rounded-full bg-[#DAA520] opacity-20 blur-3xl"></div> {/* Efek blur emas */}
          <div className="absolute -left-10 -bottom-10 w-24 h-24 rounded-full bg-[#FFD700] opacity-20 blur-2xl"></div> {/* Efek blur emas */}
        </div>
      </section>

      {/* Category Icons */}
      <section className="bg-[#2C2C2C] py-12 px-6 lg:px-24"> {/* Latar belakang gelap */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="flex flex-col items-center">
            <CakeSlice className="w-10 h-10 mb-2 text-[#F0D59D]" /> {/* Ikon emas */}
            <p className="font-medium text-[#E0E0E0]">Kue</p> {/* Teks terang */}
          </div>
          <div className="flex flex-col items-center">
            <Croissant className="w-10 h-10 mb-2 text-[#F0D59D]" /> {/* Ikon emas */}
            <p className="font-medium text-[#E0E0E0]">Pastry</p> {/* Teks terang */}
          </div>
          <div className="flex flex-col items-center">
            <Sandwich className="w-10 h-10 mb-2 text-[#F0D59D]" /> {/* Ikon emas */}
            <p className="font-medium text-[#E0E0E0]">Roti</p> {/* Teks terang */}
          </div>
          <div className="flex flex-col items-center">
            <IceCream2 className="w-10 h-10 mb-2 text-[#F0D59D]" /> {/* Ikon emas */}
            <p className="font-medium text-[#E0E0E0]">Dessert</p> {/* Teks terang */}
          </div>
          <div className="flex flex-col items-center">
            <CupSoda className="w-10 h-10 mb-2 text-[#F0D59D]" /> {/* Ikon emas */}
            <p className="font-medium text-[#E0E0E0]">Minuman</p> {/* Teks terang */}
          </div>
        </div>
      </section>

      {/* Our Special Coffee Section (Updated based on image) */}
      <section className="py-16 px-6 lg:px-24 bg-[#1A1A1A] text-[#E0E0E0] relative flex items-center justify-center"> {/* Latar belakang gelap */}
        <h2 className="text-xl font-medium text-center absolute top-6 w-full text-[#F0D59D]">Menu Favorit</h2> {/* Judul emas */}
        <div className="relative w-full max-w-7xl flex items-center justify-center">
          <button className="absolute left-0 bg-[#3A3A3A] rounded-full p-2 shadow-md hover:bg-[#4A4A4A] transition-colors z-10 -translate-x-1/2"> {/* Tombol navigasi gelap */}
            <ChevronLeft className="w-6 h-6 text-[#F0D59D]" /> {/* Ikon emas */}
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-10">
            {/* Coffee Card 1 */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-md overflow-hidden border border-[#3A3A3A]"> {/* Latar belakang kartu gelap, border gelap */}
              <div className="relative">
                <img
                  src="https://www.fomac.co.id/uploads/images/blog/Roti.jpg"
                  alt="Roti"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#1A1A1A] p-1 rounded-full shadow-sm"> {/* Latar belakang ikon gelap */}
                  <Heart className="w-5 h-5 text-[#F0D59D]" /> {/* Menggunakan komponen Heart */}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#F0D59D] mb-1">Roti Gandum</h3> {/* Teks emas */}
                <p className="text-[#A0A0A0] text-sm mb-4">Roti gandum sehat dan lezat, cocok untuk sarapan.</p> {/* Teks abu-abu terang */}
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[#FFD700]">Rp. 20.000</p> {/* Harga emas */}
                  <button className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] px-4 py-2 text-sm rounded-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-bold"> {/* Tombol emas */}
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>

            {/* Coffee Card 2 */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-md overflow-hidden border border-[#3A3A3A]">
              <div className="relative">
                <img
                  src="https://rottebakery.com/wp-content/uploads/2022/08/donat-di-rotte-bakery.jpg"
                  alt="Donat"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#1A1A1A] p-1 rounded-full shadow-sm">
                  <Heart className="w-5 h-5 text-[#F0D59D]" /> {/* Menggunakan komponen Heart */}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#F0D59D] mb-1">Donat Coklat</h3>
                <p className="text-[#A0A0A0] text-sm mb-4">Donat lembut dengan taburan coklat lezat.</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[#FFD700]">Rp. 15.000</p>
                  <button className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] px-4 py-2 text-sm rounded-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-bold">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>

            {/* Coffee Card 3 */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-md overflow-hidden border border-[#3A3A3A]">
              <div className="relative">
                <img
                  src="https://nibble-images.b-cdn.net/nibble/original_images/bakery-jakbar-cover1-indra_bakery.jpg?class=large"
                  alt="Pastry"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#1A1A1A] p-1 rounded-full shadow-sm">
                  <Heart className="w-5 h-5 text-[#F0D59D]" /> {/* Menggunakan komponen Heart */}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#F0D59D] mb-1">Croissant Mentega</h3>
                <p className="text-[#A0A0A0] text-sm mb-4">Croissant renyah dengan aroma mentega asli.</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[#FFD700]">Rp. 25.000</p>
                  <button className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] px-4 py-2 text-sm rounded-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-bold">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>

            {/* Coffee Card 4 */}
            <div className="bg-[#2C2C2C] rounded-lg shadow-md overflow-hidden border border-[#3A3A3A]">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Cake"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#1A1A1A] p-1 rounded-full shadow-sm">
                  <Heart className="w-5 h-5 text-[#F0D59D]" /> {/* Menggunakan komponen Heart */}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#F0D59D] mb-1">Slice Cake Coklat</h3>
                <p className="text-[#A0A0A0] text-sm mb-4">Cake coklat lembut dengan lapisan ganache.</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[#FFD700]">Rp. 30.000</p>
                  <button className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] px-4 py-2 text-sm rounded-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-bold">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button className="absolute right-0 bg-[#3A3A3A] rounded-full p-2 shadow-md hover:bg-[#4A4A4A] transition-colors z-10 translate-x-1/2"> {/* Tombol navigasi gelap */}
            <ChevronRight className="w-6 h-6 text-[#F0D59D]" /> {/* Ikon emas */}
          </button>
        </div>
      </section>

      {/* Special Promo Section */}
      <section className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] py-16 px-6 lg:px-24 text-center"> {/* Gradien emas */}
        <h2 className="text-3xl font-bold text-[#4A2E00] mb-4">Promo Spesial: Trio Cake</h2> {/* Judul cokelat tua */}
        <p className="text-[#5C3A21] mb-6"> {/* Teks cokelat */}
          Dapatkan 3 potong cake hanya dengan <span className="font-bold">Rp. 105.000</span>! Penawaran terbatas di toko pilihan.
        </p>
        <button className="bg-[#1A1A1A] text-[#F0D59D] px-8 py-3 rounded-full font-bold hover:bg-[#2C2C2C] transition-colors shadow-lg"> {/* Tombol gelap dengan teks emas */}
          Dapatkan Promo
        </button>
      </section>
    </div>
  );
}
