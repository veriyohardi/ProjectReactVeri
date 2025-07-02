import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import Sidebar from './Sidebar'; // Kalau mau pakai sidebar, bisa di-uncomment

export default function MainLayout() {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <main className="pt-24"> {/* Tambah padding top supaya konten tidak ketutupan header */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
