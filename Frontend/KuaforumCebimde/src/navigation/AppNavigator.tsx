import React from 'react'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppointmentStack from './stacks/AppointmentStack';
import ProfileStack from './stacks/ProfileStack';
import AdminStack from './stacks/AdminStack';
import HomeStack from './stacks/HomeStack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import { styles } from './AppNavigator.styles';


const Tab = createBottomTabNavigator();


function AppNavigator() {

  const tabScreenRender = (component, tabBarLabel, focusedIcon, unfocusedIcon, headerShown = false) => (
    <Tab.Screen
      name={component.name}
      component={component}
      options={{
        tabBarLabel,
        headerShown,
        tabBarIcon: ({ color, size, focused }) => (
          <MaterialCommunityIcons
            color={color}
            size={size}
            name={focused ? focusedIcon : unfocusedIcon}
          />
        ),
      }}
    />
  );

  return (
    <Tab.Navigator initialRouteName="HomeStack" screenOptions={{
      ...styles.tab
    }}>
      {tabScreenRender(HomeStack, "Ana Sayfa", "home-circle", "home-outline")}
      {tabScreenRender(AppointmentStack, "Randevularım", "calendar-clock", "calendar-clock-outline")}
      {tabScreenRender(ProfileStack, "Profil", "account-circle", "account-circle-outline")}
      {tabScreenRender(AdminStack, "Yönetici", "shield-account", "shield-account-outline")}
    </Tab.Navigator>

  )
}


export default AppNavigator