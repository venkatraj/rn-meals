import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const CategoriesScreen = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>The Categories Screen!</Text>
      <Button
        title="Go to Category Meals"
        onPress={() => navigation.navigate('CategoryMeals')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
