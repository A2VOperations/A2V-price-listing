import { commonOptions } from "../options";

export const shootingTargets = [
  {
    id: "ST-001",
    code: "ST-001",
    categoryId: "shooting-targets",
    name: "Standard Paper Shooting Target (17×24 in)",
    slug: "standard-paper-shooting-target",
    image: "/products/shooting-targets/target.jpg",
    description:
      "Heavy 120 GSM Maplitho paper shooting score targets for tactical range & archery practice.",
    minQuantity: 100,
    quantityStep: 100,
    productionTime: "2 Days",
    basePrice: 1500,
    unitName: "Sheets",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 100, pricePerUnit: 15 },
      { minQty: 500, pricePerUnit: 11 },
    ],
    specifications: {
      material: "120 GSM Non-Glare Paper",
      size: "17 × 24 Inches",
      print: "High Contrast Black & Red Bullseye",
    },
    importantNotes: ["Crisp bullet hole tears for accurate scoring."],
    fileRequirements: {
      formats: ["PDF"],
      minDpi: 300,
      bleed: "2 mm",
      safeArea: "3 mm",
    },
    options: [commonOptions.printing, commonOptions.fileOption],
  },
];
