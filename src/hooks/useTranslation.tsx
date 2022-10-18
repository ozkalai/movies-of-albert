import React from "react";
import { useRouter } from "next/router";
import { Translations, Categories } from "../typings/translation";

const translations: Translations = {
  "en-US": {
    categories: {
      popular: "Popular Movies",
      topRated: "Top Rated Movies",
      upcoming: "Upcoming Movies",
    },
  },
  "tr-TR": {
    categories: {
      popular: "Popüler Filmler",
      topRated: "En İyi Filmler",
      upcoming: "Yaklaşan Filmler",
    },
  },
};

interface IContext {
  categories: Categories;
  currentLanguage: string;
  setCurrentLanguage: (language: "en-US" | "tr-TR") => void;
}

const TranslationContext = React.createContext<Categories>({} as Categories);

export const TranslationProvider = ({ children }: any) => {
  const { locale } = useRouter();

  const categories =
    translations[(locale || "en") as keyof Translations].categories;

  return (
    <TranslationContext.Provider value={categories}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = React.useContext(TranslationContext);

  return context;
};
