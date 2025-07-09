import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// API Supabase produk
const PRODUCT_API_URL = 'https://rutrfblexvvwtmngrlje.supabase.co/rest/v1/products';
const PRODUCT_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1dHJmYmxleHZ2d3RtbmdybGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NzYyOTgsImV4cCI6MjA2NTU1MjI5OH0.50y2fw1jUPew_YM7G-WJ8Bw14Xrg8SBISXpEtXcFxGA';

// API Supabase checkout
const CHECKOUT_API_URL = 'https://dhfcykarscpafidcmuwm.supabase.co/rest/v1/checkout';
const CHECKOUT_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZmN5a2Fyc2NwYWZpZGNtdXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDQ4ODksImV4cCI6MjA2NTUyMDg4OX0.nd_gvyNavdaiwgn3PbXCzhMAPOy149Xll6MaCoymyDY';

export default function CustomOrder() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [formData, setFormData] = useState({
    nama: '',
    nomor_telepon: '',
    alamat: '',
    metode_pembayaran: '',
    description: '',
  });
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const fallbackImages = [
    "https://brdsg.com/img/800/bw5d48ohbw5hba8tgz_3/CjrtzQ1g90hWiHnCjryxBi5amOfyw3QnCuCKLnJeAjfQ.jpg",
    "https://brdsg.com/img/800/bw5d48ohbw5hba8tgz_3/CjrEjXLs79kNh7OCjrQPCQXWBh1c08RtKNzEH11BmMww.jpg",
    "https://brdsg.com/img/800/bw5d48ohbw5hba8tgz_3/CjrvBin3Y4dOfrBCjrgTZUjSaLj8QQWuYsOV8ztXg.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${PRODUCT_API_URL}?id=eq.${id}&select=*`, {
          headers: {
            apikey: PRODUCT_API_KEY,
            Authorization: `Bearer ${PRODUCT_API_KEY}`,
          },
        });
        const data = await res.json();
        setProduct(data[0]);
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: 'Produk gagal dimuat',
          confirmButtonColor: '#8B4513',
          background: '#2C2C2C',
          color: '#F0D59D',
        });
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fallbackImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToNextImage = () => setCurrentImageIndex((prev) => (prev + 1) % fallbackImages.length);
  const goToPrevImage = () => setCurrentImageIndex((prev) => (prev - 1 + fallbackImages.length) % fallbackImages.length);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(CHECKOUT_API_URL, {
        method: 'POST',
        headers: {
          apikey: CHECKOUT_API_KEY,
          Authorization: `Bearer ${CHECKOUT_API_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },
        body: JSON.stringify({
          nama: formData.nama,
          nomor_telepon: formData.nomor_telepon,
          alamat: formData.alamat,
          metode_pembayaran: formData.metode_pembayaran,
          produk: `${product ? product.name : 'Custom Order'}: ${formData.description}`,
          jumlah: quantity,
          total_harga: product ? product.price * quantity : 0,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Gagal mengirim pesanan');
      }

      setFormData({ nama: '', nomor_telepon: '', alamat: '', metode_pembayaran: '', description: '' });
      setQuantity(1);

      Swal.fire({
        icon: 'success',
        title: 'Terima kasih!',
        text: 'Pesanan Anda sedang diproses.',
        confirmButtonColor: '#8B4513',
        background: '#2C2C2C',
        color: '#F0D59D',
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: err.message,
        confirmButtonColor: '#8B4513',
        background: '#2C2C2C',
        color: '#F0D59D',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen py-16 bg-[#1A1A1A] text-[#E0E0E0] font-sans flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F0D59D] text-center mb-12 relative pb-4">
          {product ? `Pesan: ${product.name}` : 'Pesanan Khusus'}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-[#DAA520] rounded-full"></span>
        </h1>

        <div className="flex flex-col md:flex-row gap-0 items-stretch bg-[#2C2C2C] rounded-2xl shadow-2xl border border-[#3A3A3A] overflow-hidden relative">
          <div className="w-full md:w-1/2 relative overflow-hidden">
            {product && product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              fallbackImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Bakery item ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              ))
            )}
            {!product && (
              <>
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
              </>
            )}
          </div>

          <div className="w-full md:w-1/2 p-4 md:p-8 bg-[#1A1A1A] rounded-xl flex flex-col justify-center">
            <form onSubmit={handleSubmit}>
              {product && (
                <div className="mb-4 text-[#F0D59D] font-semibold">
                  Harga per item: Rp {product.price.toLocaleString('id-ID')}
                </div>
              )}
              <div className="mb-4">
                <label className="block text-[#F0D59D] font-semibold mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#4A4A4A] rounded-lg text-[#E0E0E0]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#F0D59D] font-semibold mb-2">Nomor Telepon</label>
                <input
                  type="tel"
                  name="nomor_telepon"
                  value={formData.nomor_telepon}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#4A4A4A] rounded-lg text-[#E0E0E0]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#F0D59D] font-semibold mb-2">Alamat Lengkap</label>
                <input
                  type="text"
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#4A4A4A] rounded-lg text-[#E0E0E0]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#F0D59D] font-semibold mb-2">Metode Pembayaran</label>
                <select
                  name="metode_pembayaran"
                  value={formData.metode_pembayaran}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#4A4A4A] rounded-lg text-[#E0E0E0]"
                >
                  <option value="">-- Pilih --</option>
                  <option value="BCA">Transfer BCA</option>
                  <option value="Mandiri">Transfer Mandiri</option>
                  <option value="BRI">Transfer BRI</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[#F0D59D] font-semibold mb-2">Keterangan Tambahan</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#4A4A4A] rounded-lg text-[#E0E0E0] min-h-[100px]"
                />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3 py-1 border border-gray-500 rounded text-lg"
                >–</button>
                <span className="min-w-[24px] text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-3 py-1 border border-gray-500 rounded text-lg"
                >+</button>
              </div>
              {product && (
                <div className="mb-4 text-[#F0D59D] font-semibold">
                  Total: Rp {(product.price * quantity).toLocaleString('id-ID')}
                </div>
              )}
              {loading && <p className="text-yellow-500 mb-2">Mengirim...</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#DAA520] text-[#4A2E00] font-bold rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Mengirim...' : 'Kirim Pesanan'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
