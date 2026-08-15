import { commonOptions } from "../options";

export const pens = [
  {
    id: "PN-001",
    code: "PN-001",
    categoryId: "pens",
    name: "Laser Engraved Metal Rollerball Pen",
    slug: "laser-engraved-metal-rollerball-pen",
    image: "/products/pens/pen.jpg",
    description:
      "Sleek matte black metallic pen with precision mirror laser etched logo and silver chrome clip.",
    minQuantity: 50,
    quantityStep: 25,
    productionTime: "3 Days",
    basePrice: 2250,
    unitName: "Pens",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 50, pricePerUnit: 45 },
      { minQty: 100, pricePerUnit: 38 },
    ],
    specifications: {
      material: "Brass Alloy Body",
      inkColor: "German Blue / Black Refill",
      branding: "Laser Engraving",
    },
    importantNotes: ["Refillable standard rollerball cartridge."],
    fileRequirements: {
      formats: ["Vector AI", "PDF"],
      minDpi: 300,
      bleed: "0 mm",
      safeArea: "1 mm",
    },
    options: [commonOptions.printing, commonOptions.fileOption],
  },
];
