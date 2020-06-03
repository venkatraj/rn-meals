import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import TabNavigator from './TabNavigator';
import FiltersNavigator from '../navigation/FiltersNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeBackgroundColor: '#e91e63',
          style: {
            backgroundColor: 'blue',
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{
            drawerIcon: (focused, size) => (
              <Ionicons name="md-restaurant" size={22} />
            ),
          }}
        />
        <Drawer.Screen
          name="Filters"
          component={FiltersNavigator}
          options={{
            drawerIcon: (focused, size) => <Ionicons name="md-cog" size={22} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
