import { commonOptions } from "../options";

export const files = [
  {
    id: "FL-001",
    code: "FL-001",
    categoryId: "files",
    subCategory: "PVC FILES",
    name: "PVC FILE SMALL SIZE",
    slug: "pvc-file-small-size",
    image: "/products/files/pvc-file-small.jpg",
    badge: "NEW",
    description:
      '300 Micron PP Sheet presentation file in Small Size (9"x12").',
    variantCombinations: [
      "PVC File (Gloss Coated, Small Size)",
      "PVC File (Without Coated - Matt Finish, Small Size)",
    ],
    variantDetails: {
      "PVC File (Gloss Coated, Small Size)": {
        code: "FL-1-A",
        basePrice: 3500,
        specifications: {
          "Product Ref.": "FILE/1st Edition (Sample File)",
          "Product Code": "FL-1-A",
          "Product Class": "Premium",
          "Product Core": "Gloss Coated PP Sheet",
          Material: '300 Micron PP Sheet, 9"x12"',
          Size: '9" x 12" (Small Size)',
          "Production Time": "3 Working days",
          "Coated Type": "Gloss Coated",
        },
        options: [
          {
            id: "printing",
            name: "Printing",
            type: "select",
            required: true,
            values: [
              { label: "Multicolor at Outer Side Only", priceAdjustment: 0 },
              {
                label: "Multicolor at Outer + Inner Sides",
                priceAdjustment: 0,
              },
            ],
          },
        ],
      },
      "PVC File (Without Coated - Matt Finish, Small Size)": {
        code: "FL-1-B",
        basePrice: 3500,
        specifications: {
          "Product Ref.": "FILE/1st Edition (Sample File)",
          "Product Code": "FL-1-B",
          "Product Class": "Premium",
          "Product Core": "Matt Finish PP Sheet",
          Material: '300 Micron PP Sheet, 9"x12"',
          Size: '9" x 12" (Small Size)',
          "Production Time": "3 Working days",
          "Coated Type": "Matt Finish (Without Coated)",
        },
        options: [
          {
            id: "printing",
            name: "Printing",
            type: "select",
            required: true,
            values: [
              { label: "Multicolor at Outer Side Only", priceAdjustment: 0 },
              {
                label: "Multicolor at Outer + Inner Sides",
                priceAdjustment: 0,
              },
            ],
          },
          {
            id: "spotUV",
            name: "Spot UV",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Outer Side Only", priceAdjustment: 0 },
            ],
          },
        ],
      },
    },
  },
  {
    id: "FL-002",
    code: "FL-002",
    categoryId: "files",
    subCategory: "PVC FILES",
    name: "PVC FILE BIG SIZE",
    slug: "pvc-file-big-size",
    image: "/products/files/pvc-file-big.jpg",
    badge: "NEW",
    description:
      '300 Micron PP Sheet presentation file in Big Size (9.5"x12.5").',
    variantCombinations: [
      "PVC File (Gloss Coated, Big Size)",
      "PVC File (Without Coated - Matt Finish, Big Size)",
    ],
    variantDetails: {
      "PVC File (Gloss Coated, Big Size)": {
        code: "FL-2-A",
        basePrice: 4000,
        specifications: {
          "Product Ref.": "FILE/1st Edition (Sample File)",
          "Product Code": "FL-2-A",
          "Product Class": "Premium",
          "Product Core": "Gloss Coated PP Sheet",
          Material: '300 Micron PP Sheet, 9.5"x12.5"',
          Size: '9.5" x 12.5" (Big Size)',
          "Production Time": "4 Working days",
          "Coated Type": "Gloss Coated",
        },
        options: [
          {
            id: "printing",
            name: "Printing",
            type: "select",
            required: true,
            values: [
              { label: "Multicolor at Outer Side Only", priceAdjustment: 0 },
              {
                label: "Multicolor at Outer + Inner Sides",
                priceAdjustment: 0,
              },
            ],
          },
          {
            id: "pocket",
            name: "Pocket",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Left Side", priceAdjustment: 0 },
              { label: "Right Side", priceAdjustment: 0 },
              { label: "Both Side", priceAdjustment: 0 },
            ],
          },
        ],
      },
      "PVC File (Without Coated - Matt Finish, Big Size)": {
        code: "FL-2-B",
        basePrice: 4000,
        specifications: {
          "Product Ref.": "FILE/1st Edition (Sample File)",
          "Product Code": "FL-2-B",
          "Product Class": "Premium",
          "Product Core": "Matt Finish PP Sheet",
          Material: '300 Micron PP Sheet, 9.5"x12.5"',
          Size: '9.5" x 12.5" (Big Size)',
          "Production Time": "4 Working days",
          "Coated Type": "Matt Finish (Without Coated)",
        },
        options: [
          {
            id: "printing",
            name: "Printing",
            type: "select",
            required: true,
            values: [
              { label: "Multicolor at Outer Side Only", priceAdjustment: 0 },
              {
                label: "Multicolor at Outer + Inner Sides",
                priceAdjustment: 0,
              },
            ],
          },
          {
            id: "spotUV",
            name: "Spot UV",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Outer Side Only", priceAdjustment: 0 },
            ],
          },
          {
            id: "pocket",
            name: "Pocket",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Left Side", priceAdjustment: 0 },
              { label: "Right Side", priceAdjustment: 0 },
              { label: "Both Side", priceAdjustment: 0 },
            ],
          },
        ],
      },
    },
  },
  {
    id: "FL-003",
    code: "FL-003",
    categoryId: "files",
    subCategory: "SBS FILES",
    name: "SBS FILE SMALL SIZE",
    slug: "sbs-file-small-size",
    image: "/products/files/sbs-file-small.jpg",
    description: '260 Gsm SBS Paper presentation file in Small Size (9"x12").',
    variantCombinations: [
      "SBS File (Gloss Lamination, Small Size)",
      "SBS File (Matt Lamination, Small Size)",
    ],
    variantDetails: {
      "SBS File (Gloss Lamination, Small Size)": {
        code: "FL-3-A",
        basePrice: 3250,
        specifications: {
          "Product Ref.": "FILE/1st Edition (Sample File)",
          "Product Code": "FL-3-A",
          "Product Class": "Premium",
          "Product Core": "Gloss Lamination SBS Board",
          Paper: "260 Gsm SBS Paper",
          Size: '9" x 12" (Small Size)',
          "Production Time": "3 Working days",
          Lamination: "Gloss Lamination",
        },
        options: [
          {
            id: "printing",
            name: "Printing",
            type: "select",
            required: true,
            values: [
              { label: "Multicolor at Outer Side Only", priceAdjustment: 0 },
              {
                label: "Multicolor at Outer + Inner Sides",
                priceAdjustment: 0,
              },
            ],
          },
        ],
      },
      "SBS File (Matt Lamination, Small Size)": {
        code: "FL-3-B",
        basePrice: 3250,
        specifications: {
          "Product Ref.": "FILE/1st Edition (Sample File)",
          "Product Code": "FL-3-B",
          "Product Class": "Premium",
          "Product Core": "Matt Lamination SBS Board",
          Paper: "260 Gsm SBS Paper",
          Size: '9" x 12" (Small Size)',
          "Production Time": "3 Working days",
          Lamination: "Matt Lamination",
        },
        options: [
          {
            id: "printing",
            name: "Printing",
            type: "select",
            required: true,
            values: [
              { label: "Multicolor at Outer Side Only", priceAdjustment: 0 },
              {
                label: "Multicolor at Outer + Inner Sides",
                priceAdjustment: 0,
              },
            ],
          },
          {
            id: "spotUV",
            name: "Spot UV",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Outer Side Only", priceAdjustment: 0 },
            ],
          },
        ],
      },
    },
  },
  {
    id: "FL-004",
    code: "FL-004",
    categoryId: "files",
    subCategory: "SBS FILES",
    name: "SBS FILE BIG SIZE",
    slug: "sbs-file-big-size",
    image: "/products/files/sbs-file-big.jpg",
    description:
      '320 Gsm SBS Paper presentation file in Big Size (9.5"x12.5").',
    variantCombinations: [
      "SBS File (Gloss Lamination, Big Size)",
      "SBS File (Matt Lamination, Big Size)",
    ],
    variantDetails: {
      "SBS File (Gloss Lamination, Big Size)": {
        code: "FL-4-A",
        basePrice: 3750,
        specifications: {
          "Product Ref.": "FILE/1st Edition (Sample File)",
          "Product Code": "FL-4-A",
          "Product Class": "Premium",
          "Product Core": "Gloss Lamination SBS Board",
          Paper: "320 Gsm SBS Paper",
          Size: '9.5" x 12.5" (Big Size)',
          "Production Time": "4 Working days",
          Lamination: "Gloss Lamination",
        },
        options: [
          {
            id: "printing",
            name: "Printing",
            type: "select",
            required: true,
            values: [
              { label: "Multicolor at Outer Side Only", priceAdjustment: 0 },
              {
                label: "Multicolor at Outer + Inner Sides",
                priceAdjustment: 0,
              },
            ],
          },

          {
            id: "pocket",
            name: "Pocket",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Left Side", priceAdjustment: 0 },
              { label: "Right Side", priceAdjustment: 0 },
              { label: "Both Side", priceAdjustment: 0 },
            ],
          },
        ],
      },
      "SBS File (Matt Lamination, Big Size)": {
        code: "FL-4-B",
        basePrice: 3750,
        specifications: {
          "Product Ref.": "FILE/1st Edition (Sample File)",
          "Product Code": "FL-4-B",
          "Product Class": "Premium",
          "Product Core": "Matt Lamination SBS Board",
          Paper: "320 Gsm SBS Paper",
          Size: '9.5" x 12.5" (Big Size)',
          "Production Time": "4 Working days",
          Lamination: "Matt Lamination",
        },
        options: [
          {
            id: "printing",
            name: "Printing",
            type: "select",
            required: true,
            values: [
              { label: "Multicolor at Outer Side Only", priceAdjustment: 0 },
              {
                label: "Multicolor at Outer + Inner Sides",
                priceAdjustment: 0,
              },
            ],
          },
          {
            id: "spotUV",
            name: "Spot UV",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Outer Side Only", priceAdjustment: 0 },
            ],
          },
          {
            id: "pocket",
            name: "Pocket",
            type: "select",
            required: true,
            values: [
              { label: "Not Required", priceAdjustment: 0 },
              { label: "Left Side", priceAdjustment: 0 },
              { label: "Right Side", priceAdjustment: 0 },
            ],
          },
        ],
      },
    },
    minQuantity: 250,
    quantityStep: 250,
    productionTime: "4 Working days",
    basePrice: 3750,
    unitName: "Files",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 250, pricePerUnit: 15.0 },
      { minQty: 500, pricePerUnit: 12.5 },
    ],
    ourSpecialization: [
      "Printing with latest Komori offset machines (2023 Model)",
      "Innovative, Advanced & Equipped Post Printing Unit",
      "Constant quality with reasonable price",
    ],
    productSpecialization: [
      'Material: 320 Gsm SBS Paper (Big Size: 9.5"x12.5").',
      "Heavy duty 320 GSM SBS board folder with gloss or matt finish.",
      "4 Working Days turnaround time.",
    ],
    specifications: {
      "Product Code": "FL-004",
      Material: '320 Gsm SBS Paper, 9.5"x12.5"',
      Size: '9.5" x 12.5" (Big Size)',
      "Production Time": "4 Working days",
    },
    importantNotes: ["Heavy duty 320 GSM SBS board with gloss/matt finish."],
    fileRequirements: {
      formats: ["PDF", "AI", "CDR"],
      minDpi: 300,
      bleed: "3 mm",
      safeArea: "5 mm",
    },
    options: [commonOptions.printing, commonOptions.fileOption],
  },
  {
    id: "FL-005",
    code: "FL-005",
    categoryId: "files",
    subCategory: "PVC CLIP",
    name: "PVC CLIP",
    slug: "pvc-clip",
    image: "/products/files/pvc-clip.jpg",
    description: "Durable PVC file clip mechanism available in 3 varieties.",
    variantCombinations: ["Type - 1", "Type - 2", "Type - 3"],
    variantDetails: {
      "Type - 1": {
        code: "FL-5-A",
        basePrice: 1500,
        specifications: {
          "Product Code": "FL-5-A",
          Type: "Type - 1",
          Material: "PVC Plastic Clip",
          "Dispatch Time": "2 Working days",
          "Production Time": "2 Working days",
        },
      },
      "Type - 2": {
        code: "FL-5-B",
        basePrice: 1500,
        specifications: {
          "Product Code": "FL-5-B",
          Type: "Type - 2",
          Material: "PVC Plastic Clip",
          "Dispatch Time": "2 Working days",
          "Production Time": "2 Working days",
        },
      },
      "Type - 3": {
        code: "FL-5-C",
        basePrice: 1500,
        specifications: {
          "Product Code": "FL-5-C",
          Type: "Type - 3",
          Material: "PVC Plastic Clip",
          "Dispatch Time": "2 Working days",
          "Production Time": "2 Working days",
        },
      },
    },
    minQuantity: 500,
    quantityStep: 500,
    productionTime: "2 Working days",
    basePrice: 1500,
    unitName: "Clips",
    pricingModel: "quantity_tiered",
    quantityPricingTiers: [
      { minQty: 500, pricePerUnit: 3.0 },
      { minQty: 1000, pricePerUnit: 2.5 },
    ],
    ourSpecialization: [
      "Innovative, Advanced & Equipped Post Printing Unit",
      "Constant quality with reasonable price",
    ],
    productSpecialization: [
      "Available in 3 Varieties.",
      "Dispatch Time: 2 Working days.",
    ],
    specifications: {
      "Product Code": "FL-005",
      Material: "PVC Plastic Clip",
      Varieties: "Available in 3 Varieties",
      "Dispatch Time": "2 Working days",
      "Production Time": "2 Working days",
    },
    importantNotes: ["Compatible with standard presentation files."],
    fileRequirements: {
      formats: ["N/A"],
      minDpi: 300,
      bleed: "0 mm",
      safeArea: "0 mm",
    },
    options: [commonOptions.fileOption],
  },
];
