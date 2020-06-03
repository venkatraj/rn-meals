import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const HeaderButton = (props) => {
  const onPress = () => {
    console.log('Fav!!');
  };
  return (
    <Ionicons
      onPress={onPress}
      style={{ paddingRight: 10 }}
      name="md-star"
      size={22}
    />
  );
};

export default HeaderButton;
