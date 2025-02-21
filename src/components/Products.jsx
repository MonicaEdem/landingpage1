import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { MoveRight, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import sliderImage1 from "../assets/images/sliderImage1.jpeg";
import sliderImage2 from "../assets/images/sliderImage2.jpeg";
import sliderImage3 from "../assets/images/sliderImage3.jpeg";

const products = [
  {
    id: 1,
    name: "Mushroom home kit",
    description: "A delicious and hearty mushroom soup made with organic mushrooms and herbs.",
    image: sliderImage1,
  },
  {
    id: 2,
    name: "⁠Mushbrown (500g)",
    description: "A savory and chewy mushroom jerky, packed with umami flavors and nutrients.",
    image: sliderImage2,
  },
  {
    id: 3,
    name: "⁠Fresh mushrooms",
    description: "Finely ground mushroom powder, perfect for adding to soups, smoothies, and dishes.",
    image: sliderImage3,
  },
  {
    id: 4,
    name: "Mushroom Powder",
    description: "Nutrient-rich mushroom powder that boosts immunity and enhances flavor.",
    image: sliderImage1,
  },
];

const Products = () => {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const shopLink = "https://example.com/shop";

  const handleNavigationState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="relative px-8 py-14 lg:px-24 bg-gradient-to-b from-green-50 to-orange-50"
      id="products"
    >
      <motion.h2
        className="text-3xl font-bold text-green-700 mb-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={animationVariants}
      >
        Explore Our Products
      </motion.h2>
      
      <motion.p
        className="text-gray-600 mx-auto mb-12 text-center text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        Discover our carefully crafted selection of organic mushroom products, designed to enhance your wellness journey. From fresh mushrooms to nutritious powders and tasty snacks, we have something for everyone.
      </motion.p>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10 relative"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => handleNavigationState(swiper)}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex flex-col items-center">
              <motion.div
                className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={animationVariants}
              >
                <img src={product.image} alt={product.name} className="w-full object-cover h-64" />
                <div className="p-4">
                  <h3 className="text-green-600 text-lg font-semibold">{product.name}</h3>
                  <p className="text-base text-gray-700">{product.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Previous Button */}
        <motion.button
          className={`custom-prev absolute top-1/2 left-4 z-10 transform -translate-y-1/2 p-2 rounded-full transition-all ${
            isBeginning
              ? "bg-green-500/50 cursor-default"
              : "bg-green-500/80 hover:bg-green-700 opacity-100 cursor-pointer"
          }`}
          aria-label="Previous Slide"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </motion.button>

        {/* Next Button */}
        <motion.button
          className={`custom-next absolute top-1/2 right-4 z-10 transform -translate-y-1/2 p-2 rounded-full transition-all ${
            isEnd
              ? "bg-green-500/50 cursor-default"
              : "bg-green-500/80 hover:bg-green-700 opacity-100 cursor-pointer"
          }`}
          aria-label="Next Slide"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      {/* Call to Action Button */}
      <motion.div
        className="flex justify-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={animationVariants}
      >
        <motion.a
          href={shopLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-orange-400 transition-all duration-200 hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingBag className="w-5 h-5" />
          Shop Products
          <MoveRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Products;
