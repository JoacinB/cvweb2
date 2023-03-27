import { Box, Flex, IconButton, Tooltip, Icon } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { useColorMode } from "@chakra-ui/react";
import { BiHome } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";


function NavBar() {
  const { colorMode } = useColorMode();
  return (
    <Box
      className="h-full flex flex-col w-16 bg-black fixed top-0 right-0 border-solid border-violet-600 border-l-2"
      bg={colorMode === "dark" ? "black" : "white"}
    >
      <Flex className="flex-col h-full relative justify-center">
        <Tooltip label="Home" aria-label="Home" placement='left' bgGradient='linear(to-l, #6927d9, #d446ab)' textColor={ 'white' }>
          <IconButton
            aria-label="Home"
            bg="transparent"
            color={colorMode}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ outline: "none" }}
            icon={<Icon as={BiHome} boxSize={7}/>}
          />
        </Tooltip>
        <Tooltip label="About" aria-label="About" placement='left' bgGradient='linear(to-l, #6927d9, #d446ab)' textColor={ 'white' }>
          <IconButton
            aria-label="About"
            bg="transparent"
            color={colorMode}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ outline: "none" }}
            icon={<Icon as={BiUser} boxSize={7}/>}
          />
        </Tooltip>
        <Tooltip label="Portfolio" aria-label="Portfolio" placement='left' bgGradient='linear(to-l, #6927d9, #d446ab)' textColor={ 'white' }>
          <IconButton
            aria-label="Portfolio"
            bg="transparent"
            color={colorMode}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ outline: "none" }}
            icon={<Icon as={BiBriefcase} boxSize={7}/>}
          />
        </Tooltip>
        <Tooltip label="Contact" aria-label="Contact" placement='left' bgGradient='linear(to-l, #6927d9, #d446ab)' textColor={ 'white' }>
          <IconButton
            aria-label="Contact"
            bg="transparent"
            color={colorMode}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ outline: "none" }}
            icon={<Icon as={BiEnvelope} boxSize={7}/>}
          />
        </Tooltip>
        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
}

export default NavBar;
