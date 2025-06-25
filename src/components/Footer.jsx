import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/102357127/admin/dashboard/",
    icon: <FaLinkedinIn className="w-5 h-5" />,
    hoverColor: "hover:bg-blue-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/hireblink",
    icon: <FaTwitter className="w-5 h-5" />,
    hoverColor: "hover:bg-sky-500",
  },
  {
    name: "Email",
    href: "mailto:info@hire-blink.com",
    icon: <HiOutlineMail className="w-5 h-5" />,
    hoverColor: "hover:bg-teal-500",
  },
];

const footerLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/102357127/admin/dashboard/", hoverClass: "hover:text-blue-400" },
  { name: "Twitter", href: "https://twitter.com/hireblink", hoverClass: "hover:text-sky-400" },
  { name: "Email", href: "mailto:info@hire-blink.com", hoverClass: "hover:text-teal-400" },
];

const bgBlobs = [
  // {
  //   className:
  //     "absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-300 via-green-300 to-purple-300 rounded-full blur-3xl pointer-events-none z-0",
  //   style: { opacity: 0.1 },
  //   delay: 0.2,
  // },
  {
    className:
      "absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-300 via-pink-200 to-purple-200 rounded-full blur-3xl pointer-events-none z-0",
    style: { opacity: 0.08 },
    delay: 0.4,
  },
];

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative overflow-hidden bg-transparent text-white pt-20 pb-10"
    >
      {/* Animated Blobs */}
      {bgBlobs.map((blob, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: blob.style.opacity, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: blob.delay, ease: "easeOut" }}
          className={blob.className}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Animated Logo */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          className="mb-6 flex items-center gap-3"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{ scale: [0.8, 1.1, 1], rotate: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="w-10 h-10 rounded-full border border-white shadow-lg flex items-center justify-center"
          >
             <img
            src="/Grad BH Fnl-2.png"
            alt="Hire Blink Logo"
            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          </motion.div>
          <motion.span
            variants={textVariant(0.4)}
            className="baloo-text text-2xl font-bold text-white bg-clip-text text-transparent tracking-tight"
          >
            Hire Blink
          </motion.span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeIn("up", 0.4)}
          className="text-lg md:text-xl font-medium text-center mb-10 text-gray-300 poppins-regular"
        >
          Recruit faster. Smarter. Better.
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          className="flex gap-4 mb-12"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-white/10 text-gray-300 ${link.hoverColor} hover:text-white transition-colors duration-300 rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0D263A] focus:ring-blue-500`}
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          className="w-full max-w-md h-px bg-white/10 mb-8"
        />

        {/* Copyright & Links */}
        <motion.div
          variants={fadeIn("up", 0.7)}
          className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-y-4 gap-x-6"
        >
          <motion.p
            variants={fadeIn("right", 0.8)}
            className="text-gray-400 text-sm baloo-text"
          >
            Hire Blink © {new Date().getFullYear()}
          </motion.p>
          <motion.div
            variants={fadeIn("left", 0.8)}
            className="flex items-center gap-x-5 text-gray-400 text-sm"
          >
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`transition-colors poppins-regular duration-300 ${link.hoverClass}`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;