"use client";

import React, { useState } from "react";
import ProductImage from "../common/ProductImage";

export default function ProductGallery({ product }) {
  const [activeImage, setActiveImage] = useState(product.image);

  // Gallery thumbnail list
  const thumbnails = [
    product.image,
    // Add representative variations for gallery preview
    `/products/${product.categoryId}/detail-view-1.jpg`,
    `/products/${product.categoryId}/detail-view-2.jpg`
  ];

  return (
    <div className="space-y-3">
      {/* Main Image Display */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs h-72 sm:h-96 w-full flex items-center justify-center p-2 relative group">
        <ProductImage
          src={activeImage}
          alt={product.name}
          categoryName={product.categoryId}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-1 rounded">
          Product Code: {product.code}
        </div>
      </div>

      {/* Thumbnails list */}
      <div className="flex items-center space-x-2">
        {thumbnails.map((thumbSrc, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(thumbSrc)}
            className={`w-16 h-16 rounded-lg border-2 overflow-hidden bg-slate-50 transition-all ${
              activeImage === thumbSrc
                ? "border-blue-600 ring-2 ring-blue-600/20"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <ProductImage
              src={thumbSrc}
              alt={`${product.name} view ${idx + 1}`}
              categoryName={product.categoryId}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
