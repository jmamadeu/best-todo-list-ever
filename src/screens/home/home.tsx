import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { AddButton } from '~/components/add-button/add-button';
import { Header } from '~/components/header/header';
import { Line } from '~/components/line/line';
import { TaskCardList } from '~/components/task-card-list/task-card-list';
import { TextInput } from '~/components/text-input/text-input';
import { WithoutTasksCard } from '~/components/without-tasks-card/without-tasks-card';
import { useTasks } from '~/contexts/task-context';
import { colors } from '~/theme/colors';

export const HomeScreen = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const { tasks, addNewTask } = useTasks();

  const handleAddNewTaskButtonClick = () => {
    if (!taskTitle) {
      return;
    }

    addNewTask(taskTitle);

    setTaskTitle('');
  };

  const hasNoTasks = !tasks.length ?? [];
  const tasksTodoTotal = tasks.filter((task) => !task.isDone).length;
  const tasksDoneTotal = tasks.filter((task) => task.isDone).length;

  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView style={styles.safeView}>
        <View style={styles.content}>
          <View style={styles.searchForm}>
            <View style={styles.inputContainer}>
              <TextInput
                value={taskTitle}
                returnKeyLabel="Save"
                returnKeyType="done"
                onSubmitEditing={() => {
                  handleAddNewTaskButtonClick();
                }}
                onChangeText={(value) => setTaskTitle(value)}
              />
            </View>
            <AddButton onPress={handleAddNewTaskButtonClick} />
          </View>

          <View>
            <View style={styles.taskListContainer}>
              <View style={styles.typeContainer}>
                <Text style={[styles.text, styles.addedText]}>To do</Text>
                <View style={styles.number}>
                  <Text style={styles.numberText}>{tasksTodoTotal}</Text>
                </View>
              </View>

              <View style={styles.typeContainer}>
                <Text style={[styles.text, styles.doneText]}>Done</Text>
                <View style={styles.number}>
                  <Text style={styles.numberText}>{tasksDoneTotal}</Text>
                </View>
              </View>
            </View>

            <View style={styles.line}>
              <Line />
            </View>
          </View>

          {hasNoTasks ? (
            <View style={styles.clipBoard}>
              <WithoutTasksCard />
            </View>
          ) : (
            <View style={styles.taskList}>
              <TaskCardList />
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeView: {
    flex: 1,
    backgroundColor: colors.gray[600]
  },
  content: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: colors.gray[600]
  },
  inputContainer: {
    flex: 1,
    marginRight: 4
  },
  searchForm: {
    flexDirection: 'row',
    marginTop: -27
  },
  taskListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: colors.blue,
    fontFamily: 'Inter-Bold',
    fontSize: 14
  },
  addedText: {
    color: colors.blue,
    marginRight: 8
  },
  doneText: {
    color: colors.purple,
    marginRight: 8
  },
  number: {
    backgroundColor: colors.gray[400],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10
  },
  numberText: {
    color: colors.gray[200],
    fontSize: 12
  },
  line: {
    marginTop: 20
  },
  clipBoard: {
    marginTop: 48
  },
  taskList: {
    marginTop: 20,
    flex: 1
  }
});
