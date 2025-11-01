import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center bg-black text-white px-6 sm:px-10 lg:px-20 py-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 to-black pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-500 mb-4">
          About QARA Healthcare
        </h2>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          <span className="font-semibold text-blue-400">QARA Healthcare</span> is a
          leading healthcare consultancy firm dedicated to empowering hospitals and
          healthcare organizations to achieve excellence through top-tier
          accreditations and quality assurance systems.
        </p>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          We specialize in providing expert guidance and full-cycle consultancy for{" "}
          <span className="font-semibold text-blue-400">QCI (Quality Council of India)</span>{" "}
          under{" "}
          <span className="font-semibold text-blue-400">
            NABH (National Accreditation Board for Hospitals)
          </span>{" "}
          accreditation, as well as{" "}
          <span className="font-semibold text-blue-400">QAI (Quality and Accreditation Institute)</span>{" "}
          certifications.
        </p>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Our experienced team of healthcare quality professionals has successfully
          guided over{" "}
          <span className="font-semibold text-blue-400">15+ hospitals</span> across
          India in achieving their accreditation goals — helping them enhance
          patient safety, clinical quality, and operational efficiency.
        </p>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          From documentation, gap analysis, and staff training to mock audits and
          final assessment preparation — QARA Healthcare ensures a seamless journey
          toward compliance with national and international standards.
        </p>

        <div className="pt-8 flex  flex-col justify-center items-center">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">
            Our Core Services
          </h3>
          <ul className="space-y-3 text-gray-300 text-left mx-auto max-w-xl flex flex-col justify-center ">
            <li>• NABH Accreditation Consultancy (Entry Level & Full)</li>
            <li>• QAI Accreditation Support</li>
            <li>• Hospital Quality Management Implementation</li>
            <li>• Internal Audits & Compliance Evaluation</li>
            <li>• Training for Quality Standards and Documentation</li>
            <li>• Continuous Quality Improvement Programs</li>
          </ul>
        </div>

        <p className="text-gray-400 italic mt-10">
          “Quality healthcare isn’t a goal — it’s a journey. QARA Healthcare walks
          every step of that journey with you.”
        </p>
      </div>
    </section>
  );
};

export default About;
