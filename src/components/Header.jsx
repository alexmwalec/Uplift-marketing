import Layer3 from "../assets/images/Layer3.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
     <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

       <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-6 py-4">
  
   
  <div className="flex items-center space-x-3">
    <img src={Layer3} alt="MyApp Logo" className="h-10 w-auto" />

    <div className="flex flex-col leading-tight">
      <span className="font-bold text-l text-blue-600">UPLIFT</span>
      <span className="text-s text-gray-500">Marketing Agency</span>
    </div>
  </div>
 
  <nav className="hidden md:flex justify-center space-x-10">
    <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
    <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
    <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
    <Link to="/portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</Link>
    <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
  </nav>

  
  <div></div>
</div>

    </header>
  );
};

export default Header;
