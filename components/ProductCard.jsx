"use client";
import React, {useState} from "react";

export const ProductCard = ({product}) => {

    const fallbackImage =
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop";

    const [imgSrc, setImgSrc] = useState(product.imageUrl);

    return (
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-hover duration-300 hover:shadow-lg">
            {/* Image Section */}
            <div className="relative h-64 w-full bg-gray-100">
                <img
                    src={imgSrc}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    // If the image fails to load, switch to fallback
                    onError={() => setImgSrc(fallbackImage)}
                />
            </div>

            {/* Content Section */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                        {product.name}
                    </h2>
                    <span className="text-lg font-semibold text-blue-600">
            ${product.price.toLocaleString()}
          </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                </p>

                <div className="flex flex-col gap-2">
                    <button
                        className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                        Add to Cart
                    </button>
                    <button
                        className="w-full bg-white border border-gray-300 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

