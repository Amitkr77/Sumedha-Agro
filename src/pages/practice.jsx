import { Divide } from 'lucide-react';
import React from 'react'

export default function practice() {
 const [section, setsection] = usestate(1);
 return (
    <section className='h-screen'>
        {section === 1 && (
            <div className='w-56 border'>
                first section {section}
                <input type="text" className='border' />
                <button onClick={() => setsection(2)}>next</button>
            </div>
        )}
        {Section ===2 && (
            <div className='w-56 border'>
                second section 
                <input type="text" className='border' />
                <button onClick={() => setsection(3)}>next</button>
                <button onClick={() => setsection(2)}>previous</button>
            </div>
        )}
        {section ===3 && (
            <div className='w-56 border'>
                third section 
                <input type="text" className='border' />
            </div>
        )}
    </section>
  )
}
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Get a Quote - Sumedha Agro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#2e995a",
                        "background-light": "#fcfcfc",
                        "background-dark": "#1d2623",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        body { font-family: 'Manrope', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-effect { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(8px); }
        .dark .glass-effect { background: rgba(29, 38, 35, 0.8); }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-[#101914] dark:text-gray-100 font-display transition-colors duration-300">
<!-- TopNavBar -->
<header class="sticky top-0 z-50 border-b border-[#e9f1ec] dark:border-gray-800 glass-effect">
<div class="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
<div class="flex items-center gap-3">
<div class="p-2 bg-primary rounded-lg text-white">
<span class="material-symbols-outlined block">agriculture</span>
</div>
<h1 class="text-xl font-extrabold tracking-tight text-[#101914] dark:text-white">Sumedha <span class="text-primary">Agro</span></h1>
</div>
<nav class="hidden md:flex items-center gap-10">
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#">Home</a>
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#">Products</a>
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#">Process</a>
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#">Sustainability</a>
</nav>
<div class="flex items-center gap-4">
<button class="text-sm font-medium border border-[#d3e3da] dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">Login</button>
<button class="bg-primary hover:bg-opacity-90 text-white text-sm font-bold px-5 py-2 rounded-lg transition-all shadow-sm">Get a Quote</button>
</div>
</div>
</header>
<main class="max-w-[960px] mx-auto px-6 py-12">
<!-- Header Image & Intro -->
<div class="mb-10">
<div class="relative w-full h-64 rounded-xl overflow-hidden shadow-xl mb-8">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Vibrant fresh organic mushrooms in a farm setting" style='background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCO5qZceNACJnnfdyx1ooFgH_Wo6NOCnp2H5QJSovXmqd3w5d5TzX2qrn1nDewvHGdzPqQiy7fDDgzsylZmQQMRq6HnO3AyEmnnbjdfI9C6KCuNgyz4oxM734Dm9FHJOBc8sQV19EjyV-5gYAkCivqIpL47zhS3QdTosEmqyLw-opbtB64CusaPl0Ka4dYrNDx1z9uhJGnb9DKFb8od3q9K5HlqHMjHMhiZ_KvR9hb-jzt9Y91BMKPPnOKQHTg4YhalSHh9idPOLFg");'></div>
<div class="absolute bottom-0 left-0 p-8">
<span class="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Wholesale Partners</span>
<h2 class="text-4xl font-extrabold text-white leading-tight">Request a Custom Quote</h2>
<p class="text-gray-200 mt-2 max-w-xl">Scale your business with high-quality mushroom spawn and bulk fresh produce directly from our agro-facility.</p>
</div>
</div>
<!-- Progress Tracker -->
<div class="bg-white dark:bg-[#25302c] p-6 rounded-xl border border-[#e9f1ec] dark:border-gray-800 shadow-sm">
<div class="flex flex-col gap-4">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="flex items-center justify-center size-8 rounded-full bg-primary text-white text-sm font-bold">1</span>
<span class="text-[#101914] dark:text-white font-bold text-lg">Product Selection</span>
</div>
<span class="text-sm font-medium text-primary">Step 1 of 3</span>
</div>
<div class="w-full bg-[#d3e3da] dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
<div class="bg-primary h-full transition-all duration-500" style="width: 33%;"></div>
</div>
<p class="text-[#5a8c6f] dark:text-gray-400 text-sm">Tell us which products fit your current distribution or processing needs.</p>
</div>
</div>
</div>
<!-- Section 1: Product Selection -->
<section class="mb-12">
<h3 class="text-[22px] font-bold text-[#101914] dark:text-white mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">shopping_basket</span>
                1. What are you looking for?
            </h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<!-- Product Card 1 -->
<div class="group relative bg-white dark:bg-[#25302c] border-2 border-[#e9f1ec] dark:border-gray-800 rounded-xl overflow-hidden hover:border-primary transition-all cursor-pointer p-4 aspect-square flex flex-col justify-between">
<div class="absolute top-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined">check_circle</span>
</div>
<div class="bg-primary/10 rounded-lg p-3 w-fit text-primary">
<span class="material-symbols-outlined text-3xl">psychiatry</span>
</div>
<div>
<p class="text-lg font-bold text-[#101914] dark:text-white leading-tight">Mushroom Seeds (Spawn)</p>
<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">High-yield spores for commercial growers.</p>
</div>
</div>
<!-- Product Card 2 -->
<div class="group relative bg-white dark:bg-[#25302c] border-2 border-primary rounded-xl overflow-hidden transition-all cursor-pointer p-4 aspect-square flex flex-col justify-between shadow-md">
<div class="absolute top-4 right-4 text-primary">
<span class="material-symbols-outlined">check_circle</span>
</div>
<div class="bg-primary/10 rounded-lg p-3 w-fit text-primary">
<span class="material-symbols-outlined text-3xl">eco</span>
</div>
<div>
<p class="text-lg font-bold text-[#101914] dark:text-white leading-tight">Bulk Fresh Mushrooms</p>
<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Daily harvested Oyster, Button &amp; Milky varieties.</p>
</div>
</div>
<!-- Product Card 3 -->
<div class="group relative bg-white dark:bg-[#25302c] border-2 border-[#e9f1ec] dark:border-gray-800 rounded-xl overflow-hidden hover:border-primary transition-all cursor-pointer p-4 aspect-square flex flex-col justify-between">
<div class="absolute top-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined">check_circle</span>
</div>
<div class="bg-primary/10 rounded-lg p-3 w-fit text-primary">
<span class="material-symbols-outlined text-3xl">liquor</span>
</div>
<div>
<p class="text-lg font-bold text-[#101914] dark:text-white leading-tight">Mushroom Pickles</p>
<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Premium value-added jars for retail outlet chains.</p>
</div>
</div>
</div>
</section>
<!-- Section 2: Order Specifications -->
<section class="mb-12">
<h3 class="text-[22px] font-bold text-[#101914] dark:text-white mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">tune</span>
                2. Order Specifications
            </h3>
<div class="bg-white dark:bg-[#25302c] p-8 rounded-xl border border-[#e9f1ec] dark:border-gray-800 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="space-y-2">
<label class="block text-sm font-bold text-gray-700 dark:text-gray-300">Estimated Monthly Volume</label>
<div class="relative">
<input class="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 pr-16" placeholder="e.g. 500" type="text"/>
<span class="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">KG</span>
</div>
</div>
<div class="space-y-2">
<label class="block text-sm font-bold text-gray-700 dark:text-gray-300">Packaging Preference</label>
<select class="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3">
<option>Eco-friendly Paper Trays</option>
<option>Plastic Punnet Crates</option>
<option>Bulk Sacks (for Spawn)</option>
<option>Retail Glass Jars</option>
</select>
</div>
<div class="space-y-2 md:col-span-2">
<label class="block text-sm font-bold text-gray-700 dark:text-gray-300">Delivery Frequency</label>
<div class="flex gap-4">
<label class="flex-1 flex items-center justify-center border-2 border-[#e9f1ec] dark:border-gray-700 p-3 rounded-lg cursor-pointer hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
<input checked="" class="hidden" name="freq" type="radio"/>
<span class="text-sm font-semibold">Weekly</span>
</label>
<label class="flex-1 flex items-center justify-center border-2 border-[#e9f1ec] dark:border-gray-700 p-3 rounded-lg cursor-pointer hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
<input class="hidden" name="freq" type="radio"/>
<span class="text-sm font-semibold">Bi-Weekly</span>
</label>
<label class="flex-1 flex items-center justify-center border-2 border-[#e9f1ec] dark:border-gray-700 p-3 rounded-lg cursor-pointer hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
<input class="hidden" name="freq" type="radio"/>
<span class="text-sm font-semibold">One-time</span>
</label>
</div>
</div>
</div>
</section>
<!-- Section 3: Business Details -->
<section class="mb-12">
<h3 class="text-[22px] font-bold text-[#101914] dark:text-white mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">business</span>
                3. Business Information
            </h3>
<div class="bg-white dark:bg-[#25302c] p-8 rounded-xl border border-[#e9f1ec] dark:border-gray-800 shadow-sm space-y-6">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="space-y-2">
<label class="block text-sm font-bold text-gray-700 dark:text-gray-300">Company Name</label>
<input class="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" placeholder="Organic Foods Ltd" type="text"/>
</div>
<div class="space-y-2">
<label class="block text-sm font-bold text-gray-700 dark:text-gray-300">GST / Tax ID (Optional)</label>
<input class="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" placeholder="AA000000000000" type="text"/>
</div>
<div class="space-y-2">
<label class="block text-sm font-bold text-gray-700 dark:text-gray-300">Full Name</label>
<input class="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" placeholder="John Doe" type="text"/>
</div>
<div class="space-y-2">
<label class="block text-sm font-bold text-gray-700 dark:text-gray-300">Work Email</label>
<input class="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" placeholder="john@company.com" type="email"/>
</div>
</div>
<div class="space-y-2">
<label class="block text-sm font-bold text-gray-700 dark:text-gray-300">Additional Requirements</label>
<textarea class="w-full border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" placeholder="Mention any specific quality standards, delivery location details, or mixed order requests..." rows="4"></textarea>
</div>
</div>
</section>
<!-- Form Submission -->
<div class="flex flex-col items-center gap-6">
<div class="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
<span class="material-symbols-outlined text-primary text-sm">verified_user</span>
<span class="text-xs font-bold text-[#101914] dark:text-gray-300">Trusted by 50+ Agro Partners in the region</span>
</div>
<button class="w-full max-w-md bg-primary hover:bg-opacity-95 text-white font-extrabold py-5 rounded-xl shadow-lg transform transition hover:-translate-y-1 active:scale-95 text-lg">
                Submit Quote Request
            </button>
<p class="text-sm text-gray-500 text-center">Our team will review your requirements and respond with a tailored pricing plan within 24 business hours.</p>
</div>
</main>
<!-- Footer -->
<footer class="bg-white dark:bg-[#151c1a] border-t border-[#e9f1ec] dark:border-gray-800 mt-20">
<div class="max-w-[1200px] mx-auto px-6 py-12">
<div class="flex flex-col md:flex-row justify-between items-center gap-8">
<div class="flex items-center gap-3">
<div class="size-8 bg-primary rounded-lg text-white flex items-center justify-center">
<span class="material-symbols-outlined text-lg">agriculture</span>
</div>
<h2 class="text-lg font-bold">Sumedha Agro</h2>
</div>
<div class="flex gap-8">
<a class="text-gray-500 hover:text-primary transition-colors text-sm font-medium" href="#">Terms</a>
<a class="text-gray-500 hover:text-primary transition-colors text-sm font-medium" href="#">Privacy</a>
<a class="text-gray-500 hover:text-primary transition-colors text-sm font-medium" href="#">Help Center</a>
</div>
<div class="flex gap-4">
<a class="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
<span class="material-symbols-outlined text-xl">language</span>
</a>
<a class="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
<span class="material-symbols-outlined text-xl">alternate_email</span>
</a>
</div>
</div>
<div class="text-center mt-12 text-sm text-gray-400">
                © 2024 Sumedha Agro-Tech Industries. All rights reserved. Cultivating quality for a sustainable future.
            </div>
</div>
</footer>
</body></html>
<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Get a Quote - Step 3 Review - Sumedha Agro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#2e995a",
                        "background-light": "#fcfcfc",
                        "background-dark": "#1d2623",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        body { font-family: 'Manrope', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-effect { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(8px); }
        .dark .glass-effect { background: rgba(29, 38, 35, 0.8); }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-[#101914] dark:text-gray-100 font-display transition-colors duration-300">
<header class="sticky top-0 z-50 border-b border-[#e9f1ec] dark:border-gray-800 glass-effect">
<div class="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
<div class="flex items-center gap-3">
<div class="p-2 bg-primary rounded-lg text-white">
<span class="material-symbols-outlined block">agriculture</span>
</div>
<h1 class="text-xl font-extrabold tracking-tight text-[#101914] dark:text-white">Sumedha <span class="text-primary">Agro</span></h1>
</div>
<nav class="hidden md:flex items-center gap-10">
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#">Home</a>
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#">Products</a>
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#">Process</a>
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#">Sustainability</a>
</nav>
<div class="flex items-center gap-4">
<button class="text-sm font-medium border border-[#d3e3da] dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">Login</button>
<button class="bg-primary hover:bg-opacity-90 text-white text-sm font-bold px-5 py-2 rounded-lg transition-all shadow-sm">Get a Quote</button>
</div>
</div>
</header>
<main class="max-w-[960px] mx-auto px-6 py-12">
<div class="mb-10">
<div class="relative w-full h-48 rounded-xl overflow-hidden shadow-xl mb-8">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Review your quote request" style='background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCO5qZceNACJnnfdyx1ooFgH_Wo6NOCnp2H5QJSovXmqd3w5d5TzX2qrn1nDewvHGdzPqQiy7fDDgzsylZmQQMRq6HnO3AyEmnnbjdfI9C6KCuNgyz4oxM734Dm9FHJOBc8sQV19EjyV-5gYAkCivqIpL47zhS3QdTosEmqyLw-opbtB64CusaPl0Ka4dYrNDx1z9uhJGnb9DKFb8od3q9K5HlqHMjHMhiZ_KvR9hb-jzt9Y91BMKPPnOKQHTg4YhalSHh9idPOLFg");'></div>
<div class="absolute bottom-0 left-0 p-8">
<h2 class="text-3xl font-extrabold text-white leading-tight">Review Your Request</h2>
<p class="text-gray-200 mt-1 max-w-xl">Please confirm all details before submitting your wholesale quote request.</p>
</div>
</div>
<div class="bg-white dark:bg-[#25302c] p-6 rounded-xl border border-[#e9f1ec] dark:border-gray-800 shadow-sm">
<div class="flex flex-col gap-4">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="flex items-center justify-center size-8 rounded-full bg-primary text-white text-sm font-bold">3</span>
<span class="text-[#101914] dark:text-white font-bold text-lg">Review and Submit</span>
</div>
<span class="text-sm font-medium text-primary">Step 3 of 3</span>
</div>
<div class="w-full bg-[#d3e3da] dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
<div class="bg-primary h-full transition-all duration-500" style="width: 100%;"></div>
</div>
<p class="text-[#5a8c6f] dark:text-gray-400 text-sm">Almost there! Finalize your inquiry to receive our competitive pricing.</p>
</div>
</div>
</div>
<div class="space-y-8">
<section class="bg-white dark:bg-[#25302c] rounded-xl border border-[#e9f1ec] dark:border-gray-800 shadow-sm overflow-hidden">
<div class="bg-[#f8faf9] dark:bg-[#2a3833] px-6 py-4 border-b border-[#e9f1ec] dark:border-gray-800 flex justify-between items-center">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary">inventory_2</span>
<h3 class="font-bold text-[#101914] dark:text-white">Product &amp; Order Details</h3>
</div>
<button class="text-sm font-bold text-primary hover:underline flex items-center gap-1">
<span class="material-symbols-outlined text-sm">edit</span> Edit
                </button>
</div>
<div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Selected Product</p>
<div class="flex items-center gap-3">
<div class="bg-primary/10 rounded-lg p-2 text-primary">
<span class="material-symbols-outlined">eco</span>
</div>
<div>
<p class="font-bold text-[#101914] dark:text-white">Bulk Fresh Mushrooms</p>
<p class="text-sm text-gray-500">Oyster &amp; Button Varieties</p>
</div>
</div>
</div>
<div class="grid grid-cols-2 gap-4">
<div>
<p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Volume</p>
<p class="font-bold text-[#101914] dark:text-white">500 KG / Month</p>
</div>
<div>
<p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Frequency</p>
<p class="font-bold text-[#101914] dark:text-white">Weekly</p>
</div>
<div>
<p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Packaging</p>
<p class="font-bold text-[#101914] dark:text-white">Eco-friendly Paper Trays</p>
</div>
</div>
</div>
</section>
<section class="bg-white dark:bg-[#25302c] rounded-xl border border-[#e9f1ec] dark:border-gray-800 shadow-sm overflow-hidden">
<div class="bg-[#f8faf9] dark:bg-[#2a3833] px-6 py-4 border-b border-[#e9f1ec] dark:border-gray-800 flex justify-between items-center">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary">business_center</span>
<h3 class="font-bold text-[#101914] dark:text-white">Business Information</h3>
</div>
<button class="text-sm font-bold text-primary hover:underline flex items-center gap-1">
<span class="material-symbols-outlined text-sm">edit</span> Edit
                </button>
</div>
<div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="space-y-4">
<div>
<p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Company</p>
<p class="font-bold text-[#101914] dark:text-white text-lg">Organic Foods Ltd</p>
<p class="text-sm text-gray-500">GST: AA000000000000</p>
</div>
</div>
<div class="space-y-4">
<div>
<p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Primary Contact</p>
<p class="font-bold text-[#101914] dark:text-white">John Doe</p>
<p class="text-sm text-gray-500">john@company.com</p>
</div>
</div>
<div class="md:col-span-2 pt-4 border-t border-gray-100 dark:border-gray-800">
<p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Additional Requirements</p>
<p class="text-sm text-[#5a8c6f] dark:text-gray-300 italic">"Please ensure temperature-controlled logistics for the Friday deliveries. We are also interested in organic certification documentation."</p>
</div>
</div>
</section>
<section class="space-y-8 mt-12">
<div class="flex items-start gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
<div class="pt-0.5">
<input class="size-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer" id="terms" type="checkbox"/>
</div>
<label class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed cursor-pointer" for="terms">
                    I agree to the <a class="text-primary font-bold underline" href="#">Terms of Service</a> and confirm that the information provided above is accurate for the purpose of a commercial quote from Sumedha Agro-Tech Industries.
                </label>
</div>
<div class="flex flex-col items-center gap-6">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-sm">shield</span>
<span class="text-xs font-bold uppercase tracking-widest">Secure Submission</span>
</div>
<div class="flex flex-col md:flex-row gap-4 w-full">
<button class="flex-1 border-2 border-[#e9f1ec] dark:border-gray-700 text-[#101914] dark:text-white font-bold py-5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined">arrow_back</span>
                        Previous Step
                    </button>
<button class="flex-[2] bg-primary hover:bg-opacity-95 text-white font-extrabold py-5 rounded-xl shadow-lg transform transition hover:-translate-y-1 active:scale-95 text-xl flex items-center justify-center gap-3">
                        Confirm and Send Request
                        <span class="material-symbols-outlined">send</span>
</button>
</div>
<p class="text-xs text-gray-500 text-center max-w-lg">
                    By clicking "Confirm and Send Request", your inquiry will be prioritized. A specialized account manager will contact you with a detailed proposal and contract draft within 24 hours.
                </p>
</div>
</section>
</div>
</main>
<footer class="bg-white dark:bg-[#151c1a] border-t border-[#e9f1ec] dark:border-gray-800 mt-20">
<div class="max-w-[1200px] mx-auto px-6 py-12">
<div class="flex flex-col md:flex-row justify-between items-center gap-8">
<div class="flex items-center gap-3">
<div class="size-8 bg-primary rounded-lg text-white flex items-center justify-center">
<span class="material-symbols-outlined text-lg">agriculture</span>
</div>
<h2 class="text-lg font-bold">Sumedha Agro</h2>
</div>
<div class="flex gap-8">
<a class="text-gray-500 hover:text-primary transition-colors text-sm font-medium" href="#">Terms</a>
<a class="text-gray-500 hover:text-primary transition-colors text-sm font-medium" href="#">Privacy</a>
<a class="text-gray-500 hover:text-primary transition-colors text-sm font-medium" href="#">Help Center</a>
</div>
<div class="flex gap-4">
<a class="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
<span class="material-symbols-outlined text-xl">language</span>
</a>
<a class="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
<span class="material-symbols-outlined text-xl">alternate_email</span>
</a>
</div>
</div>
<div class="text-center mt-12 text-sm text-gray-400">
            © 2024 Sumedha Agro-Tech Industries. All rights reserved. Cultivating quality for a sustainable future.
        </div>
</div>
</footer>

</body></html>
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Quote Request Success - Sumedha Agro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#2e995a",
                        "background-light": "#f6f8f7",
                        "background-dark": "#141e18",
                        "earthy-gold": "#E7D280",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Manrope', sans-serif;
        }
        .organic-shape {
            clip-path: circle(50% at 50% 50%);
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display transition-colors duration-300">
<!-- Top Navigation Bar -->
<header class="w-full bg-background-light dark:bg-background-dark border-b border-[#e9f1ec] dark:border-white/10 sticky top-0 z-50">
<div class="max-w-[1200px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-8 h-8 text-primary">
<svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-[#101914] dark:text-white text-xl font-bold tracking-tight">Sumedha Agro</h2>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-[#101914] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Products</a>
<a class="text-[#101914] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Solutions</a>
<a class="text-[#101914] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Sustainability</a>
<a class="text-[#101914] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">About Us</a>
</nav>
<div class="flex items-center gap-4">
<button class="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-primary/90 transition-all">
                    Contact Us
                </button>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
<!-- Abstract Decoration Elements -->
<div class="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
<div class="absolute -bottom-20 -right-20 w-96 h-96 bg-earthy-gold/5 rounded-full blur-3xl"></div>
<div class="w-full max-w-[640px] flex flex-col items-center">
<!-- Success Illustration Area -->
<div class="mb-8 w-48 h-48 bg-white dark:bg-background-dark rounded-full flex items-center justify-center shadow-xl shadow-primary/10 border border-primary/20 relative">
<div class="absolute inset-0 bg-primary/5 rounded-full animate-pulse"></div>
<!-- Main Mushroom Illustration using Icons & Shapes for distinction -->
<div class="relative z-10 flex flex-col items-center">
<span class="material-symbols-outlined text-[80px] text-primary" style="font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;">mouse</span>
<div class="absolute -top-2 -right-2 bg-earthy-gold text-white rounded-full p-2 shadow-lg">
<span class="material-symbols-outlined text-xl">check</span>
</div>
</div>
</div>
<!-- Confirmation Message -->
<div class="text-center mb-10">
<h1 class="text-[#101914] dark:text-white text-4xl font-extrabold tracking-tight mb-4">Request Received!</h1>
<p class="text-[#101914]/70 dark:text-gray-400 text-lg max-w-[500px] mx-auto leading-relaxed">
                    Thank you for your interest in Sumedha Agro's mushroom-based solutions. We've received your inquiry and our team is already on it.
                </p>
</div>
<!-- Info Container -->
<div class="w-full bg-white dark:bg-[#1c2a21] border border-[#d3e3da] dark:border-white/10 rounded-xl p-8 shadow-sm mb-10">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#d3e3da] dark:divide-white/10">
<!-- Reference Number -->
<div class="flex flex-col items-center md:items-start md:pr-4">
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-primary text-sm">confirmation_number</span>
<span class="text-[#101914]/60 dark:text-gray-400 text-xs font-bold uppercase tracking-widest">Reference ID</span>
</div>
<p class="text-2xl font-black text-[#101914] dark:text-white tracking-tight">#SAG-88291</p>
</div>
<!-- Timeline Info -->
<div class="flex flex-col items-center md:items-start md:pl-8 pt-6 md:pt-0">
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-primary text-sm">schedule</span>
<span class="text-[#101914]/60 dark:text-gray-400 text-xs font-bold uppercase tracking-widest">Estimated Wait</span>
</div>
<p class="text-lg font-semibold text-[#101914] dark:text-white leading-snug">
                            24-48 Business Hours
                        </p>
<p class="text-sm text-[#101914]/60 dark:text-gray-400 mt-1">A representative will reach out shortly.</p>
</div>
</div>
</div>
<!-- Secondary Confirmation Detail -->
<div class="text-center mb-10 px-6">
<p class="text-[#101914]/60 dark:text-gray-400 text-sm">
                    A confirmation email has been sent to your registered address. Please check your spam folder if you don't see it in your inbox.
                </p>
</div>
<!-- Call to Actions -->
<div class="flex flex-col sm:flex-row gap-4 w-full">
<a class="flex-1 bg-primary text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20" href="#">
<span class="material-symbols-outlined text-lg">home</span>
                    Return to Homepage
                </a>
<a class="flex-1 border-2 border-primary/20 text-primary dark:text-primary dark:border-primary/40 font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/5 transition-all" href="#">
<span class="material-symbols-outlined text-lg">inventory_2</span>
                    Browse More Products
                </a>
</div>
</div>
</main>
<!-- Footer Simple -->
<footer class="w-full py-8 border-t border-[#e9f1ec] dark:border-white/10 mt-auto">
<div class="max-w-[1200px] mx-auto px-6 text-center">
<p class="text-[#101914]/40 dark:text-gray-500 text-sm font-medium">
                © 2024 Sumedha Agro Industries. All rights reserved. Sustainable Agritech for a greener future.
            </p>
</div>
</footer>
</body></html>