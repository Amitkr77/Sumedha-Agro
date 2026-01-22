import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log(formData);
  };

  return (
    <section
      className="py-20 px-4 md:px-20 lg:px-40 flex justify-center bg-background-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800"
      id="contact"
    >
      <div className="max-w[1000px] w-full bg-white dark:bg-background-dark rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* <!-- Left Side: Info --> */}
        <div className="w-full md:w-2/5 bg-background-even p-10 flex flex-col justify-between text-black relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <span
              className="material-symbols-outlined text-[200px]"
              // style="font-size: 200px"
            >
              agriculture
            </span>
          </div>
          <div className="z-10">
            <h2 className="text-3xl font-bold mb-4">
              Partner with Sumedha Agro
            </h2>
            <p className="mb-8 font-medium opacity-90">
              Interested in bulk orders or contract farming? Let's discuss how
              we can grow together.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">
                  <IoMdCall size={20} />
                </span>
                <span className="font-bold">+91 9473896285</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">
                  <MdEmail size={20} />
                </span>
                <span className="font-bold">info@sumedhaagro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">
                  <FaLocationDot size={20} />
                </span>
                <span className="font-bold">
                  982 Village Andpurdev, Banthra, Sarojni Nagar Lucknow 226401,
                  Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10 z-10">
            <p className="text-sm font-medium opacity-80">Follow us</p>
            <div className="flex gap-4 mt-2">
              {/* <!-- Simple social icons using text for demo --> */}
              <a
                className="hover:opacity-75 transition-opacity font-bold"
                href="#"
              >
                LN
              </a>
              <a
                className="hover:opacity-75 transition-opacity font-bold"
                href="#"
              >
                TW
              </a>
              <a
                className="hover:opacity-75 transition-opacity font-bold"
                href="#"
              >
                IG
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Right Side: Form --> */}
        <div className="w-full md:w-3/5 p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-semibold text-text-main dark:text-gray-300"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-surface-dark dark:text-white"
                  id="name"
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-semibold text-text-main dark:text-gray-300"
                  htmlFor="company"
                >
                  Company Name
                </label>
                <input
                  className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-surface-dark dark:text-white"
                  id="company"
                  placeholder="Company Ltd."
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-text-main dark:text-gray-300"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-surface-dark dark:text-white"
                id="email"
                placeholder="you@example.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-text-main dark:text-gray-300"
                htmlFor="interest"
              >
                I'm interested in
              </label>
              <select
                className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-surface-dark dark:text-white"
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option>Fresh Mushrooms (Bulk)</option>
                <option>Processed Products</option>
                <option>Contract Farming</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-text-main dark:text-gray-300"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-surface-dark dark:text-white resize-none"
                id="message"
                placeholder="Tell us about your requirements..."
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              className="mt-2 w-full rounded-lg bg-black text-white py-3 text-sm font-bold tracking-wide hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              type="submit"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
