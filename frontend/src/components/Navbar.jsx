import { Button, Container, Flex, HStack, Text ,useColorMode} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

function Navbar() {

  // To create a dark mode and light mode toggle in React, you can use Chakra UI's useColorMode hook
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    // px =padding
    // maxW= maximum width
    <Container maxW={"1140px"} px={4}>
      
      {/* Flex is a Chakra UI component that provides a flexible box layout model for arranging child elements in a row or column. */}
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        {/* <HStack> is a Chakra UI component that stacks child elements horizontally with built-in spacing and alignment features */}
        <HStack spacing={8} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
            {/* click klama dark wenn em hdn ek.IOMOON is a icon.commin from react icons */}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
