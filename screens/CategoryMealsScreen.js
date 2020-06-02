import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
  const { navigation, route } = props;
  const { id: categoryId } = route.params;
  const selectedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  const renderMealItem = (itemData) => {
    const {
      id,
      title,
      duration,
      complexity,
      affordability,
      imageUrl,
    } = itemData.item;

    const onSelectHandler = () => {
      navigation.navigate('MealDetail', {
        id,
        title,
      });
    };

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
