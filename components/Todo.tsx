/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export interface TodoI {
  name: string;
  id: string;
  isDone: boolean;
}

interface TodoProps {
  todo: TodoI;
  handleDelete: (id: string) => void;
  handleDone: (id: string) => void;
  navigation?: any;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  item: {
    padding: 20,
    borderBottomWidth: 5,
    borderBottomColor: '#3f3f3f',
    marginBottom: 20,
  },

  buttons: {
    width: 60,
  },
});

const Todo = ({
  todo: {name, isDone, id},
  handleDelete,
  handleDone,
  navigation,
}: TodoProps) => {
  console.log(isDone);
  return (
    <View key={id} style={{...styles.flex, ...styles.item}}>
      <Text
        onPress={() => navigation.navigate('Details', {name, isDone, id})}
        style={{
          ...styles.text,
          textDecorationLine: isDone ? 'line-through' : 'none',
        }}>
        - {name}
      </Text>
      <View style={{...styles.flex, ...styles.buttons}}>
        <Icon onPress={() => handleDelete(id)} name="remove" size={20} />
        <Icon
          onPress={() => handleDone(id)}
          name={isDone ? 'undo' : 'check'}
          size={20}
        />
      </View>
    </View>
  );
};

export default Todo;
