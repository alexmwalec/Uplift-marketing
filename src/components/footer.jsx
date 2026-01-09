 import React from 'react';
import Layer3 from '../assets/images/Layer3.png';
function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* All sections in one row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* INFORMATION Column */}
          <div>
            <h3 className="text-base font-bold mb-3 text-white">INFORMATION</h3>
            <ul className="space-y-1">
              <li><a href="/company-profile" className="text-gray-300 hover:text-white transition text-sm">Company Profile</a></li>
              <li><a href="/business-packages" className="text-gray-300 hover:text-white transition text-sm">Business Packages</a></li>
              <li><a href="/branding-packages" className="text-gray-300 hover:text-white transition text-sm">Branding Packages</a></li>
              <li><a href="/website-packages" className="text-gray-300 hover:text-white transition text-sm">Website Packages</a></li>
            </ul>
          </div>

          {/* LEGAL Column */}
          <div>
            <h3 className="text-base font-bold mb-3 text-white">LEGAL</h3>
            <ul className="space-y-1">
              <li><a href="/terms-of-use" className="text-gray-300 hover:text-white transition text-sm">Terms of use</a></li>
              <li><a href="/business-license" className="text-gray-300 hover:text-white transition text-sm">Business License</a></li>
              <li><a href="/copyright-information" className="text-gray-300 hover:text-white transition text-sm">Copyright Information</a></li>
              <li><a href="/tpin-number" className="text-gray-300 hover:text-white transition text-sm">TPIN Number</a></li>
            </ul>
          </div>

          {/* SUPPORT Column */}
          <div>
            <h3 className="text-base font-bold mb-3 text-white">SUPPORT</h3>
            <ul className="space-y-1">
              <li><a href="/contact" className="text-gray-300 hover:text-white transition text-sm">Contact</a></li>
            </ul>
          </div>

          {/* SOCIAL MEDIA Column */}
          <div>
            <h3 className="text-base font-bold mb-3 text-white">SOCIAL MEDIA</h3>
            <ul className="space-y-1">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition text-sm">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition text-sm">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition text-sm">Twitter</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition text-sm">Pinterest</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition text-sm">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-blue-700 pt-6">
          {/* Logo and Agency Name in the same line with copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Agency Name on left */}
             <div className="flex items-center space-x-3">
                      
                      <img src={Layer3} alt="MyApp Logo" className="h-10 w-auto" />
            
                      {/* Text next to logo */}
                      <div className="flex flex-col leading-tight">
                        <span className="font-bold text-l text-blue-600">UPLIFT</span>
                        <span className="text-s text-gray-500">Marketing Agency</span>
                      </div>
                    
              
            </div>

            {/* Copyright centered in the middle on desktop, below on mobile */}
            <div className="text-center mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                Copyright 2024 - 2025 © UPLIFT Marketing Agency Company. All Rights Reserved
              </p>
            </div>

            {/* Empty div for spacing on desktop */}
            <div className="hidden md:block w-64"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;