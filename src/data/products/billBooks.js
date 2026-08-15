import { commonOptions } from "../options";

export const billBooks = [
  {
    id: "BB-001",
    code: "BB-001",
    categoryId: "bill-books",
    name: "Duplicate NCR Bill Book (50 Sets)",
    slug: "duplicate-ncr-bill-book",
    image: "/products/bill-books/bill-book.jpg",
    description:
      "Carbonless NCR paper bill books in duplicate (1st White, 2nd Pink) with sequential numbering.",
    minQuantity: 10,
    quantityStep: 5,
    productionTime: "3–4 Days",
    basePrice: 1500,
    unitName: "Books",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 10, pricePerUnit: 150 },
      { minQty: 25, pricePerUnit: 125 },
    ],
    specifications: {
      material: "55 GSM Carbonless NCR Paper",
      size: "1/5th or 1/4th Page",
      numbering: "Red Ink Serial",
    },
    importantNotes: [
      "Please mention starting serial number in notes (e.g., 001).",
    ],
    fileRequirements: {
      formats: ["PDF", "CDR"],
      minDpi: 300,
      bleed: "2 mm",
      safeArea: "4 mm",
    },
    options: [commonOptions.printing, commonOptions.fileOption],
  },
];
