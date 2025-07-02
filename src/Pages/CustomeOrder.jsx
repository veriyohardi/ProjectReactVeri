import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Mengimpor ikon panah

export default function CustomOrder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '', // Ini akan jadi alamat lengkap
    phone: '',
    deliveryMethod: '',
    description: '',
  });

  const images = [
    "https://brdsg.com/img/800/bw5d48ohbw5hba8tgz_3/CjrtzQ1g90hWiHnCjryxBi5amOfyw3QnCuCKLnJeAjfQ.jpg", // Kue-kue manis
    "https://brdsg.com/img/800/bw5d48ohbw5hba8tgz_3/CjrEjXLs79kNh7OCjrQPCQXWBh1c08RtKNzEH11BmMww.jpg", // Roti artisan
    "https://brdsg.com/img/800/bw5d48ohbw5hba8tgz_3/CjrvBin3Y4dOfrBCjrgTZUjSaLj8QQWuYsOV8ztXg.jpg", // Berbagai macam pastry
    "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/f46d8f4b-ecd7-4655-8761-2fab00199233_Go-Biz_20241029_152700.jpeg?auto=format", // Kue cokelat
    "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/b48e9f1b-abd7-4749-b25c-01fde3b00c14_gobiz-dashboard-image_1718271836962.jpg" // Roti gandum
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const formRef = useRef(null); // Ref untuk kontainer formulir
  const [imageContainerHeight, setImageContainerHeight] = useState('450px'); // State untuk tinggi kontainer gambar

  // Efek untuk auto-advance gambar
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Ganti gambar setiap 4 detik

    return () => clearInterval(interval);
  }, [images.length]);

  // Efek untuk menyesuaikan tinggi kontainer gambar dengan tinggi formulir
  useEffect(() => {
    const currentFormRef = formRef.current;
    if (currentFormRef) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          if (entry.target === currentFormRef) {
            // Set tinggi kontainer gambar sama dengan tinggi form card
            setImageContainerHeight(`${entry.contentRect.height}px`);
          }
        }
      });

      resizeObserver.observe(currentFormRef);

      return () => resizeObserver.disconnect();
    }
  }, []);

  // Fungsi untuk navigasi gambar manual
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Pesanan Khusus:', formData);
    console.log('Terima kasih! Pesanan khusus Anda telah kami terima. Kami akan segera menghubungi Anda.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      deliveryMethod: '',
      description: '',
    });
  };

  return (
    <section className="w-full min-h-screen py-16 bg-[#1A1A1A] text-[#E0E0E0] font-sans flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl"> {/* Container lebih lebar */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F0D59D] text-center mb-12 relative pb-4">
          Pesanan Khusus
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-[#DAA520] rounded-full"></span>
        </h1>

        {/* The "book" container */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-0 items-stretch bg-[#2C2C2C] rounded-2xl shadow-2xl border border-[#3A3A3A] relative overflow-hidden">
          {/* Central "spine" effect */}
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1.5 bg-[#4A4A4A] z-20 hidden md:block"></div>

          {/* Left "page" - Image Display */}
          <div
            className="w-full md:w-1/2 overflow-hidden rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl relative flex-shrink-0"
            style={{ height: imageContainerHeight }} // Menggunakan tinggi yang disesuaikan dari form
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Bakery item ${index + 1}`}
                // Menggunakan opacity untuk transisi "halaman"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-30 hover:bg-opacity-75 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-30 hover:bg-opacity-75 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Right "page" - Form Card */}
          <div ref={formRef} className="w-full md:w-1/2 p-4 md:p-8">
            <div className="bg-[#1A1A1A] rounded-xl p-6 shadow-xl border border-[#4A4A4A]"> {/* Card untuk formulir */}
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-[#F0D59D] text-lg font-semibold mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-[#2C2C2C] border border-[#4A4A4A] rounded-lg text-[#E0E0E0] placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#DAA520] transition-all duration-200"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-[#F0D59D] text-lg font-semibold mb-2">Alamat Lengkap</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-[#2C2C2C] border border-[#4A4A4A] rounded-lg text-[#E0E0E0] placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#DAA520] transition-all duration-200"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-[#F0D59D] text-lg font-semibold mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-[#2C2C2C] border border-[#4A4A4A] rounded-lg text-[#E0E0E0] placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#DAA520] transition-all duration-200"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="deliveryMethod" className="block text-[#F0D59D] text-lg font-semibold mb-2">Pilih Metode Pengiriman</label>
                  <select
                    id="deliveryMethod"
                    name="deliveryMethod"
                    value={formData.deliveryMethod}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-[#2C2C2C] border border-[#4A4A4A] rounded-lg text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#DAA520] transition-all duration-200 appearance-none pr-8"
                  >
                    <option value="" className="text-[#A0A0A0]">-- Pilih --</option>
                    <option value="Ambil di Toko" className="text-[#E0E0E0]">Ambil di Toko (Self Pick-up)</option>
                    <option value="Pengiriman Kurir" className="text-[#E0E0E0]">Pengiriman Kurir Reguler</option>
                    <option value="Pengiriman Instan" className="text-[#E0E0E0]">Pengiriman Instan (Grab/Gojek)</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="description" className="block text-[#F0D59D] text-lg font-semibold mb-2">Detail Pesanan Anda (produk, desain, jumlah, tanggal diinginkan, alergi/preferensi diet, dll.)</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-[#2C2C2C] border border-[#4A4A4A] rounded-lg text-[#E0E0E0] placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#DAA520] transition-all duration-200 min-h-[150px] resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#DAA520] to-[#FFD700] text-[#4A2E00] font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2 focus:ring-offset-[#2C2C2C]"
                >
                  Kirim Pesanan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
