import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContentByLocaleProvider } from "../src/hooks/useContentByLocale";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

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

console.log("theme", theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContentByLocaleProvider>
        <Component {...pageProps} />
      </ContentByLocaleProvider>
    </ChakraProvider>
  );
}

export default MyApp;
