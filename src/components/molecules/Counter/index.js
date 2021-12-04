import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, IC_Btn_Min, IC_Btn_Plus} from '../../../res';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    onValueChange(value);
  }, [onValueChange, value]);

  const onCount = type => {
    let result = value;
    if (type === 'positive') {
      result = value + 1;
    }
    if (type === 'negative') {
      result = value - 1;
    }
    setValue(result);
    onValueChange(result);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCount('negative')}>
        <IC_Btn_Min />
      </TouchableOpacity>
      <Text style={{marginHorizontal: 10, color: colors.black}}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('positive')}>
        <IC_Btn_Plus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
