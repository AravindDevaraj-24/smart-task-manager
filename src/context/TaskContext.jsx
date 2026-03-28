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

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}