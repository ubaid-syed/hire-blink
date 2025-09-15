
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { HiOutlineChip, HiOutlineUserGroup, HiOutlineLightningBolt, HiOutlineDatabase, HiOutlineClock, HiOutlineCog } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const practiceAreas = [
  {
    icon: <HiOutlineChip className="text-purple-600 text-4xl mb-3 drop-shadow-lg" />,
    title: "AI-Enabled Sourcing & Screening",
    desc: "Harness AI to identify, engage, and screen top-tier talent across platforms.",
    color: "from-purple-100 to-blue-100"
  },
  {
    icon: <HiOutlineUserGroup className="text-blue-600 text-4xl mb-3 drop-shadow-lg" />,
    title: "Full-Cycle RPO Services",
    desc: "Let us manage sourcing, screening, and candidate experience—end-to-end.",
    color: "from-blue-100 to-cyan-100"
  },
  {
    icon: <HiOutlineCog className="text-emerald-600 text-4xl mb-3 drop-shadow-lg" />,
    title: "Industry-Specific Recruiters",
    desc: "Work with recruiters who know your industry, from legal to tech to defense.",
    color: "from-emerald-100 to-green-100"
  },
  {
    icon: <HiOutlineDatabase className="text-pink-600 text-4xl mb-3 drop-shadow-lg" />,
    title: "High-Volume Talent Pipeline Creation",
    desc: "Build and maintain a clean, organized candidate database for scale.",
    color: "from-pink-100 to-purple-50"
  },
  {
    icon: <HiOutlineClock className="text-yellow-500 text-4xl mb-3 drop-shadow-lg" />,
    title: "Fast Turnaround on Niche Roles",
    desc: "Get high-quality candidates for hard-to-fill roles—fast.",
    color: "from-yellow-100 to-orange-50"
  },
  {
    icon: <HiOutlineLightningBolt className="text-indigo-600 text-4xl mb-3 drop-shadow-lg" />,
    title: "Recruitment Tech Stack (Free)",
    desc: "Access our AI-powered recruiting tools at no extra cost.",
    color: "from-indigo-100 to-blue-50"
  }
];

const features = [
  "Identify & engage top-tier talent across platforms",
  "Conduct initial candidate screenings",
  "Maintain a clean, organized candidate database",
  "Provide a constant flow of high-quality candidates"
];

const MonitorSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS config
    const SERVICE_ID = 'service_5hd83jn';
    const TEMPLATE_ID = 'template_28q7icj';
    const PUBLIC_KEY = 'PGUyAo6dkkkPRFJ2K';

    setSubmitting(true);
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          position: formData.position,
          subject: 'New Candidate Request from Hire-Blink',
          message: `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Company: ${formData.company}
            Position Needed: ${formData.position}
          `
        },
        PUBLIC_KEY
      );

      if (result.status === 200 || result.text === "OK") {
        alert('Thank you! Your request has been submitted successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          position: ''
        });
        setShowForm(false);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  };

  const handleGetStarted = () => {
    setShowForm(true);
  };

  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Left: Content */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span
            variants={fadeIn('up', 0.4)}
            className="baloo-text inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-semibold px-5 py-2 rounded-full tracking-wider mb-5 shadow"
          >
            RPO Services: Done Right
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className=" baloo-text text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-blue-700 to-emerald-600 bg-clip-text text-[#C7F380]"
          >
            Our Practice Areas
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            className="text-gray-300 text-lg md:text-xl mb-8 poppins-regular"
          >
            Let us manage your sourcing & screening, while you focus on delivering for clients.
          </motion.p>
          <motion.ul
            variants={fadeIn('up', 0.7)}
            className="space-y-4 mb-8"
          >
            {features.map((item, idx) => (
              <motion.li
                key={item}
                variants={fadeIn('up', 0.1 * (idx + 1))}
                className="flex items-start gap-3"
              >
                <FaCheckCircle className="text-emerald-500 mt-1" />
                <span className="text-gray-300 text-base md:text-lg poppins-regular">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          {/* <motion.button
            onClick={handleGetStarted}
            variants={fadeIn('up', 0.8)}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            className="flex justify-center gap-2 items-center shadow-xl text-lg bg-gradient-to-r from-[#C7F380] to-green-400 backdrop-blur-md lg:font-semibold isolation-auto border-[#C7F380] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#0D263A] hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 rounded-full group"
          >
            <span className="relative z-10 text-[#0D263A] group-hover:text-black transition-colors duration-300 baloo-text">Get Started</span>
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
            variants={fadeIn('up', 0.8)}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            className="flex justify-center gap-2 items-center shadow-xl text-lg bg-white lg:font-semibold isolation-auto border-[#C7F380] relative z-10 px-8 py-4 overflow-hidden border-2 rounded-full group transition-colors duration-300 hover:bg-[#C7F380]/90"
          >
            <span className="relative z-10 text-[#0D263A] group-hover:text-black transition-colors duration-300 baloo-text">Get Started</span>
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

        {/* Right: Animated Practice Areas Grid */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {practiceAreas.map((area, idx) => (
            <motion.div
              key={area.title}
              variants={fadeIn('up', 0.15 * (idx + 1))}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(99,102,241,0.10)"
              }}
              className={`bg-gradient-to-br ${area.color} rounded-2xl shadow-lg p-7 flex flex-col items-start hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="mb-2">{area.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors baloo-text">{area.title}</h3>
              <p className="text-gray-600 text-sm poppins-regular">{area.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 baloo-text">Find Candidates</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close form"
                  type="button"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter company name"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="position" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Position you need to fill
                  </label>
                  <textarea
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                    placeholder="Describe the position you need to fill"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-gradient-to-r from-[#C7F380] to-[#A3E635] text-gray-900 font-semibold py-2.5 sm:py-3 px-4 rounded-lg hover:from-[#A3E635] hover:to-[#84CC16] transition-all duration-200 transform hover:scale-105 shadow-lg text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#C7F380] ${submitting ? 'opacity-60 cursor-not-allowed' : ''}`}
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

export default MonitorSection;