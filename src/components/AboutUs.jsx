// import React from 'react';

// const AboutUs = () => (
//   <section id="about" className="py-16 bg-white text-center">
//     <h2 className="text-3xl font-bold text-blue-700 mb-6">About Us</h2>
//     <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
//       <img
//         src="https://randomuser.me/api/portraits/men/47.jpg"
//         alt="Founder"
//         className="w-40 h-40 rounded-full object-cover shadow-md"
//       />
//       <div className="text-left">
//         <h3 className="text-xl font-semibold text-blue-800 mb-2">Mr. Himanshu Sharma</h3>
//         <p className="text-gray-700 mb-4">
//           Founder of MediWest, Mr. Sharma is a licensed pharmacist with a Master’s degree in Hospital Management. With over a decade of experience in healthcare operations, accreditation consulting, and policy compliance, he brings deep insight and strategic guidance to institutions seeking QCI, NABH, CGHS, ECHS, and QAI certifications.
//         </p>
//         <p className="text-gray-600">
//           His passion lies in bridging quality standards with practical implementation. Under his leadership, MediWest has helped dozens of hospitals and clinics streamline documentation, improve patient safety protocols, and achieve national recognition.
//         </p>
//       </div>
//     </div>
//   </section>
// );

// export default AboutUs;


import React from 'react';

const AboutUs = () => (
  <section id="about" className="h-screen bg-black text-center flex items-center justify-center">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-400 mb-8">Founder</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://randomuser.me/api/portraits/men/47.jpg"
          alt="Founder"
          className="w-40 h-40 rounded-full object-cover shadow-lg border-2 border-blue-400"
        />
        <div className="text-left">
          <h3 className="text-xl font-semibold text-blue-300 mb-4">Mr. Himanshu Sharma</h3>
          <p className="text-gray-300 mb-4">
            Founder of QARA Healthcare, Mr. Sharma is a licensed pharmacist with a Master's degree in Hospital Management. With over a decade of experience in healthcare operations, accreditation consulting, and policy compliance, he brings deep insight and strategic guidance to institutions seeking QCI, NABH, CGHS, ECHS, and QAI certifications.
          </p>
          <p className="text-gray-400">
            His passion lies in bridging quality standards with practical implementation. Under his leadership, QARA Healthcare has helped dozens of hospitals and clinics streamline documentation, improve patient safety protocols, and achieve national recognition.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;