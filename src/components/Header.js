import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

function Header() {
  return (
    <Box className="w-full h-16 bg-red-500 sticky filter: backdrop-blur-[20px]">
      <Flex>
        <Heading>My Website</Heading>
        <Spacer />
        {/* Add any additional header content here */}
      </Flex>
    </Box>
  );
}

export default Header;
