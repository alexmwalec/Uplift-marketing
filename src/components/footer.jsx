import Layer3 from '../assets/images/Layer3.png';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">

          {/* INFORMATION */}
          <div>
            <h3 className="text-base font-bold mb-3">INFORMATION</h3>
            <ul className="space-y-1">
              <li>
                <a href="/services#digital-marketing" className="text-gray-300 hover:text-white text-sm">
                  Company Profile
                </a>
              </li>
              <li>
                <a href="/services#business-packages" className="text-gray-300 hover:text-white text-sm">
                  Business Packages
                </a>
              </li>
              <li>
                <a href="/services#branding" className="text-gray-300 hover:text-white text-sm">
                  Branding Packages
                </a>
              </li>
              <li>
                <a href="/services#website-packages" className="text-gray-300 hover:text-white text-sm">
                  Website Packages
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-base font-bold mb-3">LEGAL</h3>
            <ul className="space-y-1">
              <li><a href="/terms-of-use" className="text-gray-300 text-sm">Terms of use</a></li>
              <li><a href="/business-license" className="text-gray-300 text-sm">Business License</a></li>
              <li><a href="/copyright-information" className="text-gray-300 text-sm">Copyright</a></li>
              <li><a href="/tpin-number" className="text-gray-300 text-sm">TPIN Number</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-base font-bold mb-3">SUPPORT</h3>
            <ul className="space-y-1">
              <li><a href="/contact" className="text-gray-300 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-base font-bold mb-3">SOCIAL MEDIA</h3>
            <ul className="space-y-1">
              <li><a href="https://www.facebook.com/share/1D3JTTx1CH/" target="_blank" className="text-gray-300 text-sm">Facebook</a></li>
              <li><a href="https://www.instagram.com/uplift_marketing_agency" target="_blank" className="text-gray-300 text-sm">Instagram</a></li>
              <li><a href="https://x.com/agency_upl25776" target="_blank" className="text-gray-300 text-sm">Twitter</a></li>
              <li><a href="#" className="text-gray-300 text-sm">TikTok</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-blue-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={Layer3} alt="UPLIFT Logo" className="h-10" />
            <div>
              <p className="font-bold text-blue-300">UPLIFT</p>
              <p className="text-sm">Marketing Agency</p>
            </div>
          </div>

          <p className="text-sm mt-4 md:mt-0">
            © 2026 UPLIFT Marketing Agency. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
