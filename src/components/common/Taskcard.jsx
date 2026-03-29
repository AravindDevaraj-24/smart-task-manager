import { Box, Heading, Text, Badge, VStack, HStack, Button } from "@chakra-ui/react";

const TaskCard = ({ task, onDelete })=> {

  const priorityColor = (priority) => {
    if(priority === "high") return "red";
    if(priority === "medium") return "yellow";
    return "green"
  }

  const statusColor = (status) => {
    if(status === "todo") return "gray";
    if(status === "in-progress") return "blue";
    return "green"
  }
  return (
    <Box
      p="5"
      borderWidth="1"
      borderRadius="lg"
      boxShadow="sm"
      width="100%"
    >
      <HStack spacing="3" justify="space-between">

      
      <VStack align="start" spacing="3">

        <Heading>{task.title}</Heading>

        <Text>{task.description}</Text>

        <HStack spacing="3">

          <Badge colorScheme={priorityColor(task.priority)} >{task.priority}</Badge>

          <Badge colorScheme={statusColor(task.status)}>{task.status}</Badge>

        </HStack>
        

      </VStack>
      <Button
          size='sm'
          colorScheme="red"
          onClick={onDelete}
        >
          Delete
        </Button>
      </HStack>
    </Box>
  )
}

export default TaskCard