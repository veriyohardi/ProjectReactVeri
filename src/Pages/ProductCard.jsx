import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const API_URL = "https://rutrfblexvvwtmngrlje.supabase.co/rest/v1/products";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1dHJmYmxleHZ2d3RtbmdybGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NzYyOTgsImV4cCI6MjA2NTU1MjI5OH0.50y2fw1jUPew_YM7G-WJ8Bw14Xrg8SBISXpEtXcFxGA";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${API_URL}?select=*`, { headers });
        if (!res.ok) throw new Error("Gagal fetch data");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full min-h-screen py-16 bg-[#1A1A1A] text-[#E0E0E0] font-sans">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-5 py-3 pl-12 rounded-full border-2 border-[#DAA520] outline-none text-[#E0E0E0] bg-[#2C2C2C] placeholder-[#A0A0A0] focus:ring-2 focus:ring-[#DAA520] transition-all duration-200"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F0D59D] w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-4xl font-extrabold text-[#F0D59D] text-center mb-8 uppercase tracking-wide">
          Semua Produk Kami
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentProducts.length ? (
            currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#2C2C2C] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-[#3A3A3A] flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 p-2 bg-white bg-opacity-20 rounded-full">
                    <Heart className="w-5 h-5 text-[#F0D59D]" />
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#F0D59D] mb-1">{product.name}</h3>
                  <p className="text-[#E0E0E0] text-sm mb-3 line-clamp-2 flex-1">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-[#FFD700]">
                      Rp {Number(product.price).toLocaleString("id-ID")}
                    </span>
                    <Link
                      to={`/custom-order/${product.id}`}
                      className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Pesan
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-[#A0A0A0]">Tidak ada produk ditemukan.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                  page === currentPage
                    ? "bg-[#DAA520] text-[#4A2E00] scale-105 shadow-lg"
                    : "bg-[#3A3A3A] text-[#E0E0E0] hover:bg-[#4A4A4A]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
