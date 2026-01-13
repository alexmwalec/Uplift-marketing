import Layer3 from "../assets/images/Layer3.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
     <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo + Text */}
        <div className="flex items-center space-x-3">
          
          <img src={Layer3} alt="MyApp Logo" className="h-10 w-auto" />

          {/* Text next to logo */}
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-l text-blue-600">UPLIFT</span>
            <span className="text-s text-gray-500">Marketing Agency</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-10">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600">
            Services
          </Link>
          <Link to="/portfolio" className="text-gray-600 hover:text-blue-600">
            Portfolio
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Search Box */}
        <div className="ml-4 relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-3 pr-3 py-2 w-40 rounded-full bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
