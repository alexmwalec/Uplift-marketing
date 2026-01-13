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
      slug: "/portfolio/royalsteel",
      category: "Brand Identity"
    },
    {
      title: "Gianis Construction and Consultancy",
      image:
        "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=500",
      slug: "/portfolio/gianis",
      category: "Corporate Branding"
    },
    {
      title: "Lucky One Hotel",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=500",
      slug: "/portfolio/luckyone",
      category: "Hospitality Branding"
    }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[80vh] flex items-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src={portfolio}
            alt="Portfolio Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-white">
            Work That
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-2">
            Speaks for Itself
          </h1>
        </div>
      </section>

      {/* ================= PORTFOLIO CONTENT ================= */}
      <main className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-justify text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-20">
          At Uplift Marketing Agency, we don’t just create campaigns — we deliver
          measurable results. Our portfolio showcases impactful branding, digital
          marketing, and web development projects designed to help businesses
          grow and stand out.
        </p>

        <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
          Brand Identity & Design
        </h2>
        <p className="text-gray-500 text-xl mb-16">
          Strong, memorable brand identities crafted to connect with audiences
          and dominate competitive markets.
        </p>

        {/* ================= PROFESSIONAL CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-12 mb-28">
          {projects.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white
                rounded-3xl
                overflow-hidden
                border border-gray-100
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Link to={item.slug}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-700
                    "
                  />
                </Link>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Category */}
                <span className="
                  absolute
                  bottom-4
                  left-4
                  bg-white/90
                  text-blue-800
                  text-xs
                  font-bold
                  px-4
                  py-1
                  rounded-full
                  tracking-wide
                ">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 text-left flex flex-col justify-between min-h-[160px]">
                <h4 className="text-xl font-bold text-gray-800 leading-snug mb-4">
                  {item.title}
                </h4>

                <Link
                  to={item.slug}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-blue-700
                    font-semibold
                    text-sm
                    hover:text-blue-900
                    transition
                  "
                >
                  Read more
                  <ChevronRight className="w-4 h-4" />
                </Link>
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
