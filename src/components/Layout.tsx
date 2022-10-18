import React from "react";
import { Box } from "@chakra-ui/react";

import Header from "./Header";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Box p={0} h="full" w="full" display="flex" flexDirection="column">
      <Header />
      <Box display="flex" w="full" h="calc(100vh - 3rem)" bg="background.100">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
