import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const MealItem = (props) => {
  const { onSelect, title, complexity, affordability, duration, image } = props;
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.gridItem}>
        <View style={styles.mealHeader}>
          <ImageBackground style={styles.mealImage} source={{ uri: image }}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.mealDetail}>
          <Text>{duration}m</Text>
          <Text>{complexity}</Text>
          <Text>{affordability}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 250,
    margin: 15,
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    overflow: 'hidden',
  },
  mealImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealHeader: {
    height: '85%',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    color: 'white',
  },
  mealDetail: {
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default MealItem;
