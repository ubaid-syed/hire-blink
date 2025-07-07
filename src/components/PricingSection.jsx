import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineUserGroup, HiOutlineCurrencyDollar, HiOutlineChartBar } from "react-icons/hi";
import { fadeIn, textVariant } from "../utils/motion";

const stats = [
  {
    label: "Years in Business",
    value: "7+",
    icon: <HiOutlineBriefcase className="text-purple-600 text-4xl md:text-5xl" />,
    color: "from-white to-gray-50"
  },
  {
    label: "Candidates Sourced",
    value: "50,000+",
    icon: <HiOutlineUserGroup className="text-blue-600 text-4xl md:text-5xl" />,
    color: "from-white to-gray-50"
  },
  {
    label: "Generated for clients",
    value: "$10M",
    icon: <HiOutlineCurrencyDollar className="text-green-600 text-4xl md:text-5xl" />,
    color: "from-white to-gray-50"
  },
  {
    label: "Core Industries",
    value: "6",
    icon: <HiOutlineChartBar className="text-pink-600 text-4xl md:text-5xl" />,
    color: "from-white to-gray-50"
  }
];

const statVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.2 + i * 0.15, type: "spring", stiffness: 300, damping: 24 }
  }),
  whileHover: { scale: 1.07, boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)" }
};

const PricingSection = () => {
  const [hovered, setHovered] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onViewportEnter={() => setHasAnimated(true)}
      className="relative py-24 px-4 bg-white"
    >
      {/* Decorative elements for white theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          variants={textVariant(0.3)}
          className="baloo-text text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent"
        >
          Stats That Speak
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={statVariants}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative group bg-gradient-to-br ${stat.color} p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-gray-200`}
              style={{
                boxShadow:
                  hovered === i
                    ? "0 8px 32px 0 rgba(0, 0, 0, 0.1)"
                    : "0 2px 8px 0 rgba(0, 0, 0, 0.05)"
              }}
            >
              <motion.span 
                className="mb-4 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {stat.icon}
              </motion.span>
              <motion.div
                className="baloo-text text-4xl md:text-5xl font-extrabold text-gray-800 mb-2"
                animate={{
                  scale: hovered === i ? 1.1 : 1,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <AnimatedNumber value={stat.value} shouldAnimate={hasAnimated} delay={i * 0.2} />
              </motion.div>
              <div className="text-gray-600 text-lg font-medium poppins-regular">{stat.label}</div>
              {/* Animated underline on hover */}
              <motion.div
                layoutId="stat-underline"
                className={`h-1 w-8 rounded-full mt-4 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 transition-all duration-300 ${
                  hovered === i ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Enhanced animated number component with better counter effects
function AnimatedNumber({ value, shouldAnimate = false, delay = 0 }) {
  const [display, setDisplay] = useState("0");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    const timer = setTimeout(() => {
      setIsAnimating(true);
      
      // Extract numeric value and formatting
      const cleanValue = value.toString().replace(/[^0-9]/g, "");
      const prefix = value.toString().startsWith("$") ? "$" : "";
      const suffix = value.toString().endsWith("+") ? "+" : "";
      const end = parseInt(cleanValue, 10);

      if (isNaN(end)) {
        setDisplay(value);
        return;
      }

      // Enhanced animation with easing
      const duration = 2000;
      const startTime = performance.now();
      let frame;

      function animate(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * end);
        
        setDisplay(prefix + current.toLocaleString() + suffix);
        
        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        } else {
          setDisplay(value);
          setIsAnimating(false);
        }
      }
      
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, shouldAnimate, delay]);

  return (
    <motion.span
      animate={isAnimating ? { 
        scale: [1, 1.1, 1],
        color: ["#374151", "#059669", "#374151"]
      } : {}}
      transition={{ 
        duration: 0.3,
        times: [0, 0.5, 1]
      }}
      className="inline-block"
    >
      {display}
    </motion.span>
  );
}

export default PricingSection;