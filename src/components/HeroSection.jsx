import React from "react";
import { motion } from "framer-motion";
import backgroundImage1 from "../assets/images/backgroundImage1.png";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-orange-50 to-green-50" id="home">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${backgroundImage1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-24 relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nature's Finest <span className="text-orange-400">Mushrooms</span>{" "}
              for Your <span className="text-green-500">Wellness</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our carefully cultivated organic mushrooms and
              concentrated powder supplements, crafted to enhance your daily
              wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-400 hover:to-orange-500 transition-all shadow-lg hover:shadow-xl">
                Shop Collection
              </button>
              <button className="bg-gradient-to-r from-green-50 to-green-100 px-8 py-4 rounded-xl font-semibold text-green-700 hover:from-green-100 hover:to-green-200 transition-all border border-green-200">
                Learn More
              </button>
            </div>
          </div>
          <motion.div
            className="relative z-10 flex justify-center"
            initial={{ opacity: 1, y: 0 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <img
              src={backgroundImage1}
              alt="Fresh organic mushrooms"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
