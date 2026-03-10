import { VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <VStack
      bg="gray.100"
      minH="100vh"
      p="4"
      align="stretch"
      spacing="4">
      <Button as={Link} to="/" >
        Dashboard
      </Button>
      <Button as={Link} to="/tasks">
        Tasks
      </Button>
      <Button as={Link} to="/create-task">
        Create Task
      </Button>
    </VStack>
  )
}

export default Sidebar;