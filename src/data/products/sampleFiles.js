import { commonOptions } from "../options";

export const sampleFiles = [
  {
    id: "SF-001",
    code: "SF-001",
    categoryId: "sample-files",
    name: "Master Sales Sample Kit Swatch Book",
    slug: "master-sales-sample-kit-swatch-book",
    image: "/products/sample-files/sample-kit.jpg",
    description:
      "Complete physical reference kit containing paper samples, GSM thicknesses, metal card swatches, and foil samples for client demo.",
    minQuantity: 1,
    quantityStep: 1,
    productionTime: "1 Day",
    basePrice: 999,
    unitName: "Kits",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [{ minQty: 1, pricePerUnit: 999 }],
    specifications: {
      contents:
        "Includes 40+ real print samples, GSM cards, Velvet/Matt swatches, Foil samples",
      weight: "850 grams",
    },
    importantNotes: ["Must-have sales kit for every field salesperson."],
    fileRequirements: {
      formats: ["Standard Kit - No Custom Artwork Needed"],
      minDpi: 300,
      bleed: "0 mm",
      safeArea: "0 mm",
    },
    options: [commonOptions.printing],
  },
];
