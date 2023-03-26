import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = { light: "gray.800", dark: "gray.50" };

  return (
    <IconButton
      icon={colorMode === "light" ? <MoonIcon boxSize={6}/> : <SunIcon boxSize={6}/>}
      aria-label={colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"}
      onClick={toggleColorMode}
      bg="transparent"
      color={iconColor[colorMode]}
      _hover={{ bg: "transparent" }}
      _active={{ bg: "transparent" }}
      _focus={{ outline: "none" }}
    />
  );
}

export default ColorModeSwitcher;
