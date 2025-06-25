import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    text: "“Hire Blink helped us fill a cleared position in under 72 hours. Their team delivered when others didn’t.”",
    author: "Staffing Lead",
    company: "DOD Contractor",
    color: "from-blue-100 via-blue-50 to-green-100",
    icon: "🇺🇸",
  },
  {
    id: 2,
    text: "“Their AI process is slick, but it’s the human recruiters that really stand out.”",
    author: "Partner",
    company: "AM Law Firm",
    color: "from-green-100 via-blue-50 to-purple-100",
    icon: "⚖️",
  },
];

const bgBlobs = [
  {
    className:
      "absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200 via-green-200 to-purple-100 rounded-full blur-3xl pointer-events-none z-0",
    style: { opacity: 0.18 },
    delay: 0.2,
  },
  {
    className:
      "absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200 via-pink-100 to-purple-100 rounded-full blur-3xl pointer-events-none z-0",
    style: { opacity: 0.12 },
    delay: 0.4,
  },
];

const quoteVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  exit: { opacity: 0, y: -40, scale: 0.95, transition: { duration: 0.3 } },
};

const TestimonialsSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 max-w-4xl mx-auto flex flex-col items-center justify-center"
    >
      {/* Animated Blobs */}
      {bgBlobs.map((blob, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: blob.style.opacity, scale: 1 }}
          transition={{ duration: 1.2, delay: blob.delay }}
          className={blob.className}
        />
      ))}

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 w-full"
      >
        <motion.span
          variants={fadeIn("up", 0.25)}
          className="baloo-text inline-block bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 text-blue-700 text-xs font-semibold px-5 py-2 rounded-full tracking-wider mb-4 shadow"
        >
          CLIENT TESTIMONIALS
        </motion.span>
        <motion.h2
          variants={textVariant(0.3)}
          className=" baloo-text text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 via-green-600 to-purple-600 bg-clip-text text-[#C7F380]"
        >
          What Clients Say
        </motion.h2>

        <div className="relative w-full flex flex-col items-center">
          <Swiper
            modules={[Navigation, Autoplay, EffectCreative]}
            effect="creative"
            creativeEffect={{
              prev: { shadow: true, translate: [0, 0, -400] },
              next: { translate: ["100%", 0, 0] },
            }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={testimonial.id}>
                <AnimatePresence mode="wait">
                  {activeIndex === idx && (
                    <motion.div
                      key={testimonial.id}
                      variants={quoteVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`relative bg-gradient-to-br ${testimonial.color} shadow-2xl rounded-3xl px-8 py-12 md:px-16 md:py-16 flex flex-col items-center justify-center`}
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                        className="mb-6"
                      >
                        <span className="text-5xl md:text-6xl">{testimonial.icon}</span>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="poppins-regular text-2xl md:text-3xl font-medium text-blue-900 text-center mb-8 leading-relaxed"
                      >
                        {testimonial.text}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center"
                      >
                        <span className="font-bold text-blue-700 text-lg baloo-text">{testimonial.author}</span>
                        <span className="text-blue-500 text-sm poppins-regular">{testimonial.company}</span>
                      </motion.div>
                      {/* Animated underline */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="origin-left w-24 h-1 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 rounded-full mt-6"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            className="flex justify-center gap-4 mt-10"
          >
            <motion.button
              variants={fadeIn("right", 0.6)}
              whileHover={{ scale: 1.12, backgroundColor: "#2563eb", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="swiper-button-prev-custom w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center bg-white hover:bg-blue-500 hover:text-white shadow transition-all"
              aria-label="Previous testimonial"
            >
              <BsChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              variants={fadeIn("left", 0.6)}
              whileHover={{ scale: 1.12, backgroundColor: "#2563eb", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="swiper-button-next-custom w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center bg-white hover:bg-blue-500 hover:text-white shadow transition-all"
              aria-label="Next testimonial"
            >
              <BsChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>

          {/* Dots/Pagination */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  swiperRef.current?.slideToLoop(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "bg-blue-600 scale-125 shadow"
                    : "bg-blue-200 hover:bg-blue-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
