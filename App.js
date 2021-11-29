import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab1 from './src/pages/Lab-1';
import Home from './src/pages/Home';
import Lab2 from './src/pages/Lab-2';
import Lab3 from './src/pages/Lab-3';
import Lab4 from './src/pages/Lab-4';
import Lab6 from './src/pages/Lab-6';
import Lab7 from './src/pages/Lab-7';
import Lab8 from './src/pages/Lab-8';
import Lab5 from './src/pages/Lab-5';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen
          name="Lab1"
          component={Lab1}
          options={{ title: 'Welcome - Lab 1' }}
        />
        <Stack.Screen
          name="Lab2"
          component={Lab2}
          options={{ title: 'Welcome - Lab 2' }}
        />
        <Stack.Screen
          name="Lab3"
          component={Lab3}
          options={{ title: 'Welcome - Lab 3' }}
        />
        <Stack.Screen
          name="Lab4"
          component={Lab4}
          options={{ title: 'Welcome - Lab 4' }}
        />
        <Stack.Screen
          name="Lab5"
          component={Lab5}
          options={{ title: 'Welcome - Lab 5' }}
        />
        <Stack.Screen
          name="Lab6"
          component={Lab6}
          options={{ title: 'Welcome - Lab 6' }}
        />
        <Stack.Screen
          name="Lab7"
          component={Lab7}
          options={{ title: 'Welcome - Lab 7' }}
        />
        <Stack.Screen
          name="Lab8"
          component={Lab8}
          options={{ title: 'Welcome - Lab 8' }}
        />
      </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default App;