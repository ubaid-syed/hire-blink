import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import emailjs from '@emailjs/browser';

const HERO_IMAGE_SRC = "/hero-image_11zon.webp"; 

const Hero = () => {
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

  return (
    <section id="home" className="flex flex-col md:flex-row justify-between items-center px-2 sm:px-4 md:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-44 pb-10 sm:pb-16 container mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-6 sm:space-y-8">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
          {/* Star badge */}
          <div className="flex items-center gap-2 bg-gray-50 w-fit px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className="text-[#0D263A] group-hover:scale-110 transition-transform">★</span>
            <span className="text-xs sm:text-sm font-medium poppins-regular">AI-Powered</span>
          </div>
        </motion.div>

        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="baloo-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#C7F380] drop-shadow-lg"
        >
          AI-Powered On-Demand Recruiting for Staffing Agencies
        </motion.h1>

        <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="poppins-regular text-gray-300 text-base sm:text-lg md:text-xl max-w-xl"
        >
          Place top talent with your clients—fast, cost-effective, and seamless. Just like the Blink of an Eye.
        </motion.p>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col sm:flex-row gap-3 max-w-md"
        >
          {/* Modern Animated Button */}
          <motion.button
            onClick={() => setShowForm(true)}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            className="flex justify-center gap-2 items-center shadow-xl text-base sm:text-lg bg-gradient-to-r from-[#C7F380] to-green-400 backdrop-blur-md lg:font-semibold isolation-auto border-[#C7F380] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#0D263A] hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 sm:px-8 py-3 sm:py-4 overflow-hidden border-2 rounded-full group"
          >
            <span className="relative z-10 text-[#0D263A] group-hover:text-black transition-colors duration-300 poppins-regular">Start Free Candidate Search</span>
            <motion.svg
              className="w-7 h-7 sm:w-8 sm:h-8 justify-end group-hover:rotate-90 group-hover:bg-white text-[#0D263A] ease-linear duration-300 rounded-full border border-[#0D263A] group-hover:border-white p-1.5 sm:p-2 rotate-45"
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
      </div>

      {/* Right Column - Images */}
      {/* LCP image: discoverable, not lazy, fetchpriority=high */}
      <div 
        className="w-full md:w-1/2 mt-10 sm:mt-16 md:mt-0 pl-0 md:pl-8 lg:pl-12 flex justify-center md:justify-end"
      >
        <img
          src={HERO_IMAGE_SRC}
          alt="Team meeting"
          className="rounded-lg relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl hover:scale-[1.02] transition-transform duration-300"
          fetchpriority="high"
          decoding="async"
        />
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
    </section>
  );
};

export default Hero;