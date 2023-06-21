import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
// bottom tab navigator
import BottomTabNav from './BottomTabNav';
// drawer header
import DrawerHeader from './DrawerHeader';
// icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
//Screens
import Favourites from '../screens/Favourites';
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator 
      initialRouteName='Meals' 
      drawerContent={(props) => <DrawerHeader {...props}/>}
      screenOptions={{
        headerTitle: 'Online Food',
        headerTitleStyle:{
          fontWeight: '800',
          color: '#eee',
        },
        headerStyle:{
          backgroundColor: '#262A56',
        },
        headerTintColor: '#eee',
        drawerActiveTintColor: '#D14D72',
      }}
    >
      <Drawer.Screen 
        name="Meals" 
        component={BottomTabNav} 
        options={{
          title: 'Explore Meals',
          drawerIcon: ({color, size}) => (
            <Ionicons name="fast-food-outline" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen 
        name="Favourites" 
        component={Favourites} 
        options={{
          title: 'Your Favourites',
          drawerIcon: ({color, size}) => (
            <MaterialIcons name="add-to-home-screen" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen 
        name="Logout" 
        component={Logout} 
        options={{
          title: 'Logout',
          drawerIcon: ({color, size}) => (
            <AntDesign name="logout" size={size} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNav