import billBookImg from "../../assets/images/categories (8).webp";

export const billBooks = [
  {
    id: "BB-001",
    code: "BB-1",
    categoryId: "bill-books",
    subCategory: "NCR CARBONLESS BILL BOOKS",
    name: "Bill Book",
    slug: "duplicate-ncr-bill-book",
    image: billBookImg,
    description:
      "Custom printed Carbonless NCR paper Bill Books & Invoice Books available in 2 Copy (Duplicate) and 3 Copy (Triplicate) with sequential numbering and staple binding.",
    minQuantity: 10,
    quantityStep: 5,
    productionTime: "Within 3–5 days from file upload",
    basePrice: 1500,
    unitName: "Books",
    pricingModel: "quantity_tiered",

    variantCombinations: ["Bill Book - 2 Copy", "Bill Book - 3 Copy"],

    variantDetails: {
      "Bill Book - 2 Copy": {
        code: "BB-2",
        basePrice: 1500,
        minQuantity: 10,
        quantityStep: 5,
        productionTime: "Within 3–5 days from file upload",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 150 },
          { minQty: 25, pricePerUnit: 125 },
          { minQty: 50, pricePerUnit: 110 },
          { minQty: 100, pricePerUnit: 95 },
        ],
        specifications: {
          "Product Ref.": "BB/01st Edition (Sample File)",
          "Product Code": "BB-2",
          "Product Class": "Duplicate (2 Copy / 2-Ply)",
          "Paper Quality":
            "55 GSM Carbonless NCR Paper (1st White Original, 2nd Pink Duplicate)",
          "Book Capacity": "50 Sets per Book (100 Sheets Total)",
          Numbering: "Red Ink Sequential Serial Numbering",
          "Binding Type":
            "Top Heavy-Duty Staple & Perforation with Spine Cloth Tape",
          "Production Time": "Within 3–5 days from file upload",
          "Pricing Note":
            "Price discount applicable (System auto calculate) with increase in Quantity",
        },
        ourSpecialization: [
          "Printing with latest offset machines for clear and sharp carbon transfer",
          "High-grade carbonless NCR paper for clean impressions without carbon paper",
          "Innovative, Advanced & Equipped Post Printing Unit with automatic numbering",
          "Constant quality with reasonable price",
        ],
        productSpecialization: [
          "Duplicate 2-Ply NCR Carbonless paper (1st White, 2nd Pink)",
          "50 Sets per book with exact sequential red ink numbering",
          "Perforated pages for easy tearing with sturdy Kraft cover binding",
          "Ideal for GST Invoices, Cash Memos, Receipts, and Delivery Challans",
        ],
        importantNotes: [
          "Please mention the starting serial number in order notes (e.g., 001 or 1001).",
          'Standard Bill Book size: 1/5th Page (4.25" x 7.0") or 1/4th Page (5.5" x 8.5").',
          "Use high-resolution vector artwork (CDR / PDF / AI) for clean text and rules.",
        ],
        fileRequirements: {
          formats: ["PDF", "CDR", "AI"],
          minDpi: 300,
          fullDesignSize:
            "1/5th Page (W: 108 mm X H: 178 mm) / 1/4th Page (W: 140 mm X H: 216 mm)",
          safeArea: "4 mm inside boundary",
          bleed: "2 mm",
        },
        options: [
          {
            id: "1stPaperQuality",
            name: "1st Paper Quality",
            type: "select",
            required: true,
            values: [
              { label: "100 GSM DEO Paper (1 Side Print)", priceAdjustment: 0 },
              { label: "100 GSM DEO Paper (2 Side Print)", priceAdjustment: 0 },
              {
                label: "90 GSM Sunshine Paper (1 Side Print)",
                priceAdjustment: 0,
              },
            ],
          },
          {
            id: "2ndCopyPaperColor",
            name: "2nd Copy Paper Color",
            type: "select",
            required: true,
            values: [
              { label: "White", priceAdjustment: 0 },
              { label: "Pink", priceAdjustment: 0 },
              { label: "Yellow", priceAdjustment: 0 },
            ],
          },
          {
            id: "bindingStyle",
            name: "Binding Quality",
            type: "select",
            required: true,
            values: [
              { label: "Normal", priceAdjustment: 0 },
              { label: "Premium", priceAdjustment: 0 },
            ],
          },
        ],
      },
      "Bill Book - 3 Copy": {
        code: "BB-3",
        basePrice: 2000,
        minQuantity: 10,
        quantityStep: 5,
        productionTime: "Within 3–5 days from file upload",
        quantityPricingTiers: [
          { minQty: 10, pricePerUnit: 200 },
          { minQty: 25, pricePerUnit: 175 },
          { minQty: 50, pricePerUnit: 155 },
          { minQty: 100, pricePerUnit: 135 },
        ],
        specifications: {
          "Product Ref.": "BB/01st Edition (Sample File)",
          "Product Code": "BB-3",
          "Product Class": "Triplicate (3 Copy / 3-Ply)",
          "Paper Quality":
            "55 GSM Carbonless NCR Paper (1st White, 2nd Pink, 3rd Yellow)",
          "Book Capacity": "50 Sets per Book (150 Sheets Total)",
          Numbering: "Red Ink Sequential Serial Numbering",
          "Binding Type":
            "Top Heavy-Duty Staple & Perforation with Spine Cloth Tape",
          "Production Time": "Within 3–5 days from file upload",
          "Pricing Note":
            "Price discount applicable (System auto calculate) with increase in Quantity",
        },
        ourSpecialization: [
          "Printing with latest offset machines for clear and sharp carbon transfer",
          "High-grade carbonless NCR paper for clean impressions across all 3 copies",
          "Innovative, Advanced & Equipped Post Printing Unit with automatic numbering",
          "Constant quality with reasonable price",
        ],
        productSpecialization: [
          "Triplicate 3-Ply NCR Carbonless paper (1st White, 2nd Pink, 3rd Yellow)",
          "50 Sets per book with exact sequential red ink numbering",
          "Perforated top copy & duplicate with firm backing board",
          "Ideal for Triplicate Invoices, Audit Copies, and Triplicate Receipts",
        ],
        importantNotes: [
          "Please mention the starting serial number in order notes (e.g., 001 or 1001).",
          'Standard Bill Book size: 1/5th Page (4.25" x 7.0") or 1/4th Page (5.5" x 8.5").',
          "Use high-resolution vector artwork (CDR / PDF / AI) for clean text and rules.",
        ],
        fileRequirements: {
          formats: ["PDF", "CDR", "AI"],
          minDpi: 300,
          fullDesignSize:
            "1/5th Page (W: 108 mm X H: 178 mm) / 1/4th Page (W: 140 mm X H: 216 mm)",
          safeArea: "4 mm inside boundary",
          bleed: "2 mm",
        },
        options: [
          {
            id: "1stPaperQuality",
            name: "1st Paper Quality",
            type: "select",
            required: true,
            values: [
              { label: "100 GSM DEO Paper (1 Side Print)", priceAdjustment: 0 },
              { label: "100 GSM DEO Paper (2 Side Print)", priceAdjustment: 0 },
              {
                label: "90 GSM Sunshine Paper (1 Side Print)",
                priceAdjustment: 0,
              },
            ],
          },
          {
            id: "2ndCopyPaperColor",
            name: "2nd Copy Paper Color",
            type: "select",
            required: true,
            values: [
              { label: "White", priceAdjustment: 0 },
              { label: "Pink", priceAdjustment: 0 },
              { label: "Yellow", priceAdjustment: 0 },
            ],
          },
          {
            id: "3rdCopyPaperColor",
            name: "3rd Copy Paper Color",
            type: "select",
            required: true,
            values: [
              { label: "White", priceAdjustment: 0 },
              { label: "Pink", priceAdjustment: 0 },
              { label: "Yellow", priceAdjustment: 0 },
            ],
          },
          {
            id: "bindingStyle",
            name: "Binding Quality",
            type: "select",
            required: true,
            values: [
              { label: "Normal", priceAdjustment: 0 },
              { label: "Premium", priceAdjustment: 0 },
            ],
          },
        ],
      },
    },

    specifications: {
      "Product Ref.": "BB/01st Edition (Sample File)",
      "Product Code": "BB-1",
      "Product Class": "Duplicate (2 Copy) / Triplicate (3 Copy)",
      "Paper Quality": "55 GSM Carbonless NCR Paper",
      "Book Capacity": "50 Sets per Book",
      Numbering: "Red Ink Sequential Serial Numbering",
      "Production Time": "Within 3–5 days from file upload",
      "Pricing Note":
        "Price discount applicable (System auto calculate) with increase in Quantity",
    },
    ourSpecialization: [
      "Printing with latest offset machines for clear and sharp carbon transfer",
      "High-grade carbonless NCR paper for clean impressions without carbon paper",
      "Innovative, Advanced & Equipped Post Printing Unit with automatic numbering",
      "Constant quality with reasonable price",
    ],
    productSpecialization: [
      "Available in 2 Copy (Duplicate) and 3 Copy (Triplicate) options",
      "50 Sets per book with exact sequential red ink numbering",
      "Perforated pages for easy tearing with sturdy Kraft cover binding",
      "Ideal for GST Invoices, Cash Memos, Receipts, and Delivery Challans",
    ],
    importantNotes: [
      "Please mention the starting serial number in order notes (e.g., 001 or 1001).",
      'Standard Bill Book size: 1/5th Page (4.25" x 7.0") or 1/4th Page (5.5" x 8.5").',
      "Use high-resolution vector artwork (CDR / PDF / AI) for clean text and rules.",
    ],
    fileRequirements: {
      formats: ["PDF", "CDR", "AI"],
      minDpi: 300,
      fullDesignSize:
        "1/5th Page (W: 108 mm X H: 178 mm) / 1/4th Page (W: 140 mm X H: 216 mm)",
      safeArea: "4 mm inside boundary",
      bleed: "2 mm",
    },
    options: [
      {
        id: "paperSize",
        name: "Book Size",
        type: "select",
        required: true,
        values: [
          { label: '1/5th Page (4.25" X 7.0")', priceAdjustment: 0 },
          { label: '1/4th Page (5.5" X 8.5")', priceAdjustment: 300 },
          { label: 'A4 Size (8.27" X 11.69")', priceAdjustment: 800 },
        ],
      },
      {
        id: "numbering",
        name: "Sequential Numbering",
        type: "select",
        required: true,
        values: [
          { label: "Red Ink Serial Numbering Included", priceAdjustment: 0 },
          { label: "Without Numbering", priceAdjustment: 0 },
        ],
      },
      {
        id: "bindingStyle",
        name: "Binding Style",
        type: "select",
        required: true,
        values: [
          { label: "Top Staple & Perforation with Tape", priceAdjustment: 0 },
          { label: "Pad Glue Binding (No Perforation)", priceAdjustment: 0 },
        ],
      },
    ],
  },
];
