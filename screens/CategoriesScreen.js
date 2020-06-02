import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
  const { navigation } = props;

  const renderGridItem = (itemData) => {
    const onSelectHandler = () => {
      navigation.navigate('CategoryMeals', {
        id: itemData.item.id,
        title: itemData.item.title,
      });
    };

    return (
      <CategoryGridTile
        onSelect={onSelectHandler}
        title={itemData.item.title}
        color={itemData.item.color}
        id={itemData.item.id}
      />
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
