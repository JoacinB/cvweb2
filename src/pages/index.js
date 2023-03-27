import About from "@/components/About";
import NavBar from "../components/NavBar";
import { Box, Image, Text, Tooltip } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  const { colorMode } = useColorMode();
  const shadowColor = {
    light: "shadow-[5px_8px_30px_-15px_rgba(0,0,0,1)]",
    dark: "shadow-[5px_8px_30px_-15px_rgba(255,255,255,1)]",
  };
  const [text] = useTypewriter({
    words: ['Full-Stack Developer', 'Web Developer', 'Mobile Developer'],
    loop: 0,
    deleteSpeed: 80
  })
  return (
    <Box h="100vh">
      <NavBar />
      <Box className="flex justify-start items-center h-full">
        <Box className="relative">
          <Image
            src="profile-img.webp"
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
            <Text className="text-6xl font-bold pb-3 ml-16 self-start" bgGradient='linear(to-l, #74b7ff, #2ac751)' bgClip='text'>- I'm a {text}<Cursor cursorColor='#86909e' /></Text>
          </Box>
        </Box>
      </Box>
      <About/>
      <Portfolio/>
      <Contact/>
    </Box>
  );
}
