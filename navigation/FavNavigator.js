import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MealDetailScreen from '../screens/MealDetailScreen';
import HeaderButtonRight from '../components/HeaderButtonRight';
import HeaderButtonLeft from '../components/HeaderButtonLeft';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();

const FavNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({ navigation }) => ({
          title: 'Favorites',
          headerLeft: () => <HeaderButtonLeft navigation={navigation} />,
        })}
      />
      <Stack.Screen
        options={({ route }) => ({
          id: route.params.id,
          title: route.params.title,
          headerRight: () => <HeaderButtonRight />,
        })}
        name="MealDetail"
        component={MealDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default FavNavigator;
