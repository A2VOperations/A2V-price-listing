import { commonOptions } from "../options";

export const digitalPaper = [
  {
    id: "DPP-001",
    code: "DPP-001",
    categoryId: "digital-paper-printing",
    name: "300 GSM Digital Sheet Print (12×18 inch)",
    slug: "300gsm-digital-sheet-print",
    image: "/products/digital-paper-printing/digital-print.jpg",
    description:
      "Instant high-definition Xerox production color prints on 12×18 inch 300 GSM Art Card.",
    minQuantity: 50,
    quantityStep: 50,
    productionTime: "1 Day",
    basePrice: 1250,
    unitName: "Sheets",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 50, pricePerUnit: 25.0 },
      { minQty: 100, pricePerUnit: 20.0 },
    ],
    specifications: {
      material: "300 GSM Gloss / Matt Art Card",
      sheetSize: "12 × 18 Inches",
      printEngine: "Xerox Iridesse 2400 DPI",
    },
    importantNotes: [
      "Same-day urgent dispatch available for emergency meetings.",
    ],
    fileRequirements: {
      formats: ["PDF", "TIFF", "JPG"],
      minDpi: 300,
      bleed: "3 mm",
      safeArea: "3 mm",
    },
    options: [
      commonOptions.printing,
      commonOptions.finishType,
      commonOptions.fileOption,
    ],
  },
];
