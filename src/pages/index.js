import Header from "../components/Header";
import { Box, Image } from "@chakra-ui/react";
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
        <Box className="relative w-full">
          <Image
            src="profile-img.png"
            alt="Profile Image"
            className={`rounded-[32px] ${shadowColor[colorMode]} ml-24`}
          />
        </Box>
        <Box className={`absolute top-0 h-full flex flex-col -z-[1] w-80 ${colorMode === "dark" ? "bg-gray-800" : "bg-gray-300"}`} />
      </Box>
    </Box>
  );
}
