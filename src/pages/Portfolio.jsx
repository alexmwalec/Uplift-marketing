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
      category: "Brand Identity",
    },
    {
      title: "Gianis Construction and Consultancy",
      image:
        "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=500",
      slug: "/portfolio/gianis",
      category: "Corporate Branding",
    },
    {
      title: "Lucky One Hotel",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=500",
      slug: "/portfolio/luckyone",
      category: "Hospitality Branding",
    },
  ];

  return (
    <div className="min-h-screen text-gray-800">

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center bg-gray-900">
        <img src={portfolio} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 text-center mx-auto">
          <h2 className="text-4xl text-white">Work That</h2>
          <h1 className="text-6xl font-extrabold text-white mt-2">
            Speaks for Itself
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-20 text-center">
          We design branding experiences that help businesses grow,
          connect, and lead their markets.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden"
            >
              <Link to={item.slug} className="block relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
                <span className="absolute bottom-4 left-4 bg-white px-4 py-1 text-xs font-bold rounded-full">
                  {item.category}
                </span>
              </Link>

              <div className="p-6">
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <Link
                  to={item.slug}
                  className="flex items-center gap-2 text-blue-700 font-semibold text-sm"
                >
                  Read more <ChevronRight size={16} />
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
