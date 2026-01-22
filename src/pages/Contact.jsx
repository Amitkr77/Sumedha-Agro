import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoSend } from "react-icons/io5"

export default function Contact() {
  return (
    <main>
      <section className="relative  bg-slate-50 px-6 py-12 lg:px-10 lg:py-20 max-w[1280px] mx-auto w-full">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h1 className="text-4xl font-black leading-tight tracking-tight lg:text-6xl text-slate-900 dark:text-white">
              Let's Grow <span className="text-primary">Together</span>
            </h1>
            <p className="text-lg font-normal leading-relaxed text-slate-600 dark:text-slate-400 max-w[500px]">
              Interested in our premium mushroom products or consulting
              services? Fill out the form below or visit our farm to start a
              conversation.
            </p>
            <div className="flex gap-4 pt-2">
            </div>
          </div>
          <div className="lg:w-1/2">
            <div
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8QJ8Y5YwPYBrLIffDh8CLPsd6PDKPhDZ8rWN3jlmO1OuqSjjhMooAG-t1dVRcGD5KbwgF6jywRqimHxcwlmGf_akKObYLWlk-PL6lZDBpC91EVtsFmZReZixrPaZCWpWQ33Deh5pYyljkCNiMe1NP7hXNaY-k6WDffixeTdxQxBHqsvrZeSo64a-GhGO0AuAzvRoCQIGcDPlTvXq7GxVnS25NtuY5TkvQooYzUGMg5_3g7Hstfami4jciKzOUgvMSVd1JvLXYU6E')",
              }}
              className="aspect-4/3 w-full rounded-2xl bg-cover bg-center shadow-2xl relative overflow-hidden group"
              data-alt="Close up of fresh organic mushrooms growing in a farm environment"
            >
              <div className="absolute inset-0 bg-gradient-tot from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-bold uppercase tracking-wider mb-1 text-primary">
                  Our Farm
                </p>
                <p className="text-xl font-bold">Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-12 bg-slate-50 lg:px-10 lg:pb-24 max-w[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/*
    <!-- Left Column: Contact Info & Map -->
    */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Contact Details
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Reach out to us directly through any of these channels.
              </p>
              <div className="flex flex-col gap-4">
                {/*
          <!-- Card 1: Phone -->
          */}
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-white/5 p-5 transition-all hover:border-primary/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary dark:bg-primary/20">
                    <span className="material-symbols-outlined"> <IoMdCall size={20} /></span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Phone
                    </h3>
                    <a
                      className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                      href="tel:+919876543210"
                    >
                      +91 9473896285 
                    </a>
                    
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Mon-Fri, 9am - 6pm IST
                    </p>
                  </div>
                </div>
                {/*
          <!-- Card 2: Email -->
          */}
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-white/5 p-5 transition-all hover:border-primary/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary dark:bg-primary/20">
                    <span className="material-symbols-outlined"><MdEmail />
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Email
                    </h3>
                    <a
                      className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                      href="mailto:hello@sumedhaagro.com"
                    >
                    info@sumedhaagro.com
                    </a>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      We reply within 24 hours.
                    </p>
                  </div>
                </div>
                {/*
          <!-- Card 3: Address -->
          */}
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-white/5 p-5 transition-all hover:border-primary/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary dark:bg-primary/20">
                    <span className="material-symbols-outlined">
                      <FaLocationDot />

                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Visit HQ
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                     982 Village Andpurdev, Banthra, Sarojni Nagar Lucknow 226401, Uttar Pradesh,
India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*
      <!-- Map Placeholder -->
      */}
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 h-64 relative group cursor-pointer">
              <div
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByNyAwafsUHsnV4JA7vIgOa6Pj2KJGFNVgKYbWM_TuQXGEgI1kagEvnISfkIBOi3bFe-7EcVs4CFZ84aC0D3eR1epIWNY9p84_q6QcP223XXL_GlCeH5HDaEMAUuis6BVxICStJ9CvqfJsh0Pk3-A1xiF_Bv80nglE9MVeC-mTAiNkJeIZRSq2sLM9leT7bOum70T8ho1dklgs1Gnl_I0oEoyn6s3s6yfCLvAqgh97OvEm_msChfDlPDgtFfhtJ0gjj5yIFqGei5E')",
                }}
                className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity"
                data-alt="Map view showing location in Pune"
                data-location="Pune, India"
              ></div>
              <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center">
                <div className="bg-white dark:bg-slate-900 p-3 rounded-full shadow-xl animate-bounce">
                  <span className="material-symbols-outlined text-red-500 text-3xl">
                    <FaLocationDot />
                  </span>
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-black/80 px-2 py-1 rounded text-xs font-medium text-slate-900 dark:text-white">
                Google Maps
              </div>
            </div>
          </div>
          {/*
    <!-- Right Column: Form -->
    */}
          <div className="lg:col-span-7" id="contact-form">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-white/5 p-8 lg:p-10 shadow-sm">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Send us a Message
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Our team is ready to answer any questions about our mushroom
                  spawn, fresh produce, or consulting.
                </p>
              </div>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/*
            <!-- Full Name -->
            */}
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                      Full Name
                    </span>
                    <input
                      className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:placeholder:text-slate-500"
                      placeholder="John Doe"
                      type="text"
                    />
                  </label>
                  {/*
            <!-- Company Name -->
            */}
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                      Company Name (Optional)
                    </span>
                    <input
                      className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:placeholder:text-slate-500"
                      placeholder="Sumedha Farms Ltd."
                      type="text"
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/*
            <!-- Email -->
            */}
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                      Email Address
                    </span>
                    <input
                      className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:placeholder:text-slate-500"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </label>
                  {/*
            <!-- Phone -->
            */}
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                      Phone Number
                    </span>
                    <input
                      className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:placeholder:text-slate-500"
                      placeholder="+91 98765 43210"
                      type="tel"
                    />
                  </label>
                </div>
                {/*
          <!-- Product Interest -->
          */}
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                    What are you interested in?
                  </span>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900/50 dark:text-white">
                      <option>Fresh Mushrooms (Wholesale)</option>
                      <option>Mushroom Spawn</option>
                      <option>Consulting &amp; Training</option>
                      <option>Equipment &amp; Supplies</option>
                      <option>Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </div>
                  </div>
                </label>
                {/*
          <!-- Message -->
          */}
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                    Your Message
                  </span>
                  <textarea
                    className="w-full resize-y rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:placeholder:text-slate-500"
                    placeholder="Tell us more about your requirements..."
                    rows="4"
                  ></textarea>
                </label>
                {/*
          <!-- Submit Button -->
          */}
                <button
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-base font-bold text-slate-900 transition-transform hover:scale-[1.01] active:scale-[0.99] hover:bg-green-400 shadow-lg shadow-green-500/10"
                  type="button"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-lg">
                    <IoSend />
                  </span>
                </button>
                <p className="text-center text-xs text-slate-500 mt-2">
                  By submitting this form, you agree to our
                  <a
                    className="underline hover:text-slate-800 dark:hover:text-slate-300"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
