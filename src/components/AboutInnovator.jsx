import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Recycle, Leaf, Utensils, RecycleIcon } from "lucide-react";
import { fetchData } from "../api/Api";
import loadingImage from "../assets/images/ffffff.png"

export default function AboutInnovator() {
  const [paragraph, setParagraph] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetchData("Sheet1!A1:B100")
      .then((responseData) => {
        const dataMap = {};
        responseData.forEach((row) => {
          if (row.length >= 2) {
            dataMap[row[0]] = row[1];
          }
        });

        setParagraph(dataMap["AboutInnovator paragraph"] || "No paragraph found.");
        setImageUrl(dataMap["AboutInnovator image"]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row-reverse gap-12 items-center px-6 pt-14 pb-6 sm:px-12 lg:px-20 xl:px-24"
      id="about-innovator"
    >
      {/* Image Section (Right Side) */}
      <motion.div
        className="flex-1 h-full flex items-center justify-center lg:mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {imageUrl && (
          <img
            key={imageUrl} // Ensures the image updates correctly
            src={imageUrl}
            alt="Innovator"
            className="rounded-lg shadow-xl w-full max-h-[500px] object-contain"
          />
        )}
      </motion.div>

      {/* Text Section (Left Side) */}
      <div className="flex-1 text-center md:text-left">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-orange-400"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Meet Our Innovator
        </motion.h2>

        <motion.h3
          className="text-xl sm:text-2xl text-green-500 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Bridget Kudoagbo
        </motion.h3>

        <motion.p
          className="text-gray-600 mb-8 text-lg leading-loose"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {paragraph}
        </motion.p>

        {/* Bullet Points with Staggered Animations */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
           { icon: Leaf, text: "Committed to Sustainable Mushroom Cultivation" },
           { icon: Utensils, text: "Innovating Nutritious & Convenient Mushroom Foods" },
           { icon: RecycleIcon, text: "Minimizing Waste Through Responsible Processing" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-wrap items-start gap-x-3 text-gray-700 text-lg"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <item.icon className="text-green-500 flex-shrink-0" size={24} />
              <span className="flex-1">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
