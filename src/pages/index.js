import Header from "../components/Header";
import { Box, Image, Text } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export default function Home() {
  const { colorMode } = useColorMode();
  const shadowColor = {
    light: "shadow-[5px_8px_30px_-15px_rgba(0,0,0,1)]",
    dark: "shadow-[5px_8px_30px_-15px_rgba(255,255,255,1)]",
  };
  return (
    <Box>
      <Header />
      <Box className="flex justify-start items-center w-full h-screen">
        <Box className="relative">
          <Image
            src="profile-img.png"
            alt="Profile Image"
            className={`rounded-[32px] ${shadowColor[colorMode]} ml-28`}
          />
        </Box>
        <Box
          className={`absolute top-0 h-full flex flex-col -z-[1] w-80 ${
            colorMode === "dark" ? "bg-gray-800" : "bg-gray-300"
          }`}
        />
        <Box>
          <Box className="flex flex-col items-center mb-56 ml-40">
            <Text className="text-9xl font-bold p-12" bgGradient='linear(to-l, #6927d9, #d446ab)' bgClip='text'>Joaquín Alejandro Borges Borio</Text>
            <Text className="text-6xl font-bold pb-3" bgGradient='linear(to-l, #74b7ff, #2ac751)' bgClip='text'>- Full Stack Developer</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
