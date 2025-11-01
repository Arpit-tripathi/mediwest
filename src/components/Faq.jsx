import React, { useState } from "react";

const faqs = [
  {
    question: "What does QARA Healthcare do?",
    answer:
      "QARA Healthcare provides expert consultancy services to hospitals and healthcare organizations to help them achieve national and international accreditations like NABH under QCI and QAI certifications.",
  },
  {
    question: "What is NABH accreditation?",
    answer:
      "NABH (National Accreditation Board for Hospitals) is a part of the Quality Council of India (QCI). It ensures hospitals meet defined standards of quality and patient safety. QARA Healthcare helps hospitals prepare for and achieve these standards smoothly.",
  },
  {
    question: "What is QAI accreditation?",
    answer:
      "QAI (Quality and Accreditation Institute) is an independent body that offers accreditation programs for hospitals, clinics, and laboratories. QARA Healthcare assists clients with the documentation, process setup, and compliance required for QAI accreditation.",
  },
  {
    question: "How many hospitals has QARA Healthcare helped?",
    answer:
      "We have successfully supported over 15 hospitals across India in obtaining accreditation, guiding them through every step from gap analysis to final audit.",
  },
  {
    question: "What are the main services you provide?",
    answer:
      "Our core services include NABH & QAI accreditation consultancy, hospital quality management implementation, internal audits, documentation assistance, and staff training on quality standards.",
  },
  {
    question: "How long does it take to get NABH accreditation?",
    answer:
      "The timeline varies depending on the hospital’s readiness. On average, with our support, hospitals can achieve entry-level NABH accreditation within 3–6 months and full accreditation in 6–12 months.",
  },
  {
    question: "Do you provide on-site or remote consultancy?",
    answer:
      "Yes, we offer both on-site visits for assessments and remote consultancy sessions to ensure flexibility and convenience for your hospital’s staff.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-black text-white px-6 sm:px-10 lg:px-20 py-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-500 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-500/30 rounded-2xl p-5 transition-all duration-300 bg-black/40 hover:bg-blue-950/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <span className="text-lg sm:text-xl font-semibold text-blue-400">
                  {faq.question}
                </span>
                <span className="text-blue-400 text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-sm mt-10 italic">
          Can’t find your question? Reach out to us — our team is here to guide
          you every step of the way.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
