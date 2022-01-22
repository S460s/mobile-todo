import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});

const TodoDetails = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <Text>Name: {route.params.name}</Text>
      <Text>ID: {route.params.id}</Text>
      <Text>Is done: {route.params.isDone ? 'true' : 'false'}</Text>
    </View>
  );
};

export default TodoDetails;
