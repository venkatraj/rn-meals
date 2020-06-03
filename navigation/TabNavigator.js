import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MealsNavigator from './MealsNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import FavNavigator from './FavNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = (props) => {
  const { active } = props;
  const screenOptions = ({ route }) => ({
    tabBarColor: 'blue',
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = 'ios-home';
        color = focused ? '#f54242' : 'white';
      } else if (route.name === 'Favorites') {
        iconName = 'ios-star';
        color = focused ? '#f54242' : 'white';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={22} color={color} />;
    },
  });

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      shifting={true}
      initialRouteName={active}
    >
      <Tab.Screen name="Home" component={MealsNavigator} />
      <Tab.Screen name="Favorites" component={FavNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
