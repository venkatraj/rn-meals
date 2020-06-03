import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedbackBase,
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const CategoryGridTile = (props) => {
  const { title, color, onSelect } = props;
  return (
    <TouchableOpacity
      style={{ ...styles.gridItem, backgroundColor: color }}
      onPress={onSelect}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    elevation: 3,
    padding: 15,
  },
  title: {
    fontFamily: 'open-sans-bold',
  },
});

export default CategoryGridTile;
