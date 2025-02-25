import React, { useEffect, useState } from "react";
import { X } from "lucide-react"; // Close icon
import { fetchData } from "../api/Api";
import loadingImage from "../assets/images/ffffff.png"; // Placeholder while loading

const ClientShowcase = () => {
  const [enlargedImg, setEnlargedImg] = useState(null);
  const [caption, setCaption] = useState("");
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetchData("Sheet1!A1:B100")
      .then((responseData) => {
        const dataMap = {};
        responseData.forEach(row => {
          if (row.length >= 2) {
            dataMap[row[0]] = row[1];
          }
        });

        const dynamicPictures = [];
        for (let i = 1; i <= 4; i++) {
          if (dataMap[`PicturesSection image${i}`]) {
            dynamicPictures.push({
              src: dataMap[`PicturesSection image${i}`],
              caption: dataMap[`PicturesSection text${i}`] || "",
            });
          }
        }

        setPictures(dynamicPictures);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto px-6 lg:px-20">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 mt-4">Loading images...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pictures.map((item, index) => (
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
        )}
      </div>

      {enlargedImg && (
        <div
          className="fixed inset-0 flex flex-col justify-center items-center bg-black/50 backdrop-blur-sm z-50 px-4"
          onClick={() => setEnlargedImg(null)}
        >
          <img
            src={enlargedImg}
            alt="Enlarged view"
            className="max-w-[90%] max-h-[80%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 text-white text-center text-lg">{caption}</p>
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
