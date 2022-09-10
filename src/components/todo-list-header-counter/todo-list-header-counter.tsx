import { StyleSheet, Text, View } from 'react-native';

import { Line } from '../line/line';

import { colors } from '~/theme/colors';

type TodoListHeaderCounterProps = {
  totalDone: number;
  totalTodo: number;
};

export const TodoListHeaderCounter: React.FC<TodoListHeaderCounterProps> = ({
  totalDone,
  totalTodo
}) => (
  <View>
    <View style={styles.taskListContainer}>
      <View style={styles.typeContainer}>
        <Text style={[styles.text, styles.addedText]}>To do</Text>
        <View style={styles.number}>
          <Text style={styles.numberText}>{totalTodo}</Text>
        </View>
      </View>

      <View style={styles.typeContainer}>
        <Text style={[styles.text, styles.doneText]}>Done</Text>
        <View style={styles.number}>
          <Text style={styles.numberText}>{totalDone}</Text>
        </View>
      </View>
    </View>

    <View style={styles.line}>
      <Line />
    </View>
  </View>
);

const styles = StyleSheet.create({
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
  }
});
