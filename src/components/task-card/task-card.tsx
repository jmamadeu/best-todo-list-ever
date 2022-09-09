import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '~/theme/colors';

type TaskCardProps = {
  task: Module.Task.Type;
};

export const TaskCard: React.FC<TaskCardProps> = () => (
  <View style={styles.taskContainer}>
    <View style={styles.task}>
      <Pressable>
        <Entypo name="circle" size={20} color={colors.blue} />
      </Pressable>
      <Text style={styles.taskName}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi tenetur,
      </Text>
    </View>
    <Pressable>
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
  }
});
