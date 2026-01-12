import React from "react";
import {
  ArrowRight,
  Download,
  Layout,
  Search,
  MousePointer2
} from "lucide-react";

const Services = () => {
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
        {/* ================= DIGITAL MARKETING ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
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
                  <h3 className="text-2xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 max-w-2xl mb-3">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-slate-400 font-bold hover:text-blue-600 transition uppercase tracking-wider text-xs">
                    See Our Portfolio <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg transition">
            Let's Work Together <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <hr className="border-gray-300 max-w-7xl mx-auto" />
      {/* ================= BRANDING PACKAGES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
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

                <h4 className="text-xl font-black mb-4 leading-tight">
                  {pkg.name}
                </h4>

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

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl transition">
            Let's Grow Your Brand <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
         {/* ================= DIGITAL MARKETING ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h1 className="text-5xl text-center font-extrabold text-blue-800 mb-6">
            Content Marketing
          </h1>
          <p className="text-gray-600 text-lg text-center">
            Engaging, informative content creation to build authority and strengthen customer relationships.
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
                  <h3 className="text-2xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 max-w-2xl mb-3">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-slate-400 font-bold hover:text-blue-600 transition uppercase tracking-wider text-xs">
                    See Our Portfolio <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg transition">
            Let's Work Together <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <hr className="border-gray-300 max-w-7xl mx-auto" />
    </div>
  );
};

export default Services;
