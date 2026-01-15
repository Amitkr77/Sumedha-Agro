import React from "react";
import { MdVerifiedUser } from "react-icons/md";
import { RiShoppingBasketFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlinePsychologyAlt } from "react-icons/md";
import { MdEco } from "react-icons/md";
import { MdLiquor } from "react-icons/md";
import { MdOutlineTune } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";

export default function FormOne({ handleNext }) {
  return (
    <main className="max-w-[960px] mx-auto px-6 py-12">
      {/* <!-- Header Image & Intro --> */}
      <div className="mb-10">
        <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-xl mb-8">
          <div
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCO5qZceNACJnnfdyx1ooFgH_Wo6NOCnp2H5QJSovXmqd3w5d5TzX2qrn1nDewvHGdzPqQiy7fDDgzsylZmQQMRq6HnO3AyEmnnbjdfI9C6KCuNgyz4oxM734Dm9FHJOBc8sQV19EjyV-5gYAkCivqIpL47zhS3QdTosEmqyLw-opbtB64CusaPl0Ka4dYrNDx1z9uhJGnb9DKFb8od3q9K5HlqHMjHMhiZ_KvR9hb-jzt9Y91BMKPPnOKQHTg4YhalSHh9idPOLFg')",
            }}
            className="absolute inset-0 bg-cover bg-center"
            data-alt="Vibrant fresh organic mushrooms in a farm setting"
            // style='background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url("");'
          ></div>
          <div className="absolute bottom-0 left-0 p-8">
            <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Wholesale Partners
            </span>
            <h2 className="text-4xl font-extrabold text-white leading-tight">
              Request a Custom Quote
            </h2>
            <p className="text-gray-200 mt-2 max-w-xl">
              Scale your business with high-quality mushroom spawn and bulk
              fresh produce directly from our agro-facility.
            </p>
          </div>
        </div>
        {/* <!-- Progress Tracker --> */}
        <div className="bg-white dark:bg-[#25302c] p-6 rounded-xl border border-[#e9f1ec] dark:border-gray-800 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center size-8 rounded-full bg-primary text-white text-sm font-bold">
                  1
                </span>
                <span className="text-[#101914] dark:text-white font-bold text-lg">
                  Product Selection
                </span>
              </div>
              <span className="text-sm font-medium text-primary">
                Step 1 of 3
              </span>
            </div>
            <div className="w-full bg-[#d3e3da] dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-500 w-[33%]"
                // style="width: 33%;"
              ></div>
            </div>
            <p className="text-[#5a8c6f] dark:text-gray-400 text-sm">
              Tell us which products fit your current distribution or processing
              needs.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Section 1: Product Selection --> */}
      <section className="mb-12">
        <h3 className="text-[22px] font-bold text-[#101914] dark:text-white mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            <RiShoppingBasketFill />
          </span>
          1. What are you looking for?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* <!-- Product Card 1 --> */}
          <div className="group relative bg-white dark:bg-[#25302c] border-2 border-[#e9f1ec] dark:border-gray-800 rounded-xl overflow-hidden hover:border-primary transition-all cursor-pointer p-4 aspect-square flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">
                <FaCheckCircle />
              </span>
            </div>
            <div className="bg-primary/10 rounded-lg p-3 w-fit text-primary">
              <span className="material-symbols-outlined text-3xl">
                <MdOutlinePsychologyAlt />
              </span>
            </div>
            <div>
              <p className="text-lg font-bold text-[#101914] dark:text-white leading-tight">
                Mushroom Seeds (Spawn)
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                High-yield spores for commercial growers.
              </p>
            </div>
          </div>
          {/* <!-- Product Card 2 --> */}
          <div className="group relative bg-white dark:bg-[#25302c] border-2 border-primary rounded-xl overflow-hidden transition-all cursor-pointer p-4 aspect-square flex flex-col justify-between shadow-md">
            <div className="absolute top-4 right-4 text-primary">
              <span className="material-symbols-outlined">
                <FaCheckCircle />
              </span>
            </div>
            <div className="bg-primary/10 rounded-lg p-3 w-fit text-primary">
              <span className="material-symbols-outlined text-3xl">
                <MdEco />
              </span>
            </div>
            <div>
              <p className="text-lg font-bold text-[#101914] dark:text-white leading-tight">
                Bulk Fresh Mushrooms
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Daily harvested Oyster, Button &amp; Milky varieties.
              </p>
            </div>
          </div>
          {/* <!-- Product Card 3 --> */}
          <div className="group relative bg-white dark:bg-[#25302c] border-2 border-[#e9f1ec] dark:border-gray-800 rounded-xl overflow-hidden hover:border-primary transition-all cursor-pointer p-4 aspect-square flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">
                <FaCheckCircle />
              </span>
            </div>
            <div className="bg-primary/10 rounded-lg p-3 w-fit text-primary">
              <span className="material-symbols-outlined text-3xl">
                <MdLiquor />
              </span>
            </div>
            <div>
              <p className="text-lg font-bold text-[#101914] dark:text-white leading-tight">
                Mushroom Pickles
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Premium value-added jars for retail outlet chains.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section 2: Order Specifications --> */}
      <section className="mb-12">
        <h3 className="text-[22px] font-bold text-[#101914] dark:text-white mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            <MdOutlineTune />
          </span>
          2. Order Specifications
        </h3>
        <div className="bg-white dark:bg-[#25302c] p-8 rounded-xl border border-[#e9f1ec] dark:border-gray-800 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
              Estimated Monthly Volume
            </label>
            <div className="relative">
              <input
                className="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 pr-16"
                placeholder="e.g. 500"
                type="text"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">
                KG
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
              Packaging Preference
            </label>
            <select className="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3">
              <option>Eco-friendly Paper Trays</option>
              <option>Plastic Punnet Crates</option>
              <option>Bulk Sacks (for Spawn)</option>
              <option>Retail Glass Jars</option>
            </select>
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
              Delivery Frequency
            </label>
            <div className="flex gap-4">
              <label className="flex-1 flex items-center justify-center border-2 border-[#e9f1ec] dark:border-gray-700 p-3 rounded-lg cursor-pointer hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                <input checked="" className="hidden" name="freq" type="radio" />
                <span className="text-sm font-semibold">Weekly</span>
              </label>
              <label className="flex-1 flex items-center justify-center border-2 border-[#e9f1ec] dark:border-gray-700 p-3 rounded-lg cursor-pointer hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                <input className="hidden" name="freq" type="radio" />
                <span className="text-sm font-semibold">Bi-Weekly</span>
              </label>
              <label className="flex-1 flex items-center justify-center border-2 border-[#e9f1ec] dark:border-gray-700 p-3 rounded-lg cursor-pointer hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                <input className="hidden" name="freq" type="radio" />
                <span className="text-sm font-semibold">One-time</span>
              </label>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section 3: Business Details --> */}
      <section className="mb-12">
        <h3 className="text-[22px] font-bold text-[#101914] dark:text-white mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            <IoMdBusiness />
          </span>
          3. Business Information
        </h3>
        <div className="bg-white dark:bg-[#25302c] p-8 rounded-xl border border-[#e9f1ec] dark:border-gray-800 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                Company Name
              </label>
              <input
                className="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3"
                placeholder="Organic Foods Ltd"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                GST / Tax ID (Optional)
              </label>
              <input
                className="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3"
                placeholder="AA000000000000"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                className="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                Work Email
              </label>
              <input
                className="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3"
                placeholder="john@company.com"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
              Additional Requirements
            </label>
            <textarea
              className="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3"
              placeholder="Mention any specific quality standards, delivery location details, or mixed order requests..."
              rows="4"
            ></textarea>
          </div>
        </div>
      </section>
      {/* <!-- Form Submission --> */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
          <span className="material-symbols-outlined text-primary text-sm">
            <MdVerifiedUser />
          </span>
          <span className="text-xs font-bold text-[#101914] dark:text-gray-300">
            Trusted by 50+ Agro Partners in the region
          </span>
        </div>
        <button
          onClick={handleNext}
          className="w-full max-w-md bg-primary hover:bg-opacity-95 text-white font-extrabold py-5 rounded-xl shadow-lg transform transition hover:-translate-y-1 active:scale-95 text-lg"
        >
          Next
        </button>
        <p className="text-sm text-gray-500 text-center">
          Our team will review your requirements and respond with a tailored
          pricing plan within 24 business hours.
        </p>
      </div>
    </main>
  );
}
