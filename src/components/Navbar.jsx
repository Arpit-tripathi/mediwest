// import logo from "../assets/QARA.png"

// const Navbar = () => (
//   <nav className="bg-black text-white shadow-md fixed w-full z-10 bg-transparent">
//     <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//     <img src={logo} alt="logo"  className="h-16 w-16"/>
//       {/* <h1 className="text-2xl font-bold text-blue-700">MediWest</h1> */}
//       <ul className="flex space-x-6 text-gray-700 font-medium">
//         <li><a href="#home" className="hover:text-blue-500">Home</a></li>
//         <li><a href="#about" className="hover:text-blue-500">About Us</a></li>
//         <li><a href="#contact" className="hover:text-blue-500">Contact Us</a></li>
//       </ul>
//     </div>
//   </nav>
// );

// export default Navbar;



import logo from "../assets/QARA.png";

const Navbar = () => (
  <nav className="fixed w-full z-20 bg-transparent backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="logo" className="h-14 w-14 object-contain" />
        {/* <h1 className="text-2xl font-bold text-blue-500 tracking-wide">
          MediWest
        </h1> */}
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-blue-400 font-semibold">
        <li>
          <a
            href="#home"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
