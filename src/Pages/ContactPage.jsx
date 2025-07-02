import React from "react";
import { Mail, Phone, MapPin, Instagram, Globe, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#fff0f0] font-sans min-h-screen w-full">
      <div className="w-full bg-[#f8d1d1] py-16 px-6 md:px-24">
        <h1 className="text-5xl font-extrabold text-center text-[#9e3d3d] mb-4 uppercase tracking-wide">Contact Us</h1>
        <p className="text-center text-lg text-[#6b4b4b] max-w-2xl mx-auto mb-12">
          We’re here to help. Reach out to us anytime and our team will get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
            <Phone className="text-[#b03b3b] w-6 h-6" />
            <div>
              <h4 className="font-bold text-lg">Call Center</h4>
              <p className="text-sm text-gray-700">1500581</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
            <MessageSquare className="text-[#b03b3b] w-6 h-6" />
            <div>
              <h4 className="font-bold text-lg">WhatsApp</h4>
              <p className="text-sm text-gray-700">+62 812 1314 1500</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
            <Instagram className="text-[#b03b3b] w-6 h-6" />
            <div>
              <h4 className="font-bold text-lg">Instagram</h4>
              <p className="text-sm text-gray-700">@harvestcakes</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
            <Globe className="text-[#b03b3b] w-6 h-6" />
            <div>
              <h4 className="font-bold text-lg">Website</h4>
              <p className="text-sm text-gray-700">theharvestcakes.com</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
            <Mail className="text-[#b03b3b] w-6 h-6" />
            <div>
              <h4 className="font-bold text-lg">Email</h4>
              <p className="text-sm text-gray-700">marketing@harvestcakes.com</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
            <MapPin className="text-[#b03b3b] w-6 h-6" />
            <div>
              <h4 className="font-bold text-lg">Office</h4>
              <p className="text-sm text-gray-700">PT Mount Scopus Indonesia, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-inner p-8">
          <h2 className="text-2xl font-bold text-[#9e3d3d] mb-3">Consumer Complaint Service</h2>
          <p className="text-gray-700 text-sm">
            Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga, Kementerian Perdagangan Republik Indonesia
          </p>
          <p className="mt-2 font-semibold text-base text-[#333]">0853 1111 1010 (WhatsApp)</p>
        </div>
      </div>
    </div>
  );
}