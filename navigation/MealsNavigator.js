import React from 'react';
import { View, Text, ClippingRectangle } from 'react-native';
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
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'Meal Categories!!',
          }}
        />
        <Stack.Screen
          options={({ route }) => {
            return {
              id: route.params.id,
              title: route.params.title,
            };
          }}
          name="CategoryMeals"
          component={CategoryMealsScreen}
        />
        <Stack.Screen
          options={({ route }) => ({
            id: route.params.id,
            title: route.params.title,
          })}
          name="MealDetail"
          component={MealDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
