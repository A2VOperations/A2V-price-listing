import { commonOptions } from "../options";

export const envelopes = [
  {
    id: "ENV-001",
    code: "ENV-001",
    categoryId: "envelopes",
    name: "Executive DL Envelope (100 GSM)",
    slug: "executive-dl-envelope-100gsm",
    image: "/products/envelopes/envelope.jpg",
    description:
      "Standard business letter size DL envelopes (9 × 4 inch) with self-adhesive peel & seal strip.",
    minQuantity: 500,
    quantityStep: 500,
    productionTime: "3 Days",
    basePrice: 2100,
    unitName: "Envelopes",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 500, pricePerUnit: 4.2 },
      { minQty: 1000, pricePerUnit: 3.4 },
    ],
    specifications: {
      material: "100 GSM Maplitho Paper",
      size: "220 × 110 mm (DL)",
      flap: "Peel & Seal Strip",
    },
    importantNotes: ["Fits standard folded A4 letterheads."],
    fileRequirements: {
      formats: ["PDF", "AI"],
      minDpi: 300,
      bleed: "2 mm",
      safeArea: "3 mm",
    },
    options: [commonOptions.printing, commonOptions.fileOption],
  },
];
