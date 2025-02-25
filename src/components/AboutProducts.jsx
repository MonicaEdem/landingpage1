import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Dumbbell, Sprout } from "lucide-react";
import mushroomImage from "../assets/images/mushroom.jpg";
import { fetchData } from "../api/Api";

const AboutProducts = () => {

  const [paragraph, setparagraph] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

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
        setparagraph(dataMap["AboutProduct paragraph"] || "No paragraph found.");
        setText1(dataMap["AboutProduct Text1"]);
        setText2(dataMap["AboutProduct Text2"]);
        setText3(dataMap["AboutProduct Text3"]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const productFeatures = [
    {
      icon: <Leaf size={40} className="text-green-500" />,
      title: "Organic & Natural",
      description: text1,
    },
    {
      icon: <Dumbbell size={40} className="text-orange-400" />,
      title: "Health Benefits",
      description: text2,
    },
    {
      icon: <Sprout size={40} className="text-green-500" />,
      title: "Sustainable & Eco-Friendly",
      description: text3,
    },
  ];

  return (
    <div className="px-8 py-14 lg:px-24 bg-white" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-orange-400 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Our Products
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-8 text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
         {paragraph}
        </motion.p>
      </div>

      {/* Product Features */}
      <div className="grid md:grid-cols-3 gap-8">
        {productFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-lg shadow-md text-center overflow-hidden 
                       bg-gradient-to-tr from-orange-50 to-green-50 border border-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={mushroomImage}
              alt="backgroundImage"
              className="absolute bottom-0 left-0 w-full h-1/2 opacity-10 object-cover"
            />

            {/* Icon & Text Content */}
            <div className="relative z-10">
              <div className="flex justify-center text-orange-400 text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-500">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-lg">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutProducts;
