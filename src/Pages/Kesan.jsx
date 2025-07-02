import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'; // Mengimpor ikon bintang dan panah

// Data Testimonial (Disertakan data baru untuk bakery)
const testimonials = [
  {
    id: 1,
    name: "Aisha Rahmani",
    title: "Food Blogger",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=80&h=80&q=80&auto=format",
    quote: "Kue-kue di sini benar-benar lezat! Setiap gigitan penuh cita rasa dan dibuat dengan hati. Sangat merekomendasikan croffle dan kue tart-nya!"
  },
  {
    id: 2,
    name: "Bima Santoso",
    title: "Chef Pastry",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?fit=crop&w=80&h=80&q=80&auto=format",
    quote: "Sebagai sesama praktisi, saya sangat terkesan dengan kualitas bahan dan keahlian di balik setiap roti dan kue. Ini adalah bakery favorit saya!"
  },
  {
    id: 3,
    name: "Citra Dewi",
    title: "Pengusaha Kafe",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=80&h=80&q=80&auto=format",
    quote: "Tempat yang sempurna untuk sarapan dengan roti-roti segar atau sekadar menikmati teh sore dengan pastry. Selalu ada yang baru dan menarik untuk dicoba!"
  },
  {
    id: 4,
    name: "Danu Prakasa",
    title: "Pecinta Kuliner",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a3dd782dbc4?fit=crop&w=80&h=80&q=80&auto=format",
    quote: "Saya selalu kembali untuk roti sourdough mereka yang renyah di luar dan lembut di dalam. Ditambah lagi, pilihan kue keringnya juga tidak pernah mengecewakan."
  },
  {
    id: 5,
    name: "Maya Sari",
    title: "Ibu Rumah Tangga",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&h=80&q=80&auto=format",
    quote: "Pesan kue ulang tahun di sini selalu sukses! Desainnya cantik dan rasanya disukai semua anggota keluarga. Pasti akan jadi langganan."
  },
  {
    id: 6,
    name: "Faisal Ramadhan",
    title: "Pelajar",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1547425260-76bc0649033d?fit=crop&w=80&h=80&q=80&auto=format",
    quote: "Setelah pulang sekolah, saya sering mampir untuk membeli donat atau brownies. Harganya terjangkau dan rasanya bikin ketagihan. Top!"
  }
];

// Utility function untuk debounce
const debounce = (func, delay) => {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

export default function Kesan() {
  const scrollRef = useRef(null); // Membuat ref untuk elemen scroll
  const [activeIndex, setActiveIndex] = useState(0); // State untuk melacak indeks testimonial yang aktif

  // Fungsi untuk menangani scroll dan memperbarui activeIndex
  const handleScroll = useCallback(
    debounce(() => {
      if (scrollRef.current) {
        const { scrollLeft } = scrollRef.current;
        // Menghitung lebar total satu kartu termasuk gap (min-width: 320px, gap-10 = 40px)
        const cardTotalWidth = 320 + 40;
        const newIndex = Math.round(scrollLeft / cardTotalWidth);
        setActiveIndex(newIndex);
      }
    }, 100), // Debounce untuk performa yang lebih baik
    [] // Dependency array untuk useCallback
  );

  // Efek untuk menambahkan dan membersihkan event listener scroll
  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      // Panggil handleScroll sekali saat komponen dimuat untuk mengatur activeIndex awal
      handleScroll();
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]); // handleScroll adalah dependency karena merupakan fungsi yang di-memoized

  // Fungsi untuk melakukan scroll ke testimonial tertentu
  const scrollTo = (index) => {
    if (scrollRef.current) {
      const cardTotalWidth = 320 + 40; // Lebar total kartu termasuk gap
      scrollRef.current.scrollTo({ left: index * cardTotalWidth, behavior: 'smooth' });
    }
    setActiveIndex(index); // Perbarui activeIndex segera saat mengklik dot
  };

  return (
    <div className="w-full min-h-screen bg-[#1A1A1A] text-[#E0E0E0] font-sans">
      {/* Section: Check Out Our Best Bakery Delights */}
      <section className="relative w-full h-[500px] bg-gradient-to-br from-[#2C2C2C] to-[#3A3A3A] flex items-center justify-center overflow-hidden">
        {/* Left Bakery Image */}
        <div className="absolute left-0 top-0 h-full w-[45%] overflow-hidden flex items-end justify-center">
          <img
            src="https://images.unsplash.com/photo-1590741861173-85035e8af62c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxiYWtlcnl8ZW58MHx8MHx8fDA%3D"
            alt="Berbagai jenis roti di nampan"
            className="w-full h-full object-cover transform scale-125 -translate-x-1/4 translate-y-1/4 opacity-50" // Opacity dikurangi
            style={{ objectPosition: 'left bottom' }}
          />
          <img
            src="https://images.unsplash.com/photo-1635341814289-55cf1490024c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxiYWtlcnl8ZW58MHx8MHx8fDA%3D"
            alt="Muffin dan pastry di meja"
            className="absolute bottom-10 left-10 w-[220px] h-auto object-contain z-10 drop-shadow-lg" // Shadow lebih kuat
          />
        </div>

        {/* Center Text Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-[#F0D59D] mb-8 leading-tight animate-fade-in-up"> {/* Warna emas/krem */}
            Cicipi Sajian <br /> Bakery Terbaik Kami
          </h2>
          <button className="flex items-center bg-[#8B4513] text-[#F0D59D] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#A0522D] transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl transform hover:-translate-y-1"> {/* Warna tombol lebih gelap, teks emas */}
            Jelajahi Menu Kami
            <span className="ml-3 text-2xl font-bold">&gt;&gt;</span>
          </button>
        </div>

        {/* Right Bakery Image */}
        <div className="absolute right-0 top-0 h-full w-[45%] overflow-hidden flex items-start justify-center">
          <img
            src="https://images.unsplash.com/photo-1612884610549-ce221d92514a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxiYWtlcnl8ZW58MHx8MHx8fDA%3D"
            alt="Roti-roti segar di keranjang"
            className="w-full h-full object-cover transform scale-125 translate-x-1/4 -translate-y-1/4 opacity-50" // Opacity dikurangi
            style={{ objectPosition: 'right top' }}
          />
           <img
            src="https://plus.unsplash.com/premium_photo-1683122040016-4b38b3ab34b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxiYWtlcnl8ZW58MHx8MHx8fDA%3D"
            alt="Kue tart dengan hiasan buah"
            className="absolute top-10 right-10 w-[450px] h-auto object-contain z-10 drop-shadow-lg" // Shadow lebih kuat
          />
        </div>
      </section>

      {/* Section: Our Happy Customers (Testimonials) */}
      <section className="py-24 px-6 lg:px-24 bg-[#1A1A1A] text-[#E0E0E0]"> {/* Background gelap, teks terang */}
        <div className="text-center mb-16">
          <p className="text-xl text-[#A0A0A0] font-medium tracking-wide mb-3">Apa Kata Mereka</p> {/* Teks abu-abu terang */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F0D59D] leading-tight">PELANGGAN BAHAGIA KAMI</h2> {/* Teks emas/krem */}
        </div>

        <div className="relative flex items-center justify-center py-4">
          {/* Tombol Panah Kiri */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 md:-ml-10 bg-[#3A3A3A] rounded-full p-3 shadow-xl hover:bg-[#4A4A4A] transition-colors duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-[#8B4513]" // Background tombol lebih gelap
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-8 h-8 text-[#F0D59D]" /> {/* Ikon panah warna emas/krem */}
          </button>

          {/* Kontainer Testimonial yang Dapat Di-scroll */}
          <div
            ref={scrollRef} // Pasang ref di sini
            className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory scroll-smooth pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-10">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-[#2C2C2C] rounded-xl p-8 shadow-xl border border-[#4A4A4A] transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer group flex-shrink-0" // Background kartu lebih gelap, border abu-abu tua
                  style={{ minWidth: '320px', maxWidth: '350px' }}
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-5 border-4 border-[#4A4A4A] group-hover:border-[#F0D59D] transition-colors duration-300" // Border foto abu-abu tua, hover emas
                    />
                    <div>
                      <h3 className="font-bold text-xl text-[#F0D59D]">{testimonial.name}</h3> {/* Teks emas/krem */}
                      <p className="text-base text-[#A0A0A0] mt-1">{testimonial.title}</p> {/* Teks abu-abu terang */}
                    </div>
                    <div className="ml-auto flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          fill={i < testimonial.rating ? "#FFD700" : "#5A5A5A"} // Warna emas untuk bintang aktif, abu-abu gelap untuk kosong
                          strokeWidth={0}
                          className="w-6 h-6"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#E0E0E0] text-base leading-relaxed italic border-l-4 border-[#4A4A4A] pl-4"> {/* Teks isi putih/krem, border abu-abu tua */}
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Panah Kanan */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 md:-mr-10 bg-[#3A3A3A] rounded-full p-3 shadow-xl hover:bg-[#4A4A4A] transition-colors duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-8 h-8 text-[#F0D59D]" /> {/* Ikon panah warna emas/krem */}
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
                index === activeIndex ? 'bg-[#F0D59D] scale-125' : 'bg-[#5A5A5A] hover:bg-[#6A6A6A]'
              }`}
              onClick={() => scrollTo(index)}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}
