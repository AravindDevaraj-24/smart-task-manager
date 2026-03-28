import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Heading, Text } from "@chakra-ui/react";


function Tasks() {

  const {tasks} = useContext(TaskContext)
  return (
    <div>
    <Heading mb="6">Tasks Page</Heading>

    {tasks.map((task, index)=>(
      <div key={index}>
        <Heading size={"lg"}>{task.title}</Heading>
        <Text fontSize="2xl">{task.description}</Text>
      </div>
    ))}
     </div>
  );
}

export default Tasks;