import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-12 text-center"
      >
        Contact Us
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900/60 border border-blue-500/20 rounded-2xl shadow-xl p-8 max-w-3xl w-full text-center"
      >
        <h3 className="text-2xl text-blue-300 font-semibold mb-6">
          Get in Touch with QARA Healthcare
        </h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          At <span className="text-blue-400 font-semibold">QARA Healthcare</span>, 
          we specialize in NABH, QCI, and QAI accreditation consulting.  
          Our expert team has successfully guided <span className="text-blue-300 font-semibold">15+ hospitals </span> 
          across India towards excellence in quality and compliance.  
          Connect with us to learn how we can help your institution achieve accreditation success.
        </p>

        <ul className="space-y-5 text-gray-300 text-lg">
          <li className="flex justify-center items-center gap-3">
            <FaMapMarkerAlt className="text-blue-400 text-xl" />
            <span>QARA Healthcare, Gurugram, Haryana, India</span>
          </li>
          <li className="flex justify-center items-center gap-3">
            <FaEnvelope className="text-blue-400 text-xl" />
            <span>info@qarahealthcare.com</span>
          </li>
          <li className="flex justify-center items-center gap-3">
            <FaPhone className="text-blue-400 text-xl" />
            <span>+91 98765 43210</span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default ContactPage;
