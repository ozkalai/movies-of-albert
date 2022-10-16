import React from "react";
import { useRouter } from "next/router";
import { Translations, Content } from "../typings/translation";

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

const TranslationContext = React.createContext<Content>({} as Content);

export const TranslationProvider = ({ children }: any) => {
  const { locale } = useRouter();
  const content = translations[(locale || "en") as keyof Translations];

  return (
    <TranslationContext.Provider value={content}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = React.useContext(TranslationContext);

  return context;
};
