import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const HeaderButtonLeft = (props) => {
  const { navigation } = props;
  const onPress = () => {
    navigation.openDrawer();
  };
  return (
    <Ionicons
      onPress={onPress}
      style={{ paddingLeft: 10 }}
      name="md-menu"
      size={22}
    />
  );
};

export default HeaderButtonLeft;
