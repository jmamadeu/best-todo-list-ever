import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TaskCard } from '../task-card/task-card';

import { useTasks } from '~/contexts/task-context';

export const TaskCardList = () => {
  const { tasks, deleteTask, toggleIsDone } = useTasks();

  return (
    <FlashList
      contentContainerStyle={{ paddingBottom: 10 }}
      showsVerticalScrollIndicator={false}
      renderItem={(task) => (
        <View style={styles.task}>
          <TaskCard
            task={task.item}
            handlePressDeleteButton={deleteTask}
            handlePressDoneButton={toggleIsDone}
          />
        </View>
      )}
      keyExtractor={(item) => item.id}
      estimatedItemSize={200}
      data={tasks}
    />
  );
};

const styles = StyleSheet.create({
  task: {
    marginBottom: 8
  }
});
