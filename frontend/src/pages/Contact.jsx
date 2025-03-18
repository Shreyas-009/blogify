import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/apiConfig";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    let timer;
    if (success || error) {
      timer = setTimeout(() => {
        setSuccess(false);
        setError(null);
      }, 1500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [success, error]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Phone validation
    if (id === "phone") {
      // Only allow digits in the phone field
      const digitsOnly = value.replace(/\D/g, "");
      setFormData({ ...formData, [id]: digitsOnly });

      // Show error if length is not 10 and field is not empty
      if (digitsOnly.length !== 0 && digitsOnly.length !== 10) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const validateForm = () => {
    // Validate phone has exactly 10 digits
    if (formData.phone.length !== 10) {
      setPhoneError(true);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post(`${BASE_URL}/api/contact`, formData);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setPhoneError(false);
    } catch (err) {
      console.error("Error sending contact form:", err);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-8 sm:py-10 md:p-12 flex items-center" id="contact">
      <div className="bg-[#EDF7FA] pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-18 rounded-xl sm:rounded-2xl w-full">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center max-w-[1100px] px-4 mx-auto relative">
          <div className="w-full lg:w-2/5 p-5 sm:p-8 lg:p-10 bg-white rounded-xl sm:rounded-2xl shadow-[0px_1px_40px_0px_rgba(0,0,0,0.10)] lg:absolute lg:top-0 lg:left-0">
            <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">
              Send a message today
            </h3>

            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded transition-opacity duration-300">
                Your message has been sent successfully!
              </div>
            )}

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded transition-opacity duration-300">
                {error}
              </div>
            )}

            <form
              className="flex flex-col gap-3 sm:gap-4"
              onSubmit={handleSubmit}
            >
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                >
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="10 digit phone number"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${
                    phoneError ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-1 ${
                    phoneError ? "focus:ring-red-500" : "focus:ring-blue-500"
                  } text-sm`}
                  required
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {phoneError && (
                  <p className="text-red-500 text-xs mt-1">
                    Phone number must be exactly 10 digits
                  </p>
                )}
              </div>

              <div className="">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="johndoe@placeholder.com"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  placeholder="Message in 100-150 words"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full bg-[#096CC9] text-white py-2 sm:py-3 rounded-md uppercase text-xs sm:text-sm font-semibold hover:bg-blue-700 transition"
                  disabled={loading || phoneError}
                >
                  {loading ? "SENDING..." : "SEND EMAIL"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-3/5 p-5 sm:p-8 lg:p-10 lg:pt-22 mt-0 lg:mt-0 lg:ml-auto bg-transparent">
            <h3 className="font-bold text-lg sm:text-xl mb-2 text-[#096CC9]">
              LET'S GRAB COFFEE
            </h3>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 uppercase leading-tight">
              GET IN TOUCH WITH ME TO PLAN
              <br className="hidden sm:block" />
              YOUR NEXT REAL ESTATE
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-8 leading-relaxed text-left lg:w-3/4">
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
