import Layer3 from '../assets/images/Layer3.png';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';

function Footer() {
  const location = useLocation();

  // Smooth scroll for hash links
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* INFORMATION Column */}
          <div>
            <h3 className="text-base font-bold mb-3 text-white">INFORMATION</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/services#digital-marketing" className="text-gray-300 hover:text-white transition text-sm">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link to="/services#business-packages" className="text-gray-300 hover:text-white transition text-sm">
                  Business Packages
                </Link>
              </li>
              <li>
                <Link to="/services#branding" className="text-gray-300 hover:text-white transition text-sm">
                  Branding Packages
                </Link>
              </li>
              <li>
                <Link to="/services#website-packages" className="text-gray-300 hover:text-white transition text-sm">
                  Website Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL Column */}
          <div>
            <h3 className="text-base font-bold mb-3 text-white">LEGAL</h3>
            <ul className="space-y-1">
              <li><Link to="/terms-of-use" className="text-gray-300 hover:text-white transition text-sm">Terms of use</Link></li>
              <li><Link to="/business-license" className="text-gray-300 hover:text-white transition text-sm">Business License</Link></li>
              <li><Link to="/copyright-information" className="text-gray-300 hover:text-white transition text-sm">Copyright Information</Link></li>
              <li><Link to="/tpin-number" className="text-gray-300 hover:text-white transition text-sm">TPIN Number</Link></li>
            </ul>
          </div>

          {/* SUPPORT Column */}
          <div>
            <h3 className="text-base font-bold mb-3 text-white">SUPPORT</h3>
            <ul className="space-y-1">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* SOCIAL MEDIA Column */}
          <div>
            <h3 className="text-base font-bold mb-3 text-white">SOCIAL MEDIA</h3>
            <ul className="space-y-1">
              <li>
                <a href="https://www.facebook.com/share/1D3JTTx1CH/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition text-sm">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/uplift_marketing_agency?igsh=ZGR4MHg3cTZxNjll" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/agency_upl25776" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition text-sm">
                  Tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-blue-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Agency Name */}
            <div className="flex items-center space-x-3">
              <img src={Layer3} alt="MyApp Logo" className="h-10 w-auto" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-l text-blue-300">UPLIFT</span>
                <span className="text-s text-white">Marketing Agency</span>
              </div>
            </div>

            <div className="text-center mb-4 md:mb-0">
              <p className="text-white text-sm">
                Copyright 2026 © UPLIFT Marketing Agency Company. All Rights Reserved
              </p>
            </div>

            <div className="hidden md:block w-64"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
