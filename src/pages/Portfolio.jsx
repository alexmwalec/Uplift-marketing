import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import portfolio from "../assets/images/portfolio.jpg";
import Royalsteel from "../assets/images/Royal1.jpeg";
import Footer from "../components/footer";

const Portfolio = () => {
  const projects = [
    {
      title: "Royal Steel Company Limited",
      image: Royalsteel,
      slug:"/portfolio/royalsteel"
    },
    {
      title: "Gianis Construction and Consultancy",
      image: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Lucky One Hotel",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800">
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

      {/* --- PORTFOLIO CONTENT --- */}
      <main className="max-w-6xl mx-auto px-10 py-20 text-center">
        <p className="text-justify text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-16">
          At Uplift Marketing Agency, we don't just create campaigns; we deliver
          measurable results. Our portfolio showcases a diverse range of projects
          across branding, digital marketing, and web development, each tailored
          to help our clients grow, engage, and succeed.
        </p>

        <h2 className="text-4xl font-bold text-blue-800 mb-6">
          Brand Identity & Design
        </h2>
        <p className="text-gray-500 text-xl mb-4">
          We craft strong, memorable brand identities that connect with audiences
          and stand out in competitive markets.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-700 mb-6">
            Deliverables
          </h3>
          <p className="text-gray-500 italic text-sm">
            Logo design, brand guidelines, marketing materials, social media
            creatives.
          </p>
        </div>
<div className="grid md:grid-cols-3 gap-8 mb-20">
  {projects.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
    >
      {/* Image clickable */}
      <Link to={item.slug} className="block h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </Link>

      <div className="p-6 text-left flex flex-col justify-between flex-grow">
        <h4 className="font-bold text-gray-800 text-lg leading-tight mb-4">
          {item.title}
        </h4>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-gray-400">See more...</span>

          {/* Chevron clickable */}
          <Link
            to={item.slug}
            className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition"
          >
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
