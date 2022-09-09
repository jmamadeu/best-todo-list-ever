import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { TaskContextProps } from '~/contexts/task-context';
import { colors } from '~/theme/colors';

type TaskCardProps = {
  task: Module.Task.Type;
  handlePressDeleteButton: TaskContextProps['deleteTask'];
  handlePressDoneButton: TaskContextProps['toggleIsDone'];
};

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  handlePressDeleteButton,
  handlePressDoneButton
}) => (
  <View style={styles.taskContainer}>
    <View style={styles.task}>
      <Pressable onPress={() => handlePressDoneButton(task.id)}>
        {task.isDone ? (
          <AntDesign name="checkcircle" size={20} color={colors.purpleDark} />
        ) : (
          <Entypo name="circle" size={20} color={colors.blue} />
        )}
      </Pressable>
      <Text style={[styles.taskName, task.isDone && styles.isDone]}>{task.name}</Text>
    </View>
    <Pressable onPress={() => handlePressDeleteButton(task.id)}>
      <MaterialCommunityIcons name="trash-can-outline" size={20} color={colors.gray[300]} />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  taskContainer: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.gray[500],
    borderRadius: 8
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  taskName: {
    color: colors.gray[100],
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginLeft: 8
  },
  isDone: {
    textDecorationColor: colors.gray[300],
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',

    color: colors.gray[300]
  }
});
