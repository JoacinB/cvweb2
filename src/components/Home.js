import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const { colorMode } = useColorMode();
  const shadowColor = {
    light: "shadow-[5px_8px_30px_-15px_rgba(0,0,0,1)]",
    dark: "shadow-[5px_8px_30px_-15px_rgba(255,255,255,0.3)]",
  };
  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "Web Developer", "Mobile Developer"],
    loop: 0,
    deleteSpeed: 80,
  });
  return (
    <Flex className="h-screen">




      <Box
        className={`flex flex-col justify-center ${
          colorMode === "dark" ? "bg-gray-800" : "bg-gray-300"
        }`}
      >
        <Flex>
          <Box className="flex-1">
            {
              <Image
                src="profile-img.webp"
                alt="Profile Image"
                className={`rounded-[32px] ${shadowColor[colorMode]} relative top-1/3 left-1/2`}
                objectFit="cover"
              />
            }
          </Box>
          <Box className={`flex-1 h-screen ${colorMode === "dark" ? " bg-black" : "bg-white"}`}>
            {/* Put content for second half of the parent box here */}
          </Box>
        </Flex>
      </Box>





      <Box className="flex flex-col items-center flex-1">
        <Text
          className="text-2xl font-bold p-12 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl"
          bgGradient="linear(to-l, #6927d9, #d446ab)"
          bgClip="text"
        >
          Joaquín Alejandro Borges Borio
        </Text>
        <Text
          className="text-2xl font-bold p-12 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl"
          bgGradient="linear(to-l, #74b7ff, #2ac751)"
          bgClip="text"
        >
          - I'm a {text}
          <Cursor cursorColor="#86909e" />
        </Text>
      </Box>
    </Flex>
  );
}
