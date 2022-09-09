import { createContext, useContext, useState } from 'react';

import { generateNewId } from '~/utils/get-new-id';

export type TaskContextProps = {
  tasks: Module.Task.Type[];
  addNewTask: (taskName: Module.Task.Type['name']) => void;
  deleteTask: (taskId: Module.Task.Type['id']) => void;
  toggleIsDone: (taskId: Module.Task.Type['id']) => void;
};

type TaskProviderProps = {
  children: React.ReactNode;
};

const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Module.Task.Type[]>([]);

  const addNewTask = (taskName: Module.Task.Type['name']) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        name: taskName,
        createdAt: new Date(),
        id: generateNewId(),
        isDone: false
      }
    ]);
  };

  const deleteTask = (taskId: Module.Task.Type['id']) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  };

  const toggleIsDone = (taskId: Module.Task.Type['id']) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id === taskId) {
          task.isDone = !task.isDone;
        }

        return task;
      })
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addNewTask, deleteTask, toggleIsDone }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);

  return context;
};
