export type MenuItem = {
  name: { ar: string; en: string };
  price: number | null;
  image: string;
  description?: string;
};

export type MenuCategory = {
  category: { ar: string; en: string };
  items: MenuItem[];
};
// types.ts
export type MenuItemName = {
  en: string;
  ar: string;
};

export type MenuVariation = {
  name: MenuItemName;
  price: number;
};

// export type MenuItem = {
//   name: MenuItemName;
//   image: string;
//   price?: number;
//   variations?: MenuVariation[];
//   description?: string;
// };

// export type MenuCategory = {
//   category: MenuItemName;
//   items: MenuItem[];
// };