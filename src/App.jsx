import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "./Component/Loading";
import MainLayout from "./Component/MainLayout";
import AuthLayout from "./Component/AuthLayout";

// Lazily import all page components
const Dashboard = React.lazy(() => import("./Component/Dashboard"));
const StorePage = React.lazy(() => import("./Pages/StorePage"));
const ContactPage = React.lazy(() => import("./Pages/ContactPage"));
const Kesan = React.lazy(() => import("./Pages/Kesan"));
const Products = React.lazy(() => import("./Pages/ProductCard"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
const CustomOrder = React.lazy(() => import("./Pages/CustomeOrder"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/kesan" element={<Kesan />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUs />} />
          {/* Perbaikan: Tambah param id */}
          <Route path="/custom-order/:id" element={<CustomOrder />} />
        </Route>

        {/* Auth Layout Routes (bisa diaktifkan kalau pakai login/register) */}
        {/* 
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        */}

        {/* Default Route bisa diatur di sini kalau mau */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
