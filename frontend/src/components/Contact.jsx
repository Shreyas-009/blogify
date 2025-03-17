import React from "react";

const Contact = () => {
  return (
    <div className="p-12 h-screen">
      <div className=" bg-[#EDF7FA] p-24 rounded-2xl max-h-[600px]">
        <div className="flex flex-col md:flex-row gap-8 justify-center rounded-lg">
          {/* Contact Form */}
          <div className="w-full md:w-2/5 p-10 bg-white rounded-2xl shadow-[0px_1px_40px_0px_rgba(0,0,0,0.10)]">
            <h3 className="font-bold text-xl mb-6">Send a message today</h3>

            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (234) 567-890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="johndoe@placeholder.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Message in 100-150 words"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#096CC9] text-white py-3 rounded-md uppercase text-sm font-semibold hover:bg-blue-700 transition"
                >
                  SEND EMAIL
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 mt-18 bg-transparent p-10">
            <h3 className="font-bold text-xl mb-2 text-[#096CC9]">
              LET'S GRAB COFFEE
            </h3>
            <h2 className="text-3xl font-bold mb-6 uppercase">
              GET IN TOUCH WITH ME TO PLAN
              <br />
              YOUR NEXT REAL ESTATE
            </h2>
            <p className="text-gray-600 text-lg w-7/8 mb-8 leading-relaxed text-left">
              Our experts and developers would love to contribute their
              expertise and insights and help you today. Contact us to help you
              plan your next transaction, either buying or selling a home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
