import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../res';
const BoxRelatedItems = ({image, name, price, bgColor}) => {
  return (
    <TouchableOpacity style={styles.container(bgColor)}>
      <View style={styles.wrapperImage}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <View style={styles.rowDetail}>
          <Text>{name}</Text>
          <Text style={styles.textPrice}>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BoxRelatedItems;

const styles = StyleSheet.create({
  container: bgcolor => ({
    backgroundColor: bgcolor,
    width: 120,
    height: 120,
    borderRadius: 12,
    padding: 5,
    marginRight: 15,
  }),
  wrapperImage: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  rowDetail: {
    backgroundColor: colors.white,
    height: 25,
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  textPrice: {
    fontSize: 12,
    color: colors.black,
  },
});
