import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "We Serve" },
    { href: "#testimonials", label: "Testimonials" },
  ];

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
    setIsMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      layout
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`
        fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-xl border border-gray-200/75 shadow-xl
        w-[60vw] 
        max-w-[85vw]
        sm:max-w-[400px]
        md:max-w-[650px]
        lg:max-w-[800px]
        xl:max-w-[900px]
        2xl:max-w-[1000px]
        ${isMenuOpen ? "rounded-2xl" : "rounded-full"}
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

        {/* Navigation Links - Desktop & Tablet */}
        <div
          className={`
            hidden
            md:flex
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
          {navLinks.map((link) => (
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
              <span className="relative z-10">{link.label}</span>
              {/* Animated underline on hover */}
              <span
                className="absolute left-1/2 -bottom-1 w-0 h-[3px] bg-[#C7F380] rounded-full transition-all duration-300 group-hover:w-3/4"
                style={{
                  transform: "translateX(-50%)",
                  opacity: activeLink === link.href ? 1 : 0.5,
                }}
              ></span>
            </a>
          ))}
        </div>

        {/* CTA Button & Mobile Menu Button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="#newsletter"
            className="baloo-text hidden md:block px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md border border-transparent"
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
          >
            Get in touch
          </a>
          <button
            className="md:hidden p-2 rounded-full transition-colors duration-200 hover:bg-[#C7F380]/30 focus:outline-none focus:ring-2 focus:ring-[#C7F380]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6 text-[#0D263A] transition-transform duration-200 hover:scale-110" />
            ) : (
              <HiMenu className="h-6 w-6 text-[#0D263A] transition-transform duration-200 hover:scale-110" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center gap-2 px-3 pb-4 pt-2 border-t border-gray-200/75">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`w-full text-center block text-base font-semibold py-3 rounded-lg transition-all duration-300 relative
                    ${
                      activeLink === link.href
                        ? ""
                        : "hover:bg-[#C7F380]/20 hover:text-[#0D263A]"
                    }`}
                  style={{
                    background: activeLink === link.href ? "#0D263A" : "transparent",
                    color: activeLink === link.href ? "#fff" : "#0D263A",
                    boxShadow: activeLink === link.href ? "0 2px 16px 0 rgba(13,38,58,0.10)" : "none",
                  }}
                >
                  <span className="relative z-10">{link.label}</span>
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="mobile-active-pill"
                      className="absolute inset-0"
                      style={{
                        background: "#0D263A",
                        borderRadius: 12,
                        zIndex: 0,
                        opacity: 0.95,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              <a
                href="#newsletter"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  scrollToSection("#newsletter");
                }}
                className="w-full mt-2 text-center px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md border border-transparent"
                style={{
                  background: getInTouchBg,
                  color: getInTouchText,
                  boxShadow: "0 2px 16px 0 rgba(199,243,128,0.15)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#e6ffb7";
                  e.currentTarget.style.color = "#0D263A";
                  e.currentTarget.style.boxShadow = "0 4px 24px 0 rgba(199,243,128,0.25)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = getInTouchBg;
                  e.currentTarget.style.color = getInTouchText;
                  e.currentTarget.style.boxShadow = "0 2px 16px 0 rgba(199,243,128,0.15)";
                }}
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;