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




import Card from './Card';
import SplitText from "./SplitText";
import LiquidEther from './LiquidEther';

const Hero = () => {
  // const services = ["QCI", "NABH", "CGHS", "ECHS", "QAI"];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden">
      {/* LiquidEther Background Layer */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 mb-6">
          Empowering Healthcare Accreditation
        </h1>
        <p className="text-gray-300 mb-12">
          QARA Healthcare specializes in consultancy for top accreditation bodies.
        </p>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map(service => (
            <Card key={service} title={service} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
