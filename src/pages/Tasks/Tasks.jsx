import { useState, useMemo, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import {
  Box,
  Heading,
  Text,
  VStack,
  Input,
  Select,
  HStack,
} from '@chakra-ui/react';
import TaskCard from '../../components/common/Taskcard';

function Tasks() {
  const { tasks, deleteTask, updateTaskStatus } = useContext(TaskContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter ? task.status === statusFilter : true;

      const matchesPriority = priorityFilter
        ? task.priority === priorityFilter
        : true;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tasks, searchTerm, statusFilter, priorityFilter]);

  return (
    <Box>
      <Heading mb='6'>Tasks Page</Heading>

      <HStack spacing='4' mb='6'>
        <Input
          value={searchTerm}
          placeholder='Search tasks...'
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Select
          placeholder='Filter by status'
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value='todo'>Todo</option>
          <option value='in-progress'>In Progress</option>
          <option value='done'>Done</option>
        </Select>

        <Select
          placeholder='Filter by Priority'
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </Select>
      </HStack>

      <VStack spacing='4' align='stretch'>
        {filteredTasks.length === 0 ? (
          <Text>No matching tasks found</Text>
        ) : (
          filteredTasks.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              onDelete={() => deleteTask(task.id)}
              onStatusChange={() => updateTaskStatus(task.id)}
            />
          ))
        )}
      </VStack>
    </Box>
  );
}

export default Tasks;
