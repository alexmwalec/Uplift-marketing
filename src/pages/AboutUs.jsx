 import React, { useState, useEffect } from "react";
import Analysis2 from "../assets/images/analsysis2.jpg";
import Analysing from "../assets/images/Analysing.jpg";
import Communication from "../assets/images/Communication.jpg";
import LandingImage from "../assets/images/LandingImage.png";
import ContentMarketing from "../assets/images/Livemarketing.jpg";
import image1 from "../assets/images/image1.png";
import layer1 from "../assets/images/Layer1.png";
import layer3 from "../assets/images/Layer3.png";
import layer2 from "../assets/images/Layer2.png";
import layer4 from "../assets/images/Layer4.png";
import Footer from "../components/footer";
import teamimage from "../assets/images/team.jpg";
import Commimage from "../assets/images/Comm.jpg";
import { Link } from "react-router-dom";

function AboutUs() {
   
  return (
    <>
      {/* Slideshow Section */}
      <div className="w-full h-[700px] relative overflow-hidden">
        {/* Slideshow Image */}
        <img
          src={   Communication  }
          alt="CommunicationImage"
          className="w-full h-full object-cover"
        
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
          Transforming Brands Since 2020
        </div>

        
        
      </div>
 
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
     
        <section className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6">
            About Uplift Marketing Agency
          </h1>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Established in 2020, Uplift Marketing Agency believes in the power of
              strategy, creativity, and innovation to transform brands and accelerate
              business growth. We are a team of passionate marketers, strategists,
              and creatives committed to helping businesses unlock their full
              potential.
            </p>
            <p>
              Driven by purpose and collaboration, we combine strategic thinking
              with creative execution to help brands grow, compete, and stand out in
              today's dynamic marketplace.
            </p>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
           
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 md:mb-10 text-center">
            Inspiring What's Next
          </h2>
           
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10">
            
            <div className="w-full lg:w-1/2">
              <img
                src={image1}
                alt="Inspiring What's Next"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
              
            <div className="w-full lg:w-1/2">
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading marketing partner for businesses in Malawi, Africa and
                even globally, renowned for our creativity, integrity, and ability to
                transform brands into market leaders.
              </p>
            </div>
          </div>
        </section>
   
         {/* Our Core Values */}
<section className="relative mb-12 md:mb-16">
  
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${Commimage})` }}
  ></div>

  <div className="absolute inset-0 bg-blue-700/80"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-20 text-white">
    <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
      Our Core Values
    </h2>

    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
      {/* Value 1 */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white text-blue-700 font-bold flex items-center justify-center">
          1
        </div>
        <span className="text-lg md:text-xl">Innovation</span>
      </div>

      {/* Value 2 */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white text-blue-700 font-bold flex items-center justify-center">
          2
        </div>
        <span className="text-lg md:text-xl">Collaboration</span>
      </div>

      {/* Value 3 */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white text-blue-700 font-bold flex items-center justify-center">
          3
        </div>
        <span className="text-lg md:text-xl">Integrity</span>
      </div>

      {/* Value 4 */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white text-blue-700 font-bold flex items-center justify-center">
          4
        </div>
        <span className="text-lg md:text-xl">Customer Centricity</span>
      </div>
    </div>
  </div>
</section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center">
            Why We Stand Out?
          </h2>

           <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

               <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
  <img
    src={layer1}
    alt="Strategic Approach"
    className="w-24 h-24 mx-auto object-contain mb-4"
  />
  <h3 className="text-xl font-semibold text-blue-800 mb-4">
    Strategic Approach
  </h3>
  <p className="text-gray-600 leading-relaxed">
    We develop clear, data-driven marketing strategies tailored to your business
    goals. Our approach ensures every campaign delivers measurable results and
    long-term growth.
  </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
  <img
    src={layer2}
    alt="Creative Excellence"
    className="w-24 h-24 mx-auto object-contain mb-4"
  />
  <h3 className="text-xl font-semibold text-blue-800 mb-4">
    Creative Excellence
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Our creative team produces compelling content and innovative campaigns that
    capture attention, strengthen brand identity, and connect meaningfully with
    your target audience.
  </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
  <img
    src={layer3}
    alt="Client-Focused Solutions"
    className="w-24 h-24 mx-auto object-contain mb-4"
  />
  <h3 className="text-xl font-semibold text-blue-800 mb-4">
    Client-Focused Solutions
  </h3>
  <p className="text-gray-600 leading-relaxed">
    We understand that every business is unique. That’s why we design customized
    marketing solutions that align with your specific needs, challenges, and
    vision.
  </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
  <img
    src={layer4}
    alt="Results-Driven Performance"
    className="w-24 h-24 mx-auto object-contain mb-4"
  />
  <h3 className="text-xl font-semibold text-blue-800 mb-4">
    Results-Driven Performance
  </h3>
  <p className="text-gray-600 leading-relaxed">
    We focus on delivering real impact. Through continuous analysis and
    optimization, we ensure your marketing efforts generate growth, visibility,
    and strong return on investment.
  </p>
</div>

          </div>
        </section> 
<section className="w-full mt-16">
  <div className="relative w-full h-[800px]">
  <img
      src={teamimage}
      alt="Team collaboration"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30"></div>
 <div className="absolute inset-0 flex items-center justify-center px-4">
       <div className="bg-blue-700/25 backdrop-blur-sm text-white rounded-3xl px-8 py-6 max-w-3xl w-full flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        <p className="text-lg md:text-xl font-medium text-center md:text-left">
          Our team offers proven expertise with a successful track record across
          various industries. We provide tailored marketing solutions designed to
          meet your unique goals and challenges.
        </p>
        <Link to= '/contact'><button className="bg-pink-400 hover:bg-pink-600 transition-colors text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 whitespace-nowrap">
          Let work together
          <span className="text-xl">→</span>
        </button></Link>
        
      </div>
    </div>
  </div>
</section>        
      </div>
      <Footer />
    </>
  );
}
export default AboutUs;