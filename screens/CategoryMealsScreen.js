import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
  const { navigation, route } = props;
  const { id: categoryId } = route.params;
  const selectedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  const onSelectHandler = (props) => {
    navigation.navigate('MealDetail');
  };

  const renderMealItem = (itemData) => {
    const {
      title,
      duration,
      complexity,
      affordability,
      imageUrl,
    } = itemData.item;
    return (
      <MealItem
        onSelect={onSelectHandler}
        title={title}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        image={imageUrl}
      />
    );
  };

  return (
    <FlatList
      style={styles.screen}
      data={selectedMeals}
      renderItem={renderMealItem}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },
});

export default CategoryMealsScreen;
