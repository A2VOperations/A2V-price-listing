import flexBoard from "../../assets/images/categories (15).webp";

export const flexBoardProducts = [
  {
    id: "FB-001",
    code: "FB-001",
    categoryId: "flex-board",
    subCategory: "FLEX BOARD PRINTING",
    name: "Flex Board Printing & Frame Calculator",
    slug: "flex-board-printing",
    isFlexBoard: true,
    image: flexBoard,
    description:
      "Custom Flex Board printing with optional Iron or Wooden framing, adjustable support rods, angle fittings, and professional installation charges.",
    minQuantity: 1,
    quantityStep: 1,
    unitName: "Board(s)",
    productionTime: "24-48 Hours",
    variantCombinations: [
      "Normal Flex - ₹15 / sqft",
      "Star Flex - ₹25 / sqft",
      "Mini Star Flex - ₹17 / sqft",
      "Black Out Flex - ₹18 / sqft",
    ],
    variantDetails: {
      "Normal Flex - ₹15 / sqft": {
        code: "FB-101",
        flexType: "Normal Flex",
        pricePerSqFt: 15,
        description: "Standard frontlit Normal Flex printing @ ₹15 per sq. ft.",
      },
      "Star Flex - ₹25 / sqft": {
        code: "FB-102",
        flexType: "Star Flex",
        pricePerSqFt: 25,
        description:
          "High durability premium Star Flex printing @ ₹25 per sq. ft.",
      },
      "Mini Star Flex - ₹17 / sqft": {
        code: "FB-103",
        flexType: "Mini Star Flex",
        pricePerSqFt: 17,
        description:
          "Enhanced finish Mini Star Flex printing @ ₹17 per sq. ft.",
      },
      "Black Out Flex - ₹18 / sqft": {
        code: "FB-104",
        flexType: "Black Out Flex",
        pricePerSqFt: 18,
        description:
          "Opaque light-blocking Black Out Flex printing @ ₹18 per sq. ft.",
      },
    },
    specifications: {
      "Product Category": "Flex Board Printing & Framing",
      "Material Options":
        "Normal Flex (₹15/sqft), Star Flex (₹25/sqft), Mini Star Flex (₹17/sqft), Black Out Flex (₹18/sqft)",
      "Board Frame Options":
        "Iron Board (₹35/running ft), Wooden Board (₹25/running ft), Not Required (₹0)",
      "Support Rods":
        "Customizable horizontal or vertical support rods included in total running feet calculation",
      "Fitting Charges":
        "Not Required (₹0) / ₹300 for 1st board + ₹200 for each additional board",
      "Angle Price": "Not Required (₹0) / ₹450 per unit",
      "Angle Patti Price": "Not Required (₹0) / ₹100 per unit",
      "Production Time": "24-48 Hours from design approval",
    },
    ourSpecialization: [
      "Heavy duty weather-resistant flex media",
      "Precision perimeter running feet measurement for custom framing",
      "Custom support rods calculation to ensure structural rigidity",
      "Professional site fitting and mounting options",
    ],
  },
];
