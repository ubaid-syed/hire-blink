import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const bgBlobVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 0.15, scale: 1, transition: { duration: 1.2, delay: 0.2, ease: "easeOut" } }
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05, 
    transition: { type: "spring", stiffness: 400, damping: 17 } 
  },
  tap: { scale: 0.95 }
};

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="relative max-w-5xl mx-auto px-4 py-20 md:py-28">
      {/* Animated Blobs */}
      <motion.div
        variants={bgBlobVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-lime-300 via-blue-300 to-purple-300 rounded-full blur-3xl pointer-events-none z-0"
      />
      <motion.div
        variants={bgBlobVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-300 via-pink-300 to-purple-300 rounded-full blur-3xl pointer-events-none z-0"
      />

      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
        viewport={{ once: true }}
        className="relative z-10 bg-gradient-to-br from-[#1a2e40] to-[#0d263a] border border-blue-900 shadow-2xl rounded-3xl overflow-hidden px-6 md:px-16 py-16 md:py-24 flex flex-col items-center"
      >
        <motion.div
          variants={fadeIn('up', 0.3)}
          className="w-full flex flex-col items-center text-center gap-6"
        >
          <motion.span
            variants={fadeIn('up', 0.35)}
            className=" baloo-text inline-block bg-blue-950 text-[#C7F380] text-xs font-semibold px-5 py-2 rounded-full tracking-wider mb-2 border border-blue-800"
          >
            LET'S TALK
          </motion.span>
          <motion.h2
            variants={textVariant(0.4)}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 poppins-regular"
          >
            Need placements that are fast, affordable, and high-quality?
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.5)}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto poppins-regular"
          >
            Book a strategy call now. <span className="text-white font-semibold poppins-regular">Let's show you how you can outpace your competitors.</span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.6)}
          className="mt-10 flex flex-col items-center w-full"
        >
          <motion.a
            href="https://calendly.com/imazakif9" // TODO: Replace with actual booking link
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="group bg-[#C7F380] hover:bg-lime-300 text-[#0D263A] font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-lime-500/40 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-lime-500/50 transition-all duration-300"
            aria-label="Book a Free Strategy Call"
          >
            <span className="relative z-10 baloo-text">
              Book a Free Strategy Call
            </span>
            <HiArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default NewsletterSection
