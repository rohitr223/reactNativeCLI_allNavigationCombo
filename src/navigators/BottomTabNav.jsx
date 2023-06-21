import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
// Screens
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Track from '../screens/Track';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return ( 
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Track') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#AFD3E2',
          tabBarStyle:{
            backgroundColor: '#262A56',
          },
        })}
    >
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        headerShown: false
      }}
      />
      <Tab.Screen 
      name="Cart" 
      component={Cart} 
      options={{
        headerShown: false
      }}
      />
      <Tab.Screen 
      name="Track" 
      component={Track} 
      options={{
        headerShown: false
      }}
      />
      <Tab.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        headerShown: false
      }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNav