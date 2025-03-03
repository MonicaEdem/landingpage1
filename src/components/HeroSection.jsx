import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import backgroundImage1 from "../assets/images/backgroundImage1.png";
import { fetchData } from "../api/Api";
import heroImage from "../assets/images/backgroundImage1.png"

const HeroSection = () => {
  const [paragraph, setparagraph] = useState("");

  useEffect(() => {
    fetchData("Sheet1!A1:B100")
      .then((responseData) => {
        // Convert data array into an object for easier access
        const dataMap = {};
        responseData.forEach(row => {
          if (row.length >= 2) {
            dataMap[row[0]] = row[1]; // Map key-value pairs
          }
        });
  
        setparagraph(dataMap["Paragraph"] || "At Helicimush, we grow fresh mushrooms and transform them into convenient products. Enjoy the natural goodness with ease!");
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  

  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-br from-green-50 via-orange-50 to-green-50"
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${backgroundImage1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-40 sm:pt-48 pb-24 relative">
        {/* Decorative Blurred Circles */}
        <div className="absolute top-0 right-0 -translate-y-1/2 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30"></div>

        {/* Balanced Layout for Tablets & Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr,1fr] lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Section */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Nature's Finest <span className="text-orange-400">Mushrooms</span>{" "}
              for Your <span className="text-green-500">Wellness</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            {paragraph}
            </p>

            {/* Buttons Section */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                href="#products"
                className="w-full sm:w-auto text-center"
                whileTap={{ scale: 0.9 }}
              >
                <button className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-400 hover:to-orange-500 transition-all shadow-lg hover:shadow-xl active:scale-95 transition-transform">
                  Our Products
                </button>
              </motion.a>
              <motion.a
                href="#about"
                className="w-full sm:w-auto text-center"
                whileTap={{ scale: 0.9 }}
              >
                <button className="w-full sm:w-auto bg-gradient-to-r from-green-50 to-green-100 px-8 py-4 rounded-xl font-semibold text-green-700 hover:from-green-100 hover:to-green-200 transition-all border border-green-200 active:scale-95 transition-transform">
                  Learn More
                </button>
              </motion.a>
            </div>
          </motion.div>

          {/* Image Section (Floating Animation) */}
          <motion.div
            className="relative z-10 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.img
              src={heroImage}
              alt="Fresh organic mushrooms"
              className="w-[90%] md:w-full max-h-[500px] md:max-h-[550px] object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
