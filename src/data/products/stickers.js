import { commonOptions } from "../options";

export const stickers = [
  {
    id: "SL-001",
    code: "SL-001",
    categoryId: "stickers-labels",
    name: "Waterproof Vinyl Die-Cut Sticker",
    slug: "waterproof-vinyl-die-cut-sticker",
    image: "/products/stickers-labels/sticker.jpg",
    description:
      "Durable self-adhesive waterproof vinyl labels precision Kiss-cut or die-cut to any shape.",
    minQuantity: 500,
    quantityStep: 500,
    productionTime: "2–3 Days",
    basePrice: 1750,
    unitName: "Stickers",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 500, pricePerUnit: 3.5 },
      { minQty: 1000, pricePerUnit: 2.6 },
    ],
    specifications: {
      material: "100 Micron White Vinyl Adhesive",
      finish: "Gloss / Matt Laminated",
      adhesive: "Strong Acrylic Permanent",
    },
    importantNotes: ["100% weather and outdoor sun resistant."],
    fileRequirements: {
      formats: ["PDF", "AI with Cut Contour Line"],
      minDpi: 300,
      bleed: "2 mm",
      safeArea: "2 mm",
    },
    options: [
      commonOptions.printing,
      commonOptions.finishType,
      commonOptions.fileOption,
    ],
  },
];
