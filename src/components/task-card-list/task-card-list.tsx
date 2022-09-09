import React from 'react';

import { TaskCard } from '../task-card/task-card';

type TaskCardListProps = {
  tasks: Module.Task.Type[];
};

export const TaskCardList: React.FC<TaskCardListProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </>
  );
};
