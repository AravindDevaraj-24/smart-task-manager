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
import EditTaskModal from '../../components/common/EditTaskModal';
import { useLocation, useNavigate } from "react-router-dom";

function Tasks() {
  const { tasks, deleteTask, updateTaskStatus } = useContext(TaskContext);

  const location = useLocation();
  const navigate = useNavigate();

  const queryparams = new URLSearchParams(location.search);

  const search = queryparams.get("search") || "";
  const status = queryparams.get("status") || "";
  const priority = queryparams.get("priority") || "";
  const sort = queryparams.get("sort") || "";

  // const [searchTerm, setSearchTerm] = useState('');
  // const [statusFilter, setStatusFilter] = useState('');
  // const [priorityFilter, setPriorityFilter] = useState('');

  const searchTerm = search;
  const statusFilter = status;
  const priorityFilter = priority;

  const updateQuery = (key, value)=> {
    const params = new URLSearchParams(location.search);

    if(value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    navigate({
      pathname: location.pathname,
      search: `?${params.toString()}`
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEdit = (task) => {
    setSelectedTask(task);
    setIsOpen(true);
  }

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

  const sortedTasks = useMemo(()=>{
    const sorted = [...filteredTasks];

    if (sort === "priority") {
      const priorityOrder = { high: 1, medium: 2, low: 3 };

      sorted.sort((a, b) => {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
    }

    if (sort === "status") {
      const statusOrder = { todo: 1, inProgress: 2, done: 3 };

      sorted.sort((a, b) => {
        return statusOrder[a.status] - statusOrder[b.status];
      });
    }

    return sorted;
  },[filteredTasks, sort]);
  

  return (
    <Box>
      <Heading mb='6'>Tasks Page</Heading>

      <HStack spacing='4' mb='6'>
        <Input
          value={searchTerm}
          placeholder='Search tasks...'
          onChange={(e) => updateQuery("search", e.target.value)}
        />

        <Select
          placeholder='Filter by status'
          value={statusFilter}
          onChange={(e) => updateQuery("status", e.target.value)}
        >
          <option value='todo'>Todo</option>
          <option value='inProgress'>In Progress</option>
          <option value='done'>Done</option>
        </Select>

        <Select
          placeholder='Filter by Priority'
          value={priorityFilter}
          onChange={(e) => updateQuery("priority", e.target.value)}
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </Select>

        <Select
          placeholder="Sort by"
          value={sort}
          onChange={(e) => updateQuery("sort", e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="status">Status</option>
        </Select>
      </HStack>

      <VStack spacing='4' align='stretch'>
        {sortedTasks.length === 0 ? (
          <Text>No matching tasks found</Text>
        ) : (
          sortedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={() => deleteTask(task.id)}
              onStatusChange={() => updateTaskStatus(task.id)}
              onEdit={handleEdit}
            />
          ))
        )}
      </VStack>
      <EditTaskModal
        isOpen={isOpen}
        onClose={()=> setIsOpen(false)}
        task={selectedTask}
      />
    </Box>
  );
}

export default Tasks;
