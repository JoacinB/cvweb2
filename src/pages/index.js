import Header from "../components/Header";
import { Box, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Header />
      {<Image src="profile-img.png" alt="Profile Image" />}
    </Box>
  );
}
