import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddUserScreen from './AddUserScreen';
import UserScreen from './UserScreen';
import UserDetailScreen from './UserDetailScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#008080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="AddUserScreen"
        component={AddUserScreen}
        options={{ title: 'Add User' }}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ title: 'Users List' }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: 'User Details' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    
      <MyStack />
    
  );
}