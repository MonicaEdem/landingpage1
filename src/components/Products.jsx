import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { MoveRight, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import loadingImage from "../assets/images/ffffff.png";
import { fetchData } from "../api/Api";

const Products = () => {
  const [paragraph, setParagraph] = useState("");
  const [products, setProducts] = useState([]);
  const [shopLink, setShopLink] = useState("");
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    fetchData("Sheet1!A1:B100")
      .then((responseData) => {
        const dataMap = {};
        responseData.forEach(row => {
          if (row.length >= 2) {
            dataMap[row[0]] = row[1];
          }
        });

        setParagraph(dataMap["ProductsDisplay paragraph"] || "No paragraph found.");
        setShopLink(dataMap["Shop Button"] || "#");

        const dynamicProducts = [];
        for (let i = 1; i <= 4; i++) {
          dynamicProducts.push({
            id: i,
            name: dataMap[`ProductsDisplay title${i}`] || `Product ${i}`,
            description: dataMap[`ProductsDisplay paragraph${i}`] || "No description available.",
            image: dataMap[`ProductsDisplay image${i}`] || loadingImage,
          });
        }

        setProducts(dynamicProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className="relative px-8 py-14 lg:px-24 bg-gradient-to-b from-green-50 to-orange-50"
      id="products"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-bold text-green-700 mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Our Products
      </motion.h2>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 mt-4">Loading products...</p>
        </div>
      ) : (
        <AnimatePresence>
          <motion.p
            className="text-gray-600 mx-auto mb-12 text-center text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {paragraph}
          </motion.p>

          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              className="pb-10 relative"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="flex flex-col items-center">
                  <motion.div
                    key={product.id} // Forces re-rendering
                    className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
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
                isBeginning ? "bg-green-500/50 cursor-default" : "bg-green-500/80 hover:bg-green-700 cursor-pointer"
              }`}
              aria-label="Previous Slide"
              onClick={() => swiperRef.current?.slidePrev()}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              className={`custom-next absolute top-1/2 right-4 z-10 transform -translate-y-1/2 p-2 rounded-full transition-all ${
                isEnd ? "bg-green-500/50 cursor-default" : "bg-green-500/80 hover:bg-green-700 cursor-pointer"
              }`}
              aria-label="Next Slide"
              onClick={() => swiperRef.current?.slideNext()}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>

          {/* Call to Action Button */}
          <motion.div className="flex justify-center mt-10" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default Products;
