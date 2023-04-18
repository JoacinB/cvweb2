import {
  Box,
  Flex,
  ListItem,
  Text,
  Stack,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import { differenceInYears } from "date-fns";

export default function About() {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "dark" ? "white" : "gray.800";
  const shadowColor = {
    light: "shadow-[5px_8px_30px_-15px_rgba(0,0,0,1)]",
    dark: "shadow-[5px_5px_30px_-15px_rgba(150,150,150,1)]",
  };
  const borderColor = colorMode === "dark" ? "#2B2A2A" : "#D4D5D5";
  const backgroundColor =
    colorMode === "dark" ? "bg-black/40" : "bg-slate-100/40";
  const Birthday = new Date(2002, 1, 8);
  const age = differenceInYears(new Date(), Birthday);

  return (
    <Box
      // style={{
      //   background: `url('/fondoabout.png') ${colorMode === "dark" ? "black" : "white"} no-repeat center`,
      // }}
      color={textColor}
      px={8}
      py={5}
      h={["auto", "auto", "auto", "100vh"]}
    >
      <Box className="mx-auto text-center">
        <Text className="mb-20 text-3xl font-bold xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl">
          About Me
        </Text>
        <Flex className="justify-between mx-auto">
          <Box
            w="50%"
            className={`text-left ${backgroundColor} p-3 mr-3 rounded-xl border-2 border-${borderColor}`}
          >
            <Box>
              <Text className="mb-4 text-2xl font-bold uppercase xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl">
                Personal Info
              </Text>
              <UnorderedList
                listStyleType="none"
                className="text-xl font-light inline-block"
              >
                <ListItem className="mb-4 text-lg">
                  First Name: <span className="font-semibold">Joaquín</span>
                </ListItem>
                <ListItem className="mb-4 text-lg">
                  Age: <span className="font-semibold">{age} Years</span>
                </ListItem>
                <ListItem className="mb-4 text-lg">
                  Phone: <span className="font-semibold">+598 91339424</span>
                </ListItem>
                <ListItem className="mb-4 text-lg">
                  Email:{" "}
                  <span className="font-semibold">
                    joaquinborgesborio@gmail.com
                  </span>
                </ListItem>
              </UnorderedList>
              <UnorderedList
                listStyleType="none"
                className="text-xl font-light inline-block"
              >
                <ListItem className="mb-4 text-lg">
                  Last Name: <span className="font-semibold">Borges</span>
                </ListItem>
                <ListItem className="mb-4 text-lg">
                  Nationality: <span className="font-semibold">Uruguayan</span>
                </ListItem>
                <ListItem className="mb-4 text-lg">
                  Address:{" "}
                  <span className="font-semibold">Juan Paullier 1783</span>
                </ListItem>
                <ListItem className="mb-4 text-lg">
                  City: <span className="font-semibold">Montevideo</span>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box
            w="50%"
            className={`text-left ${backgroundColor} p-3 mr-3 rounded-xl border-2 border-${borderColor}`}
          >
            <Text className="text-xl p-5">
              I am currently pursuing a Bachelor's Degree in Computer Systems at
              ORT University located in Montevideo, Uruguay. My current priority
              is to enhance my learning and face challenges that push me to
              perform at my best. I have a strong passion for working and
              creating solutions that have a positive impact on people's daily
              lives. My ability to learn quickly and continuously seek out
              opportunities to develop new skills is what sets me apart.
              Moreover, I believe in the power of teamwork and always strive to
              support my colleagues while tackling new challenges together.
            </Text>
          </Box>
        </Flex>
        <Text className="mt-20 mb-10 text-3xl font-bold xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl">
          Skills
        </Text>
        <Stack className="justify-center items-center flex-wrap"
          direction="row"
          spacing={7}
        >
          <Box className={`${shadowColor[colorMode]} rounded-2xl p-3 hover:-translate-y-2 transition duration-250`}
          >
            <img
              src="https://img.icons8.com/color/240/000000/html-5--v1.png"
              alt="HTML5"
              className="w-24 h-24"
            />
            HTML5
          </Box>

          <Box className={`${shadowColor[colorMode]} rounded-2xl p-3 hover:-translate-y-2 transition duration-250`}
          >
            <img
              src="https://img.icons8.com/color/240/000000/css3.png"
              alt="CSS"
              width={96}
              height={96}
            />
            CSS3
          </Box>

          <Box className={`${shadowColor[colorMode]} rounded-2xl p-3 hover:-translate-y-2 transition duration-250`}
          >
            <img
              src="https://img.icons8.com/color/240/000000/javascript--v1.png"
              alt="JavaScript"
              width={96}
              height={96}
            />
            JavaScript
          </Box>

          <Box className={`${shadowColor[colorMode]} rounded-2xl p-3 hover:-translate-y-2 transition duration-250`}
          >
            <img
              src="https://img.icons8.com/color/240/000000/bootstrap.png"
              alt="Bootstrap"
              width={96}
              height={96}
            />
            Bootstrap
          </Box>

          <Box className={`${shadowColor[colorMode]} rounded-2xl p-3 hover:-translate-y-2 transition duration-250`}
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8cGF0aCBkPSJNMTAuOSwyLjFjLTQuNiwwLjUtOC4zLDQuMi04LjgsOC43Yy0wLjUsNC43LDIuMiw4LjksNi4zLDEwLjVDOC43LDIxLjQsOSwyMS4yLDksMjAuOHYtMS42YzAsMC0wLjQsMC4xLTAuOSwwLjEgYy0xLjQsMC0yLTEuMi0yLjEtMS45Yy0wLjEtMC40LTAuMy0wLjctMC42LTFDNS4xLDE2LjMsNSwxNi4zLDUsMTYuMkM1LDE2LDUuMywxNiw1LjQsMTZjMC42LDAsMS4xLDAuNywxLjMsMWMwLjUsMC44LDEuMSwxLDEuNCwxIGMwLjQsMCwwLjctMC4xLDAuOS0wLjJjMC4xLTAuNywwLjQtMS40LDEtMS44Yy0yLjMtMC41LTQtMS44LTQtNGMwLTEuMSwwLjUtMi4yLDEuMi0zQzcuMSw4LjgsNyw4LjMsNyw3LjZDNyw3LjIsNyw2LjYsNy4zLDYgYzAsMCwxLjQsMCwyLjgsMS4zQzEwLjYsNy4xLDExLjMsNywxMiw3czEuNCwwLjEsMiwwLjNDMTUuMyw2LDE2LjgsNiwxNi44LDZDMTcsNi42LDE3LDcuMiwxNyw3LjZjMCwwLjgtMC4xLDEuMi0wLjIsMS40IGMwLjcsMC44LDEuMiwxLjgsMS4yLDNjMCwyLjItMS43LDMuNS00LDRjMC42LDAuNSwxLDEuNCwxLDIuM3YyLjZjMCwwLjMsMC4zLDAuNiwwLjcsMC41YzMuNy0xLjUsNi4zLTUuMSw2LjMtOS4zIEMyMiw2LjEsMTYuOSwxLjQsMTAuOSwyLjF6Ij48L3BhdGg+Cjwvc3ZnPg=="
              alt="GitHub"
            />
            GitHub
          </Box>

          <Box className={`${shadowColor[colorMode]} rounded-2xl p-3 hover:-translate-y-2 transition duration-250`}
          >
            <img
              src="https://img.icons8.com/color/240/000000/java-coffee-cup-logo--v1.png"
              alt="Java"
              width={96}
              height={96}
            />
            Java
          </Box>

          <Box className={`${shadowColor[colorMode]} rounded-2xl p-3 hover:-translate-y-2 transition duration-250`}
          >
            <img
              src="https://img.icons8.com/color/96/000000/mysql-logo.png"
              alt="MySQL"
              width={96}
              height={96}
            />
            MySQL
          </Box>

          <Box className={`${shadowColor[colorMode]} rounded-2xl p-3 hover:-translate-y-2 transition duration-250`}
          >
            <img
              src="https://img.icons8.com/color/96/000000/python--v1.png"
              alt="Python"
              width={96}
              height={96}
            />
            Python
          </Box>

          <Box className={`${shadowColor[colorMode]} rounded-2xl p-3 hover:-translate-y-2 transition duration-250`}
          >
            <img
              src="https://img.icons8.com/external-those-icons-flat-those-icons/96/000000/external-PHP-programming-and-development-those-icons-flat-those-icons.png"
              alt="PHP"
              width={96}
              height={96}
            />
            PHP
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
