import { commonOptions } from "../options";

export const atmPouches = [
  {
    id: "AP-001",
    code: "AP-001",
    categoryId: "atm-pouches",
    name: "Custom Printed ATM Card Sleeve",
    slug: "custom-printed-atm-card-sleeve",
    image: "/products/atm-pouches/atm-pouch.jpg",
    description:
      "Branded paper and clear polymer protective sleeve pouches for debit/credit card security.",
    minQuantity: 1000,
    quantityStep: 1000,
    productionTime: "3–4 Days",
    basePrice: 1800,
    unitName: "Pouches",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 1000, pricePerUnit: 1.8 },
      { minQty: 5000, pricePerUnit: 1.3 },
    ],
    specifications: {
      material: "170 GSM Gloss Paper Pouch",
      size: "62 × 95 mm",
      insert: "Top Thumb Slot Cut",
    },
    importantNotes: ["Keeps magstripes and chip contacts protected."],
    fileRequirements: {
      formats: ["PDF", "AI"],
      minDpi: 300,
      bleed: "2 mm",
      safeArea: "3 mm",
    },
    options: [commonOptions.printing, commonOptions.fileOption],
  },
];
