// import Card from './Card';
// import SplitText from "./SplitText"
// import LiquidEther from './LiquidEther';


// const Hero = () => {
//   const services = ["QCI", "NABH", "CGHS", "ECHS", "QAI"];

//   return (
//     <section id="home" className="pt-24 pb-16 bg-black relative ">
 
//       <div className="max-w-7xl mx-auto px-4 text-center bg-transparent">
   
//         <h1 className="text-4xl font-bold text-blue-800 mb-6">Empowering Healthcare Accreditation</h1>
//         <p className="text-gray-600 mb-10">MediWest specializes in consultancy for top accreditation bodies.</p>
//         <div style={{ width: '100%', height: 600, position: 'relative' }}>
//   <LiquidEther
//     colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
//     mouseForce={20}
//     cursorSize={100}
//     isViscous={false}
//     viscous={30}
//     iterationsViscous={32}
//     iterationsPoisson={32}
//     resolution={0.5}
//     isBounce={false}
//     autoDemo={true}
//     autoSpeed={0.3}
//     autoIntensity={2.2}
//     takeoverDuration={0.25}
//     autoResumeDelay={3000}
//     autoRampDuration={0.6}
//   />
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {services.map(service => <Card key={service} title={service} />)}
//         </div>
// </div>
      
//       </div>

      
//     </section>
//   );
// };

// export default Hero;




// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import LiquidEther from "./LiquidEther";

// const Hero = () => {
//   const [showEffect, setShowEffect] = useState(false);

//   // ✅ Render only after client-side mount to avoid SSR issues
//   useEffect(() => {
//     setShowEffect(true);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative flex flex-col justify-center items-center min-h-screen w-full bg-black overflow-hidden"
//     >
//       {/* LiquidEther Background Layer */}
//       {showEffect && (
//         <div className="absolute inset-0 z-0 w-full h-full">
//           <LiquidEther
//             colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
//             mouseForce={20}
//             cursorSize={100}
//             isViscous={false}
//             viscous={30}
//             iterationsViscous={32}
//             iterationsPoisson={32}
//             resolution={0.5}
//             isBounce={false}
//             autoDemo={true}
//             autoSpeed={0.3}
//             autoIntensity={2.2}
//             takeoverDuration={0.25}
//             autoResumeDelay={3000}
//             autoRampDuration={0.6}
//           />
//         </div>
//       )}

//       {/* Dark Overlay for contrast (optional but improves readability) */}
//       <div className="absolute inset-0 bg-black/60 z-10"></div>

//       {/* Foreground Content */}
//       <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-400 mb-4 md:mb-6 leading-tight">
//           Empowering Healthcare Accreditation
//         </h1>
//         <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 md:mb-12">
//           QARA Healthcare specializes in consultancy for NABH, QCI, and QAI accreditation — helping hospitals across India achieve excellence.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;





// import SplitText from "./SplitText";
// import LiquidEther from "./LiquidEther";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative flex flex-col justify-center items-center bg-black overflow-hidden w-screen max-w-full"
//       style={{
//         height: "100dvh",
//       }}
//     >
//       {/* LiquidEther Background */}
//       <div
//         className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
//         style={{
//           width: "100%",
//           height: "100%",
//           overflow: "hidden",
//         }}
//       >
//         <LiquidEther
//           colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
//           mouseForce={20}
//           cursorSize={100}
//           isViscous={false}
//           viscous={30}
//           iterationsViscous={32}
//           iterationsPoisson={32}
//           resolution={0.5}
//           isBounce={false}
//           autoDemo={true}
//           autoSpeed={0.3}
//           autoIntensity={2.2}
//           takeoverDuration={0.25}
//           autoResumeDelay={3000}
//           autoRampDuration={0.6}
//         />
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-blue-500 mb-4 md:mb-6">
//           Empowering Healthcare Accreditation
//         </h1>
//         <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 md:mb-12">
//           QARA Healthcare specializes in consultancy for top accreditation bodies.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero




import React, { useEffect, useRef, useState } from "react";
import LiquidEther from "./LiquidEther";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex flex-col justify-center items-center min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Background Effect */}
      {mounted && (
        <div
          className="absolute inset-0 z-0"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={80}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={1.8}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
      )}

      {/* Black overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Text Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-400 mb-4 leading-tight">
          Empowering Healthcare Accreditation
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8">
          QARA Healthcare specializes in consultancy for NABH, QCI, and QAI accreditation —
          helping hospitals across India achieve excellence.
        </p>
      </div>
    </section>
  );
};

export default Hero;
