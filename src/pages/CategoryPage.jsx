import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductCard from "@/components/product/ProductCard";
import EmptyState from "@/components/common/EmptyState";
import { FiSearch, FiLayers } from "react-icons/fi";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);
  const allProducts = category ? getProductsByCategory(category.id) : [];

  const [searchQuery, setSearchQuery] = useState("");

  if (!category) {
    return (
      <EmptyState
        title="Category Not Found"
        message={`No category exists with slug "${slug}".`}
        actionText="Return to Dashboard"
        actionHref="/"
      />
    );
  }

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.subCategory && product.subCategory.toLowerCase().includes(searchQuery.toLowerCase())) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group products by subCategory if any exist
  const groupedProducts = {};
  filteredProducts.forEach((product) => {
    const subCat = product.subCategory || "General Products";
    if (!groupedProducts[subCat]) {
      groupedProducts[subCat] = [];
    }
    groupedProducts[subCat].push(product);
  });

  const hasSubCategories = Object.keys(groupedProducts).some(
    (key) => key !== "General Products"
  );

  return (
    <div className="space-y-8">
      <Breadcrumb items={[{ label: category.name }]} />

      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-blue-50 text-blue-600 font-bold">
              <FiLayers className="w-5 h-5" />
            </span>
            <h1 className="text-xl font-bold text-slate-900">{category.name}</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
            {category.description}
          </p>
        </div>

        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder={`Search in ${category.name}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
          />
          <FiSearch className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <EmptyState
          title="No Products Found in Category"
          message={`No product matches "${searchQuery}" under ${category.name}.`}
          actionText="Clear Filter"
          actionHref={`/category/${slug}`}
        />
      ) : hasSubCategories ? (
        // Grouped Layout (Sample Board Style with Color-Coded Sub-Headings)
        <div className="space-y-10">
          {(() => {
            const preferredOrder = [
              "500 GSM + VELVET CARDS (QTY. 500 CARDS)",
              "500 GSM + MATT CARDS (QTY. 500 CARDS)",
              "NT / PVC VISITING CARDS (QTY 100, 500 & 1000 CARDS)",
              "REGULAR VISITING CARDS (QTY. 1000 CARDS)",
              "METAL VISITING CARDS (QTY. 10 CARDS)"
            ];

            const entries = Object.entries(groupedProducts);
            entries.sort((a, b) => {
              const indexA = preferredOrder.indexOf(a[0]);
              const indexB = preferredOrder.indexOf(b[0]);
              if (indexA !== -1 && indexB !== -1) return indexA - indexB;
              if (indexA !== -1) return -1;
              if (indexB !== -1) return 1;
              return a[0].localeCompare(b[0]);
            });

            return entries.map(([subCategoryName, prods]) => {
              let titleColor = "text-blue-800";
              let borderColor = "border-blue-600";
              let gridCols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4";

              if (subCategoryName.includes("500 GSM")) {
                titleColor = "text-amber-600";
                borderColor = "border-amber-500";
                gridCols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6";
              } else if (subCategoryName.includes("NT / PVC")) {
                titleColor = "text-emerald-700";
                borderColor = "border-emerald-600";
                gridCols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6";
              } else if (subCategoryName.includes("REGULAR")) {
                titleColor = "text-[#BE185D]";
                borderColor = "border-[#BE185D]";
                gridCols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6";
              } else if (subCategoryName.includes("METAL")) {
                titleColor = "text-red-600";
                borderColor = "border-red-600";
                gridCols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6";
              }

              return (
                <div key={subCategoryName} className="space-y-4">
                  <div className={`border-b-2 ${borderColor} pb-1.5`}>
                    <h2 className={`text-base sm:text-lg font-black tracking-tight ${titleColor} uppercase flex items-center gap-2`}>
                      {subCategoryName}
                    </h2>
                  </div>

                  <div className={`grid ${gridCols} gap-4`}>
                    {prods.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            });
          })()}
        </div>
      ) : (
        // Standard Grid Layout
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
