import React from "react";

const stores = [
  {
    name: "The Harvest - Senopati",
    address: "Jl. Senopati No. 27, Jakarta Selatan",
    image: "https://www.harvestcakes.com/stamps-media/thumbnails/stores/2022/6/13/shnc2sr3cxs7itm4t64kad_size_600x400.jpg"
  },
  {
    name: "The Harvest - Kelapa Gading",
    address: "Jl. Boulevard Raya Blok QA 1, Jakarta Utara",
    image: "https://www.harvestcakes.com/stamps-media/thumbnails/stores/2023/7/17/wyrx45tfppg8lnsvuamym9_size_600x400.jpg"
  },
  {
    name: "The Harvest - Bandung",
    address: "Jl. Buah Batu No. 43, Bandung",
    image: "https://www.harvestcakes.com/stamps-media/thumbnails/stores/2024/10/4/n6o4jidgulft5cmjbaycvo_size_600x400.webp"
  },
  {
    name: "The Harvest Pekanbaru",
    address: "JL. Riau No.1 Ruko A,B & C, Padang Terubuk, Kec. Senapelan, Kota Pekanbaru, Riau 28153",
    image: "https://www.harvestcakes.com/stamps-media/thumbnails/stores/2022/6/13/4gbgxewr38ayolwqyaa7l3_size_600x400.jpg"
  }
];

export default function StorePage() {
  return (
    <div className="bg-white font-sans min-h-screen px-4 md:px-20 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Find Our Stores</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stores.map((store, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
            <img
              src={store.image}
              alt={store.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{store.name}</h3>
              <p className="text-sm text-gray-600">{store.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}