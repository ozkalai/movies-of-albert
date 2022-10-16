export interface Categories {
  popular: string;
  topRated: string;
  upcoming: string;
}

export interface Content {
  categories: Categories;
}

export type Languages = "en-US" | "tr-TR";

export type Translations = Record<Languages, Content>;
