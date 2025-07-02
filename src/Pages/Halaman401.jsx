import React from "react";
import { useNavigate } from "react-router-dom";

const Halaman401 = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#0d47a1] relative overflow-hidden">
      {/* Layer background bulat */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${200 + i * 150}px`,
            height: `${200 + i * 150}px`,
            backgroundColor: "#0d47a1",
            zIndex: 0,
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        />
      ))}

      {/* Konten 404 */}
      <div className="text-center text-white z-10 px-4">
        <h1 className="text-[160px] md:text-[200px] font-extrabold leading-none tracking-tight drop-shadow-lg">
          401
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-2">
          Oops! This Page is Not Found.
        </p>
        <p className="mb-6 text-sm text-blue-100">
          The requested page does not exist
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-white text-blue-600 font-medium rounded hover:bg-blue-100 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Halaman401;
