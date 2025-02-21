import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Recycle, CheckCircle, Lightbulb } from "lucide-react";
import innovatorImage from "../assets/images/innovatorImage.jpeg";

export default function AboutInnovator() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const title = "Meet Our Innovator";
  const paragraph =
    "Meet Bridget, the visionary behind our sustainable ceramic products. With a passion for eco-friendly design, Bridget is committed to redefining the industry with innovative solutions. Meet Robert Tuu, the visionary behind our sustainable ceramic products. With a passion for eco-friendly design, Robert is committed to redefining the industry with innovative solutions. Meet Robert Tuu, the visionary behind our sustainable ceramic products. With a passion for eco-friendly design, Robert is committed to redefining the industry with innovative solutions. Meet Robert Tuu, the visionary behind our sustainable ceramic products. With a passion for eco-friendly design, Robert is committed to redefining the industry with innovative solutions. Meet.";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row-reverse gap-12 items-center px-6 py-12 sm:px-12 lg:px-20 xl:px-24"  id="about-innovator"
    >
      {/* Image Section (Now on the Right Side) */}
      <div className="flex-1 h-full flex items-center justify-center">
        <img
          src= {innovatorImage}
          alt="Innovator"
          className="rounded-lg shadow-xl w-full max-h-[500px] object-contain"
        />
      </div>

      {/* Text Section (Now on the Left Side) */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-orange-400">
          {title}
        </h2>
        <h3 className="text-xl sm:text-2xl text-green-500 mb-4">Bridget kudoagbo</h3>
        <p className="text-gray-600 mb-6 text-lg sm:text-base leading-relaxed">
          {paragraph}
        </p>
        <div className="space-y-4">
  <div className="flex flex-wrap items-start gap-x-3 text-gray-700">
    <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
    <span className="flex-1">Committed to Eco-Friendly Manufacturing</span>
  </div>
  <div className="flex flex-wrap items-start gap-x-3 text-gray-700">
    <Lightbulb className="text-green-500 flex-shrink-0" size={24} />
    <span className="flex-1">Redefining Ceramic Design with Innovation</span>
  </div>
  <div className="flex flex-wrap items-start gap-x-3 text-gray-700">
    <Recycle className="text-green-500 flex-shrink-0" size={24} />
    <span className="flex-1">Striving for Zero Waste in Every Product</span>
  </div>
</div>
      </div>
    </motion.div>
  );
}
