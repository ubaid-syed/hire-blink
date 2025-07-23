
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineHome, HiOutlineUserGroup, HiOutlineBriefcase, HiOutlineChatBubbleLeftRight, HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineMailOpen } from "react-icons/hi";

// Custom Modal for the "Get in touch" form
const GetInTouchModal = ({ open, onClose }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
  });
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
      // Dynamically import emailjs to avoid SSR issues
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          position: "",
        });
        onClose();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-2 sm:p-4"
        onClick={onClose}
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
              onClick={onClose}
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
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors text-sm sm:text-base"
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
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors text-sm sm:text-base"
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
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors text-sm sm:text-base"
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
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors text-sm sm:text-base"
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
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                placeholder="Describe the position you need to fill"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full bg-gradient-to-r from-[#C7F380] to-[#A3E635] text-gray-900 font-semibold py-2.5 sm:py-3 px-4 rounded-lg hover:from-[#A3E635] hover:to-[#84CC16] transition-all duration-200 transform hover:scale-105 shadow-lg text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#C7F380] ${
                submitting ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Map nav links to icons
const navLinks = [
  {
    href: "#home",
    label: "Home",
    icon: HiOutlineHome,
  },
  {
    href: "#about",
    label: "About Us",
    icon: HiOutlineUserGroup,
  },
  {
    href: "#services",
    label: "We Serve",
    icon: HiOutlineBriefcase,
  },
  {
    href: "#testimonials",
    label: "Testimonials",
    icon: HiOutlineChatBubbleLeftRight,
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [showForm, setShowForm] = useState(false);

  const navVariants = {
    hidden: {
      opacity: 0,
      y: -25,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, delay: 0.2 },
    },
  };

  // Custom colors
  const activeBgColor = "#132537";
  const getInTouchBg = "#ebffc4";
  const getInTouchText = "#132537";

  // Smooth scroll function with delay for mobile
  const scrollToSection = (href) => {
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100); // Add small delay to ensure menu closes first
  };

  // Handle navigation link click
  const handleNavClick = (href) => {
    setActiveLink(href);
    scrollToSection(href);
  };

  // Handle "Get in touch" click (open form)
  const handleGetInTouch = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="show"
        layout
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`
          fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-xl border border-gray-200/75 shadow-xl
          w-[80vw] 
          max-w-[95vw]
          sm:max-w-[500px]
          md:max-w-[650px]
          lg:max-w-[800px]
          xl:max-w-[900px]
          2xl:max-w-[1000px]
          rounded-full
          transition-all duration-300
        `}
        style={{
          minWidth: "0",
        }}
      >
        <motion.div
          layout="position"
          className={`
            flex items-center justify-between 
            px-2 py-2
            sm:px-4 sm:py-3
            gap-2
          `}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 cursor-pointer flex-shrink-0 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <img
              src="/Grad BH Fnl-2.png"
              alt="Hire Blink Logo"
              className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* Navigation Links - Responsive */}
          <div
            className={`
              flex
              items-center
              gap-1
              sm:gap-2
              md:gap-3
              lg:gap-4
              mx-1
              sm:mx-2
              md:mx-4
              flex-1
              min-w-0
              justify-center
              overflow-x-auto
            `}
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`
                    px-3 sm:px-4 py-2 text-sm baloo-text font-medium rounded-full transition-all duration-300 relative overflow-hidden
                    ${activeLink === link.href
                      ? "text-white"
                      : "text-gray-700 hover:text-[#0D263A]"}
                    whitespace-nowrap
                    flex items-center justify-center
                  `}
                  style={{
                    zIndex: 1,
                    fontWeight: activeLink === link.href ? 700 : 500,
                    letterSpacing: activeLink === link.href ? "0.02em" : "0",
                    boxShadow: activeLink === link.href
                      ? "0 2px 16px 0 rgba(13,38,58,0.10)"
                      : "none",
                  }}
                >
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0"
                      style={{
                        background: activeBgColor,
                        borderRadius: 9999,
                        zIndex: 0,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Show icon on small and md, text on lg+ */}
                  <span className="relative z-10 flex items-center">
                    <span className="block lg:hidden">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="hidden lg:block">{link.label}</span>
                  </span>
                  {/* Animated underline on hover */}
                  <span
                    className="absolute left-1/2 -bottom-1 w-0 h-[3px] bg-[#C7F380] rounded-full transition-all duration-300 group-hover:w-3/4"
                    style={{
                      transform: "translateX(-50%)",
                      opacity: activeLink === link.href ? 1 : 0.5,
                    }}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="#newsletter"
              className="baloo-text px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md border border-transparent flex items-center justify-center"
              style={{
                background: getInTouchBg,
                color: getInTouchText,
                boxShadow: "0 2px 16px 0 rgba(199,243,128,0.15)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#C7F380";
                e.currentTarget.style.color = "#0D263A";
                e.currentTarget.style.boxShadow = "0 4px 24px 0 rgba(199,243,128,0.25)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = getInTouchBg;
                e.currentTarget.style.color = getInTouchText;
                e.currentTarget.style.boxShadow = "0 2px 16px 0 rgba(199,243,128,0.15)";
              }}
              onClick={handleGetInTouch}
            >
              {/* Show icon on small and md, text on lg+ */}
              <span className="block lg:hidden">
                <HiOutlineMailOpen className="h-6 w-6" />
              </span>
              <span className="hidden lg:block">Get in touch</span>
            </a>
          </div>
        </motion.div>
      </motion.nav>
      <GetInTouchModal open={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default Navbar;

