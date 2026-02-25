import React, {useState} from 'react'
import { IoMdArrowForward } from "react-icons/io";
import { FaTractor } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import logo from "../assets/Logo.webp";


export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: newsletterEmail }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Subscribed successfully!");
      setNewsletterEmail("");
    } else {
      alert(data.error || "Something went wrong");
    }

  } catch (error) {
    console.error("Subscribe error:", error);
    alert("Server error");
  }
};
  return (
    // <!-- Footer -->
<footer className="w-full bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
<div className="max-w-1280px mx-auto px-4 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-4 text-text-main dark:text-white">
  <div className="flex items-center justify-center">
    <img
      src={logo} 
      alt="Sumedha Agro Logo"
      className="h-10 w-auto object-contain"
      width="70"
      height="70"
    />
  </div>

  <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
    Sumedha Agro
  </h2>
</div>
<p className="text-text-main/60 dark:text-slate-400 text-sm mb-6">
 Pioneering the future of fungal agronomy with sustainable practices and cutting-edge technology.
 </p>
<div className="flex gap-4">
<a className="text-text-main/60 dark:text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined"><MdEmail size={30}/></span></a>
<a className="text-text-main/60 dark:text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined"><CiShare2 size={30} /></span></a>
</div>
</div>
<div>
<h3 className="text-text-main dark:text-white font-bold mb-4">Company</h3>
<ul className="flex flex-col gap-3 text-sm text-text-main/70 dark:text-slate-400">
<li><a className="hover:text-primary transition-colors" href="/About">About Us</a></li>
<li><a className="hover:text-primary transition-colors" href="/Contact">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-text-main dark:text-white font-bold mb-4">Products</h3>
<ul className="flex flex-col gap-3 text-sm text-text-main/70 dark:text-slate-400">
<li><a className="hover:text-primary transition-colors" href="/Products">Fresh Mushrooms</a></li>
<li><a className="hover:text-primary transition-colors" href="/Products">Functional Powders</a></li>
<li><a className="hover:text-primary transition-colors" href="/Products">Mycelium Kits</a></li>
<li><a className="hover:text-primary transition-colors" href="/Products">Wholesale</a></li>
</ul>
</div>
<div>
<h3 className="text-text-main dark:text-white font-bold mb-4">Stay Updated</h3>
<p className="text-sm text-text-main/70 dark:text-slate-400 mb-4">Subscribe to our newsletter for the latest in agritech.</p>
<form onSubmit={handleSubscribe} className="flex gap-2">
  <input
    className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-primary text-text-main dark:text-white"
    placeholder="Enter email"
    type="email"
    value={newsletterEmail}
    onChange={(e) => setNewsletterEmail(e.target.value)}
    required
  />
  <button
    type="submit"
    aria-label="Submit form"
    className="bg-primary text-[#0d1b0d] p-2 rounded-lg hover:bg-primary/90 transition-colors"
  >
    <IoMdArrowForward />
  </button>
</form>
</div>
</div>
<div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-main/50 dark:text-slate-500">
<p>© 2025 Sumedha Agro. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-text-main dark:hover:text-white transition-colors" href="/Privacy">Privacy Policy</a>
<a className="hover:text-text-main dark:hover:text-white transition-colors" href="/Termsofservices">Terms of Service</a>
</div>
</div>
</div>
</footer>
  )
}
