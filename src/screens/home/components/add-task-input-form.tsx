import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { AddButton } from '~/components/add-button/add-button';
import { TextInput } from '~/components/text-input/text-input';
import { useTasks } from '~/contexts/task-context';

export const AddTaskInputForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const { addNewTask } = useTasks();

  const handleAddNewTaskButtonClick = () => {
    if (!taskTitle) {
      return;
    }

    addNewTask(taskTitle);

    setTaskTitle('');
  };

  return (
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
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginRight: 4
  },
  searchForm: {
    flexDirection: 'row',
    marginTop: -27
  }
});
