import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { HiOutlineScale, HiOutlineLightBulb, HiOutlineShieldCheck } from "react-icons/hi";

const industries = [
  {
    key: "legal",
    icon: <HiOutlineScale className="text-purple-600 text-4xl md:text-5xl mb-2 md:mb-4" />,
    title: "Legal Staffing",
    description:
      "From boutique firms to AM 100 giants, we bring attorneys and legal recruiters to your search. Powered by legal insight, driven by results.",
    highlight: "Legal Staffing",
    color: "from-purple-100 to-purple-50",
  },
  {
    key: "vc-tech",
    icon: <HiOutlineLightBulb className="text-blue-600 text-4xl md:text-5xl mb-2 md:mb-4" />,
    title: "VC Tech & Early Hires",
    description:
      "From pre-seed startups to IPO-ready companies, we help you find graduates from Top Schools with Founder’s DNA in AI, SaaS and VC-Backed Tech.",
    highlight: "VC Tech & Early Hires",
    color: "from-blue-100 to-blue-50",
  },
  {
    key: "defense",
    icon: <HiOutlineShieldCheck className="text-green-600 text-4xl md:text-5xl mb-2 md:mb-4" />,
    title: "Defense & IT Contracting",
    description:
      "We understand clearance levels (Public Trust to Full Scope). We deliver cleared candidates fast—with signed Letters of Commitment for RFQs/RFPs.",
    highlight: "Defense & IT Contracting",
    color: "from-green-100 to-green-50",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  exit: { opacity: 0, y: -40, scale: 0.96, transition: { duration: 0.2 } },
};

const ScheduleSection = () => {
  const [active, setActive] = useState(industries[0].key);

  const activeIndustry = industries.find((ind) => ind.key === active);

  return (
    <section id="services">
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 py-8 md:py-12"
      >
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="text-center mb-8"
        >
          <motion.span
            variants={fadeIn("up", 0.4)}
            className="baloo-text inline-block bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 text-purple-700 text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-4"
          >
            INDUSTRIES WE SERVE
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="baloo-text text-3xl md:text-4xl font-bold text-[#ebffc4] mb-2"
          >
            Expertise Across Critical Sectors
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto poppins-regular"
          >
            We deliver specialized recruiting solutions for the industries that move the world forward.
          </motion.p>
        </motion.div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-12">
          {/* Interactive Tabs */}
          <div className="flex flex-row md:flex-col gap-3 md:gap-6 w-full md:w-1/3 justify-center md:justify-start mb-6 md:mb-0">
            {industries.map((industry) => (
              <button
                key={industry.key}
                onClick={() => setActive(industry.key)}
                className={`
                  flex flex-col items-center justify-center
                  w-full md:w-auto
                  px-4 py-3 md:px-5 md:py-4
                  rounded-2xl
                  font-semibold
                  transition-all duration-200
                  baloo-text
                  text-base md:text-lg
                  whitespace-normal
                  text-center
                  ${
                    active === industry.key
                      ? "bg-gradient-to-r " +
                        industry.color +
                        " text-gray-900 shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }
                  focus:outline-none focus:ring-2 focus:ring-purple-300
                `}
                aria-current={active === industry.key ? "true" : "false"}
                style={{
                  minWidth: 0,
                  wordBreak: "break-word",
                  fontWeight: 600,
                }}
              >
                <span className="text-base md:text-lg leading-tight">
                  {industry.title}
                </span>
                {active === industry.key && (
                  <motion.span
                    layoutId="active-dot"
                    className="mt-2 w-2 h-2 rounded-full bg-[#0D263A]"
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  />
                )}
              </button>
            ))}
          </div>
          {/* Animated Card */}
          <div className="w-full md:w-2/3 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.key}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`relative bg-gradient-to-br ${activeIndustry.color} rounded-3xl shadow-xl p-7 md:p-14 flex flex-col items-center text-center min-h-[320px] w-full max-w-xl`}
              >
                <span className="absolute top-4 right-4 text-2xl select-none pointer-events-none animate-pulse">🔹</span>
                {activeIndustry.icon}
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3 baloo-text">
                  {activeIndustry.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg poppins-regular">
                  {activeIndustry.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default ScheduleSection;