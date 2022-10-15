import React from "react";
import { useRouter } from "next/router";

interface Categories {
  popular: string;
  topRated: string;
  upcoming: string;
}

interface Content {
  categories: Categories;
}

type Translations = Record<"en" | "tr", Content>;

const translations: Translations = {
  en: {
    categories: {
      popular: "Popular Movies",
      topRated: "Top Rated Movies",
      upcoming: "Upcoming Movies",
    },
  },
  tr: {
    categories: {
      popular: "Popüler Filmler",
      topRated: "En İyi Filmler",
      upcoming: "Yaklaşan Filmler",
    },
  },
};

const ContentByLocaleContext = React.createContext<Content>({} as Content);

export const ContentByLocaleProvider = ({ children }: any) => {
  const { locale } = useRouter();
  const content = translations[(locale || "en") as keyof Translations];

  return (
    <ContentByLocaleContext.Provider value={content}>
      {children}
    </ContentByLocaleContext.Provider>
  );
};

export const useContentByLocale = () => {
  const context = React.useContext(ContentByLocaleContext);

  return context;
};
