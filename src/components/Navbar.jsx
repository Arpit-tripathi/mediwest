

// import React, { useState } from "react";
// import logo from "../assets/QARA.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen((prev) => !prev);

//   return (
//     <nav className="fixed w-full z-20 bg-black bg-opacity-70 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <img src={logo} alt="logo" className="h-16 w-16 object-contain" />
//         </div>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-8 text-blue-400 font-semibold">
//           <li>
//             <a
//               href="#home"
//               className="hover:text-blue-300 transition-colors duration-300"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               className="hover:text-blue-300 transition-colors duration-300"
//             >
//               About Us
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="hover:text-blue-300 transition-colors duration-300"
//             >
//               Contact Us
//             </a>
//           </li>
//         </ul>

//         {/* Hamburger Button (Mobile Only) */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-blue-400 focus:outline-none z-30 relative"
//           >
//             {/* Hamburger Icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-black  transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out z-40 flex flex-col`}
//       >
//         {/* Close Button */}
//         <div className="flex justify-end p-4">
//           <button
//             onClick={toggleMenu}
//             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Menu Links */}
//         <ul className="flex flex-col items-center justify-center flex-grow space-y-8 text-blue-400 font-semibold text-lg">
//           <li>
//             <a
//               href="#home"
//               onClick={toggleMenu}
//               className="hover:text-blue-300 transition-colors duration-300"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               onClick={toggleMenu}
//               className="hover:text-blue-300 transition-colors duration-300"
//             >
//               About Us
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               onClick={toggleMenu}
//               className="hover:text-blue-300 transition-colors duration-300"
//             >
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import logo from "../assets/QARA.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen((prev) => !prev);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-30 bg-black/70 backdrop-blur-md border-b border-blue-500/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <img
//             src={logo}
//             alt="QARA Logo"
//             className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
//           />
//         </div>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-8 text-blue-400 font-semibold tracking-wide">
//           {["home", "about", "contact"].map((item) => (
//             <li key={item}>
//               <a
//                 href={`#${item}`}
//                 className="hover:text-blue-300 transition-colors duration-300"
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
//                 {item === "contact" ? "Us" : " "}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger (Mobile Only) */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-blue-400 focus:outline-none relative z-40"
//           aria-label="Toggle Menu"
//         >
//           {!isOpen ? (
//             // Hamburger Icon
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           ) : (
//             // Close Icon
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-5 right-0 h-full w-full sm:w-full bg-black/95 backdrop-blur-xl transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out z-30 flex flex-col shadow-lg border-l border-blue-500/20`}
//       >
//         <ul className="flex flex-col items-center justify-center flex-grow space-y-8 text-blue-400 font-semibold text-lg">
//           {["home", "about", "contact"].map((item) => (
//             <li key={item}>
//               <a
//                 href={`#${item}`}
//                 onClick={toggleMenu}
//                 className="hover:text-blue-300 transition-colors duration-300"
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
//                 {item === "contact" ? "Us" : " "}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import logo from "../assets/QARA.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-black/80 backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="QARA Logo"
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-blue-400 font-semibold tracking-wide">
          {["home", "about", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                {item === "contact" ? "Us" : ""}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (visible only when menu is closed) */}
        {!isOpen && (
          <button
            onClick={toggleMenu}
            className="md:hidden text-blue-400 focus:outline-none relative z-40"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-30 flex flex-col`}
      >
        {/* Close Button (inside the menu) */}
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMenu}
            className="text-blue-400 hover:text-blue-300"
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col items-center justify-center flex-grow space-y-8 text-blue-400 font-semibold text-lg">
          {["home", "about", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={toggleMenu}
                className="hover:text-blue-300 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                {item === "contact" ? "Us" : ""}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
