import contact from "../assets/images/Contact.jpg";
import { useState } from "react";
import Footer from "../components/footer";  
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      details:[<a href="mailto:upliftmarketingagent9@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">upliftmarketingagency6@gmail.com</a>],
      description: "We'll respond within 24 hours"
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      details: ["+265 (0) 998 00 11 34", "+265 (0) 882 91 60 33"],
      description: ""
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Office",
      details: ["Chilimba - Blantyre, Malawi"],
      description: "Visit us during business hours"
    },
    {
      icon: <FaClock className="text-xl" />,
      title: "Hours",
      details: ["Monday - Saturday: 7:00 AM - 6:00 PM"],
      description: "Closed on Sundays"
    }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={contact}
            alt="Contact Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 "></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-block px-6 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="lg:text-3xl font-semibold text-white mb-4 leading-tight">
            We would Love to 
          </h1>
           <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">Hear From You</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form or use our contact details below to get in touch with our team.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <div className="text-blue-600">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <div className="space-y-1">
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-gray-600">{detail}</p>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                  <p className="text-gray-600">
                    Ready to take the next step? Fill out the form below and we'll get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Paul Mwale"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="paul@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <div className="flex items-center text-fuchsia-800 justify-between pt-4">
                    <p className="text-sm text-gray-500">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center space-x-2"
                    >
                      {isSubmitted ? (
                        <>
                          <FaCheckCircle className="animate-pulse" />
                          <span>Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
                    <p className="text-green-700 flex items-center">
                      <FaCheckCircle className="mr-2" />
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;