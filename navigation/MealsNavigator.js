import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="categories" component={CategoriesScreen} />
        <Stack.Screen name="category meals" component={CategoryMealsScreen} />
        <Stack.Screen name="meal detail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
