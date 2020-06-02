import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const CategoryMealsScreen = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>The Category Meals Screen</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => navigation.navigate('MealDetail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
