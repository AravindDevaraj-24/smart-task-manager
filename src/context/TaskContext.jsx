import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

  const [tasks, setTasks] = useState(()=>{
    const storedData = localStorage.getItem("tasks");
    return storedData ? JSON.parse(storedData) : []
  });
  
  const addTask = (task)=> {
    setTasks((prev)=>[...prev, task]);
  }

  const deleteTask = (id) => {
    setTasks( prev => prev.filter((task) => task.id !== id))
  }

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}