import { commonOptions } from "../options";

export const letterHeads = [
  {
    id: "LH-001",
    code: "LH-001",
    categoryId: "letter-heads",
    name: "100 GSM Bond Paper Letterheads",
    slug: "100gsm-bond-letterhead",
    image: "/products/letter-heads/letterhead.jpg",
    description:
      "Crisp white executive 100 GSM Sunshine Bond paper suitable for inkjet and laser printing.",
    minQuantity: 500,
    quantityStep: 500,
    productionTime: "2 Days",
    basePrice: 1750,
    unitName: "Sheets",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 500, pricePerUnit: 3.5 },
      { minQty: 1000, pricePerUnit: 2.8 },
    ],
    specifications: {
      material: "100 GSM Premium Bond Paper",
      size: "210 × 297 mm (A4)",
      binding: "Top Loose / Pad",
    },
    importantNotes: ["Guaranteed 100% printer compatible without curling."],
    fileRequirements: {
      formats: ["PDF", "CDR", "Word PDF"],
      minDpi: 300,
      bleed: "2 mm",
      safeArea: "4 mm",
    },
    options: [commonOptions.printing, commonOptions.fileOption],
  },
];
