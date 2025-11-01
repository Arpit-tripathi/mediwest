// import React from "react";
// import CardSwap, { Card } from "./CardSwap";

// const clients = [
//   {
//     name: "Quality Council of India (QCI)",
//     logo: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "National Accreditation Board for Hospitals (NABH)",
//     logo: "https://randomuser.me/api/portraits/women/45.jpg",
//   },
//   {
//     name: "Central Government Health Scheme (CGHS)",
//     logo: "https://randomuser.me/api/portraits/men/76.jpg",
//   },
//   {
//     name: "Ex-Servicemen Contributory Health Scheme (ECHS)",
//     logo: "https://randomuser.me/api/portraits/women/12.jpg",
//   },
//   {
//     name: "Quality and Accreditation Institute (QAI)",
//     logo: "https://randomuser.me/api/portraits/men/88.jpg",
//   },
// ];

// const ClientSection = () => (
//   <section
//     className="h-screen bg-black text-center flex flex-col justify-center py-16"
//     id="clients"
//   >
//     <div className="container mx-auto px-4">
//       <h2 className="text-4xl font-bold text-blue-400 mb-12">
//         Our Accreditation Partners
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {clients.map((client, idx) => (
//           <div
//             key={idx}
//             className="flex flex-col items-center p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
//           >
//             <img
//               src={client.logo}
//               alt={client.name}
//               className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-400"
//             />
//             <p className="text-lg text-gray-200 text-center font-medium">
//               {client.name}
//             </p>
         
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default ClientSection;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const clients = [
//   {
//     name: "Sunrise Multispeciality Hospital",
//     description: "Successfully achieved NABH accreditation with QARA Healthcare guidance.",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Hospital_building_icon.svg",
//   },
//   {
//     name: "Global Care Hospital, Delhi",
//     description: "Completed QCI accreditation and quality compliance audit.",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hospital_font_awesome.svg",
//   },
//   {
//     name: "Fortune Lifeline Hospital, Lucknow",
//     description: "Accredited under NABH and guided for QAI readiness.",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Hospital-symbol.svg",
//   },
//   {
//     name: "MedStar Healthcare, Pune",
//     description: "QARA Healthcare led the end-to-end QCI documentation and audit prep.",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Hospital_icon.svg",
//   },
//   {
//     name: "Sai Kripa Medical Center, Jaipur",
//     description: "Completed ECHS and CGHS audit compliance under QARA consultancy.",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Hospital_cross_symbol.svg",
//   },
// ];

// const ClientsPage = () => {
//   const [index, setIndex] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % clients.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const currentClient = clients[index];

//   return (
//     <section
//       id="clients"
//       className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
//     >
//       <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-10 text-center">
//         Our Trusted Clients & Hospitals
//       </h2>

//       <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-gray-900/70 backdrop-blur-md shadow-2xl border border-blue-500/20">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="flex flex-col items-center p-10 text-center"
//           >
//             <img
//               src={currentClient.logo}
//               alt={currentClient.name}
//               className="w-24 h-24 object-contain mb-6"
//             />
//             <h3 className="text-2xl font-semibold text-blue-300 mb-2">
//               {currentClient.name}
//             </h3>
//             <p className="text-gray-300 text-base max-w-lg">
//               {currentClient.description}
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         {/* Dots Navigation */}
//         <div className="flex justify-center mt-6 pb-4 space-x-3">
//           {clients.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 i === index
//                   ? "bg-blue-400 scale-125"
//                   : "bg-gray-600 hover:bg-gray-500"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>

//       <p className="mt-12 text-gray-400 text-sm text-center max-w-xl">
//         QARA Healthcare has proudly partnered with over{" "}
//         <span className="text-blue-400 font-semibold">15+ hospitals</span> across India,
//         helping them achieve NABH, QCI, QAI, CGHS, and ECHS accreditations with
//         excellence and efficiency.
//       </p>
//     </section>
//   );
// };

// export default ClientsPage;



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const clients = [
  {
    name: "Sunrise Multispeciality Hospital",
    description:
      "Successfully achieved NABH accreditation with QARA Healthcare guidance.",
    logo: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
  },
  {
    name: "Global Care Hospital, Delhi",
    description:
      "Completed QCI accreditation and quality compliance audit.",
    logo: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
  },
  {
    name: "Fortune Lifeline Hospital, Lucknow",
    description:
      "Accredited under NABH and guided for QAI readiness.",
    logo: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
  },
  {
    name: "MedStar Healthcare, Pune",
    description:
      "QARA Healthcare led the end-to-end QCI documentation and audit prep.",
    logo: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
  },
  {
    name: "Sai Kripa Medical Center, Jaipur",
    description:
      "Completed ECHS and CGHS audit compliance under QARA consultancy.",
    logo: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
  },
];

const ClientsPage = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % clients.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentClient = clients[index];

  return (
    <section
      id="clients"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-10 text-center">
        Our Trusted Clients & Hospitals
      </h2>

      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-gray-900/70 backdrop-blur-md shadow-2xl border border-blue-500/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center p-10 text-center"
          >
            {/* Logo with fallback */}
            <img
              src={currentClient.logo}
              alt={currentClient.name}
              onError={(e) => {
                e.target.src =
                  "https://cdn-icons-png.flaticon.com/512/2966/2966327.png";
              }}
              className="w-24 h-24 object-contain mb-6"
            />

            <h3 className="text-2xl font-semibold text-blue-300 mb-2">
              {currentClient.name}
            </h3>
            <p className="text-gray-300 text-base max-w-lg">
              {currentClient.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 pb-4 space-x-3">
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-blue-400 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <p className="mt-12 text-gray-400 text-sm text-center max-w-xl">
        QARA Healthcare has proudly partnered with over{" "}
        <span className="text-blue-400 font-semibold">15+ hospitals</span> across India,
        helping them achieve NABH, QCI, QAI, CGHS, and ECHS accreditations with
        excellence and efficiency.
      </p>
    </section>
  );
};

export default ClientsPage;

