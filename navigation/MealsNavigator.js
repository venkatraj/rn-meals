import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import HeaderButtonRight from '../components/HeaderButtonRight';
import HeaderButtonLeft from '../components/HeaderButtonLeft';

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({ navigation }) => ({
          title: 'Meal Categories!!',
          headerLeft: () => <HeaderButtonLeft navigation={navigation} />,
        })}
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
          headerRight: () => <HeaderButtonRight />,
        })}
        name="MealDetail"
        component={MealDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigator;
