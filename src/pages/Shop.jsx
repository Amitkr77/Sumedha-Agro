import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/product";

export default function Shop() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-black text-text-main dark:text-white mb-10">
        Mushroom Product Catalog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              navigate(`/products/${product.slug}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="cursor-pointer bg-white dark:bg-white/5 border border-border-light dark:border-white/10 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">
                {product.name}
              </h3>

              <p className="text-sm text-text-side dark:text-gray-400 mb-4 line-clamp-2">
                {product.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="font-semibold text-primary">
                  ₹{product.price}
                </span>

                <button className="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded hover:bg-primary hover:text-black hover:border-primary transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
