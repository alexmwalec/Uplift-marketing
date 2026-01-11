import portfolio from "../assets/images/portfolio.jpg";
import Footer from "../components/footer";

const RoyalSteel = () => {
  

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
      <main className="max-w-6xl mx-auto px-10 py-20 text-center">
        <h1 className=" text-3xl md:text-5xl lg:text-4xl text-blue-800 font-bold"> Royal Steel Company Limited</h1>
        <br/>
        <br/><br/><br/>
         <h2 className="text-4xl text-blue-800 mb-6">
          Brand Identity & Digital Marketing 
        </h2>

      </main>
      <Footer />  
      </div>
      )
    }
export default RoyalSteel;