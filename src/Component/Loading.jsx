import React from 'react';

export default function Loading() {
  return (
    <div className="loading-container">
      <style>
        {`
        /* Impor font 'Pacifico' dari Google Fonts untuk tampilan yang lebih manis dan estetik */
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

        /* Pastikan body tidak memiliki margin default dan overflow tersembunyi */
        body {
          margin: 0;
          overflow: hidden;
        }

        /* Container utama untuk layar loading */
        .loading-container {
          display: flex;
          flex-direction: column; /* Mengatur elemen dalam kolom (teks di atas titik) */
          justify-content: center;
          align-items: center;
          min-height: 100vh; /* Memastikan mengisi seluruh tinggi viewport */
          width: 100vw; /* Memastikan mengisi seluruh lebar viewport */
          background-color: #1A1A1A; /* Warna latar belakang gelap yang konsisten */
          color: #F0D59D; /* Warna teks emas/krem */
          font-family: 'Pacifico', cursive; /* Menggunakan font Pacifico atau fallback cursive */
          font-size: 4em; /* Ukuran font besar untuk efek dramatis */
          font-weight: normal; /* Font Pacifico sudah memiliki ketebalan bawaan */
          text-align: center;
          overflow: hidden; /* Mencegah scrollbar muncul dari animasi */
          position: relative; /* Diperlukan untuk penempatan elemen anak secara absolut jika ada */
          padding: 20px; /* Sedikit padding agar konten tidak terlalu mepet tepi */
          box-sizing: border-box; /* Memastikan padding tidak menambah lebar/tinggi total */
        }

        /* Gaya untuk teks loading "Yummy..." */
        .loading-text {
          position: relative;
          z-index: 2; /* Memastikan teks berada di atas elemen lain (misal titik) */
          animation: pulseText 2s infinite ease-in-out; /* Animasi berdenyut lembut */
          text-shadow: 2px 2px 10px rgba(240, 213, 157, 0.4); /* Bayangan teks emas lembut untuk kedalaman */
          white-space: nowrap; /* Mencegah teks memecah baris */
        }

        /* Keyframes untuk animasi denyut teks */
        @keyframes pulseText {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05); /* Sedikit membesar */
            opacity: 0.9; /* Sedikit transparan */
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Container untuk titik-titik animasi loading */
        .loading-dots {
          display: flex;
          margin-top: 30px; /* Jarak antara teks dan titik */
          z-index: 1;
        }

        /* Gaya untuk setiap titik loading */
        .loading-dots span {
          width: 20px; /* Ukuran titik */
          height: 20px;
          background-color: #DAA520; /* Warna emas untuk titik */
          border-radius: 50%; /* Membuat bentuk lingkaran */
          margin: 0 10px; /* Jarak antar titik */
          animation: bounceDot 1.4s infinite ease-in-out; /* Animasi memantul */
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.5); /* Bayangan emas bersinar untuk titik */
        }

        /* Penundaan animasi untuk setiap titik agar terlihat berurutan */
        .loading-dots span:nth-child(2) {
          animation-delay: 0.2s;    
        }

        .loading-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        /* Keyframes untuk animasi memantul titik */
        @keyframes bounceDot {
          0%, 100% {
            transform: translateY(0);
          }
          55% {
            transform: translateY(-25px); /* Memantul ke atas */
          }
        }

        /* Penyesuaian responsif untuk layar yang lebih kecil */
        @media (max-width: 768px) {
          .loading-container {
            font-size: 3em; /* Ukuran font lebih kecil di tablet */
          }
          .loading-dots {
            margin-top: 20px;
          }
          .loading-dots span {
            width: 15px;
            height: 15px;
            margin: 0 8px;
          }
        }
        @media (max-width: 480px) {
          .loading-container {
            font-size: 2em; /* Ukuran font lebih kecil lagi di mobile */
            letter-spacing: 0.1em; /* Mengurangi jarak antar huruf */
          }
          .loading-dots {
            margin-top: 15px;
          }
          .loading-dots span {
            width: 12px;
            height: 12px;
            margin: 0 6px;
          }
        }
        `}
      </style>
      <div className="loading-text">Yummy...</div> {/* Teks utama loading */}
      <div className="loading-dots"> {/* Titik-titik animasi loading */}
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
