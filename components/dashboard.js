// React Navigate Drawer with Bottom Tab – Example using React Navigation V5 //

import 'react-native-gesture-handler';

import * as React from 'react';

import {
  Image,
  TouchableOpacity,
  View,Component
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons ,FontAwesome} from '@expo/vector-icons';

import ExploreScreen from '../pages/ExploreScreen';
import HomeScreen from '../pages/HomeScreen';
import SettingScreen from '../pages/SettingScreen';
import Learn from '../pages/Learn';
import Profile from '../pages/Profile';
import data from '../screens/AddUserScreen'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={require('../assets/drawerWhite.png') }
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  
  switch (routeName) {
    case 'HomeScreen':
      return 'Home';
    case 'SettingScreen':
      return 'FARMER';
    case 'ExploreScreen':
      return 'CUSTOMER';
    case 'LEARN':
      return 'HOE TO USE';
    case 'Profile':
       return 'Profile'
       
  }
}

function BottomTabStack({ navigation }) {
  return (
    <Tab.Navigator
    initialRouteName="HomeScreen"
    tabBarOptions={{
      title:'red',
      activeTintColor: 'black',
      style: {
        backgroundColor: 'white'
      }
    }}
  >
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={'black'} size={size} />
        ),
      }}
    />
    <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: 'Farmer', //Set Header Title
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="flower" color={'black'} size={size} />
          ),

        }} />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          title: 'CustomerS', //Set Header Title
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="users" size={24} color="black" />
          ),

        }} />
    
  </Tab.Navigator>
  
    
  );
}

function HomeScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HOME"
        component={BottomTabStack}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#0EF8F6', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
}

function SettingScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#0EF8F6', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: 'Farmer', //Set Header Title

        }} />
    </Stack.Navigator>
  );
}
function ExploreScreenstack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ExploreScreen"
      screenOptions={{
        headerleft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#25E0E7', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          title: 'customer', //Set Header Title

        }} />
    </Stack.Navigator>
  );
}
function Learnstack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="LEARN"
      screenOptions={{
        headerleft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#25E0E7', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="Learn"
        component={Learn}
        options={{
          title: 'LOCATE US', //Set Header Title

        }} />
    </Stack.Navigator>
  );
}
function Profilestack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerleft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#25E0E7', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'PROFILE', //Set Header Title

        }} />
    </Stack.Navigator>
  );
}
function datastack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerleft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#25E0E7', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="Profile"
        component={data}
        options={{
          title: 'PROFILE', //Set Header Title

        }} />
    </Stack.Navigator>
  );
}
function App() {
  return (
  
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{ drawerLabel: 'HOME' }}
          component={HomeScreenStack} />
        <Drawer.Screen
          name="SettingScreenStack"
          options={{ drawerLabel: 'FARMER' }}
          component={SettingScreenStack} />
      <Drawer.Screen
          name=" ExploreScreenstack"
          options={{ drawerLabel: 'CUSTOMER' }}
          component={ ExploreScreenstack} />
      <Drawer.Screen
          name="Learnstack"
          options={{ drawerLabel: 'LOCATE US' }}
          component={ Learnstack } />
        <Drawer.Screen
          name="Profilestack"
          options={{ drawerLabel: 'PROFILE' }}
          component={Profilestack} /> 
        
      </Drawer.Navigator>
      

    
  );
}

export default App;