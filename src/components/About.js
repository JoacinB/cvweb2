import { Box, Flex, ListItem, Text, UnorderedList, useColorMode } from "@chakra-ui/react";
import { differenceInYears } from "date-fns";

export default function About() {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "dark" ? "white" : "gray.800";
  const Birthday = new Date(2002, 1, 8);
  const age = differenceInYears(new Date(), Birthday);

  return (
    <Box
      bg={colorMode === "dark" ? "black" : "white"}
      color={textColor}
      px={8}
      py={5}
      h={["auto", "auto", "auto", "100vh"]}
    >
      <Box className="mx-auto text-center">
        <Text className="mb-20 text-3xl font-bold uppercase xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl">
          About Me
        </Text>
        <Flex className="justify-between max-w-[1200px] mx-auto">
          <Box w="50%" className=" text-left">
            <Box>
              <Text className="mb-4 text-2xl font-bold uppercase xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl">
                Personal Info
              </Text>
              <UnorderedList listStyleType='none' className="text-xl font-semibold inline-block">
                <ListItem className="mb-4 text-lg">First Name: Joaquín</ListItem>
                <ListItem className="mb-4 text-lg">Age: {age} Years</ListItem>
                <ListItem className="mb-4 text-lg">Phone: +598 91339424</ListItem>
                <ListItem className="mb-4 text-lg">Email: joaquinborgesborio@gmail.com</ListItem>
              </UnorderedList>
              <UnorderedList listStyleType='none' className="text-xl font-semibold inline-block">
                <ListItem className="mb-4 text-lg">Last Name: Borges</ListItem>
                <ListItem className="mb-4 text-lg">Nationality: Uruguayan</ListItem>
                <ListItem className="mb-4 text-lg">Address: Juan Paullier 1783</ListItem>
                <ListItem className="mb-4 text-lg">City: Montevideo</ListItem>
                
              </UnorderedList>
            </Box>
          </Box>
          <Box w="50%">
            {
              /* Content for the second div */
              <Text className="bg-[#111111]">Personal Info</Text>
            }
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
