import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import TodoDetails from './components/TodoDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {backgroundColor: '#333'},
            headerTitleStyle: {color: '#fff'},
          }}
        />

        <Stack.Screen
          name="Details"
          component={TodoDetails}
          options={{
            title: 'Details',
            headerStyle: {backgroundColor: '#333'},
            headerTitleStyle: {color: '#fff'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
