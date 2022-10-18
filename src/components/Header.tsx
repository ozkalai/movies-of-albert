import { Box, Icon } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { UIContext } from "../contexts/UIContext";
import { useRouter } from "next/router";

const Header = () => {
  const { displaySider, setDisplaySider } = useContext(UIContext);
  const { pathname } = useRouter();
  const isDetailPage = pathname.includes("movie");
  return (
    <Box
      h="12"
      p={0}
      bg="header.100"
      w="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        display={{ base: "block", md: "none" }}
        ml={5}
        w="12px"
        h="12px"
      ></Box>
      <Box
        textAlign="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white "
        fontWeight={700}
        fontSize="xl"
        w={{ base: "full", md: 240, lg: "xs" }}
        background={{ base: "header.100", md: "header.200" }}
        h="full"
      >
        Movie App
      </Box>
      {!isDetailPage && (
        <Icon
          display={{ base: "block", md: "none" }}
          mr={5}
          cursor="pointer"
          bg="transparent"
          color="white"
          aria-label="hamburger-button"
          onClick={() => {
            setDisplaySider(displaySider === "block" ? "none" : "block");
            document.body.style.overflow =
              displaySider === "block" ? "auto" : "hidden";
          }}
          p={"2px"}
        >
          {displaySider === "block" ? <CloseIcon /> : <HamburgerIcon />}
        </Icon>
      )}
    </Box>
  );
};

export default Header;
