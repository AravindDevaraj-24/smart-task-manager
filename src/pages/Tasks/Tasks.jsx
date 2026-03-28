import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import Taskcard from '../../components/common/Taskcard';

function Tasks() {
  const { tasks } = useContext(TaskContext);
  return (
    <Box>
      <Heading mb='6'>Tasks Page</Heading>
      {tasks.length === 0 ? (
        <Text>No Tasks Created Yet</Text>
      ) : (
        <VStack spacing='4' align='stretch'>
          {tasks.map((task, index) => (
            <Taskcard key={index} task={task} />
          ))}
        </VStack>
      )}
    </Box>
  );
}

export default Tasks;
