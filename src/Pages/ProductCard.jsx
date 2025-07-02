import React, { useState, useRef } from 'react';
import { Heart, ChevronLeft, ChevronRight, Search } from 'lucide-react';

// --- ProductCard Component ---
function ProductCard({ product }) {
  const { name, description, price, imageUrl } = product;

  return (
    <div className="flex-shrink-0 w-64 bg-[#2C2C2C] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer snap-start border border-[#3A3A3A]">
      <div className="relative h-48 w-full overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 p-2 bg-white bg-opacity-20 rounded-full">
          <Heart className="w-5 h-5 text-[#F0D59D] hover:text-[#FFD700] transition-colors" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#F0D59D] mb-1">{name}</h3>
        <p className="text-[#E0E0E0] text-sm mb-3 h-10 overflow-hidden line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-[#FFD700]">{price}</span>
          <button className="bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
            Pesan
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Explicit Product Data ---
const bakeryProducts = [
  {
    id: 'roti-1',
    name: 'Roti Gandum Sehat',
    description: 'Roti gandum lembut dan sehat untuk sarapan Anda.',
    price: 'Rp. 20.000',
    imageUrl: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1635785272/attached_image/alasan-mengonsumsi-roti-gandum-dan-tips-memilihnya.jpg',
  },
  {
    id: 'roti-2',
    name: 'Roti Tawar Premium',
    description: 'Roti tawar empuk cocok untuk berbagai topping.',
    price: 'Rp. 18.000',
    imageUrl: 'https://bakerys.aribudin.com/wp-content/uploads/2023/10/pr6.jpg',
  },
  {
    id: 'roti-3',
    name: 'Roti Sobek Coklat',
    description: 'Roti sobek dengan isian coklat lumer.',
    price: 'Rp. 22.000',
    imageUrl: 'https://healthybelly.s3.amazonaws.com/product/media_1633787296_0.jpeg',
  },
  {
    id: 'roti-4',
    name: 'Roti Sourdough',
    description: 'Roti klasik dengan cita rasa khas fermentasi.',
    price: 'Rp. 28.000',
    imageUrl: 'https://www.tokomesin.com/wp-content/uploads/2017/10/Resep-dan-Cara-Membuat-Roti-Sobek-Coklat-Mudah-dan-Gampang-maksindo2.jpg',
  },
    {
    id: 'roti-5',
    name: 'Roti Sobek keju',
    description: 'Roti sobek dengan isian coklat lumer.',
    price: 'Rp. 22.000',
    imageUrl: 'https://healthybelly.s3.amazonaws.com/product/media_1633787296_0.jpeg',
  },
  {
    id: 'roti-6',
    name: 'Roti Sobek keju',
    description: 'Roti sobek dengan isian coklat lumer.',
    price: 'Rp. 22.000',
    imageUrl: 'https://healthybelly.s3.amazonaws.com/product/media_1633787296_0.jpeg',
  },
];

const cakeProducts = [
  {
    id: 'cake-1',
    name: 'Red Velvet Cake',
    description: 'Cake lembut dengan cream cheese frosting.',
    price: 'Rp. 35.000',
    imageUrl: 'https://www.allrecipes.com/thmb/gDJ1S6ETLfWGyyWw_4A_IGhvDYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9295_red-velvet-cake_ddmfs_4x3_1129-a8ab17b825e3464a9a53ceeda54ff461.jpg',
  },
  {
    id: 'cake-2',
    name: 'Chocolate Lava Cake',
    description: 'Cake coklat dengan isian lumer di dalam.',
    price: 'Rp. 38.000',
    imageUrl: 'https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7-500x500.jpg',
  },
  {
    id: 'cake-3',
    name: 'Cheesecake Berry',
    description: 'Cheesecake creamy dengan topping berry segar.',
    price: 'Rp. 40.000',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxYWbFxwJ1tlKVlPB_UiqBKKyduyVFmfqmw&s',
  },
  {
    id: 'cake-4',
    name: 'Tiramisu Slice',
    description: 'Cake tiramisu lembut dengan taburan kakao.',
    price: 'Rp. 37.000',
    imageUrl: 'https://preppykitchen.com/wp-content/uploads/2023/10/Tiramisu-Social.jpg',
  },
  {
    id: 'cake-5',
    name: 'Tiramisu Slice',
    description: 'Cake tiramisu lembut dengan taburan kakao.',
    price: 'Rp. 37.000',
    imageUrl: 'https://preppykitchen.com/wp-content/uploads/2023/10/Tiramisu-Social.jpg',
  },
    {
    id: 'cake-6',
    name: 'Chocolate Lava Cake',
    description: 'Cake coklat dengan isian lumer di dalam.',
    price: 'Rp. 38.000',
    imageUrl: 'https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7-500x500.jpg',
  },
];

// --- Main Products Component ---
export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const bakeryScrollRef = useRef(null);
  const cakeScrollRef = useRef(null);

  const filteredBakeryProducts = bakeryProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCakeProducts = cakeProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scroll = (offset, ref) => {
    if (ref.current) {
      ref.current.scrollLeft += offset;
    }
  };

  return (
    <section className="w-full min-h-screen py-16 bg-[#1A1A1A] text-[#E0E0E0] font-sans">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl"> {/* Container lebih lebar */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Cari roti, cake..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-full border-2 border-[#DAA520] outline-none text-[#E0E0E0] bg-[#2C2C2C] placeholder-[#A0A0A0] focus:ring-2 focus:ring-[#DAA520] transition-all duration-200"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F0D59D] w-5 h-5" />
          </div>
        </div>

        {/* Section: Roti Spesial Kami */}
        <h2 className="text-4xl font-extrabold text-[#F0D59D] text-center mb-8 uppercase tracking-wide">Roti Spesial Kami</h2>
        <div className="relative mb-16">
          <div ref={bakeryScrollRef} className="flex gap-6 overflow-x-auto pb-4 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory">
            {filteredBakeryProducts.length ? (
              filteredBakeryProducts.map(product => <ProductCard key={product.id} product={product} />)
            ) : (
              <p className="text-[#A0A0A0] text-center w-full">Tidak ada roti ditemukan.</p>
            )}
          </div>
          {filteredBakeryProducts.length > 3 && ( // Tampilkan tombol navigasi hanya jika ada lebih dari 3 produk
            <>
              <button onClick={() => scroll(-280, bakeryScrollRef)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#8B4513] text-[#F0D59D] p-3 rounded-full shadow-lg hover:bg-[#A0522D] transition-colors duration-200 z-10">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scroll(280, bakeryScrollRef)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#8B4513] text-[#F0D59D] p-3 rounded-full shadow-lg hover:bg-[#A0522D] transition-colors duration-200 z-10">
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Section: Cake Spesial Kami */}
        <h2 className="text-4xl font-extrabold text-[#F0D59D] text-center mb-8 uppercase tracking-wide">Cake Spesial Kami</h2>
        <div className="relative mb-16">
          <div ref={cakeScrollRef} className="flex gap-6 overflow-x-auto pb-4 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory">
            {filteredCakeProducts.length ? (
              filteredCakeProducts.map(product => <ProductCard key={product.id} product={product} />)
            ) : (
              <p className="text-[#A0A0A0] text-center w-full">Tidak ada cake ditemukan.</p>
            )}
          </div>
          {filteredCakeProducts.length > 3 && ( // Tampilkan tombol navigasi hanya jika ada lebih dari 3 produk
            <>
              <button onClick={() => scroll(-280, cakeScrollRef)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#8B4513] text-[#F0D59D] p-3 rounded-full shadow-lg hover:bg-[#A0522D] transition-colors duration-200 z-10">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scroll(280, cakeScrollRef)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#8B4513] text-[#F0D59D] p-3 rounded-full shadow-lg hover:bg-[#A0522D] transition-colors duration-200 z-10">
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      </div>
      {/* CSS untuk menyembunyikan scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
