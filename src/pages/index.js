import Header from "../components/Header";
import { Box, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export default function Home() {
  const { colorMode } = useColorMode();
  const shadowColor = { light: "shadow-[5px_8px_30px_-15px_rgba(0,0,0,1)]", dark: "shadow-[5px_8px_30px_-15px_rgba(255,255,255,1)]" };
  return (
    <Box>
      <Header />
      {
        <div className="flex justify-start w-full">
          <Image
            src="profile-img.png"
            alt="Profile Image"
            className={`rounded-[32px] ml-20 mt-40 mb-32 ${shadowColor[colorMode]}`}
          />
        </div>
      }
    </Box>
  );
}
