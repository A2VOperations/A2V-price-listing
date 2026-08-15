export const categories = [
  {
    id: "visiting-cards",
    slug: "visiting-cards",
    name: "Visiting Cards",
    description: "Premium business cards, metal cards, 500 GSM velvet/matt & PVC plastic cards.",
    icon: "FiCreditCard",
    itemCount: 8,
    image: "/products/visiting-cards/metal-card.jpg"
  },
  {
    id: "card-holders",
    slug: "card-holders",
    name: "Card Holders",
    description: "Leatherette, metallic, acrylic, and pocket executive visiting card holders.",
    icon: "FiBriefcase",
    itemCount: 4,
    image: "/products/card-holders/card-holder.jpg"
  },
  {
    id: "pamphlets-posters",
    slug: "pamphlets-posters",
    name: "Pamphlet / Posters",
    description: "Single & double sided promotional flyers, brochures, gloss/matt posters in A4, A3, and custom sizes.",
    icon: "FiFileText",
    itemCount: 2,
    image: "/products/pamphlets-posters/pamphlet.jpg"
  },
  {
    id: "tags",
    slug: "tags",
    name: "Tags",
    description: "Clothing tags, baggage tags, die-cut custom price tags with string hole punch.",
    icon: "FiTag",
    itemCount: 5,
    image: "/products/tags/hang-tag.jpg"
  },
  {
    id: "files",
    slug: "files",
    name: "Files & Folders",
    description: "Corporate presentation folders, lamination file folders, doc pockets, and clip files.",
    icon: "FiFolder",
    itemCount: 4,
    image: "/products/files/presentation-folder.jpg"
  },
  {
    id: "letter-heads",
    slug: "letter-heads",
    name: "Letter Heads",
    description: "Standard 100 GSM Bond paper, Executive Textured & Royal Cotton corporate letterheads.",
    icon: "FiFile",
    itemCount: 3,
    image: "/products/letter-heads/letterhead.jpg"
  },
  {
    id: "envelopes",
    slug: "envelopes",
    name: "Envelopes",
    description: "Corporate mailers, window envelopes, pocket envelopes, and heavy-duty laminated envelopes.",
    icon: "FiMail",
    itemCount: 5,
    image: "/products/envelopes/envelope.jpg"
  },
  {
    id: "digital-paper-printing",
    slug: "digital-paper-printing",
    name: "Digital Paper Printing",
    description: "High-resolution digital sheets, 300 GSM Art Card, Non-Tearable sheets, and metallic paper prints.",
    icon: "FiPrinter",
    itemCount: 4,
    image: "/products/digital-paper-printing/digital-print.jpg"
  },
  {
    id: "atm-pouches",
    slug: "atm-pouches",
    name: "ATM Pouches",
    description: "Custom printed plastic & paper ATM card sleeve pouches for bank and retail branding.",
    icon: "FiShield",
    itemCount: 3,
    image: "/products/atm-pouches/atm-pouch.jpg"
  },
  {
    id: "bill-books",
    slug: "bill-books",
    name: "Bill Books",
    description: "Carbonless NCR bill books, invoice books, receipt vouchers in duplicate & triplicate.",
    icon: "FiBookOpen",
    itemCount: 4,
    image: "/products/bill-books/bill-book.jpg"
  },
  {
    id: "stickers-labels",
    slug: "stickers-labels",
    name: "Stickers & Labels",
    description: "Vinyl waterproof stickers, paper labels, die-cut product labels, transparent stickers.",
    icon: "FiGrid",
    itemCount: 5,
    image: "/products/stickers-labels/sticker.jpg"
  },
  {
    id: "pens",
    slug: "pens",
    name: "Pens",
    description: "Engraved metallic pens, promotional plastic rollerballs, luxury gift pen sets.",
    icon: "FiEdit3",
    itemCount: 4,
    image: "/products/pens/pen.jpg"
  },
  {
    id: "shooting-targets",
    slug: "shooting-targets",
    name: "Shooting Targets",
    description: "Standard paper shooting targets, heavy card targets for sports and tactical training.",
    icon: "FiTarget",
    itemCount: 3,
    image: "/products/shooting-targets/target.jpg"
  },
  {
    id: "sample-files",
    slug: "sample-files",
    name: "Sample Files",
    description: "Complete master sample swatches, paper swatch books, and finish sample collections for sales.",
    icon: "FiBox",
    itemCount: 2,
    image: "/products/sample-files/sample-kit.jpg"
  }
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}
