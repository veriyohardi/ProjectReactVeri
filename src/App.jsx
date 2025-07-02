import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Reverting to original casing for directory names
import Loading from "./Component/Loading";
import MainLayout from "./Component/MainLayout";
import AuthLayout from "./Component/AuthLayout";
import Footer from "./Component/Footer"; // Assuming Footer is used somewhere not shown in Routes

// Lazily import all page components with original casing for paths
const Dashboard = React.lazy(() => import("./Component/Dashboard"));
const StorePage = React.lazy(() => import("./Pages/StorePage"));
const ContactPage = React.lazy(() => import("./Pages/ContactPage"));
const Kesan = React.lazy(() => import("./Pages/Kesan"));
const Products = React.lazy(() => import("./Pages/ProductCard"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
const CustomOrder = React.lazy(() => import("./Pages/CustomeOrder"));
const GoldLogo = React.lazy(() => import("./Component/GoldLogo"));

function App() {
  return (
    // Suspense now wraps the entire Routes to handle loading for all lazy-loaded components
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/kesan" element={<Kesan />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/custom-order" element={<CustomOrder />} />
        </Route>

        {/* Auth Layout Routes (commented out as in original) */}
        {/*
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        */}

        {/* Default Route (commented out as in original) */}
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
      {/* If Footer is a static component that doesn't need to wait for routes, it can stay outside Suspense */}
      {/* If Footer also depends on lazy-loaded data, consider if it should be inside MainLayout or also lazy-loaded */}
      {/* <Footer /> */}
    </Suspense>
  );
}

export default App;
