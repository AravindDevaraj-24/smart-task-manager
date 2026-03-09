import { Flex, Heading} from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      bg="teal.500"
      color="white"
      p='4'
      align="center"
      justify="space-between"
    >
      <Heading>Smart Task Manager</Heading>
    </Flex>
  )
}

export default Navbar;