import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { TaskCard } from '../task-card/task-card';

import { useTasks } from '~/contexts/task-context';

export const TaskCardList = () => {
  const { tasks, deleteTask, toggleIsDone } = useTasks();

  return (
    <>
      {/* <FlatList
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
        // estimatedItemSize={200}
        data={tasks}
      /> */}

      <FlatList
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
        // estimatedItemSize={200}
        data={tasks}
      />

      {/* {tasks.map((task) => (
        <View key={task.id} style={styles.task}>
          <TaskCard
            task={task}
            handlePressDeleteButton={deleteTask}
            handlePressDoneButton={toggleIsDone}
          />
        </View>
      ))} */}
    </>
  );
};

const styles = StyleSheet.create({
  task: {
    marginBottom: 8
  }
});
