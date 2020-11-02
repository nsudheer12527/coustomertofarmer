// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Drawer.Navigator
      >
      <Drawer.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Drawer.Screen
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Drawer.Screen
       name="Dashboard" 
       component={Dashboard} 
       
      />
      
      </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
       <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
          <Drawer.Screen
          name="Mystack"
          options={{ drawerLabel: 'HOME' }}
          component={MyStack} />
          </Drawer.Navigator>
    </NavigationContainer>
  );
}