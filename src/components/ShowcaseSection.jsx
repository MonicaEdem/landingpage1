import React, { useState } from "react";
import { X } from "lucide-react"; // Close icon
import clientImg from "../assets/images/clients.jpeg";
import infoImg from "../assets/images/info.jpeg";
import Add from "../assets/images/image1.jpeg";
import mushrooms from "../assets/images/sliderImage3.jpeg";

const images = [
  { src: clientImg, caption: "Happy client receiving their order." },
  { src: infoImg, caption: "Checkout the benefits of eating oyster mushrooms" },
  { src: Add, caption: "Our 500g Mushbrown" },
  { src: mushrooms, caption: "Fresh mushrooms from our farm." },
];

const ClientShowcase = () => {
  const [enlargedImg, setEnlargedImg] = useState(null);
  const [caption, setCaption] = useState("");

  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto px-6 lg:px-20">

        {/* Image Grid - Responsive Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.src}
                alt={`Showcase ${index + 1}`}
                className="w-full h-64 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => {
                  setEnlargedImg(item.src);
                  setCaption(item.caption);
                }}
              />
              <p className="mt-2 text-lg text-gray-700">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enlarged Image View */}
      {enlargedImg && (
        <div
          className="fixed inset-0 flex flex-col justify-center items-center bg-black/50 backdrop-blur-sm z-50 px-4"
          onClick={() => setEnlargedImg(null)} // Closes when clicking outside
        >
          {/* Enlarged Image */}
          <img
            src={enlargedImg}
            alt="Enlarged view"
            className="max-w-[90%] max-h-[80%] object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
          {/* Image Caption */}
          <p className="mt-4 text-white text-center text-lg">{caption}</p>

          {/* Close Button */}
          <button
            className="absolute top-5 right-5 bg-black/50 text-white p-2 rounded-full hover:bg-red-500 transition"
            onClick={() => setEnlargedImg(null)}
          >
            <X size={30} />
          </button>
        </div>
      )}
    </section>
  );
};

export default ClientShowcase;
