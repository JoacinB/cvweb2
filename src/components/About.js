import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

export default function About() {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "dark" ? "white" : "gray.800";

  return (
    <Box
      bg={colorMode === "dark" ? "black" : "white"}
      color={textColor}
      px={8}
      py={20}
      h={["auto", "auto", "auto", "100vh"]}
    >
      <Box mx="auto" textAlign="center">
        <Text className="mb-4 text-3xl font-semibold 2xl:text-6xl 2xl:font-semibold xl:text-5xl xl:font-semibold lg:text-4xl lg:font-semibold md:text-3xl md:font-semibold sm:text-3xl sm:font-semibold">
          About Me
        </Text>
        <Text fontSize="xl" mb={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          gravida justo ac tincidunt consectetur. Praesent ultrices ullamcorper
          dolor, at imperdiet odio fermentum sit amet. Sed viverra commodo eros
          id semper.
        </Text>
        <Text fontSize="xl">
          Fusce ac mauris ipsum. Integer rutrum, lorem et commodo lobortis,
          enim libero pellentesque orci, non pharetra nulla justo a nulla.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Vestibulum sed purus nisl. Sed euismod lacus ac
          dolor commodo, sit amet imperdiet nisl ultrices.
        </Text>
      </Box>
    </Box>
  );
}
