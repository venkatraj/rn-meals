import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const MealDetailScreen = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>The Meal Detail Screen</Text>
      <Button
        title="Go to Category Meals"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealDetailScreen;
