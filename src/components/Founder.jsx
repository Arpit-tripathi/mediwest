import React from "react";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Himanshu Sharma",
    role: "Founder & CEO, QARA Healthcare",
    image:
      "https://cdn-icons-png.flaticon.com/512/1999/1999625.png", // replace with actual photo later
    bio: "Himanshu Sharma is a pharmacist and holds a Master’s degree in Hospital Management. With extensive experience as a Quality Officer, he has successfully led multiple hospitals across India through NABH, QCI, and QAI accreditations. His leadership ensures QARA Healthcare continues to set new benchmarks in healthcare quality and compliance.",
  },
  {
    name: "Arpit Tripathi",
    role: "Co-Founder & Technical Director, QARA Healthcare",
    image:
      "https://cdn-icons-png.flaticon.com/512/2922/2922522.png", // replace with your own photo
    bio: "Arpit Tripathi is a Computer Engineer who leads all technical operations at QARA Healthcare. From digital infrastructure to AI-driven automation, he ensures that technology empowers accreditation processes, making them smarter, faster, and more efficient.",
  },
];

const FoundersPage = () => {
  return (
    <section
      id="founders"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-12 text-center">
        Our Leadership Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {founders.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/60 border border-blue-500/20 rounded-2xl shadow-xl p-8 text-center flex flex-col items-center hover:shadow-blue-500/20 transition-all duration-300"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-32 h-32 rounded-full object-cover border-2 border-blue-400 mb-6"
            />
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">
              {person.name}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{person.role}</p>
            <p className="text-gray-300 text-base leading-relaxed">
              {person.bio}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="mt-16 text-gray-400 text-center max-w-2xl text-sm">
        Together, Himanshu and Arpit have built QARA Healthcare into a trusted
        consultancy that combines quality expertise with modern technology —
        helping hospitals nationwide achieve excellence in accreditation and
        healthcare management.
      </p>
    </section>
  );
};

export default FoundersPage;
