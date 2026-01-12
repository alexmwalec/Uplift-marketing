import { Helmet } from "react-helmet-async";

import portfolio from "../assets/images/portfolio.jpg";
import Footer from "../components/footer";

// LOGOS
import logoDark from "../assets/images/Royalsteel.png";
import logoYellow from "../assets/images/Royal1.jpeg";
import logoWhite from "../assets/images/Royal2.jpeg";
import logoRed from "../assets/images/Royal3.jpeg";

// PROFILE
import Royalsteel from "../assets/images/Royalsteel.png";

// ADS
import Royalsteel1 from "../assets/images/Royal1.jpeg";
import Royal2 from "../assets/images/Royal2.jpeg";
import Royal3 from "../assets/images/Royal3.jpeg";
import Royal4 from "../assets/images/Royal4.jpeg";
import Royal5 from "../assets/images/Royal5.jpeg";
import Royal6 from "../assets/images/Royal6.jpeg";

const RoyalSteel = () => {
  const logoVariants = [
    { image: logoDark, bg: "bg-white", alt: "Royal Steel Logo Dark" },
    { image: logoYellow, bg: "bg-[#FFC107]", alt: "Royal Steel Logo Yellow" },
    { image: logoWhite, bg: "bg-slate-900", alt: "Royal Steel Logo White" },
    { image: logoRed, bg: "bg-red-700", alt: "Royal Steel Logo Red" },
  ];

  const socialAds = [
    Royalsteel1,
    Royal2,
    Royal3,
    Royal4,
    Royal5,
    Royal6,
  ];

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* 🔹 SEO */}
      <Helmet>
        <title>Royal Steel Company | Brand Identity & Design | Uplift Marketing</title>
        <meta
          name="description"
          content="Brand identity, logo design, company profile, and social media creatives developed for Royal Steel Company by Uplift Marketing Agency."
        />
        <meta
          name="keywords"
          content="Royal Steel, Brand Design, Logo Design, Company Profile, Marketing Agency Malawi"
        />
        <link
          rel="canonical"
          href="https://upliftmarketingmw.com/portfolio/royalsteel"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Royal Steel | Brand Identity & Design" />
        <meta
          property="og:description"
          content="See how Uplift Marketing crafted a strong industrial brand identity for Royal Steel Company."
        />
        <meta property="og:image" content={portfolio} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- HERO SECTION --- */}
           <section className="relative min-h-[80vh] flex items-center bg-gray-900">
             {/* Background Image with Overlay */}
             <div className="absolute inset-0 z-0">
               <img
                 src={portfolio}
                 alt="Portfolio Background"
                 className="w-full h-full object-cover opacity-40"
               />
             </div>
     
             <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
               <h2 className="text-3xl md:text-3xl lg:text-6xl text-white">
                 Work That
               </h2>
               <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                 Speaks for Itself
               </h1>
             </div>
           </section>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* LOGO DESIGN */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Logo Design</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We designed a bold and professional logo representing durability,
              precision, and trust.
            </p>
          </div>

          <div className="grid grid-cols-2 rounded-xl overflow-hidden shadow-2xl border border-slate-100">
            {logoVariants.map((logo, index) => (
              <div
                key={index}
                className={`${logo.bg} p-12 flex items-center justify-center border border-slate-100`}
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="max-h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* COMPANY PROFILE */}
        <section className="relative -mx-6 px-6 py-24 bg-slate-50 rounded-[3rem] mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src={Royalsteel}
              alt="Royal Steel Company Profile Design"
              className="w-full rounded-xl shadow-lg"
            />

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">
                Company Profile
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                A professionally designed company profile showcasing Royal
                Steel’s expertise and industrial strength.
              </p>
            </div>
          </div>
        </section>

        {/* SOCIAL MEDIA ADS */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-900">Social Media Ads</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialAds.map((ad, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition"
              >
                <img
                  src={ad}
                  alt={`Royal Steel Social Media Ad ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RoyalSteel;
