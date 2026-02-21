import React from "react";
import { SiTripadvisor } from "react-icons/si";

import { MdEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuFlaskConical } from "react-icons/lu";
import { MdWaterDrop } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { RiMicroscopeFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import { IoIosWater } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import CTA from "../components/CTA";
export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="flex-grow flex flex-col">
      {/* <section className="relative w-full py-12 md:py-24 px-4 md:px-10 lg:px-20 flex justify-center bg-background-dark overflow-hidden min-h-[700px] items-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="Mushroom farm environment"
            class="w-full h-full opacity-50 dark:opacity-40 bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-5YHGCsAag0gt_fkB-7SofmhSwjo2G_ZL92exxm8vjmoWsnX-cG0AaOfwQNfdL7-fO0UXTaJ6UfjSj-tCOLtpMNLxqxfuk4hcumkSGkNB7SYoD6u_5FMXsJmfwttZRyj-e9zoRfRpiBYyg3Uz51NrB0qo2Fhycvq63brhndNO1n_CHlmL5vAMiyNyvKHSDKgKk4h8Z4yseohErbDs-n-TXALWZsCBqzcFLg_mApONFM_04SK0_dbUIdUQcFNTnJciWIKisKLRrbE')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/80 to-background-dark/40"></div>
        </div>
        <div className="relative z-10 max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-white order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit backdrop-blur-md mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#13ec13]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Agritech Innovation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Cultivating the <br />
              <span className="text-primary">Future of Food</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Sumedha Agro is a pioneer in high-tech mushroom farming. We
              deliver premium organic produce and sustainable agricultural
              solutions to businesses worldwide.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary">
                  verified
                </span>
                <span className="font-medium text-sm">Certified Organic</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary">
                  water_drop
                </span>
                <span className="font-medium text-sm">Hydroponic Tech</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative w-full py-12 md:py-24 px-4 md:px-10 lg:px-20 flex justify-center bg-background-dark overflow-hidden min-h-[700px] items-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="Mushroom farm environment"
            className="w-full h-full object-cover opacity-50 dark:opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-5YHGCsAag0gt_fkB-7SofmhSwjo2G_ZL92exxm8vjmoWsnX-cG0AaOfwQNfdL7-fO0UXTaJ6UfjSj-tCOLtpMNLxqxfuk4hcumkSGkNB7SYoD6u_5FMXsJmfwttZRyj-e9zoRfRpiBYyg3Uz51NrB0qo2Fhycvq63brhndNO1n_CHlmL5vAMiyNyvKHSDKgKk4h8Z4yseohErbDs-n-TXALWZsCBqzcFLg_mApONFM_04SK0_dbUIdUQcFNTnJciWIKisKLRrbE"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/80 to-background-dark/40"></div>
        </div>
        <div className="relative z-10 max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-white order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit backdrop-blur-md mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#13ec13]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Agritech Innovation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Cultivating the <br />
              <span className="text-primary">Future of Food</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Sumedha Agro is a pioneer in high-tech mushroom farming. We
              deliver premium organic produce and sustainable agricultural
              solutions to businesses worldwide.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary">
                  <MdOutlineVerified />
                </span>
                <span className="font-medium text-sm">Certified Organic</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary">
                  <IoIosWater />
                </span>
                <span className="font-medium text-sm">Hydroponic Tech</span>
              </div>
            </div>
          </div>
          {/* <div
              className="lg:col-span-5 order-1 lg:order-2 w-full"
              id="quote-form"
            >
              <div
                className="bg-white dark:bg-[#152615] p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-primary/30 relative overflow-hidden group hover:border-primary/60 transition-colors"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-green-600"
                ></div>
                <h3
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  Partner With Us
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Get a quote for bulk orders or contract farming inquiries.
                </p>
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                        for="hero-name"
                        >Name</label
                      >
                      <input
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-black/20 dark:text-white"
                        id="hero-name"
                        placeholder="John Doe"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                        for="hero-phone"
                        >Phone</label
                      >
                      <input
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-black/20 dark:text-white"
                        id="hero-phone"
                        placeholder="+1 234..."
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                      for="hero-email"
                      >Work Email</label
                    >
                    <input
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-black/20 dark:text-white"
                      id="hero-email"
                      placeholder="john@company.com"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                      for="hero-interest"
                      >Interest</label
                    >
                    <select
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-black/20 dark:text-white"
                      id="hero-interest"
                    >
                      <option>Fresh Mushrooms (Bulk Supply)</option>
                      <option>Mushroom Powder/Extracts</option>
                      <option>Contract Farming</option>
                      <option>Distributorship</option>
                    </select>
                  </div>
                  <button
                    className="mt-2 w-full rounded-lg bg-primary hover:bg-primary-dark text-black py-3.5 text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform active:scale-[0.98]"
                    type="button"
                  >
                    Request Quote
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-2">
                    We typically reply within 24 hours.
                  </p>
                </form>
              </div>
            </div> */}
        </div>
      </section>

      {/* <!-- Brand Strip --> */}
      <div className="w-full bg-surface-light dark:bg-surface-dark py-8 border-y border-gray-100 dark:border-gray-800 bg-white">
        <div className="max-w[1200px] mx-auto px-4 flex justify-around flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* <!-- Placeholders for partner logos/certifications --> */}
          <span className="text-xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined"></span> <FaLeaf />
            USDA Organic
          </span>
          <span className="text-xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined"></span>{" "}
            <IoIosCheckmarkCircleOutline />
            ISO Certified
          </span>
          <span className="text-xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined"></span>{" "}
            <LuFlaskConical />
            BioTech Labs
          </span>
          <span className="text-xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined"></span>
            <MdWaterDrop />
            HydroSafe
          </span>
        </div>
      </div>
      {/* <!-- About/Intro Section --> */}
      {/* <section
        className="py-16 px-4 md:px-20 lg:px-40 flex justify-center bg-white dark:bg-background-dark"
        id="story"
      >
        <div className="max-w[960px] flex flex-col text-center">
          <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] pb-6">
            Bridging Technology and Farming
          </h2>
          <p className="text-text-side dark:text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
            Sumedha Agro is dedicated to sustainable farming practices,
            leveraging modern technology to produce high-quality organic
            mushrooms and derived products. We believe that the future of food
            lies in the intelligent application of nature's resources.
          </p>
        </div>
      </section> */}
   <section
  id="story"
  className="relative py-24 px-4 md:px-20 lg:px-40 
             bg-gradient-to-b from-[#f4fbf4] via-white to-white
             dark:from-[#0b130b] dark:via-background-dark dark:to-background-dark
             overflow-hidden"
>
  {/* Ambient glow blobs */}
  <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#13ec13]/20 blur-[140px] rounded-full"></div>
  <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-[#13ec13]/10 blur-[140px] rounded-full"></div>

  <div className="relative max-w-4xl mx-auto text-center">
    {/* Section badge */}
    <div
      className="inline-flex items-center px-4 py-1 mb-6 rounded-full
                 bg-[#13ec13]/10 dark:bg-[#13ec13]/15
                 text-[#0d1b0d] dark:text-[#13ec13]
                 text-xs font-bold tracking-widest uppercase"
    >
      Our Vision
    </div>

    <h2
      className="text-3xl md:text-4xl lg:text-5xl font-extrabold
                 leading-tight tracking-tight
                 text-[#0d1b0d] dark:text-white mb-6"
    >
      Bridging Technology and Farming
    </h2>

    <p
      className="text-lg md:text-xl leading-relaxed
                 text-[#3f5f3f] dark:text-gray-300
                 max-w-3xl mx-auto"
    >
      Sumedha Agro is dedicated to sustainable farming practices,
      leveraging modern technology to produce high-quality organic
      mushrooms and derived products. We believe that the future of food
      lies in the intelligent application of nature's resources.
    </p>

    {/* Brand divider */}
    <div className="mt-12 flex justify-center">
      <span className="h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-[#13ec13] to-transparent"></span>
    </div>
  </div>
</section>


      {/* <!-- Features Grid --> */}
      <section className="py-16 px-4 md:px-20 lg:px-40 bg-background-light dark:bg-surface-dark">
        <div className="max-w[1200px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-text-main dark:text-black text-3xl md:text-4xl font-bold leading-tight max-w[500px]">
              Why We Choose 
              Mushrooms?
            </h2>
            <p className="text-text-side dark:text-gray-400 max-w-sm text-right md:text-left">
              Mushrooms are more than just food; they are a sustainable solution
              for nutrition and wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Feature 1 --> */}
            <div className="group flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark dark:text-primary mb-2 group-hover:bg-primary group-hover:text-black transition-colors">
                <span className="material-symbols-outlined ">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <FaHeartbeat className="text-text-icon" size={30} />
                  </div>
                </span>
              </div>
              <h3 className="text-text-main dark:text-white text-xl font-bold">
                Health Benefits
              </h3>
              <p className="text-text-side dark:text-gray-400 text-sm leading-relaxed">
                Rich in essential nutrients, proteins, and antioxidants designed
                for a balanced and immune-boosting diet.
              </p>
            </div>
            {/* <!-- Feature 2 --> */}
            <div className="group flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark dark:text-primary mb-2 group-hover:bg-primary group-hover:text-black transition-colors">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    {" "}
                    <FaLeaf className="text-text-icon" size={30} />
                  </span>
                </div>
              </div>
              <h3 className="text-text-main dark:text-white text-xl font-bold">
                Sustainability
              </h3>
              <p className="text-text-side dark:text-gray-400 text-sm leading-relaxed">
                Our vertical farming techniques use 90% less water and land
                compared to traditional agriculture.
              </p>
            </div>
            {/* <!-- Feature 3 --> */}
            <div className="group flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark dark:text-primary mb-2 group-hover:bg-primary group-hover:text-black transition-colors">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  {" "}
                  <span className="material-symbols-outlined">
                    <RiMicroscopeFill className="text-text-icon" size={30} />
                  </span>
                </div>
              </div>
              <h3 className="text-text-main dark:text-white text-xl font-bold">
                Innovation
              </h3>
              <p className="text-text-side dark:text-gray-400 text-sm leading-relaxed">
                Advanced IoT monitoring ensures consistent quality, higher
                yields, and pure organic output year-round.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Product Showcase --> */}
      <section
        className="py-20 px-4 md:px-20 lg:px-40 flex justify-center bg-white dark:bg-background-dark"
        id="products"
      >
        <div className="max-w[1200px] w-full flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-text-main dark:text-white text-3xl font-bold">
              Our Products
            </h2>
            <a
             onClick={() => {
                  navigate("/products");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                 }}
              className="hidden md:flex items-center gap-2 text-green-500 dark:text-primary font-bold hover:underline"
              href="#"
            >
              View Full Catalog
              <span className="material-symbols-outlined text-sm">
                <FaArrowRightLong />
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Product Card 1 --> */}
            <div className="group rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-surface-dark hover:shadow-lg transition-all">
              <div className="h-64 overflow-hidden relative">
                <div
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcylxFCLun93Ypr5G-vqE0vPvMDpXZi57GtROMVxxgzwCFudrlTHgb92wwdxQUbprAgVEFgOZefniXRuVsJjRyf6dGaubOvhZTj2IXFqBIEcgLg4ZlO7NKljRIEEEuldceP-qMwtxWhQb5hTWipnFqSq3NYU3kKYfshQ0MtCYHTXXjIi5jN53QbLMx_CoVZEkBsUrOuW3me5Zm27Dm7HC5xJt2HeUM8rgXiXZei2GCIlkBWhXQj4mrdq2PhSZFi6axny9VCg8Smx8')",
                  }}
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  data-alt="Fresh white button mushrooms in a wooden basket"
                  // style="
                  //   background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcylxFCLun93Ypr5G-vqE0vPvMDpXZi57GtROMVxxgzwCFudrlTHgb92wwdxQUbprAgVEFgOZefniXRuVsJjRyf6dGaubOvhZTj2IXFqBIEcgLg4ZlO7NKljRIEEEuldceP-qMwtxWhQb5hTWipnFqSq3NYU3kKYfshQ0MtCYHTXXjIi5jN53QbLMx_CoVZEkBsUrOuW3me5Zm27Dm7HC5xJt2HeUM8rgXiXZei2GCIlkBWhXQj4mrdq2PhSZFi6axny9VCg8Smx8');
                  // "
                ></div>
                <div className="absolute top-3 right-3 bg-white dark:bg-black/70 px-2 py-1 text-xs font-bold rounded uppercase tracking-wide">
                  Fresh
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-main dark:text-black mb-2">
                Premium Button Mushrooms
                </h3>
                <p className="text-sm text-text-side dark:text-gray-400 mb-4 line-clamp-2">
                 Farm-fresh, chemical-free white button mushrooms harvested
                 daily for maximum flavor.
                </p>
                <button
                   onClick={() => {
                   navigate("/products");
                   window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                   className="w-full py-2 rounded border border-gray-400 dark:border-gray-600 text-sm font-medium hover:bg-primary hover:border-primary hover:text-black transition-colors"
                  >
                   View Details
                </button>
              </div>
            </div>
            {/* <!-- Product Card 2 --> */}
            <div className="group rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-surface-dark hover:shadow-lg transition-all">
              <div className="h-64 overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  data-alt="Close up of dried oyster mushrooms texture"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXFaZ2oBmibDzON0bukDba_ld1uQbJPOD-0FX9toxsRahO65yv_nQxBHKz0UUofmLSfQnn0uK4mMwdbd3BO1HK3339mZcGv_oU4NWEIA4rxL7Q6pVWOg1-Np51vn8-uSPfIb4AqZqZ5ET8N8dngLGc__hDv6SiXBDxuhDpkT7UEeLeLMb1UAgeIm1r53US0kkZPwJMjamwvCMYTi4MPWeeNh2Z5pyd4XS7OGrnRw80Lkxfa3WmqM4MBF_04xwxNC4rp_fBOxTg4Yg')",
                  }}
                  //   background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXFaZ2oBmibDzON0bukDba_ld1uQbJPOD-0FX9toxsRahO65yv_nQxBHKz0UUofmLSfQnn0uK4mMwdbd3BO1HK3339mZcGv_oU4NWEIA4rxL7Q6pVWOg1-Np51vn8-uSPfIb4AqZqZ5ET8N8dngLGc__hDv6SiXBDxuhDpkT7UEeLeLMb1UAgeIm1r53US0kkZPwJMjamwvCMYTi4MPWeeNh2Z5pyd4XS7OGrnRw80Lkxfa3WmqM4MBF_04xwxNC4rp_fBOxTg4Yg');
                  // "
                ></div>
                <div className="absolute top-3 right-3 bg-white dark:bg-black/70 px-2 py-1 text-xs font-bold rounded uppercase tracking-wide">
                  Processed
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-main dark:text-black mb-2">
                  Oyster Mushroom Powder
                </h3>
                <p className="text-sm text-text-side dark:text-gray-400 mb-4 line-clamp-2">
                  A nutrient-dense superfood powder perfect for soups,
                  smoothies, and baking.
                </p>
                <button
                  onClick={() => {
                  navigate("/products");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                 }}
                 className="w-full py-2 rounded border border-gray-400 dark:border-gray-600 text-sm font-medium hover:bg-primary hover:border-primary hover:text-black transition-colors"
                >
                View Details
                </button>  
              </div>
            </div>
            {/* <!-- Product Card 3 --> */}
            <div className="group rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-surface-dark hover:shadow-lg transition-all">
              <div className="h-64 overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  data-alt="Jar of pickled mushrooms on a rustic table"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1tvPdyVotJlkda5KWx01YZNiW9Dq6gNx30fuGPAZk4mOLU-J4XGhRjJjS4Yl_PVNszdCnLDTbwb05ewET8JwuJSmT5gzpjvvJOUomfmXVbLcY65qKRPLfesJRF0TmGOgLHStvJ5lXeoGAngtUxEXPgmemtt4WIZZJER-TvgSA553psdFP_xy6KJym3DttCcjf0FxZfjAz6NfPLSWsSlz3dGSYZNPO-CXSw4QAzhH7VWxraOuS6AnY6I0OZetMQEyBz8mp9zrUCgY')",
                  }}
                ></div>
                <div className="absolute top-3 right-3 bg-white dark:bg-black/70 px-2 py-1 text-xs font-bold rounded uppercase tracking-wide">
                  Ready to Eat
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-main dark:text-black mb-2">
                  Mushroom Pickles
                </h3>
                <p className="text-sm text-text-side dark:text-gray-400 mb-4 line-clamp-2">
                  Spicy and tangy mushroom pickles made with traditional recipes
                  and organic oil.
                </p>
                <button
                  onClick={() => {
                  navigate("/products");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full py-2 rounded border border-gray-400 dark:border-gray-600 text-sm font-medium hover:bg-primary hover:border-primary hover:text-black transition-colors"
                >
                  View Details
                </button> 
              </div>
            </div>
          </div>
          <div className="md:hidden mt-8 text-center">
            <a
              className="inline-flex items-center gap-2 text-primary-dark dark:text-primary font-bold hover:underline"
              href="#"
            >
              View Full Catalog
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- CTA / Lead Gen Section --> */}

      <CTA />
    </main>
  );
}
