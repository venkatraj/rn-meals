import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = (props) => {
  const { navigation, route } = props;
  const { id } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === id);
  const { title, complexity, duration, affordability } = selectedMeal;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{duration} minutes</Text>
      <Button
        title="Go to Category Meals"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealDetailScreen;
