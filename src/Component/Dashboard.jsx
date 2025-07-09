import React, { useEffect, useState } from "react";
import {
  CakeSlice,
  Croissant,
  Cookie,
  Droplet,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const API_URL = "https://rutrfblexvvwtmngrlje.supabase.co/rest/v1/products";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1dHJmYmxleHZ2d3RtbmdybGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NzYyOTgsImV4cCI6MjA2NTU1MjI5OH0.50y2fw1jUPew_YM7G-WJ8Bw14Xrg8SBISXpEtXcFxGA";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export default function Dashboard() {
  const [latestProducts, setLatestProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetch produk terbaru
        const resLatest = await fetch(`${API_URL}?select=*&order=created_at.desc&limit=5`, { headers });
        if (!resLatest.ok) throw new Error("Gagal fetch produk terbaru");
        const dataLatest = await resLatest.json();
        setLatestProducts(dataLatest);

        // Fetch produk favorit berdasarkan jumlah terbanyak
        const resFavorite = await fetch(`${API_URL}?select=*&order=jumlah.desc.nullslast&limit=5`, { headers });
        if (!resFavorite.ok) throw new Error("Gagal fetch produk favorit");
        const dataFavorite = await resFavorite.json();
        setFavoriteProducts(dataFavorite);

      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#1A1A1A] text-[#E0E0E0] font-sans">
      {/* Hero Section */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between bg-cover bg-center px-6 lg:px-24 py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26, 26, 26, 0.9), rgba(26, 26, 26, 0.9)), url('https://rotienak.com/wp-content/uploads/2024/08/jenis-jenis-bakery-3-1024x597.jpg.webp')",
        }}
      >
        <div className="z-10 max-w-xl">
          <p className="uppercase text-sm tracking-widest mb-2 text-[#F0D59D]">Selamat Datang di Bakery Kami</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-[#F0D59D]">
            Sajian panggang segar <br /> setiap hari!
          </h1>
          <p className="mb-6 text-[#A0A0A0]">
            Nikmati berbagai roti, kue, dan pastry kami yang dibuat dengan cinta dan bahan-bahan terbaik.
          </p>
         <a
  href="#"
  role="button"
  className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] px-6 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
>
  Pesan Sekarang
</a>

        </div>

        <div className="relative mt-12 md:mt-0 md:ml-12">
          <img
            src="https://dm.emea.cms.aldi.cx/is/image/aldiprodeu/Editorial-hero-Bakery-250325-UK?wid=2625"
            alt="Bakery Hero"
            className="rounded-full w-80 h-80 object-cover shadow-lg border-4 border-[#3A3A3A]"
          />
          <div className="absolute -right-10 top-1/2 w-32 h-32 rounded-full bg-[#DAA520] opacity-20 blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-24 h-24 rounded-full bg-[#FFD700] opacity-20 blur-2xl"></div>
        </div>
      </section>

      {/* Category Icons */}
      <section className="bg-[#2C2C2C] py-12 px-6 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Droplet className="w-10 h-10 mb-2 text-[#F0D59D]" />
            <p className="font-medium text-[#E0E0E0]">Kue Basah</p>
          </div>
          <div className="flex flex-col items-center">
            <Cookie className="w-10 h-10 mb-2 text-[#F0D59D]" />
            <p className="font-medium text-[#E0E0E0]">Kue Kering</p>
          </div>
          <div className="flex flex-col items-center">
            <CakeSlice className="w-10 h-10 mb-2 text-[#F0D59D]" />
            <p className="font-medium text-[#E0E0E0]">Cake</p>
          </div>
          <div className="flex flex-col items-center">
            <Croissant className="w-10 h-10 mb-2 text-[#F0D59D]" />
            <p className="font-medium text-[#E0E0E0]">Pastry</p>
          </div>
        </div>
      </section>

  <section className="py-16 px-6 lg:px-24 bg-[#1A1A1A]">
        <h2 className="text-3xl font-bold text-[#F0D59D] text-center mb-10">Produk Terbaru</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {latestProducts.length ? (
            latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-[#A0A0A0]">Tidak ada produk terbaru.</p>
          )}
        </div>
      </section>

      {/* Promo Section */}
      <section className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] py-16 px-6 lg:px-24 text-center">
        <h2 className="text-3xl font-bold text-[#4A2E00] mb-4">Promo Spesial: Trio Cake</h2>
        <p className="text-[#5C3A21] mb-6">
          Dapatkan 3 potong cake hanya dengan <span className="font-bold">Rp. 105.000</span>! Penawaran terbatas di toko pilihan.
        </p>
        <button className="bg-[#1A1A1A] text-[#F0D59D] px-8 py-3 rounded-full font-bold hover:bg-[#2C2C2C] transition-colors shadow-lg">
          Dapatkan Promo
        </button>
      </section>

      {/* Produk Terbaru */}
    
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="bg-[#2C2C2C] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-[#3A3A3A] flex flex-col">
      <div className="relative h-40 w-full overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 p-2 bg-white bg-opacity-20 rounded-full">
          <Heart className="w-5 h-5 text-[#F0D59D]" />
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-bold text-[#F0D59D] mb-1">{product.name}</h3>
        <p className="text-[#A0A0A0] text-xs mb-2 line-clamp-2 flex-1">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-base font-bold text-[#FFD700]">
            Rp {Number(product.price).toLocaleString("id-ID")}
          </span>
          <Link
            to={`/custom-order/${product.id}`}
            className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] px-3 py-1 rounded-full font-semibold text-xs shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Pesan
          </Link>
        </div>
      </div>
    </div>
  );
}
