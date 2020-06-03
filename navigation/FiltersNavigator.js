import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FiltersScreen from '../screens/FiltersScreen';
import HeaderButtonLeft from '../components/HeaderButtonLeft';

const Stack = createStackNavigator();

const FiltersNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={({ navigation }) => ({
          title: 'Filter Meals',
          headerLeft: () => <HeaderButtonLeft navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default FiltersNavigator;
