import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { HiSparkles, HiCurrencyDollar, HiCheckBadge } from "react-icons/hi2";

const features = [
  {
    icon: <HiSparkles className="text-purple-600 text-4xl drop-shadow-lg" />,
    title: "AI Meets Human Expertise",
    description:
      "Our recruiters are empowered by a handpicked suite of AI tools, so they focus on what AI can't do—communicate, connect, and convert top talent.",
    bg: "from-purple-100 to-blue-100"
  },
  {
    icon: <HiCurrencyDollar className="text-blue-600 text-4xl drop-shadow-lg" />,
    title: "You Don't Pay for Tools",
    description:
      "We bear the cost of AI recruiting software. You get a fully loaded recruiting tech stack without the extra expense.",
    bg: "from-blue-100 to-cyan-100"
  },
  {
    icon: <HiCheckBadge className="text-green-600 text-4xl drop-shadow-lg" />,
    title: "We Close the Roles",
    description:
      "We're not just a sourcing partner. We take responsibility for end-to-end fulfillment, ensuring your roles are filled with quality candidates on time.",
    bg: "from-green-100 to-emerald-100"
  }
];

const FeaturesSection = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative max-w-7xl mx-auto px-4 py-24"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <motion.div
        variants={fadeIn('up', 0.3)}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          variants={fadeIn('up', 0.4)}
          className="baloo-text inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-semibold px-5 py-2 rounded-full tracking-wider mb-5 shadow"
        >
          What Makes Us Different?
        </motion.div>
        <motion.h2
          variants={textVariant(0.2)}
          className="baloo-text text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-blue-700 to-emerald-600 bg-clip-text text-[#C7F380]"
        >
          Modern Recruiting, Redefined
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.5)}
          className="poppins-regular text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          We blend cutting-edge AI with real human expertise, so you get a recruiting partner who delivers results—without the hidden costs or compromises.
        </motion.p>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 0.6)}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            variants={fadeIn('up', 0.2 * (idx + 1))}
            whileHover={{ y: -8, scale: 1.03, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.10)" }}
            className={`group bg-gradient-to-br ${feature.bg} rounded-3xl shadow-xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]`}
          >
            <motion.div
              variants={fadeIn('down', 0.3 * (idx + 1))}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              {feature.icon}
            </motion.div>
            <motion.h3
              variants={textVariant(0.3)}
              className="baloo-text text-2xl font-semibold mb-3 text-gray-900 "
            >
              {feature.title}
            </motion.h3>
            <motion.p
              variants={fadeIn('up', 0.5 * (idx + 1))}
              className="text-gray-600 text-base poppins-regular"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={fadeIn('up', 0.8)}
        className="text-center mt-16 relative z-10"
      >
        {/* <motion.button
          variants={fadeIn('up', 0.9)}
          whileHover={{
            scale: 1.07,
            background:
              "linear-gradient(90deg, #6366f1 0%, #22d3ee 100%)",
            boxShadow: "0 8px 32px 0 rgba(99,102,241,0.18)",
          }}
          whileTap={{ scale: 0.96 }}
          className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:from-blue-700 hover:to-emerald-600 relative"
        >
          Discover the Blink Difference
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/20 blur-xl top-0 left-0"></div>
        </motion.button> */}
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection