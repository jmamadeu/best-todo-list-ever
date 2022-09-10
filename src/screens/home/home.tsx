import { SafeAreaView, StyleSheet, View } from 'react-native';

import { AddTaskInputForm } from './components/add-task-input-form';

import { Header } from '~/components/header/header';
import { TaskCardList } from '~/components/task-card-list/task-card-list';
import { TodoListHeaderCounter } from '~/components/todo-list-header-counter/todo-list-header-counter';
import { WithoutTasksCard } from '~/components/without-tasks-card/without-tasks-card';
import { useTasks } from '~/contexts/task-context';
import { colors } from '~/theme/colors';

export const HomeScreen = () => {
  const { tasks } = useTasks();

  const hasNoTasks = !tasks.length ?? [];
  const tasksTodoTotal = tasks.filter((task) => !task.isDone).length;
  const tasksDoneTotal = tasks.filter((task) => task.isDone).length;

  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView style={styles.safeView}>
        <View style={styles.content}>
          <AddTaskInputForm />
          <TodoListHeaderCounter totalDone={tasksDoneTotal} totalTodo={tasksTodoTotal} />

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
  clipBoard: {
    marginTop: 48
  },
  taskList: {
    marginTop: 20,
    flex: 1
  }
});
