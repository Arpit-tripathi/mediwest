
// import './App.css'
// import AboutUs from './components/AboutUs'
// import ClientSection from './components/ClientSection'
// import Hero from './components/Hero'
// import Navbar from './components/Navbar'
// import TestimonialCarousel from './components/TestimonialCarousel'
// import Tree from './components/Tree'

// function App() {
 

//   return (
//    <>
    
//     <Navbar />
    
//     <Hero />
//     <Tree/>
//     <TestimonialCarousel/>
//     <ClientSection/>
//     <AboutUs/>
//     {/* <section id="about" className="py-16 bg-white text-center">
//       <h2 className="text-3xl font-bold text-blue-700 mb-4">About Us</h2>
//       <p className="max-w-3xl mx-auto text-gray-600">
//         MediWest is a trusted consultancy firm guiding healthcare institutions through QCI, NABH, CGHS, ECHS, and QAI accreditation processes with precision and care.
//       </p>
//     </section> */}
//     <section id="contact" className="py-16 bg-blue-50 text-center">
//       <h2 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h2>
//       <p className="max-w-3xl mx-auto text-gray-600">
//         Reach out to us at <span className="text-blue-600 font-medium">contact@mediwest.in</span> or call <span className="text-blue-600 font-medium">+91-9876543210</span>.
//       </p>
//     </section>

//    </>
//   )
// }

// export default App



import './App.css'
import AboutUs from './components/AboutUs'
import ClientSection from './components/ClientSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TestimonialCarousel from './components/TestimonialCarousel'
import Tree from './components/Tree'
import About from './components/About'
import FAQ from './components/Faq'
import FoundersPage from './components/Founder'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

function App() {
  return (
   <>
    <Navbar />
    <Hero />
    <About/>
    <FAQ/>
    {/* <Tree/> */}
    <TestimonialCarousel/>
    <ClientSection/>
    <FoundersPage/>
    <ContactPage/>
    <Footer/>
    {/* <AboutUs/> */}
    {/* <section id="contact" className="h-screen bg-black text-center flex items-center justify-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Contact Us</h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          Reach out to us at <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors">contact@QARAheathcare.in</span> or call <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors">+91-9876543210</span>.
        </p>
      </div>
    </section> */}
   </>
  )
}

export default App