import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "How does Blink's AI-powered recruiting work?",
    answer: "We combine advanced AI tools with human expertise. Our AI handles initial sourcing and screening, while our experienced recruiters focus on relationship building, negotiation, and closing candidates. This hybrid approach ensures both efficiency and the personal touch that top talent expects."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We serve three core sectors: Legal Staffing (boutique to Am Law 100 firms), VC Tech & Early Hires (pre-seed to IPO-ready companies), and Defense & IT Contracting (with clearance expertise). Each sector has dedicated recruiters with deep industry knowledge."
  },
  {
    question: "Do you charge for the AI tools you use?",
    answer: "No, we bear the full cost of our AI recruiting software. You get access to a complete tech stack without any additional fees. Our pricing is transparent and based on successful placements, not tool usage."
  },
  {
    question: "What's your typical time-to-fill for roles?",
    answer: "Our average time-to-fill is 30–45 days, significantly faster than industry standards. We achieve this through our AI-powered sourcing, extensive networks, and dedicated recruiters who take full responsibility for role fulfillment."
  },
  {
    question: "How do you ensure candidate quality?",
    answer: "We use a multi-layered approach: AI-powered screening, human recruiter evaluation, and client feedback loops. Our recruiters personally vet each candidate and provide detailed assessments. We also offer replacement guarantees for quality assurance."
  },
  {
    question: "What makes Blink different from other agencies?",
    answer: "Three key differentiators: 1) We provide the full tech stack at no extra cost, 2) Our recruiters take end-to-end responsibility for role fulfillment, not just sourcing, 3) We combine AI efficiency with human expertise for optimal results."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // No need for handleContactClick, use mailto links directly

  return (
    <section id="faq" className="relative py-24 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeIn("up", 0.4)}
            className="baloo-text inline-block bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 text-purple-700 text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-4"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="baloo-text text-3xl md:text-4xl font-bold text-[#C7F380] mb-4"
          >
            Got Questions? We&apos;ve Got Answers
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            className="text-gray-300 text-lg max-w-2xl mx-auto poppins-regular"
          >
            Everything you need to know about working with Blink. Can&apos;t find what you&apos;re looking for? 
            <a href="mailto:contact@hire-blink.com" className="text-[#C7F380] hover:text-green-300 transition-colors duration-200 ml-1">
              Contact us directly.
            </a>
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.7)}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * (index + 1))}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="baloo-text text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <HiChevronDown className="text-[#C7F380] text-xl" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <div className="w-12 h-px bg-gradient-to-r from-[#C7F380] to-transparent mb-4"></div>
                      <p className="text-gray-300 poppins-regular leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.9)}
          className="text-center mt-12"
        >
          <p className="text-gray-400 poppins-regular">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="mailto:contact@hire-blink.com"
            className="mt-4 inline-flex items-center gap-2 text-[#C7F380] hover:text-green-300 transition-colors duration-200 baloo-text font-semibold"
            style={{ display: "inline-flex" }}
          >
            <span>Contact Our Team</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FaqSection;