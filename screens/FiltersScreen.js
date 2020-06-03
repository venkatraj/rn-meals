import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  return (
    <View>
      <Text>Filters / Restrictions</Text>
      <View>
        <Text>Gluten-free</Text>
        <Switch
          trackColor={{ true: 'red' }}
          thumbColor="red"
          value={isGlutenFree}
          onValueChange={(newValue) => setIsGlutenFree(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FiltersScreen;
