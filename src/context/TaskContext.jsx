import { createContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const storedData = localStorage.getItem('tasks');
    return storedData ? JSON.parse(storedData) : [];
  });

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const updateTaskStatus = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          let newStatus;

          if (task.status === 'todo') newStatus = 'inProgress';
          else if (task.status === 'inProgress') newStatus = 'done';
          else newStatus = 'todo';

          return {
            ...task,
            status: newStatus,
          };
        }

        return task;
      }),
    );
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, updateTaskStatus, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
