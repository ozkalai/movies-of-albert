import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TranslationProvider } from "../src/hooks/useTranslation";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { extendTheme } from "@chakra-ui/react";

import { UIProvider } from "../src/contexts/UIContext";

const colors = {
  background: {
    100: "#212a32",
  },
  header: {
    100: "#f26347",
    200: "#f21301",
  },
  sider: {
    100: "#181c1f",
  },
};

const theme = extendTheme({ colors });
axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ChakraProvider theme={theme}>
        <TranslationProvider>
          <Component {...pageProps} />
        </TranslationProvider>
      </ChakraProvider>
    </UIProvider>
  );
}

export default MyApp;
