import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { HiSparkles, HiCurrencyDollar, HiCheckBadge } from "react-icons/hi2";

// Modal form fields and logic (copied from Hero.jsx)
const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  position: "",
};

const features = [
  {
    icon: <HiSparkles className="text-purple-600 text-4xl drop-shadow-lg" />,
    title: "AI Meets Human Expertise",
    description:
      "Our recruiters are empowered by a handpicked suite of AI tools, so they focus on what AI can't do—communicate, connect, and convert top talent.",
    bg: "from-green-100 to-emerald-100",
  },
  {
    icon: <HiCurrencyDollar className="text-blue-600 text-4xl drop-shadow-lg" />,
    title: "You Don't Pay for Tools",
    description:
      "We bear the cost of AI recruiting software. You get a fully loaded recruiting tech stack without the extra expense.",
    bg: "from-blue-100 to-cyan-100",
  },
  {
    icon: <HiCheckBadge className="text-green-600 text-4xl drop-shadow-lg" />,
    title: "We Close the Roles",
    description:
      "We're not just a sourcing partner. We take responsibility for end-to-end fulfillment, ensuring your roles are filled with quality candidates on time.",
    bg: "from-green-100 to-emerald-100",
  },
];

const FeaturesSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS config
    const SERVICE_ID = "service_5hd83jn";
    const TEMPLATE_ID = "template_28q7icj";
    const PUBLIC_KEY = "PGUyAo6dkkkPRFJ2K";

    setSubmitting(true);
    try {
      // Dynamically import emailjs to avoid SSR issues if any
      const emailjs = (await import("@emailjs/browser")).default;
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          position: formData.position,
          subject: "New Candidate Request from Hire-Blink",
          message: `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Company: ${formData.company}
            Position Needed: ${formData.position}
          `,
        },
        PUBLIC_KEY
      );

      if (result.status === 200 || result.text === "OK") {
        alert("Thank you! Your request has been submitted successfully.");
        setFormData(initialFormData);
        setShowForm(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  // Button click handler: open modal form
  const handleGetStarted = () => {
    setShowForm(true);
  };

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative max-w-7xl mx-auto px-4 py-24"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-b from-[#ebffc4] via-[#c7f380] to-[#a3e635] rounded-full blur-2xl opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-b from-[#ebffc4] via-[#c7f380] to-[#a3e635] rounded-full blur-2xl opacity-20 pointer-events-none"></div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="baloo-text inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-semibold px-5 py-2 rounded-full tracking-wider mb-5 shadow"
        >
          What Makes Us Different?
        </motion.div>
        <motion.h2
          variants={textVariant(0.2)}
          className="baloo-text text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-blue-700 to-emerald-600 bg-clip-text text-[#ebffc4]"
        >
          Modern Recruiting, Redefined
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.5)}
          className="poppins-regular text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          We blend cutting-edge AI with real human expertise, so you get a recruiting partner who delivers results—without the hidden costs or compromises.
        </motion.p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            variants={fadeIn("up", 0.2 * (idx + 1))}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow: "0 8px 32px 0 rgba(99,102,241,0.10)",
            }}
            className={`group bg-gradient-to-br bg-[#ebffc4] rounded-3xl shadow-xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]`}
          >
            <motion.div
              variants={fadeIn("down", 0.3 * (idx + 1))}
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
              variants={fadeIn("up", 0.5 * (idx + 1))}
              className="text-gray-600 text-base poppins-regular"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.8)}
        className="flex justify-center mt-16 relative z-10"
      >
        {/* <motion.button
          onClick={handleGetStarted}
          variants={fadeIn("up", 0.9)}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{ scale: 0.98 }}
          className="flex justify-center gap-2 items-center shadow-xl text-lg bg-gradient-to-r from-[#ebffc4] to-green-400 backdrop-blur-md lg:font-semibold isolation-auto border-[#ebffc4] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#0D263A] hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 rounded-full group"
        >
          <span className="relative z-10 text-[#0D263A] group-hover:text-black transition-colors duration-300 baloo-text">
            Discover the Blink Difference
          </span>
          <motion.svg
            className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-white text-[#0D263A] ease-linear duration-300 rounded-full border border-[#0D263A] group-hover:border-white p-2 rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
            whileHover={{ rotate: 90 }}
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-[#0D263A] group-hover:fill-[#0D263A]"
            />
          </motion.svg>
        </motion.button> */}
        <motion.button
          onClick={handleGetStarted}
          variants={fadeIn("up", 0.9)}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{ scale: 0.98 }}
          className="flex justify-center gap-2 items-center shadow-xl text-lg bg-white lg:font-semibold isolation-auto border-[#ebffc4] relative z-10 px-8 py-4 overflow-hidden border-2 rounded-full group transition-colors duration-300 hover:bg-[#ebffc4]/90"
        >
          <span className="relative z-10 text-[#0D263A] group-hover:text-black transition-colors duration-300 baloo-text">
            Discover the Blink Difference
          </span>
          <motion.svg
            className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-white text-[#0D263A] ease-linear duration-300 rounded-full border border-[#0D263A] group-hover:border-white p-2 rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
            whileHover={{ rotate: 90 }}
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-[#0D263A] group-hover:fill-[#0D263A]"
            />
          </motion.svg>
        </motion.button>
      </motion.div>
      {/* Modal Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md w-full shadow-2xl mx-auto"
            >
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 baloo-text">
                  Find Candidates
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close form"
                  type="button"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    autoComplete="name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebffc4] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    autoComplete="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebffc4] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    autoComplete="tel"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebffc4] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="company"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    autoComplete="organization"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebffc4] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter company name"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="position"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Position you need to fill
                  </label>
                  <textarea
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebffc4] focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                    placeholder="Describe the position you need to fill"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-gradient-to-r from-[#ebffc4] to-[#A3E635] text-gray-900 font-semibold py-2.5 sm:py-3 px-4 rounded-lg hover:from-[#A3E635] hover:to-[#84CC16] transition-all duration-200 transform hover:scale-105 shadow-lg text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#ebffc4] ${
                    submitting ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {submitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default FeaturesSection;