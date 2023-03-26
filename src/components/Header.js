import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { useColorMode } from "@chakra-ui/react";

function Header() {
  const { colorMode } = useColorMode();
  return (
    <Box
      className="h-full flex flex-col w-16 bg-black fixed top-0 right-0 border-solid border-violet-600 border-l-4"
      bg={colorMode === "dark" ? "black" : "white"}
    >
      <Flex className="flex-col h-full">
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
}

export default Header;
