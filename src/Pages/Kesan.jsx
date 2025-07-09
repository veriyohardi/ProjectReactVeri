import React, { useRef, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// API Setup
const API_URL = "https://dhfcykarscpafidcmuwm.supabase.co/rest/v1/pesan_pengguna";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZmN5a2Fyc2NwYWZpZGNtdXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDQ4ODksImV4cCI6MjA2NTUyMDg4OX0.nd_gvyNavdaiwgn3PbXCzhMAPOy149Xll6MaCoymyDY";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function Kesan() {
  const scrollRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: '',
    rating: 2,
  });

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(API_URL, { headers });
      setTestimonials(res.data);
    } catch (error) {
      console.error("Gagal mengambil data testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardTotalWidth = 320 + 40;
      const newIndex = Math.round(scrollLeft / cardTotalWidth);
      setActiveIndex(newIndex);
    }
  }, []);

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const cardTotalWidth = 320 + 40;
      scrollRef.current.scrollTo({ left: index * cardTotalWidth, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardTotalWidth = 320 + 40;
      const newIndex = direction === 'left' ? Math.max(activeIndex - 1, 0) : Math.min(activeIndex + 1, testimonials.length - 1);
      scrollRef.current.scrollTo({ left: newIndex * cardTotalWidth, behavior: 'smooth' });
      setActiveIndex(newIndex);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData, { headers });
      Swal.fire({
        icon: 'success',
        title: 'Terima kasih!',
        text: 'Feedback Anda berhasil dikirim.',
        confirmButtonColor: '#8B4513',
        background: '#2C2C2C',
        color: '#F0D59D',
      });
      setFormData({ nama: '', email: '', pesan: '', rating: 2 });
      fetchTestimonials();
    } catch (error) {
      console.error("Gagal menambah testimonial:", error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: 'Terjadi kesalahan saat mengirim.',
        confirmButtonColor: '#8B4513',
        background: '#2C2C2C',
        color: '#F0D59D',
      });
    }
  };

  const handleStarClick = (index) => {
    setFormData({ ...formData, rating: index + 1 });
  };

  return (
    <div className="w-full bg-[#1A1A1A] text-[#E0E0E0] font-sans">
      {/* Form Feedback */}
      <section className="py-16 px-6 lg:px-24 bg-[#2C2C2C] text-[#E0E0E0]">
        <div className="max-w-3xl mx-auto bg-[#1A1A1A] border border-[#4A4A4A] rounded-2xl p-8 shadow-2xl">
          <h2 className="text-center text-3xl font-bold text-[#F0D59D] mb-8">Berikan Kesan Anda</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="text" placeholder="Nama" value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} className="w-full p-3 rounded bg-[#2C2C2C] border border-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#8B4513]" required />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 rounded bg-[#2C2C2C] border border-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#8B4513]" required />
            <textarea placeholder="Pesan Anda" value={formData.pesan} onChange={(e) => setFormData({ ...formData, pesan: e.target.value })} className="w-full p-3 rounded bg-[#2C2C2C] border border-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#8B4513]" rows="4" required></textarea>
            <div className="flex items-center space-x-2">
              <span className="mr-2">Rating:</span>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill={i < formData.rating ? "#FFD700" : "#5A5A5A"}
                  onClick={() => handleStarClick(i)}
                  className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                />
              ))}
            </div>
            <button type="submit" className="w-full bg-[#8B4513] text-[#F0D59D] py-3 rounded font-bold hover:bg-[#A0522D] transition-all">Kirim Kesan</button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-24 bg-[#1A1A1A]">
        <div className="text-center mb-16">
          <p className="text-xl text-[#A0A0A0] font-medium tracking-wide mb-3">Apa Kata Mereka</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F0D59D]">PELANGGAN BAHAGIA KAMI</h2>
        </div>

        <div className="relative flex items-center justify-center py-4">
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 md:-ml-10 bg-[#3A3A3A] rounded-full p-3 shadow-xl hover:bg-[#4A4A4A]">
            <ChevronLeft className="w-8 h-8 text-[#F0D59D]" />
          </button>

          <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory scroll-smooth pb-4 px-2">
            <div className="flex gap-10">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#2C2C2C] rounded-xl p-8 shadow-xl border border-[#4A4A4A] transform hover:scale-105 transition-all duration-300 flex-shrink-0" style={{ minWidth: '320px', maxWidth: '350px' }}>
                  <div className="flex items-center mb-6">
                    <img src="https://i.pravatar.cc/100" alt="Avatar" className="w-16 h-16 rounded-full object-cover mr-5 border-4 border-[#4A4A4A]" />
                    <div>
                      <h3 className="font-bold text-xl text-[#F0D59D]">{testimonial.nama}</h3>
                      <p className="text-base text-[#A0A0A0] mt-1">{testimonial.email}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill={i < testimonial.rating ? "#FFD700" : "#5A5A5A"} strokeWidth={0} className="w-6 h-6" />
                    ))}
                  </div>
                  <p className="text-[#E0E0E0] italic border-l-4 border-[#4A4A4A] pl-4">"{testimonial.pesan}"</p>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 md:-mr-10 bg-[#3A3A3A] rounded-full p-3 shadow-xl hover:bg-[#4A4A4A]">
            <ChevronRight className="w-8 h-8 text-[#F0D59D]" />
          </button>
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <div key={index} className={`w-4 h-4 rounded-full cursor-pointer ${index === activeIndex ? 'bg-[#F0D59D] scale-125' : 'bg-[#5A5A5A] hover:bg-[#6A6A6A]'}`} onClick={() => scrollTo(index)}></div>
          ))}
        </div>
      </section>
    </div>
  );
}
