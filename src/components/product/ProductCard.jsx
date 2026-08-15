import React from "react";
import { Link } from "react-router-dom";
import { FiClock, FiLayers, FiArrowRight } from "react-icons/fi";
import ProductImage from "../common/ProductImage";
import { useQuote } from "@/context/QuoteContext";

export default function ProductCard({ product }) {
  const { customPrices } = useQuote();

  // Render stylized card if cardDisplay metadata exists (Image 1 style)
  if (product.cardDisplay) {
    const {
      headerTitle,
      theme = "amber",
      badge,
      productCodeDisplay,
      laminationType,
      uvOption,
      foilOption,
      dieCutOption,
      textureOption,
      customizedDieCut,
      productionTimeDisplay,
      extraNote,
    } = product.cardDisplay;

    const themeStyles = {
      amber: {
        header: "bg-amber-600 text-white border-amber-700",
        badge: "bg-red-600 text-white",
        code: "text-amber-800",
        uv: "text-amber-700",
        foil: "text-amber-700",
        die: "text-amber-700",
      },
      green: {
        header: "bg-emerald-700 text-white border-emerald-800",
        badge: "bg-rose-600 text-white",
        code: "text-emerald-900",
        uv: "text-emerald-700",
        foil: "text-emerald-700",
        die: "text-emerald-700",
      },
      pink: {
        header: "bg-[#BE185D] text-white border-pink-800",
        badge: "bg-amber-500 text-slate-900",
        code: "text-pink-900",
        uv: "text-pink-700",
        foil: "text-pink-700",
        die: "text-pink-700",
      },
      red: {
        header: "bg-red-700 text-white border-red-800",
        badge: "bg-yellow-400 text-black",
        code: "text-red-900",
        uv: "text-red-700",
        foil: "text-red-700",
        die: "text-red-700",
      },
      blue: {
        header: "bg-amber-600 text-white border-amber-700",
        badge: "bg-red-600 text-white",
        code: "text-amber-900",
        uv: "text-blue-700",
        foil: "text-amber-700",
        die: "text-cyan-800",
      },
      metal: {
        header: "bg-red-700 text-white border-red-800",
        badge: "bg-amber-400 text-black",
        code: "text-slate-900",
        uv: "text-slate-700",
        foil: "text-slate-700",
        die: "text-slate-700",
      },
    };

    const currentTheme = themeStyles[theme] || themeStyles.amber;

    return (
      <Link
        to={`/product/${product.slug}`}
        className="group bg-white rounded-lg border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-400 transition-all duration-200 flex flex-col overflow-hidden text-center p-3 select-none cursor-pointer h-full"
      >
        {/* Top Graphic Solid Square Block Header */}
        <div
          className={`relative h-28 w-full rounded-md ${currentTheme.header} flex items-center justify-center p-2.5 shadow-xs border overflow-hidden`}
        >
          {/* Subtle sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          {/* Badge Ribbon (e.g. Coming Soon) */}
          {badge && (
            <div className="absolute top-2 -right-8 bg-red-600 text-white font-extrabold text-[8px] px-8 py-0.5 transform rotate-45 shadow-xs uppercase tracking-wider z-10">
              {badge}
            </div>
          )}

          <h3 className="text-white font-black text-xs sm:text-sm tracking-wide uppercase leading-tight text-center drop-shadow-xs whitespace-pre-line">
            {headerTitle}
          </h3>
        </div>

        {/* Card Spec Details List (Sample board spec layout) */}
        <div className="mt-2.5 space-y-1 text-center text-[10px] sm:text-[11px] leading-snug text-slate-700 flex-1 flex flex-col justify-between">
          <div className="space-y-0.5">
            <div className={`font-black text-xs ${currentTheme.code}`}>
              {productCodeDisplay || `Product Code: ${product.code}`}
            </div>

            {laminationType && (
              <div className="text-slate-700 font-medium">{laminationType}</div>
            )}
            {uvOption && (
              <div className="text-slate-600 font-medium">{uvOption}</div>
            )}
            {foilOption && (
              <div className="text-slate-600 font-medium">{foilOption}</div>
            )}
            {dieCutOption && (
              <div className="text-slate-600 font-medium">{dieCutOption}</div>
            )}
            {textureOption && (
              <div className="text-slate-600 font-medium">{textureOption}</div>
            )}
            {customizedDieCut && (
              <div className="text-slate-600 font-medium">
                {customizedDieCut}
              </div>
            )}
            {productionTimeDisplay && (
              <div className="text-slate-500 font-semibold pt-0.5">
                {productionTimeDisplay}
              </div>
            )}
          </div>

          {extraNote && (
            <p className="text-[9px] text-red-600 leading-tight italic pt-1 mt-1 border-t border-slate-100 font-medium">
              {extraNote}
            </p>
          )}

          <div className="pt-2 border-t border-slate-100 mt-2">
            <div className="flex items-center justify-between text-xs">
              <span className="inline-flex items-center text-blue-600 font-extrabold group-hover:translate-x-0.5 transition-transform text-[11px]">
                Configure →
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Standard Product Card layout for other catalog items
  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-200 flex flex-col overflow-hidden group">
      {/* Image & Code Badge Header */}
      <div className="h-44 w-full bg-slate-50 relative overflow-hidden">
        <ProductImage
          src={product.image}
          alt={product.name}
          categoryName={product.categoryId}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
          <span className="text-blue-400">#</span>
          {product.code}
        </div>
        {customPrices[product.id] !== undefined && (
          <div className="absolute top-2.5 right-2.5 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow-xs uppercase tracking-wider">
            Custom Price
          </div>
        )}
      </div>

      {/* Card Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {product.name}
          </h4>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Key Quick Metadata */}
          <div className="mt-3 grid grid-cols-2 gap-2 py-2 px-2.5 bg-slate-50 rounded-lg text-[11px] text-slate-600 border border-slate-100">
            <div className="flex items-center space-x-1.5">
              <FiLayers className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="truncate">
                Min:{" "}
                <strong>
                  {product.minQuantity} {product.unitName || "Units"}
                </strong>
              </span>
            </div>
            <div className="flex items-center space-x-1.5">
              <FiClock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="truncate">
                Time: <strong>{product.productionTime}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Pricing & CTA Footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/product/${product.slug}`}
            className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs group-hover:shadow-sm"
          >
            <span>Configure</span>
            <FiArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
