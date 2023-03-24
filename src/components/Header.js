import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { useColorMode } from "@chakra-ui/react";

function Header() {
  const { colorMode } = useColorMode();
  return (
    <Box className="w-full h-20 bg-black fixed filter: backdrop-blur-[20px]" bg={colorMode === "dark" ? "black" : "white"}>
      <Flex>
        <Heading>My Website</Heading>
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
}

export default Header;
