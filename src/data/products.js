import { visitingCards } from "./products/visitingCards";
import { cardHolders } from "./products/cardHolders";
import { pamphlets } from "./products/pamphlets";
import { tags } from "./products/tags";
import { files } from "./products/files";
import { letterHeads } from "./products/letterHeads";
import { envelopes } from "./products/envelopes";
import { digitalPaper } from "./products/digitalPaper";
import { atmPouches } from "./products/atmPouches";
import { billBooks } from "./products/billBooks";
import { stickers } from "./products/stickers";
import { pens } from "./products/pens";
import { flexBoardProducts } from "./products/flexBoard";

export {
  visitingCards,
  cardHolders,
  pamphlets,
  tags,
  files,
  letterHeads,
  envelopes,
  digitalPaper,
  atmPouches,
  billBooks,
  stickers,
  pens,
 
  flexBoardProducts,
};

export const products = [
  ...flexBoardProducts,
  ...visitingCards,
  ...cardHolders,
  ...pamphlets,
  ...tags,
  ...files,
  ...letterHeads,
  ...envelopes,
  ...digitalPaper,
  ...atmPouches,
  ...billBooks,
  ...stickers,
  ...pens,
 
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.categoryId === categoryId);
}

export function searchProducts(query) {
  if (!query || query.trim() === "") return [];
  const q = query.toLowerCase().trim();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.categoryId.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.specifications.material &&
        p.specifications.material.toLowerCase().includes(q)),
  );
}
