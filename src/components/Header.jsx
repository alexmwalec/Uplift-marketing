 import { useState } from "react";
import Layer3 from "../assets/images/Layer3.png";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo Section - Left side */}
          <div className="flex items-center space-x-3">
            <img src={Layer3} alt="MyApp Logo" className="h-10 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg sm:text-xl text-blue-600">UPLIFT</span>
              <span className="text-sm text-gray-500">Marketing Agency</span>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex justify-center space-x-8 lg:space-x-10">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Services</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Portfolio</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</Link>
          </nav>

          {/* Mobile Menu Button - Right aligned within third column */}
          <div className="flex justify-end">
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden
        ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `} onClick={() => setIsMenuOpen(false)} />

      {/* Mobile Slide-in Menu */}
      <div className={`
        fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 
        transform transition-transform duration-300 ease-in-out md:hidden
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col p-6 space-y-6 mt-4">
          <Link to="/" className="text-lg font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-lg font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/services" className="text-lg font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" className="text-lg font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
          <Link to="/contact" className="text-lg font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;