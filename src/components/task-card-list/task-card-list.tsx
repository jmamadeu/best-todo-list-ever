import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TaskCard } from '../task-card/task-card';

import { useTasks } from '~/contexts/task-context';

export const TaskCardList = () => {
  const { tasks, deleteTask, toggleIsDone } = useTasks();

  return (
    <>
      {tasks.map((task) => (
        <View key={task.id} style={styles.task}>
          <TaskCard
            task={task}
            handlePressDeleteButton={deleteTask}
            handlePressDoneButton={toggleIsDone}
          />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  task: {
    marginBottom: 8
  }
});
