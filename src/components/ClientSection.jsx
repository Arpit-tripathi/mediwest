import React from "react";
import CardSwap, { Card } from "./CardSwap";

const clients = [
  {
    name: "Quality Council of India (QCI)",
    logo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "National Accreditation Board for Hospitals (NABH)",
    logo: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Central Government Health Scheme (CGHS)",
    logo: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Ex-Servicemen Contributory Health Scheme (ECHS)",
    logo: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Quality and Accreditation Institute (QAI)",
    logo: "https://randomuser.me/api/portraits/men/88.jpg",
  },
];

const ClientSection = () => (
  <section
    className="h-screen bg-black text-center flex flex-col justify-center py-16"
    id="clients"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-400 mb-12">
        Our Accreditation Partners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-400"
            />
            <p className="text-lg text-gray-200 text-center font-medium">
              {client.name}
            </p>
         
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientSection;
