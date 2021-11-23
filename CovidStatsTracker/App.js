import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Authenticate from './screens/Authenticate';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Symptoms from './screens/Symptoms';
import Help from './screens/Help';
import More from './screens/More';
import CovidHome from './screens/CovidHome';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
   
      <Drawer.Navigator initialRouteName="Hello"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#C8A2C8',
          width: 240,
        },
        drawerLabelStyle: {
          fontWeight: 'bold',
        }
      }}
    >
        <Drawer.Screen name="Home" component={Home} />
	      <Drawer.Screen name="COVID-19 Statistics" component={CovidHome} />
        <Drawer.Screen name="Symptoms" component={Symptoms} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="More About COVID" component={More} />
        
      </Drawer.Navigator>
   
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Authenticate" component={Authenticate} />
        <Stack.Screen name="Home" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
export default App;
