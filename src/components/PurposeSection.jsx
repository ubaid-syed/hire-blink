import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { HiLightningBolt, HiUserGroup, HiCheckCircle } from "react-icons/hi";

const features = [
  {
    icon: <HiLightningBolt className="text-purple-600 text-3xl" />,
    title: "Full Ownership",
    description:
      "We don’t just source—we fill your roles. Unlike traditional RPOs, we take responsibility for every hire, from start to finish.",
  },
  {
    icon: <HiUserGroup className="text-blue-600 text-3xl" />,
    title: "AI + Human Expertise",
    description:
      "Our AI-powered recruiting tech is supercharged by real human recruiters, ensuring accuracy and quality at every step.",
  },
  {
    icon: <HiCheckCircle className="text-green-600 text-3xl" />,
    title: "Accountable & Affordable",
    description:
      "We’re not just fast—we’re accurate, affordable, and accountable. Scale your agency without breaking the bank.",
  },
];

const PurposeSection = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-br from-gray-50 via-white to-purple-50 py-20 px-4 md:px-8 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeIn("up", 0.3)}
            className="baloo-text inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-4"
          >
            WHY HIRE BLINK?
          </motion.div>
          <motion.h2
            variants={textVariant(0.4)}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 baloo-text"
          >
            Most offshore recruiting teams stop at sourcing.<br className="hidden md:block" /> We go further.
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto poppins-regular"
          >
            Hire Blink takes full ownership of filling your roles—unlike traditional RPO firms. We combine AI-powered recruiting technology with real human expertise to help staffing agencies scale without breaking the bank.
            <br />
            <span className="block mt-4 font-semibold text-gray-800 poppins-regular">
              We're not just fast—we're accurate, affordable, and accountable.
            </span>
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              variants={fadeIn("up", 0.2 * (idx + 1))}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 baloo-text">
                {feature.title}
              </h3>
              <p className="text-gray-600 poppins-regular">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;