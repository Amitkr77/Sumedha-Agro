import React from "react";
export const products = [
  {
    id: "1",
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    price: 999,
    category: "Smartphones",
    image: "https://via.placeholder.com/300x300?text=iPhone+15+Pro",
    description: "Apple iPhone 15 Pro with A17 chip and titanium body.",
  },
  {
    id: "2",
    slug: "macbook-pro-m3",
    name: "MacBook Pro M3",
    price: 1999,
    category: "Laptops",
    image: "https://via.placeholder.com/300x300?text=MacBook+Pro+M3",
    description: "Powerful MacBook Pro with Apple M3 chip.",
  },
  {
    id: "3",
    slug: "airpods-pro-2",
    name: "AirPods Pro (2nd Gen)",
    price: 249,
    category: "Accessories",
    image: "https://via.placeholder.com/300x300?text=AirPods+Pro",
    description: "Noise-cancelling wireless earbuds from Apple.",
  },
  {
    id: "4",
    slug: "samsung-galaxy-s24",
    name: "Samsung Galaxy S24",
    price: 899,
    category: "Smartphones",
    image: "https://via.placeholder.com/300x300?text=Galaxy+S24",
    description: "Flagship Samsung phone with AI-powered features.",
  },
];

export default function Shop() {
  return <div>
    {
        products.map()
    }
  </div>;
}
