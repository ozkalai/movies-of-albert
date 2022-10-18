import React, { Dispatch, SetStateAction, useContext } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import { useTranslation } from "../hooks/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { UIContext } from "../contexts/UIContext";

interface ISiderProps {
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
}

const Sider: React.FC<ISiderProps> = ({ selectedType, setSelectedType }) => {
  const categories = useTranslation();
  const { displaySider, setDisplaySider } = useContext(UIContext);
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

  const categoriesArray = Object.entries(categories);
  const { locale } = useRouter();

  return (
    <Box
      zIndex={999}
      transition={"all 2s ease"}
      display={{ base: `${displaySider}`, md: `block` }}
      pt={8}
      h="calc(100vh - 3rem)"
      bg="sider.100"
      minW={{ base: "full", md: 240, lg: "xs" }}
      color="white"
      position={{ base: "fixed", md: "relative" }}
    >
      {categoriesArray.map(([key, value]) => (
        <Button
          key={key}
          py={"7"}
          w="full"
          rounded="none"
          bg="transparent"
          display="flex"
          justifyContent="start"
          _hover={{ bg: "background.100", color: "header.100" }}
          _active={{ bg: "background.100", color: "header.100" }}
          isActive={selectedType === key}
          onClick={() => {
            setSelectedType(key);
            if (isSmallerThan768) {
              setDisplaySider("none");
            }
          }}
        >
          {value}
        </Button>
      ))}
      <Divider mt={20} />
      <Box>
        <RadioGroup value={locale}>
          <Flex p={4} direction="column" gap={5}>
            <Radio value="en-US">
              <Link href="/" as="en-US" locale="en-US">
                English
              </Link>
            </Radio>

            <Radio value="tr-TR">
              <Link href="/" locale="tr-TR">
                Turkish
              </Link>
            </Radio>
          </Flex>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Sider;
