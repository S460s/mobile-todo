import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Button,
  Alert,
} from 'react-native';
import {v4 as uuid} from 'uuid';

import Todo, {TodoI} from './Todo';

const styles = StyleSheet.create({
  input: {
    fontSize: 24,
  },
  container: {
    padding: 20,
    backgroundColor: '#333',
    flex: 1,
  },
  form: {
    marginBottom: 20,
  },
});

// const uuid = () => `${Math.randosm()}` + `${Math.random}`;

const Home = ({navigation}) => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<TodoI[]>([
    {name: 'Learn React Native', id: uuid(), isDone: false},
  ]);

  const handleClick = (): void => {
    if (!text) {
      Alert.alert('Error', 'Please enter a name for the to-do');
      return;
    }
    setTodos(prevState => [
      ...prevState,
      {name: text, id: uuid(), isDone: false},
    ]);
    setText('');
  };

  const handleDelete = (id: string): void => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  const handleDone = (id: string): void => {
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="To-do name"
        />

        <Button title="Add" onPress={handleClick} />
      </View>

      <FlatList
        data={todos}
        renderItem={({item: todo}) => (
          <Todo
            todo={todo}
            handleDelete={handleDelete}
            handleDone={handleDone}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default Home;
