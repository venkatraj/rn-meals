import React from 'react';
import {
  Button,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CATEGORIES from '../data/dummy-data';

const CategoriesScreen = (props) => {
  const { navigation } = props;

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate('CategoryMeals', {
            title: itemData.item.title,
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
