import { commonOptions } from "../options";
import digitalPaperImg from "../../assets/images/categories (1).webp";

export const digitalPaper = [
  {
    id: "DPP-001",
    code: "DPP-LH",
    categoryId: "digital-paper-printing",
    subCategory: "PAPER PRINTING",
    name: "LETTER HEAD PAPER",
    slug: "letter-head-paper",
    image: digitalPaperImg,
    description:
      "Digital paper printing on high-quality letterhead paper stock (12×18 inch / A4). Available in Deo Paper and Excel Bond Paper options.",
    variantCombinations: ["Deo Paper", "Excel Bond Paper"],
    variantDetails: {
      "Deo Paper": {
        code: "DPP-LH-DEO",
        basePrice: 1250,
        minQuantity: 25,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 25, pricePerUnit: 25.0 },
          { minQty: 30, pricePerUnit: 20.0 },
          { minQty: 35, pricePerUnit: 16.0 },
        ],
        specifications: {
          "Product Code": "DPP-LH-DEO",
          "Product Size": "12 × 17 Inches (Sheet Print)",
          "Paper Quality": "Deo Paper",
          "Production Time": "1 Day",
          "Print Engine": "Xerox Production Press (2400 DPI)",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "size",
            name: "Size",
            type: "select",
            required: true,
            values: [{ label: "12 × 17 Inches", priceAdjustment: 0 }],
          },
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [
              { label: "Single Side", priceAdjustment: 0 },
              { label: "Both Side ", priceAdjustment: 300 },
            ],
          },
        ],
      },
      "Excel Bond Paper": {
        code: "DPP-LH-EXCEL",
        basePrice: 1450,
        minQuantity: 50,
        quantityStep: 50,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 50, pricePerUnit: 29.0 },
          { minQty: 100, pricePerUnit: 24.0 },
          { minQty: 250, pricePerUnit: 20.0 },
        ],
        specifications: {
          "Product Code": "DPP-LH-EXCEL",
          "Product Size": "12 × 18 Inches (Sheet Print)",
          "Paper Quality": "Excel Bond Paper",
          "Production Time": "1 Day",
          "Print Engine": "Xerox Production Press (2400 DPI)",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "size",
            name: "Size",
            type: "select",
            required: true,
            values: [{ label: "12 × 17 Inches", priceAdjustment: 0 }],
          },
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [
              { label: "Single Side", priceAdjustment: 0 },
              { label: "Both Side ", priceAdjustment: 300 },
            ],
          },
        ],
      },
    },
    specifications: {
      "Product Code": "DPP-LH",
      "Product Size": "12 × 18 Inches (Sheet Print)",
      "Paper Option": "Deo Paper / Excel Bond Paper",
      "Production Time": "1 Day",
      "Print Engine": "Xerox Production Press (2400 DPI)",
      "Pricing Note": "Price discount applicable with increase in quantity.",
    },
    ourSpecialization: [
      "High-speed Xerox digital production press printing",
      "Vivid color rendering with sharp text resolution",
      "Fast same-day turnaround available for urgent orders",
    ],
    productSpecialization: [
      "Quality: Premium Deo Paper & Excel Bond Paper options.",
      "Precision: 2400 DPI crisp digital printing.",
      "Utility: Short-run office letterheads, vouchers, and official documents.",
    ],
    importantNotes: [
      "Maximum Printable Area: 11.5 × 17.5 Inches on 12×18 inch sheet.",
      "Maintain a 3 mm safe margin inside design boundaries for text.",
      "Use CMYK color profile for optimal color fidelity.",
    ],
    fileRequirements: {
      formats: ["PDF", "CDR", "AI", "TIFF", "JPG"],
      minDpi: 300,
      sheetSize: "12 × 18 Inches",
      bleed: "3 mm",
      safeArea: "3 mm",
    },
  },
  {
    id: "DPP-002",
    code: "DPP-ART",
    categoryId: "digital-paper-printing",
    subCategory: "PAPER PRINTING",
    name: "ART PAPER",
    slug: "art-paper",
    image: digitalPaperImg,
    description:
      "High-definition digital color printing on Gloss and Matt Art Paper (120 GSM to 350 GSM). Ideal for brochures, flyers, posters, and photo prints.",
    variantCombinations: [
      "Digital Printout - 170 GSM",
      "Digital Printout - 120 GSM",
      "Digital Printout - 210 GSM",
      "Digital Printout - 250 GSM",
      "Digital Printout - 300 GSM",
      "Digital Printout - 350 GSM",
    ],
    variantDetails: {
      "Digital Printout - 170 GSM": {
        code: "DPP-ART-170",
        basePrice: 1350,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 27.0 },
          { minQty: 20, pricePerUnit: 22.0 },
          { minQty: 30, pricePerUnit: 18.0 },
        ],
        specifications: {
          "Product Code": "DPP-ART-170",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "170 GSM Art Paper",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "size",
            name: "Size",
            type: "select",
            required: true,
            values: [
              { label: "12 × 18 Inches", priceAdjustment: 0 },
              { label: "13 × 19 Inches", priceAdjustment: 0 },
            ],
          },
          {
            id: "limination",
            name: "Limination",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Gloss Limination", priceAdjustment: 0 },
              { label: "Matt Limination", priceAdjustment: 0 },
            ],
          },
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [
              { label: "Single Side", priceAdjustment: 0 },
              { label: "Both Side ", priceAdjustment: 300 },
            ],
          },
        ],
      },
      "Digital Printout - 120 GSM": {
        code: "DPP-ART-120",
        basePrice: 1200,
        minQuantity: 25,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 25, pricePerUnit: 24.0 },
          { minQty: 50, pricePerUnit: 20.0 },
          { minQty: 100, pricePerUnit: 16.0 },
        ],
        specifications: {
          "Product Code": "DPP-ART-120",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "120 GSM Art Paper",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "size",
            name: "Size",
            type: "select",
            required: true,
            values: [{ label: "12 × 18 Inches", priceAdjustment: 0 }],
          },
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [
              { label: "Single Side", priceAdjustment: 0 },
              { label: "Both Side ", priceAdjustment: 300 },
            ],
          },
        ],
      },
      "Digital Printout - 210 GSM": {
        code: "DPP-ART-210",
        basePrice: 1450,
        minQuantity: 25,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 25, pricePerUnit: 29.0 },
          { minQty: 50, pricePerUnit: 24.0 },
          { minQty: 100, pricePerUnit: 20.0 },
        ],
        specifications: {
          "Product Code": "DPP-ART-210",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "210 GSM Art Paper",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "size",
            name: "Size",
            type: "select",
            required: true,
            values: [
              { label: "12 × 18 Inches", priceAdjustment: 0 },
              { label: "13 × 19 Inches", priceAdjustment: 0 },
            ],
          },
          {
            id: "limination",
            name: "Limination",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Gloss Limination", priceAdjustment: 0 },
              { label: "Matt Limination", priceAdjustment: 0 },
            ],
          },
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [
              { label: "Single Side", priceAdjustment: 0 },
              { label: "Both Side ", priceAdjustment: 300 },
            ],
          },
        ],
      },
      "Digital Printout - 250 GSM": {
        code: "DPP-ART-250",
        basePrice: 1550,
        minQuantity: 25,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 25, pricePerUnit: 31.0 },
          { minQty: 50, pricePerUnit: 26.0 },
          { minQty: 100, pricePerUnit: 22.0 },
        ],
        specifications: {
          "Product Code": "DPP-ART-250",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "250 GSM Art Paper",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "size",
            name: "Size",
            type: "select",
            required: true,
            values: [
              { label: "12 × 18 Inches", priceAdjustment: 0 },
              { label: "13 × 19 Inches", priceAdjustment: 0 },
            ],
          },
          {
            id: "limination",
            name: "Limination",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Gloss Limination", priceAdjustment: 0 },
              { label: "Matt Limination", priceAdjustment: 0 },
            ],
          },
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [
              { label: "Single Side", priceAdjustment: 0 },
              { label: "Both Side ", priceAdjustment: 300 },
            ],
          },
        ],
      },
      "Digital Printout - 300 GSM": {
        code: "DPP-ART-300",
        basePrice: 1700,
        minQuantity: 25,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 25, pricePerUnit: 34.0 },
          { minQty: 50, pricePerUnit: 29.0 },
          { minQty: 100, pricePerUnit: 24.0 },
        ],
        specifications: {
          "Product Code": "DPP-ART-300",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "300 GSM Art Card",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "size",
            name: "Size",
            type: "select",
            required: true,
            values: [{ label: "12 × 18 Inches", priceAdjustment: 0 }],
          },
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [
              { label: "Single Side", priceAdjustment: 0 },
              { label: "Both Side ", priceAdjustment: 300 },
            ],
          },
        ],
      },
      "Digital Printout - 350 GSM": {
        code: "DPP-ART-350",
        basePrice: 1850,
        minQuantity: 25,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 25, pricePerUnit: 37.0 },
          { minQty: 50, pricePerUnit: 32.0 },
          { minQty: 100, pricePerUnit: 27.0 },
        ],
        specifications: {
          "Product Code": "DPP-ART-350",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "350 GSM Heavy Art Card",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "size",
            name: "Size",
            type: "select",
            required: true,
            values: [
              { label: "12 × 18 Inches", priceAdjustment: 0 },
              { label: "13 × 19 Inches", priceAdjustment: 0 },
            ],
          },
          {
            id: "limination",
            name: "Limination",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Gloss Limination", priceAdjustment: 0 },
              { label: "Matt Limination", priceAdjustment: 0 },
            ],
          },
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [
              { label: "Single Side", priceAdjustment: 0 },
              { label: "Both Side ", priceAdjustment: 300 },
            ],
          },
        ],
      },
    },
    specifications: {
      "Product Code": "DPP-ART",
      "Product Size": "12 × 18 Inches",
      "Paper Option":
        "120 GSM / 170 GSM / 210 GSM / 250 GSM / 300 GSM / 350 GSM Art Paper",
      "Production Time": "1 Day",
      "Finish Options": "Gloss Lamination / Matt Lamination",
      "Pricing Note": "Price discount applicable with increase in quantity.",
    },
    ourSpecialization: [
      "Rich tone saturation & photo-realistic image depth",
      "Instant drying digital toner formulation",
      "Optional gloss & velvet touch lamination post-processing",
    ],
    productSpecialization: [
      "Quality: Heavyweight Gloss / Matt Art Paper.",
      "Precision: Exceptional color vibrancy for high-impact graphics.",
      "Utility: Promotional flyers, posters, brochures, and photo catalogs.",
    ],
    importantNotes: [
      "Sheet Size: 12 × 18 Inches (SRA3).",
      "Bleed Area: Add 3 mm bleed on all sides for full-bleed printing.",
      "High-resolution 300 DPI images recommended.",
    ],
    fileRequirements: {
      formats: ["PDF", "CDR", "AI", "TIFF", "JPG"],
      minDpi: 300,
      sheetSize: "12 × 18 Inches",
      bleed: "3 mm",
      safeArea: "3 mm",
    },
  },
  {
    id: "DPP-003",
    code: "DPP-TEXTURE",
    categoryId: "digital-paper-printing",
    subCategory: "PREMIUM PAPERS",
    name: "TEXTURE PAPER",
    slug: "texture-paper",
    image: digitalPaperImg,
    description:
      "Luxury textured paper digital printing featuring fine linen, canvas, SBS White, SBS Natural, and Metallic finishes. Perfect for executive certificates, premium cards, and artistic prints.",
    variantCombinations: [
      "12x18 - Texture Sheet - SBS White - Code 101",
      "12x18 - Texture Sheet - SBS White - Code 102",
      "12x18 - Texture Sheet - SBS White - Code 103",
      "12x18 - Texture Sheet - SBS White - Code 104",
      "12x18 - Texture Sheet - SBS White - Code 105",
      "12x18 - Texture Sheet - SBS White - Code 106",
      "12x18 - Texture Sheet - SBS Natural - Code 107",
      "12x18 - Texture Sheet - SBS Natural - Code 108",
      "12x18 - Texture Sheet - Metallic Golden - Code 41",
      "12x18 - Texture Sheet - Metallic Silver - Code 42",
    ],
    variantDetails: {
      "12x18 - Texture Sheet - SBS White - Code 101": {
        code: "DPP-TXT-101",
        basePrice: 1600,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 32.0 },
          { minQty: 20, pricePerUnit: 26.0 },
          { minQty: 30, pricePerUnit: 22.0 },
        ],
        specifications: {
          "Product Code": "DPP-TXT-101",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "Texture Sheet - SBS White (Code 101)",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [{ label: "Single Side", priceAdjustment: 0 }],
          },
        ],
      },
      "12x18 - Texture Sheet - SBS White - Code 102": {
        code: "DPP-TXT-102",
        basePrice: 1600,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 32.0 },
          { minQty: 20, pricePerUnit: 26.0 },
          { minQty: 30, pricePerUnit: 22.0 },
        ],
        specifications: {
          "Product Code": "DPP-TXT-102",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "Texture Sheet - SBS White (Code 102)",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [
              { label: "Single Side", priceAdjustment: 0 },
              { label: "Both Side ", priceAdjustment: 300 },
            ],
          },
        ],
      },
      "12x18 - Texture Sheet - SBS White - Code 103": {
        code: "DPP-TXT-103",
        basePrice: 1600,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 32.0 },
          { minQty: 20, pricePerUnit: 26.0 },
          { minQty: 30, pricePerUnit: 22.0 },
        ],
        specifications: {
          "Product Code": "DPP-TXT-103",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "Texture Sheet - SBS White (Code 103)",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [{ label: "Single Side", priceAdjustment: 0 }],
          },
        ],
      },
      "12x18 - Texture Sheet - SBS White - Code 104": {
        code: "DPP-TXT-104",
        basePrice: 1600,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 32.0 },
          { minQty: 20, pricePerUnit: 26.0 },
          { minQty: 30, pricePerUnit: 22.0 },
        ],
        specifications: {
          "Product Code": "DPP-TXT-104",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "Texture Sheet - SBS White (Code 104)",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [{ label: "Single Side", priceAdjustment: 0 }],
          },
        ],
      },
      "12x18 - Texture Sheet - SBS White - Code 105": {
        code: "DPP-TXT-105",
        basePrice: 1600,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 32.0 },
          { minQty: 20, pricePerUnit: 26.0 },
          { minQty: 30, pricePerUnit: 22.0 },
        ],
        specifications: {
          "Product Code": "DPP-TXT-105",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "Texture Sheet - SBS White (Code 105)",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [{ label: "Single Side", priceAdjustment: 0 }],
          },
        ],
      },
      "12x18 - Texture Sheet - SBS White - Code 106": {
        code: "DPP-TXT-106",
        basePrice: 1600,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 32.0 },
          { minQty: 20, pricePerUnit: 26.0 },
          { minQty: 30, pricePerUnit: 22.0 },
        ],
        specifications: {
          "Product Code": "DPP-TXT-106",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "Texture Sheet - SBS White (Code 106)",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [{ label: "Single Side", priceAdjustment: 0 }],
          },
        ],
      },
      "12x18 - Texture Sheet - SBS Natural - Code 107": {
        code: "DPP-TXT-107",
        basePrice: 1600,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 32.0 },
          { minQty: 20, pricePerUnit: 26.0 },
          { minQty: 30, pricePerUnit: 22.0 },
        ],
        specifications: {
          "Product Code": "DPP-TXT-107",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "Texture Sheet - SBS Natural (Code 107)",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [{ label: "Single Side", priceAdjustment: 0 }],
          },
        ],
      },
      "12x18 - Texture Sheet - SBS Natural - Code 108": {
        code: "DPP-TXT-108",
        basePrice: 1600,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 32.0 },
          { minQty: 20, pricePerUnit: 26.0 },
          { minQty: 30, pricePerUnit: 22.0 },
        ],
        specifications: {
          "Product Code": "DPP-TXT-108",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "Texture Sheet - SBS Natural (Code 108)",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [{ label: "Single Side", priceAdjustment: 0 }],
          },
        ],
      },
      "12x18 - Texture Sheet - Metallic Golden - Code 41": {
        code: "DPP-TXT-041",
        basePrice: 1800,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 36.0 },
          { minQty: 20, pricePerUnit: 30.0 },
          { minQty: 30, pricePerUnit: 25.0 },
        ],
        specifications: {
          "Product Code": "DPP-TXT-041",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "Texture Sheet - Metallic Golden (Code 41)",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [{ label: "Single Side", priceAdjustment: 0 }],
          },
        ],
      },
      "12x18 - Texture Sheet - Metallic Silver - Code 42": {
        code: "DPP-TXT-042",
        basePrice: 1800,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 36.0 },
          { minQty: 20, pricePerUnit: 30.0 },
          { minQty: 30, pricePerUnit: 25.0 },
        ],
        specifications: {
          "Product Code": "DPP-TXT-042",
          "Product Size": "12 × 18 Inches",
          "Paper Quality": "Texture Sheet - Metallic Silver (Code 42)",
          "Production Time": "1 Day",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [{ label: "Single Side", priceAdjustment: 0 }],
          },
        ],
      },
    },
    specifications: {
      "Product Code": "DPP-TEXTURE",
      "Product Size": "12 × 18 Inches",
      "Paper Option":
        "SBS White / SBS Natural / Metallic Golden / Metallic Silver",
      "Production Time": "1 Day",
      Texture: "Codes 101, 102, 103, 104, 105, 106, 107, 108, 41, 42",
      "Pricing Note": "Price discount applicable with increase in quantity.",
    },
    ourSpecialization: [
      "Specialized digital toner fusion for textured surfaces",
      "Tactile paper finishes for elegant corporate branding",
      "Crisp text and fine detail reproduction on textured grain",
    ],
    productSpecialization: [
      "Quality: Heavyweight 220-280 GSM textured card stock.",
      "Style: Elegant tactile texture suited for executive documents.",
      "Utility: Certificates, luxury invitation cards, and fine art prints.",
    ],
    importantNotes: [
      "Sheet Size: 12 × 18 Inches.",
      "Avoid heavy solid color backgrounds for best texture grain visibility.",
    ],
    fileRequirements: {
      formats: ["PDF", "CDR", "AI", "TIFF", "JPG"],
      minDpi: 300,
      sheetSize: "12 × 18 Inches",
      bleed: "3 mm",
      safeArea: "3 mm",
    },
  },
  {
    id: "DPP-004",
    code: "DPP-METALLIC",
    categoryId: "digital-paper-printing",
    subCategory: "PREMIUM PAPERS",
    name: "METALLIC PAPER",
    slug: "metallic-paper",
    image: digitalPaperImg,
    description:
      "Premium metallic shimmer paper digital printing available in gold, silver, and pearl sheen finishes. Designed for luxury invitations, awards, and VIP cards.",
    minQuantity: 50,
    quantityStep: 50,
    productionTime: "1 Day",
    basePrice: 1800,
    unitName: "Sheets",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 50, pricePerUnit: 36.0 },
      { minQty: 100, pricePerUnit: 30.0 },
      { minQty: 250, pricePerUnit: 25.0 },
    ],
    specifications: {
      "Product Code": "DPP-METALLIC",
      "Product Size": "12 × 18 Inches",
      "Paper Option": "250 GSM - 300 GSM Shimmer Metallic Paper",
      "Production Time": "1 Day",
      "Shimmer Tone": "Metallic Gold / Metallic Silver / Pearl Sheen",
      "Pricing Note": "Price discount applicable with increase in quantity.",
    },
    ourSpecialization: [
      "Stunning metallic lustre enhancing printed graphics and logos",
      "Premium heavyweight metallic board construction",
      "High contrast digital printing with rich black and vibrant tones",
    ],
    productSpecialization: [
      "Quality: 250-300 GSM high-lustre metallic paper.",
      "Finish: Metallic shimmer reflecting light elegantly.",
      "Utility: VIP invitation cards, wedding cards, and luxury certificates.",
    ],
    importantNotes: [
      "Sheet Size: 12 × 18 Inches.",
      "White ink printing unavailable; lighter design areas reflect metallic sheen.",
    ],
    fileRequirements: {
      formats: ["PDF", "CDR", "AI", "TIFF", "JPG"],
      minDpi: 300,
      sheetSize: "12 × 18 Inches",
      bleed: "3 mm",
      safeArea: "3 mm",
    },
    options: [
      {
        id: "printing",
        name: "Printing Side",
        type: "select",
        required: true,
        values: [
          { label: "Single Side", priceAdjustment: 0 },
          { label: "Both Side", priceAdjustment: 0 },
        ],
      },
    ],
  },
  {
    id: "DPP-005",
    code: "DPP-NT-PVC",
    categoryId: "digital-paper-printing",
    subCategory: "SYNTHETIC & PVC",
    name: "NT / PVC SHEETS",
    slug: "nt-pvc-sheets",
    image: digitalPaperImg,
    description:
      "Waterproof and tearproof Non-Tearable (NT) & PVC synthetic sheet digital printing (13×19 inch). Available in PVC White (Matt) 180 Micron and PVC Semi Transparent 200 Micron options.",
    variantCombinations: [
      "13x19 - PVC White (Matt) - 180 Micron",
      "13x19 - PVC Semi Transparent - 200 Micron",
    ],
    variantDetails: {
      "13x19 - PVC White (Matt) - 180 Micron": {
        code: "DPP-PVC-W180",
        basePrice: 2200,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 44.0 },
          { minQty: 20, pricePerUnit: 36.0 },
          { minQty: 30, pricePerUnit: 30.0 },
        ],
        specifications: {
          "Product Code": "DPP-PVC-W180",
          "Product Size": "13 × 19 Inches",
          "Paper Quality": "PVC White (Matt) - 180 Micron",
          "Production Time": "1 Day",
          Durability: "100% Waterproof & Tearproof",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [
              { label: "Single Side", priceAdjustment: 0 },
              { label: "Both Side", priceAdjustment: 300 },
            ],
          },
        ],
      },
      "13x19 - PVC Semi Transparent - 200 Micron": {
        code: "DPP-PVC-TR200",
        basePrice: 2500,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 50.0 },
          { minQty: 20, pricePerUnit: 42.0 },
          { minQty: 30, pricePerUnit: 35.0 },
        ],
        specifications: {
          "Product Code": "DPP-PVC-TR200",
          "Product Size": "13 × 19 Inches",
          "Paper Quality": "PVC Semi Transparent - 200 Micron",
          "Production Time": "1 Day",
          Durability: "100% Waterproof & Tearproof",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "printing",
            name: "Printing Side",
            type: "select",
            required: true,
            values: [{ label: "Single Side", priceAdjustment: 0 }],
          },
        ],
      },
    },
    specifications: {
      "Product Code": "DPP-NT-PVC",
      "Product Size": "13 × 19 Inches",
      "Paper Option":
        "PVC White (Matt) 180 Micron / PVC Semi Transparent 200 Micron",
      "Production Time": "1 Day",
      Durability: "100% Waterproof & Tearproof",
      "Pricing Note": "Price discount applicable with increase in quantity.",
    },
    ourSpecialization: [
      "100% water, oil, and tear-resistant synthetic sheet substrate",
      "Fade-resistant digital inks for long-lasting durability",
      "Smooth wipe-clean surface suitable for food menus and industrial environments",
    ],
    productSpecialization: [
      "Quality: Heavy Micron Non-Tearable Synthetic / PVC.",
      "Durability: Indestructible by tearing or water exposure.",
      "Utility: Restaurant menus, ID cards, instruction sheets, and outdoor tags.",
    ],
    importantNotes: [
      "Sheet Size: 13 × 19 Inches.",
      "Ideal for wipeable menu cards and outdoor weather exposure.",
    ],
    fileRequirements: {
      formats: ["PDF", "CDR", "AI", "TIFF", "JPG"],
      minDpi: 300,
      sheetSize: "13 × 19 Inches",
      bleed: "3 mm",
      safeArea: "3 mm",
    },
  },
  {
    id: "DPP-006",
    code: "DPP-PAPER-GUM",
    categoryId: "digital-paper-printing",
    subCategory: "STICKERS & GUMMING",
    name: "PAPER GUMMING",
    slug: "paper-gumming",
    image: digitalPaperImg,
    description:
      "Self-adhesive paper sticker sheet digital printing with peel-off backing. Suitable for product labels, barcode stickers, packaging seals, and promotional branding.",
    minQuantity: 10,
    quantityStep: 1,
    productionTime: "1 Day",
    basePrice: 1500,
    unitName: "Sheets",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 10, pricePerUnit: 30.0 },
      { minQty: 20, pricePerUnit: 24.0 },
      { minQty: 30, pricePerUnit: 19.0 },
    ],
    specifications: {
      "Product Code": "DPP-PAPER-GUM",
      "Product Size": "12 × 18 Inches",
      "Paper Option": "Gloss Paper Sticker Sheet with Self-Adhesive Gumming",
      "Production Time": "1 Day",
      Backing: "Easy Peel-Off Release Paper",
      "Pricing Note": "Price discount applicable with increase in quantity.",
    },
    ourSpecialization: [
      "High-tack self-adhesive gumming for strong surface bond",
      "Vivid color sticker printing with sharp label graphics",
      "Die-cutting & kiss-cutting compatible sheets",
    ],
    productSpecialization: [
      "Quality: Premium Chromo / Gloss Paper Sticker Sheet.",
      "Adhesive: Strong permanent pressure-sensitive acrylic glue.",
      "Utility: Product labels, shipping stickers, box seals, and branding labels.",
    ],
    importantNotes: [
      "Sheet Size: 12 × 18 Inches.",
      "Paper stickers are intended for indoor & dry packaging use.",
    ],
    fileRequirements: {
      formats: ["PDF", "CDR", "AI", "TIFF", "JPG"],
      minDpi: 300,
      sheetSize: "12 × 18 Inches",
      bleed: "3 mm",
      safeArea: "3 mm",
    },
    options: [
      {
        id: "size",
        name: "Size",
        type: "select",
        required: true,
        values: [
          { label: "12 × 18 Inches", priceAdjustment: 0 },
          { label: "13 × 19 Inches", priceAdjustment: 0 },
        ],
      },
      {
        id: "limination",
        name: "Limination",
        type: "select",
        required: true,
        values: [
          { label: "Not Required", priceAdjustment: 0 },
          { label: "Gloss Limination", priceAdjustment: 0 },
          { label: "Matt Limination", priceAdjustment: 0 },
        ],
      },
      {
        id: "halfCut",
        name: "Half Cut (Any Shape) ",
        type: "select",
        required: true,
        values: [
          { label: "Not Required", priceAdjustment: 0 },
          { label: "Upto 10 Stickers", priceAdjustment: 0 },
          { label: "11 to 20 Stickers", priceAdjustment: 0 },
          { label: "21 to 50 Stickers", priceAdjustment: 0 },
          { label: "51 to 100 Stickers", priceAdjustment: 0 },
        ],
      },
    ],
  },
  {
    id: "DPP-007",
    code: "DPP-PVC-GUM",
    categoryId: "digital-paper-printing",
    subCategory: "STICKERS & GUMMING",
    name: "PVC GUMMING",
    slug: "pvc-gumming",
    image: digitalPaperImg,
    description:
      "Waterproof vinyl / PVC sticker sheet digital printing with ultra-strong adhesive backing. Available in PVC Gumming (White), PVC Gumming (Transparent), and PVC Gumming (Golden) options.",
    variantCombinations: [
      "PVC Gumming (White)",
      "PVC Gumming (Transparent)",
      "PVC Gumming (Golden)",
    ],
    variantDetails: {
      "PVC Gumming (White)": {
        code: "DPP-PVC-WHITE",
        basePrice: 2500,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 50.0 },
          { minQty: 20, pricePerUnit: 42.0 },
          { minQty: 30, pricePerUnit: 35.0 },
        ],
        specifications: {
          "Product Code": "DPP-PVC-WHITE",
          "Product Size": "12 × 18 Inches / 13 × 19 Inches",
          "Paper Quality": "White PVC Vinyl Sticker Sheet",
          "Production Time": "1 Day",
          Durability: "100% Waterproof, Weatherproof & Scratch-Resistant",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "size",
            name: "Size",
            type: "select",
            required: true,
            values: [
              { label: "12 × 18 Inches", priceAdjustment: 0 },
              { label: "13 × 19 Inches", priceAdjustment: 0 },
            ],
          },
          {
            id: "limination",
            name: "Limination",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Gloss Limination", priceAdjustment: 0 },
              { label: "Matt Limination", priceAdjustment: 0 },
            ],
          },
          {
            id: "halfCut",
            name: "Half Cut (Any Shape) ",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Upto 10 Stickers", priceAdjustment: 0 },
              { label: "11 to 20 Stickers", priceAdjustment: 0 },
              { label: "21 to 50 Stickers", priceAdjustment: 0 },
              { label: "51 to 100 Stickers", priceAdjustment: 0 },
            ],
          },
        ],
      },
      "PVC Gumming (Transparent)": {
        code: "DPP-PVC-TRANS",
        basePrice: 2800,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 56.0 },
          { minQty: 20, pricePerUnit: 48.0 },
          { minQty: 30, pricePerUnit: 40.0 },
        ],
        specifications: {
          "Product Code": "DPP-PVC-TRANS",
          "Product Size": "12 × 18 Inches / 13 × 19 Inches",
          "Paper Quality": "Transparent Clear PVC Vinyl Sticker Sheet",
          "Production Time": "1 Day",
          Durability: "100% Waterproof, Weatherproof & Scratch-Resistant",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "size",
            name: "Size",
            type: "select",
            required: true,
            values: [
              { label: "12 × 18 Inches", priceAdjustment: 0 },
              { label: "13 × 19 Inches", priceAdjustment: 0 },
            ],
          },
          {
            id: "limination",
            name: "Limination",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Gloss Limination", priceAdjustment: 0 },
              { label: "Matt Limination", priceAdjustment: 0 },
            ],
          },
          {
            id: "halfCut",
            name: "Half Cut (Any Shape) ",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Upto 10 Stickers", priceAdjustment: 0 },
              { label: "11 to 20 Stickers", priceAdjustment: 0 },
              { label: "21 to 50 Stickers", priceAdjustment: 0 },
              { label: "51 to 100 Stickers", priceAdjustment: 0 },
            ],
          },
        ],
      },
      "PVC Gumming (Golden)": {
        code: "DPP-PVC-GOLD",
        basePrice: 3000,
        minQuantity: 10,
        quantityStep: 1,
        productionTime: "1 Day",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 60.0 },
          { minQty: 20, pricePerUnit: 52.0 },
          { minQty: 30, pricePerUnit: 45.0 },
        ],
        specifications: {
          "Product Code": "DPP-PVC-GOLD",
          "Product Size": "12 × 18 Inches / 13 × 19 Inches",
          "Paper Quality": "Metallic Golden PVC Vinyl Sticker Sheet",
          "Production Time": "1 Day",
          Durability: "100% Waterproof, Weatherproof & Scratch-Resistant",
          "Pricing Note":
            "Price discount applicable with increase in quantity.",
        },
        options: [
          {
            id: "size",
            name: "Size",
            type: "select",
            required: true,
            values: [
              { label: "12 × 18 Inches", priceAdjustment: 0 },
              { label: "13 × 19 Inches", priceAdjustment: 0 },
            ],
          },
          {
            id: "limination",
            name: "Limination",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Gloss Limination", priceAdjustment: 0 },
              { label: "Matt Limination", priceAdjustment: 0 },
            ],
          },
          {
            id: "halfCut",
            name: "Half Cut (Any Shape) ",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Upto 10 Stickers", priceAdjustment: 0 },
              { label: "11 to 20 Stickers", priceAdjustment: 0 },
              { label: "21 to 50 Stickers", priceAdjustment: 0 },
              { label: "51 to 100 Stickers", priceAdjustment: 0 },
            ],
          },
        ],
      },
    },
    specifications: {
      "Product Code": "DPP-PVC-GUM",
      "Product Size": "12 × 18 Inches / 13 × 19 Inches",
      "Paper Option": "PVC White / PVC Transparent / PVC Golden",
      "Production Time": "1 Day",
      Durability: "100% Waterproof, Weatherproof & Scratch-Resistant",
      "Pricing Note": "Price discount applicable with increase in quantity.",
    },
    ourSpecialization: [
      "100% waterproof vinyl substrate with permanent outdoor adhesive",
      "Optional clear transparent PVC, metallic gold, or opaque white PVC options",
      "High UV resistance preventing outdoor color fading",
    ],
    productSpecialization: [
      "Quality: Heavy Duty Waterproof PVC Vinyl Sheet.",
      "Durability: Weatherproof, washable, and tearproof sticker media.",
      "Utility: Bottle labels, cosmetic stickers, equipment labels, and outdoor decals.",
    ],
    importantNotes: [
      "Sheet Size: 12 × 18 Inches / 13 × 19 Inches.",
      "Choose White PVC for full color vibrancy or Transparent PVC for clear bottle labels.",
    ],
    fileRequirements: {
      formats: ["PDF", "CDR", "AI", "TIFF", "JPG"],
      minDpi: 300,
      sheetSize: "12 × 18 Inches",
      bleed: "3 mm",
      safeArea: "3 mm",
    },
  },
  {
    id: "DPP-008",
    code: "DPP-PRINT-ONLY",
    categoryId: "digital-paper-printing",
    subCategory: "JOB PRINTING",
    name: "ONLY PRINTING",
    slug: "only-printing",
    image: digitalPaperImg,
    description:
      "Job work digital color printing service on client-supplied paper stock or specialty media using Xerox high-end production press.",
    minQuantity: 50,
    quantityStep: 50,
    productionTime: "1 Day",
    basePrice: 800,
    unitName: "Passes",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 50, pricePerUnit: 16.0 },
      { minQty: 100, pricePerUnit: 12.0 },
      { minQty: 250, pricePerUnit: 9.0 },
    ],
    specifications: {
      "Product Code": "DPP-PRINT-ONLY",
      "Product Size": "Up to 12 × 18 Inches (Max 13 × 19)",
      Media: "Client Provided Stock / Media",
      "Production Time": "1 Day",
      "Print Engine": "Xerox Color Press (Single / Both Side)",
      "Pricing Note": "Price discount applicable with increase in quantity.",
    },
    ourSpecialization: [
      "High-precision digital color printing job work for printers & designers",
      "Handles paper weight from 70 GSM up to 350 GSM seamlessly",
      "Exact front-to-back registration alignment for duplex printing",
    ],
    productSpecialization: [
      "Quality: Professional Xerox production print pass.",
      "Flexibility: Print on your own custom paper or stock.",
      "Utility: B2B printers, designers, and emergency print jobs.",
    ],
    importantNotes: [
      "Paper / Media must be supplied by the client in standard 12×18 or 13×19 inch sheets.",
      "Provide 5% extra sheets for setup and machine calibration pass.",
    ],
    fileRequirements: {
      formats: ["PDF", "CDR", "AI", "TIFF", "JPG"],
      minDpi: 300,
      sheetSize: "12 × 18 / 13 × 19 Inches",
      bleed: "3 mm",
      safeArea: "3 mm",
    },
    options: [
      {
        id: "printing",
        name: "Printing",
        type: "select",
        required: true,
        values: [
          { label: "Single Side", priceAdjustment: 0 },
          {
            label: "Both Side",
            priceAdjustment: 400,
          },
        ],
      },
      commonOptions.fileOption,
    ],
  },
];
