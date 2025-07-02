import React from 'react';

export default function GoldLogo({ width = '100', height = '100', className = '' }) {
  return (
    <svg
      id="goldLogoSvg" // ID yang unik untuk elemen SVG ini
      width={width}
      height={height}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Menerima kelas Tailwind dari props
    >
      <defs>
        {/* Definisi gradien emas */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFD700' }} /> {/* Emas terang */}
          <stop offset="50%" style={{ stopColor: '#DAA520' }} /> {/* Emas medium */}
          <stop offset="100%" style={{ stopColor: '#B8860B' }} /> {/* Emas gelap */}
        </linearGradient>

        {/* Definisi gradien emas kehitaman untuk latar belakang */}
        <linearGradient id="darkGoldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4A3B1F' }} /> {/* Cokelat sangat gelap / emas kehitaman */}
          <stop offset="50%" style={{ stopColor: '#3A2E1A' }} /> {/* Cokelat gelap */}
          <stop offset="100%" style={{ stopColor: '#2A2010' }} /> {/* Hampir hitam kecokelatan */}
        </linearGradient>

        {/* Filter untuk bayangan teks emas */}
        <filter id="goldShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#8B4513" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Lingkaran latar belakang untuk seluruh logo dengan gradien emas kehitaman baru */}
      <circle cx="200" cy="200" r="180" fill="url(#darkGoldGradient)" className="shadow-lg" /> {/* Menggunakan gradien baru */}

      {/* Teks "YUMMI" dengan efek emas */}
      <text x="200" y="150" className="yummi-text gold-gradient">YUMMI</text>

      {/* Teks "COMPANY" dengan efek emas */}
      <text x="200" y="200" className="company-text gold-gradient">COMPANY</text>

      {/* Kotak di sekitar "BAKERY" */}
      <rect x="100" y="225" width="200" height="50" rx="5" ry="5" fill="white" className="shadow-md" />

      {/* Teks "BAKERY" dengan efek emas */}
      <text x="200" y="250" className="bakery-text gold-gradient" fill="#2E8B57">BAKERY</text>

      {/* Gaya internal untuk SVG. Ini penting agar gaya SVG tetap terisolasi. */}
      <style>{`
        .yummi-text {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            font-size: 80px;
            text-anchor: middle;
            dominant-baseline: central;
        }
        .company-text {
            font-family: 'Open Sans', sans-serif;
            font-size: 20px;
            text-anchor: middle;
            dominant-baseline: central;
            letter-spacing: 3px;
        }
        .bakery-text {
            font-family: 'Open Sans', sans-serif;
            font-size: 30px;
            font-weight: 700;
            text-anchor: middle;
            dominant-baseline: central;
            letter-spacing: 5px;
        }
        /* Kelas untuk efek gradien emas */
        .gold-gradient {
            fill: url(#goldGradient);
            filter: url(#goldShadow);
        }
      `}</style>
    </svg>
  );
}
