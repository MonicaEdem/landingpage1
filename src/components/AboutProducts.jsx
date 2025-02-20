import React from "react";
import { motion } from "framer-motion";
import { Leaf, Dumbbell, Sprout } from "lucide-react";

const AboutProducts = () => {
  return (
    <div className="px-8 py-16 lg:px-24 bg-white" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-orange-400 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Our Products
        </motion.h2>
        <p className="text-gray-700 mb-8">
          We take pride in offering premium, organic mushroom-based products that
          are crafted with care. Our selection includes nutrient-rich mushroom powder,
          delicious mushroom soup, and flavorful mushroom jerky.
        </p>
      </div>

      {/* Product Features */}
      <div className="grid md:grid-cols-3 gap-8">
        {productFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-lg shadow-md text-center overflow-hidden 
                       bg-gradient-to-tr from-orange-50 to-green-50 border border-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Background Image with Low Opacity */}
            <img
              src="https://cdn.pixabay.com/photo/2021/12/27/09/42/mushroom-6896722_1280.jpg"
              alt="Background"
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
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const productFeatures = [
  {
    icon: <Leaf size={40} className="text-green-500" />,
    title: "Organic & Natural",
    description:
      "Our mushrooms are organically grown, free from chemicals and artificial additives.",
  },
  {
    icon: <Dumbbell size={40} className="text-orange-400" />,
    title: "Health Benefits",
    description:
      "Packed with essential nutrients, our products support immunity and overall well-being.",
  },
  {
    icon: <Sprout size={40} className="text-green-500" />,
    title: "Sustainable & Eco-Friendly",
    description:
      "We prioritize sustainable sourcing and environmentally friendly packaging.",
  },
];

export default AboutProducts;
