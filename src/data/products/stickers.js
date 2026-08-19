
import stickersImg from "../../assets/images/categories (9).webp";

export const stickers = [
  {
    id: "SL-001",
    code: "STK",
    categoryId: "stickers-labels",
    subCategory: "STICKERS & LABELS",
    name: "Stickers",
    slug: "waterproof-vinyl-die-cut-sticker",
    image: stickersImg,
    description:
      "High quality custom self-adhesive stickers and labels available in Without Half Cut, With Round Cut, and With Straight Cut options. Ideal for product packaging, branding, seals, and promotional labels.",
    minQuantity: 1000,
    quantityStep: 1000,
    productionTime: "Within 3-5 days from file upload",
    basePrice: 1200,
    unitName: "Stickers",
    pricingModel: "quantity_tiered",

    variantCombinations: [
      "Sticker ( Without Half Cut )",
      "Sticker ( With Round Cut )",
      "Sticker ( With Straight Cut )",
    ],

    variantDetails: {
      "Sticker ( Without Half Cut )": {
        code: "ST-1",
        basePrice: 1200,
        minQuantity: 1000,
        quantityStep: 1000,
        productionTime: "Within 7 days from file upload",
        quantityPricingTiers: [
          { minQty: 1000, pricePerUnit: 1.2 },
          { minQty: 2000, pricePerUnit: 1.0 },
          { minQty: 3000, pricePerUnit: 0.9 },
          { minQty: 5000, pricePerUnit: 0.8 },
        ],
        specifications: {
          "Product Ref.": "ST/ 2nd Edition (Sample File)",
          "Product Code": "ST-1",
          "Product Size": '7"X9.5"',
          "Production Time": "Within 7 days from file upload",
          "Pricing Note":
            "Price discount applicable (System auto calculate) with increase in Quantity",
        },
        ourSpecialization: [
          "Printing with latest Komori offset machines (2023 Model)",
          "Innovative, Advanced & Equipped Post Printing Unit",
          "Constant quality with reasonable price",
        ],
        productSpecialization: [
          "Ready-to-use sticker format without half-cut processing",
          "Ideal for branding, packaging and promotional applications",
          "Suitable for a wide range of commercial and business requirements",
        ],
        importantNotes: [
          "Apply the sticker only on clean, smooth and dry surfaces.",
          "Best results are achieved on smooth surfaces such as glass, tiles, laminate and metal.",
          "Before applying on a wall, clean the surface thoroughly with a dry cloth.",
          "Ensure that both the sticker and the surface are completely dry and free from moisture before application.",
          "Press the sticker gently and firmly after application for proper adhesion.",
        ],
        fileRequirements: {
          formats: ["PDF", "CDR", "AI"],
          minDpi: 300,
          fullDesignSize: '7" X 9.5"',
          safeArea: "3 mm inside boundary",
          bleed: "3 mm",
        },
        options: [
          {
            id: "sheetSize",
            name: "Sheet Size",
            type: "select",
            required: true,
            values: [{ label: '7" x 9.5" (inch)', priceAdjustment: 0 }],
          },
          {
            id: "lamination",
            name: "Lamination",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Gloss Lamination", priceAdjustment: 0 },
            ],
          },
        ],
      },
      "Sticker ( With Round Cut )": {
        code: "ST-2",
        basePrice: 1500,
        minQuantity: 1000,
        quantityStep: 1000,
        productionTime: "Within 7 days from file upload",
        quantityPricingTiers: [
          { minQty: 1000, pricePerUnit: 1.5 },
          { minQty: 2000, pricePerUnit: 1.3 },
          { minQty: 3000, pricePerUnit: 1.15 },
          { minQty: 5000, pricePerUnit: 1.0 },
        ],
        specifications: {
          "Product Ref.": "ST/ 2nd Edition (Sample File)",
          "Product Code": "ST- 2",
          "Product Size": '7" X 9.5"',
          "Half-Cut Options": "Available with 6 cut size options",
          "Production Time": "Within 7 days from file upload",
          "Pricing Note":
            "Price discount applicable (System auto calculate) with increase in Quantity",
        },
        ourSpecialization: [
          "Printing with latest Komori offset machines (2023 Model)",
          "Innovative, Advanced & Equipped Post Printing Unit",
          "Constant quality with reasonable price",
        ],
        productSpecialization: [
          "Available with 6 round half-cut size options for different application needs",
          "Easy peel-and-use design for convenient sticker application",
          "Precision round cutting ensures a clean and professional finish",
          "Ideal for branding, packaging, labeling and promotional use",
          "Suitable for a wide range of commercial and business requirements",
        ],
        importantNotes: [
          "Apply the sticker only on clean, smooth and dry surfaces.",
          "Best results are achieved on smooth surfaces such as glass, tiles, laminate and metal.",
          "Before applying on a wall, clean the surface thoroughly with a dry cloth.",
          "Ensure that both the sticker and the surface are completely dry and free from moisture before application.",
          "Press the sticker gently and firmly after application for proper adhesion.",
        ],
        fileRequirements: {
          formats: ["PDF", "CDR", "AI"],
          minDpi: 300,
          fullDesignSize: '7" X 9.5"',
          safeArea: "3 mm inside boundary",
          bleed: "3 mm",
        },
        options: [
          {
            id: "sheetSize",
            name: "Sheet Size",
            type: "select",
            required: true,
            values: [{ label: '7" x 9.5" (inch)', priceAdjustment: 0 }],
          },

          {
            id: "lamination",
            name: "Lamination",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Gloss Lamination", priceAdjustment: 0 },
            ],
          },
          {
            id: "halfCutOptions",
            name: "Half-Cut Options",
            type: "select",
            required: true,
            values: [
              { label: "1 round sticker of 170x170 MM", priceAdjustment: 0 },
              { label: "2 round sticker of 115x115 MM", priceAdjustment: 0 },
              { label: "6 round sticker of 75x75 MM", priceAdjustment: 0 },
              { label: "12 round sticker of 55x55 MM", priceAdjustment: 0 },
              { label: "20 round sticker of 40x40 MM", priceAdjustment: 0 },
              { label: "35 round sticker of 30x30 MM", priceAdjustment: 0 },
            ],
          },
        ],
      },
      "Sticker ( With Straight Cut )": {
        code: "ST-3",
        basePrice: 1350,
        minQuantity: 1000,
        quantityStep: 1000,
        productionTime: "Within 7 days from file upload",
        quantityPricingTiers: [
          { minQty: 1000, pricePerUnit: 1.35 },
          { minQty: 2000, pricePerUnit: 1.15 },
          { minQty: 3000, pricePerUnit: 1.0 },
          { minQty: 5000, pricePerUnit: 0.85 },
        ],
        specifications: {
          "Product Ref.": "ST/ 2nd Edition (Sample File)",
          "Product Code": "ST-3",
          "Product Size": '7"X9.5"',
          "Half-Cut Options": "Available with 15 cut size options",
          "Production Time": "Within 7 days from file upload",
          "Pricing Note":
            "Price discount applicable (System auto calculate) with increase in Quantity",
        },
        ourSpecialization: [
          "Printing with latest Komori offset machines (2023 Model)",
          "Innovative, Advanced & Equipped Post Printing Unit",
          "Constant quality with reasonable price",
        ],
        productSpecialization: [
          "Available with 15 straight-cut size options for versatile usage",
          "Precision half-cutting ensures easy peeling and application",
          "Clean and accurate straight cuts for a professional finish",
          "Ideal for product labels, packaging, branding and promotional stickers",
          "Suitable for commercial, retail and business applications",
        ],
        importantNotes: [
          "Apply the sticker only on clean, smooth and dry surfaces.",
          "Best results are achieved on smooth surfaces such as glass, tiles, laminate and metal.",
          "Before applying on a wall, clean the surface thoroughly with a dry cloth.",
          "Ensure that both the sticker and the surface are completely dry and free from moisture before application.",
          "Press the sticker gently and firmly after application for proper adhesion.",
        ],
        fileRequirements: {
          formats: ["PDF", "CDR", "AI"],
          minDpi: 300,
          fullDesignSize: '7" X 9.5"',
          safeArea: "3 mm inside boundary",
          bleed: "3 mm",
        },
        options: [
          {
            id: "sheetSize",
            name: "Sheet Size",
            type: "select",
            required: true,
            values: [{ label: '7" x 9.5" (inch)', priceAdjustment: 0 }],
          },

          {
            id: "lamination",
            name: "Lamination",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Gloss Lamination", priceAdjustment: 0 },
            ],
          },
          {
            id: "halfCutOptions",
            name: "Half-Cut Options",
            type: "select",
            required: true,
            values: [
              { label: "2 round sticker of 178x118 MM", priceAdjustment: 0 },
              { label: "3 round sticker of 178x79 MM", priceAdjustment: 0 },
              { label: "4 round sticker of 178x59 MM", priceAdjustment: 0 },
              { label: "4 round sticker of 90x118 MM", priceAdjustment: 0 },
              { label: "6 round sticker of 90x40 MM", priceAdjustment: 0 },
              { label: "6 round sticker of 60x120 MM", priceAdjustment: 0 },
              { label: "8 round sticker of 90x59 MM", priceAdjustment: 0 },
              { label: "9 round sticker of 60x80 MM", priceAdjustment: 0 },
              { label: "10 round sticker of 178x24 MM", priceAdjustment: 0 },
              { label: "12 round sticker of 90x40 MM", priceAdjustment: 0 },
              { label: "12 round sticker of 60x60 MM", priceAdjustment: 0 },
              { label: "18 round sticker of 60x40 MM", priceAdjustment: 0 },
              { label: "20 round sticker of 90x24 MM", priceAdjustment: 0 },
              { label: "30 round sticker of 60x24 MM", priceAdjustment: 0 },
            ],
          },
        ],
      },
    },

    specifications: {
      "Product Ref.": "STK/01st Edition (Sample File)",
      "Product Code": "STK",
      "Product Class": "Self Adhesive Stickers & Labels",
      "Cutting Types Available":
        "Without Half Cut / With Round Cut / With Straight Cut",
      "Paper / Material": "Self Adhesive Chromo Paper / Vinyl Sticker",
      "Production Time": "Within 3-5 days from file upload",
      "Pricing Note":
        "Price discount applicable (System auto calculate) with increase in Quantity",
    },
    ourSpecialization: [
      "Printing with latest offset & digital press machines",
      "Innovative, Advanced & Equipped Post Printing Unit",
      "Constant quality with reasonable price",
    ],
    productSpecialization: [
      "Available in Without Half Cut, With Round Cut, and With Straight Cut options",
      "High tack permanent adhesive for strong grip on plastic, paper & cardboard",
      "Custom sizes, shapes and finishing options available",
    ],
    importantNotes: [
      "Choose your sticker cutting style from the product dropdown menu.",
      "Vector PDF/CDR/AI files with 300 DPI yield best print results.",
    ],
    fileRequirements: {
      formats: ["PDF", "CDR", "AI"],
      minDpi: 300,
      bleed: "3 mm",
      safeArea: "3 mm",
    },
  },
];
