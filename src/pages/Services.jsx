import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Download,
} from "lucide-react";
import Livemarketing from "../assets/images/Livemarketing.jpg";
import MarketingStrategy from "../assets/images/Marketing.jpg";
import Footer from "../components/footer";

const Services = () => {
  const location = useLocation();


  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const marketingServices = [
    {
      id: 1,
      title: "Website Development",
      description:
        "We design and develop modern, responsive websites that are fast, user-friendly, and conversion-focused."
    },
    {
      id: 2,
      title: "Search Engine Optimization (SEO)",
      description:
        "We optimize your website and content to improve search engine rankings, increase organic visibility, and attract high-quality traffic."
    },
    {
      id: 3,
      title: "Pay-Per-Click Advertising (PPC)",
      description:
        "We plan, manage, and optimize targeted PPC campaigns that drive immediate traffic and measurable results."
    }
  ];

  const packages = [
    {
      id: 1,
      name: "Starter Branding Package",
      features: [
        "Basic Logo Design",
        "Simple Color Palette",
        "Basic Typography Guide",
        "Business Card Design (Digital)",
        "Social Media Profile Picture"
      ]
    },
    {
      id: 2,
      name: "Essential Branding Package",
      features: [
        "Logo Design (2 variations)",
        "Full Color Palette (3 colors)",
        "Basic Typography Guide",
        "Social Media Profile & Cover",
        "Flyer or Poster Template"
      ]
    },
    {
      id: 3,
      name: "Growth Branding Package",
      features: [
        "Logo Design (3 variations)",
        "Full Color Palette (5 colors)",
        "Typography Guide",
        "Social Media Kit",
        "Email Signature Design",
        "Price List Design"
      ]
    },
    {
      id: 4,
      name: "Advanced Branding Package",
      features: [
        "Logo Design (5 variations)",
        "Comprehensive Typography System",
        "100 Business Cards",
        "Social Media Kit (5 Templates)",
        "Packaging Design",
        "Brand Style Guide"
      ]
    },
    {
      id: 5,
      name: "Premium Branding Package",
      features: [
        "Logo System (up to 7 variations)",
        "Extensive Color Palette",
        "Complete Typography System",
        "Marketing Materials",
        "Packaging & Label Design",
        "Uniform & Signage Design",
        "Customer Scripts"
      ]
    },
    {
      id: 6,
      name: "Brand Identity Design Package",
      features: [
        "Logo Design",
        "Color Palette",
        "Typography Guide",
        "Business Card Design",
        "Social Media Kit",
        "Website Banner",
        "Flyer / Poster Design",
        "Email Signature",
        "Full Brand Style Guide"
      ]
    }
  ];

  const scrollingPackages = [...packages, ...packages];

  return (
    <div className="bg-white text-slate-900 font-sans">
      <Helmet>
        <title>Our Services | Uplift Marketing Agency</title>
        <meta
          name="description"
          content="Digital Marketing, Graphic Design & Branding, Content Marketing and Marketing Strategy services by Uplift Marketing Agency."
        />
      </Helmet>

      {/* ================= HERO/HEADER ================= */}
      <section className="relative min-h-[70vh] flex items-center bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={Livemarketing}
            alt="Uplift Marketing Services"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            We help businesses grow through digital marketing, branding, content creation, and strategic planning.
          </p>
        </div>
      </section>

      {/* ================= DIGITAL MARKETING ================= */}
      <section id="digital-marketing" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h1 className="text-center text-5xl font-extrabold text-blue-800 mb-6">
            Digital Marketing
          </h1>
          <p className="text-slate-500 text-center text-justify text-lg leading-relaxed">
            From SEO and PPC to social media marketing, we build digital
            strategies that drive traffic, leads, and sales.
          </p>
        </div>

        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-blue-900">We handle:</h2>

          <div className="space-y-10">
            {marketingServices.map((service) => (
              <div key={service.id} className="flex gap-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  {service.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-500 max-w-2xl mb-3">
                    {service.description}
                  </p>
                  <Link to="/portfolio"><button className="flex items-center gap-2 text-slate-400 font-bold hover:text-blue-600 transition uppercase tracking-wider text-xs">
                    See Our Portfolio <ArrowRight className="w-4 h-4" />
                  </button></Link>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
       <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 p-8 rounded-3xl">
          <button className="flex items-center gap-3 text-slate-600 font-bold hover:text-blue-900 transition">
            <Download className="w-6 h-6" />
            Click here to download the document
          </button>

          <Link to="/contact">
            <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl transition">
              Let's Work Together<ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      <hr className="border-gray-300 max-w-7xl mx-auto" />

      {/* ================= BRANDING PACKAGES ================= */}
      <section id="branding" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-extrabold text-blue-800 mb-4">
            Graphic Design & Branding
          </h2>
          <p className="text-slate-500 text-lg">
            We craft memorable brand identities that resonate with your audience.
          </p>
        </div>

        <h3 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Here is Our Branding Packages:
        </h3>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 w-max animate-scroll-x pause-on-hover">
            {scrollingPackages.map((pkg, index) => (
              <div
                key={index}
                className="w-[320px] bg-white border border-slate-100 rounded-2xl p-8
                           hover:shadow-2xl transition-all hover:-translate-y-2
                           flex flex-col"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-black text-xl mb-6">
                  {pkg.id}
                </div>

                <h4 className="text-xl font-black mb-4 leading-tight">{pkg.name}</h4>

                <ul className="space-y-3 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-slate-500 text-sm border-l-2 border-blue-50 pl-3"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 p-8 rounded-3xl">
          <button className="flex items-center gap-3 text-slate-600 font-bold hover:text-blue-900 transition">
            <Download className="w-6 h-6" />
            Click here to download the document
          </button>

          <Link to="/contact">
            <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl transition">
              Let's Grow Your Brand <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      {/* ================= CONTENT MARKETING ================= */}
      <section id="content-marketing" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h1 className="text-5xl text-center font-extrabold text-blue-800 mb-6">
            Content Marketing
          </h1>
          <p className="text-gray-600 text-lg text-center">
            Engaging, informative content creation to build authority and strengthen customer relationships.
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <img
                src={Livemarketing}
                alt="Live Content Marketing"
                className="w-full h-[320px] sm:h-[420px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-full max-w-5xl flex justify-end">
            <Link to="/contact">
              <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg transition">
                Work with us <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-gray-300 max-w-7xl mx-auto" />

      {/* ================= MARKETING STRATEGY ================= */}
      <section id="marketing-strategy" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h1 className="text-5xl text-center font-extrabold text-blue-800 mb-6">
            Marketing Strategy
          </h1>
          <p className="text-gray-600 text-lg text-center">
            Custom strategies aligned with your business goals, ensuring measurable growth and sustainability.
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <img
                src={MarketingStrategy}
                alt="Live Content Marketing"
                className="w-full h-[320px] sm:h-[420px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-full max-w-5xl flex justify-end">
            <Link to="/contact">
              <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg transition">
                Work with us <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        <br />
        <br />

        <h2 className="font-semibold text-blue-600 text-3xl">Let’s dive into our business Packages</h2>
        <br />
        <p className="text-justify text-gray-600">
          Uplift Marketing Agency has various packages for various business levels such as The Seedling, the Momentum, The Titan, and the Flash Packages. We also give The Ads On package for clients interested to take their business further. Click the Link below to download the package details.
        </p>
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl">
          <button className="flex items-center gap-3 text-slate-600 font-bold hover:text-blue-900 transition">
            <Download className="w-6 h-6" />
            Click here to download the document
          </button>
        </div>
        <br />
        <br />
      </section>

      <Footer />
    </div>
  );
};

export default Services;
