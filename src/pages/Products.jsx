import React, {useState} from "react";
import { IoFilter } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function Products() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

const handleSubmit = () => {
  if (email.trim() === "") {
    setError("Email is required");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address");
    return;
  }

  setError(""); // clear error
  navigate("/get-quote", { state: { email } });

};
  return (
    <main>
      <main>
        {/* <!-- Hero Section --> */}
        <div
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsQ3ug8QAwVZcR_a9HMZ2OsMTuQj68dZ5Mb2ScLVc4dECbD7v0mBU5mwXUy5hwqSHIaqDKudo2_UY3QFSKucDRkx4S5Vmko8sp6byJkMriGgXzzgDiDloQeSOfibluh_nKTEGG3N3-1r4XYvFFZ4QovWj1j_qZl-g_FGqC0Tu-6aSLfGPW2cSgwR3MCujEU1_n0zrWydrpeOcxJZWqDip-x85co1_ArTEVyb1ZXBfKCk9S_XvJyoCLBwnjYBYP4TOWHWmCg6uHWzw')",
          }}
          className="relative w-full bg-cover bg-center bg-no-repeat"
          data-alt="Dark green textured background representing agriculture"
        >
          <div className="w-full max-w[1440px] mx-auto px-4 lg:px-10 py-16 md:py-20 flex flex-col justify-center min-h-300px">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
              Premium Mushroom Catalog
            </h1>
            <p className="text-white/90 text-base md:text-lg font-normal max-w-2xl">
              Explore our scientifically developed spawn, fresh organic produce,
              and value-added mushroom products designed for modern agriculture
              and healthy living.
            </p>
          </div>
        </div>
        {/* <!-- Main Content Layout --> */}
        <div className="flex flex-col lg:flex-row gap-8 max-w[1440px] mx-auto w-full px-4 lg:px-10 py-12 flex-1">
          {/* <!-- Sidebar Filters --> */}
          <aside className="w-full lg:w-72 shrink-0 space-y-8">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-text-main dark:text-white">
                  <IoFilter size={20} />
                </span>
                <h3 className="text-text-main dark:text-white text-lg font-bold">
                  Categories
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <label className="group cursor-pointer flex items-center gap-4 rounded-lg border border-solid border-border-active bg-white dark:bg-white/5 dark:border-white/10 p-[15px] hover:border-primary transition-colors">
                  <input
                    className="h-5 w-5 border-2 border-border-active bg-transparent text-transparent checked:border-primary checked:bg-primary checked:focus:border-primary focus:ring-0 focus:ring-offset-0 radio-checked-bg"
                    name="category"
                    type="radio"
                  />
                  <div className="flex grow flex-col">
                    <p className="text-text-main dark:text-white text-sm font-medium leading-normal group-hover:text-primary transition-colors">
                      All Products
                    </p>
                    <p className="text-text-side text-xs font-normal leading-normal">
                      View full catalog
                    </p>
                  </div>
                </label>
                <label className="group cursor-pointer flex items-center gap-4 rounded-lg border border-solid border-border-active bg-white dark:bg-white/5 dark:border-white/10 p-[15px] hover:border-primary transition-colors">
                  <input
                    className="h-5 w-5 border-2 border-border-active bg-transparent text-transparent checked:border-primary checked:bg-primary checked:focus:border-primary focus:ring-0 focus:ring-offset-0 radio-checked-bg"
                    name="category"
                    type="radio"
                  />
                  <div className="flex grow flex-col">
                    <p className="text-text-main dark:text-white text-sm font-medium leading-normal group-hover:text-primary transition-colors">
                      Seeds / Spawn
                    </p>
                    <p className="text-text-side text-xs font-normal leading-normal">
                      Oyster, Milky, Button
                    </p>
                  </div>
                </label>
                <label className="group cursor-pointer flex items-center gap-4 rounded-lg border border-solid border-border-active bg-white dark:bg-white/5 dark:border-white/10 p-[15px] hover:border-primary transition-colors">
                  <input
                    className="h-5 w-5 border-2 border-border-active bg-transparent text-transparent checked:border-primary checked:bg-primary checked:focus:border-primary focus:ring-0 focus:ring-offset-0 radio-checked-bg"
                    name="category"
                    type="radio"
                  />
                  <div className="flex grow flex-col">
                    <p className="text-text-main dark:text-white text-sm font-medium leading-normal group-hover:text-primary transition-colors">
                      Value-Added
                    </p>
                    <p className="text-text-side text-xs font-normal leading-normal">
                      Pickles, Powders
                    </p>
                  </div>
                </label>
                <label className="group cursor-pointer flex items-center gap-4 rounded-lg border border-solid border-border-active bg-white dark:bg-white/5 dark:border-white/10 p-[15px] hover:border-primary transition-colors">
                  <input
                    className="h-5 w-5 border-2 border-border-active bg-transparent text-transparent checked:border-primary checked:bg-primary checked:focus:border-primary focus:ring-0 focus:ring-offset-0 radio-checked-bg"
                    name="category"
                    type="radio"
                  />
                  <div className="flex grow flex-col">
                    <p className="text-text-main dark:text-white text-sm font-medium leading-normal group-hover:text-primary transition-colors">
                      Fresh Produce
                    </p>
                    <p className="text-text-side text-xs font-normal leading-normal">
                      Farm fresh harvest
                    </p>
                  </div>
                </label>
              </div>
              <div className="mt-9 p-8 bg-primary/10 rounded-xl border border-primary/20">
                <h4 className="font-bold text-text-main dark:text-white mb-2">
                  Need Custom Orders?
                </h4>
                <p className="text-sm text-text-side mb-4">
                  We handle bulk requests for commercial farming.
                </p>
                <a href="/contact">
                <button className="w-full py-2 px-4 bg-white border border-primary text-primary font-bold rounded-lg text-sm hover:bg-primary hover:text-text-main transition-colors">
                  Contact Sales
                </button>
                </a>
              </div>
            </div>
          </aside>
          {/* <!-- Product Grid Area --> */}
          <main className="flex-1 flex flex-col gap-10">
            {/* <!-- Section 1: Seeds --> */}
            <section>
              <div className="flex items-center justify-between mb-6 border-b border-border-light pb-2">
                <h2 className="text-text-main dark:text-white text-2xl font-bold leading-tight">
                  Quality Seeds (Spawn)
                </h2>
                <a
                  className="text-sm font-bold text-primary hover:underline hidden sm:block"
                  href="#"
                >
                  View All Seeds
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* <!-- Product Card 1 --> */}
                <div className="group flex flex-col bg-white dark:bg-white/5 rounded-xl border border-border-light dark:border-white/10 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="aspect-4/3 w-full bg-gray-100 relative overflow-hidden">
                    <div
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBB8KOZYnOeIsynRjdgAzjtj9yoEhznvJ1GTpddc-0Lt8k77yK-AW8SS2429pGZyLwbJ6PvG-5kV0Sfwi4_3iWP_BFMqaBAvbeDnQwduOj3yU1owBuQWUX1Gg3hkeslF4Ge2MWxZfCJ8xj2ygJQMGuTva8zcKdbTUqjy_DCh9CyZibuasAPnW9AJq-AshVzPJnHdKQEioh1zpPrp9D9ogS0uvcQizA1qtoSr_gcTbaJiVGt_9Xqm1eSPjv_ohnkwD3UqKPd60rRCes')",
                      }}
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      data-alt="Close up of white oyster mushrooms growing"
                    ></div>
                    <div className="absolute top-3 left-3 bg-primary text-text-main text-xs font-bold px-2 py-1 rounded-full">
                      High Yield
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                        Oyster Mushroom Spawn
                      </h3>
                    </div>
                    <p className="text-text-side text-sm line-clamp-2 mb-4">
                      Laboratory certified, contamination-free spawn suitable
                      for all seasons. Fast colonization rate.
                    </p>
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="bg-primary/10 text-text-main text-[10px] uppercase font-bold px-3 py-2 rounded">
                        Organic
                      </span>
                      <span className="bg-primary/10 text-text-main text-[10px] uppercase font-bold px-3 py-2 rounded">
                        Lab Tested
                      </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border-light dark:border-white/10 flex items-center justify-between">
                      <span className="text-sm font-medium text-text-main dark:text-gray-300">
                        1kg Pack
                      </span>
                      <button className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                        Details
                        <span className="material-symbols-outlined text-lg">
                          <FaArrowRightLong />
                        </span>
                      </button>
                      <a href="./products/${product.slug}"></a>
                    </div>
                  </div>
                </div>
                {/* <!-- Product Card 2 --> */}
                <div className="group flex flex-col bg-white dark:bg-white/5 rounded-xl border border-border-light dark:border-white/10 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="aspect-4/3 w-full bg-gray-100 relative overflow-hidden">
                    <div
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfzh2sJkOhKMFryv_h-QUg1sWt_Br7nABrRIt8jRBwQx59DJAwiH3eB9xhWXGomJMHICPijYlJtYjsyvHnWpkfESgyoG9DdELoKX10Ke3yjZVPEUacAqrfWGv6EN5PjMq23TC0huA_QSzgSdHiT7rST7FwXoxmIY1PDjHzDsWe7oTuuAmISk91INgVmL2rScEcnXUMHSFFxXLnvHAUFzvbY0EkCWJ052lL4svhRCOkX4WOLGUIoyJWkt9Xc6MGTkH65LGQyL8dm5Y')",
                      }}
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      data-alt="Close up of white button mushrooms in soil"
                    ></div>
                    <div className="absolute top-3 left-3 bg-white/90 text-text-main text-xs font-bold px-2 py-1 rounded-full">
                      Commercial Grade
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">
                      Button Mushroom Spawn
                    </h3>
                    <p className="text-text-side text-sm line-clamp-2 mb-4">
                      Premium Agaricus bisporus strains designed for controlled
                      environment agriculture. Excellent shelf life.
                    </p>
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="bg-primary/10 text-text-main text-[10px] uppercase font-bold px-3 py-2 rounded">
                        High Protein
                      </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border-light dark:border-white/10 flex items-center justify-between">
                      <span className="text-sm font-medium text-text-main dark:text-gray-300">
                        Bulk Only
                      </span>
                      <button className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                        Details
                        <span className="material-symbols-outlined text-lg">
                          <FaArrowRightLong />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- Product Card 3 --> */}
                <div className="group flex flex-col bg-white dark:bg-white/5 rounded-xl border border-border-light dark:border-white/10 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="aspect-4/3 w-full bg-gray-100 relative overflow-hidden">
                    <div
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjok_S7IEFEaLsVeamuv8eJ9iNidl_A6IxgNDGjsvE9bwiENau4kb8oRnW8dlNY0dIgahpSA_xLfFb3XUg-shr5NUrn5rEr1XSA-nvgZIUTqAKgTJG6TfrEYEs6tuEmQ5phCqMX4pwTdMetOmykKZxDPhvHQr4TUSo5LqG24oXA1p_uXlLmnrE6f7PVUBRa211tCqXz3bhnxpvBqJ7XisyTu-b1QfR0aLQxmb6OYmbo3W2xGHGvJg3kxQr3e223jyMJJ88CoFjTBs')",
                      }}
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      data-alt="Large white milky mushrooms"
                    ></div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">
                      Milky Mushroom Spawn
                    </h3>
                    <p className="text-text-side text-sm line-clamp-2 mb-4">
                      Ideal for tropical climates. Robust growth and large
                      fruiting bodies with extended keeping quality.
                    </p>
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="bg-primary/10 text-text-main text-[10px] uppercase font-bold px-3 py-2 rounded">
                        Heat Tolerant
                      </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border-light dark:border-white/10 flex items-center justify-between">
                      <span className="text-sm font-medium text-text-main dark:text-gray-300">
                        500g Pack
                      </span>
                      <button className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                        Details
                        <span className="material-symbols-outlined text-lg">
                          <FaArrowRightLong />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- Section 2: Value Added --> */}
            <section>
              <div className="flex items-center justify-between mb-6 border-b border-border-light pb-2">
                <h2 className="text-text-main dark:text-white text-2xl font-bold leading-tight">
                  Value-Added Products
                </h2>
                <a
                  className="text-sm font-bold text-primary hover:underline hidden sm:block"
                  href="#"
                >
                  View All Products
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* <!-- Product Card 4 --> */}
                <div className="group flex flex-col bg-white dark:bg-white/5 rounded-xl border border-border-light dark:border-white/10 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="aspect-4/3 w-full bg-gray-100 relative overflow-hidden">
                    <div
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXwRo43dYr3JydHoMNNCSIApoH5E5BDjPeE9UmxXytiEDslJOd0bIH_w1caU_v4S6-tyX9HPE6WxSVT38YmtsoGj_6_gnjgqsilKVuOI1-7Zgdui_bvr4xjb9WN7wLzst-nZ0X67o1vXxw-t-4pOk_HRgUlGzmsYMgD9UptjlyZdJv6c92klmnWzBvFyZSD3rAD9n-37S7WevF7VEVfHRo3ziUrGDu6N1vfY_GW4tSpMV9AeYdNUlcwHVufeQJ3CrSL2kUplED_6U')",
                      }}
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      data-alt="Jar of spicy red pickle"
                    ></div>
                    <div className="absolute top-3 left-3 bg-primary text-text-main text-xs font-bold px-2 py-1 rounded-full">
                      Bestseller
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">
                      Spicy Mushroom Pickle
                    </h3>
                    <p className="text-text-side text-sm line-clamp-2 mb-4">
                      A tangy and spicy blend of oyster mushrooms and
                      traditional spices. No artificial preservatives.
                    </p>
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="bg-primary/10 text-text-main text-[10px] uppercase font-bold px-3 py-2 rounded">
                        Ready to Eat
                      </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border-light dark:border-white/10 flex items-center justify-between">
                      <span className="text-sm font-medium text-text-main dark:text-gray-300">
                        250g Jar
                      </span>
                      <button className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                        Details
                        <span className="material-symbols-outlined text-lg">
                          <FaArrowRightLong />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- Product Card 5 --> */}
                <div className="group flex flex-col bg-white dark:bg-white/5 rounded-xl border border-border-light dark:border-white/10 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="aspect-4/3 w-full bg-gray-100 relative overflow-hidden">
                    <div
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQ4VwH0iurOp9-cWUpxFN-_Sf9XkZx1EeD_3PRm8qm71pcHbmzn2Z-pmjadNJZL8rrUTrNSziIFCwXqEwS_tL3eMUko8lYkKHdXtOFd2xImlIzgFQWvfqPPWtDpxtATxOvxpsiM6wob5eVkLekHqZMwORxCbhWGvIEsPU73u_PvG9tca7J3qYjvf1e7tBk0iB9ANNBS5WQ-NFEi4RdC-3iM48hrvovjWfeKo4ualW8tH94FKNnZhIKR28lhWtJKnzj1aFVEh27UCg')",
                      }}
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      data-alt="Spoonful of protein powder"
                    ></div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">
                      Mushroom Protein Powder
                    </h3>
                    <p className="text-text-side text-sm line-clamp-2 mb-4">
                      100% vegan protein supplement made from dried mushrooms.
                      Great for soups and smoothies.
                    </p>
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="bg-primary/10 text-text-main text-[10px] uppercase font-bold px-3 py-2 rounded">
                        Vegan
                      </span>
                      <span className="bg-primary/10 text-text-main text-[10px] uppercase font-bold px-3 py-2 rounded">
                        Gluten Free
                      </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border-light dark:border-white/10 flex items-center justify-between">
                      <span className="text-sm font-medium text-text-main dark:text-gray-300">
                        500g Pack
                      </span>
                      <button className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                        Details
                        <span className="material-symbols-outlined text-lg">
                          <FaArrowRightLong />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        {/* <!-- Lead Generation / Footer Section --> */}
        <div className="bg-[#eefcee] dark:bg-background-dark border-t border-primary/20 mt-auto">
          <div className="max-w-960px mx-auto px-4 py-16 flex flex-col items-center text-center">
            <span className="bg-white dark:bg-white/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase mb-4">
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">
              Interested in Bulk Orders?
            </h2>
            <p className="text-text-side max-w-lg mb-8 text-lg">
              Get a customized quote for commercial farming spawn or wholesale
              product distribution.
            </p>
            <form className="w-full max-w-lg bg-white dark:bg-white/5 p-2 rounded-xl shadow-lg border border-border-light dark:border-white/10 flex flex-col sm:flex-row gap-2">
              <input
              type="email"
               value={email}
               onChange={(e) => {
                setEmail(e.target.value);
              setError("");
                  }}
                className="flex-1 bg-transparent border-none focus:ring-0 text-text-main dark:text-white placeholder:text-gray-400 px-4 py-3"
                placeholder="Enter your email address"
              />
              <button
                 onClick={handleSubmit}
                 type="button"
                  className="bg-primary text-text-main font-bold rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Request Quote
              </button>
            </form>
            {error && (
           <p className="text-red-500 text-sm mt-2">
             {error}
             </p>
               )}
            <p className="mt-4 text-l text-text-side">
              We respect your privacy. No spam.
            </p>
          </div>
        </div>
      </main>
    </main>
  );
}
