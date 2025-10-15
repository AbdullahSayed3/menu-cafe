export type MenuItemName = {
  en: string;
  ar: string;
};

export type MenuItem = {
  name: MenuItemName;
  price: number | null;
  image?: string;
  description?: string;
};

export type MenuCategory = {
  category: MenuItemName;
  items: MenuItem[];
};